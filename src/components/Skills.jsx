import { skillsData } from '../data/portfolioData'

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-[#0a0a0a] text-white border-t border-neutral-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
          <span className="text-xs font-bold uppercase tracking-wider text-[#ff2a2a]">
            Capabilities
          </span>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight mt-2 text-white">
            Skills &amp; Expertise
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-400">
            A comprehensive overview of modern technologies and tools I utilize in daily development.
          </p>
        </div>

        {/* Skill Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillsData.map((category, catIdx) => (
            <div
              key={category.category}
              data-aos="fade-up"
              data-aos-delay={catIdx * 150}
              className="bg-black/60 rounded-2xl p-6 sm:p-8 border border-neutral-800 hover:border-[#ff2a2a]/50 transition duration-300 flex flex-col justify-between group shadow-lg"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-[#ff2a2a] mb-6 group-hover:scale-110 transition-transform">
                  <span className="font-bold text-lg">0{catIdx + 1}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-6">
                  {category.category}
                </h3>
                <ul className="space-y-4">
                  {category.skills.map((skill) => (
                    <li
                      key={skill.name}
                      className="flex items-center justify-between py-2 border-b border-neutral-900 last:border-0"
                    >
                      <span className="text-sm font-medium text-neutral-300">
                        {skill.name}
                      </span>
                      <span className="text-xs px-2.5 py-1 rounded-full bg-neutral-900 text-[#ff2a2a] border border-neutral-800 font-semibold">
                        {skill.level}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
