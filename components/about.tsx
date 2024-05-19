"use client"

import { motion } from "framer-motion"

import { SectionWrapper } from "@/components/section-wrapper"
import { SectionHeading } from "@/components/section-heading"

export const About = () => {
    return (
        <SectionWrapper className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-48 scroll-mt-28" id="about">
            <motion.div initial={{
                opacity: 0,
                translateY: "6.25rem",
            }} animate={{
                opacity: 1,
                translateY: 0,
            }} transition={{
                delay: 0.175,
            }}>
                <SectionHeading>About Me</SectionHeading>
                <p className="mb-3">
                    Hey, I'm <span className="font-semibold">Shubham, </span>a <span className="font-semibold">full-stack developer </span>specializing in <span className="underline">Next.js.</span> I love building <span className="italic">dynamic, responsive websites and applications </span>with outstanding user experiences. My expertise spans various <span className="font-semibold">full-stack technologies, </span>enabling me to deliver <span className="italic">robust and scalable solutions.</span>
                </p>
                <p>
                    With a <span className="font-semibold">passion for innovation </span>and a <span className="italic">commitment to excellence, </span>I've completed numerous projects, seamlessly integrating <span className="font-semibold">front-end and back-end technologies. </span>I'm dedicated to <span className="font-semibold">continuous learning </span>and staying current with industry trends, ensuring that my work is cutting-edge. I thrive on solving <span className="font-semibold">complex problems </span>and creating <span className="font-semibold">high-quality digital products.</span>
                </p>
            </motion.div>
        </SectionWrapper>
    )
}
