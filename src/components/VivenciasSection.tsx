'use client'
import { useReveal } from '@/hooks/useReveal'

const BG      = '#F0EBE1'
const TERRA   = '#2A1D14'
const MADEIRA = '#876039'
const TRONCO  = '#4D3019'
const CASCA   = '#65412A'
const TERRA_64 = 'rgba(42,29,20,0.64)'
const OSSO    = '#ECE6DC'
const OSSO_48 = 'rgba(236,230,220,0.48)'
const OSSO_24 = 'rgba(236,230,220,0.24)'

const vivencias = [
  { num: '01', title: 'Frio',       desc: 'Banheira de gelo. O desconforto que você escolhe.' },
  { num: '02', title: 'Treino',     desc: 'Suor antes do café. O corpo como ferramenta.' },
  { num: '03', title: 'Respiração', desc: 'Pranayama, Wim Hof. Presença total.' },
  { num: '04', title: 'Meditação',  desc: 'Silêncio sem tela. Só você e o que há.' },
  { num: '05', title: 'Comida',     desc: 'Comida de verdade. Sem ultraprocessado.' },
]

function Img({ style }: { style?: React.CSSProperties }) {
  return (
    <div
      aria-hidden="true"
      style={{
        background: `linear-gradient(160deg, ${CASCA} 0%, ${TRONCO} 55%, ${TERRA} 100%)`,
        ...style,
      }}
    />
  )
}

function TextBlock({
  items,
  style,
  split = false,
}: {
  items: typeof vivencias
  style?: React.CSSProperties
  split?: boolean
}) {
  return (
    <div style={{
      background: TERRA,
      display: split ? 'grid' : 'flex',
      gridTemplateColumns: split ? '1fr 1fr' : undefined,
      flexDirection: split ? undefined : 'column',
      ...style,
    }}>
      {items.map((v, i) => (
        <div
          key={v.title}
          style={{
            padding: '32px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            borderLeft: split && i > 0 ? `1px solid ${OSSO_24}` : undefined,
            borderTop: !split && i > 0 ? `1px solid ${OSSO_24}` : undefined,
            minHeight: split ? undefined : '180px',
          }}
        >
          <span style={{
            fontFamily: 'var(--f-text)',
            fontSize: '10px',
            fontWeight: 400,
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            color: MADEIRA,
            marginBottom: '16px',
            display: 'block',
          }}>
            {v.num}
          </span>
          <div>
            <h3 style={{
              fontFamily: 'var(--f-display)',
              fontSize: 'clamp(18px, 1.6vw, 22px)',
              fontWeight: 400,
              lineHeight: 1.1,
              letterSpacing: '0.02em',
              textTransform: 'uppercase',
              color: OSSO,
              marginBottom: '10px',
            }}>
              {v.title}
            </h3>
            <p style={{
              fontFamily: 'var(--f-text)',
              fontSize: '13px',
              fontWeight: 300,
              lineHeight: 1.55,
              color: OSSO_48,
            }}>
              {v.desc}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}

export function VivenciasSection() {
  const headerRef = useReveal<HTMLDivElement>()
  const gridRef   = useReveal<HTMLDivElement>()

  return (
    <section
      id="vivencias"
      aria-labelledby="vivencias-title"
      style={{ background: BG, color: TERRA, padding: 'clamp(80px, 12vh, 160px) 0' }}
    >
      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        paddingLeft:  'clamp(16px, 4vw, 48px)',
        paddingRight: 'clamp(16px, 4vw, 48px)',
      }}>

        {/* cabeçalho */}
        <div ref={headerRef} className="reveal" style={{ marginBottom: '56px', maxWidth: '760px' }}>
          <h1
            id="vivencias-title"
            style={{
              fontFamily: 'var(--f-display)',
              fontSize: 'clamp(26px, 3vw, 44px)',
              fontWeight: 400,
              lineHeight: 1.08,
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
            fontSize: 'clamp(15px, 1.3vw, 18px)',
            fontWeight: 300,
            lineHeight: 1.65,
            color: TERRA_64,
            maxWidth: '600px',
          }}>
            3 dias longe dos ruídos do mundo, em um lugar onde o machado encontra o silêncio, o corpo é testado e a alma lembra quem realmente é.
          </p>
        </div>

        {/* grid mosaico */}
        <div
          ref={gridRef}
          className="reveal"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gridTemplateRows: 'auto auto auto',
            gap: '4px',
          }}
        >
          {/* linha 1 */}
          <Img style={{ gridColumn: '1 / 7', aspectRatio: '4/5' }} />
          <TextBlock
            items={vivencias.slice(0, 2)}
            split
            style={{ gridColumn: '7 / 13' }}
          />

          {/* linha 2 */}
          <TextBlock
            items={vivencias.slice(2, 4)}
            style={{ gridColumn: '1 / 6' }}
          />
          <Img style={{ gridColumn: '6 / 13', aspectRatio: '3/2' }} />

          {/* linha 3 */}
          <TextBlock
            items={vivencias.slice(4)}
            style={{ gridColumn: '1 / 5' }}
          />
          <Img style={{ gridColumn: '5 / 13', aspectRatio: '16/6' }} />
        </div>

      </div>
    </section>
  )
}
