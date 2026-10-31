import { projectsData } from '../data/portfolioData'

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
            Selected applications and experiments reflecting full-stack and modern frontend craftsmanship.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, idx) => (
            <div
              key={project.id}
              data-aos="fade-up"
              data-aos-delay={idx * 150}
              className="flex flex-col justify-between rounded-2xl bg-neutral-50 border border-neutral-200 hover:border-[#ff2a2a]/60 hover:shadow-xl transition-all duration-300 p-6 sm:p-8 group"
            >
              <div>
                {/* Project Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#ff2a2a]">
                    Project 0{project.id}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-neutral-900 mb-3 group-hover:text-[#ff2a2a] transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-neutral-600 leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2.5 py-1 rounded-md bg-neutral-200/70 text-neutral-800 font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Links */}
              <div className="flex items-center gap-4 pt-4 border-t border-neutral-200">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-semibold text-[#ff2a2a] hover:underline"
                >
                  Live Demo &rarr;
                </a>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-semibold text-neutral-700 hover:text-black transition-colors"
                >
                  Source Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
