'use client'

import { sendEmail } from "@/lib/actions"
import { ContactFormSchema } from "@/lib/schemas"
import { zodResolver } from "@hookform/resolvers/zod"
import { PaperPlaneIcon, ReloadIcon } from "@radix-ui/react-icons"
import { SubmitHandler, useForm } from "react-hook-form"
import { toast } from "sonner"
import { z } from "zod"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import Link from "next/link"
import CalButton from "./Calbutton"

type Inputs = z.infer<typeof ContactFormSchema>

export default function ContactPage() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<Inputs>({
    resolver: zodResolver(ContactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  })

  const processForm: SubmitHandler<Inputs> = async (data) => {
    const result = await sendEmail(data)

    if (result.error) {
      toast.error("An error occurred! Please try again later.")
      return
    }

    toast.success("Message sent successfully!")
    reset()
  }

  return (
    <div className="max-w-2xl mx-auto p-4 space-y-8">
      <section className="space-y-4">
        <h1 className="text-3xl font-bold">Work with me</h1>
        <p>I&apos;m currently available for <span className="font-bold">freelance work</span>. I&apos;m also open to <span className="font-bold">full-time opportunities</span>.</p>
        <p>You can reach out to me at <a href="mailto:avikm744@gmail.com" className="text-blue-600 hover:underline">avikm744@gmail.com</a> or by using the form below.</p>
      </section>

      <form onSubmit={handleSubmit(processForm)} className="space-y-4">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {/* Name */}
          <div>
            <Input
              id="name"
              type="text"
              placeholder="Name"
              autoComplete="given-name"
              {...register("name")}
            />
            {errors.name?.message && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <Input
              id="email"
              type="email"
              placeholder="Email"
              autoComplete="email"
              {...register("email")}
            />
            {errors.email?.message && (
              <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
            )}
          </div>
        </div>

        {/* Message */}
        <div>
          <Textarea
            rows={4}
            placeholder="Leave feedback about the site, career opportunities or just to say hello etc."
            autoComplete="Message"
            className="resize-none"
            {...register("message")}
          />
          {errors.message?.message && (
            <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
          )}
        </div>

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full disabled:opacity-50"
        >
          {isSubmitting ? (
            <div className="flex items-center justify-center">
              <span>Sending...</span>
              <ReloadIcon className="ml-2 animate-spin" />
            </div>
          ) : (
            <div className="flex items-center justify-center">
              <span>Send Message</span>
              <PaperPlaneIcon className="ml-2" />
            </div>
          )}
        </Button>

        <p className="text-xs text-gray-500">
          By submitting this form, I agree to the{" "}
          <Link href="/privacy" className="text-blue-600 hover:underline font-semibold">
            privacy&nbsp;policy
          </Link>
          .
        </p>
      </form>

      <section className="space-y-4">
        <p>If you&apos;re interested in working with me, please schedule a meeting with me using the calendar below.</p>
        <CalButton/>
      </section>
    </div>
  )
}