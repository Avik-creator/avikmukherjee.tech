import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Providers from "@/components/Providers";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Calistoga, Inter } from "next/font/google";
import { Analytics } from '@vercel/analytics/next';
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const calistoga = Calistoga({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.avikmukherjee.tech"),
  title: {
    default: "Avik Mukherjee",
    template: "%s | Avik Mukherjee",
  },
  description: "My personal site to showcase my developer work and projects.",
  keywords: ["developer", "web", "software", "engineer", "react", "next", "Avik", "Mukherjee", "Avik Mukherjee", "portfolio", "projects", "blog"],
  openGraph: {
    description: "My personal site to showcase my developer work and projects.",
    title: "Avik Mukherjee",
    type: "website",
    siteName: "Avik Mukherjee",
    locale: "en_US",
    url: "https://www.avikmukherjee.tech",
    images: [
      {
        url: "https://www.avikmukherjee.tech/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Avik Mukherjee",
      },
    ]
  },
  twitter:{
    card: "summary_large_image",
    description: "My personal site to showcase my developer work and projects.",
    title: "Avik Mukherjee",
    images: [
      {
        url: "https://www.avikmukherjee.tech/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Avik Mukherjee",
      },
    ]
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "mx-auto flex min-h-screen max-w-3xl flex-col px-8 font-sans antialiased",
          inter.variable,
          calistoga.variable,
        )}
      >
        <Providers>
          <Header />
          <main className="grow">{children}
            <Analytics/>
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}