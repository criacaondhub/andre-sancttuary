'use client'
import { useReveal } from '@/hooks/useReveal'

const vivencias = [
  {
    title: 'Imersão no Gelo',
    desc: 'Banheira de gelo. O desconforto que você escolhe.',
    grad: 'linear-gradient(160deg, #65412A 0%, #4D3019 60%, #2A1D14 100%)',
  },
  {
    title: 'Treinos longos e curtos',
    desc: 'Suor antes do café. O corpo como ferramenta.',
    grad: 'linear-gradient(160deg, #2B2F24 0%, #4D3019 50%, #2A1D14 100%)',
  },
  {
    title: 'Respiração e Meditação',
    desc: 'Pranayama, Wim Hof. Presença total.',
    grad: 'linear-gradient(160deg, #4D3019 0%, #65412A 50%, #2A1D14 100%)',
  },
  {
    title: 'Sem tela, sem validação, sem plateia',
    desc: 'Silêncio sem tela. Só você e o que há.',
    grad: 'linear-gradient(160deg, #2A1D14 0%, #2B2F24 60%, #121110 100%)',
  },
]

export function VivenciasSection() {
  const headingRef = useReveal<HTMLDivElement>()

  return (
    <section
      id="vivencias"
      aria-labelledby="vivencias-title"
      style={{ background: '#F0EBE1', color: 'var(--c-terra)', padding: 'clamp(80px, 12vh, 160px) 0' }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 clamp(16px, 4vw, 48px)' }}>

        <div ref={headingRef} className="reveal" style={{ marginBottom: 'clamp(48px, 6vw, 96px)', maxWidth: '860px' }}>
          <p style={{
            fontFamily: 'var(--f-text)',
            fontSize: '13px',
            fontWeight: 400,
            letterSpacing: '0.24em',
            textTransform: 'uppercase',
            color: '#876039',
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            marginBottom: '24px',
          }}>
            <span aria-hidden="true" style={{ display: 'block', width: 32, height: 1, background: '#876039', flexShrink: 0 }} />
            As vivências
          </p>
          <h2
            id="vivencias-title"
            style={{
              fontFamily: 'var(--f-display)',
              fontSize: 'clamp(28px, 3.2vw, 48px)',
              fontWeight: 400,
              lineHeight: 1.1,
              letterSpacing: '0.01em',
              textTransform: 'uppercase',
              color: '#2A1D14',
              marginBottom: '20px',
            }}
          >
            Um chamado para homens que estão dispostos a encarar a sua verdade.
          </h2>
          <p style={{
            fontFamily: 'var(--f-text)',
            fontSize: 'clamp(15px, 1.2vw, 18px)',
            fontWeight: 300,
            lineHeight: 1.65,
            color: 'rgba(42,29,20,0.64)',
          }}>
            3 dias longe dos ruídos do mundo. Sem telas. Sem validação. Sem plateia.
          </p>
        </div>

        <div
          className="vivencias-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '24px',
          }}
        >
          {vivencias.map((v, i) => (
            <VivenciaCard key={v.title} {...v} index={i} />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1023px) {
          .vivencias-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 639px) {
          .vivencias-grid {
            display: flex !important;
            overflow-x: auto;
            scroll-snap-type: x mandatory;
            gap: 16px !important;
            padding-left: clamp(16px, 4vw, 48px);
            padding-right: clamp(16px, 4vw, 48px);
            margin-left: calc(-1 * clamp(16px, 4vw, 48px));
            margin-right: calc(-1 * clamp(16px, 4vw, 48px));
            scrollbar-width: none;
          }
          .vivencias-grid::-webkit-scrollbar { display: none; }
          .vivencia-card { flex: 0 0 calc(87% - clamp(16px, 4vw, 48px)); scroll-snap-align: start; }
        }
      `}</style>
    </section>
  )
}

function VivenciaCard({ title, desc, grad, index }: { title: string; desc: string; grad: string; index: number }) {
  const ref = useReveal<HTMLDivElement>()

  return (
    <div
      ref={ref}
      className="reveal vivencia-card"
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div
        aria-hidden="true"
        style={{
          aspectRatio: '4/5',
          background: grad,
          marginBottom: '20px',
        }}
      />
      <h3 style={{
        fontFamily: 'var(--f-display)',
        fontSize: 'clamp(17px, 1.4vw, 22px)',
        fontWeight: 400,
        lineHeight: 1.2,
        letterSpacing: '0.02em',
        textTransform: 'uppercase',
        color: '#2A1D14',
        marginBottom: '10px',
      }}>
        {title}
      </h3>
      <p style={{
        fontFamily: 'var(--f-text)',
        fontSize: '14px',
        fontWeight: 400,
        lineHeight: 1.6,
        color: 'rgba(42,29,20,0.64)',
      }}>
        {desc}
      </p>
    </div>
  )
}
