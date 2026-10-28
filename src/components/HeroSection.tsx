'use client'
import { motion, useScroll, useTransform } from 'framer-motion'

const EASE = [0.22, 1, 0.36, 1] as const

export function HeroSection() {
  const { scrollY } = useScroll()
  const bgY = useTransform(scrollY, [0, 700], ['0%', '-12%'])

  return (
    <section
      aria-label="Hero"
      style={{
        position: 'relative',
        height: '100svh',
        minHeight: '600px',
        overflow: 'hidden',
        background: '#121110',
      }}
    >
      {/* Camada 1 — foto de fundo com parallax */}
      <motion.div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '-15%',
          left: 0,
          right: 0,
          bottom: '-15%',
          y: bgY,
        }}
      >
        <img
          src="/Banner_01.webp"
          alt=""
          style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 20%', display: 'block' }}
        />
      </motion.div>

      {/* Camada 2 — overlay */}
      <div aria-hidden="true" style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(to bottom, rgba(18,17,16,0.5) 0%, rgba(18,17,16,0.55) 40%, rgba(18,17,16,0.78) 100%)',
        zIndex: 1,
      }} />
      {/* vinheta central para destacar o texto */}
      <div aria-hidden="true" style={{
        position: 'absolute',
        inset: 0,
        background: 'radial-gradient(ellipse 60% 70% at 50% 50%, rgba(18,17,16,0.42) 0%, transparent 100%)',
        zIndex: 1,
      }} />

      {/* fade para a dobra 2 */}
      <div aria-hidden="true" style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: '28%',
        background: 'linear-gradient(to bottom, transparent 0%, #F0EBE1 100%)',
        zIndex: 1,
        pointerEvents: 'none',
      }} />

      {/* Camada 3 — conteúdo */}
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
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', maxWidth: '860px', width: '100%' }}>

          {/* Logo — emerge da névoa */}
          <motion.div
            initial={{ opacity: 0, scale: 1.35, filter: 'blur(14px)' }}
            animate={{ opacity: 1, scale: 1,    filter: 'blur(0px)'  }}
            transition={{ duration: 1.8, delay: 0.2, ease: EASE }}
            style={{ marginBottom: '16px' }}
          >
            <img
              src="/SVG/sancttuary-selo-osso.svg"
              alt="Sancttuary"
              style={{ width: 'clamp(56px, 6vw, 88px)', height: 'auto', display: 'block' }}
            />
          </motion.div>

          {/* H1 */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9, ease: EASE }}
            style={{
              fontFamily: 'var(--f-display)',
              fontSize: 'clamp(56px, 8vw, 128px)',
              fontWeight: 400,
              lineHeight: 0.9,
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
              color: 'var(--c-osso)',
              marginBottom: '8px',
            }}
          >
            Sancttuary
          </motion.h1>

          {/* Men's Edition */}
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.1, ease: EASE }}
            style={{
              fontFamily: 'var(--f-text)',
              fontSize: '10px',
              fontWeight: 400,
              letterSpacing: '0.32em',
              textTransform: 'uppercase',
              color: '#B8895A',
              marginBottom: '20px',
              textShadow: '0 1px 12px rgba(18,17,16,0.9)',
            }}
          >
            Men&apos;s Edition
          </motion.p>

          {/* divider */}
          <motion.div
            aria-hidden="true"
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.7, delay: 1.3, ease: EASE }}
            style={{ width: '32px', height: '1px', background: 'rgba(236,230,220,0.2)', marginBottom: '20px' }}
          />

          {/* tagline 1 */}
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.4, ease: EASE }}
            style={{
              fontFamily: 'var(--f-text)',
              fontSize: 'clamp(14px, 1.1vw, 17px)',
              fontWeight: 300,
              lineHeight: 1.5,
              color: 'rgba(236,230,220,0.9)',
              marginBottom: '6px',
              textShadow: '0 2px 16px rgba(18,17,16,0.95)',
            }}
          >
            Três dias. Sem atalhos.
          </motion.p>

          {/* tagline 2 */}
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.55, ease: EASE }}
            style={{
              fontFamily: 'var(--f-text)',
              fontSize: '10px',
              fontWeight: 400,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'rgba(236,230,220,0.58)',
              marginBottom: '36px',
              textShadow: '0 2px 12px rgba(18,17,16,0.95)',
            }}
          >
            Sem telas. Sem validação. Sem plateia.
          </motion.p>

          {/* CTA */}
          <motion.a
            href="#vivencias"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.75, ease: EASE }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'transparent',
              color: 'rgba(236,230,220,0.9)',
              fontFamily: 'var(--f-text)',
              fontSize: '11px',
              fontWeight: 400,
              letterSpacing: '0.24em',
              textTransform: 'uppercase',
              textDecoration: 'none',
              padding: '13px 26px',
              border: '1px solid rgba(236,230,220,0.45)',
              borderRadius: '2px',
              cursor: 'pointer',
            }}
          >
            SAIBA MAIS
          </motion.a>

        </div>
      </div>

      {/* Seta */}
      <motion.a
        href="#vivencias"
        aria-label="Rolar para baixo"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.32 }}
        transition={{ duration: 0.9, delay: 2.2, ease: EASE }}
        style={{
          position: 'absolute',
          bottom: '32px',
          left: '50%',
          transform: 'translateX(-50%)',
          animation: 'arrowBounce 2s ease-in-out infinite',
          zIndex: 5,
        }}
      >
        <ArrowDown />
      </motion.a>
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
