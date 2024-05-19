"use client"

import { useCallback } from "react"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { toast } from "react-hot-toast"

import { cn } from "@/lib/cn"
import { contactFormSchema } from "@/lib/form-schemas"
import { FaPaperPlane } from "react-icons/fa6"
import { submitContactForm } from "@/actions/submit-contact-form"

export const ContactForm = () => {
    const form = useForm<z.infer<typeof contactFormSchema>>({
        resolver: zodResolver(contactFormSchema),
        defaultValues: {
            name: "",
            email: "",
            message: "",
        },
        mode: "onChange",
    })

    const onSubmit = useCallback(async (data: z.infer<typeof contactFormSchema>) => {
        const response = await submitContactForm(data)

        if (!response.success) {
            toast.error(response.message)

            return
        }

        toast.success(response.message)

        form.reset()
    }, [form])

    return (
        <form className="mt-10 space-y-3 flex flex-col dark:text-black" onSubmit={form.handleSubmit(onSubmit)}>
            <input className={cn("h-14 rounded-lg px-4 border border-black/10 disabled:opacity-50 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-900/50 focus-visible:ring-offset-1 dark:bg-white/80 dark:focus:bg-white/100 dark:focus:ring-0 dark:focus:ring-offset-0", form.formState.errors.name && "focus-visible:ring-red-500/50")} id="name" {...form.register("name")} disabled={form.formState.isSubmitting} placeholder="Name" />
            <input className={cn("h-14 px-4 rounded-lg border border-black/10 disabled:opacity-50 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-900/50 focus-visible:ring-offset-1 dark:bg-white/80 dark:focus:bg-white/100 dark:focus:ring-0 dark:focus:ring-offset-0", form.formState.errors.email && "focus-visible:ring-red-500/50")} id="email" {...form.register("email")} disabled={form.formState.isSubmitting} placeholder="Email" />
            <textarea className={cn("resize-none h-52 py-3 px-4 rounded-lg border border-black/10 p-4 disabled:opacity-50 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-900/50 focus-visible:ring-offset-1 dark:bg-white/80 dark:focus:bg-white/100 dark:focus:ring-0 dark:focus:ring-offset-0", form.formState.errors.message && "focus-visible:ring-red-500/50")} id="message" {...form.register("message")} disabled={form.formState.isSubmitting} placeholder="Message" />
            <button className="group font-medium flex items-center justify-center h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all transform-gpu gap-2 hover:bg-gray-900/95 hover:scale-110 active:scale-100 active:bg-gray-900/95 focus-visible:outline-none focus-visible:bg-gray-900/95 focus-visible:scale-105 focus-visible:ring-1 focus-visible:ring-gray-900/50 focus-visible:ring-offset-1 disabled:opacity-50 disabled:cursor-not-allowed leading-none dark:bg-white/10" type="submit" disabled={form.formState.isSubmitting}>
                Submit
                <FaPaperPlane className="group-hover:translate-x-1 transition-all transform-gpu opacity-70" />
            </button>
        </form>
    )
}
