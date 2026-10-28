'use client'
import { useEffect, useState } from 'react'

export function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      role="banner"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        height: '72px',
        display: 'flex',
        alignItems: 'center',
        paddingLeft: 'var(--gutter)',
        paddingRight: 'var(--gutter)',
        justifyContent: 'space-between',
        background: scrolled ? 'rgba(18,17,16,0.85)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        transition: 'background var(--t-micro) var(--ease-out), backdrop-filter var(--t-micro) var(--ease-out)',
      }}
    >
      <a href="#" aria-label="Sancttuary — página inicial">
        <SealPlaceholder size={40} />
      </a>

      <a
        href="#aplicar"
        className="btn-secondary"
        style={{ padding: '12px 24px', minHeight: '40px', fontSize: '12px' }}
        aria-label="Aplicar para a próxima edição"
      >
        Aplicar
      </a>
    </header>
  )
}

function SealPlaceholder({ size }: { size: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="20" cy="20" r="18" stroke="#ECE6DC" strokeWidth="1" />
      <circle cx="20" cy="20" r="13" stroke="#ECE6DC" strokeWidth="0.5" opacity="0.6" />
      <circle cx="20" cy="20" r="8" stroke="#ECE6DC" strokeWidth="0.5" opacity="0.4" />
      <text
        x="20"
        y="25"
        textAnchor="middle"
        fill="#ECE6DC"
        fontFamily="var(--f-display)"
        fontSize="14"
        fontWeight="400"
      >
        S
      </text>
    </svg>
  )
}
