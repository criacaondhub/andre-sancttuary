'use client'
import { useReveal } from '@/hooks/useReveal'

export function MosaicoSection() {
  const titleRef = useReveal<HTMLHeadingElement>()

  return (
    <section
      aria-label="Mosaico de imagens"
      style={{ background: 'var(--c-carvao)', overflow: 'hidden' }}
      className="section-pad"
    >
      <div className="container-main">
        <div
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
              background: 'linear-gradient(135deg, var(--c-tronco) 0%, var(--c-carvao) 100%)',
            }}
          />
          <div
            aria-hidden="true"
            style={{
              gridColumn: '6 / 13',
              aspectRatio: '3/2',
              background: 'linear-gradient(135deg, var(--c-musgo) 0%, var(--c-carvao) 100%)',
              alignSelf: 'end',
            }}
          />
          <div
            aria-hidden="true"
            style={{
              gridColumn: '1 / 8',
              aspectRatio: '3/2',
              background: 'linear-gradient(135deg, var(--c-terra) 0%, var(--c-tronco) 100%)',
            }}
          />
          <div
            aria-hidden="true"
            style={{
              gridColumn: '8 / 13',
              aspectRatio: '1/1',
              background: 'linear-gradient(135deg, var(--c-casca) 0%, var(--c-terra) 100%)',
            }}
          />

          <h2
            ref={titleRef}
            className="reveal"
            style={{
              position: 'absolute',
              top: '50%',
              left: 'var(--s-8)',
              transform: 'translateY(-50%)',
              maxWidth: '520px',
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
            Saímos como versões mais cruas, mais presentes e mais inteiras de nós mesmos.
          </h2>
        </div>
      </div>
    </section>
  )
}
