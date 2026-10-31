import { projects } from '../data/portfolioData'

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-white text-neutral-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
          <span className="text-xs font-bold uppercase tracking-wider text-[#ff2a2a]">
            Portfolio
          </span>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight mt-2 text-black">
            Featured Projects
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-600">
            Real-world full-stack and backend systems built with Java, Servlets, REST APIs, and relational databases.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {projects.map((project, idx) => (
            <div
              key={project.id}
              data-aos="fade-up"
              data-aos-delay={idx * 150}
              className={`flex flex-col justify-between rounded-2xl bg-neutral-50 border transition-all duration-300 p-6 sm:p-8 group shadow-sm hover:shadow-xl ${
                project.isFlagship
                  ? 'border-[#ff2a2a]/40 ring-1 ring-[#ff2a2a]/20'
                  : 'border-neutral-200 hover:border-[#ff2a2a]/60'
              }`}
            >
              <div>
                {/* Badge Header */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-neutral-400">
                    Project {project.number}
                  </span>
                  {project.badge && (
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#ff2a2a]/10 text-[#ff2a2a] border border-[#ff2a2a]/20">
                      {project.badge}
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-neutral-900 mb-3 group-hover:text-[#ff2a2a] transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-neutral-600 leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.techTags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2.5 py-1 rounded-md bg-neutral-200/80 text-neutral-800 font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Links */}
              <div className="flex items-center justify-between pt-5 border-t border-neutral-200">
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-neutral-900 hover:text-[#ff2a2a] transition-colors"
                >
                  GitHub Repository &rarr;
                </a>
                {project.links.demo ? (
                  <a
                    href={project.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold px-3 py-1.5 rounded-full bg-[#ff2a2a] text-white hover:bg-[#e02424] transition-colors"
                  >
                    Live Demo
                  </a>
                ) : (
                  <span className="text-xs text-neutral-400 font-medium">
                    Demo Coming Soon
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
