"use client"

import { useCallback } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import Link from "next/link"
import { BsArrowRight } from "react-icons/bs"

import { useActiveSection } from "@/hooks/use-active-section"
import { SectionWrapper } from "@/components/section-wrapper"
import { HiDownload } from "react-icons/hi"
import { FaGithub, FaLinkedin } from "react-icons/fa6"

export const Home = () => {
    const { setActiveSection, setLastChangedAt } = useActiveSection()

    const onClick = useCallback(() => {
        setActiveSection("contact")

        setLastChangedAt(Date.now())
    }, [setActiveSection, setLastChangedAt])

    return (
        <SectionWrapper className="mb-28 max-w-[50rem] text-center sm:mb-48 scroll-mt-[100rem]" id="home">
            <div className="flex items-center justify-center">
                <div className="relative">
                    <motion.div initial={{
                        opacity: 0,
                        scale: 0,
                    }} animate={{
                        opacity: 1,
                        scale: 1,
                    }} transition={{
                        type: "tween",
                        duration: 0.2,
                    }}>
                        <Image className="rounded-full h-24 w-24 border-[0.35rem] border-white object-cover shadow-xl bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-50 to-gray-200 dark:from-gray-200 dark:to-gray-450" src="/images/memoji-face.png" alt="Shubham Patel" width={192} height={192} quality="95" loading="eager" priority />
                    </motion.div>
                    <motion.div initial={{
                        opacity: 0,
                        scale: 0,
                    }} animate={{
                        opacity: 1,
                        scale: 1,
                    }} transition={{
                        type: "spring",
                        stiffness: 125,
                        delay: 0.1,
                        duration: 0.7,
                    }}>
                        <Image className="absolute bottom-0 right-0 object-cover w-7 h-9" src="/images/memoji-hand.png" alt="Memoji Hand" width={28} height={36} quality="95" loading="eager" priority />
                    </motion.div>
                </div>
            </div>
            <motion.h1 className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl" initial={{
                opacity: 0,
                translateY: "6.25rem",
            }} animate={{
                opacity: 1,
                translateY: 0,
            }}>Hey, I'm <span className="font-bold">Shubham,</span> a <span className="font-bold">full-stack developer.</span> I enjoy building <span className="italic">sites & apps.</span> My focus is <span className="underline">React (Next.js).</span></motion.h1>
            <motion.div className="flex flex-col sm:flex-row items-center justify-center gap-2.5 px-4 font-medium" initial={{
                opacity: 0,
                translateY: "6.25rem",
            }} animate={{
                opacity: 1,
                translateY: 0,
            }} transition={{
                delay: 0.1,
            }}>
                <Link className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full hover:scale-110 hover:bg-gray-950 active:scale-100 transition-all transform-gpu border border-gray-900 hover:border-gray-950 active:border-gray-950" href="#contact" onClick={onClick}>
                    Contact Me
                    <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition-all transform-gpu" />
                </Link>
                <a className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full hover:scale-110 active:scale-100 transition-all transform-gpu border border-black/10 dark:bg-white/10" href="/assets/shubham-patel-cv.pdf" download>
                    Download CV
                    <HiDownload className="opacity-70 group-hover:translate-x-1 transition-all transform-gpu" />
                </a>
                <div className="flex items-center gap-x-2.5">
                    <Link className="h-[3.125rem] w-[3.125rem] flex items-center justify-center rounded-full bg-white border border-black/10 hover:scale-110 active:scale-100 transition-all transform-gpu dark:bg-white/10" href="https://www.linkedin.com/in/shubham-patel-a9b705212/" target="_blank">
                        <FaLinkedin />
                    </Link>
                    <Link className="h-[3.125rem] w-[3.125rem] flex items-center justify-center rounded-full bg-white border border-black/10 hover:scale-110 active:scale-100 transition-all transform-gpu dark:bg-white/10" href="https://github.com/shubham26062002" target="_blank">
                        <FaGithub />
                    </Link>
                </div>
            </motion.div>
        </SectionWrapper >
    )
}
