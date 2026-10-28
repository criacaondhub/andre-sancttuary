'use client'
import { useReveal } from '@/hooks/useReveal'

export function MosaicoSection() {
  const titleRef = useReveal<HTMLHeadingElement>()

  return (
    <section
      aria-label="Mosaico de imagens"
      style={{
        background: '#F0EBE1',
        overflow: 'hidden',
        padding: 'clamp(80px, 12vh, 160px) 0',
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 clamp(16px, 4vw, 48px)' }}>
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
              background: 'linear-gradient(135deg, #2B2F24 0%, #1A1E16 100%)',
            }}
          />
          <div
            aria-hidden="true"
            style={{
              gridColumn: '6 / 13',
              aspectRatio: '3/2',
              background: 'linear-gradient(135deg, #3A4030 0%, #2B2F24 100%)',
              alignSelf: 'end',
            }}
          />
          <div
            aria-hidden="true"
            style={{
              gridColumn: '1 / 8',
              aspectRatio: '3/2',
              background: 'linear-gradient(135deg, #2B2F24 0%, #4D3019 100%)',
            }}
          />
          <div
            aria-hidden="true"
            style={{
              gridColumn: '8 / 13',
              aspectRatio: '1/1',
              background: 'linear-gradient(135deg, #3A4030 0%, #2B2F24 100%)',
            }}
          />

          <h2
            ref={titleRef}
            className="reveal"
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
            Saímos como versões mais cruas, mais presentes e mais inteiras de nós mesmos.
          </h2>
        </div>
      </div>
    </section>
  )
}
