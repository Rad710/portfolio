import type { Metadata } from "next";
import { ThemeParkCanvas } from "@/components/ui/theme-park-canvas";

// A standalone page for testing the WebAssembly build on its own, away from the
// landing page. Kept out of the sitemap until the in-page controls are wired up.
export const metadata: Metadata = {
    title: "Theme Park — WebAssembly test",
    robots: { index: false, follow: false },
};

export default function ThemeParkPage() {
    return (
        <main className="mx-auto max-w-5xl px-6 py-16">
            <h1 className="font-display text-3xl text-foreground">Theme Park</h1>
            <p className="mt-3 max-w-2xl text-muted">
                Computer-graphics final project: a rollercoaster on a spline track, a water
                simulation, and hand-written GLSL shaders. Originally C++ with FLTK, OpenGL 4.6 and
                OpenAL on Windows; this is the same code compiled to WebAssembly.
            </p>
            <div className="mt-8">
                <ThemeParkCanvas />
            </div>
        </main>
    );
}
