'use client'
import { useReveal } from '@/hooks/useReveal'

const vivencias = [
  { title: 'Frio', desc: 'Banheira de gelo. O desconforto que você escolhe.' },
  { title: 'Treino', desc: 'Suor antes do café. O corpo como ferramenta.' },
  { title: 'Respiração', desc: 'Pranayama, Wim Hof. Presença total.' },
  { title: 'Meditação', desc: 'Silêncio sem tela. Só você e o que há.' },
  { title: 'Comida', desc: 'Comida de verdade. Sem ultraprocessado.' },
]

export function VivenciasSection() {
  const headingRef = useReveal<HTMLDivElement>()

  return (
    <section
      id="vivencias"
      aria-labelledby="vivencias-title"
      style={{ background: '#F0EBE1', color: 'var(--c-terra)' }}
      className="section-pad"
    >
      <div className="container-main">
        <div ref={headingRef} className="reveal" style={{ marginBottom: 'var(--s-9)' }}>
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
              gap: '16px',
              marginBottom: 'var(--s-5)',
            }}
          >
            <span style={{ display: 'block', width: 32, height: 1, background: 'var(--c-madeira)', flexShrink: 0 }} aria-hidden="true" />
            As vivências
          </p>
          <h2
            id="vivencias-title"
            style={{
              fontFamily: 'var(--f-display)',
              fontSize: 'clamp(24px, 2.6vw, 36px)',
              fontWeight: 400,
              lineHeight: 1.15,
              letterSpacing: '0.01em',
              textTransform: 'uppercase',
              color: 'var(--c-terra)',
            }}
          >
            Três dias. Sem atalhos.
          </h2>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 'var(--s-6)',
          }}
          className="vivencias-grid"
        >
          {vivencias.map((v, i) => (
            <VivenciaCard key={v.title} {...v} index={i} />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1023px) {
          .vivencias-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 639px) {
          .vivencias-grid {
            display: flex !important;
            overflow-x: auto;
            scroll-snap-type: x mandatory;
            gap: var(--s-5) !important;
            padding-left: var(--gutter);
            padding-right: var(--gutter);
            margin-left: calc(-1 * var(--gutter));
            margin-right: calc(-1 * var(--gutter));
            scrollbar-width: none;
          }
          .vivencias-grid::-webkit-scrollbar { display: none; }
          .vivencia-card {
            flex: 0 0 calc(87% - var(--gutter));
            scroll-snap-align: start;
          }
        }
      `}</style>
    </section>
  )
}

function VivenciaCard({ title, desc, index }: { title: string; desc: string; index: number }) {
  const ref = useReveal<HTMLDivElement>()

  return (
    <div
      ref={ref}
      className="reveal vivencia-card"
      style={{
        transitionDelay: `${index * 80}ms`,
      }}
    >
      <div
        aria-hidden="true"
        style={{
          aspectRatio: '4/5',
          background: `linear-gradient(160deg, var(--c-casca) 0%, var(--c-tronco) 60%, var(--c-terra) 100%)`,
          marginBottom: 'var(--s-5)',
        }}
      />
      <h3 style={{
        fontFamily: 'var(--f-display)',
        fontSize: 'clamp(20px, 1.8vw, 24px)',
        fontWeight: 400,
        lineHeight: 1.2,
        letterSpacing: '0.02em',
        textTransform: 'uppercase',
        color: 'var(--c-terra)',
        marginBottom: 'var(--s-3)',
      }}>{title}</h3>
      <p style={{
        fontFamily: 'var(--f-text)',
        fontSize: '14px',
        fontWeight: 400,
        lineHeight: 1.55,
        letterSpacing: '0.01em',
        color: 'rgba(42,29,20,0.64)',
      }}>{desc}</p>
    </div>
  )
}
