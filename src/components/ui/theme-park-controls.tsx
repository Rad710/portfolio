"use client";

// The control panel. FLTK draws its own widgets and there is no FLTK to draw
// them with in the browser, so the C++ side registers every widget and exposes
// it as JSON (see src/Compat/fltk_shim.cpp). These are real HTML controls that
// write values back and fire the same FLTK callbacks the native build would.

export type Widget = {
    id: number;
    kind: "button" | "toggle" | "radio" | "slider" | "counter" | "browser" | "output";
    label: string;
    value?: number;
    min?: number;
    max?: number;
    step?: number;
    items?: string[];
    selected?: number;
    text?: string;
    /** Radio buttons only exclude within their own FLTK group. */
    group?: number;
};

export type Bridge = {
    click: (id: number) => void;
    setToggle: (id: number, value: number) => void;
    setNumber: (id: number, value: number) => void;
    select: (id: number, line: number) => void;
};

/** FLTK encodes its arrow glyphs as "@>>" / "@<<". */
function prettyLabel(label: string): string {
    if (label === "@>>") return "Forward ▶▶";
    if (label === "@<<") return "◀◀ Back";
    return label.startsWith("@") ? label.slice(1) : label;
}

const BTN =
    "rounded-md border border-border px-2.5 py-1 text-[0.7rem] font-medium text-foreground transition-colors hover:border-accent hover:text-accent";
const BTN_ON =
    "rounded-md border border-accent bg-accent px-2.5 py-1 text-[0.7rem] font-medium text-background";
const LABEL = "font-mono text-[0.62rem] uppercase tracking-[0.12em] text-faint";

// Web-only trimming. The native Windows build keeps every control; these are
// hidden here because they cannot work in a browser or are too slow to be usable.
//
//   Load / Save  need a native file dialog (fl_file_chooser returns null here)
//   Texture Type / Effect  re-read the framebuffer at 2x and filter on the CPU
//   Smoke / Reset  removed by preference
const HIDDEN_CONTROLS = new Set(["Texture Type", "Effect", "Smoke", "Save", "Load", "Reset"]);

/** Individual dropdown entries to drop, keyed by the control's label. */
const HIDDEN_OPTIONS: Record<string, Set<string>> = {
    Lighting: new Set(["Directional"]),
};

/** Caps on slider ranges, where the full range is too expensive on the web. */
const MAX_OVERRIDES: Record<string, number> = {
    Subdivision: 50,
};

/** Applied once when the panel first loads, so the sim starts from these. */
export const DEFAULT_OVERRIDES: Record<string, number> = {
    amplitude: 2,
};

export function ThemeParkControls({
    widgets,
    bridge,
    onChanged,
}: {
    widgets: Widget[];
    bridge: Bridge;
    /** Re-read state from C++ after any interaction, so radios/toggles stay in sync. */
    onChanged: () => void;
}) {
    const act = (fn: () => void) => {
        fn();
        onChanged();
    };

    const shown = widgets.filter((w) => !HIDDEN_CONTROLS.has(w.label));

    const pushButtons = shown.filter((w) => w.kind === "button");
    const toggles = shown.filter((w) => w.kind === "toggle");
    const radios = shown.filter((w) => w.kind === "radio");
    const numbers = shown.filter((w) => w.kind === "slider" || w.kind === "counter");
    const browsers = shown.filter((w) => w.kind === "browser");

    // Radios are grouped by their FLTK parent so each group excludes on its own.
    const radioGroups = new Map<number, Widget[]>();
    for (const r of radios) {
        const key = r.group ?? 0;
        const list = radioGroups.get(key);
        if (list) list.push(r);
        else radioGroups.set(key, [r]);
    }

    return (
        <div className="grid gap-4 border-t border-border p-4 sm:grid-cols-2">
            {toggles.length > 0 || radioGroups.size > 0 ? (
                <div className="space-y-3">
                    {toggles.length > 0 ? (
                        <div>
                            <p className={LABEL}>Playback</p>
                            <div className="mt-1.5 flex flex-wrap gap-1.5">
                                {toggles.map((w) => (
                                    <button
                                        key={w.id}
                                        type="button"
                                        aria-pressed={!!w.value}
                                        onClick={() =>
                                            act(() => bridge.setToggle(w.id, w.value ? 0 : 1))
                                        }
                                        className={w.value ? BTN_ON : BTN}
                                    >
                                        {prettyLabel(w.label)}
                                    </button>
                                ))}
                            </div>
                        </div>
                    ) : null}

                    {[...radioGroups.entries()].map(([key, group]) => (
                        <div key={key}>
                            <p className={LABEL}>Camera</p>
                            <div className="mt-1.5 flex flex-wrap gap-1.5">
                                {group.map((w) => (
                                    <button
                                        key={w.id}
                                        type="button"
                                        aria-pressed={!!w.value}
                                        onClick={() => act(() => bridge.setToggle(w.id, 1))}
                                        className={w.value ? BTN_ON : BTN}
                                    >
                                        {prettyLabel(w.label)}
                                    </button>
                                ))}
                            </div>
                        </div>
                    ))}

                    {pushButtons.length > 0 ? (
                        <div>
                            <p className={LABEL}>Actions</p>
                            <div className="mt-1.5 flex flex-wrap gap-1.5">
                                {pushButtons.map((w) => (
                                    <button
                                        key={w.id}
                                        type="button"
                                        onClick={() => act(() => bridge.click(w.id))}
                                        className={BTN}
                                    >
                                        {prettyLabel(w.label)}
                                    </button>
                                ))}
                            </div>
                        </div>
                    ) : null}
                </div>
            ) : null}

            <div className="space-y-3">
                {numbers.length > 0 ? (
                    <div className="space-y-2">
                        {numbers.map((w) => (
                            <label key={w.id} className="block">
                                <span className="flex items-baseline justify-between">
                                    <span className={LABEL}>{prettyLabel(w.label)}</span>
                                    <span className="font-mono text-[0.65rem] text-muted">
                                        {(w.value ?? 0).toFixed(w.kind === "counter" ? 0 : 2)}
                                    </span>
                                </span>
                                <input
                                    type="range"
                                    min={w.min ?? 0}
                                    max={Math.min(w.max ?? 1, MAX_OVERRIDES[w.label] ?? Infinity)}
                                    step={w.step && w.step > 0 ? w.step : 0.01}
                                    value={w.value ?? 0}
                                    onChange={(e) =>
                                        act(() => bridge.setNumber(w.id, Number(e.target.value)))
                                    }
                                    className="mt-1 w-full accent-[var(--color-accent,#e0a33e)]"
                                />
                            </label>
                        ))}
                    </div>
                ) : null}

                {browsers.map((w) => {
                    // Keep FLTK's 1-based line numbers on the values, so dropping an
                    // entry does not shift what C++ receives.
                    const hidden = HIDDEN_OPTIONS[w.label];
                    const options = (w.items ?? [])
                        .map((label, index) => ({ label, line: index + 1 }))
                        .filter((o) => !hidden?.has(o.label));
                    const selected = options.some((o) => o.line === w.selected)
                        ? w.selected
                        : options[0]?.line;
                    return (
                        <label key={w.id} className="block">
                            <span className={LABEL}>{prettyLabel(w.label)}</span>
                            <select
                                value={selected ?? 0}
                                onChange={(e) =>
                                    act(() => bridge.select(w.id, Number(e.target.value)))
                                }
                                className="mt-1 w-full rounded-md border border-border bg-surface px-2 py-1 text-[0.72rem] text-foreground"
                            >
                                {options.map((o) => (
                                    <option key={o.label} value={o.line}>
                                        {o.label}
                                    </option>
                                ))}
                            </select>
                        </label>
                    );
                })}
            </div>
        </div>
    );
}
