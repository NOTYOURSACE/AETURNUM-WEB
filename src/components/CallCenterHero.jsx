export default function CallCenterHero() {
  return (
    <section className="relative overflow-hidden border-b border-gray-800 pb-20 pt-32 md:pt-40">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <span className="mb-4 block text-xs font-semibold uppercase tracking-widest text-purple-400">
          Call Center Staffing
        </span>
        <h1 className="mb-6 font-serif text-4xl font-bold leading-tight text-white md:text-6xl">
          Trained call center agents for HVAC, Medicare &amp; Solar
        </h1>
        <p className="mx-auto mb-10 max-w-2xl font-light leading-relaxed text-gray-400">
          We staff and train dedicated calling teams for home services and insurance sales.
          Agents learn your script, your offer and your compliance rules before they take a
          single call on your behalf.
        </p>
        <a
          href="#staffing-contact"
          className="inline-flex items-center justify-center space-x-2 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 px-8 py-4 text-sm font-medium text-white shadow-lg shadow-purple-600/30 transition-transform hover:scale-[1.02]"
        >
          <span>Talk to us about staffing</span>
          <i className="fa-solid fa-arrow-right" aria-hidden="true" />
        </a>
      </div>
    </section>
  )
}