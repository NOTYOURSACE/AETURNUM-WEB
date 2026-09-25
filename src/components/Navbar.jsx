import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { NAV_LINKS } from '../data/content.js'
import Logo from './ui/Logo.jsx'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return undefined
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [open])

  const closeMenu = () => setOpen(false)

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b border-gray-800 backdrop-blur-md transition-shadow duration-300 ${
        scrolled ? 'bg-deepspace/95 shadow-xl' : 'bg-deepspace/80'
      }`}
    >
      <div className="mx-auto flex min-h-[5rem] max-w-7xl items-center justify-between gap-6 px-6 py-3">
        <a href="#" className="group shrink-0" aria-label="Aeturnum home">
          <Logo />
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-6 whitespace-nowrap text-sm font-medium text-gray-300 lg:flex">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={`/${link.href}`} className="transition-colors hover:text-purple-400">
              {link.label}
            </a>
          ))}
          <Link to="/call-center-services" className="transition-colors hover:text-purple-400">
            Call Center Services
          </Link>
        </nav>

        <div className="hidden shrink-0 items-center lg:flex">
          <a
            href="/#contact"
            className="whitespace-nowrap rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 px-5 py-2.5 text-sm font-medium text-white shadow-lg shadow-purple-600/30 transition-all hover:scale-[1.02] hover:shadow-purple-600/50"
          >
            Book a Call
          </a>
        </div>

        <button
          type="button"
          className="p-2 text-gray-300 lg:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((value) => !value)}
        >
          <i className={`fa-solid ${open ? 'fa-xmark' : 'fa-bars'} text-xl`} aria-hidden="true" />
        </button>
      </div>

      {open && (
        <nav
          id="mobile-menu"
          aria-label="Mobile"
          className="space-y-4 border-b border-gray-800 bg-charcoal px-6 py-6 shadow-2xl lg:hidden"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={`/${link.href}`}
              onClick={closeMenu}
              className="block font-medium text-gray-300 hover:text-purple-400"
            >
              {link.label}
            </a>
          ))}
          <Link
            to="/call-center-services"
            onClick={closeMenu}
            className="block font-medium text-gray-300 hover:text-purple-400"
          >
            Call Center Services
          </Link>
          <div className="pt-2">
            <a
              href="/#contact"
              onClick={closeMenu}
              className="block w-full rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 py-3 text-center font-medium text-white shadow-lg"
            >
              Book a Call
            </a>
          </div>
        </nav>
      )}
    </header>
  )
}