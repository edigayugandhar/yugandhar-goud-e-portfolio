import { internshipsList } from '../data/portfolioData'

// Individual internship card component
export function InternshipCard({ intern, index }) {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay={index * 150}
      className="bg-black/20 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:scale-[1.02] transition-all duration-300 flex flex-col justify-between"
    >
      <div>
        {/* Top row: duration (mono, text-white/40, uppercase) and "Internship" mini badge */}
        <div className="flex items-center justify-between gap-4 mb-5">
          <span className="font-mono text-xs text-white/40 uppercase tracking-wider">
            {intern.duration}
          </span>
          <span className="px-3 py-1 rounded-full bg-white/10 text-white text-xs font-bold uppercase tracking-widest">
            Internship
          </span>
        </div>

        {/* Role & Organization */}
        <h3 className="text-2xl font-black text-white tracking-tight mb-1">
          {intern.role}
        </h3>
        <p className="text-sm font-bold uppercase tracking-wider text-red-200 mb-6">
          {intern.organization}
        </p>

        {/* Skills Gained: bulleted list */}
        {intern.skills && intern.skills.length > 0 && (
          <div className="mb-6">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white/80 mb-3">
              Skills Gained:
            </h4>
            <ul className="space-y-2">
              {intern.skills.map((skill, sIdx) => (
                <li key={sIdx} className="text-sm text-white/80 flex items-start gap-2">
                  <span className="text-red-300 mt-1">•</span>
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Technologies: row of mono pills at bottom (border-t) */}
      {intern.tech && intern.tech.length > 0 && (
        <div className="border-t border-white/10 pt-5 mt-auto">
          <h4 className="text-xs font-bold uppercase tracking-wider text-white/60 mb-2">
            Technologies:
          </h4>
          <div className="flex flex-wrap gap-2">
            {intern.tech.map((techItem, tIdx) => (
              <span
                key={tIdx}
                className="font-mono text-xs px-2.5 py-1 rounded-md bg-black/30 border border-white/10 text-white/90"
              >
                {techItem}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default function Internships() {
  return (
    <section
      id="experience"
      className="bg-[#ff2a2a] pt-24 pb-32 px-6 md:px-12 relative overflow-hidden"
    >
      {/* Torn-paper SVG divider at the top edge */}
      <div className="absolute top-0 left-0 right-0 w-full overflow-hidden leading-none pointer-events-none rotate-180 -translate-y-[1px]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-12 md:h-20 fill-[#0a0a0a]"
          aria-hidden="true"
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z" />
        </svg>
      </div>

      {/* Decorative pulsing black star bottom-left at 20% opacity */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="absolute bottom-10 left-8 w-12 h-12 opacity-20 animate-pulse pointer-events-none"
        aria-hidden="true"
      >
        <path fill="black" d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z" />
      </svg>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header (centred) */}
        <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-black uppercase text-black tracking-tight mb-4">
            Work Experience
          </h2>
          <p className="text-base md:text-lg text-red-100 max-w-xl mx-auto">
            Practical engineering experience, software internships, and development roles.
          </p>
        </div>

        {/* Grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 */}
        {internshipsList && internshipsList.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
            {internshipsList.map((intern, index) => (
              <InternshipCard
                key={`${intern.organization}-${index}`}
                intern={intern}
                index={index}
              />
            ))}
          </div>
        ) : (
          <div
            className="text-center py-12 px-6 bg-black/20 backdrop-blur-md rounded-3xl border border-white/10 max-w-xl mx-auto"
            data-aos="fade-up"
          >
            <p className="text-white font-bold text-lg mb-1">
              Open to New Opportunities
            </p>
            <p className="text-sm text-red-100">
              Actively seeking entry-level Java Full Stack Developer and Software Engineer roles.
            </p>
          </div>
        )}
      </div>
    </section>
  )
}
