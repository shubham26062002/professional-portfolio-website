import { Home } from "@/components/home"
import { About } from "@/components/about"
import { Portfolio } from "@/components/portfolio"

const HomePage = () => {
  return (
    <main className="flex flex-col items-center px-4">
      <Home />
      <About />
      <Portfolio />
    </main>
  )
}

export default HomePage