'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
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
  className: string
}

const cards: Card[] = [
  {
    id: 1,
    title: 'Imersão no Gelo',
    desc: 'Banheira de gelo. O desconforto que você escolhe.',
    grad: 'linear-gradient(160deg, #65412A 0%, #4D3019 60%, #2A1D14 100%)',
    className: 'col-span-2',
  },
  {
    id: 2,
    title: 'Treinos longos e curtos',
    desc: 'Suor antes do café. O corpo como ferramenta.',
    grad: 'linear-gradient(160deg, #2B2F24 0%, #4D3019 50%, #2A1D14 100%)',
    className: 'col-span-1',
  },
  {
    id: 3,
    title: 'Respiração e Meditação',
    desc: 'Pranayama, Wim Hof. Presença total.',
    grad: 'linear-gradient(160deg, #4D3019 0%, #65412A 50%, #2A1D14 100%)',
    className: 'col-span-1',
  },
  {
    id: 4,
    title: 'Sem tela, sem validação, sem plateia',
    desc: 'Silêncio sem tela. Só você e o que há.',
    grad: 'linear-gradient(160deg, #2A1D14 0%, #2B2F24 60%, #121110 100%)',
    className: 'col-span-2',
  },
]

export function VivenciasSection() {
  const [selected, setSelected] = useState<Card | null>(null)
  const [lastSelected, setLastSelected] = useState<Card | null>(null)
  const headingRef = useReveal<HTMLDivElement>()

  const handleClick = (card: Card) => {
    setLastSelected(selected)
    setSelected(card)
  }

  const handleOutsideClick = () => {
    setLastSelected(selected)
    setSelected(null)
  }

  return (
    <section
      id="vivencias"
      aria-labelledby="vivencias-title"
      style={{
        background: BG,
        padding: 'clamp(80px, 12vh, 160px) 0',
        overflow: 'hidden',
      }}
    >
      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '0 clamp(16px, 4vw, 48px)',
        display: 'grid',
        gridTemplateColumns: '1fr 1.6fr',
        gap: 'clamp(40px, 5vw, 96px)',
        alignItems: 'center',
      }}>

        {/* Coluna esquerda — texto */}
        <div ref={headingRef} className="reveal">
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
            marginBottom: '24px',
          }}>
            <span aria-hidden="true" style={{ display: 'block', width: 32, height: 1, background: MADEIRA, flexShrink: 0 }} />
            As vivências
          </p>

          <h2
            id="vivencias-title"
            style={{
              fontFamily: 'var(--f-display)',
              fontSize: 'clamp(26px, 2.8vw, 44px)',
              fontWeight: 400,
              lineHeight: 1.1,
              letterSpacing: '0.01em',
              textTransform: 'uppercase',
              color: TERRA,
              marginBottom: '24px',
            }}
          >
            Um chamado para homens que estão dispostos a encarar a sua verdade.
          </h2>

          <p style={{
            fontFamily: 'var(--f-text)',
            fontSize: 'clamp(14px, 1.1vw, 17px)',
            fontWeight: 300,
            lineHeight: 1.7,
            color: TERRA_64,
            marginBottom: '32px',
          }}>
            3 dias longe dos ruídos do mundo. Sem telas. Sem validação. Sem plateia.
          </p>

          <p style={{
            fontFamily: 'var(--f-text)',
            fontSize: '12px',
            fontWeight: 400,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: MADEIRA,
          }}>
            Clique em cada vivência
          </p>
        </div>

        {/* Coluna direita — grid */}
        <div style={{ position: 'relative' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gridTemplateRows: '280px 280px',
            gap: '4px',
            position: 'relative',
          }}>
            {cards.map((card) => (
              <div
                key={card.id}
                style={{
                  gridColumn: card.className === 'col-span-2' ? 'span 2' : 'span 1',
                }}
              >
                <motion.div
                  onClick={() => handleClick(card)}
                  layoutId={`card-${card.id}`}
                  style={{
                    position: 'relative',
                    overflow: 'hidden',
                    cursor: 'pointer',
                    height: '100%',
                    width: '100%',
                    ...(selected?.id === card.id
                      ? {
                          borderRadius: 0,
                          position: 'fixed',
                          inset: 0,
                          zIndex: 50,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          margin: 'auto',
                          width: '60vw',
                          height: '60vh',
                          top: '50%',
                          left: '50%',
                          transform: 'translate(-50%, -50%)',
                        }
                      : { borderRadius: 0 }),
                  }}
                >
                  {/* imagem / gradiente */}
                  <motion.div
                    layoutId={`image-${card.id}`}
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: card.grad,
                    }}
                  />

                  {/* overlay + título padrão */}
                  {selected?.id !== card.id && (
                    <div style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(to top, rgba(18,17,16,0.75) 0%, transparent 60%)',
                      display: 'flex',
                      alignItems: 'flex-end',
                      padding: '20px',
                    }}>
                      <p style={{
                        fontFamily: 'var(--f-display)',
                        fontSize: 'clamp(13px, 1.1vw, 17px)',
                        fontWeight: 400,
                        lineHeight: 1.15,
                        letterSpacing: '0.02em',
                        textTransform: 'uppercase',
                        color: OSSO,
                      }}>
                        {card.title}
                      </p>
                    </div>
                  )}

                  {/* conteúdo expandido */}
                  {selected?.id === card.id && (
                    <ExpandedCard card={card} />
                  )}
                </motion.div>
              </div>
            ))}

            {/* overlay escuro ao expandir */}
            <motion.div
              onClick={handleOutsideClick}
              animate={{ opacity: selected ? 0.5 : 0 }}
              style={{
                position: 'fixed',
                inset: 0,
                background: '#000',
                zIndex: 40,
                pointerEvents: selected ? 'auto' : 'none',
                cursor: 'pointer',
              }}
            />
          </div>
        </div>
      </div>

      {/* responsive */}
      <style>{`
        @media (max-width: 900px) {
          #vivencias > div {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}

function ExpandedCard({ card }: { card: Card }) {
  return (
    <div style={{
      position: 'absolute',
      inset: 0,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      zIndex: 60,
    }}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        style={{
          position: 'absolute',
          inset: 0,
          background: '#000',
          zIndex: 10,
        }}
      />
      <motion.div
        layoutId={`content-${card.id}`}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 40 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        style={{
          position: 'relative',
          zIndex: 70,
          padding: '32px',
        }}
      >
        <p style={{
          fontFamily: 'var(--f-display)',
          fontSize: 'clamp(22px, 2.4vw, 36px)',
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
          fontSize: '15px',
          fontWeight: 300,
          lineHeight: 1.65,
          color: 'rgba(236,230,220,0.72)',
        }}>
          {card.desc}
        </p>
      </motion.div>
    </div>
  )
}
