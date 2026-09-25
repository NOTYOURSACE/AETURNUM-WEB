export default function SectionHeading({ eyebrow, title, children, className = '' }) {
  return (
    <div className={`mx-auto max-w-3xl text-center ${className}`}>
      <span className="mb-3 block text-xs font-semibold uppercase tracking-widest text-purple-400">
        {eyebrow}
      </span>
      <h2
        className={`font-serif text-3xl font-bold text-white md:text-5xl ${
          children ? 'mb-6' : ''
        }`}
      >
        {title}
      </h2>
      {children && <p className="font-light text-gray-400">{children}</p>}
    </div>
  )
}
