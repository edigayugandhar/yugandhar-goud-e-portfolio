// App.jsx — composes every section in order.
// AOS is initialised inside Hero.jsx (once: true) so we don't duplicate it here.
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import TechnicalSkills from './components/TechnicalSkills'
import Process from './components/Process'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-[#ff2a2a] selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <TechnicalSkills />
        <Process />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
