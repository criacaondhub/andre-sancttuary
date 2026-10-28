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
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 'var(--s-5)',
            marginBottom: 'var(--s-10)',
          }}
        >
          <FooterSeal />
          <span
            className="h2"
            style={{ letterSpacing: '0.12em' }}
          >
            Sancttuary
          </span>
        </div>

        <div style={{ marginBottom: 'var(--s-10)' }}>
          <p className="display-l" style={{ color: 'var(--c-osso)' }}>
            Nobody cares.
          </p>
          <p className="display-l" style={{ color: 'var(--c-osso)' }}>
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

function FooterSeal() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="24" cy="24" r="22" stroke="#ECE6DC" strokeWidth="1" />
      <circle cx="24" cy="24" r="16" stroke="#ECE6DC" strokeWidth="0.5" opacity="0.6" />
      <circle cx="24" cy="24" r="10" stroke="#ECE6DC" strokeWidth="0.5" opacity="0.4" />
      <line x1="16" y1="14" x2="32" y2="34" stroke="#ECE6DC" strokeWidth="1.5" opacity="0.7" />
      <line x1="32" y1="14" x2="16" y2="34" stroke="#ECE6DC" strokeWidth="1.5" opacity="0.7" />
    </svg>
  )
}
