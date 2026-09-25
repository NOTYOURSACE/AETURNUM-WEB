import ParticleField from './ParticleField.jsx'

// Renders once per page, fixed behind all content, so the particle field is
// visible the whole way down the page instead of just inside the hero.
// Sections need a transparent (or semi-transparent) background for this to
// actually show through — see the section components for that half of it.
export default function SiteBackground() {
  return (
    <div className="fixed inset-0 z-0 bg-deepspace" aria-hidden="true">
      <ParticleField />
    </div>
  )
}