import heroVideo from '../assets/hero/hero.mp4'
import { personalInfo, academy } from '../data/portfolioData'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-black text-white"
    >
      {/* Background Hero Video with dark gradient overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-[#0a0a0a]" />
      </div>

      {/* Decorative Red Ambient Glow */}
      <div
        aria-hidden="true"
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#ff2a2a]/10 rounded-full blur-3xl pointer-events-none"
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        {/* Status Pill */}
        <div
          data-aos="fade-down"
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900/90 border border-neutral-800 text-xs sm:text-sm text-neutral-300 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-[#ff2a2a] animate-ping" />
          <span className="font-medium text-neutral-200">Available for Opportunities</span>
          <span className="text-neutral-500">•</span>
          <a
            href={academy.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-400 hover:text-[#ff2a2a] transition-colors"
          >
            {academy.name} Alum
          </a>
        </div>

        {/* Headline */}
        <h1
          data-aos="fade-up"
          data-aos-delay="100"
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white mb-6"
        >
          Hi, I&apos;m <span className="text-[#ff2a2a]">{personalInfo.name}</span>
          <br />
          <span className="text-neutral-300 text-3xl sm:text-5xl md:text-6xl font-bold">
            {personalInfo.role}
          </span>
        </h1>

        {/* Tagline */}
        <p
          data-aos="fade-up"
          data-aos-delay="200"
          className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-neutral-400 mb-10 leading-relaxed"
        >
          {personalInfo.tagline}
        </p>

        {/* Action Buttons */}
        <div
          data-aos="fade-up"
          data-aos-delay="300"
          className="flex flex-wrap items-center justify-center gap-4 mb-14"
        >
          <a
            href="#projects"
            className="px-8 py-3.5 rounded-full bg-[#ff2a2a] text-white font-semibold hover:bg-[#e02424] transition-all hover:scale-105 shadow-lg shadow-[#ff2a2a]/20"
          >
            Explore Projects
          </a>
          <a
            href="#contact"
            className="px-8 py-3.5 rounded-full bg-neutral-900 border border-neutral-800 text-white font-semibold hover:bg-neutral-800 hover:border-neutral-700 transition-all hover:scale-105"
          >
            Get In Touch
          </a>
        </div>

        {/* Social Quick Links */}
        <div
          data-aos="fade-up"
          data-aos-delay="400"
          className="flex items-center justify-center gap-6 text-neutral-400 text-sm"
        >
          <a
            href={personalInfo.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#ff2a2a] transition-colors"
          >
            GitHub
          </a>
          <span className="text-neutral-700">•</span>
          <a
            href={personalInfo.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#ff2a2a] transition-colors"
          >
            LinkedIn
          </a>
          <span className="text-neutral-700">•</span>
          <a
            href={personalInfo.socials.email}
            className="hover:text-[#ff2a2a] transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </section>
  )
}
