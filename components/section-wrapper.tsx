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
    return (
        <section className={className} id={id}>{children}</section>
    )
}
