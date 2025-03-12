import type {MetadataRoute} from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://www.avikmukherjee.tech',
      lastModified: new Date(),
    },
    {
      url: "https://www.avikmukherjee.tech/projects",
      lastModified: new Date(),
    },
    {
      url: "https://www.avikmukherjee.tech/blog",
      lastModified: new Date(),
    },
    {
        url: "https://www.avikmukherjee.tech/contact",
        lastModified: new Date()
    }
  ]
}