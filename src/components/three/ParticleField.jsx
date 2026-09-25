import { useEffect, useRef } from 'react'
import {
  AdditiveBlending,
  BufferAttribute,
  BufferGeometry,
  PerspectiveCamera,
  Points,
  PointsMaterial,
  Scene,
} from 'three'
import usePrefersReducedMotion from '../../hooks/usePrefersReducedMotion.js'
import {
  createLoop,
  createRenderer,
  disposeRenderer,
  observeSize,
  watchVisibility,
} from '../../lib/three-utils.js'

/**
 * Hero background: a slowly drifting field of purple particles that leans
 * toward the cursor. Pauses when off-screen, uses fewer particles on small
 * screens, and renders a single still frame for reduced-motion visitors.
 */
export default function ParticleField() {
  const containerRef = useRef(null)
  const reducedMotion = usePrefersReducedMotion()

  useEffect(() => {
    const container = containerRef.current
    if (!container) return undefined

    const isSmallScreen = window.innerWidth < 768
    const renderer = createRenderer(container, isSmallScreen ? 1.5 : 2)
    if (!renderer) return undefined

    const scene = new Scene()
    const camera = new PerspectiveCamera(75, 1, 0.1, 100)
    camera.position.z = 5

    const count = isSmallScreen ? 500 : 1200
    const positions = new Float32Array(count * 3)
    for (let i = 0; i < positions.length; i += 1) {
      positions[i] = (Math.random() - 0.5) * 15
    }

    const geometry = new BufferGeometry()
    geometry.setAttribute('position', new BufferAttribute(positions, 3))

    const material = new PointsMaterial({
      size: 0.025,
      color: 0xa855f7,
      transparent: true,
      opacity: 0.7,
      blending: AdditiveBlending,
      depthWrite: false,
    })

    const points = new Points(geometry, material)
    scene.add(points)

    // Continuous drift and pointer lean are tracked separately and added together,
    // so the field always keeps moving and never "fights" the cursor.
    let drift = 0
    let leanX = 0
    let leanY = 0
    const pointer = { x: 0, y: 0 }

    const draw = () => renderer.render(scene, camera)

    const update = (delta) => {
      drift += delta * 0.06
      const ease = 1 - Math.exp(-delta * 3)
      leanX += (pointer.x - leanX) * ease
      leanY += (pointer.y - leanY) * ease
      points.rotation.y = drift + leanX
      points.rotation.x = drift * 0.5 + leanY
    }

    const onPointerMove = (event) => {
      pointer.x = (event.clientX / window.innerWidth - 0.5) * 0.8
      pointer.y = (event.clientY / window.innerHeight - 0.5) * 0.8
    }

    const stopObservingSize = observeSize(container, (width, height) => {
      renderer.setSize(width, height, false)
      camera.aspect = width / height
      camera.updateProjectionMatrix()
      draw() // resizing clears the canvas, so repaint immediately
    })

    let stopWatchingVisibility = () => {}
    let loop = null

    if (!reducedMotion) {
      loop = createLoop((delta) => {
        update(delta)
        draw()
      })
      stopWatchingVisibility = watchVisibility(container, (visible) => {
        if (visible) loop.start()
        else loop.stop()
      })
      window.addEventListener('pointermove', onPointerMove, { passive: true })
    }

    return () => {
      loop?.stop()
      stopWatchingVisibility()
      stopObservingSize()
      window.removeEventListener('pointermove', onPointerMove)
      geometry.dispose()
      material.dispose()
      disposeRenderer(renderer)
    }
  }, [reducedMotion])

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-[1]"
    />
  )
}
