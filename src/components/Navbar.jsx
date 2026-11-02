import { useState, useEffect } from 'react'
import { personalInfo, navLinks } from '../data/portfolioData'

// Pre-built mailto so the "Hire Me" button opens a pre-filled email
const hireMeMailto =
  `mailto:${personalInfo.emails.primary}` +
  `?subject=Hiring Inquiry – Portfolio` +
  `&body=Hello ${personalInfo.name},%0D%0A%0D%0A` +
  `I came across your portfolio and would like to discuss an opportunity with you.` +
  `%0D%0A%0D%0ALooking forward to hearing from you.%0D%0ABest Regards,`

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  // Listen for scroll; clean up listener on unmount
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Derive nav background from state
  // Glass view when scrolled so content and letters behind remain visible
  const navBg = isOpen
    ? 'bg-[#ff2a2a] py-4 shadow-xl'
    : isScrolled
    ? 'bg-black/20 backdrop-blur-xl border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.15)] py-3.5'
    : 'bg-transparent py-6'

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${navBg}`}
    >
      {/* ── Inner wrapper ── */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">

        {/* ── Logo ── */}
        <a
          href="#home"
          className="text-2xl font-black text-white tracking-tight flex items-center gap-0.5"
        >
          {personalInfo.brandName}
          <span className="text-[#ff2a2a] ml-0.5">.</span>
        </a>

        {/* ── Desktop centre links ── */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((item) => {
            const name = typeof item === 'string' ? item : item.name
            const href = typeof item === 'string' ? `#${item.toLowerCase()}` : item.href
            return (
              <a
                key={name}
                href={href}
                className="group relative text-white/90 hover:text-white font-semibold transition-colors drop-shadow-sm tracking-wide text-sm"
              >
                {name}
                {/* Animated underline */}
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-[#ff2a2a] transition-all duration-300 group-hover:w-full" />
              </a>
            )
          })}
        </div>

        {/* ── Desktop "Hire Me" pill ── */}
        <a
          href={hireMeMailto}
          className="hidden md:block px-6 py-2.5 rounded-full bg-white/10 border border-white/20 text-white font-semibold backdrop-blur-md hover:bg-white/20 hover:shadow-[0_0_18px_rgba(255,255,255,0.25)] transition-all duration-300"
        >
          Hire Me
        </a>

        {/* ── Mobile hamburger button ── */}
        <button
          type="button"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-white focus:outline-none"
        >
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              /* X icon */
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              /* Hamburger icon */
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* ── Mobile dropdown panel ── */}
      <div
        className={`
          md:hidden absolute top-full left-0 right-0
          bg-[#ff2a2a] shadow-2xl overflow-hidden
          transition-all duration-300
          ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
        `}
      >
        <div className="px-6 py-4 space-y-1">
          {navLinks.map((item) => {
            const name = typeof item === 'string' ? item : item.name
            const href = typeof item === 'string' ? `#${item.toLowerCase()}` : item.href
            return (
              <a
                key={name}
                href={href}
                onClick={() => setIsOpen(false)}
                className="block py-3 border-b border-white/20 last:border-0 text-white font-bold text-lg hover:text-black transition-colors"
              >
                {name}
              </a>
            )
          })}

          {/* Full-width Hire Me button */}
          <a
            href={hireMeMailto}
            onClick={() => setIsOpen(false)}
            className="block mt-4 w-full text-center py-3 rounded-full bg-white text-[#ff2a2a] font-bold text-lg hover:bg-neutral-100 transition-colors"
          >
            Hire Me
          </a>
        </div>
      </div>
    </nav>
  )
}
