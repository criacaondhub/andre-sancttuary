'use client'
import { useReveal } from '@/hooks/useReveal'

const BG       = '#F0EBE1'
const TERRA    = '#2A1D14'
const MADEIRA  = '#876039'
const TRONCO   = '#4D3019'
const CASCA    = '#65412A'
const TERRA_64 = 'rgba(42,29,20,0.64)'
const TERRA_16 = 'rgba(42,29,20,0.16)'

const vivencias = [
  { num: '01', title: 'Frio',       desc: 'Banheira de gelo. O desconforto que você escolhe.' },
  { num: '02', title: 'Treino',     desc: 'Suor antes do café. O corpo como ferramenta.' },
  { num: '03', title: 'Respiração', desc: 'Pranayama, Wim Hof. Presença total.' },
  { num: '04', title: 'Meditação',  desc: 'Silêncio sem tela. Só você e o que há.' },
  { num: '05', title: 'Comida',     desc: 'Comida de verdade. Sem ultraprocessado.' },
]

export function VivenciasSection() {
  const leftRef  = useReveal<HTMLDivElement>()
  const rightRef = useReveal<HTMLDivElement>()

  return (
    <section
      id="vivencias"
      aria-labelledby="vivencias-title"
      style={{ background: BG, color: TERRA, overflow: 'hidden' }}
    >
      <div style={{
        display: 'grid',
        gridTemplateColumns: '5fr 7fr',
        minHeight: '100svh',
      }}>

        {/* coluna esquerda — texto */}
        <div
          ref={leftRef}
          className="reveal"
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: 'clamp(64px, 10vh, 120px) clamp(48px, 5vw, 96px) clamp(64px, 10vh, 120px) clamp(48px, 5vw, 96px)',
            borderRight: `1px solid ${TERRA_16}`,
          }}
        >
          <h1
            id="vivencias-title"
            style={{
              fontFamily: 'var(--f-display)',
              fontSize: 'clamp(24px, 2.4vw, 36px)',
              fontWeight: 400,
              lineHeight: 1.1,
              letterSpacing: '0.01em',
              textTransform: 'uppercase',
              color: TERRA,
              marginBottom: '20px',
            }}
          >
            Um chamado para homens que estão dispostos a encarar a sua verdade.
          </h1>

          <p style={{
            fontFamily: 'var(--f-text)',
            fontSize: 'clamp(14px, 1.1vw, 16px)',
            fontWeight: 300,
            lineHeight: 1.7,
            color: TERRA_64,
            marginBottom: '48px',
            maxWidth: '42ch',
          }}>
            3 dias longe dos ruídos do mundo, em um lugar onde o machado encontra o silêncio, o corpo é testado e a alma lembra quem realmente é.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {vivencias.map((v, i) => (
              <div
                key={v.title}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '40px 1fr',
                  gap: '16px',
                  alignItems: 'baseline',
                  paddingTop: '20px',
                  paddingBottom: '20px',
                  borderTop: `1px solid ${TERRA_16}`,
                  borderBottom: i === vivencias.length - 1 ? `1px solid ${TERRA_16}` : 'none',
                }}
              >
                <span style={{
                  fontFamily: 'var(--f-text)',
                  fontSize: '10px',
                  fontWeight: 400,
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: MADEIRA,
                }}>
                  {v.num}
                </span>
                <div>
                  <p style={{
                    fontFamily: 'var(--f-display)',
                    fontSize: 'clamp(15px, 1.3vw, 18px)',
                    fontWeight: 400,
                    lineHeight: 1.1,
                    letterSpacing: '0.02em',
                    textTransform: 'uppercase',
                    color: TERRA,
                    marginBottom: '4px',
                  }}>
                    {v.title}
                  </p>
                  <p style={{
                    fontFamily: 'var(--f-text)',
                    fontSize: '12px',
                    fontWeight: 300,
                    lineHeight: 1.55,
                    color: TERRA_64,
                  }}>
                    {v.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* coluna direita — imagem */}
        <div
          ref={rightRef}
          className="reveal"
          style={{ transitionDelay: '120ms' }}
        >
          <div
            aria-hidden="true"
            style={{
              height: '100%',
              minHeight: '600px',
              background: `linear-gradient(160deg, ${CASCA} 0%, ${TRONCO} 55%, ${TERRA} 100%)`,
            }}
          />
        </div>

      </div>
    </section>
  )
}
