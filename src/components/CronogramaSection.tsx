'use client'
import { useState } from 'react'
import { useReveal } from '@/hooks/useReveal'

const dias = [
  {
    label: 'Dia 1',
    items: [
      { hora: '16h00', atividade: 'Check-in' },
      { hora: '18h00', atividade: 'Primeira respiração' },
      { hora: '19h30', atividade: 'Jantar' },
      { hora: '21h00', atividade: 'Abertura' },
      { hora: '22h00', atividade: 'Silêncio' },
    ],
  },
  {
    label: 'Dia 2',
    items: [
      { hora: '05h30', atividade: 'Acorda' },
      { hora: '06h00', atividade: 'Treino' },
      { hora: '07h30', atividade: 'Gelo' },
      { hora: '09h00', atividade: 'Café' },
      { hora: '10h30', atividade: 'Respiração' },
      { hora: '12h30', atividade: 'Almoço' },
      { hora: '14h00', atividade: 'Livre' },
      { hora: '16h00', atividade: 'Meditação' },
      { hora: '19h30', atividade: 'Jantar' },
      { hora: '21h00', atividade: 'Roda' },
      { hora: '22h00', atividade: 'Silêncio' },
    ],
  },
  {
    label: 'Dia 3',
    items: [
      { hora: '06h00', atividade: 'Acorda' },
      { hora: '06h30', atividade: 'Treino' },
      { hora: '08h00', atividade: 'Gelo' },
      { hora: '09h30', atividade: 'Café' },
      { hora: '11h00', atividade: 'Integração' },
      { hora: '13h00', atividade: 'Almoço' },
      { hora: '15h00', atividade: 'Check-out' },
    ],
  },
]

export function CronogramaSection() {
  const [activeTab, setActiveTab] = useState(0)
  const headingRef = useReveal<HTMLDivElement>()

  return (
    <section
      id="cronograma"
      aria-labelledby="cronograma-title"
      style={{ background: 'var(--c-carvao)' }}
      className="section-pad"
    >
      <div className="container-main">
        <div ref={headingRef} className="reveal" style={{ marginBottom: 'var(--s-9)' }}>
          <p className="eyebrow" style={{ marginBottom: 'var(--s-5)' }}>Cronograma</p>
          <h2 id="cronograma-title" className="h2">
            Três dias. Cada hora, intencional.
          </h2>
        </div>

        <div className="cronograma-desktop">
          <div
            role="tablist"
            aria-label="Dias do retiro"
            style={{
              display: 'flex',
              gap: 'var(--s-8)',
              borderBottom: 'var(--line)',
              marginBottom: 'var(--s-8)',
            }}
          >
            {dias.map((dia, i) => (
              <button
                key={dia.label}
                role="tab"
                aria-selected={activeTab === i}
                aria-controls={`tab-panel-${i}`}
                id={`tab-${i}`}
                onClick={() => setActiveTab(i)}
                style={{
                  background: 'none',
                  border: 'none',
                  padding: '0 0 var(--s-4)',
                  cursor: 'pointer',
                  color: activeTab === i ? 'var(--c-osso)' : 'var(--c-text-3)',
                  borderBottom: activeTab === i ? '2px solid var(--c-madeira)' : '2px solid transparent',
                  marginBottom: '-1px',
                  transition: 'color var(--t-micro) var(--ease-out), border-color var(--t-micro) var(--ease-out)',
                  fontFamily: 'var(--f-text)',
                  fontSize: 'var(--fs-eyebrow)',
                  fontWeight: 400,
                  letterSpacing: 'var(--ls-eyebrow)',
                  textTransform: 'uppercase',
                }}
              >
                {dia.label}
              </button>
            ))}
          </div>

          {dias.map((dia, i) => (
            <div
              key={dia.label}
              role="tabpanel"
              id={`tab-panel-${i}`}
              aria-labelledby={`tab-${i}`}
              hidden={activeTab !== i}
            >
              {dia.items.map((item, j) => (
                <div
                  key={item.hora}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '100px 1fr',
                    gap: 'var(--s-6)',
                    padding: 'var(--s-5) 0',
                    borderBottom: j < dia.items.length - 1 ? 'var(--line)' : 'none',
                    alignItems: 'center',
                  }}
                >
                  <span
                    className="small-text"
                    style={{
                      color: 'var(--c-madeira)',
                      fontVariantNumeric: 'tabular-nums',
                    }}
                  >
                    {item.hora}
                  </span>
                  <span className="body-text">{item.atividade}</span>
                </div>
              ))}
            </div>
          ))}
        </div>

        <div className="cronograma-mobile">
          {dias.map((dia) => (
            <details key={dia.label} style={{ borderBottom: 'var(--line)' }}>
              <summary
                style={{
                  listStyle: 'none',
                  padding: 'var(--s-5) 0',
                  cursor: 'pointer',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  fontFamily: 'var(--f-text)',
                  fontSize: 'var(--fs-eyebrow)',
                  fontWeight: 400,
                  letterSpacing: 'var(--ls-eyebrow)',
                  textTransform: 'uppercase',
                  color: 'var(--c-osso)',
                }}
              >
                {dia.label}
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </summary>
              <div style={{ paddingBottom: 'var(--s-5)' }}>
                {dia.items.map((item, j) => (
                  <div
                    key={item.hora}
                    style={{
                      display: 'grid',
                      gridTemplateColumns: '80px 1fr',
                      gap: 'var(--s-4)',
                      padding: 'var(--s-4) 0',
                      borderBottom: j < dia.items.length - 1 ? 'var(--line)' : 'none',
                    }}
                  >
                    <span className="small-text" style={{ color: 'var(--c-madeira)', fontVariantNumeric: 'tabular-nums' }}>
                      {item.hora}
                    </span>
                    <span className="small-text">{item.atividade}</span>
                  </div>
                ))}
              </div>
            </details>
          ))}
        </div>

        <div
          style={{
            marginTop: 'var(--s-10)',
            paddingTop: 'var(--s-8)',
            borderTop: 'var(--line)',
          }}
        >
          <p
            className="eyebrow"
            style={{ marginBottom: 'var(--s-4)', color: 'var(--c-text-2)' }}
          >
            Check-in: 16h00 · Check-out: 15h00
          </p>
          <p className="small-text" style={{ color: 'var(--c-text-3)', maxWidth: 'var(--text-max)' }}>
            Vagas são transferíveis com aviso de 15 dias. Não há reembolso após confirmação.
          </p>
        </div>
      </div>

      <style>{`
        @media (min-width: 640px) {
          .cronograma-mobile { display: none; }
        }
        @media (max-width: 639px) {
          .cronograma-desktop { display: none; }
        }
        details[open] > summary svg {
          transform: rotate(180deg);
        }
        details > summary::-webkit-details-marker { display: none; }
      `}</style>
    </section>
  )
}
