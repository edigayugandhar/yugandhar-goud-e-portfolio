import { useState } from 'react'
import { motion } from 'framer-motion'
import QRCode from 'react-qr-code'
import stackImage from '../assets/about/profile.png'
import { aboutContent, personalInfo, socialLinks } from '../data/portfolioData'

export default function About() {
  const [flipped, setFlipped] = useState(false)

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

        {/* ── Left: ID badge on a lanyard ── */}
        <div className="md:w-[350px] shrink-0 flex flex-col items-center">
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

            {/* Flip Card Button Wrapper */}
            <button
              type="button"
              aria-label="Flip ID card"
              onClick={() => setFlipped(!flipped)}
              className="relative w-full max-w-[280px] -rotate-3 hover:rotate-0 transition-transform duration-500 [perspective:1200px] focus:outline-none cursor-pointer"
            >
              <div
                className="relative w-full aspect-[3/4] transition-transform duration-700 [transform-style:preserve-3d]"
                style={{
                  transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
                }}
              >
                {/* ── FRONT FACE: ID Badge ── */}
                <div className="absolute inset-0 [backface-visibility:hidden]">
                  <div className="bg-gray-900 w-full h-full rounded-2xl p-3 shadow-2xl flex flex-col overflow-hidden">
                    {/* Cutout slot at the top */}
                    <div className="flex justify-center mb-2.5">
                      <div className="w-12 h-1.5 bg-gray-700 rounded-full" />
                    </div>

                    {/* Portrait photo */}
                    <img
                      src={stackImage}
                      alt={`${personalInfo.name} — illustrated portrait`}
                      className="w-full flex-1 rounded-xl object-cover object-top"
                    />
                  </div>
                </div>

                {/* ── BACK FACE: Visiting Card ── */}
                <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] text-left">
                  <div className="relative w-full h-full rounded-2xl bg-gradient-to-br from-[#141414] to-[#1f1f1f] shadow-2xl p-5 text-white flex flex-col justify-between overflow-hidden border border-white/5">
                    {/* 6px red bar across the top */}
                    <div className="absolute top-0 left-0 right-0 h-[6px] bg-[#ff2a2a] rounded-t-2xl" />

                    {/* Header: Brand Name + Title */}
                    <div className="pt-1">
                      <h3 className="text-xl font-black tracking-tight text-white flex items-center">
                        {personalInfo.brandName}
                        <span className="text-[#ff2a2a] ml-0.5">.</span>
                      </h3>
                      {personalInfo.title && (
                        <p className="text-xs uppercase tracking-widest text-red-400 font-semibold mt-0.5">
                          {personalInfo.title}
                        </p>
                      )}
                      <div className="w-full border-b border-white/10 my-3" />
                    </div>

                    {/* Details rows with icons */}
                    <div className="space-y-2 text-xs text-white/85">
                      {personalInfo.emails?.primary && (
                        <div className="flex items-center gap-2.5">
                          <svg className="w-4 h-4 text-red-400 shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                          <a
                            href={`mailto:${personalInfo.emails.primary}`}
                            onClick={(e) => e.stopPropagation()}
                            className="hover:text-red-300 transition-colors truncate"
                          >
                            {personalInfo.emails.primary}
                          </a>
                        </div>
                      )}

                      {personalInfo.phone && (
                        <div className="flex items-center gap-2.5">
                          <svg className="w-4 h-4 text-red-400 shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                          <a
                            href={`tel:${personalInfo.phone}`}
                            onClick={(e) => e.stopPropagation()}
                            className="hover:text-red-300 transition-colors"
                          >
                            {personalInfo.phone}
                          </a>
                        </div>
                      )}

                      {personalInfo.location && (
                        <div className="flex items-center gap-2.5">
                          <svg className="w-4 h-4 text-red-400 shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          <span className="truncate">{personalInfo.location}</span>
                        </div>
                      )}

                      {socialLinks?.linkedin && (
                        <div className="flex items-center gap-2.5">
                          <svg className="w-4 h-4 text-red-400 shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                          </svg>
                          <a
                            href={socialLinks.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="hover:text-red-300 transition-colors"
                          >
                            LinkedIn
                          </a>
                        </div>
                      )}

                      {socialLinks?.github && (
                        <div className="flex items-center gap-2.5">
                          <svg className="w-4 h-4 text-red-400 shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                          </svg>
                          <a
                            href={socialLinks.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="hover:text-red-300 transition-colors"
                          >
                            GitHub
                          </a>
                        </div>
                      )}
                    </div>

                    {/* Bottom: QR Code + Scan caption */}
                    <div className="pt-2 flex items-center gap-3">
                      <div className="bg-white rounded-lg p-2 shrink-0 shadow-sm">
                        <QRCode
                          value={socialLinks.linkedin || ('mailto:' + personalInfo.emails.primary)}
                          size={76}
                        />
                      </div>
                      <p className="text-[10px] text-white/60 leading-tight">
                        Scan to connect
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </button>

            {/* Hint below card */}
            <p className="text-xs font-bold text-black/60 mt-4 select-none">
              Tap the card to flip ↻
            </p>
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
