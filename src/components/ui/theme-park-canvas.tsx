"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import {
    type Bridge,
    DEFAULT_OVERRIDES,
    ThemeParkControls,
    type Widget,
} from "@/components/ui/theme-park-controls";

/**
 * Runs the WebAssembly build of the computer-graphics theme park
 * (github.com/Rad710/theme-park).
 *
 * The C++ program is an SDL2 + OpenGL app. `theme-park.js` is emscripten's
 * loader, served straight from /public and injected as a plain script because
 * bundlers rewrite the `import.meta.url` it uses to find the .wasm/.data.
 * Nothing is fetched until the visitor presses play — the bundle is ~5.9 MB.
 */

const BASE = "/games/theme-park";

type ThemeParkModule = {
    ccall: (
        name: string,
        returnType: string | null,
        argTypes: string[],
        args: unknown[],
    ) => unknown;
};
declare global {
    interface Window {
        createThemePark?: (options: Record<string, unknown>) => Promise<ThemeParkModule>;
    }
}

function loadLoader(): Promise<void> {
    if (window.createThemePark) return Promise.resolve();
    return new Promise((resolve, reject) => {
        const script = document.createElement("script");
        script.src = `${BASE}/theme-park.js`;
        script.async = true;
        script.onload = () => resolve();
        script.onerror = () => reject(new Error("could not load the theme park"));
        document.body.appendChild(script);
    });
}

type Status = "idle" | "loading" | "running" | "error";

export function ThemeParkCanvas() {
    const { t } = useTranslation();
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const moduleRef = useRef<ThemeParkModule | null>(null);
    const defaultsAppliedRef = useRef(false);
    const [status, setStatus] = useState<Status>("idle");
    const [log, setLog] = useState<string[]>([]);
    const [widgets, setWidgets] = useState<Widget[]>([]);
    const [frameMs, setFrameMs] = useState<number | null>(null);

    // Poll the smoothed frame time so the real cost is visible on real hardware.
    useEffect(() => {
        if (status !== "running") return;
        const id = window.setInterval(() => {
            const mod = moduleRef.current;
            if (!mod) return;
            const ms = mod.ccall("themepark_frame_ms", "number", [], []) as number;
            if (ms > 0) setFrameMs(ms);
        }, 500);
        return () => window.clearInterval(id);
    }, [status]);

    // Re-read the panel from C++ so toggles/radios reflect the real widget state.
    const refreshWidgets = useCallback(() => {
        const mod = moduleRef.current;
        if (!mod) return;
        try {
            const json = mod.ccall("themepark_ui_json", "string", [], []) as string;
            const parsed = JSON.parse(json) as Widget[];

            // Push the web defaults into C++ once, so the sim actually starts there
            // rather than just displaying a different number.
            if (!defaultsAppliedRef.current) {
                defaultsAppliedRef.current = true;
                for (const w of parsed) {
                    const value = DEFAULT_OVERRIDES[w.label];
                    if (value !== undefined && w.value !== value) {
                        mod.ccall(
                            "themepark_number_set",
                            null,
                            ["number", "number"],
                            [w.id, value],
                        );
                    }
                }
                const refreshed = mod.ccall("themepark_ui_json", "string", [], []) as string;
                setWidgets(JSON.parse(refreshed) as Widget[]);
                return;
            }
            setWidgets(parsed);
        } catch (err) {
            console.error("could not read the control panel", err);
        }
    }, []);

    const bridge: Bridge = {
        click: (id) => moduleRef.current?.ccall("themepark_button_click", null, ["number"], [id]),
        setToggle: (id, value) =>
            moduleRef.current?.ccall(
                "themepark_button_set",
                null,
                ["number", "number"],
                [id, value],
            ),
        setNumber: (id, value) =>
            moduleRef.current?.ccall(
                "themepark_number_set",
                null,
                ["number", "number"],
                [id, value],
            ),
        select: (id, line) =>
            moduleRef.current?.ccall(
                "themepark_browser_select",
                null,
                ["number", "number"],
                [id, line],
            ),
    };

    const start = useCallback(async () => {
        if (status !== "idle") return;
        setStatus("loading");
        const lines: string[] = [];
        const push = (line: string) => {
            lines.push(line);
            setLog([...lines].slice(-60));
        };

        try {
            await loadLoader();
            const createThemePark = window.createThemePark;
            if (!createThemePark || !canvasRef.current) throw new Error("loader did not register");

            const mod = await createThemePark({
                canvas: canvasRef.current,
                // The .wasm and .data sit beside the loader, not beside this page.
                locateFile: (path: string) => `${BASE}/${path}`,
                print: push,
                printErr: push,
                // SDL reads key events from the canvas, so stop the page from
                // scrolling when the visitor drives the camera with WASD/arrows.
                keyboardListeningElement: canvasRef.current,
            });
            moduleRef.current = mod;
            // Handy for poking at the layer from the browser console.
            (window as unknown as { __tpmod?: ThemeParkModule }).__tpmod = mod;
            setStatus("running");
            refreshWidgets();
        } catch (err) {
            console.error(err);
            setStatus("error");
        }
    }, [status, refreshWidgets]);

    return (
        <div className="overflow-hidden rounded-xl border border-border bg-surface">
            <p className="border-b border-border bg-accent/5 px-4 py-3 text-[0.8rem] leading-relaxed text-muted">
                {t("projects.portNote")}
            </p>
            <div className="flex items-center justify-between gap-2 border-b border-border px-3 py-2">
                <span className="font-mono text-[0.75rem] uppercase tracking-[0.14em] text-faint">
                    Theme Park — C++ / OpenGL → WebAssembly
                </span>
                {status === "running" ? (
                    <span className="flex items-center gap-3 font-mono text-[0.7rem] text-faint">
                        {frameMs ? (
                            <span title="smoothed frame time">
                                {(1000 / frameMs).toFixed(1)} fps · {frameMs.toFixed(0)} ms
                            </span>
                        ) : null}
                        <span>
                            right-drag: orbit · scroll: zoom · left-click a red point to drag it
                        </span>
                    </span>
                ) : null}
            </div>

            <div className="relative bg-black">
                {/* 590x590 is the GL viewport TrainView is laid out with; matching it
                    keeps the aspect ratio and projection correct. */}
                <canvas
                    // SDL and emscripten's html5 API look the canvas up as "#canvas".
                    id="canvas"
                    ref={canvasRef}
                    width={590}
                    height={590}
                    tabIndex={0}
                    className="mx-auto block h-auto w-full max-w-[590px] outline-none"
                    onContextMenu={(e) => e.preventDefault()}
                />

                {status !== "running" ? (
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-surface/90 px-6 text-center">
                        <p className="max-w-md text-sm text-muted">
                            {status === "error"
                                ? "The theme park could not be loaded."
                                : "A rollercoaster, water simulation and custom shaders, written in C++ with OpenGL and compiled to WebAssembly. About 5.9 MB, downloaded only when you press play."}
                        </p>
                        <button
                            type="button"
                            onClick={() => void start()}
                            disabled={status === "loading"}
                            className="inline-flex items-center gap-1.5 rounded-full bg-accent px-4 py-2 text-xs font-medium text-background transition-colors hover:bg-accent-strong disabled:opacity-60"
                        >
                            {status === "loading" ? "Loading…" : "Play"}
                        </button>
                    </div>
                ) : null}
            </div>

            {status === "running" && widgets.length > 0 ? (
                <ThemeParkControls widgets={widgets} bridge={bridge} onChanged={refreshWidgets} />
            ) : null}

            {log.length > 0 ? (
                <pre className="max-h-32 overflow-y-auto border-t border-border px-4 py-2 font-mono text-[0.68rem] leading-relaxed text-faint">
                    {log.join("\n")}
                </pre>
            ) : null}
        </div>
    );
}
