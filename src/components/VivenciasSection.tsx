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
      style={{ background: 'var(--c-terra)' }}
      className="section-pad"
    >
      <div className="container-main">
        <div ref={headingRef} className="reveal" style={{ marginBottom: 'var(--s-9)' }}>
          <p className="eyebrow" style={{ marginBottom: 'var(--s-5)' }}>As vivências</p>
          <h2 id="vivencias-title" className="h2">
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
      <h3 className="h3" style={{ marginBottom: 'var(--s-3)' }}>{title}</h3>
      <p className="small-text" style={{ color: 'var(--c-text-2)' }}>{desc}</p>
    </div>
  )
}
