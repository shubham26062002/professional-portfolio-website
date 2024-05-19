"use client"

import { useEffect } from "react"

import { useTheme } from "@/hooks/use-theme"

interface ThemeLoaderProps {
    children: React.ReactNode,
}

export const ThemeLoader = ({
    children,
}: ThemeLoaderProps) => {
    const { theme, setTheme } = useTheme()

    useEffect(() => {
        const savedTheme = window.localStorage.getItem("theme") as Theme

        if (savedTheme) {
            setTheme(savedTheme)

            if (savedTheme === "dark") {
                document.documentElement.classList.add("dark")
            } else if (savedTheme === "light") {
                document.documentElement.classList.remove("dark")
            }
        } else {
            const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches

            if (prefersDark) {
                setTheme("dark")

                window.localStorage.setItem("theme", "dark")

                document.documentElement.classList.add("dark")
            } else {
                setTheme("light")

                window.localStorage.setItem("theme", "light")

                document.documentElement.classList.remove("dark")
            }
        }
    }, [setTheme])

    if (!theme) {
        return null
    }

    return (
        <>{children}</>
    )
}
