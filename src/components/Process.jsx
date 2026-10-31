import { processSteps } from '../data/portfolioData'

export default function Process() {
  return (
    <section id="process" className="py-24 bg-black text-white border-t border-neutral-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
          <span className="text-xs font-bold uppercase tracking-wider text-[#ff2a2a]">
            Workflow
          </span>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight mt-2 text-white">
            How I Build Software
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-400">
            A disciplined, quality-first process transforming ideas into scalable web solutions.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step, idx) => (
            <div
              key={step.step}
              data-aos="fade-up"
              data-aos-delay={idx * 150}
              className="relative p-6 rounded-2xl bg-[#0a0a0a] border border-neutral-800 hover:border-[#ff2a2a]/60 transition-all duration-300 group hover:-translate-y-1"
            >
              <div className="text-4xl font-black text-neutral-800 group-hover:text-[#ff2a2a] transition-colors mb-4">
                {step.step}
              </div>
              <h3 className="text-lg font-bold text-white mb-3">
                {step.title}
              </h3>
              <p className="text-sm text-neutral-400 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
