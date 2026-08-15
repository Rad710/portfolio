"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

/**
 * Runs the WebAssembly build of the text adventure (github.com/Rad710/text-based-game).
 *
 * The C++ program is a plain console app: it writes to stdout and blocks on
 * std::getline. `game.js` is emscripten's loader, served straight from /public
 * because bundlers rewrite the `import.meta.url` it uses to find the .wasm.
 * The wasm is only fetched once the visitor presses play.
 */

type EmscriptenFS = {
    init: (
        stdin: null,
        stdout: (byte: number | null) => void,
        stderr: (byte: number | null) => void,
    ) => void;
};

type GameModule = {
    FS: EmscriptenFS;
    callMain: (args: string[]) => void;
};

type GameOptions = {
    preRun: ((module: GameModule) => void)[];
    readLine: () => Promise<string>;
};

declare global {
    interface Window {
        createGame?: (options: GameOptions) => Promise<GameModule>;
    }
}

const BASE = "/games/fallen-kingdom";

const ESC = "\u001b";
/** Splits output into text and the ANSI escapes between it. */
const ANSI = new RegExp(`(${ESC}\\[[0-9;]*[A-Za-z])`);

/** A run of output; `accent` marks text the program coloured with ANSI. */
type Segment = { text: string; accent: boolean };

function loadLoader(): Promise<void> {
    if (window.createGame) return Promise.resolve();
    return new Promise((resolve, reject) => {
        const script = document.createElement("script");
        script.src = `${BASE}/game.js`;
        script.async = true;
        script.onload = () => resolve();
        script.onerror = () => reject(new Error("could not load the game"));
        document.body.appendChild(script);
    });
}

export function GameConsole() {
    const { t } = useTranslation();
    const [status, setStatus] = useState<"idle" | "loading" | "running" | "error">("idle");
    const [segments, setSegments] = useState<Segment[]>([]);
    const [command, setCommand] = useState("");
    const [awaitingInput, setAwaitingInput] = useState(false);

    const screenRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);
    const segmentsRef = useRef<Segment[]>([]);
    const bytesRef = useRef<number[]>([]);
    const accentRef = useRef(false);
    const resolveLineRef = useRef<((line: string) => void) | null>(null);
    const decoderRef = useRef<TextDecoder | null>(null);

    // Keep the newest output in view.
    // biome-ignore lint/correctness/useExhaustiveDependencies: segments is the trigger, not a value the effect reads
    useEffect(() => {
        const screen = screenRef.current;
        if (screen) screen.scrollTop = screen.scrollHeight;
    }, [segments]);

    const push = useCallback((text: string) => {
        if (!text) return;
        const list = segmentsRef.current;
        const last = list.at(-1);
        if (last && last.accent === accentRef.current) last.text += text;
        else list.push({ text, accent: accentRef.current });
    }, []);

    /** The game emits only ESC[2J / ESC[H (clear) and ESC[1;33m / ESC[0m (colour). */
    const write = useCallback(
        (chunk: string) => {
            for (const part of chunk.split(ANSI)) {
                if (!part) continue;
                if (part[0] !== ESC) {
                    push(part);
                    continue;
                }
                const code = part[part.length - 1];
                if (code === "J" || code === "H") {
                    segmentsRef.current = [];
                    accentRef.current = false;
                } else if (code === "m") {
                    const sgr = part.slice(2, -1);
                    accentRef.current = sgr !== "" && sgr !== "0";
                }
            }
            setSegments([...segmentsRef.current]);
        },
        [push],
    );

    /** stdout arrives a byte at a time; `null` means flush. */
    const onByte = useCallback(
        (byte: number | null) => {
            if (byte !== null) {
                bytesRef.current.push(byte);
                if (byte !== 10) return; // buffer until newline
            }
            if (!bytesRef.current.length) return;
            const bytes = Uint8Array.from(bytesRef.current);
            bytesRef.current = [];
            decoderRef.current ??= new TextDecoder();
            write(decoderRef.current.decode(bytes, { stream: true }));
        },
        [write],
    );

    const readLine = useCallback(
        () =>
            new Promise<string>((resolve) => {
                onByte(null); // ">> Command: " has no newline to flush it
                resolveLineRef.current = resolve;
                setAwaitingInput(true);
                inputRef.current?.focus({ preventScroll: true });
            }),
        [onByte],
    );

    const start = useCallback(async () => {
        segmentsRef.current = [];
        bytesRef.current = [];
        accentRef.current = false;
        resolveLineRef.current = null;
        decoderRef.current = null;
        setSegments([]);
        setCommand("");
        setAwaitingInput(false);
        setStatus("loading");

        try {
            await loadLoader();
            const createGame = window.createGame;
            if (!createGame) throw new Error("loader did not register");
            const game = await createGame({
                preRun: [(module) => module.FS.init(null, onByte, onByte)],
                readLine,
            });
            setStatus("running");
            game.callMain([]);
        } catch {
            setStatus("error");
        }
    }, [onByte, readLine]);

    const submit = (event: React.FormEvent) => {
        event.preventDefault();
        const resolve = resolveLineRef.current;
        if (!resolve) return;
        resolveLineRef.current = null;
        setAwaitingInput(false);
        write(`${command}\n`); // the program never echoes its input
        setCommand("");
        resolve(command);
    };

    const idle = status === "idle";

    return (
        <div className="overflow-hidden rounded-xl border border-border bg-surface">
            <div className="flex items-center justify-between gap-2 border-b border-border px-3 py-2">
                <span className="flex items-center gap-2">
                    <span className="size-2.5 rounded-full bg-accent" aria-hidden />
                    <span className="font-mono text-[0.75rem] uppercase tracking-[0.14em] text-faint">
                        {t("projects.game.title")}
                    </span>
                </span>
                {!idle ? (
                    <button
                        type="button"
                        onClick={() => void start()}
                        className="rounded font-mono text-[0.75rem] uppercase tracking-[0.14em] text-faint transition-colors hover:text-accent"
                    >
                        {t("projects.game.restart")}
                    </button>
                ) : null}
            </div>

            <div className="relative">
                <div
                    ref={screenRef}
                    role="log"
                    aria-live="polite"
                    aria-label={t("projects.game.title")}
                    className="h-[22rem] overflow-y-auto whitespace-pre-wrap break-words bg-background/40 p-4 font-mono text-[0.78rem] leading-relaxed text-foreground/90 sm:p-5"
                >
                    {segments.map((segment, index) => (
                        <span
                            // biome-ignore lint/suspicious/noArrayIndexKey: append-only log, reset wholesale
                            key={index}
                            className={segment.accent ? "font-semibold text-accent" : undefined}
                        >
                            {segment.text}
                        </span>
                    ))}
                </div>

                {idle || status === "loading" || status === "error" ? (
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-surface/90 px-6 text-center">
                        <p className="max-w-sm text-sm text-muted">
                            {status === "error"
                                ? t("projects.game.error")
                                : t("projects.game.blurb")}
                        </p>
                        <button
                            type="button"
                            onClick={() => void start()}
                            disabled={status === "loading"}
                            className="inline-flex items-center gap-1.5 rounded-full bg-accent px-4 py-2 text-xs font-medium text-background transition-colors hover:bg-accent-strong disabled:opacity-60"
                        >
                            {status === "loading"
                                ? t("projects.game.loading")
                                : status === "error"
                                  ? t("projects.game.retry")
                                  : t("projects.game.play")}
                        </button>
                    </div>
                ) : null}
            </div>

            <form
                onSubmit={submit}
                className="flex items-center gap-2 border-t border-border px-4 py-2.5"
            >
                <span className="font-mono text-sm text-accent" aria-hidden>
                    ›
                </span>
                <label className="sr-only" htmlFor="game-command">
                    {t("projects.game.inputLabel")}
                </label>
                <input
                    id="game-command"
                    ref={inputRef}
                    value={command}
                    onChange={(event) => setCommand(event.target.value)}
                    disabled={!awaitingInput}
                    placeholder={awaitingInput ? t("projects.game.hint") : ""}
                    autoComplete="off"
                    autoCapitalize="off"
                    spellCheck={false}
                    className="min-w-0 flex-1 bg-transparent font-mono text-[0.78rem] text-foreground outline-none placeholder:text-faint"
                />
            </form>
        </div>
    );
}
