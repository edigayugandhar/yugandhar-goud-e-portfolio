import { softSkillsList } from '../data/portfolioData'

// Individual soft skill card with interactive hover effects
function SoftSkillCard({ skill, index }) {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay={index * 100}
      className="bg-[#f8f8f8] border border-gray-200 rounded-3xl p-6 min-h-[220px] text-center flex flex-col items-center justify-center group hover:scale-[1.03] hover:shadow-[0_10px_30px_rgba(255,42,42,0.12)] hover:border-red-200 transition-all duration-300"
    >
      {/* Emoji icon in a rounded square that tints red and scales on group-hover */}
      <div className="w-14 h-14 rounded-2xl bg-white border border-gray-100 shadow-sm flex items-center justify-center text-2xl group-hover:bg-red-50 group-hover:scale-110 group-hover:border-red-100 transition-all duration-300 mb-4">
        {skill.icon}
      </div>

      {/* Uppercase Name */}
      <h3 className="text-base font-black uppercase text-gray-900 tracking-wider mb-2 group-hover:text-[#ff2a2a] transition-colors">
        {skill.name}
      </h3>

      {/* Description */}
      <p className="text-xs text-gray-500 leading-relaxed max-w-[220px]">
        {skill.desc}
      </p>
    </div>
  )
}

export default function SoftSkills() {
  return (
    <section
      id="competencies"
      className="bg-white pt-24 pb-32 px-6 md:px-12 relative overflow-hidden bg-[linear-gradient(to_right,#80808006_1px,transparent_1px),linear-gradient(to_bottom,#80808006_1px,transparent_1px)] bg-[size:60px_60px]"
    >
      {/* Torn-paper divider at the top (rotate-180, fill-[#0a0a0a]) */}
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

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header (centred) */}
        <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
          <div className="inline-block px-4 py-1.5 rounded-full bg-red-50 border border-red-100 text-[#ff2a2a] text-xs font-bold uppercase tracking-widest mb-4">
            Core Competencies
          </div>
          <h2 className="text-4xl md:text-5xl font-black uppercase text-gray-900 tracking-tight mb-4">
            Professional Soft Skills
          </h2>
          <p className="text-gray-500 text-sm md:text-base max-w-xl mx-auto">
            Essential interpersonal qualities and collaborative attributes driving software delivery and team success.
          </p>
        </div>

        {/* Grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {softSkillsList.map((skill, index) => (
            <SoftSkillCard
              key={skill.name}
              skill={skill}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
