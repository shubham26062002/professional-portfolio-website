import { resend } from "@/lib/resend"

export const sendResponseEmail = async (name: string, email: string, message: string) => {
    const { error } = await resend.emails.send({
        from: process.env.RESEND_SENDER_EMAIL!,
        to: [email],
        subject: `Hey ${name}, thanks for reaching out!`,
        html: `<h1>Hey ${name},</h1>
        <p>Thanks for reaching out! Unfortunately, I'm not available right now, but I'll get back to you as soon as I can. Thanks for your patience!</p>
        <br />
        <p>Best,</p>
        <p>${process.env.NEXT_PUBLIC_MY_NAME}</p>`,
        reply_to: [process.env.NEXT_PUBLIC_MY_EMAIL!],
    })

    return error
}