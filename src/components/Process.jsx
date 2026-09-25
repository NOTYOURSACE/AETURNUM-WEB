import { PROCESS_STEPS } from '../data/content.js'
import SectionHeading from './ui/SectionHeading.jsx'

export default function Process() {
  return (
    <section id="process" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading eyebrow="How It Works" title="How We Work With You" className="mb-16">
          A simple process, from your first call to ongoing optimization.
        </SectionHeading>

        <ol className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {PROCESS_STEPS.map((step, index) => (
            <li key={step.title} className="glass-card rounded-3xl p-8">
              <div
                aria-hidden="true"
                className="mb-6 flex h-10 w-10 items-center justify-center rounded-full border border-purple-500/30 bg-purple-600/20 font-serif text-lg font-bold text-purple-300"
              >
                {index + 1}
              </div>
              <h3 className="mb-3 text-lg font-bold text-white">{step.title}</h3>
              <p className="text-sm leading-relaxed text-gray-400">{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}