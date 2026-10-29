'use client'
import { useState, useId, useRef, useEffect, useCallback } from 'react'
import { AnimatePresence, motion, useScroll } from 'framer-motion'
import { RevealWords } from '@/components/RevealWords'

type FormData = {
  nome: string
  email: string
  whatsapp: string
  deSP: string
  tempoAcompanha: string
  investimento: string
}

type FormErrors = Partial<Record<keyof FormData, string>>

// a dobra usa o fundo claro da dobra 4 (o lugar): textos e linhas em terra
const BG     = '#F0EBE1'
const INK    = 'var(--c-terra)'
const INK_64 = 'rgba(42,29,20,0.64)'
const INK_32 = 'rgba(42,29,20,0.32)'
const ERROR  = '#9E4A2A' // --c-error escurecido: o original não tem contraste suficiente no fundo claro
const EASE   = [0.22, 1, 0.36, 1] as const

const EMPTY: FormData = { nome: '', email: '', whatsapp: '', deSP: '', tempoAcompanha: '', investimento: '' }

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
  const [data, setData] = useState<FormData>(EMPTY)
  const [errors, setErrors] = useState<FormErrors>({})
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle')
  const submitRef = useRef<HTMLButtonElement>(null)

  // fecha o pop-up de confirmação e devolve o foco ao botão de envio
  const closeSuccess = useCallback(() => {
    setStatus('idle')
    submitRef.current?.focus()
  }, [])

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
    // inscrição feita: limpa o formulário e mostra a confirmação em pop-up, por cima da página
    setData(EMPTY)
    setStatus('success')
  }

  return (
    <section id="aplicar" aria-labelledby="form-title" style={{ background: BG, color: INK }} className="section-pad m-center">
      <div className="container-main">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--s-10)' }} className="form-grid">
          <div>
            <p className="eyebrow" style={{ marginBottom: 'var(--s-5)' }}>Aplicar</p>
            <h2 id="form-title" className="h2" style={{ marginBottom: 'var(--s-8)' }}>
              Quero minha&nbsp;vaga.
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
                placeholder="Ex.: João da Silva"
              />
              <TextField
                id={`${baseId}-email`}
                label="E-mail"
                type="email"
                value={data.email}
                onChange={v => handleChange('email', v)}
                error={errors.email}
                required
                placeholder="Ex.: nome@email.com"
              />
              <TextField
                id={`${baseId}-whatsapp`}
                label="WhatsApp"
                type="tel"
                value={data.whatsapp}
                onChange={v => handleChange('whatsapp', formatWhatsApp(v))}
                error={errors.whatsapp}
                required
                placeholder="Ex.: (11) 91234-5678"
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
                legend={'Há quanto tempo acompanha o André Sanches?'}
                name="tempoAcompanha"
                options={[
                  { value: 'menos1m', label: 'Menos de 1 mês' },
                  { value: '1a6m', label: 'Entre 1 e 6 meses' },
                  { value: '6ma1a', label: 'Entre 6 meses e 1 ano' },
                  { value: 'mais1a', label: 'Mais de 1 ano' },
                ]}
                value={data.tempoAcompanha}
                onChange={v => handleChange('tempoAcompanha', v)}
                error={errors.tempoAcompanha}
                columns={2}
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
                ref={submitRef}
                type="submit"
                className="btn-primary btn-on-light"
                disabled={status === 'loading'}
                style={{ width: '100%', marginTop: 'var(--s-8)' }}
                aria-busy={status === 'loading'}
              >
                {status === 'loading' ? 'Enviando…' : 'Enviar aplicação'}
              </button>
            </form>
          </div>

          <FormPhoto />
        </div>
      </div>

      <AnimatePresence>
        {status === 'success' && <SuccessDialog id={`${baseId}-ok`} onClose={closeSuccess} />}
      </AnimatePresence>

      <style>{`
        /* controles nativos (autopreenchimento, cursor) no tema claro, como o fundo */
        #aplicar { color-scheme: light; }
        #aplicar input::placeholder { color: rgba(42,29,20,0.4); }
        /* rótulos dos campos usam a tipografia de eyebrow, mas sem o traço decorativo */
        #aplicar label.eyebrow::before,
        #aplicar legend.eyebrow::before { display: none; }
        /* desktop (caixa 3:4): foto presa ao topo, para o grupo ficar abaixo da frase */
        .form-photo-img { object-position: center top; }
        @media (max-width: 1023px) {
          .form-grid { grid-template-columns: 1fr !important; }
          .form-photo-col {
            aspect-ratio: 4/3;
            overflow: hidden;
          }
          .form-photo-col > div:first-child {
            aspect-ratio: 4/3 !important;
            position: relative !important;
            top: auto !important; /* o top: 100px é do sticky do desktop; com relative ele deslocaria a caixa */
          }
          .form-photo-img { object-position: center 40%; }
        }
        /* celular: frase menor e com menos recuo */
        @media (max-width: 639px) {
          .form-photo-quote {
            top: var(--s-5) !important;
            left: var(--s-5) !important;
            right: var(--s-5) !important;
            font-size: clamp(28px, 8.5vw, 40px) !important;
          }
        }
      `}</style>
    </section>
  )
}

// confirmação da inscrição em pop-up minimalista: só contorno, sem preenchimento, sobre a página
// escurecida e desfocada. Fecha pelo botão, clicando fora ou com ESC; ao abrir, o foco vai para "Fechar"
function SuccessDialog({ id, onClose }: { id: string; onClose: () => void }) {
  const closeRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    closeRef.current?.focus()
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  return (
    <motion.div
      role="dialog"
      aria-modal="true"
      aria-labelledby={`${id}-title`}
      aria-describedby={`${id}-desc`}
      onClick={onClose}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4, ease: EASE }}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 100,
        background: 'rgba(18,17,16,0.72)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 'var(--gutter)',
      }}
    >
      <motion.div
        onClick={e => e.stopPropagation()}
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 8 }}
        transition={{ duration: 0.5, ease: EASE }}
        style={{
          width: '100%',
          maxWidth: '440px',
          border: '1px solid rgba(236,230,220,0.24)',
          color: 'var(--c-osso)',
          textAlign: 'center',
          padding: 'clamp(32px, 5vw, 48px) clamp(24px, 4vw, 40px)',
          borderRadius: 'var(--radius)',
        }}
      >
        <h2 id={`${id}-title`} className="h2" style={{ marginBottom: 'var(--s-4)' }}>
          Recebemos o seu&nbsp;chamado.
        </h2>
        <p id={`${id}-desc`} className="lead" style={{ color: 'var(--c-text-2)', marginBottom: 'var(--s-6)' }}>
          Nossa equipe vai falar com você pelo WhatsApp em&nbsp;breve.
        </p>
        <button ref={closeRef} type="button" onClick={onClose} className="btn-secondary">
          Fechar
        </button>
      </motion.div>
    </motion.div>
  )
}

// foto do grupo com a frase no topo (sobre o teto), para não cobrir os rostos. A frase fica
// dentro da caixa (acompanha o sticky no desktop) e acende palavra por palavra com a rolagem,
// como na dobra 3: começa quando a coluna entra pelo pé da tela e termina com ela a 30% do topo
function FormPhoto() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.9', 'start 0.3'] })

  return (
    <div ref={ref} style={{ position: 'relative' }} className="form-photo-col">
      <div
        style={{
          aspectRatio: '3/4',
          background: 'linear-gradient(160deg, var(--c-tronco) 0%, var(--c-carvao) 100%)',
          position: 'sticky',
          top: '100px',
          overflow: 'hidden',
        }}
      >
        <img
          src="/Dobra_07/CMC02572.webp"
          alt="Participantes do Sancttuary reunidos"
          loading="lazy"
          className="form-photo-img"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        />
        <div aria-hidden="true" style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to bottom, rgba(18,17,16,0.78) 0%, rgba(18,17,16,0.3) 40%, transparent 65%)',
        }} />
        <p
          className="display-l form-photo-quote"
          style={{
            position: 'absolute',
            top: 'var(--s-8)',
            left: 'var(--s-8)',
            right: 'var(--s-8)',
            fontSize: 'clamp(40px, 3.4vw, 56px)',
            color: 'var(--c-osso)',
          }}
        >
          <RevealWords text="Nobody cares." progress={scrollYProgress} range={[0, 0.45]} />
          <br />
          <RevealWords text={'Do the work.'} progress={scrollYProgress} range={[0.45, 1]} />
        </p>
      </div>
    </div>
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
          color: INK_64,
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
          borderBottom: `1px solid ${error ? ERROR : INK_32}`,
          borderRadius: 0,
          color: INK,
          fontFamily: 'var(--f-text)',
          fontSize: 'var(--fs-body)',
          fontWeight: 300,
          padding: 'var(--s-3) 0',
          outline: 'none',
          transition: 'border-color var(--t-micro) var(--ease-out)',
        }}
        onFocus={e => { e.target.style.borderBottomColor = INK }}
        onBlur={e => { e.target.style.borderBottomColor = error ? ERROR : INK_32 }}
      />
      {error && (
        <p
          id={`${id}-error`}
          role="alert"
          aria-live="assertive"
          className="small-text"
          style={{ color: ERROR, marginTop: 'var(--s-2)' }}
        >
          {error}
        </p>
      )}
    </div>
  )
}

function RadioGroup({
  legend, name, options, value, onChange, error, columns,
}: {
  legend: string
  name: string
  options: { value: string; label: string }[]
  value: string
  onChange: (v: string) => void
  error?: string
  // grade com N colunas de largura igual; sem isso as opções seguem lado a lado e quebram linha
  columns?: number
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
          color: INK_64,
          float: 'none',
        }}
      >
        {legend}
      </legend>
      <div
        className="m-flex"
        style={columns
          ? { display: 'grid', gridTemplateColumns: `repeat(${columns}, 1fr)`, gap: 'var(--s-3)' }
          : { display: 'flex', flexWrap: 'wrap', gap: 'var(--s-3)' }}
      >
        {options.map(opt => (
          <label
            key={opt.value}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '12px 20px',
              borderRadius: 'var(--radius)',
              border: `1px solid ${value === opt.value ? INK : INK_32}`,
              background: value === opt.value ? INK : 'transparent',
              color: value === opt.value ? 'var(--c-osso)' : INK,
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
          style={{ color: ERROR, marginTop: 'var(--s-2)' }}
        >
          {error}
        </p>
      )}
    </fieldset>
  )
}
