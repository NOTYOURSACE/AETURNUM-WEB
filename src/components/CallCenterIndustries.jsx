import { STAFFING_INDUSTRIES } from '../data/content.js'
import SectionHeading from './ui/SectionHeading.jsx'

export default function CallCenterIndustries() {
  return (
    <section id="staffing-industries" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading eyebrow="Who We Staff For" title="Built for three industries" className="mb-16">
          Each vertical gets agents trained specifically for it, not a generalist reading a
          shared script.
        </SectionHeading>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {STAFFING_INDUSTRIES.map((industry) => (
            <article key={industry.title} className="glass-card glass-card-hover rounded-3xl p-8">
              <div
                className={`mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border text-2xl ${industry.iconClass}`}
              >
                <i className={`fa-solid ${industry.icon}`} aria-hidden="true" />
              </div>
              <h3 className="mb-4 text-xl font-bold text-white">{industry.title}</h3>
              <p className="text-sm leading-relaxed text-gray-400">{industry.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}