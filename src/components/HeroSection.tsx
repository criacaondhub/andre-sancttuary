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
          marginBottom: 'var(--s-8)',
        }}
      >
        <HeroSeal />
      </div>

      <div style={{ maxWidth: '800px' }}>
        <h1
          className="display-xl"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'none' : 'translateY(20px)',
            transition: `opacity 900ms 80ms var(--ease-out), transform 900ms 80ms var(--ease-out)`,
            marginBottom: 'var(--s-6)',
          }}
        >
          Sancttuary
        </h1>

        <p
          className="eyebrow"
          style={{
            justifyContent: 'center',
            opacity: visible ? 1 : 0,
            transform: visible ? 'none' : 'translateY(20px)',
            transition: `opacity 900ms 160ms var(--ease-out), transform 900ms 160ms var(--ease-out)`,
            marginBottom: 'var(--s-5)',
          }}
        >
          Men&apos;s Edition
        </p>

        <p
          className="lead"
          style={{
            color: 'var(--c-text-2)',
            maxWidth: 'var(--text-max)',
            margin: '0 auto var(--s-4)',
            opacity: visible ? 1 : 0,
            transform: visible ? 'none' : 'translateY(20px)',
            transition: `opacity 900ms 240ms var(--ease-out), transform 900ms 240ms var(--ease-out)`,
          }}
        >
          Três dias. Sem atalhos.
        </p>

        <p
          className="eyebrow"
          style={{
            justifyContent: 'center',
            color: 'var(--c-text-3)',
            letterSpacing: '0.18em',
            marginBottom: 'var(--s-9)',
            opacity: visible ? 1 : 0,
            transform: visible ? 'none' : 'translateY(20px)',
            transition: `opacity 900ms 320ms var(--ease-out), transform 900ms 320ms var(--ease-out)`,
          }}
          aria-label="Sem telas. Sem validação. Sem plateia."
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
          <a href="#aplicar" className="btn-primary">
            Quero minha vaga
          </a>
          <a href="#cronograma" className="btn-ghost-link" style={{ padding: '18px 0' }}>
            Ver o cronograma
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

function HeroSeal() {
  return (
    <svg
      width="160"
      height="160"
      viewBox="0 0 160 160"
      fill="none"
      aria-label="Sancttuary seal"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      style={{ maxWidth: '100px' }}
    >
      <circle cx="80" cy="80" r="74" stroke="#ECE6DC" strokeWidth="1.5" />
      <circle cx="80" cy="80" r="58" stroke="#ECE6DC" strokeWidth="0.75" opacity="0.6" />
      <circle cx="80" cy="80" r="42" stroke="#ECE6DC" strokeWidth="0.75" opacity="0.4" />
      <line x1="60" y1="50" x2="100" y2="110" stroke="#ECE6DC" strokeWidth="2" opacity="0.8" />
      <line x1="100" y1="50" x2="60" y2="110" stroke="#ECE6DC" strokeWidth="2" opacity="0.8" />
      <text
        x="80"
        y="88"
        textAnchor="middle"
        fill="#ECE6DC"
        fontFamily="var(--f-display)"
        fontSize="32"
        fontWeight="400"
      >
        S
      </text>
    </svg>
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
