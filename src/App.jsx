import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Process from './components/Process'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 700,
      easing: 'ease-out-cubic'
    })
  }, [])

  return (
    <div className="min-h-screen bg-black text-white selection:bg-[#ff2a2a] selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Process />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
