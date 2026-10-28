'use client'
import { useReveal } from '@/hooks/useReveal'

const stats = [
  { value: '350 MIL', label: 'seguidores' },
  { value: 'X', label: 'edições do Sancttuary' },
  { value: 'TRIATLETA', label: 'em formação' },
]

export function QuemConduSection() {
  const contentRef = useReveal<HTMLDivElement>()

  return (
    <section
      id="quem-conduz"
      aria-labelledby="quem-title"
      style={{ background: 'var(--c-terra)' }}
      className="section-pad"
    >
      <div className="container-main">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '5fr 1fr 6fr',
            gap: 0,
            alignItems: 'start',
          }}
          className="quem-grid"
        >
          <div
            aria-label="Retrato de André Sanches"
            style={{
              aspectRatio: '4/5',
              background: 'linear-gradient(160deg, var(--c-casca) 0%, var(--c-terra) 100%)',
            }}
          />

          <div />

          <div ref={contentRef} className="reveal" style={{ paddingTop: 'var(--s-8)' }}>
            <p className="eyebrow" style={{ marginBottom: 'var(--s-5)' }}>Quem conduz</p>
            <h2 id="quem-title" className="h1" style={{ marginBottom: 'var(--s-6)' }}>
              André Sanches
            </h2>
            <p
              className="lead"
              style={{
                color: 'var(--c-text-2)',
                maxWidth: 'var(--text-max)',
                marginBottom: 'var(--s-9)',
              }}
            >
              Triatleta. Criador do Sancttuary. Acompanha homens que querem mais do que a rotina entrega.
            </p>

            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: 'var(--s-8)',
                borderTop: 'var(--line)',
                paddingTop: 'var(--s-7)',
              }}
            >
              {stats.map(s => (
                <div key={s.label}>
                  <p
                    className="h2"
                    style={{ color: 'var(--c-osso)', marginBottom: 'var(--s-2)' }}
                  >
                    {s.value}
                  </p>
                  <p className="small-text" style={{ color: 'var(--c-text-3)' }}>
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1023px) {
          .quem-grid {
            grid-template-columns: 1fr 1fr !important;
          }
          .quem-grid > div:nth-child(2) { display: none; }
        }
        @media (max-width: 639px) {
          .quem-grid {
            grid-template-columns: 1fr !important;
          }
          .quem-grid > div:nth-child(2) { display: none; }
        }
      `}</style>
    </section>
  )
}
