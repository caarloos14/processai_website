import { useState, useEffect } from 'react'
import logoImg from './assets/logo.png'

const NAV_LINKS = [
  { label: 'Inicio', href: '#home' },
  { label: 'Servicios', href: '#services' },
  { label: 'ROI', href: '#roi' },
  { label: 'Caso real', href: '#case' },
  { label: 'Metodología', href: '#process' },
  { label: 'Contacto', href: '#contact' },
]

const SERVICES = [
  {
    title: 'Sistemas de captación',
    description:
      'Diseño de webs y páginas orientadas a convertir visitas en solicitudes, reservas, llamadas o contactos comerciales.',
  },
  {
    title: 'Optimización de conversión',
    description:
      'Estructuración de mensajes, formularios, llamadas a la acción y recorridos de usuario para mejorar la tasa de conversión.',
  },
  {
    title: 'Automatización comercial',
    description:
      'Flujos de respuesta, clasificación y seguimiento de oportunidades para reducir pérdidas en el proceso comercial.',
  },
  {
    title: 'Dashboards de rendimiento',
    description:
      'Paneles para visualizar contactos, canales, tasas de conversión, oportunidades y evolución comercial.',
  },
  {
    title: 'Análisis de reseñas y reputación',
    description:
      'Extracción de patrones desde reseñas y feedback para reforzar confianza, detectar problemas y mejorar la propuesta comercial.',
  },
  {
    title: 'IA aplicada a procesos comerciales',
    description:
      'Uso de modelos y herramientas de IA para analizar información, priorizar oportunidades y asistir tareas de comunicación.',
  },
]

const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Diagnóstico',
    description: 'Analizamos presencia digital, puntos de contacto, conversión y proceso comercial.',
  },
  {
    step: '02',
    title: 'Diseño del sistema',
    description: 'Definimos la estructura web, automatizaciones, formularios, métricas y flujo de seguimiento.',
  },
  {
    step: '03',
    title: 'Implementación',
    description: 'Desarrollamos los activos digitales y conectamos los canales necesarios.',
  },
  {
    step: '04',
    title: 'Medición',
    description: 'Visualizamos resultados mediante indicadores de captación, conversión y oportunidades.',
  },
]

const ROI_SLIDERS = [
  { key: 'team', label: 'Personas en el equipo', min: 1, max: 50, step: 1, default: 8, suffix: '' },
  { key: 'hours', label: 'Horas/semana en tareas repetitivas (por persona)', min: 1, max: 40, step: 1, default: 8, suffix: ' h' },
  { key: 'cost', label: 'Coste medio por hora', min: 10, max: 100, step: 1, default: 18, suffix: ' €' },
  { key: 'leads', label: 'Leads/consultas al mes', min: 10, max: 500, step: 5, default: 120, suffix: '' },
]

const CASE_BEFORE = [
  { label: 'Visitas mensuales', value: '1.250' },
  { label: 'Conversión inicial', value: '1,4 %' },
  { label: 'Contactos mensuales iniciales', value: '17,5' },
  { label: 'Tasa de seguimiento efectivo', value: '42,0 %' },
  { label: 'Oportunidades gestionadas', value: '7,4' },
]

const CASE_AFTER = [
  { label: 'Conversión posterior', value: '3,2 %' },
  { label: 'Contactos mensuales', value: '40,0' },
  { label: 'Tasa de seguimiento efectivo', value: '78,0 %' },
  { label: 'Oportunidades gestionadas', value: '31,2' },
]

const CASE_RESULTS = [
  { label: 'Incremento de contactos', value: '+128,6 %' },
  { label: 'Incremento de oportunidades gestionadas', value: '+321,6 %' },
  { label: 'Mejora de seguimiento', value: '+36,0 pp' },
]

const GOAL_OPTIONS = [
  'Mejorar captación de clientes',
  'Aumentar conversión web',
  'Organizar seguimiento comercial',
  'Medir rendimiento y ROI',
  'Automatizar procesos comerciales',
  'Analizar reputación online',
]


function Logo({ className = '' }) {
  return (
    <img
      src={logoImg}
      alt="ProcessAI Studio"
      className={`block w-auto shrink-0 object-contain ${className}`}
    />
  )
}

function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'border-b border-cyan-500/10 bg-navy-950/90 backdrop-blur-xl' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 lg:h-[4.5rem] lg:px-8">
        <a href="#home" className="group flex shrink-0 items-center py-1 pr-3">
          <Logo className="h-[38px] transition-opacity duration-200 group-hover:opacity-90 md:h-[46px]" />
        </a>

        <ul className="hidden items-center gap-5 lg:flex xl:gap-6">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="text-sm font-medium text-slate-400 transition-colors hover:text-cyan-glow">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="btn-primary hidden rounded-lg px-5 py-2.5 text-sm font-semibold text-navy-950 md:inline-flex"
        >
          Solicitar diagnóstico
        </a>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-lg border border-cyan-500/20 p-2 text-slate-300 md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={open}
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d={open ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
          </svg>
        </button>
      </nav>

      {open && (
        <div className="border-t border-cyan-500/10 bg-navy-950/95 backdrop-blur-xl md:hidden">
          <ul className="flex flex-col gap-1 px-6 py-4">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2.5 text-sm font-medium text-slate-300 hover:bg-cyan-500/5 hover:text-cyan-glow"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a href="#contact" onClick={() => setOpen(false)} className="btn-primary block rounded-lg px-5 py-2.5 text-center text-sm font-semibold text-navy-950">
                Solicitar diagnóstico
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}

function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-20 lg:pt-36 lg:pb-24">
      <div className="glow-orb -top-32 left-1/4 h-80 w-80 bg-cyan-500/15" />

      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <p className="section-label">ProcessAI Studio</p>
          <h1 className="mt-4 font-display text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-[3.25rem]">
            Sistemas digitales para captar más clientes y medir el crecimiento comercial
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-400">
            En ProcessAI Studio desarrollamos webs, sistemas de captación, automatizaciones comerciales y dashboards
            que ayudan a negocios y empresas a convertir mejor sus visitas, gestionar oportunidades y tomar decisiones
            basadas en datos.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a href="#contact" className="btn-primary inline-flex items-center justify-center rounded-xl px-8 py-3.5 text-sm font-semibold text-navy-950">
              Solicitar diagnóstico
            </a>
            <a href="#services" className="btn-secondary inline-flex items-center justify-center rounded-xl px-8 py-3.5 text-sm font-semibold text-slate-200">
              Ver servicios
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

function ServicesSection() {
  return (
    <section id="services" className="relative border-t border-cyan-500/10 py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="section-label">Servicios</p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Servicios orientados a crecimiento y conversión
          </h2>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <article key={service.title} className="card-glass rounded-2xl p-6">
              <h3 className="font-display text-lg font-semibold text-white">{service.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-400">{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function formatCurrency(value) {
  return `${Math.round(value).toLocaleString('es-ES')} €`
}

function ROISection() {
  const [params, setParams] = useState({
    team: 8,
    hours: 8,
    cost: 18,
    leads: 120,
  })

  const monthlyHours = Math.round(params.team * params.hours * 4.33)
  const yearlyLoss = monthlyHours * params.cost * 12
  const potentialSavings = Math.round(yearlyLoss * 0.7)
  const recoveredHours = Math.round(monthlyHours * 0.7)
  const savingsPercent = yearlyLoss > 0 ? Math.round((potentialSavings / yearlyLoss) * 100) : 0

  const updateParam = (key, value) => {
    setParams((prev) => ({ ...prev, [key]: Number(value) }))
  }

  return (
    <section id="roi" className="relative py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="section-label">Retorno de inversión</p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            ROI basado en conversión, seguimiento y medición
          </h2>
          <p className="mt-4 text-slate-400">
            Mueve los controles con los datos de tu empresa. Lo calculamos al instante.
          </p>
        </div>

        <div className="card-glass mt-10 overflow-hidden rounded-2xl">
          <div className="grid lg:grid-cols-2">
            <div className="border-b border-cyan-500/10 p-6 sm:p-8 lg:border-b-0 lg:border-r">
              <h3 className="font-display text-lg font-semibold text-white">Tu situación actual</h3>
              <p className="mt-1 text-xs text-slate-500">Estimación orientativa. Sin compromiso.</p>

              <div className="mt-8 space-y-7">
                {ROI_SLIDERS.map((slider) => (
                  <div key={slider.key}>
                    <div className="mb-3 flex items-end justify-between gap-4">
                      <label htmlFor={`roi-${slider.key}`} className="text-sm text-slate-400">
                        {slider.label}
                      </label>
                      <span className="shrink-0 font-display text-lg font-semibold text-cyan-glow">
                        {params[slider.key]}{slider.suffix}
                      </span>
                    </div>
                    <input
                      id={`roi-${slider.key}`}
                      type="range"
                      min={slider.min}
                      max={slider.max}
                      step={slider.step}
                      value={params[slider.key]}
                      onChange={(e) => updateParam(slider.key, e.target.value)}
                      className="roi-slider"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col justify-between p-6 sm:p-8">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Estás perdiendo cada año
                </p>
                <p className="mt-2 font-display text-4xl font-bold text-rose-400 sm:text-5xl">
                  {formatCurrency(yearlyLoss)}
                  <span className="text-2xl font-semibold text-rose-400/80">/año</span>
                </p>
                <p className="mt-3 text-sm text-slate-400">
                  {monthlyHours.toLocaleString('es-ES')} horas al mes en trabajo que puede automatizar un sistema.
                </p>
                <p className="mt-2 text-xs text-slate-500">
                  {params.leads.toLocaleString('es-ES')} consultas mensuales requieren seguimiento estructurado.
                </p>
              </div>

              <div className="mt-8 rounded-xl border border-cyan-500/10 bg-navy-900/60 p-5">
                <p className="text-sm font-medium text-white">Ahorro potencial automatizando</p>
                <p className="mt-2 font-display text-3xl font-bold text-cyan-glow">
                  {formatCurrency(potentialSavings)}
                </p>
                <div className="mt-4 h-2 overflow-hidden rounded-full bg-navy-700">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-orange-500 transition-all duration-300"
                    style={{ width: `${savingsPercent}%` }}
                  />
                </div>
                <p className="mt-4 text-sm text-slate-400">
                  Recuperas{' '}
                  <span className="font-semibold text-white">{recoveredHours.toLocaleString('es-ES')} h/mes</span>{' '}
                  para vender y atender mejor.
                </p>
              </div>

              <a
                href="#contact"
                className="btn-primary mt-8 inline-flex w-full items-center justify-center gap-2 rounded-xl px-8 py-4 text-sm font-semibold text-navy-950"
              >
                Quiero recuperar ese dinero
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function CaseStudySection() {
  return (
    <section id="case" className="relative border-t border-cyan-500/10 py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="section-label">Caso real</p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Impacto en un negocio local
          </h2>
          <p className="mt-4 text-slate-400">
            Negocio local con presencia digital básica, tráfico mensual moderado y baja conversión de visitas en
            solicitudes.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          <div className="card-glass rounded-2xl p-6">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-400">Situación inicial</h3>
            <dl className="mt-5 space-y-3">
              {CASE_BEFORE.map((item) => (
                <div key={item.label} className="flex justify-between gap-3 text-sm">
                  <dt className="text-slate-400">{item.label}</dt>
                  <dd className="font-medium text-white">{item.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="card-glass rounded-2xl p-6">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-cyan-glow">Tras implementación</h3>
            <dl className="mt-5 space-y-3">
              {CASE_AFTER.map((item) => (
                <div key={item.label} className="flex justify-between gap-3 text-sm">
                  <dt className="text-slate-400">{item.label}</dt>
                  <dd className="font-medium text-white">{item.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="card-glass rounded-2xl border-orange-500/15 p-6">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-orange-glow">Resultado</h3>
            <dl className="mt-5 space-y-3">
              {CASE_RESULTS.map((item) => (
                <div key={item.label} className="flex justify-between gap-3 text-sm">
                  <dt className="text-slate-400">{item.label}</dt>
                  <dd className="font-display font-semibold text-white">{item.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <p className="mx-auto mt-8 max-w-3xl text-sm leading-relaxed text-slate-400">
          Una mejora combinada en conversión, estructura de contacto y seguimiento comercial multiplicó el número
          de oportunidades gestionadas sin depender únicamente de aumentar el tráfico.
        </p>
      </div>
    </section>
  )
}

function ProcessSection() {
  return (
    <section id="process" className="relative border-t border-cyan-500/10 py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="section-label">Metodología</p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Metodología de trabajo
          </h2>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PROCESS_STEPS.map((item) => (
            <article key={item.step} className="card-glass rounded-2xl p-6">
              <span className="font-mono text-sm font-bold text-cyan-glow">{item.step}</span>
              <h3 className="mt-3 font-display text-lg font-semibold text-white">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function ContactSection() {
  const [form, setForm] = useState({
    name: '',
    business: '',
    email: '',
    sector: '',
    website: '',
    goal: GOAL_OPTIONS[0],
    message: '',
  })
  const [status, setStatus] = useState('idle')

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setStatus('sending')

    const bodyLines = [
      `Empresa: ${form.business.trim()}`,
      `Sector: ${form.sector.trim()}`,
      `Web actual: ${form.website.trim() || 'No indicada'}`,
      `Objetivo principal: ${form.goal}`,
      '',
      form.message.trim() || 'Sin mensaje adicional.',
    ]

    const formData = new FormData()
    formData.append('name', form.name.trim())
    formData.append('email', form.email.trim())
    formData.append('message', bodyLines.join('\n'))
    formData.append('_subject', `[ProcessAI Studio] Diagnóstico — ${form.business.trim()}`)
    formData.append('_captcha', 'false')
    formData.append('_template', 'table')

    try {
      const response = await fetch('https://formsubmit.co/ajax/processaistudio@gmail.com', {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: formData,
      })
      const data = await response.json()

      if (response.ok && data.success) {
        setStatus('success')
        setForm({ name: '', business: '', email: '', sector: '', website: '', goal: GOAL_OPTIONS[0], message: '' })
        return
      }
      setStatus('error')
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="relative py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-cyan-500/15 bg-gradient-to-br from-navy-800/80 via-navy-900/90 to-navy-950 p-8 sm:p-12">
          <div className="mx-auto max-w-2xl text-center">
            <p className="section-label">Contacto</p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Solicita un diagnóstico inicial
            </h2>
            <p className="mt-4 text-slate-400">
              Analizamos tu presencia digital, tus puntos de conversión y tu proceso de seguimiento para identificar
              oportunidades de mejora.
            </p>
            <p className="mt-2 text-sm text-slate-500">
              Te responderemos con una primera valoración y posibles líneas de mejora.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="card-glass mx-auto mt-10 max-w-2xl rounded-2xl p-6 text-left sm:p-8">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="contact-name" className="form-label">Nombre <span className="form-required">*</span></label>
                <input id="contact-name" name="name" type="text" required value={form.name} onChange={handleChange} className="form-input" />
              </div>
              <div>
                <label htmlFor="contact-business" className="form-label">Empresa <span className="form-required">*</span></label>
                <input id="contact-business" name="business" type="text" required value={form.business} onChange={handleChange} className="form-input" />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="contact-email" className="form-label">Email <span className="form-required">*</span></label>
                <input id="contact-email" name="email" type="email" required autoComplete="email" value={form.email} onChange={handleChange} className="form-input" />
              </div>
              <div>
                <label htmlFor="contact-sector" className="form-label">Sector <span className="form-required">*</span></label>
                <input id="contact-sector" name="sector" type="text" required value={form.sector} onChange={handleChange} className="form-input" />
              </div>
              <div>
                <label htmlFor="contact-website" className="form-label">Web actual</label>
                <input id="contact-website" name="website" type="url" value={form.website} onChange={handleChange} placeholder="https://" className="form-input" />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="contact-goal" className="form-label">Objetivo principal <span className="form-required">*</span></label>
                <select id="contact-goal" name="goal" required value={form.goal} onChange={handleChange} className="form-input">
                  {GOAL_OPTIONS.map((goal) => (
                    <option key={goal} value={goal}>{goal}</option>
                  ))}
                </select>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="contact-message" className="form-label">Mensaje</label>
                <textarea id="contact-message" name="message" rows={4} value={form.message} onChange={handleChange} className="form-input form-textarea min-h-[100px] resize-y" />
              </div>
            </div>

            <button type="submit" disabled={status === 'sending'} className="btn-primary mt-6 w-full rounded-xl px-8 py-3.5 text-sm font-semibold text-navy-950 disabled:opacity-70">
              {status === 'sending' ? 'Enviando…' : 'Solicitar diagnóstico'}
            </button>

            {status === 'success' && (
              <p className="mt-4 rounded-lg border border-cyan-500/20 bg-cyan-500/10 px-4 py-3 text-center text-sm text-cyan-glow">
                Solicitud recibida. Te contactaremos con una primera valoración.
              </p>
            )}
            {status === 'error' && (
              <p className="mt-4 rounded-lg border border-orange-500/20 bg-orange-500/10 px-4 py-3 text-center text-sm text-orange-glow">
                No se pudo enviar la solicitud. Escríbenos a processaistudio@gmail.com
              </p>
            )}
          </form>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 border-t border-cyan-500/10 pt-8 sm:flex-row sm:gap-8">
            <a href="mailto:processaistudio@gmail.com" className="text-sm text-slate-400 hover:text-cyan-glow">
              processaistudio@gmail.com
            </a>
            <span className="hidden text-slate-700 sm:inline">·</span>
            <a href="https://instagram.com/processai.studio" target="_blank" rel="noopener noreferrer" className="text-sm text-slate-400 hover:text-cyan-glow">
              @processai.studio
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="border-t border-cyan-500/10 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 sm:flex-row lg:px-8">
        <Logo className="h-8 w-auto opacity-90" />
        <p className="text-xs text-slate-600">
          &copy; {new Date().getFullYear()} ProcessAI Studio. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  )
}

function App() {
  return (
    <div className="grid-bg relative min-h-screen overflow-x-hidden bg-navy-950">
      <Navbar />
      <main>
        <Hero />
        <ServicesSection />
        <ROISection />
        <CaseStudySection />
        <ProcessSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}

export default App
