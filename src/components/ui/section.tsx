"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export function Section({
    id,
    className,
    children,
}: {
    id?: string;
    className?: string;
    children: React.ReactNode;
}) {
    return (
        <section
            id={id}
            className={cn("mx-auto w-full max-w-5xl scroll-mt-24 px-6 py-20 sm:py-28", className)}
        >
            {children}
        </section>
    );
}

/** Fade + rise on scroll into view (once). Disabled under reduced-motion. */
export function Reveal({
    children,
    delay = 0,
    className,
}: {
    children: React.ReactNode;
    delay?: number;
    className?: string;
}) {
    return (
        <motion.div
            className={className}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
        >
            {children}
        </motion.div>
    );
}

export function SectionHeading({
    eyebrow,
    title,
    className,
}: {
    eyebrow?: string;
    title: string;
    className?: string;
}) {
    return (
        <div className={cn("mb-12", className)}>
            {eyebrow ? <p className="eyebrow mb-3">{eyebrow}</p> : null}
            <h2 className="font-display text-3xl text-foreground sm:text-4xl">{title}</h2>
        </div>
    );
}
