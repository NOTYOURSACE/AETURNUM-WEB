import { STAFFING_INCLUDED } from '../data/content.js'

export default function CallCenterIncluded() {
  return (
    <section className="border-y border-gray-800 py-24">
      <div className="mx-auto max-w-3xl px-6">
        <span className="mb-3 block text-center text-xs font-semibold uppercase tracking-widest text-purple-400">
          How We Work
        </span>
        <h2 className="mb-10 text-center font-serif text-3xl font-bold text-white md:text-4xl">
          What every staffing engagement includes
        </h2>

        <ul className="space-y-4">
          {STAFFING_INCLUDED.map((item) => (
            <li
              key={item}
              className="glass-card flex items-start space-x-3 rounded-2xl p-5 text-sm text-gray-300"
            >
              <i className="fa-solid fa-check mt-1 text-xs text-purple-400" aria-hidden="true" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}