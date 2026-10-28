'use client'
import { useState } from 'react'
import { useReveal } from '@/hooks/useReveal'

const vivencias = [
  { num: '01', title: 'Frio',       desc: 'Banheira de gelo. O desconforto que você escolhe.' },
  { num: '02', title: 'Treino',     desc: 'Suor antes do café. O corpo como ferramenta.' },
  { num: '03', title: 'Respiração', desc: 'Pranayama, Wim Hof. Presença total.' },
  { num: '04', title: 'Meditação',  desc: 'Silêncio sem tela. Só você e o que há.' },
  { num: '05', title: 'Comida',     desc: 'Comida de verdade. Sem ultraprocessado.' },
]

const BG = '#F0EBE1'
const TERRA = '#2A1D14'
const MADEIRA = '#876039'
const TRONCO = '#4D3019'
const CASCA = '#65412A'
const TERRA_64 = 'rgba(42,29,20,0.64)'
const TERRA_32 = 'rgba(42,29,20,0.32)'
const TERRA_16 = 'rgba(42,29,20,0.16)'

function SectionHeader() {
  const ref = useReveal<HTMLDivElement>()
  return (
    <div ref={ref} className="reveal" style={{ marginBottom: '72px', maxWidth: '860px' }}>
      <h1 style={{
        fontFamily: 'var(--f-display)',
        fontSize: 'clamp(28px, 3.2vw, 48px)',
        fontWeight: 400,
        lineHeight: 1.1,
        letterSpacing: '0.01em',
        textTransform: 'uppercase',
        color: TERRA,
        marginBottom: '24px',
        textWrap: 'balance',
      } as React.CSSProperties}>
        Um chamado para homens que estão dispostos a encarar a sua verdade.
      </h1>
      <p style={{
        fontFamily: 'var(--f-text)',
        fontSize: 'clamp(16px, 1.4vw, 19px)',
        fontWeight: 300,
        lineHeight: 1.65,
        color: TERRA_64,
        maxWidth: '640px',
      }}>
        3 dias longe dos ruídos do mundo, em um lugar onde o machado encontra o silêncio, o corpo é testado e a alma lembra quem realmente é.
      </p>
    </div>
  )
}

function ImgPlaceholder({ style }: { style?: React.CSSProperties }) {
  return (
    <div aria-hidden="true" style={{
      background: `linear-gradient(160deg, ${CASCA} 0%, ${TRONCO} 60%, ${TERRA} 100%)`,
      ...style,
    }} />
  )
}

function LayoutGrid() {
  return (
    <div>
      <SectionHeader />
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
        gap: '32px',
      }}>
        {vivencias.map((v, i) => (
          <div key={v.title} style={{ animationDelay: `${i * 60}ms` }}>
            <ImgPlaceholder style={{ aspectRatio: '4/5', marginBottom: '20px' }} />
            <p style={{ fontFamily: 'var(--f-text)', fontSize: '11px', fontWeight: 400, letterSpacing: '0.22em', textTransform: 'uppercase', color: MADEIRA, marginBottom: '8px' }}>{v.num}</p>
            <h3 style={{ fontFamily: 'var(--f-display)', fontSize: 'clamp(18px, 1.6vw, 22px)', fontWeight: 400, lineHeight: 1.2, letterSpacing: '0.02em', textTransform: 'uppercase', color: TERRA, marginBottom: '10px' }}>{v.title}</h3>
            <p style={{ fontFamily: 'var(--f-text)', fontSize: '14px', fontWeight: 400, lineHeight: 1.55, color: TERRA_64 }}>{v.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

function LayoutEditorial() {
  return (
    <div>
      <SectionHeader />
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4px', alignItems: 'start' }}>
        <div style={{ position: 'relative' }}>
          <ImgPlaceholder style={{ height: '100%', minHeight: '600px', aspectRatio: '3/4' }} />
          <div style={{ position: 'absolute', bottom: '32px', left: '32px', right: '32px' }}>
            <p style={{ fontFamily: 'var(--f-text)', fontSize: '11px', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(236,230,220,0.6)', marginBottom: '8px' }}>{vivencias[0].num}</p>
            <h3 style={{ fontFamily: 'var(--f-display)', fontSize: 'clamp(24px, 2.2vw, 32px)', fontWeight: 400, lineHeight: 1.1, textTransform: 'uppercase', color: '#ECE6DC', marginBottom: '10px' }}>{vivencias[0].title}</h3>
            <p style={{ fontFamily: 'var(--f-text)', fontSize: '14px', fontWeight: 300, lineHeight: 1.5, color: 'rgba(236,230,220,0.72)' }}>{vivencias[0].desc}</p>
          </div>
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(18,17,16,0) 40%, rgba(18,17,16,0.85) 100%)', pointerEvents: 'none' }} aria-hidden="true" />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gridTemplateRows: '1fr 1fr', gap: '4px', height: '100%' }}>
          {vivencias.slice(1).map((v) => (
            <div key={v.title} style={{ position: 'relative', minHeight: '240px' }}>
              <ImgPlaceholder style={{ position: 'absolute', inset: 0 }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(18,17,16,0) 30%, rgba(18,17,16,0.8) 100%)' }} aria-hidden="true" />
              <div style={{ position: 'absolute', bottom: '20px', left: '20px', right: '20px' }}>
                <p style={{ fontFamily: 'var(--f-text)', fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(236,230,220,0.5)', marginBottom: '6px' }}>{v.num}</p>
                <h3 style={{ fontFamily: 'var(--f-display)', fontSize: 'clamp(16px, 1.4vw, 20px)', fontWeight: 400, lineHeight: 1.1, textTransform: 'uppercase', color: '#ECE6DC' }}>{v.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function LayoutTypo() {
  return (
    <div>
      <SectionHeader />
      <div>
        {vivencias.map((v, i) => (
          <div key={v.title} style={{
            display: 'grid',
            gridTemplateColumns: '80px 1fr 1fr',
            gap: '32px',
            alignItems: 'baseline',
            paddingTop: '32px',
            paddingBottom: '32px',
            borderTop: `1px solid ${TERRA_16}`,
            borderBottom: i === vivencias.length - 1 ? `1px solid ${TERRA_16}` : 'none',
          }}>
            <span style={{ fontFamily: 'var(--f-display)', fontSize: 'clamp(32px, 3vw, 48px)', fontWeight: 400, lineHeight: 1, color: MADEIRA, letterSpacing: '0.01em' }}>{v.num}</span>
            <h3 style={{ fontFamily: 'var(--f-display)', fontSize: 'clamp(22px, 2vw, 30px)', fontWeight: 400, lineHeight: 1.1, letterSpacing: '0.01em', textTransform: 'uppercase', color: TERRA }}>{v.title}</h3>
            <p style={{ fontFamily: 'var(--f-text)', fontSize: '15px', fontWeight: 300, lineHeight: 1.6, color: TERRA_64, textAlign: 'right' }}>{v.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

const layouts = [
  {
    id: 1,
    label: 'Grid',
    thumb: (
      <svg viewBox="0 0 36 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        {[0,1,2,3,4].map(i => (
          <rect key={i} x={1 + (i % 3) * 12} y={i < 3 ? 1 : 13} width={10} height={10} rx={0.5} fill="currentColor" opacity={0.5} />
        ))}
      </svg>
    ),
  },
  {
    id: 2,
    label: 'Editorial',
    thumb: (
      <svg viewBox="0 0 36 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x={1} y={1} width={16} height={22} rx={0.5} fill="currentColor" opacity={0.5} />
        {[0,1,2,3].map(i => (
          <rect key={i} x={19 + (i % 2) * 9} y={1 + Math.floor(i / 2) * 12} width={7} height={10} rx={0.5} fill="currentColor" opacity={0.5} />
        ))}
      </svg>
    ),
  },
  {
    id: 3,
    label: 'Lista',
    thumb: (
      <svg viewBox="0 0 36 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        {[0,1,2,3,4].map(i => (
          <g key={i}>
            <rect x={1} y={2 + i * 4.5} width={4} height={2.5} rx={0.5} fill="currentColor" opacity={0.7} />
            <rect x={7} y={2 + i * 4.5} width={12} height={2.5} rx={0.5} fill="currentColor" opacity={0.5} />
            <rect x={21} y={2 + i * 4.5} width={14} height={2.5} rx={0.5} fill="currentColor" opacity={0.3} />
          </g>
        ))}
      </svg>
    ),
  },
]

export function VivenciasSection() {
  const [active, setActive] = useState<1 | 2 | 3>(1)

  return (
    <>
      <section
        id="vivencias"
        aria-labelledby="vivencias-title"
        style={{ background: BG, color: TERRA, padding: 'clamp(80px, 12vh, 160px) 0' }}
      >
        <div style={{ maxWidth: '1280px', margin: '0 auto', paddingLeft: 'clamp(16px, 4vw, 48px)', paddingRight: 'clamp(16px, 4vw, 48px)' }}>
          {active === 1 && <LayoutGrid />}
          {active === 2 && <LayoutEditorial />}
          {active === 3 && <LayoutTypo />}
        </div>
      </section>

      <div
        role="group"
        aria-label="Selecionar layout da seção Vivências"
        style={{
          position: 'fixed',
          bottom: '32px',
          right: '32px',
          zIndex: 100,
          background: 'rgba(18,17,16,0.92)',
          backdropFilter: 'blur(12px)',
          border: '1px solid rgba(236,230,220,0.12)',
          borderRadius: '4px',
          padding: '12px',
          display: 'flex',
          flexDirection: 'column',
          gap: '8px',
        }}
      >
        <p style={{ fontFamily: 'var(--f-text)', fontSize: '9px', fontWeight: 400, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(236,230,220,0.4)', marginBottom: '4px', textAlign: 'center' }}>
          Layout
        </p>
        {layouts.map((l) => (
          <button
            key={l.id}
            onClick={() => setActive(l.id as 1 | 2 | 3)}
            aria-pressed={active === l.id}
            aria-label={`Layout ${l.label}`}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '6px',
              background: active === l.id ? 'rgba(236,230,220,0.1)' : 'transparent',
              border: active === l.id ? '1px solid rgba(236,230,220,0.48)' : '1px solid rgba(236,230,220,0.1)',
              borderRadius: '2px',
              padding: '8px',
              cursor: 'pointer',
              color: active === l.id ? '#ECE6DC' : 'rgba(236,230,220,0.4)',
              transition: 'all 200ms',
              width: '64px',
            }}
          >
            <span style={{ width: '36px', height: '24px', display: 'block' }}>{l.thumb}</span>
            <span style={{ fontFamily: 'var(--f-text)', fontSize: '9px', letterSpacing: '0.14em', textTransform: 'uppercase' }}>{l.label}</span>
          </button>
        ))}
      </div>
    </>
  )
}
