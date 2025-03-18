
import { Metadata } from 'next'

import ContactForm from "@/components/ContactForm";
export const metadata: Metadata = {
  title: 'Contact Me',
  description: 'Get in touch with me for any inquiries or collaborations.',
  openGraph: {
    title: "Contact | Avik",
    description: "Contact Avik Mukherjee.",
    url: "https://www.avikmukherjee.tech/contact",
    images: ["https://www.avikmukherjee.tech/og-image.jpg"],
    siteName: "Avik Mukherjee",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    title: "Contact | Avik",
    images: ["https://www.avikmukherjee.tech/og-image.jpg"],
    card: "summary_large_image",
    description: "Projects of Avik Mukherjee.",
  },

}
export default function ContactPage() {
  return (
    <article className="mt-8 flex flex-col gap-8 pb-16"> 
    
      <ContactForm />
    </article>
  );
}