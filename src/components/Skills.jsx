import { technicalSkills, softSkillsList } from '../data/portfolioData'

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
            Technical &amp; Professional Skills
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-400">
            A comprehensive overview of programming languages, frameworks, databases, and developer tools in my stack.
          </p>
        </div>

        {/* Technical Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {technicalSkills.categories.map((category, catIdx) => (
            <div
              key={category.title}
              data-aos="fade-up"
              data-aos-delay={catIdx * 100}
              className="bg-black/60 rounded-2xl p-6 border border-neutral-800 hover:border-[#ff2a2a]/50 transition duration-300 flex flex-col justify-between group shadow-lg"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-[#ff2a2a] mb-5 group-hover:scale-110 transition-transform font-bold text-sm">
                  0{catIdx + 1}
                </div>
                <h3 className="text-lg font-bold text-white mb-4">
                  {category.title}
                </h3>
                <ul className="space-y-2.5">
                  {category.skills.map((skill) => (
                    <li
                      key={skill.name}
                      className="text-sm text-neutral-300 flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#ff2a2a]" />
                      <span>{skill.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Soft Skills Section */}
        <div className="pt-8 border-t border-neutral-900" data-aos="fade-up">
          <h3 className="text-center text-xl font-bold text-white mb-8">
            Professional &amp; Soft Skills
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {softSkillsList.map((skill, sIdx) => (
              <div
                key={skill.name}
                data-aos="fade-up"
                data-aos-delay={sIdx * 100}
                className="p-5 rounded-xl bg-neutral-950 border border-neutral-800 hover:border-neutral-700 transition-colors"
              >
                <div className="text-2xl mb-2">{skill.icon}</div>
                <h4 className="font-bold text-white text-base mb-1.5">
                  {skill.name}
                </h4>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  {skill.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
