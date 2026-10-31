import { useState, useRef } from 'react'
import heroVideo from '../assets/hero/hero.mp4'
import { personalInfo, heroContent, socialLinks, academy } from '../data/portfolioData'

export default function Hero() {
  const videoRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(true)
  const [isMuted, setIsMuted] = useState(true)

  const togglePlay = () => {
    if (!videoRef.current) return
    if (isPlaying) {
      videoRef.current.pause()
      setIsPlaying(false)
    } else {
      videoRef.current.play()
      setIsPlaying(true)
    }
  }

  const toggleMute = () => {
    if (!videoRef.current) return
    videoRef.current.muted = !isMuted
    setIsMuted(!isMuted)
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-black text-white"
    >
      {/* Decorative Red Ambient Background Glow */}
      <div
        aria-hidden="true"
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#ff2a2a]/10 rounded-full blur-3xl pointer-events-none"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 text-left space-y-6">
            {/* Status Pill */}
            <div
              data-aos="fade-down"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900/90 border border-neutral-800 text-xs sm:text-sm text-neutral-300"
            >
              <span className="w-2 h-2 rounded-full bg-[#ff2a2a] animate-ping" />
              <span className="font-medium text-neutral-200">Open to Software Developer Roles</span>
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
              className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white leading-tight"
            >
              {heroContent.greeting}
              <br />
              <span className="text-[#ff2a2a]">
                {heroContent.titleHighlight}
              </span>
            </h1>

            {/* Subtitle */}
            <p
              data-aos="fade-up"
              data-aos-delay="200"
              className="text-base sm:text-lg text-neutral-400 max-w-2xl leading-relaxed"
            >
              {heroContent.subtitle}
            </p>

            {/* Action Buttons */}
            <div
              data-aos="fade-up"
              data-aos-delay="300"
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <a
                href={heroContent.ctaPrimary.href}
                className="px-7 py-3 rounded-full bg-[#ff2a2a] text-white font-semibold hover:bg-[#e02424] transition-all hover:scale-105 shadow-lg shadow-[#ff2a2a]/20 text-sm sm:text-base"
              >
                {heroContent.ctaPrimary.text}
              </a>
              <a
                href={heroContent.ctaSecondary.href}
                className="px-7 py-3 rounded-full bg-neutral-900 border border-neutral-800 text-white font-semibold hover:bg-neutral-800 hover:border-neutral-700 transition-all hover:scale-105 text-sm sm:text-base"
              >
                {heroContent.ctaSecondary.text}
              </a>
              <a
                href={heroContent.ctaResume.href}
                download
                className="px-5 py-3 rounded-full bg-neutral-950 border border-neutral-800 text-neutral-300 font-medium hover:text-white hover:border-neutral-700 transition-all hover:scale-105 text-xs sm:text-sm"
              >
                {heroContent.ctaResume.text}
              </a>
            </div>

            {/* Social Links */}
            <div
              data-aos="fade-up"
              data-aos-delay="400"
              className="flex items-center gap-6 pt-4 text-neutral-400 text-sm"
            >
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#ff2a2a] transition-colors"
              >
                GitHub
              </a>
              <span className="text-neutral-700">•</span>
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#ff2a2a] transition-colors"
              >
                LinkedIn
              </a>
              <span className="text-neutral-700">•</span>
              <a
                href={`mailto:${personalInfo.emails.primary}`}
                className="hover:text-[#ff2a2a] transition-colors"
              >
                {personalInfo.emails.primary}
              </a>
            </div>
          </div>

          {/* Right Column: Prominent Talking Video Player */}
          <div
            className="lg:col-span-5 flex justify-center"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <div className="relative group w-full max-w-md">
              {/* Red Neon Glow behind Video Card */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-[#ff2a2a] via-[#ff2a2a]/40 to-transparent rounded-3xl blur-xl opacity-40 group-hover:opacity-70 transition duration-500" />

              {/* Video Player Container */}
              <div className="relative rounded-2xl overflow-hidden bg-neutral-950 border-2 border-neutral-800 shadow-2xl">
                {/* Top Bar with Status Badge */}
                <div className="flex items-center justify-between px-4 py-3 bg-neutral-900/90 border-b border-neutral-800">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#ff2a2a] animate-pulse" />
                    <span className="text-xs font-bold uppercase tracking-wider text-neutral-300">
                      AI Talking Avatar
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    {/* Audio Mute/Unmute Button */}
                    <button
                      type="button"
                      onClick={toggleMute}
                      title={isMuted ? 'Unmute Audio' : 'Mute Audio'}
                      className="px-2.5 py-1 rounded-md bg-neutral-800 text-neutral-300 hover:text-white text-xs font-medium hover:bg-neutral-700 transition"
                    >
                      {isMuted ? '🔇 Unmute' : '🔊 Sound On'}
                    </button>
                    {/* Pause/Play Button */}
                    <button
                      type="button"
                      onClick={togglePlay}
                      title={isPlaying ? 'Pause Video' : 'Play Video'}
                      className="px-2.5 py-1 rounded-md bg-neutral-800 text-neutral-300 hover:text-white text-xs font-medium hover:bg-neutral-700 transition"
                    >
                      {isPlaying ? '⏸' : '▶'}
                    </button>
                  </div>
                </div>

                {/* The Video Element */}
                <div className="relative aspect-video sm:aspect-square bg-black overflow-hidden flex items-center justify-center">
                  <video
                    ref={videoRef}
                    autoPlay
                    loop
                    muted={isMuted}
                    playsInline
                    className="w-full h-full object-cover"
                  >
                    <source src={heroVideo} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>

                {/* Bottom Caption */}
                <div className="px-4 py-2.5 bg-neutral-900/80 border-t border-neutral-800 flex items-center justify-between text-xs text-neutral-400">
                  <span>Interactive Animated Video</span>
                  <span className="text-[#ff2a2a] font-semibold">1080p HD</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
