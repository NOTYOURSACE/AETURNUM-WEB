import { HERO_STATS } from '../data/content.js'

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-gray-800 pb-20 pt-32 md:pt-40">
      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        <span className="mb-4 block text-xs font-semibold uppercase tracking-widest text-purple-400">
          Growth &amp; Performance Marketing
        </span>
        <h1 className="mb-6 font-serif text-4xl font-bold leading-tight text-white md:text-6xl">
          Meta and TikTok ads, plus email that actually converts
        </h1>
        <p className="mx-auto mb-10 max-w-2xl font-light leading-relaxed text-gray-400">
          We build paid social campaigns and automated email flows that turn ad spend into
          measurable revenue, not vanity metrics.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="#contact"
            className="inline-flex items-center justify-center space-x-2 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 px-8 py-4 text-sm font-medium text-white shadow-lg shadow-purple-600/30 transition-transform hover:scale-[1.02]"
          >
            <span>Book a Call</span>
            <i className="fa-solid fa-arrow-right" aria-hidden="true" />
          </a>
          <a
            href="#services"
            className="inline-flex items-center justify-center rounded-xl border border-gray-700 px-8 py-4 text-sm font-medium text-gray-200 transition-colors hover:border-purple-500 hover:text-white"
          >
            See our services
          </a>
        </div>

        <div className="mx-auto mt-16 grid max-w-3xl grid-cols-1 gap-6 sm:grid-cols-3">
          {HERO_STATS.map((stat) => (
            <div key={stat.label} className="glass-card rounded-2xl p-6">
              <div className={`font-serif text-3xl font-bold ${stat.valueClass}`}>{stat.value}</div>
              <div className="mt-2 text-xs text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}