import { SITE, SOCIAL_LINKS } from '../data/content.js'
import Logo from './ui/Logo.jsx'

const wrapperClass =
  'mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 md:flex-row'
const emailClass = 'text-sm text-gray-300 transition-colors hover:text-purple-400'
const socialClass = 'text-lg transition-colors hover:text-purple-400'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-gray-800 py-12">
      <div className={wrapperClass}>
        <Logo compact />

        <div className="text-center text-xs text-gray-400">
          {SITE.email ? (
            <p className="mb-2">
              <i className="fa-solid fa-envelope mr-2 text-purple-400" aria-hidden="true" />
              <a href={'mailto:' + SITE.email} className={emailClass}>
                {SITE.email}
              </a>
            </p>
          ) : null}
          <p>&copy; {year} Aeturnum Agency. All rights reserved. Engineered for Growth.</p>
        </div>

        <ul className="flex items-center space-x-6 text-sm text-gray-400">
          {SOCIAL_LINKS.map((link) => (
            <li key={link.label}>
              <a href={link.href} aria-label={link.label} className={socialClass}>
                <i className={'fa-brands ' + link.icon} aria-hidden="true" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}