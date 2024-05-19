"use client"

import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css"
import { useMemo } from "react"
import { FaCode, FaGraduationCap, FaReact } from "react-icons/fa6"

import { SectionWrapper } from "@/components/section-wrapper"
import { SectionHeading } from "@/components/section-heading"
import { useTheme } from "@/hooks/use-theme"

export const Experience = () => {
    const experiencesData = useMemo<{
        title: string,
        location: string,
        description: string,
        date: string,
        icon: React.ReactNode,
    }[]>(() => [
        {
            title: "Graduated in IT",
            location: "LDRP-ITR, Gandhinagar",
            description: "Completed my Bachelor's degree in Information Technology from LDRP-ITR, Gandhinagar.",
            date: "2020 - 2024",
            icon: <FaGraduationCap />,
        }, {
            title: "Website Developer",
            location: "Internship Studio",
            description: "Completed website development internship through Internship Studio platform.",
            date: "January 2024 - February 2024",
            icon: <FaCode />,
        }, {
            title: "Frontend/React Developer Intern",
            location: "TatvaSoft, Ahmedabad",
            description: "Worked as a Frontend/React Developer Intern at TatvaSoft, Ahmedabad.",
            date: "May 2023 - June 2023",
            icon: <FaReact />,
        },
    ], [])

    const { theme } = useTheme()

    return (
        <SectionWrapper className="mb-28 sm:mb-48 scroll-mt-28 w-full" id="experience">
            <SectionHeading>My Experience</SectionHeading>
            <VerticalTimeline lineColor="">

                {experiencesData.map((item, index) => (
                    <VerticalTimelineElement key={index} contentStyle={{
                        background: theme === "light" ? "#f3f4f6" : theme === "dark" ? "rgba(255, 255, 255, 0.05)" : "",
                        boxShadow: "none",
                        border: "1px solid rgba(0, 0, 0, 0.05)",
                        textAlign: "left",
                        padding: "1.3rem 2rem",
                    }} contentArrowStyle={{
                        borderRight: theme === "light" ? "0.4rem solid #9ca3af" : theme === "dark" ? "0.4rem solid rgba(255, 255, 255, 0.5)" : "",
                    }} date={item.date} icon={item.icon} iconStyle={{
                        background: theme === "light" ? "white" : theme === "dark" ? "#111827" : "",
                        fontSize: "1.5rem",
                    }} visible>
                        <h3 className="font-semibold capitalize">{item.title}</h3>
                        <h4 className="font-normal !mt-0">{item.location}</h4>
                        <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">{item.description}</p>
                    </VerticalTimelineElement>
                ))}

            </VerticalTimeline>
        </SectionWrapper>
    )
}
