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
    featured: boolean;
    image?: string;
};

export type SkillGroup = {
    label: string;
    items: string[];
};

export type LanguageItem = {
    name: string;
    level: string;
};
