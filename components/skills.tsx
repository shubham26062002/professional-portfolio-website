"use client"

import { useMemo } from "react"
import { animate, motion } from "framer-motion"

import { SectionWrapper } from "@/components/section-wrapper"
import { SectionHeading } from "@/components/section-heading"
import { cn } from "@/lib/cn"

export const Skills = () => {
    const skillsData = useMemo<string[]>(() => [
        "Next.js",
        "React",
        "TypeScript",
        "JavaScript",
        "Node.js",
        "Bun",
        "Hono",
        "PostgreSQL",
        "MySQL",
        "Supabase",
        "Tailwind CSS",
        "Prisma",
        "Drizzle ORM",
        "Git/GitHub",
    ], [])

    return (
        <SectionWrapper className="max-w-[53rem] mb-28 sm:mb-48 scroll-mt-28" id="skills">
            <SectionHeading>My Skills</SectionHeading>
            <ul className="flex flex-wrap justify-center items-center gap-2 text-lg text-gray-800">

                {skillsData.map((item, index) => (
                    <motion.li key={index} className={cn("bg-white border border-black/10 rounded-xl py-3 px-5 dark:bg-white/10 dark:text-white/80")} variants={{
                        initial: {
                            opacity: 0,
                            translateY: "6.25rem",
                        },
                        animate: {
                            opacity: 1,
                            translateY: 0,
                            transition: {
                                delay: index * 0.05,
                            },
                        },
                    }} initial="initial" whileInView="animate" viewport={{
                        once: true,
                    }}>{item}</motion.li>
                ))}

            </ul>
        </SectionWrapper>
    )
}
