'use client'
import { useState, useId } from 'react'

type FormData = {
  nome: string
  email: string
  whatsapp: string
  deSP: string
  tempoAcompanha: string
  investimento: string
}

type FormErrors = Partial<Record<keyof FormData, string>>

function formatWhatsApp(value: string) {
  const digits = value.replace(/\D/g, '').slice(0, 11)
  if (digits.length <= 2) return digits.length ? `(${digits}` : ''
  if (digits.length <= 7) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`
}

function validate(data: FormData): FormErrors {
  const errors: FormErrors = {}
  if (!data.nome.trim()) errors.nome = 'Digite seu nome completo.'
  if (!data.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
    errors.email = 'Digite um e-mail válido, como nome@email.com.'
  const digits = data.whatsapp.replace(/\D/g, '')
  if (digits.length < 10) errors.whatsapp = 'Digite um número de WhatsApp válido.'
  if (!data.deSP) errors.deSP = 'Selecione uma opção.'
  if (!data.tempoAcompanha) errors.tempoAcompanha = 'Selecione uma opção.'
  if (!data.investimento) errors.investimento = 'Selecione uma opção.'
  return errors
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function trackLead(_data: FormData) {
  // TODO: Meta Pixel — fbq('track', 'Lead')
  // TODO: GA4 — gtag('event', 'generate_lead')
}

export function FormSection() {
  const baseId = useId()
  const [data, setData] = useState<FormData>({
    nome: '', email: '', whatsapp: '', deSP: '', tempoAcompanha: '', investimento: '',
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle')

  function handleChange(field: keyof FormData, value: string) {
    setData(d => ({ ...d, [field]: value }))
    if (errors[field]) setErrors(e => ({ ...e, [field]: undefined }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const errs = validate(data)
    if (Object.keys(errs).length) { setErrors(errs); return }
    setStatus('loading')
    await new Promise(r => setTimeout(r, 800))
    console.log('Aplicação:', data)
    trackLead(data)
    setStatus('success')
  }

  if (status === 'success') {
    return (
      <section id="aplicar" aria-label="Aplicação enviada" style={{ background: 'var(--c-carvao)' }} className="section-pad">
        <div className="container-main" style={{ textAlign: 'center', maxWidth: '560px', margin: '0 auto' }}>
          <h2 className="h2" style={{ marginBottom: 'var(--s-6)' }}>Recebemos o seu chamado.</h2>
          <p className="lead" style={{ color: 'var(--c-text-2)', marginBottom: 'var(--s-8)' }}>
            Nossa equipe vai falar com você pelo WhatsApp em breve.
          </p>
          <a
            href="https://wa.me/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            aria-label="Falar pelo WhatsApp"
          >
            Falar pelo WhatsApp
          </a>
        </div>
      </section>
    )
  }

  return (
    <section id="aplicar" aria-labelledby="form-title" style={{ background: 'var(--c-carvao)' }} className="section-pad">
      <div className="container-main">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--s-10)' }} className="form-grid">
          <div>
            <p className="eyebrow" style={{ marginBottom: 'var(--s-5)' }}>Aplicar</p>
            <h2 id="form-title" className="h2" style={{ marginBottom: 'var(--s-8)' }}>
              Quero minha vaga.
            </h2>

            <form onSubmit={handleSubmit} noValidate aria-label="Formulário de aplicação">
              <TextField
                id={`${baseId}-nome`}
                label="Nome"
                type="text"
                value={data.nome}
                onChange={v => handleChange('nome', v)}
                error={errors.nome}
                required
              />
              <TextField
                id={`${baseId}-email`}
                label="E-mail"
                type="email"
                value={data.email}
                onChange={v => handleChange('email', v)}
                error={errors.email}
                required
              />
              <TextField
                id={`${baseId}-whatsapp`}
                label="WhatsApp"
                type="tel"
                value={data.whatsapp}
                onChange={v => handleChange('whatsapp', formatWhatsApp(v))}
                error={errors.whatsapp}
                required
                placeholder="(00) 00000-0000"
              />

              <RadioGroup
                legend="Você é de SP?"
                name="deSP"
                options={[{ value: 'sim', label: 'Sim' }, { value: 'nao', label: 'Não' }]}
                value={data.deSP}
                onChange={v => handleChange('deSP', v)}
                error={errors.deSP}
              />

              <RadioGroup
                legend="Há quanto tempo acompanha o André Sanches?"
                name="tempoAcompanha"
                options={[
                  { value: 'menos1m', label: 'Menos de 1 mês' },
                  { value: '1a6m', label: 'Entre 1 e 6 meses' },
                  { value: '6ma1a', label: 'Entre 6 meses e 1 ano' },
                  { value: 'mais1a', label: 'Mais de 1 ano' },
                ]}
                value={data.tempoAcompanha}
                onChange={v => handleChange('tempoAcompanha', v)}
                error={errors.tempoAcompanha}
              />

              <RadioGroup
                legend="Como você fará o investimento?"
                name="investimento"
                options={[
                  { value: 'avista', label: 'À vista' },
                  { value: 'parcelamento', label: 'Quero saber mais sobre as condições de parcelamento' },
                ]}
                value={data.investimento}
                onChange={v => handleChange('investimento', v)}
                error={errors.investimento}
              />

              <button
                type="submit"
                className="btn-primary"
                disabled={status === 'loading'}
                style={{ width: '100%', marginTop: 'var(--s-8)' }}
                aria-busy={status === 'loading'}
              >
                {status === 'loading' ? 'Enviando…' : 'Enviar aplicação'}
              </button>
            </form>
          </div>

          <div
            style={{ position: 'relative' }}
            className="form-photo-col"
          >
            <div
              aria-hidden="true"
              style={{
                aspectRatio: '3/4',
                background: 'linear-gradient(160deg, var(--c-tronco) 0%, var(--c-carvao) 100%)',
                position: 'sticky',
                top: '100px',
              }}
            />
            <p
              className="display-l"
              style={{
                position: 'absolute',
                bottom: 'var(--s-8)',
                left: 'var(--s-8)',
                right: 'var(--s-8)',
                color: 'var(--c-osso)',
              }}
            >
              Nobody cares.<br />Do the work.
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1023px) {
          .form-grid { grid-template-columns: 1fr !important; }
          .form-photo-col {
            aspect-ratio: 16/9;
            overflow: hidden;
          }
          .form-photo-col > div:first-child {
            aspect-ratio: 16/9 !important;
            position: static !important;
          }
        }
      `}</style>
    </section>
  )
}

function TextField({
  id, label, type, value, onChange, error, required, placeholder,
}: {
  id: string
  label: string
  type: string
  value: string
  onChange: (v: string) => void
  error?: string
  required?: boolean
  placeholder?: string
}) {
  return (
    <div style={{ marginBottom: 'var(--s-7)' }}>
      <label
        htmlFor={id}
        className="eyebrow"
        style={{
          display: 'block',
          marginBottom: 'var(--s-3)',
          color: 'var(--c-text-2)',
        }}
      >
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={e => onChange(e.target.value)}
        required={required}
        placeholder={placeholder}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
        style={{
          display: 'block',
          width: '100%',
          minHeight: '52px',
          background: 'transparent',
          border: 'none',
          borderBottom: error
            ? '1px solid var(--c-error)'
            : '1px solid rgba(236,230,220,0.32)',
          borderRadius: 0,
          color: 'var(--c-osso)',
          fontFamily: 'var(--f-text)',
          fontSize: 'var(--fs-body)',
          fontWeight: 300,
          padding: 'var(--s-3) 0',
          outline: 'none',
          transition: 'border-color var(--t-micro) var(--ease-out)',
        }}
        onFocus={e => { e.target.style.borderBottomColor = 'var(--c-osso)' }}
        onBlur={e => { e.target.style.borderBottomColor = error ? 'var(--c-error)' : 'rgba(236,230,220,0.32)' }}
      />
      {error && (
        <p
          id={`${id}-error`}
          role="alert"
          aria-live="assertive"
          className="small-text"
          style={{ color: 'var(--c-error)', marginTop: 'var(--s-2)' }}
        >
          {error}
        </p>
      )}
    </div>
  )
}

function RadioGroup({
  legend, name, options, value, onChange, error,
}: {
  legend: string
  name: string
  options: { value: string; label: string }[]
  value: string
  onChange: (v: string) => void
  error?: string
}) {
  return (
    <fieldset
      style={{
        border: 'none',
        padding: 0,
        marginBottom: 'var(--s-7)',
      }}
      aria-describedby={error ? `${name}-error` : undefined}
    >
      <legend
        className="eyebrow"
        style={{
          display: 'block',
          marginBottom: 'var(--s-4)',
          color: 'var(--c-text-2)',
          float: 'none',
        }}
      >
        {legend}
      </legend>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--s-3)' }}>
        {options.map(opt => (
          <label
            key={opt.value}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '12px 20px',
              borderRadius: 'var(--radius)',
              border: value === opt.value
                ? '1px solid var(--c-osso)'
                : '1px solid rgba(236,230,220,0.32)',
              background: value === opt.value ? 'var(--c-osso)' : 'transparent',
              color: value === opt.value ? 'var(--c-carvao)' : 'var(--c-osso)',
              cursor: 'pointer',
              fontFamily: 'var(--f-text)',
              fontSize: 'var(--fs-small)',
              fontWeight: 400,
              letterSpacing: '0.04em',
              transition: 'all var(--t-micro) var(--ease-out)',
              minHeight: '44px',
            }}
          >
            <input
              type="radio"
              name={name}
              value={opt.value}
              checked={value === opt.value}
              onChange={() => onChange(opt.value)}
              style={{ position: 'absolute', opacity: 0, width: 0, height: 0 }}
              aria-label={opt.label}
            />
            {opt.label}
          </label>
        ))}
      </div>
      {error && (
        <p
          id={`${name}-error`}
          role="alert"
          aria-live="assertive"
          className="small-text"
          style={{ color: 'var(--c-error)', marginTop: 'var(--s-2)' }}
        >
          {error}
        </p>
      )}
    </fieldset>
  )
}
