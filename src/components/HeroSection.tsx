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
      <div
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? 'none' : 'scale(0.95)',
          transition: `opacity 800ms var(--ease-out), transform var(--t-image) var(--ease-out)`,
          marginBottom: 'var(--s-7)',
        }}
      >
        <img
          src="/SVG/sancttuary-selo-osso.svg"
          alt="Sancttuary"
          width={160}
          height={160}
          style={{ width: 'clamp(88px, 12vw, 160px)', height: 'auto', display: 'block', margin: '0 auto' }}
        />
      </div>

      <div style={{ maxWidth: '860px' }}>
        <h1
          style={{
            fontFamily: 'var(--f-display)',
            fontSize: 'clamp(48px, 7vw, 112px)',
            fontWeight: 400,
            lineHeight: 0.95,
            letterSpacing: '0.01em',
            textTransform: 'uppercase',
            color: 'var(--c-osso)',
            marginBottom: 'var(--s-5)',
            opacity: visible ? 1 : 0,
            transform: visible ? 'none' : 'translateY(20px)',
            transition: `opacity 900ms 80ms var(--ease-out), transform 900ms 80ms var(--ease-out)`,
          }}
        >
          Sancttuary
        </h1>

        <p
          style={{
            fontFamily: 'var(--f-text)',
            fontSize: '13px',
            fontWeight: 400,
            letterSpacing: '0.24em',
            textTransform: 'uppercase',
            color: 'var(--c-madeira)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '16px',
            marginBottom: 'var(--s-6)',
            opacity: visible ? 1 : 0,
            transform: visible ? 'none' : 'translateY(20px)',
            transition: `opacity 900ms 160ms var(--ease-out), transform 900ms 160ms var(--ease-out)`,
          }}
        >
          Men&apos;s Edition
        </p>

        <p
          style={{
            fontFamily: 'var(--f-text)',
            fontSize: 'clamp(18px, 1.5vw, 22px)',
            fontWeight: 300,
            lineHeight: 1.55,
            color: 'rgba(236,230,220,0.72)',
            maxWidth: '34rem',
            margin: '0 auto var(--s-5)',
            opacity: visible ? 1 : 0,
            transform: visible ? 'none' : 'translateY(20px)',
            transition: `opacity 900ms 240ms var(--ease-out), transform 900ms 240ms var(--ease-out)`,
          }}
        >
          Três dias. Sem atalhos.
        </p>

        <p
          style={{
            fontFamily: 'var(--f-text)',
            fontSize: '13px',
            fontWeight: 400,
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: 'rgba(236,230,220,0.48)',
            marginBottom: 'var(--s-9)',
            opacity: visible ? 1 : 0,
            transform: visible ? 'none' : 'translateY(20px)',
            transition: `opacity 900ms 320ms var(--ease-out), transform 900ms 320ms var(--ease-out)`,
          }}
        >
          Sem telas. Sem validação. Sem plateia.
        </p>

        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 'var(--s-4)',
            justifyContent: 'center',
            opacity: visible ? 1 : 0,
            transform: visible ? 'none' : 'translateY(20px)',
            transition: `opacity 900ms 400ms var(--ease-out), transform 900ms 400ms var(--ease-out)`,
          }}
        >
          <a
            href="#aplicar"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'var(--c-osso)',
              color: 'var(--c-carvao)',
              fontFamily: 'var(--f-text)',
              fontSize: '13px',
              fontWeight: 400,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              textDecoration: 'none',
              padding: '18px 32px',
              borderRadius: '2px',
              minHeight: '52px',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            QUERO MINHA VAGA
          </a>
          <a
            href="#cronograma"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              color: 'var(--c-osso)',
              fontFamily: 'var(--f-text)',
              fontSize: '13px',
              fontWeight: 400,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              textDecoration: 'none',
              padding: '18px 0',
            }}
          >
            VER O CRONOGRAMA
            <ArrowRight />
          </a>
        </div>
      </div>

      <a
        href="#vivencias"
        aria-label="Rolar para baixo"
        style={{
          position: 'absolute',
          bottom: 'var(--s-8)',
          left: '50%',
          transform: 'translateX(-50%)',
          opacity: visible ? 0.48 : 0,
          transition: `opacity 900ms 600ms var(--ease-out)`,
          animation: 'arrowBounce 2s ease-in-out infinite',
        }}
      >
        <ArrowDown />
      </a>
    </section>
  )
}


function ArrowDown() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M10 4v12M4 10l6 6 6-6" stroke="#ECE6DC" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function ArrowRight() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
