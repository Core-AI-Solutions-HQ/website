import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: "Core AI",
    description: siteConfig.description,
    start_url: "/",
    display: "standalone",
    background_color: "#0A1628",
    theme_color: "#0A1628",
    lang: "en",
  };
}
