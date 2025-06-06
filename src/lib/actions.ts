

"use server";
import { Resend } from 'resend';
import { z } from 'zod';
import { ContactFormSchema } from "./schemas";
import { v4 as uuidv4 } from 'uuid';
import EmailTemplate from '@/components/EmailTemplate';

const resend = new Resend(process.env.RESEND_API_KEY);

type ContactFormInputs = z.infer<typeof ContactFormSchema>;

type SendEmailResponse = {
  success?: boolean;
  error?: string;
};

export async function sendEmail(data: ContactFormInputs): Promise<SendEmailResponse> {
  // Validate the input data
  const result = ContactFormSchema.safeParse(data);

  if (!result.success) {
    // Return a simplified error object with just the message
    return { 
      error: "Invalid form data" 
    };
  }

  try {
    const { name, email, subject, message } = result.data;
  
    const response = await resend.emails.send({
      from: `Contact Form <onboarding@resend.dev>`,
      to: "avikm744@gmail.com",
      replyTo: email,
      subject: subject,
      headers: {
        "X_Entity-Ref-ID": uuidv4(),
      },
      // text: `Name:\n${name}\n\nEmail:\n${email}\n\nMessage:\n${message}`,
      react: EmailTemplate({
        firstName: "Avik",
        name: name,
        message: message,
      })
    });

    if(response.error) {
      return {
        error: "Failed to send email"
      }
    }
    return { success: true };
  } catch (err) {
    // Log the error for debugging but return a simplified error object
    console.error('Send email error:', err);
    return { 
      error: "An unexpected error occurred" 
    };
  }
}