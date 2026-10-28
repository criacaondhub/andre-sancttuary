'use client'
import { useEffect, useState, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export function HeroSection() {
  const [visible, setVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  const { scrollY } = useScroll()
  // background sobe mais devagar que o scroll — cria profundidade
  const bgY = useTransform(scrollY, [0, 700], ['0%', '-18%'])

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 120)
    return () => clearTimeout(t)
  }, [])

  return (
    <section
      ref={sectionRef}
      aria-label="Hero"
      style={{
        position: 'relative',
        height: '100svh',
        minHeight: '600px',
        overflow: 'hidden',
        background: '#121110',
      }}
    >
      {/* Camada 1 — foto de fundo com parallax lento */}
      <motion.div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '-12%',
          left: 0,
          right: 0,
          bottom: '-12%',
          y: bgY,
        }}
      >
        <img
          src="/Banner_01.webp"
          alt=""
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center top',
            display: 'block',
          }}
        />
      </motion.div>

      {/* Camada 2 — overlay escuro para legibilidade */}
      <div aria-hidden="true" style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(to bottom, rgba(18,17,16,0.35) 0%, rgba(18,17,16,0.15) 45%, rgba(18,17,16,0.55) 100%)',
        zIndex: 1,
      }} />

      {/* Camada 3 — logo + texto (z-index 2, entre bg e fg) */}
      <div style={{
        position: 'absolute',
        inset: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: 'var(--gutter)',
        zIndex: 2,
      }}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          maxWidth: '860px',
          width: '100%',
        }}>
          <motion.div style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'none' : 'scale(0.95)',
            transition: 'opacity 800ms var(--ease-out), transform 1400ms var(--ease-out)',
            marginBottom: '16px',
          }}>
            <img
              src="/SVG/sancttuary-selo-osso.svg"
              alt="Sancttuary"
              style={{ width: 'clamp(56px, 6vw, 88px)', height: 'auto', display: 'block' }}
            />
          </motion.div>

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
      </div>

      {/* Camada 4 — subject com máscara aplicada */}
      <motion.div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '-12%',
          left: 0,
          right: 0,
          bottom: '-12%',
          y: bgY,
          zIndex: 3,
          pointerEvents: 'none',
          WebkitMaskImage: 'url(/Banner_01_mask_home.webp)',
          WebkitMaskSize: 'cover',
          WebkitMaskPosition: 'center top',
          WebkitMaskRepeat: 'no-repeat',
          maskImage: 'url(/Banner_01_mask_home.webp)',
          maskSize: 'cover',
          maskPosition: 'center top',
          maskRepeat: 'no-repeat',
          opacity: visible ? 1 : 0,
          transition: 'opacity 1200ms 200ms var(--ease-out)',
        } as React.CSSProperties}
      >
        <img
          src="/Banner_01_sem-fundo.webp"
          alt=""
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center top',
            display: 'block',
          }}
        />
      </motion.div>

      {/* Seta de scroll — acima de tudo */}
      <a href="#vivencias" aria-label="Rolar para baixo" style={{
        position: 'absolute',
        bottom: '32px',
        left: '50%',
        transform: 'translateX(-50%)',
        opacity: visible ? 0.32 : 0,
        transition: 'opacity 900ms 600ms var(--ease-out)',
        animation: 'arrowBounce 2s ease-in-out infinite',
        zIndex: 5,
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
