import { useState } from 'react'
import { GOALS, SITE } from '../data/content.js'

// Set VITE_FORM_ENDPOINT in .env (see .env.example). Formspree-style JSON endpoints work.
const FORM_ENDPOINT = import.meta.env.VITE_FORM_ENDPOINT

const INITIAL_VALUES = { name: '', email: '', website: '', goal: GOALS[0].value, company: '' }

const inputClass =
  'w-full rounded-xl border border-gray-700 bg-deepspace/80 px-4 py-3 text-sm text-white placeholder-gray-500 transition-colors focus:border-purple-500'

const labelClass = 'mb-2 block text-sm font-medium text-gray-300'

function normalizeUrl(value) {
  const trimmed = value.trim()
  if (!trimmed) return trimmed
  return /^https?:\/\//i.test(trimmed) ? trimmed : `https://${trimmed}`
}

export default function Contact() {
  const [values, setValues] = useState(INITIAL_VALUES)
  const [status, setStatus] = useState('idle') // idle | sending | success | error
  const [errorKind, setErrorKind] = useState(null) // 'unconfigured' | 'failed'

  const handleChange = (event) => {
    const { name, value } = event.target
    setValues((current) => ({ ...current, [name]: value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    // Hidden honeypot field: real visitors never fill it in, bots often do.
    if (values.company) {
      setStatus('success')
      return
    }

    if (!FORM_ENDPOINT) {
      setErrorKind('unconfigured')
      setStatus('error')
      return
    }

    setStatus('sending')
    setErrorKind(null)

    try {
      const goal = GOALS.find((item) => item.value === values.goal)
      const response = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: values.name.trim(),
          email: values.email.trim(),
          website: normalizeUrl(values.website),
          goal: goal ? goal.label : values.goal,
          _subject: 'New strategy call request from the Aeturnum website',
        }),
      })

      if (!response.ok) throw new Error(`Request failed with status ${response.status}`)

      setValues(INITIAL_VALUES)
      setStatus('success')
    } catch (error) {
      console.error('Contact form error:', error)
      setErrorKind('failed')
      setStatus('error')
    }
  }

  const sending = status === 'sending'

  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-gray-800 py-24"
    >
      <div className="relative z-10 mx-auto max-w-4xl px-6">
        <div className="glass-card rounded-3xl border-purple-500/30 p-8 shadow-2xl md:p-14">
          <div className="mx-auto mb-10 max-w-xl text-center">
            <span className="mb-3 block text-xs font-semibold uppercase tracking-widest text-purple-400">
              Get Started Today
            </span>
            <h2 className="mb-4 font-serif text-3xl font-bold text-white md:text-4xl">
              Ready to Scale Your Brand?
            </h2>
            <p className="text-sm font-light text-gray-400">
              Fill out the short form below to book a discovery call and claim your custom growth
              audit.
            </p>
          </div>

          {status === 'success' ? (
            <div
              role="status"
              className="rounded-2xl border border-purple-500/50 bg-purple-950/80 p-6 text-center"
            >
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-purple-600/30 text-xl text-purple-400">
                <i className="fa-solid fa-check" aria-hidden="true" />
              </div>
              <h3 className="mb-1 font-serif text-lg font-bold text-white">
                Request received
              </h3>
              <p className="text-xs font-light text-gray-300 md:text-sm">
                Thank you! One of our growth strategists will review your website and contact you
                within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                  <label htmlFor="name" className={labelClass}>
                    Your full name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    value={values.name}
                    onChange={handleChange}
                    className={inputClass}
                    placeholder="Jane Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className={labelClass}>
                    Business email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    value={values.email}
                    onChange={handleChange}
                    className={inputClass}
                    placeholder="jane@brand.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                  <label htmlFor="website" className={labelClass}>
                    Website URL
                  </label>
                  <input
                    id="website"
                    name="website"
                    type="text"
                    inputMode="url"
                    required
                    autoComplete="url"
                    value={values.website}
                    onChange={handleChange}
                    className={inputClass}
                    placeholder="yourbrand.com"
                  />
                </div>
                <div>
                  <label htmlFor="goal" className={labelClass}>
                    Primary growth goal
                  </label>
                  <select
                    id="goal"
                    name="goal"
                    value={values.goal}
                    onChange={handleChange}
                    className={inputClass}
                  >
                    {GOALS.map((goal) => (
                      <option key={goal.value} value={goal.value}>
                        {goal.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Honeypot: hidden from people and assistive tech */}
              <div className="hidden" aria-hidden="true">
                <label htmlFor="company">Company (leave blank)</label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  value={values.company}
                  onChange={handleChange}
                />
              </div>

              {status === 'error' && (
                <p
                  role="alert"
                  className="rounded-xl border border-rose-500/40 bg-rose-950/60 px-4 py-3 text-sm text-rose-200"
                >
                  {errorKind === 'unconfigured'
                    ? "The contact form isn't connected yet."
                    : "We couldn't send your request. Please try again."}
                  {SITE.email && (
                    <>
                      {' '}
                      You can also email us at{' '}
                      <a href={`mailto:${SITE.email}`} className="underline">
                        {SITE.email}
                      </a>
                      .
                    </>
                  )}
                </p>
              )}

              <button
                type="submit"
                disabled={sending}
                className="flex w-full items-center justify-center space-x-2 rounded-xl bg-gradient-to-r from-purple-600 via-purple-500 to-rose-500 py-4 text-sm font-medium text-white shadow-lg shadow-purple-600/30 transition-transform hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:scale-100"
              >
                {sending ? (
                  <>
                    <i className="fa-solid fa-spinner fa-spin" aria-hidden="true" />
                    <span>Sending…</span>
                  </>
                ) : (
                  <>
                    <span>Book Your Strategy Call</span>
                    <i className="fa-solid fa-arrow-right" aria-hidden="true" />
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}