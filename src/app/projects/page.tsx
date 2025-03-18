

import Projects from "@/components/Projects";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Projects",
  description: "See my Projects.",
  openGraph: {
    title: "Projects | Avik",
    description: "Projects of Avik Mukherjee.",
    url: "https://www.avikmukherjee.tech/projects",
    images: ["https://www.avikmukherjee.tech/og-image.jpg"],
    siteName: "Avik Mukherjee",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    title: "Projects | Avik",
    card: "summary_large_image",
    images: ["https://www.avikmukherjee.tech/og-image.jpg"],
    description: "Projects of Avik Mukherjee.",
  },
};
export default async function ProjectPage() {
  return (
    <article className="mt-8 flex flex-col gap-8 pb-16">
      <h1 className="title">My projects.</h1>

      <Projects />
    </article>
  );
}