'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { useReveal } from '@/hooks/useReveal'

const TERRA    = '#2A1D14'
const TERRA_64 = 'rgba(42,29,20,0.64)'
const MADEIRA  = '#876039'
const OSSO     = '#ECE6DC'
const BG       = '#F0EBE1'

type Card = {
  id: number
  title: string
  desc: string
  grad: string
  span: number
}

const cards: Card[] = [
  {
    id: 1,
    title: 'Imersão no Gelo',
    desc: 'Banheira de gelo. O desconforto que você escolhe.',
    grad: 'linear-gradient(160deg, #65412A 0%, #4D3019 60%, #2A1D14 100%)',
    span: 2,
  },
  {
    id: 2,
    title: 'Treinos longos e curtos',
    desc: 'Suor antes do café. O corpo como ferramenta.',
    grad: 'linear-gradient(160deg, #2B2F24 0%, #4D3019 50%, #2A1D14 100%)',
    span: 1,
  },
  {
    id: 3,
    title: 'Respiração e Meditação',
    desc: 'Pranayama, Wim Hof. Presença total.',
    grad: 'linear-gradient(160deg, #4D3019 0%, #65412A 50%, #2A1D14 100%)',
    span: 1,
  },
  {
    id: 4,
    title: 'Sem tela, sem validação, sem plateia',
    desc: 'Silêncio sem tela. Só você e o que há.',
    grad: 'linear-gradient(160deg, #2A1D14 0%, #2B2F24 60%, #121110 100%)',
    span: 2,
  },
]

export function VivenciasSection() {
  const [selected, setSelected] = useState<Card | null>(null)
  const headingRef = useReveal<HTMLDivElement>()

  const handleClick = (card: Card) => {
    setSelected(prev => prev?.id === card.id ? null : card)
  }

  return (
    <section
      id="vivencias"
      aria-labelledby="vivencias-title"
      style={{
        background: BG,
        minHeight: '100svh',
        display: 'grid',
        gridTemplateColumns: '38fr 62fr',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      {/* Coluna esquerda — texto */}
      <div
        ref={headingRef}
        className="reveal"
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: 'clamp(60px, 10vh, 120px) clamp(32px, 5vw, 72px)',
        }}
      >
        <p style={{
          fontFamily: 'var(--f-text)',
          fontSize: '13px',
          fontWeight: 400,
          letterSpacing: '0.24em',
          textTransform: 'uppercase',
          color: MADEIRA,
          display: 'flex',
          alignItems: 'center',
          gap: '16px',
          marginBottom: '28px',
        }}>
          <span aria-hidden="true" style={{ display: 'block', width: 32, height: 1, background: MADEIRA, flexShrink: 0 }} />
          As vivências
        </p>

        <h2
          id="vivencias-title"
          style={{
            fontFamily: 'var(--f-display)',
            fontSize: 'clamp(26px, 2.6vw, 42px)',
            fontWeight: 400,
            lineHeight: 1.1,
            letterSpacing: '0.01em',
            textTransform: 'uppercase',
            color: TERRA,
            marginBottom: '28px',
          }}
        >
          Um chamado para homens que estão dispostos a encarar a sua verdade.
        </h2>

        <p style={{
          fontFamily: 'var(--f-text)',
          fontSize: 'clamp(14px, 1.1vw, 17px)',
          fontWeight: 300,
          lineHeight: 1.75,
          color: TERRA_64,
          marginBottom: '40px',
        }}>
          3 dias longe dos ruídos do mundo. Sem telas. Sem validação. Sem plateia.
        </p>

        <p style={{
          fontFamily: 'var(--f-text)',
          fontSize: '11px',
          fontWeight: 400,
          letterSpacing: '0.22em',
          textTransform: 'uppercase',
          color: 'rgba(42,29,20,0.36)',
        }}>
          Clique em cada vivência →
        </p>
      </div>

      {/* Coluna direita — grid de imagens full-height */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gridTemplateRows: '1fr 1fr',
        gap: '3px',
        height: '100%',
        minHeight: '100svh',
      }}>
        {cards.map((card) => (
          <div
            key={card.id}
            style={{ gridColumn: `span ${card.span}` }}
          >
            <motion.div
              layoutId={`card-${card.id}`}
              onClick={() => handleClick(card)}
              style={{
                position: 'relative',
                overflow: 'hidden',
                cursor: 'pointer',
                height: '100%',
                width: '100%',
                borderRadius: 0,
              }}
            >
              {/* gradiente de fundo */}
              <motion.div
                layoutId={`bg-${card.id}`}
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: card.grad,
                  transition: 'filter 400ms ease',
                  filter: selected && selected.id !== card.id ? 'brightness(0.45)' : 'brightness(1)',
                }}
              />

              {/* overlay gradiente */}
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(18,17,16,0.82) 0%, rgba(18,17,16,0.1) 50%, transparent 100%)',
                pointerEvents: 'none',
              }} />

              {/* título padrão */}
              <motion.div
                animate={{ opacity: selected?.id === card.id ? 0 : 1, y: selected?.id === card.id ? 8 : 0 }}
                transition={{ duration: 0.2 }}
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: 'clamp(16px, 2vw, 28px)',
                }}
              >
                <p style={{
                  fontFamily: 'var(--f-display)',
                  fontSize: 'clamp(14px, 1.3vw, 20px)',
                  fontWeight: 400,
                  lineHeight: 1.15,
                  letterSpacing: '0.02em',
                  textTransform: 'uppercase',
                  color: OSSO,
                }}>
                  {card.title}
                </p>
              </motion.div>

              {/* conteúdo expandido */}
              <motion.div
                animate={{ opacity: selected?.id === card.id ? 1 : 0, y: selected?.id === card.id ? 0 : 20 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                style={{
                  position: 'absolute',
                  inset: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  padding: 'clamp(20px, 2.5vw, 36px)',
                  pointerEvents: 'none',
                }}
              >
                <p style={{
                  fontFamily: 'var(--f-display)',
                  fontSize: 'clamp(20px, 2vw, 32px)',
                  fontWeight: 400,
                  lineHeight: 1.1,
                  letterSpacing: '0.02em',
                  textTransform: 'uppercase',
                  color: OSSO,
                  marginBottom: '12px',
                }}>
                  {card.title}
                </p>
                <p style={{
                  fontFamily: 'var(--f-text)',
                  fontSize: 'clamp(13px, 1vw, 15px)',
                  fontWeight: 300,
                  lineHeight: 1.65,
                  color: 'rgba(236,230,220,0.72)',
                }}>
                  {card.desc}
                </p>
              </motion.div>
            </motion.div>
          </div>
        ))}
      </div>

      {/* responsive */}
      <style>{`
        @media (max-width: 860px) {
          #vivencias {
            grid-template-columns: 1fr !important;
            grid-template-rows: auto 70svh !important;
          }
          #vivencias > div:first-child {
            padding: clamp(48px, 8vh, 80px) clamp(24px, 5vw, 48px) !important;
          }
          #vivencias > div:last-child {
            min-height: 70svh !important;
          }
        }
      `}</style>
    </section>
  )
}
