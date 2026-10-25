import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [...siteConfig.mainNav, ...siteConfig.footerNav];

  return routes.map((route) => ({
    url: new URL(route.href, siteConfig.url).toString(),
  }));
}
