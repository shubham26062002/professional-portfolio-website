"use client"

import { useEffect } from "react"
import { useInView } from "react-intersection-observer"

import { useActiveSection } from "@/hooks/use-active-section"

interface SectionWrapperProps {
    className?: string,
    id: Section,
    children: React.ReactNode,
}

export const SectionWrapper = ({
    className,
    id,
    children,
}: SectionWrapperProps) => {
    const { ref, inView } = useInView({
        threshold: 0.5,
    })

    const { activeSection, setActiveSection, lastChangedAt } = useActiveSection()

    useEffect(() => {
        if (inView && Date.now() - lastChangedAt > 1000) {
            setActiveSection(id)
        }
    }, [inView, lastChangedAt, setActiveSection, id])

    return (
        <section className={className} id={id} ref={ref}>{children}</section>
    )
}
