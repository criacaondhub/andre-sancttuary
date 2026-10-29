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
  img: string
  pos: string
  span: number
}

const cards: Card[] = [
  {
    id: 1,
    title: 'Imersão no Gelo',
    desc: 'Banheira de gelo. O desconforto que você escolhe.',
    grad: 'linear-gradient(160deg, #65412A 0%, #4D3019 60%, #2A1D14 100%)',
    img: '/imersão_no_gelo.webp',
    pos: 'center 50%',
    span: 2,
  },
  {
    id: 2,
    title: 'Treinos longos e curtos',
    desc: 'Suor antes do café. O corpo como ferramenta.',
    grad: 'linear-gradient(160deg, #2B2F24 0%, #4D3019 50%, #2A1D14 100%)',
    img: '/Treinos_longos_e_curtos.webp',
    pos: 'center 55%',
    span: 1,
  },
  {
    id: 3,
    title: 'Respiração e Meditação',
    desc: 'Pranayama, Wim Hof. Presença total.',
    grad: 'linear-gradient(160deg, #4D3019 0%, #65412A 50%, #2A1D14 100%)',
    img: '/Respiração_e_meditação.webp',
    pos: 'center 55%',
    span: 1,
  },
  {
    id: 4,
    title: 'Sem tela, sem validação, sem plateia',
    desc: 'Silêncio sem tela. Só você e o que há.',
    grad: 'linear-gradient(160deg, #2A1D14 0%, #2B2F24 60%, #121110 100%)',
    img: '/Sem-tela.webp',
    pos: 'center 52%',
    span: 2,
  },
]

export function VivenciasSection() {
  const [selected, setSelected] = useState<Card | null>(null)
  const headingRef = useReveal<HTMLDivElement>()
  const textRef    = useReveal<HTMLDivElement>()

  const handleClick = (card: Card) => {
    setSelected(prev => prev?.id === card.id ? null : card)
  }

  return (
    <section id="vivencias" aria-labelledby="vivencias-title" className="m-center" style={{ background: BG, overflow: 'hidden' }}>

      {/* parte superior: texto esquerda + grid direita */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '45fr 55fr',
      }}>

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
          <p className="m-flex tag-lines" style={{
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
            Um chamado para homens que estão dispostos a encarar a sua&nbsp;verdade.
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

        {/* Coluna direita — grid de imagens */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gridTemplateRows: '1fr 1fr',
          gap: '3px',
          minHeight: '82svh',
          paddingTop: '72px',
          paddingLeft: 'var(--gutter)',
          paddingRight: 'var(--gutter)',
          paddingBottom: 'var(--gutter)',
        }}>
          {cards.map((card) => (
            <div key={card.id} style={{ gridColumn: `span ${card.span}` }}>
              <motion.div
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
                <motion.div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: card.grad,
                    filter: selected && selected.id !== card.id ? 'brightness(0.45)' : 'brightness(1)',
                    transition: 'filter 350ms ease',
                  }}
                >
                  <img
                    src={card.img}
                    alt=""
                    loading="lazy"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: card.pos, display: 'block' }}
                  />
                </motion.div>

                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(18,17,16,0.82) 0%, rgba(18,17,16,0.1) 50%, transparent 100%)',
                  pointerEvents: 'none',
                }} />

                {/* título padrão */}
                <motion.div
                  animate={{ opacity: selected?.id === card.id ? 0 : 1, y: selected?.id === card.id ? 6 : 0 }}
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
                    fontSize: 'clamp(13px, 1.2vw, 19px)',
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
                    fontSize: 'clamp(18px, 1.8vw, 30px)',
                    fontWeight: 400,
                    lineHeight: 1.1,
                    letterSpacing: '0.02em',
                    textTransform: 'uppercase',
                    color: OSSO,
                    marginBottom: '10px',
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
      </div>

      {/* faixa de texto abaixo */}
      <div
        ref={textRef}
        className="reveal"
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 'clamp(32px, 4vw, 80px)',
          alignItems: 'end',
          padding: 'clamp(40px, 6vh, 72px) clamp(32px, 5vw, 96px)',
          borderTop: '1px solid rgba(42,29,20,0.12)',
        }}
      >
        <p style={{
          fontFamily: 'var(--f-display)',
          fontSize: 'clamp(22px, 2.2vw, 34px)',
          fontWeight: 400,
          lineHeight: 1.15,
          letterSpacing: '0.01em',
          color: TERRA,
        }}>
          Entramos como homens da&nbsp;cidade:
        </p>
        <p style={{
          fontFamily: 'var(--f-text)',
          fontSize: 'clamp(14px, 1.1vw, 17px)',
          fontWeight: 300,
          lineHeight: 1.75,
          color: TERRA_64,
        }}>
          Distraídos, acelerados, carregando dúvidas, pressões, expectativas e histórias que já não servem mais...
        </p>
      </div>

      <style>{`
        @media (max-width: 860px) {
          #vivencias > div:first-child {
            grid-template-columns: 1fr !important;
          }
          #vivencias > div:first-child > div:last-child {
            min-height: 65svh !important;
          }
          #vivencias > div:last-of-type {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}
