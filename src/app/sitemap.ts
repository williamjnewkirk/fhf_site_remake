import { MetadataRoute } from "next";
import { services, industries } from "@/lib/data";

export const dynamic = "force-static";

const BASE_URL = "https://fhf-cpa.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    // Core pages
    { url: BASE_URL, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${BASE_URL}/what-we-do`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/who-we-serve`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/who-we-are`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    // Service detail pages
    ...services.map((s) => ({
      url: `${BASE_URL}/what-we-do/${s.id}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.85,
    })),
    // Industry detail pages
    ...industries.map((i) => ({
      url: `${BASE_URL}/who-we-serve/${i.id}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.85,
    })),
    // Who We Are sub-pages
    { url: `${BASE_URL}/our-commitment`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/our-history`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/team`, lastModified: now, changeFrequency: "monthly", priority: 0.75 },
    { url: `${BASE_URL}/locations`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/bdo-alliance`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    // Resources
    { url: `${BASE_URL}/news`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${BASE_URL}/case-studies`, lastModified: now, changeFrequency: "monthly", priority: 0.75 },
    { url: `${BASE_URL}/resources`, lastModified: now, changeFrequency: "weekly", priority: 0.65 },
    // Careers
    { url: `${BASE_URL}/careers`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
  ];
}
