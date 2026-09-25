import { WebGLRenderer } from 'three'

/**
 * Creates a transparent WebGL renderer and mounts its canvas in `container`.
 * Returns null when WebGL isn't available so callers can degrade gracefully.
 */
export function createRenderer(container, maxPixelRatio = 2) {
  try {
    const renderer = new WebGLRenderer({ alpha: true, antialias: true })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, maxPixelRatio))

    const canvas = renderer.domElement
    canvas.style.display = 'block'
    canvas.style.width = '100%'
    canvas.style.height = '100%'
    container.appendChild(canvas)

    return renderer
  } catch (error) {
    console.warn('WebGL is not available on this device:', error)
    return null
  }
}

export function disposeRenderer(renderer) {
  renderer.dispose()
  renderer.forceContextLoss()
  renderer.domElement.remove()
}

/** Calls `onResize(width, height)` whenever the element's box changes. Returns a cleanup fn. */
export function observeSize(element, onResize) {
  const observer = new ResizeObserver((entries) => {
    const { width, height } = entries[0].contentRect
    if (width > 0 && height > 0) onResize(width, height)
  })
  observer.observe(element)
  return () => observer.disconnect()
}

/**
 * Calls `onChange(true|false)` when the element scrolls in/out of view or the
 * browser tab is shown/hidden. Used to pause rendering when nobody can see it.
 */
export function watchVisibility(element, onChange) {
  let inView = true
  let tabVisible = !document.hidden

  const emit = () => onChange(inView && tabVisible)

  const observer = new IntersectionObserver(([entry]) => {
    inView = entry.isIntersecting
    emit()
  })
  observer.observe(element)

  const onVisibilityChange = () => {
    tabVisible = !document.hidden
    emit()
  }
  document.addEventListener('visibilitychange', onVisibilityChange)

  return () => {
    observer.disconnect()
    document.removeEventListener('visibilitychange', onVisibilityChange)
  }
}

/** A start/stop requestAnimationFrame loop. `onFrame` receives delta time in seconds. */
export function createLoop(onFrame) {
  let frameId = 0
  let running = false
  let last = 0

  const tick = (now) => {
    const delta = Math.min((now - last) / 1000, 0.1)
    last = now
    onFrame(delta)
    frameId = requestAnimationFrame(tick)
  }

  return {
    start() {
      if (running) return
      running = true
      last = performance.now()
      frameId = requestAnimationFrame(tick)
    },
    stop() {
      running = false
      cancelAnimationFrame(frameId)
    },
  }
}
