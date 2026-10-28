'use client'
import { useEffect, useState } from 'react'

export function HeroSection() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100)
    return () => clearTimeout(t)
  }, [])

  return (
    <section
      aria-label="Hero"
      style={{
        position: 'relative',
        height: '100svh',
        minHeight: '600px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'radial-gradient(ellipse at 30% 50%, #4D3019 0%, #2A1D14 40%, #121110 100%)',
        overflow: 'hidden',
        textAlign: 'center',
        padding: 'var(--gutter)',
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', maxWidth: '860px', width: '100%' }}>

        <div style={{
          opacity: visible ? 1 : 0,
          transform: visible ? 'none' : 'scale(0.95)',
          transition: 'opacity 800ms var(--ease-out), transform 1400ms var(--ease-out)',
          marginBottom: '16px',
        }}>
          <img
            src="/SVG/sancttuary-selo-osso.svg"
            alt="Sancttuary"
            width={88}
            height={88}
            style={{ width: 'clamp(56px, 6vw, 88px)', height: 'auto', display: 'block' }}
          />
        </div>

        <h1 style={{
          fontFamily: 'var(--f-display)',
          fontSize: 'clamp(56px, 8vw, 128px)',
          fontWeight: 400,
          lineHeight: 0.9,
          letterSpacing: '0.04em',
          textTransform: 'uppercase',
          color: 'var(--c-osso)',
          marginBottom: '8px',
          opacity: visible ? 1 : 0,
          transform: visible ? 'none' : 'translateY(16px)',
          transition: 'opacity 900ms 80ms var(--ease-out), transform 900ms 80ms var(--ease-out)',
        }}>
          Sancttuary
        </h1>

        <p style={{
          fontFamily: 'var(--f-text)',
          fontSize: '10px',
          fontWeight: 400,
          letterSpacing: '0.32em',
          textTransform: 'uppercase',
          color: 'var(--c-madeira)',
          marginBottom: '20px',
          opacity: visible ? 1 : 0,
          transform: visible ? 'none' : 'translateY(16px)',
          transition: 'opacity 900ms 160ms var(--ease-out), transform 900ms 160ms var(--ease-out)',
        }}>
          Men&apos;s Edition
        </p>

        <div aria-hidden="true" style={{
          width: '32px',
          height: '1px',
          background: 'rgba(236,230,220,0.2)',
          marginBottom: '20px',
          opacity: visible ? 1 : 0,
          transition: 'opacity 900ms 200ms var(--ease-out)',
        }} />

        <p style={{
          fontFamily: 'var(--f-text)',
          fontSize: 'clamp(14px, 1.1vw, 17px)',
          fontWeight: 300,
          lineHeight: 1.5,
          color: 'rgba(236,230,220,0.6)',
          marginBottom: '4px',
          opacity: visible ? 1 : 0,
          transform: visible ? 'none' : 'translateY(16px)',
          transition: 'opacity 900ms 240ms var(--ease-out), transform 900ms 240ms var(--ease-out)',
        }}>
          Três dias. Sem atalhos.
        </p>

        <p style={{
          fontFamily: 'var(--f-text)',
          fontSize: '10px',
          fontWeight: 400,
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          color: 'rgba(236,230,220,0.26)',
          marginBottom: '36px',
          opacity: visible ? 1 : 0,
          transform: visible ? 'none' : 'translateY(16px)',
          transition: 'opacity 900ms 320ms var(--ease-out), transform 900ms 320ms var(--ease-out)',
        }}>
          Sem telas. Sem validação. Sem plateia.
        </p>

        <a href="#vivencias" style={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'transparent',
          color: 'rgba(236,230,220,0.64)',
          fontFamily: 'var(--f-text)',
          fontSize: '11px',
          fontWeight: 400,
          letterSpacing: '0.24em',
          textTransform: 'uppercase',
          textDecoration: 'none',
          padding: '13px 26px',
          border: '1px solid rgba(236,230,220,0.2)',
          borderRadius: '2px',
          cursor: 'pointer',
          opacity: visible ? 1 : 0,
          transform: visible ? 'none' : 'translateY(16px)',
          transition: 'opacity 900ms 400ms var(--ease-out), transform 900ms 400ms var(--ease-out)',
        }}>
          SAIBA MAIS
        </a>

      </div>

      <a href="#vivencias" aria-label="Rolar para baixo" style={{
        position: 'absolute',
        bottom: '32px',
        left: '50%',
        transform: 'translateX(-50%)',
        opacity: visible ? 0.32 : 0,
        transition: 'opacity 900ms 600ms var(--ease-out)',
        animation: 'arrowBounce 2s ease-in-out infinite',
      }}>
        <ArrowDown />
      </a>
    </section>
  )
}

function ArrowDown() {
  return (
    <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M10 4v12M4 10l6 6 6-6" stroke="#ECE6DC" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
