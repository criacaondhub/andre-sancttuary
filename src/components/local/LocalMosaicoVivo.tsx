'use client'
import { useEffect, useRef, useSyncExternalStore } from 'react'
import { photos, PhotoFill, Caption, useTileFocus, type MosaicProps } from './shared'

// Mosaico vivo: duas fileiras (3 + 3 fotos) com larguras diferentes. A foto em foco
// cresce para os lados e a fileira dela cresce na altura; as outras cedem espaço.
// No celular vira uma lista de blocos, um abaixo do outro, e o toque já amplia.
// `weight` é a largura relativa de cada foto em repouso
const rows = [
  [{ index: 0, weight: 1.4 }, { index: 1, weight: 1 }, { index: 2, weight: 1.1 }],
  [{ index: 3, weight: 0.9 }, { index: 4, weight: 1.3 }, { index: 5, weight: 1 }],
]

const STACKED = '(max-width: 639px)'

// o layout empilhado é só CSS (sem salto na carga); isto só decide o que o toque faz
function useStacked() {
  return useSyncExternalStore(
    onChange => {
      const mq = window.matchMedia(STACKED)
      mq.addEventListener('change', onChange)
      return () => mq.removeEventListener('change', onChange)
    },
    () => window.matchMedia(STACKED).matches,
    () => false,
  )
}

export function LocalMosaicoVivo({ onOpen }: MosaicProps) {
  const { active, bind } = useTileFocus(onOpen)
  const stacked = useStacked()
  const ref = useRef<HTMLDivElement>(null)

  // cada foto aparece com um fade leve quando entra na tela (mesma ideia do useReveal, por foto)
  useEffect(() => {
    const tiles = ref.current?.querySelectorAll('.mv-tile')
    if (!tiles) return
    const obs = new IntersectionObserver(entries => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed')
          obs.unobserve(entry.target)
        }
      }
    }, { threshold: 0.15 })
    tiles.forEach(tile => obs.observe(tile))
    return () => obs.disconnect()
  }, [])

  return (
    <div ref={ref} className="mosaico-vivo" style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--s-2)',
      height: 'clamp(480px, 82vh, 760px)',
    }}>
      {rows.map((row, r) => {
        const rowActive = row.some(tile => tile.index === active)
        return (
          <div key={r} className="mv-row" style={{
            display: 'flex',
            gap: 'var(--s-2)',
            flex: rowActive ? 1.8 : 1,
            minHeight: 0,
            transition: 'flex var(--t-reveal) var(--ease-out)',
          }}>
            {row.map(({ index, weight }) => {
              const isActive = index === active
              const focus = bind(index)
              return (
                <button
                  key={photos[index].label}
                  {...focus}
                  onClick={stacked ? () => onOpen(index) : focus.onClick}
                  aria-label={stacked ? `Ampliar: ${photos[index].label}` : focus['aria-label']}
                  className="mv-tile"
                  style={{
                    position: 'relative',
                    flex: isActive ? weight * 2.4 : weight,
                    minWidth: 0,
                    overflow: 'hidden',
                    padding: 0,
                    border: 'none',
                    background: 'none',
                    cursor: 'pointer',
                    // no desktop as fotos aparecem em sequência; no celular (empilhado) o atraso é zerado
                    '--fade-delay': `${index * 100}ms`,
                    transition: 'flex var(--t-reveal) var(--ease-out), opacity var(--t-reveal) var(--ease-out) var(--fade-delay)',
                  } as React.CSSProperties}
                >
                  <div className="mv-photo" style={{
                    position: 'absolute',
                    inset: 0,
                    filter: isActive ? 'none' : 'brightness(0.72) saturate(0.8)',
                    transition: 'filter var(--t-reveal) var(--ease-out)',
                  }}>
                    <PhotoFill photo={photos[index]} />
                  </div>
                  <div aria-hidden="true" style={{ position: 'absolute', inset: 0, background: 'var(--overlay-base)' }} />
                  <Caption index={index} visible={isActive} />
                </button>
              )
            })}
          </div>
        )
      })}

      <style>{`
        .mosaico-vivo .mv-tile { opacity: 0; }
        .mosaico-vivo .mv-tile.revealed { opacity: 1; }
        @media (prefers-reduced-motion: reduce) {
          .mosaico-vivo .mv-tile { --fade-delay: 0ms !important; }
        }
        /* celular: blocos um abaixo do outro, todos com cor e com o nome visível */
        @media ${STACKED} {
          .mosaico-vivo .mv-tile { --fade-delay: 0ms !important; }
          .mosaico-vivo { height: auto !important; gap: var(--s-4) !important; }
          .mosaico-vivo .mv-row { flex-direction: column; flex: none !important; gap: var(--s-4) !important; }
          .mosaico-vivo .mv-tile { flex: none !important; width: 100%; aspect-ratio: 4 / 3; }
          .mosaico-vivo .mv-photo { filter: none !important; }
          .mosaico-vivo .caption-name { opacity: 1 !important; transform: none !important; }
        }
      `}</style>
    </div>
  )
}
