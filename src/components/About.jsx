import profileImg from '../assets/about/profile.png'
import { aboutContent, education, academy } from '../data/portfolioData'

export default function About() {
  return (
    <section id="about" className="py-24 bg-white text-neutral-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
          <span className="text-xs font-bold uppercase tracking-wider text-[#ff2a2a]">
            Background
          </span>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight mt-2 text-black">
            {aboutContent.heading}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-600">
            A look into my journey, education, and technical foundation.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Illustrated Portrait */}
          <div
            className="lg:col-span-5 flex justify-center"
            data-aos="fade-right"
          >
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-[#ff2a2a] to-red-400 rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition duration-300" />
              <div className="relative overflow-hidden rounded-2xl bg-neutral-900 p-2 shadow-2xl border-4 border-neutral-100">
                <img
                  src={profileImg}
                  alt="Yugandhar Goud Ediga portrait"
                  className="w-72 sm:w-80 h-72 sm:h-80 object-cover rounded-xl transition duration-300 group-hover:scale-105"
                />
              </div>
            </div>
          </div>

          {/* Bio Text & Highlights */}
          <div className="lg:col-span-7 space-y-6" data-aos="fade-left">
            {/* Formatted Bio HTML */}
            <div
              className="text-neutral-700 text-base sm:text-lg leading-relaxed"
              dangerouslySetInnerHTML={{ __html: aboutContent.bio }}
            />

            {/* Tech Stack Chips */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-500 mb-3">
                Core Stack Highlights
              </h4>
              <div className="flex flex-wrap gap-2">
                {aboutContent.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full bg-neutral-100 border border-neutral-200 text-neutral-800 text-xs font-semibold"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Education Card */}
            <div className="p-5 rounded-2xl bg-neutral-50 border border-neutral-200">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#ff2a2a]/10 flex items-center justify-center text-[#ff2a2a] font-bold shrink-0 text-xl">
                  🎓
                </div>
                <div>
                  <h4 className="font-bold text-neutral-900 text-base">
                    {education.degree}
                  </h4>
                  <p className="text-sm text-neutral-600 mt-0.5">
                    {education.institution}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-neutral-500 mt-2 font-medium">
                    <span>Timeline: {education.graduation}</span>
                    {education.cgpa && (
                      <>
                        <span>•</span>
                        <span className="text-[#ff2a2a] font-semibold">
                          CGPA: {education.cgpa}
                        </span>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* TAP Academy Training Card */}
            <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-200">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#ff2a2a]/10 flex items-center justify-center text-[#ff2a2a] font-bold text-xs">
                  TAP
                </div>
                <div>
                  <p className="text-xs text-neutral-500">
                    Placement Training Partner
                  </p>
                  <h5 className="font-semibold text-neutral-900 text-sm">
                    Trained at{' '}
                    <a
                      href={academy.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#ff2a2a] hover:underline"
                    >
                      {academy.name}
                    </a>
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
