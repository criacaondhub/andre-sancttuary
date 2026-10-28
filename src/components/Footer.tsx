import { MessageCircle } from 'lucide-react'

export function Footer() {
  return (
    <footer
      role="contentinfo"
      style={{
        background: 'var(--c-terra)',
        borderTop: 'var(--line)',
        padding: 'var(--s-10) 0 var(--s-8)',
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
        <div style={{ marginBottom: 'var(--s-8)' }}>
          <img
            src="/SVG/sancttuary-logo-completo-osso.svg"
            alt="Sancttuary"
            height={48}
            style={{ height: 48, width: 'auto', display: 'block' }}
          />
        </div>

        <div style={{ marginBottom: 'var(--s-10)' }}>
          <p style={{
            fontFamily: 'var(--f-display)',
            fontSize: 'clamp(40px, 5vw, 80px)',
            fontWeight: 400,
            lineHeight: 1,
            letterSpacing: '0.01em',
            textTransform: 'uppercase',
            color: 'var(--c-osso)',
          }}>
            Nobody cares.
          </p>
          <p style={{
            fontFamily: 'var(--f-display)',
            fontSize: 'clamp(40px, 5vw, 80px)',
            fontWeight: 400,
            lineHeight: 1,
            letterSpacing: '0.01em',
            textTransform: 'uppercase',
            color: 'var(--c-osso)',
          }}>
            Do the work.
          </p>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 'var(--s-5)',
            paddingTop: 'var(--s-6)',
            borderTop: 'var(--line)',
          }}
        >
          <p className="small-text" style={{ color: 'var(--c-text-3)' }}>
            © Sancttuary 2026
          </p>

          <div style={{ display: 'flex', gap: 'var(--s-5)' }}>
            <a
              href="https://wa.me/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp para dúvidas"
              style={{
                color: 'var(--c-text-2)',
                display: 'flex',
                alignItems: 'center',
                transition: 'color var(--t-micro) var(--ease-out)',
              }}
              className="social-icon"
            >
              <MessageCircle size={20} strokeWidth={1.5} />
            </a>
            <a
              href="https://instagram.com/af.sanches"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram de André Sanches"
              style={{
                color: 'var(--c-text-2)',
                display: 'flex',
                alignItems: 'center',
                transition: 'color var(--t-micro) var(--ease-out)',
              }}
              className="social-icon"
            >
              <InstagramIcon />
            </a>
          </div>
        </div>
      </div>

      <style>{`
        .social-icon:hover { color: var(--c-osso) !important; }
      `}</style>
    </footer>
  )
}

function InstagramIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
    </svg>
  )
}

