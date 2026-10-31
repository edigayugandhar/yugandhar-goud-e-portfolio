import profileImg from '../assets/about/profile.png'
import { aboutData, academy } from '../data/portfolioData'

export default function About() {
  return (
    <section id="about" className="py-24 bg-white text-neutral-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
          <span className="text-xs font-bold uppercase tracking-wider text-[#ff2a2a]">
            Discover
          </span>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight mt-2 text-black">
            {aboutData.title}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-600">
            {aboutData.subtitle}
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
                  alt="Yugandhar Goud E portrait"
                  className="w-72 sm:w-80 h-72 sm:h-80 object-cover rounded-xl transition duration-300 group-hover:scale-105"
                />
              </div>
            </div>
          </div>

          {/* Bio Text & Highlights */}
          <div className="lg:col-span-7 space-y-6" data-aos="fade-left">
            {aboutData.paragraphs.map((paragraph, index) => (
              <p key={index} className="text-neutral-700 text-base sm:text-lg leading-relaxed">
                {paragraph}
              </p>
            ))}

            {/* TAP Academy Training Badge */}
            <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-200">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#ff2a2a]/10 flex items-center justify-center text-[#ff2a2a] font-bold text-lg">
                  TAP
                </div>
                <div>
                  <h4 className="font-semibold text-neutral-900 text-sm">
                    Trained at{' '}
                    <a
                      href={academy.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#ff2a2a] hover:underline"
                    >
                      {academy.name}
                    </a>
                  </h4>
                  <p className="text-xs text-neutral-500 mt-0.5">
                    {academy.description}
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-neutral-200">
              {aboutData.stats.map((stat, idx) => (
                <div key={idx} className="text-left">
                  <div className="text-2xl sm:text-3xl font-extrabold text-[#ff2a2a]">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm font-medium text-neutral-600 mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
