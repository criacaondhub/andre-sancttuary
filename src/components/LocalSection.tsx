'use client'
import { useState } from 'react'
import { useReveal } from '@/hooks/useReveal'
import { LocalLightbox } from '@/components/local/shared'
import { LocalMosaicoVivo } from '@/components/local/LocalMosaicoVivo'

export function LocalSection() {
  const headingRef = useReveal<HTMLDivElement>()
  const [lightbox, setLightbox] = useState<number | null>(null)

  return (
    <section
      id="local"
      aria-labelledby="local-title"
      style={{ background: '#F0EBE1', color: 'var(--c-terra)' }}
      className="section-pad m-center"
    >
      <div
        className="container-main local-split"
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 2fr',
          gap: 'clamp(32px, 4vw, 64px)',
          alignItems: 'center',
        }}
      >
        <div ref={headingRef} className="reveal reveal-left">
          <p className="eyebrow" style={{ marginBottom: 'var(--s-5)', color: 'var(--c-madeira)' }}>O lugar</p>
          <h2 id="local-title" className="h1" style={{ marginBottom: 'var(--s-5)', color: 'var(--c-terra)' }}>
            Villa Tanah. São Roque,&nbsp;SP.
          </h2>
          <p className="lead m-block" style={{ color: 'rgba(42,29,20,0.64)', maxWidth: 'var(--text-max)', marginBottom: 'var(--s-7)' }}>
            A 50 minutos de São Paulo. Mata, pedra, água corrente. Sem sinal.
          </p>
          <p style={{
            fontFamily: 'var(--f-text)',
            fontSize: '11px',
            fontWeight: 400,
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            color: 'rgba(42,29,20,0.36)',
          }}>
            Explore as fotos →
          </p>
        </div>

        <LocalMosaicoVivo onOpen={setLightbox} />
      </div>

      {lightbox !== null && (
        <LocalLightbox index={lightbox} onChange={setLightbox} onClose={() => setLightbox(null)} />
      )}

      <style>{`
        @media (max-width: 860px) {
          .local-split { grid-template-columns: 1fr !important; }
        }
        .local-split button:focus-visible { outline: 2px solid var(--c-terra); outline-offset: 3px; }
      `}</style>
    </section>
  )
}
