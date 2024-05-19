"use server"

import * as z from "zod"

import { contactFormSchema } from "@/lib/form-schemas"
import { sendResponseEmail } from "@/lib/email-utils"

export const submitContactForm = async (data: z.infer<typeof contactFormSchema>) => {
    const validation = contactFormSchema.safeParse(data)

    if (!validation.success) {
        return {
            success: false,
            message: validation.error.message,
        }
    }

    const { email, name, message } = validation.data

    const error = await sendResponseEmail(name, email, message)

    if (error) {
        return {
            success: false,
            message: error.message,
        }
    }

    return {
        success: true,
        message: "Form submitted successfully! Please check your inbox for a response.",
    }
}