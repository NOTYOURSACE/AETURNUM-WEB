import { lazy, Suspense } from 'react'
import SectionHeading from './ui/SectionHeading.jsx'

const InfinityNode = lazy(() => import('./three/InfinityNode.jsx'))

export default function InfinityNodeSection() {
  return (
    <section
      id="approach"
      className="relative overflow-hidden border-y border-gray-800 bg-charcoal/30 py-24"
    >
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading eyebrow="Our Approach" title="The Aeturnum Infinity Node" className="mb-16">
          A live 3D model of how we work: acquisition feeds retention, retention funds more
          acquisition, and the loop keeps compounding. Spin it and see.
        </SectionHeading>

        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-3">
          <div className="glass-card space-y-6 rounded-3xl p-8">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-purple-500/30 bg-purple-600/20 text-xl text-purple-400">
              <i className="fa-solid fa-arrows-spin" aria-hidden="true" />
            </div>
            <h3 className="text-xl font-bold text-white">Dynamic 3D Rotation</h3>
            <p className="text-sm leading-relaxed text-gray-400">
              Move your cursor across the model to tilt it, or drag it with a mouse or finger to spin
              it. It&apos;s the kind of smooth, interactive experience we build for our clients.
            </p>
            <div className="flex items-center space-x-2 border-t border-gray-800 pt-4 text-xs text-purple-400">
              <i className="fa-solid fa-circle text-[8px] motion-safe:animate-ping" aria-hidden="true" />
              <span>Real-time WebGL render</span>
            </div>
          </div>

          <div className="glass-card relative flex h-[400px] items-center justify-center overflow-hidden rounded-3xl border-purple-500/40 p-4">
            <Suspense
              fallback={
                <p className="text-sm text-gray-400" role="status">
                  Loading 3D model…
                </p>
              }
            >
              <InfinityNode />
            </Suspense>
            <div className="pointer-events-none absolute bottom-6 left-6 right-6 rounded-xl border border-gray-800 bg-deepspace/80 px-4 py-2 text-center text-xs text-gray-300 backdrop-blur-md">
              Drag or move your cursor to spin the node
            </div>
          </div>

          <div className="glass-card space-y-6 rounded-3xl p-8">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-rose-500/30 bg-rose-600/20 text-xl text-rose-400">
              <i className="fa-solid fa-microchip" aria-hidden="true" />
            </div>
            <h3 className="text-xl font-bold text-white">Performance Architecture</h3>
            <p className="text-sm leading-relaxed text-gray-400">
              Every campaign is structured with robust data pipelines, so your ad dollars generate
              maximum return with zero friction.
            </p>
            <div className="flex items-center space-x-2 border-t border-gray-800 pt-4 text-xs text-rose-400">
              <i className="fa-solid fa-circle text-[8px]" aria-hidden="true" />
              <span>Pauses rendering when off-screen</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
