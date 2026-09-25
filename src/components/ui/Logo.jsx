// The logo image lives in the "public" folder.
const LOGO_SRC = '/logo.png'

const nameClass = 'font-serif font-bold tracking-wider text-white'
const taglineClass = 'text-[11px] font-medium uppercase tracking-widest text-purple-400'

export default function Logo({ compact = false }) {
  const height = compact ? 'h-8' : 'h-11'

  return (
    <span className="flex items-center gap-3">
      <img
        src={LOGO_SRC}
        alt=""
        className={height + ' w-auto object-contain transition-transform group-hover:scale-105'}
      />
      <span className="flex flex-col">
        <span className={nameClass + (compact ? ' text-lg' : ' text-2xl')}>AETURNUM</span>
        {compact ? null : <span className={taglineClass}>Performance Agency</span>}
      </span>
    </span>
  )
}
