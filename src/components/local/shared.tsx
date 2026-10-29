'use client'
import { useEffect, useState } from 'react'

export type Photo = { label: string; caption: string; grad: string; src?: string }

// ordem de leitura do mosaico (e da galeria): externa e interna alternadas.
// `grad` aparece enquanto a foto carrega
export const photos: Photo[] = [
  { label: 'Lago e ponte de pedra da Villa Tanah', caption: 'Villa Tanah', src: '/Dobra_04/pag08_img029.webp', grad: 'linear-gradient(160deg, var(--c-musgo) 0%, var(--c-carvao) 100%)' },
  { label: 'Sala de estar com vista para a mata', caption: 'A casa', src: '/Dobra_04/pag09_img038.webp', grad: 'linear-gradient(160deg, var(--c-casca) 0%, var(--c-terra) 100%)' },
  { label: 'Vale coberto de mata e construção com telhado verde', caption: 'Mata', src: '/Dobra_04/pag09_img042.webp', grad: 'linear-gradient(160deg, #3A4030 0%, var(--c-musgo) 100%)' },
  { label: 'Quarto com parede de pedra e teto de madeira', caption: 'Os quartos', src: '/Dobra_04/pag09_img034.webp', grad: 'linear-gradient(160deg, var(--c-madeira) 0%, var(--c-tronco) 100%)' },
  { label: 'Cascata entre muros de pedra', caption: 'Água corrente', src: '/Dobra_04/pag09_img043.webp', grad: 'linear-gradient(160deg, #4A5442 0%, var(--c-musgo) 100%)' },
  { label: 'Sala com lareira e estante', caption: 'A lareira', src: '/Dobra_04/pag09_img039_recortada.webp', grad: 'linear-gradient(160deg, var(--c-tronco) 0%, var(--c-carvao) 100%)' },
]

export type MosaicProps = { onOpen: (index: number) => void }

export const pad2 = (n: number) => String(n).padStart(2, '0')

export function PhotoFill({ photo, style }: { photo: Photo; style?: React.CSSProperties }) {
  return photo.src
    ? <img src={photo.src} alt="" loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', background: photo.grad, ...style }} />
    : <div style={{ width: '100%', height: '100%', background: photo.grad, ...style }} />
}

// foto em foco: mouse passando por cima, Tab no teclado ou 1º toque; clicar na que já está em foco amplia
export function useTileFocus(onOpen: (index: number) => void) {
  const [active, setActive] = useState(0)

  const bind = (i: number) => ({
    onPointerEnter: (e: React.PointerEvent) => { if (e.pointerType === 'mouse') setActive(i) },
    onFocus: (e: React.FocusEvent<HTMLElement>) => { if (e.currentTarget.matches(':focus-visible')) setActive(i) },
    onClick: () => (i === active ? onOpen(i) : setActive(i)),
    'aria-label': i === active ? `Ampliar: ${photos[i].label}` : `Mostrar: ${photos[i].label}`,
  })

  return { active, bind }
}

// número da foto sempre visível; o nome aparece só quando `visible`
export function Caption({ index, visible }: { index: number; visible: boolean }) {
  return (
    <span aria-hidden="true" className="caption" style={{
      position: 'absolute',
      left: 'var(--s-4)',
      right: 'var(--s-4)',
      bottom: 'var(--s-4)',
      display: 'flex',
      alignItems: 'baseline',
      gap: 'var(--s-3)',
      textAlign: 'left',
      color: 'var(--c-osso)',
      whiteSpace: 'nowrap',
    }}>
      <span style={{ fontSize: 11, letterSpacing: '0.22em', color: 'rgba(236,230,220,0.64)' }}>{pad2(index + 1)}</span>
      <span className="h3 caption-name" style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'none' : 'translateY(8px)',
        transition: 'opacity var(--t-reveal) var(--ease-out), transform var(--t-reveal) var(--ease-out)',
      }}>
        {photos[index].caption}
      </span>
    </span>
  )
}

export function LocalLightbox({ index, onChange, onClose }: {
  index: number
  onChange: (index: number) => void
  onClose: () => void
}) {
  const prev = () => onChange((index - 1 + photos.length) % photos.length)
  const next = () => onChange((index + 1) % photos.length)

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') onChange((index + 1) % photos.length)
      if (e.key === 'ArrowLeft') onChange((index - 1 + photos.length) % photos.length)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [index, onChange, onClose])

  const photo = photos[index]

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Galeria de fotos"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 100,
        background: 'rgba(18,17,16,0.95)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      onClick={onClose}
    >
      <div
        style={{ position: 'relative', width: '80vw', maxWidth: '1000px' }}
        onClick={e => e.stopPropagation()}
      >
        <div aria-label={photo.label} role="img" style={{ aspectRatio: '4/3' }}>
          <PhotoFill photo={photo} style={{ objectFit: 'contain' }} />
        </div>
        <p
          className="small-text"
          style={{ marginTop: 'var(--s-3)', color: 'var(--c-text-2)', letterSpacing: '0.16em', textTransform: 'uppercase' }}
        >
          {pad2(index + 1)} / {pad2(photos.length)} · {photo.caption}
        </p>

        <button
          onClick={prev}
          aria-label="Foto anterior"
          style={{
            position: 'absolute',
            left: 'calc(-1 * var(--s-10))',
            top: '50%',
            transform: 'translateY(-50%)',
            background: 'none',
            border: 'none',
            color: 'var(--c-osso)',
            padding: 'var(--s-4)',
          }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M15 6l-6 6 6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        <button
          onClick={next}
          aria-label="Próxima foto"
          style={{
            position: 'absolute',
            right: 'calc(-1 * var(--s-10))',
            top: '50%',
            transform: 'translateY(-50%)',
            background: 'none',
            border: 'none',
            color: 'var(--c-osso)',
            padding: 'var(--s-4)',
          }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>

      <button
        onClick={onClose}
        aria-label="Fechar galeria"
        style={{
          position: 'absolute',
          top: 'var(--s-6)',
          right: 'var(--s-6)',
          background: 'none',
          border: 'none',
          color: 'var(--c-osso)',
          padding: 'var(--s-3)',
        }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </button>
    </div>
  )
}
