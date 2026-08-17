/** Shapes for the structured content read via `t(key, { returnObjects: true })`. */

export type ExperienceItem = {
    role: string;
    company: string;
    location: string;
    period: string;
    summary: string;
    bullets: string[];
    tech: string[];
};

export type ProjectItem = {
    id: string;
    name: string;
    tagline: string;
    description?: string;
    tech: string[];
    live?: string;
    code?: string;
    /** Shown next to the live link so visitors can sign in and look around. */
    demo?: { user: string; password: string };
    featured: boolean;
    image?: string;
    /** Plays in the card's media slot instead of `image`, which becomes its poster. */
    video?: string;
    /** Internal route holding a runnable demo, e.g. "/theme-park". */
    page?: string;
    /** Renders the playable WebAssembly build in place of a screenshot. */
    playable?: boolean;
};

export type SkillGroup = {
    label: string;
    items: string[];
};

export type LanguageItem = {
    name: string;
    level: string;
};
