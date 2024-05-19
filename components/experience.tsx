"use client"

import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css"
import { useMemo } from "react"
import { FaCode, FaGraduationCap, FaReact } from "react-icons/fa6"

import { SectionWrapper } from "@/components/section-wrapper"
import { SectionHeading } from "@/components/section-heading"

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

    return (
        <SectionWrapper className="mb-28 sm:mb-48 scroll-mt-28 w-full" id="experience">
            <SectionHeading>My Experience</SectionHeading>
            <VerticalTimeline lineColor="#e5e7eb">

                {experiencesData.map((item, index) => (
                    <VerticalTimelineElement key={index} contentStyle={{
                        background: "#f3f4f6",
                        boxShadow: "none",
                        border: "1px solid rgba(0, 0, 0, 0.05)",
                        textAlign: "left",
                        padding: "1.3rem 2rem",
                    }} contentArrowStyle={{
                        borderRight: "0.4rem solid #9ca3af",
                    }} date={item.date} icon={item.icon} iconStyle={{
                        background: "white",
                        fontSize: "1.5rem",
                    }} visible>
                        <h3 className="font-semibold capitalize">{item.title}</h3>
                        <h4 className="font-normal !mt-0">{item.location}</h4>
                        <p className="!mt-1 !font-normal text-gray-700">{item.description}</p>
                    </VerticalTimelineElement>
                ))}

            </VerticalTimeline>
        </SectionWrapper>
    )
}
