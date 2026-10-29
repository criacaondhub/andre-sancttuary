// rodapé fino em duas faixas: logo horizontal + links / linha / copyright
const linkStyle: React.CSSProperties = {
  color: 'var(--c-text-2)',
  textDecoration: 'none',
  transition: 'color var(--t-micro) var(--ease-out)',
}

export function Footer() {
  return (
    <footer
      role="contentinfo"
      className="m-center"
      style={{
        background: 'var(--c-terra)',
        borderTop: 'var(--line)',
        padding: 'var(--s-6) 0 var(--s-5)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse at 80% 50%, rgba(77,48,25,0.3) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div className="container-main" style={{ position: 'relative' }}>
        <div
          className="m-flex footer-top"
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 'var(--s-5)',
            paddingBottom: 'var(--s-6)',
            borderBottom: 'var(--line)',
          }}
        >
          {/* lockup horizontal: selo + nome (o arquivo de logo completo é vertical e fica ilegível pequeno) */}
          <a
            href="#"
            aria-label="Sancttuary Men's Edition — voltar ao topo"
            style={{ display: 'flex', alignItems: 'center', gap: 'var(--s-3)', textDecoration: 'none', color: 'var(--c-osso)' }}
          >
            <img
              src="/SVG/sancttuary-selo-osso.svg"
              alt=""
              width={40}
              height={40}
              style={{ width: 40, height: 40, display: 'block' }}
            />
            <span style={{ display: 'flex', flexDirection: 'column', textAlign: 'left', lineHeight: 1 }}>
              <span style={{
                fontFamily: 'var(--f-display)',
                fontSize: '20px',
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
              }}>
                Sancttuary
              </span>
              <span style={{
                fontFamily: 'var(--f-text)',
                fontSize: '9px',
                fontWeight: 400,
                letterSpacing: '0.32em',
                textTransform: 'uppercase',
                color: '#B8895A',
                marginTop: '5px',
              }}>
                Men&apos;s Edition
              </span>
            </span>
          </a>

          <nav aria-label="Contato" className="m-flex" style={{ display: 'flex', gap: 'var(--s-6)' }}>
            <a href="https://instagram.com/af.sanches" target="_blank" rel="noopener noreferrer" className="small-text footer-link" style={linkStyle}>
              Instagram
            </a>
          </nav>
        </div>

        <p className="small-text" style={{ color: 'var(--c-text-3)', paddingTop: 'var(--s-5)' }}>
          © 2026 Sancttuary · André Sanches
        </p>
      </div>

      <style>{`
        .footer-link:hover { color: var(--c-osso) !important; }
        @media (max-width: 639px) {
          .footer-top { flex-direction: column; }
        }
      `}</style>
    </footer>
  )
}
