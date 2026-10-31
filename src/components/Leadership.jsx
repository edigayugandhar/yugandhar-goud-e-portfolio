import { leadershipList } from '../data/portfolioData'

// Single timeline item component with alternating layout
function LeadershipItem({ item, index }) {
  const isEven = index % 2 === 0

  return (
    <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between mb-12 last:mb-0 w-full">
      {/* Glowing red checkpoint dot on the vertical timeline */}
      <div className="absolute top-6 left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#ff2a2a] shadow-[0_0_14px_rgba(255,42,42,0.9)] border-2 border-[#0a0a0a] z-10" />

      {/* Even Index: Card on Left (md:text-right), Spacer on Right */}
      {isEven ? (
        <>
          <div
            data-aos="fade-right"
            className="w-[calc(100%-2.5rem)] ml-10 md:ml-0 md:w-[45%] md:text-right"
          >
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:border-red-500/40 hover:scale-[1.02] transition-all duration-300 group shadow-lg">
              {item.badge && (
                <div className="mb-3">
                  <span className="inline-block px-3 py-1 rounded-full bg-[#ff2a2a]/10 border border-[#ff2a2a]/20 text-[#ff2a2a] text-xs font-bold uppercase tracking-widest">
                    {item.badge}
                  </span>
                </div>
              )}
              <h3 className="text-xl md:text-2xl font-black text-white group-hover:text-[#ff2a2a] transition-colors mb-2">
                {item.title}
              </h3>
              <p className="font-mono uppercase text-xs tracking-wider text-red-400 mb-4">
                {item.role}
              </p>
              <p className="text-white/60 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
          <div className="hidden md:block md:w-[45%]" aria-hidden="true" />
        </>
      ) : (
        /* Odd Index: Spacer on Left, Card on Right (md:text-left) */
        <>
          <div className="hidden md:block md:w-[45%]" aria-hidden="true" />
          <div
            data-aos="fade-left"
            className="w-[calc(100%-2.5rem)] ml-10 md:ml-0 md:w-[45%] md:text-left"
          >
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:border-red-500/40 hover:scale-[1.02] transition-all duration-300 group shadow-lg">
              {item.badge && (
                <div className="mb-3">
                  <span className="inline-block px-3 py-1 rounded-full bg-[#ff2a2a]/10 border border-[#ff2a2a]/20 text-[#ff2a2a] text-xs font-bold uppercase tracking-widest">
                    {item.badge}
                  </span>
                </div>
              )}
              <h3 className="text-xl md:text-2xl font-black text-white group-hover:text-[#ff2a2a] transition-colors mb-2">
                {item.title}
              </h3>
              <p className="font-mono uppercase text-xs tracking-wider text-red-400 mb-4">
                {item.role}
              </p>
              <p className="text-white/60 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default function Leadership() {
  return (
    <section
      id="activities"
      className="bg-[#0a0a0a] bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:80px_80px] pt-24 pb-32 px-6 md:px-12 relative overflow-hidden"
    >
      {/* Torn-paper divider at the top (rotate-180, fill-[#ff2a2a]) */}
      <div className="absolute top-0 left-0 right-0 w-full overflow-hidden leading-none pointer-events-none rotate-180 -translate-y-[1px]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-12 md:h-20 fill-[#ff2a2a]"
          aria-hidden="true"
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z" />
        </svg>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header (centred) */}
        <div className="text-center max-w-3xl mx-auto mb-20" data-aos="fade-up">
          <div className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[#ff2a2a] text-xs font-semibold uppercase tracking-widest mb-4">
            Activities
          </div>
          <h2 className="text-4xl md:text-5xl font-black uppercase text-white tracking-tight mb-4">
            Leadership &amp; Engagement
          </h2>
          <p className="text-white/50 text-sm md:text-base max-w-xl mx-auto">
            Certifications, hackathons, open-source involvement, and technical leadership milestones.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative">
          {/* 2px gradient line: at left-4 on mobile and centre on md+ */}
          <div className="absolute top-0 bottom-0 left-4 md:left-1/2 -translate-x-1/2 w-[2px] bg-gradient-to-b from-[#ff2a2a] via-red-500/50 to-white/10 pointer-events-none" />

          {/* Timeline Items */}
          <div className="relative z-10">
            {leadershipList.map((item, index) => (
              <LeadershipItem
                key={`${item.title}-${index}`}
                item={item}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
