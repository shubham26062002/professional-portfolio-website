"use client"

import { BsMoon, BsSun } from "react-icons/bs"

import { useTheme } from "@/hooks/use-theme"

export const ThemeSwitch = () => {
    const { theme, setTheme } = useTheme()

    const onClick = () => {
        if (theme === "light") {
            setTheme("dark")

            window.localStorage.setItem("theme", "dark")

            document.documentElement.classList.add("dark")
        } else if (theme === "dark") {
            setTheme("light")

            window.localStorage.setItem("theme", "light")

            document.documentElement.classList.remove("dark")
        }
    }

    return (
        <button className="fixed right-5 bottom-5 bg-white/80 w-[3.125rem] h-[3.125rem] backdrop-blur-[0.5rem] border border-black/10 shadow-2xl rounded-full flex items-center justify-center hover:scale-110 active:scale-100 transition-all transform-gpu dark:bg-gray-950" onClick={onClick}>

            {theme === "light" ? (
                <BsSun />
            ) : (
                <BsMoon />
            )}

        </button>
    )
}
