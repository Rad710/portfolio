import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: "https://rad710.com",
            changeFrequency: "monthly",
            priority: 1,
        },
    ];
}
