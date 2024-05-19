import { Metadata } from "next"
import { Toaster } from "react-hot-toast"

import { inter } from "@/lib/fonts"
import { cn } from "@/lib/cn"
import "@/app/globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ThemeSwitch } from "@/components/theme-switch"
import { ThemeLoader } from "@/components/theme-loader"

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
      <body className={cn("bg-gray-50 text-gray-950 relative max-w-screen-2xl mx-auto pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50/90", inter.className)}>
        <ThemeLoader>
          <div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]" />
          <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] dark:bg-[#676394]" />
          <Header />
          {children}
          <Footer />
          <ThemeSwitch />
          <Toaster position="top-center" />
        </ThemeLoader>
      </body>
    </html>
  )
}

export default RootLayout
