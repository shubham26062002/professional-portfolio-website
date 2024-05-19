import { Home } from "@/components/home"
import { About } from "@/components/about"
import { Portfolio } from "@/components/portfolio"
import { Experience } from "@/components/experience"
import { Skills } from "@/components/skills"
import { Contact } from "@/components/contact"

const HomePage = () => {
  return (
    <main className="flex flex-col items-center px-4">
      <Home />
      <About />
      <Experience />
      <Portfolio />
      <Skills />
      <Contact />
    </main>
  )
}

export default HomePage