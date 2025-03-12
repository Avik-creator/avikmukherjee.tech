import type {MetadataRoute} from "next";

export default function robots(): MetadataRoute.Robots{
    const baseURL = "https://www.avikmukherjee.tech";
    return{
        rules:{
            userAgent: "*",
            allow: ["/"],
            disallow: [],
        },
        sitemap: `${baseURL}/sitemap.xml`
    }
}