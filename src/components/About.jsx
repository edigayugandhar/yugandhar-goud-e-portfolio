import { motion } from 'framer-motion'
import stackImage from '../assets/about/profile.png'
import { aboutContent } from '../data/portfolioData'

export default function About() {
  return (
    <section
      id="about"
      className="bg-[#ff2a2a] pt-20 pb-40 px-6 md:px-12 relative overflow-hidden"
    >
      {/* ── Decorative 4-point star — top right ── */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="absolute top-10 right-10 w-16 h-16 opacity-30 animate-pulse"
        aria-hidden="true"
      >
        <path fill="black" d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z" />
      </svg>

      {/* ── Decorative 4-point star — bottom left (delayed pulse) ── */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="absolute bottom-28 left-10 w-10 h-10 opacity-30 animate-pulse"
        style={{ animationDelay: '1s' }}
        aria-hidden="true"
      >
        <path fill="black" d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z" />
      </svg>

      {/* ── Main content ── */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 items-start">

        {/* ── Left: ID badge on a lanyard ──
            Framer Motion spring drop — once: true so it stays visible after
            scrolling away and back. No AOS / opacity toggle involved. */}
        <div className="md:w-[350px] shrink-0 flex justify-center">
          <motion.div
            className="relative flex flex-col items-center pt-32"
            initial={{ y: -300, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ type: 'spring', stiffness: 110, damping: 9, mass: 1.1 }}
          >
            {/* Lanyard string */}
            <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-3 h-40 bg-black rounded-b-sm" />

            {/* Clip rectangle */}
            <div className="w-10 h-4 bg-gray-400 rounded-sm shadow-md z-10 -mb-1" />

            {/* ID card */}
            <div className="bg-gray-900 max-w-[280px] w-full rounded-2xl p-3 shadow-2xl -rotate-3 hover:rotate-0 transition-transform duration-500">
              {/* Cutout slot at the top of the card */}
              <div className="flex justify-center mb-3">
                <div className="w-12 h-1.5 bg-gray-700 rounded-full" />
              </div>

              {/* Portrait photo */}
              <img
                src={stackImage}
                alt={`${aboutContent.heading} — illustrated portrait`}
                className="w-full aspect-[3/4] rounded-xl object-cover object-top"
              />
            </div>
          </motion.div>
        </div>

        {/* ── Right: heading + bio ── */}
        <div className="flex-1 pt-4 md:pt-16" data-aos="fade-left">
          <h2 className="text-4xl md:text-5xl font-black text-black mb-6">
            {aboutContent.heading}
          </h2>
          <p
            className="text-lg font-bold leading-relaxed text-red-50"
            dangerouslySetInnerHTML={{ __html: aboutContent.bio }}
          />
        </div>
      </div>

      {/* ── White torn-paper SVG divider at the bottom ── */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none pointer-events-none">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-16 md:h-20"
          aria-hidden="true"
        >
          <path
            fill="white"
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z"
          />
        </svg>
      </div>
    </section>
  )
}
