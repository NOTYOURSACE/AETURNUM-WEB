import { ABOUT_POINTS, INCLUDED } from '../data/content.js'

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden border-y border-gray-800 py-24"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="mb-3 block text-xs font-semibold uppercase tracking-widest text-purple-400">
              Why Choose Aeturnum
            </span>
            <h2 className="mb-6 font-serif text-3xl font-bold leading-tight text-white md:text-5xl">
              Built on Precision, Focused on ROI.
            </h2>
            <p className="mb-8 font-light leading-relaxed text-gray-400">
              We combine a data-first approach with rigorous marketing science. While other
              agencies focus on vanity metrics like likes and followers, we focus on your bottom
              line, customer acquisition cost, and revenue growth.
            </p>

            <div className="space-y-6">
              {ABOUT_POINTS.map((point) => (
                <div key={point.title} className="flex items-start space-x-4">
                  <div className="mt-1 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl border border-purple-500/30 bg-purple-600/20 text-purple-400">
                    <i className={`fa-solid ${point.icon}`} aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold text-white">{point.title}</h3>
                    <p className="text-sm text-gray-400">{point.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="glass-card relative z-10 rounded-3xl border-purple-500/30 p-8 md:p-12">
              <div className="mb-6 flex items-center space-x-3" aria-hidden="true">
                <div className="h-3 w-3 rounded-full bg-rose-500" />
                <div className="h-3 w-3 rounded-full bg-yellow-500" />
                <div className="h-3 w-3 rounded-full bg-green-500" />
              </div>
              <div className="mb-2 font-mono text-xs uppercase tracking-widest text-purple-400">
                What&apos;s included
              </div>
              <h3 className="mb-6 font-serif text-2xl font-bold text-white">
                Every engagement includes
              </h3>

              <ul className="space-y-4">
                {INCLUDED.map((item) => (
                  <li key={item} className="flex items-start space-x-3 text-sm text-gray-300">
                    <i
                      className="fa-solid fa-check mt-1 text-xs text-purple-400"
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex items-center justify-between border-t border-gray-800 pt-6 text-xs text-gray-400">
                <span>Now taking on new clients</span>
                <a href="#contact" className="font-medium text-white hover:text-purple-400">
                  Book a free audit
                </a>
              </div>
            </div>
            <div
              aria-hidden="true"
              className="absolute -bottom-6 -right-6 -z-10 h-72 w-72 rounded-full bg-purple-600/10 blur-3xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}