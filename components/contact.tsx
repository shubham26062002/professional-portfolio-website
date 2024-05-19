"use client"

import Link from "next/link"
import { motion } from "framer-motion"

import { SectionWrapper } from "@/components/section-wrapper"
import { ContactForm } from "@/components/contact-form"

export const Contact = () => {
    return (
        <SectionWrapper className="mb-28 sm:mb-48 scroll-mt-28 w-[min(100%,38rem)]" id="contact">
            <h2 className="text-3xl font-medium capitalize text-center mb-3">Contact Me</h2>
            <p className="text-gray-700 text-center dark:text-white/80">Contact me through my email, <Link className="underline" href={`mailto:${process.env.NEXT_PUBLIC_SENDER_EMAIl}`} target="_blank">shubham26062002@gmail.com</Link>, or by filling out this form.</p>
            <motion.div initial={{
                opacity: 0,
            }} whileInView={{
                opacity: 1,
            }} transition={{
                duration: 1,
            }} viewport={{
                once: true,
            }}>
                <ContactForm />
            </motion.div>
        </SectionWrapper>
    )
}
