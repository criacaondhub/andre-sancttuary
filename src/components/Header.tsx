'use client'
import { useEffect, useState } from 'react'

export function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      role="banner"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        height: '72px',
        display: 'flex',
        alignItems: 'center',
        paddingLeft: 'var(--gutter)',
        paddingRight: 'var(--gutter)',
        justifyContent: 'space-between',
        background: scrolled ? 'rgba(18,17,16,0.85)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        transition: 'background var(--t-micro) var(--ease-out), backdrop-filter var(--t-micro) var(--ease-out)',
      }}
    >
      <a
        href="#"
        aria-label="Sancttuary — página inicial"
        style={{
          opacity: scrolled ? 1 : 0,
          transition: 'opacity 400ms var(--ease-out)',
          pointerEvents: scrolled ? 'auto' : 'none',
        }}
      >
        <img
          src="/SVG/sancttuary-selo-osso.svg"
          alt="Sancttuary"
          width={40}
          height={40}
          style={{ width: 40, height: 40, display: 'block' }}
        />
      </a>

      <a
        href="#aplicar"
        aria-label="Aplicar para a próxima edição"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'transparent',
          color: 'var(--c-osso)',
          fontFamily: 'var(--f-text)',
          fontSize: '12px',
          fontWeight: 400,
          letterSpacing: '0.18em',
          textTransform: 'uppercase',
          textDecoration: 'none',
          padding: '12px 24px',
          minHeight: '40px',
          border: '1px solid rgba(236,230,220,0.48)',
          borderRadius: '2px',
          cursor: 'pointer',
          transition: 'border-color 250ms, background 250ms',
        }}
      >
        APLICAR
      </a>
    </header>
  )
}
