export const runtime = "edge";
import { Metadata } from 'next'

import ContactForm from "@/components/ContactForm";
export const metadata: Metadata = {
  title: 'Contact Me',
  description: 'Get in touch with me for any inquiries or collaborations.',
}
export default function ContactPage() {
  return (
    <article className="mt-8 flex flex-col gap-8 pb-16"> 
    
      <ContactForm />
    </article>
  );
}