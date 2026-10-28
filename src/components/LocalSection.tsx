'use client'
import { useState, useEffect, useCallback } from 'react'
import { useReveal } from '@/hooks/useReveal'

const thumbnails = [0, 1, 2, 3, 4, 5]

export function LocalSection() {
  const headingRef = useReveal<HTMLDivElement>()
  const [lightbox, setLightbox] = useState<number | null>(null)

  const closeLightbox = useCallback(() => setLightbox(null), [])

  useEffect(() => {
    if (lightbox === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox()
      if (e.key === 'ArrowRight') setLightbox(i => i !== null ? (i + 1) % thumbnails.length : null)
      if (e.key === 'ArrowLeft') setLightbox(i => i !== null ? (i - 1 + thumbnails.length) % thumbnails.length : null)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [lightbox, closeLightbox])

  return (
    <section
      id="local"
      aria-labelledby="local-title"
      style={{ background: 'var(--c-musgo)' }}
      className="section-pad"
    >
      <div className="container-main">
        <div ref={headingRef} className="reveal" style={{ marginBottom: 'var(--s-8)' }}>
          <p className="eyebrow" style={{ marginBottom: 'var(--s-5)' }}>O lugar</p>
          <h2 id="local-title" className="h2" style={{ marginBottom: 'var(--s-4)' }}>
            Villa Tanah. São Roque, SP.
          </h2>
          <p className="lead" style={{ color: 'var(--c-text-2)', maxWidth: 'var(--text-max)' }}>
            A 50 minutos de São Paulo. Mata, pedra, água corrente. Sem sinal.
          </p>
        </div>

        <div
          aria-label="Vista panorâmica da Villa Tanah"
          style={{
            aspectRatio: '21/9',
            background: 'linear-gradient(135deg, var(--c-musgo) 0%, var(--c-carvao) 100%)',
            marginBottom: 'var(--s-6)',
          }}
        />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(6, 1fr)',
            gap: 'var(--s-4)',
          }}
          className="local-gallery"
        >
          {thumbnails.map(i => (
            <button
              key={i}
              onClick={() => setLightbox(i)}
              aria-label={`Ver foto ${i + 1} da Villa Tanah`}
              style={{
                background: 'none',
                border: 'none',
                padding: 0,
                cursor: 'pointer',
              }}
            >
              <div
                aria-hidden="true"
                style={{
                  aspectRatio: '4/3',
                  background: `linear-gradient(${135 + i * 15}deg, var(--c-tronco) 0%, var(--c-musgo) 100%)`,
                  transition: 'opacity var(--t-micro) var(--ease-out)',
                }}
                className="gallery-thumb"
              />
            </button>
          ))}
        </div>
      </div>

      {lightbox !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Galeria de fotos"
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 100,
            background: 'rgba(18,17,16,0.95)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onClick={closeLightbox}
        >
          <div
            style={{
              position: 'relative',
              width: '80vw',
              maxWidth: '1000px',
            }}
            onClick={e => e.stopPropagation()}
          >
            <div
              aria-label={`Foto ${lightbox + 1} da Villa Tanah`}
              style={{
                aspectRatio: '4/3',
                background: `linear-gradient(${135 + lightbox * 15}deg, var(--c-tronco) 0%, var(--c-musgo) 100%)`,
              }}
            />

            <button
              onClick={() => setLightbox(i => i !== null ? (i - 1 + thumbnails.length) % thumbnails.length : null)}
              aria-label="Foto anterior"
              style={{
                position: 'absolute',
                left: 'calc(-1 * var(--s-10))',
                top: '50%',
                transform: 'translateY(-50%)',
                background: 'none',
                border: 'none',
                color: 'var(--c-osso)',
                padding: 'var(--s-4)',
              }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M15 6l-6 6 6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            <button
              onClick={() => setLightbox(i => i !== null ? (i + 1) % thumbnails.length : null)}
              aria-label="Próxima foto"
              style={{
                position: 'absolute',
                right: 'calc(-1 * var(--s-10))',
                top: '50%',
                transform: 'translateY(-50%)',
                background: 'none',
                border: 'none',
                color: 'var(--c-osso)',
                padding: 'var(--s-4)',
              }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>

          <button
            onClick={closeLightbox}
            aria-label="Fechar galeria"
            style={{
              position: 'absolute',
              top: 'var(--s-6)',
              right: 'var(--s-6)',
              background: 'none',
              border: 'none',
              color: 'var(--c-osso)',
              padding: 'var(--s-3)',
            }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      )}

      <style>{`
        @media (max-width: 639px) {
          .local-gallery {
            grid-template-columns: repeat(3, 1fr) !important;
          }
        }
        .gallery-thumb:hover { opacity: 0.8; }
      `}</style>
    </section>
  )
}
