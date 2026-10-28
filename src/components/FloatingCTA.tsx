'use client'
import { useEffect, useRef, useState } from 'react'

export function FloatingCTA() {
  const [visible, setVisible] = useState(false)
  const sentinelRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const sentinel = sentinelRef.current
    if (!sentinel) return

    const obs = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { threshold: 0 }
    )
    obs.observe(sentinel)
    return () => obs.disconnect()
  }, [])

  return (
    <>
      <div ref={sentinelRef} aria-hidden="true" style={{ position: 'absolute', top: '100svh', left: 0 }} />

      <div
        aria-hidden={!visible}
        style={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 40,
          paddingLeft: 'var(--gutter)',
          paddingRight: 'var(--gutter)',
          paddingBottom: 'calc(var(--s-5) + env(safe-area-inset-bottom, 0px))',
          paddingTop: 'var(--s-4)',
          background: 'linear-gradient(0deg, var(--c-carvao) 60%, transparent)',
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(100%)',
          transition: 'opacity var(--t-micro) var(--ease-out), transform var(--t-micro) var(--ease-out)',
          pointerEvents: visible ? 'auto' : 'none',
        }}
        className="floating-cta"
      >
        <a
          href="#aplicar"
          className="btn-primary"
          style={{ width: '100%', display: 'flex' }}
          tabIndex={visible ? 0 : -1}
          aria-label="Aplicar para a próxima edição"
        >
          Aplicar
        </a>
      </div>

      <style>{`
        @media (min-width: 640px) {
          .floating-cta { display: none !important; }
        }
      `}</style>
    </>
  )
}
