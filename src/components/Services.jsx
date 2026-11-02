import { useRef, useState } from 'react'
import { motion, useScroll, useSpring, useMotionValueEvent } from 'framer-motion'
import { skillsContent } from '../data/portfolioData'

// Hanging Tag Card with active state tied to pathLength scroll progress
function TagCard({
  number,
  title,
  text,
  className,
  aosDelay,
  aosType,
  pathLength,
  containerRef,
}) {
  const [isActive, setIsActive] = useState(false)
  const cardRef = useRef(null)

  // Listen to pathLength motion value changes and activate card as line passes
  useMotionValueEvent(pathLength, 'change', (latest) => {
    if (!cardRef.current || !containerRef.current) return
    const containerRect = containerRef.current.getBoundingClientRect()
    const cardRect = cardRef.current.getBoundingClientRect()
    const containerHeight = containerRef.current.offsetHeight
    const cardTop = cardRect.top - containerRect.top
    const progressPos = latest * containerHeight

    if (progressPos >= cardTop + 50) {
      setIsActive(true)
    } else {
      setIsActive(false)
    }
  })

  return (
    <div
      ref={cardRef}
      data-aos={aosType}
      data-aos-delay={aosDelay}
      className={`
        w-72 sm:w-80 rounded-[2rem] p-2 transition-all duration-700
        ${isActive
          ? 'bg-[#ff2a2a] shadow-[0_20px_40px_rgba(255,42,42,0.35)] border border-red-500/30'
          : 'bg-white shadow-[0_15px_30px_rgba(0,0,0,0.08)] border border-gray-200'
        }
        ${className}
      `}
    >
      {/* Small punched hole circle at the top */}
      <div
        className={`w-5 h-5 rounded-full mx-auto my-2 transition-colors duration-700 ${
          isActive
            ? 'bg-red-900/60 border border-white/30 shadow-inner'
            : 'bg-gray-200 border border-gray-300 shadow-inner'
        }`}
      />

      {/* Inner rounded-[1.5rem] panel */}
      <div
        className={`mt-2 p-8 min-h-[220px] rounded-[1.5rem] flex flex-col justify-between transition-colors duration-700 ${
          isActive ? 'bg-red-700/50 text-white' : 'bg-[#f4f4f4] text-gray-900'
        }`}
      >
        <div>
          {/* Number: serif italic */}
          <span
            className={`font-serif italic text-4xl font-bold block mb-2 transition-colors duration-700 ${
              isActive ? 'text-red-200' : 'text-gray-400'
            }`}
          >
            {number}
          </span>
          {/* Title */}
          <h3 className="text-2xl font-black mb-3 tracking-tight">
            {title}
          </h3>
        </div>

        {/* Text */}
        <p
          className={`text-sm leading-relaxed transition-colors duration-700 ${
            isActive ? 'text-white/90' : 'text-gray-600'
          }`}
        >
          {text}
        </p>
      </div>
    </div>
  )
}

export default function Services() {
  const containerRef = useRef(null)

  // Scroll progress for animated path drawing
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end center'],
  })

  const pathLength = useSpring(scrollYProgress, {
    stiffness: 60,
    damping: 20,
    restDelta: 0.001,
  })

  // Desktop S-curve path definition
  const desktopPath =
    'M 650,200 C 400,300 200,400 300,600 C 400,800 750,750 700,950 C 650,1150 400,1150 300,1200'

  // Card placement configurations matching desktop positions and tilts
  const cardConfigs = [
    {
      className:
        'md:absolute md:top-[10px] md:right-[5%] lg:right-[10%] rotate-2 md:rotate-6',
      aosType: 'fade-left',
      aosDelay: 100,
    },
    {
      className:
        'md:absolute md:top-[450px] md:left-[5%] lg:left-[10%] -rotate-2 md:-rotate-6',
      aosType: 'fade-right',
      aosDelay: 200,
    },
    {
      className:
        'md:absolute md:top-[700px] md:right-[5%] lg:right-[15%] rotate-1 md:rotate-3',
      aosType: 'fade-left',
      aosDelay: 300,
    },
    {
      className:
        'md:absolute md:top-[1050px] md:left-[15%] lg:left-[25%] -rotate-1 md:-rotate-3',
      aosType: 'fade-right',
      aosDelay: 400,
    },
  ]

  return (
    <section
      id="process"
      ref={containerRef}
      className="bg-white pt-24 pb-32 px-6 md:px-12 relative overflow-hidden bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:80px_80px]"
    >
      <div className="max-w-6xl mx-auto relative md:h-[1350px]">
        {/* ── Header block ── */}
        <div
          data-aos="fade-up"
          className="md:absolute top-10 left-0 md:w-[450px] z-20 mb-16 md:mb-0"
        >
          {skillsContent.badge && (
            <div className="inline-block px-4 py-1.5 rounded-full bg-red-50 border border-red-100 text-[#ff2a2a] text-xs font-bold uppercase tracking-widest mb-4">
              {skillsContent.badge}
            </div>
          )}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] text-gray-900 tracking-tight mb-4">
            {skillsContent.heading}
            {/* Small hand-drawn arrow SVG */}
            <svg
              className="w-8 h-8 text-[#ff2a2a] inline-block ml-2 align-bottom"
              viewBox="0 0 20 20"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M4 4 Q 10 10 15 15 M 15 15 L 10 15 M 15 15 L 15 10" />
            </svg>
          </h2>
          <p className="text-gray-500 text-sm md:text-base leading-relaxed">
            {skillsContent.description}
          </p>
        </div>

        {/* ── Desktop SVG: 3-layer animated path ── */}
        <svg
          className="hidden md:block absolute top-0 left-0 w-full h-[1350px] pointer-events-none z-0"
          viewBox="0 0 1000 1350"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <defs>
            {/* Layer 2: Mask for desktop path animation */}
            <mask id="path-mask">
              <motion.path
                d={desktopPath}
                fill="none"
                stroke="white"
                strokeWidth={20}
                style={{ pathLength }}
              />
            </mask>
          </defs>

          {/* Layer 1: Faint guide path */}
          <path
            d={desktopPath}
            fill="none"
            stroke="#cbd5e1"
            strokeWidth={2}
            strokeDasharray="8 10"
          />

          {/* Layer 3: Real black dashed path revealed by mask */}
          <path
            d={desktopPath}
            fill="none"
            stroke="black"
            strokeWidth={2}
            strokeDasharray="8 10"
            mask="url(#path-mask)"
          />
        </svg>

        {/* ── Mobile SVG: 3-layer straight vertical path ── */}
        <svg
          className="md:hidden absolute top-0 left-1/2 -translate-x-1/2 w-4 h-full pointer-events-none z-0"
          viewBox="0 0 4 100"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <defs>
            {/* Mask for mobile straight vertical path */}
            <mask id="path-mask-mobile">
              <motion.path
                d="M 2,0 L 2,100"
                fill="none"
                stroke="white"
                strokeWidth={20}
                style={{ pathLength }}
              />
            </mask>
          </defs>

          {/* Faint guide line */}
          <path
            d="M 2,0 L 2,100"
            fill="none"
            stroke="#cbd5e1"
            strokeWidth={2}
            strokeDasharray="4 6"
            vectorEffect="non-scaling-stroke"
          />

          {/* Real dashed line revealed by mask */}
          <path
            d="M 2,0 L 2,100"
            fill="none"
            stroke="black"
            strokeWidth={2}
            strokeDasharray="4 6"
            vectorEffect="non-scaling-stroke"
            mask="url(#path-mask-mobile)"
          />
        </svg>

        {/* ── Cards Container ── */}
        <div className="flex flex-col gap-8 md:gap-12 items-center md:block relative z-10">
          {skillsContent.cards.map((card, idx) => (
            <TagCard
              key={card.number}
              number={card.number}
              title={card.title}
              text={card.text}
              className={cardConfigs[idx]?.className || ''}
              aosType={cardConfigs[idx]?.aosType || 'fade-up'}
              aosDelay={cardConfigs[idx]?.aosDelay || 100}
              pathLength={pathLength}
              containerRef={containerRef}
            />
          ))}

          {/* Handwritten end note */}
          {skillsContent.endText && (
            <div
              className="hidden md:block absolute top-[1250px] left-[60%] font-['Caveat',cursive] text-3xl text-gray-600 rotate-6 select-none"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              {skillsContent.endText}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
