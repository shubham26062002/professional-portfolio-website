"use client"

import { useMemo } from "react"

import { SectionWrapper } from "@/components/section-wrapper"
import { SectionHeading } from "@/components/section-heading"
import { ProjectCard } from "@/components/project-card"

export const Portfolio = () => {
    const projectsData = useMemo<{
        href: string,
        title: string,
        description: string,
        tags: string[],
        image: string,
    }[]>(() => [
        {
            href: "#",
            title: "Professional Portfolio",
            description: "A professional portfolio website showcasing my skills, projects, and experience.",
            tags: ["Bun", "React", "Tailwind CSS", "TypeScript", "Framer Motion"],
            image: "/images/professional-portfolio.png",
        },
        {
            href: "https://github.com/shubham26062002/theme-bucket",
            title: "ThemeBucket",
            description: "A full-stack e-commerce website where users can buy and sell digital themes and templates.",
            tags: ["Vite", "React", "Tailwind CSS", "TypeScript", "Supabase", "Stripe"],
            image: "/images/theme-bucket.png",
        }, {
            href: "https://github.com/shubham26062002/twitch-clone",
            title: "Twitch Clone",
            description: "A full-stack Twitch clone with live streaming, chat, and user authentication.",
            tags: ["Next.js", "Tailwind CSS", "shadcn/ui", "Clerk", "LiveKit", "Neon", "Prisma"],
            image: "/images/twitch-clone.png",
        },
    ], [])

    return (
        <SectionWrapper id="portfolio">
            <SectionHeading>My Projects</SectionHeading>
            <div>

                {projectsData.map((item, index) => (
                    <ProjectCard key={index} {...item} />
                ))}

            </div>
        </SectionWrapper>
    )
}
