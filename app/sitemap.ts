import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "/", changeFrequency: "weekly", priority: 1 },
    { url: "/send-funds", changeFrequency: "weekly", priority: 0.95 },
    { url: "/donate", changeFrequency: "weekly", priority: 0.9 },
    { url: "/programs", changeFrequency: "monthly", priority: 0.75 },
    { url: "/contact", changeFrequency: "monthly", priority: 0.7 },
    { url: "/deposit-policy", changeFrequency: "yearly", priority: 0.5 },
    { url: "/refund-policy", changeFrequency: "yearly", priority: 0.5 },
    { url: "/about", changeFrequency: "monthly", priority: 0.6 },
    { url: "/support", changeFrequency: "monthly", priority: 0.6 },
    { url: "/fees", changeFrequency: "monthly", priority: 0.5 },
    { url: "/legal", changeFrequency: "monthly", priority: 0.5 },
    { url: "/privacy", changeFrequency: "monthly", priority: 0.4 },
    { url: "/terms", changeFrequency: "monthly", priority: 0.4 },
    { url: "/facilities", changeFrequency: "weekly", priority: 0.7 },
    { url: "/store", changeFrequency: "weekly", priority: 0.7 },
    { url: "/deposit", changeFrequency: "weekly", priority: 0.8 },
    { url: "/donation", changeFrequency: "weekly", priority: 0.55 },
    { url: "/history", changeFrequency: "weekly", priority: 0.4 },
  ]
}
