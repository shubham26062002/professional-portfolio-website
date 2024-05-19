import { Metadata } from "next"

import { inter } from "@/lib/fonts"
import { cn } from "@/lib/cn"
import "@/app/globals.css"
import { Header } from "@/components/header"

export const metadata: Metadata = {
  title: "Professional Portfolio Website",
}

interface RootLayoutProps {
  children: React.ReactNode,
}

const RootLayout = ({
  children,
}: RootLayoutProps) => {
  return (
    <html className="!scroll-smooth antialiased" lang="en">
      <body className={cn("relative bg-gray-50 text-gray-950 max-w-screen-2xl mx-auto pt-28 sm:pt-36", inter.className)}>
        <div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]" />
        <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem]" />
        <Header />
        {children}
      </body>
    </html>
  )
}

export default RootLayout
