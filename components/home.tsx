"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import Link from "next/link"
import { BsArrowRight } from "react-icons/bs"

import { SectionWrapper } from "@/components/section-wrapper"
import { HiDownload } from "react-icons/hi"
import { FaGithub, FaLinkedin } from "react-icons/fa6"

export const Home = () => {
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
                        <Image className="rounded-full h-24 w-24 border-[0.35rem] border-white object-cover shadow-xl bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-50 to-gray-200" src="/images/memoji-face.png" alt="Shubham Patel" width={192} height={192} quality="95" loading="eager" priority />
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
                        <Image className="absolute bottom-0 right-0 object-cover" src="/images/memoji-hand.png" alt="Memoji Hand" width={28} height={36} quality="95" loading="eager" priority />
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
            <motion.div className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 font-medium" initial={{
                opacity: 0,
                translateY: "6.25rem",
            }} animate={{
                opacity: 1,
                translateY: 0,
            }} transition={{
                delay: 0.1,
            }}>
                <Link className="uppercase leading-none text-sm tracking-widest bg-gray-900 text-white px-7 py-3 flex items-center gap-x-2 rounded-full w-fit hover:bg-gray-900/95 hover:scale-105 transition-all transform-gpu active:scale-100 active:bg-gray-900/95 focus-visible:outline-none focus-visible:bg-gray-900/95 focus-visible:scale-105 focus-visible:ring-1 focus-visible:ring-gray-900/50 focus-visible:ring-offset-1" href="#contact">
                    Contact me
                    <BsArrowRight className="w-4 h-4 opacity-70" />
                </Link>
                <a className="uppercase leading-none text-sm tracking-widest bg-white px-7 py-3 flex items-center gap-x-2 rounded-full w-fit hover:bg-white/80 hover:scale-105 transition-all transform-gpu active:scale-100 active:bg-white/80 focus-visible:outline-none focus-visible:bg-white/80 focus-visible:scale-105 focus-visible:ring-1 focus-visible:ring-gray-900/50 focus-visible:ring-offset-1 border border-black/10" href="/assets/shubham-patel-cv.pdf" download>
                    Download CV
                    <HiDownload className="w-4 h-4 opacity-70" />
                </a>
                <div className="flex items-center gap-x-2">
                    <Link className="bg-white h-10 w-10 rounded-full flex items-center justify-center hover:bg-white/80 hover:scale-105 transition-all transform-gpu active:scale-100 active:bg-white/80 focus-visible:outline-none focus-visible:bg-white/80 focus-visible:scale-105 focus-visible:ring-1 focus-visible:ring-gray-900/50 focus-visible:ring-offset-1 border border-black/10" href="https://www.linkedin.com/in/shubham-patel-a9b705212/" target="_blank">
                        <FaLinkedin className="w-4 h-4" />
                    </Link>
                    <Link className="bg-white h-10 w-10 rounded-full flex items-center justify-center hover:bg-white/80 hover:scale-105 transition-all transform-gpu active:scale-100 active:bg-white/80 focus-visible:outline-none focus-visible:bg-white/80 focus-visible:scale-105 focus-visible:ring-1 focus-visible:ring-gray-900/50 focus-visible:ring-offset-1 border border-black/10" href="https://github.com/shubham26062002" target="_blank">
                        <FaGithub className="w-4 h-4" />
                    </Link>
                </div>
            </motion.div>
        </SectionWrapper >
    )
}
