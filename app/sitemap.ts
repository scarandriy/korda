import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";
import { WORK } from "@/lib/work";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    "",
    "/work",
    "/contact",
    "/privacy",
    "/terms",
    ...WORK.map((item) => `/work/${item.slug}`),
  ].map((path) => ({
    url: `${SITE.url}${path}`,
    lastModified: now,
  }));
}
