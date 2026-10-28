'use client'
import { useReveal } from '@/hooks/useReveal'

const BG       = '#F0EBE1'
const TERRA    = '#2A1D14'
const MADEIRA  = '#876039'
const TRONCO   = '#4D3019'
const CASCA    = '#65412A'
const TERRA_64 = 'rgba(42,29,20,0.64)'
const TERRA_12 = 'rgba(42,29,20,0.12)'

const vivencias = [
  { num: '01', title: 'Frio',       desc: 'Banheira de gelo. O desconforto que você escolhe.' },
  { num: '02', title: 'Treino',     desc: 'Suor antes do café. O corpo como ferramenta.' },
  { num: '03', title: 'Respiração', desc: 'Pranayama, Wim Hof. Presença total.' },
  { num: '04', title: 'Meditação',  desc: 'Silêncio sem tela. Só você e o que há.' },
  { num: '05', title: 'Comida',     desc: 'Comida de verdade. Sem ultraprocessado.' },
]

const imgGradients = [
  `linear-gradient(150deg, #65412A 0%, #4D3019 50%, #2A1D14 100%)`,
  `linear-gradient(200deg, #4D3019 0%, #2B2F24 60%, #121110 100%)`,
  `linear-gradient(120deg, #2A1D14 0%, #4D3019 50%, #65412A 100%)`,
  `linear-gradient(170deg, #2B2F24 0%, #2A1D14 40%, #4D3019 100%)`,
]

export function VivenciasSection() {
  const ref = useReveal<HTMLElement>()

  return (
    <section
      ref={ref}
      id="vivencias"
      aria-labelledby="vivencias-title"
      className="reveal"
      style={{
        height: '100svh',
        minHeight: '640px',
        display: 'grid',
        gridTemplateColumns: '5fr 7fr',
        overflow: 'hidden',
      }}
    >
      {/* esquerda — texto */}
      <div style={{
        background: BG,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: 'clamp(48px, 7vh, 88px) clamp(40px, 4vw, 72px)',
        borderRight: `1px solid ${TERRA_12}`,
      }}>
        <div>
          <h1
            id="vivencias-title"
            style={{
              fontFamily: 'var(--f-display)',
              fontSize: 'clamp(22px, 2.2vw, 34px)',
              fontWeight: 400,
              lineHeight: 1.1,
              letterSpacing: '0.01em',
              textTransform: 'uppercase',
              color: TERRA,
              marginBottom: '16px',
            }}
          >
            Um chamado para homens que estão dispostos a encarar a sua verdade.
          </h1>
          <p style={{
            fontFamily: 'var(--f-text)',
            fontSize: 'clamp(13px, 1vw, 15px)',
            fontWeight: 300,
            lineHeight: 1.7,
            color: TERRA_64,
            maxWidth: '38ch',
          }}>
            3 dias longe dos ruídos do mundo, em um lugar onde o machado encontra o silêncio, o corpo é testado e a alma lembra quem realmente é.
          </p>
        </div>

        <div>
          {vivencias.map((v, i) => (
            <div
              key={v.title}
              style={{
                display: 'grid',
                gridTemplateColumns: '36px 1fr',
                gap: '12px',
                alignItems: 'baseline',
                padding: '14px 0',
                borderTop: `1px solid ${TERRA_12}`,
                borderBottom: i === vivencias.length - 1 ? `1px solid ${TERRA_12}` : 'none',
              }}
            >
              <span style={{
                fontFamily: 'var(--f-text)',
                fontSize: '10px',
                fontWeight: 400,
                letterSpacing: '0.18em',
                color: MADEIRA,
              }}>
                {v.num}
              </span>
              <div>
                <p style={{
                  fontFamily: 'var(--f-display)',
                  fontSize: 'clamp(14px, 1.2vw, 17px)',
                  fontWeight: 400,
                  lineHeight: 1.1,
                  letterSpacing: '0.02em',
                  textTransform: 'uppercase',
                  color: TERRA,
                  marginBottom: '3px',
                }}>
                  {v.title}
                </p>
                <p style={{
                  fontFamily: 'var(--f-text)',
                  fontSize: '12px',
                  fontWeight: 300,
                  lineHeight: 1.5,
                  color: TERRA_64,
                }}>
                  {v.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* direita — grid 2×2 de imagens */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gridTemplateRows: '3fr 2fr',
        gap: '4px',
      }}>
        {imgGradients.map((grad, i) => (
          <div
            key={i}
            aria-hidden="true"
            style={{ background: grad }}
          />
        ))}
      </div>
    </section>
  )
}
