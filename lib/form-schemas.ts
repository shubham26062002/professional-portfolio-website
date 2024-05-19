import * as z from "zod"

export const contactFormSchema = z.object({
    name: z.string().refine((value) => value.trim().length !== 0, {
        message: "Name is required",
    }),
    email: z.string().email({
        message: "Invalid email address",
    }),
    message: z.string().refine((value) => value.trim().length !== 0, {
        message: "Message is required",
    }),
})