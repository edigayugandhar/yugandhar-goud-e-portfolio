import { useRef, useEffect, useState } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import heroVideo from '../assets/hero/hero.mp4'
import heroPoster from '../assets/about/profile.png'
import { heroContent, socialLinks } from '../data/portfolioData'

// ── Inline SVG icons ─────────────────────────────────────────────────────────

function GitHubIcon() {
  return (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path fillRule="evenodd" clipRule="evenodd"
        d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"
      />
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
    </svg>
  )
}

// Social link list — Instagram is skipped when the URL is empty
const socials = [
  { href: socialLinks.github,    Icon: GitHubIcon,    label: 'GitHub profile'    },
  { href: socialLinks.linkedin,  Icon: LinkedInIcon,  label: 'LinkedIn profile'  },
  ...(socialLinks.instagram
    ? [{ href: socialLinks.instagram, Icon: InstagramIcon, label: 'Instagram profile' }]
    : []),
]

// ── Component ─────────────────────────────────────────────────────────────────

export default function Hero() {
  const videoRef  = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)

  // AOS init once; also refresh on window load so any layout shift (large
  // images) doesn't leave elements invisible after they've already appeared.
  useEffect(() => {
    AOS.init({ duration: 1000, once: true, easing: 'ease-out' })

    const onLoad = () => AOS.refresh()
    window.addEventListener('load', onLoad)
    return () => window.removeEventListener('load', onLoad)
  }, [])

  // Toggle play / pause without bubbling the click to the section
  const toggleVideo = (e) => {
    e.stopPropagation()
    if (!videoRef.current) return
    if (isPlaying) {
      videoRef.current.pause()
    } else {
      videoRef.current.play()
    }
    setIsPlaying(!isPlaying)
  }

  // Reset state when the video reaches its end
  const handleEnded = () => setIsPlaying(false)

  return (
    <section
      id="home"
      className="relative w-full h-screen overflow-hidden bg-[#ff2a2a]"
    >
      {/* ── Background video: object-contain keeps the full frame visible ── */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-contain object-top md:object-right z-0"
        playsInline
        poster={heroPoster}
        onEnded={handleEnded}
        preload="metadata"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      {/* Readability gradient: strong on the left (content side), fades to
          transparent so the video/portrait stays vivid on the right */}
      <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-r from-black/45 via-black/10 to-transparent" />

      {/* ── Left social sidebar (lg+, fixed, mix-blend-difference) ── */}
      <aside className="hidden lg:flex fixed left-6 top-1/2 -translate-y-1/2 z-50 flex-col gap-5 mix-blend-difference">
        {socials.map(({ href, Icon, label }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="text-white/60 hover:text-white hover:scale-125 transition-all duration-200"
          >
            <Icon />
          </a>
        ))}
      </aside>

      {/* ── Main content: anchored to the bottom of the viewport ── */}
      <div className="absolute inset-0 z-20 max-w-7xl mx-auto px-6 md:px-12 pb-20 md:pb-[8%] flex flex-col md:flex-row justify-end md:justify-between items-start md:items-end">

        {/* ── Left text block ── */}
        <div className="max-w-2xl" data-aos="fade-up" data-aos-delay="100">

          {/* Mobile-only inline social icons (shown below lg) */}
          <div className="flex lg:hidden items-center gap-4 mb-4">
            {socials.map(({ href, Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-white/60 hover:text-white hover:scale-125 transition-all duration-200"
              >
                <Icon />
              </a>
            ))}
          </div>

          {/* Headline */}
          <h1
            className="text-white text-3xl md:text-5xl font-bold leading-tight mb-4"
            data-aos="fade-up"
          >
            {heroContent.greeting},
            <br />
            {/* Title highlight is solid black so it pops against the red background */}
            <span className="text-black">{heroContent.titleHighlight}</span>
          </h1>

          {/* Subtitle */}
          <p
            className="text-white text-sm md:text-lg font-semibold max-w-md mb-8 leading-relaxed"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {heroContent.subtitle}
          </p>

          {/* CTA pill buttons */}
          <div
            className="flex flex-wrap gap-3"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            {/* Primary */}
            <a
              href={heroContent.ctaPrimary.href}
              className="px-6 py-2.5 rounded-full bg-white text-black font-semibold text-sm hover:scale-105 transition-transform shadow-md"
            >
              {heroContent.ctaPrimary.text}
            </a>

            {/* Secondary */}
            <a
              href={heroContent.ctaSecondary.href}
              className="px-6 py-2.5 rounded-full bg-black/40 border border-white text-white font-semibold text-sm backdrop-blur-md hover:scale-105 transition-transform"
            >
              {heroContent.ctaSecondary.text}
            </a>

            {/* Resume download — only when ctaResume is set */}
            {heroContent.ctaResume && heroContent.ctaResume.href && (
              <a
                href={heroContent.ctaResume.href}
                download
                className="flex items-center gap-2 px-6 py-2.5 rounded-full border border-white/50 text-white font-semibold text-sm hover:scale-105 transition-transform"
              >
                {/* Download-document icon */}
                <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round"
                    d="M12 4v12m0 0-4-4m4 4 4-4M4 20h16" />
                </svg>
                {heroContent.ctaResume.text}
              </a>
            )}
          </div>
        </div>

        {/* ── Right: Play Reel control ── */}
        <div
          className="mt-10 md:mt-0 flex flex-col items-center gap-2"
          data-aos="zoom-in"
          data-aos-delay="600"
        >
          <button
            type="button"
            onClick={toggleVideo}
            aria-label={isPlaying ? 'Pause video reel' : 'Play video reel'}
            className={`
              w-12 h-12 md:w-20 md:h-20 rounded-full
              border border-white/30 bg-black/20 backdrop-blur-md
              flex items-center justify-center
              hover:scale-110 hover:bg-[#ff2a2a]
              hover:shadow-[0_0_24px_rgba(255,42,42,0.7)]
              transition-all duration-300
            `}
          >
            {isPlaying ? (
              /* Pause icon */
              <svg className="w-5 h-5 md:w-7 md:h-7 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M6 5h4v14H6V5zm8 0h4v14h-4V5z" />
              </svg>
            ) : (
              /* Play triangle */
              <svg className="w-5 h-5 md:w-7 md:h-7 text-white translate-x-0.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8 5v14l11-7L8 5z" />
              </svg>
            )}
          </button>

          {/* Label below the control */}
          <span className="text-white text-[10px] uppercase tracking-widest font-medium">
            {isPlaying ? 'Pause' : 'Play Reel'}
          </span>
        </div>
      </div>

      {/* ── Bottom-centre scroll indicator (desktop only) ── */}
      <div className="hidden md:block absolute bottom-8 left-1/2 -translate-x-1/2 z-30 animate-bounce pointer-events-none">
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  )
}
