import { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.chaeum119.co.kr",
      lastModified: new Date(),
    },
  ]
}