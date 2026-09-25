import { useEffect, useRef, useState } from 'react'
import {
  AmbientLight,
  Mesh,
  MeshPhysicalMaterial,
  PerspectiveCamera,
  PMREMGenerator,
  PointLight,
  Scene,
  TorusKnotGeometry,
} from 'three'
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js'
import usePrefersReducedMotion from '../../hooks/usePrefersReducedMotion.js'
import {
  createLoop,
  createRenderer,
  disposeRenderer,
  observeSize,
  watchVisibility,
} from '../../lib/three-utils.js'

/**
 * Interactive torus knot. Moving the cursor tilts it, dragging (mouse or touch)
 * spins it. Pauses when off-screen; reduced-motion visitors get a still model
 * that only moves when they drag it.
 */
export default function InfinityNode() {
  const containerRef = useRef(null)
  const reducedMotion = usePrefersReducedMotion()
  const [unsupported, setUnsupported] = useState(false)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return undefined

    const renderer = createRenderer(container, 2)
    if (!renderer) {
      setUnsupported(true)
      return undefined
    }

    const scene = new Scene()
    const camera = new PerspectiveCamera(60, 1, 0.1, 100)
    camera.position.z = 4

    // A neutral studio environment gives the metal something to reflect
    const pmrem = new PMREMGenerator(renderer)
    const environment = new RoomEnvironment()
    const envMap = pmrem.fromScene(environment, 0.04).texture
    environment.dispose()
    scene.environment = envMap
    scene.environmentIntensity = 0.6

    scene.add(new AmbientLight(0xffffff, 0.5))

    const purpleLight = new PointLight(0xa855f7, 6, 0, 0)
    purpleLight.position.set(5, 5, 5)
    scene.add(purpleLight)

    const roseLight = new PointLight(0xf43f5e, 4, 0, 0)
    roseLight.position.set(-5, -5, -5)
    scene.add(roseLight)

    const geometry = new TorusKnotGeometry(1, 0.35, 160, 32)
    const material = new MeshPhysicalMaterial({
      color: 0x9333ea,
      metalness: 0.85,
      roughness: 0.2,
      clearcoat: 1,
      clearcoatRoughness: 0.1,
    })
    const knot = new Mesh(geometry, material)
    scene.add(knot)

    const state = {
      time: 0,
      tiltX: 0,
      tiltY: 0,
      targetX: 0,
      targetY: 0,
      dragX: 0,
      dragY: 0,
      dragging: false,
      lastX: 0,
      lastY: 0,
    }

    const draw = () => renderer.render(scene, camera)

    const applyRotation = () => {
      knot.rotation.y = (reducedMotion ? 0.6 : state.time * 0.4) + state.tiltX + state.dragY
      knot.rotation.x = (reducedMotion ? 0.3 : state.time * 0.2) + state.tiltY + state.dragX
    }

    const update = (delta) => {
      state.time += delta
      const ease = 1 - Math.exp(-delta * 6)
      state.tiltX += (state.targetX - state.tiltX) * ease
      state.tiltY += (state.targetY - state.tiltY) * ease
      applyRotation()
    }

    const onPointerDown = (event) => {
      state.dragging = true
      state.lastX = event.clientX
      state.lastY = event.clientY
      container.setPointerCapture?.(event.pointerId)
    }

    const onPointerMove = (event) => {
      if (state.dragging) {
        state.dragY += (event.clientX - state.lastX) * 0.01
        state.dragX += (event.clientY - state.lastY) * 0.01
        state.lastX = event.clientX
        state.lastY = event.clientY
      }

      if (!reducedMotion && event.pointerType === 'mouse') {
        const rect = container.getBoundingClientRect()
        state.targetX = ((event.clientX - rect.left) / rect.width) * 2 - 1
        state.targetY = ((event.clientY - rect.top) / rect.height) * 2 - 1
      }

      // With no running loop (reduced motion), repaint only when the user drags
      if (reducedMotion && state.dragging) {
        applyRotation()
        draw()
      }
    }

    const endDrag = (event) => {
      state.dragging = false
      container.releasePointerCapture?.(event.pointerId)
    }

    const onPointerLeave = () => {
      if (!state.dragging) {
        state.targetX = 0
        state.targetY = 0
      }
    }

    container.addEventListener('pointerdown', onPointerDown)
    container.addEventListener('pointermove', onPointerMove)
    container.addEventListener('pointerup', endDrag)
    container.addEventListener('pointercancel', endDrag)
    container.addEventListener('pointerleave', onPointerLeave)

    const stopObservingSize = observeSize(container, (width, height) => {
      renderer.setSize(width, height, false)
      camera.aspect = width / height
      camera.updateProjectionMatrix()
      applyRotation()
      draw()
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
    }

    return () => {
      loop?.stop()
      stopWatchingVisibility()
      stopObservingSize()
      container.removeEventListener('pointerdown', onPointerDown)
      container.removeEventListener('pointermove', onPointerMove)
      container.removeEventListener('pointerup', endDrag)
      container.removeEventListener('pointercancel', endDrag)
      container.removeEventListener('pointerleave', onPointerLeave)
      geometry.dispose()
      material.dispose()
      envMap.dispose()
      pmrem.dispose()
      disposeRenderer(renderer)
    }
  }, [reducedMotion])

  return (
    <div className="relative h-full w-full">
      <div
        ref={containerRef}
        role="img"
        aria-label="Interactive 3D torus knot. Move your cursor or drag to rotate it."
        className="h-full w-full cursor-grab touch-pan-y overflow-hidden rounded-2xl active:cursor-grabbing"
      />
      {unsupported && (
        <p className="absolute inset-0 flex items-center justify-center px-6 text-center text-sm text-gray-400">
          The 3D preview isn&apos;t supported on this device or browser.
        </p>
      )}
    </div>
  )
}