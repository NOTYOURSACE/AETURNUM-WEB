import { SERVICES } from '../data/content.js'
import SectionHeading from './ui/SectionHeading.jsx'

export default function Services() {
  return (
    <section id="services" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading eyebrow="What We Do" title="Growth & Performance Services" className="mb-16">
          Comprehensive digital acquisition and retention solutions engineered to maximize customer
          lifetime value.
        </SectionHeading>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {SERVICES.map((service) => (
            <article
              key={service.title}
              className={`glass-card glass-card-hover flex flex-col justify-between rounded-3xl p-8 motion-safe:hover:-translate-y-2 ${
                service.featured ? 'border-purple-500/30' : ''
              }`}
            >
              <div>
                <div
                  className={`mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border text-2xl ${service.iconClass}`}
                >
                  <i className={`fa-solid ${service.icon}`} aria-hidden="true" />
                </div>
                <h3 className="mb-4 text-xl font-bold text-white">{service.title}</h3>
                <p className="mb-6 text-sm leading-relaxed text-gray-400">{service.description}</p>
              </div>
              <ul className="space-y-2 border-t border-gray-800 pt-4 text-xs text-gray-300">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center space-x-2">
                    <i className={`fa-solid fa-check ${service.checkClass}`} aria-hidden="true" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}