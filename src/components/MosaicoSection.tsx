'use client'
import { useRef } from 'react'
import { useScroll } from 'framer-motion'
import { RevealWords } from '@/components/RevealWords'

const imgStyle: React.CSSProperties = { width: '100%', height: '100%', objectFit: 'cover', display: 'block' }

export function MosaicoSection() {
  // o título fica centralizado no mosaico: as palavras acendem enquanto o centro
  // do mosaico sobe do pé da tela até 40% da altura
  const gridRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: gridRef, offset: ['center 1', 'center 0.4'] })

  return (
    <section
      aria-label="Mosaico de imagens"
      style={{
        background: 'var(--c-musgo)',
        overflow: 'hidden',
        padding: 'clamp(80px, 12vh, 160px) 0',
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 clamp(16px, 4vw, 48px)' }}>
        <div
          ref={gridRef}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gridTemplateRows: 'auto auto',
            gap: 'var(--s-4)',
            position: 'relative',
          }}
        >
          <div
            aria-hidden="true"
            style={{
              gridColumn: '1 / 6',
              aspectRatio: '4/5',
              background: 'linear-gradient(135deg, #2B2F24 0%, #1A1E16 100%)',
            }}
          >
            <img src="/Dobra_03/CMC01770.webp" alt="" loading="lazy" style={{ ...imgStyle, objectPosition: 'center 50%' }} />
          </div>
          <div
            aria-hidden="true"
            style={{
              gridColumn: '6 / 13',
              aspectRatio: '3/2',
              background: 'linear-gradient(135deg, #3A4030 0%, #2B2F24 100%)',
              alignSelf: 'end',
            }}
          >
            <img src="/Dobra_03/CMC01824.webp" alt="" loading="lazy" style={{ ...imgStyle, objectPosition: 'center 58%' }} />
          </div>
          <div
            aria-hidden="true"
            style={{
              gridColumn: '1 / 8',
              aspectRatio: '3/2',
              background: 'linear-gradient(135deg, #2B2F24 0%, #4D3019 100%)',
            }}
          >
            <img src="/Dobra_03/CMC02142.webp" alt="" loading="lazy" style={{ ...imgStyle, objectPosition: 'center 63%' }} />
          </div>
          <div
            aria-hidden="true"
            style={{
              gridColumn: '8 / 13',
              aspectRatio: '1/1',
              background: 'linear-gradient(135deg, #3A4030 0%, #2B2F24 100%)',
            }}
          >
            <img src="/Dobra_03/CMC03020.webp" alt="" loading="lazy" style={{ ...imgStyle, objectPosition: 'center 15%' }} />
          </div>

          {/* vinheta atrás do título para ele não sumir sobre partes claras das fotos */}
          <div aria-hidden="true" style={{
            position: 'absolute',
            inset: 0,
            background: 'radial-gradient(ellipse 55% 38% at 32% 50%, rgba(18,17,16,0.62) 0%, rgba(18,17,16,0.3) 55%, transparent 100%)',
            pointerEvents: 'none',
            zIndex: 1,
          }} />

          <h2
            style={{
              position: 'absolute',
              top: '50%',
              left: 'clamp(24px, 4vw, 64px)',
              transform: 'translateY(-50%)',
              maxWidth: '720px',
              fontFamily: 'var(--f-display)',
              fontSize: 'clamp(40px, 5vw, 80px)',
              fontWeight: 400,
              lineHeight: 1,
              letterSpacing: '0.01em',
              textTransform: 'uppercase',
              color: 'var(--c-osso)',
              zIndex: 2,
              textShadow: '0 2px 32px rgba(18,17,16,0.8)',
            }}
          >
            <RevealWords
              text={'Saímos como versões mais cruas, mais presentes e mais inteiras de nós mesmos.'}
              progress={scrollYProgress}
            />
          </h2>
        </div>
      </div>
    </section>
  )
}
