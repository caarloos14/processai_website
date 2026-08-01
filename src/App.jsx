import { useState, useEffect } from 'react'
import logoImg from './assets/logo.png'

const WHATSAPP_URL = `https://wa.me/?text=${encodeURIComponent(
  'Hola, quiero solicitar un análisis gratuito de captación para mi negocio.',
)}`

const NAV_LINKS = [
  { label: 'Inicio', href: '#home' },
  { label: 'Servicios', href: '#services' },
  { label: 'Sectores', href: '#sectors' },
  { label: 'Ejemplos', href: '#demos' },
  { label: 'Proceso', href: '#process' },
  { label: 'Contacto', href: '#contact' },
]

const HERO_BADGES = [
  'Más contactos',
  'Más reservas',
  'Mejor conversión',
  'Seguimiento comercial',
  'ROI medible',
]

const PROBLEMS = [
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Visitas que se van',
    description: 'Personas entran en tu web, miran un momento y se van sin llamar, reservar ni escribir.',
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    title: 'Respuestas tardías',
    description: 'Clientes escriben por WhatsApp, correo o formulario y no reciben respuesta a tiempo.',
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
      </svg>
    ),
    title: 'Reservas y citas perdidas',
    description: 'Solicitudes que se quedan en el aire por no tener un sistema claro de captación y seguimiento.',
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
      </svg>
    ),
    title: 'Reseñas sin aprovechar',
    description: 'Opiniones positivas que no se convierten en confianza ni en más contactos comerciales.',
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
      </svg>
    ),
    title: 'Tráfico sin medición',
    description: 'Campañas y publicaciones generan visitas, pero no contactos medibles ni datos claros.',
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Leads sin seguimiento',
    description: 'Interesados que se enfrían porque nadie registra, clasifica ni hace un seguimiento comercial.',
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
    title: 'Canales sin claridad',
    description: 'Tienes tráfico, pero no sabes qué canal genera clientes reales ni dónde invertir mejor.',
  },
]

const SERVICES = [
  {
    tag: 'Captación',
    title: 'Sistemas de captación',
    description:
      'Webs y páginas de aterrizaje diseñadas para transformar visitas en llamadas, reservas, formularios y mensajes de WhatsApp.',
    accent: 'cyan',
  },
  {
    tag: 'Conversión',
    title: 'Conversión y seguimiento',
    description:
      'Estructuramos formularios, CTAs y flujos de contacto para que cada cliente potencial quede registrado y reciba seguimiento.',
    accent: 'orange',
  },
  {
    tag: 'Comercial',
    title: 'Automatización comercial',
    description:
      'Automatizamos respuestas iniciales, clasificación de leads y avisos internos para no perder oportunidades por responder tarde.',
    accent: 'cyan',
  },
  {
    tag: 'Confianza',
    title: 'Reputación y confianza',
    description:
      'Analizamos reseñas, destacamos puntos fuertes y ayudamos a convertir la confianza online en más contactos.',
    accent: 'orange',
  },
  {
    tag: 'Datos',
    title: 'Dashboards de oportunidades',
    description:
      'Paneles sencillos para ver de dónde vienen los leads, cuántos contactan y qué canales funcionan mejor.',
    accent: 'cyan',
  },
  {
    tag: 'Optimización',
    title: 'Optimización de presencia digital',
    description:
      'Revisamos cómo se presenta tu negocio online y proponemos mejoras concretas para aumentar llamadas, reservas y solicitudes.',
    accent: 'orange',
  },
]

const SECTORS = [
  {
    title: 'Restaurantes',
    description:
      'Cartas online, reservas, WhatsApp, Google Maps y páginas diseñadas para convertir visitas en mesas ocupadas.',
    result: 'Más reservas y consultas',
  },
  {
    title: 'Clínicas dentales y estéticas',
    description:
      'Solicitudes de cita, formularios claros, seguimiento de pacientes potenciales y confianza online.',
    result: 'Más citas y solicitudes',
  },
  {
    title: 'Gimnasios y entrenadores',
    description:
      'Captación de leads para bonos, planes, clases y membresías con seguimiento comercial claro.',
    result: 'Más altas y pruebas',
  },
  {
    title: 'Academias',
    description:
      'Formularios para nuevos alumnos, información clara y seguimiento de interesados sin perder contactos.',
    result: 'Más matrículas potenciales',
  },
  {
    title: 'Inmobiliarias',
    description:
      'Captación y clasificación de compradores, vendedores e interesados con priorización comercial.',
    result: 'Más oportunidades cualificadas',
  },
  {
    title: 'Servicios locales',
    description:
      'Llamadas, presupuestos y solicitudes desde la web con respuesta rápida y registro de cada contacto.',
    result: 'Más presupuestos y llamadas',
  },
]

const DEMOS = [
  {
    industry: 'Restauración',
    title: 'Web orientada a reservas',
    description:
      'Carta, menú del día, WhatsApp, ubicación y CTAs claros para convertir visitas móviles en clientes reales.',
    tags: ['Reservas', 'WhatsApp', 'Conversión móvil'],
    gradient: 'from-orange-500/20 to-orange-900/10',
  },
  {
    industry: 'Clínica dental',
    title: 'Formularios inteligentes',
    description:
      'Captación y clasificación de pacientes potenciales para priorizar los contactos con mayor intención.',
    tags: ['Captación', 'Clasificación', 'Seguimiento'],
    gradient: 'from-cyan-500/20 to-cyan-900/10',
  },
  {
    industry: 'Multi-sector',
    title: 'Dashboard de leads',
    description:
      'Panel para ver contactos, estado de cada oportunidad, canal de origen y seguimiento comercial.',
    tags: ['Panel comercial', 'Origen de leads', 'Pipeline'],
    gradient: 'from-cyan-500/20 to-blue-900/10',
  },
  {
    industry: 'Negocios locales',
    title: 'Analizador de reseñas',
    description:
      'Sistema para detectar puntos fuertes, problemas recurrentes y oportunidades en tu reputación online.',
    tags: ['Reseñas', 'Confianza', 'Mejora continua'],
    gradient: 'from-orange-500/20 to-rose-900/10',
  },
]

const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Analizamos tu captación actual',
    description:
      'Revisamos web, canales, formularios, tiempos de respuesta y puntos donde se pierden oportunidades comerciales.',
  },
  {
    step: '02',
    title: 'Diseñamos el sistema comercial',
    description:
      'Definimos captación, conversión, seguimiento y métricas. La IA y la automatización entran como herramientas al servicio del resultado.',
  },
  {
    step: '03',
    title: 'Lo implementamos con rapidez',
    description:
      'Entregas visibles en poco tiempo: web, formularios, avisos, paneles y flujos listos para generar contactos.',
  },
  {
    step: '04',
    title: 'Medimos y mejoramos',
    description:
      'Seguimos conversión, leads y canales para ajustar lo que funciona y recuperar oportunidades que antes se perdían.',
  },
]

const BEFORE_ITEMS = [
  'Web informativa sin llamadas claras a la acción.',
  'Mensajes dispersos entre WhatsApp, correo y redes.',
  'Sin seguimiento de interesados.',
  'Sin saber qué genera clientes reales.',
  'Reseñas positivas desaprovechadas.',
]

const AFTER_ITEMS = [
  'Web orientada a contacto, reservas y solicitudes.',
  'WhatsApp, formularios y llamadas bien integrados.',
  'Leads registrados, clasificados y con seguimiento.',
  'Métricas para saber qué canal convierte mejor.',
  'Confianza online convertida en más oportunidades.',
]

const GOAL_OPTIONS = [
  'Captar más clientes',
  'Conseguir más reservas',
  'Mejorar seguimiento de leads',
  'Automatizar respuestas comerciales',
  'Mejorar reputación online',
]

function Logo({ className = '' }) {
  return (
    <img
      src={logoImg}
      alt="ProcessAI Studio — Sistemas digitales para captar más clientes"
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

  const closeMenu = () => setOpen(false)

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-cyan-500/10 bg-navy-950/80 backdrop-blur-xl'
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 lg:h-[4.5rem] lg:px-8">
        <a href="#home" className="group flex shrink-0 items-center py-1 pr-3">
          <Logo className="h-[38px] transition-opacity duration-200 group-hover:opacity-90 md:h-[46px]" />
        </a>

        <ul className="hidden items-center gap-6 lg:flex xl:gap-8">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-slate-400 transition-colors hover:text-cyan-glow"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="btn-primary hidden rounded-lg px-5 py-2.5 text-sm font-semibold text-navy-950 md:inline-flex"
        >
          Solicitar análisis
        </a>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-lg border border-cyan-500/20 p-2 text-slate-300 md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={open}
        >
          {open ? (
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </nav>

      {open && (
        <div className="border-t border-cyan-500/10 bg-navy-950/95 backdrop-blur-xl md:hidden">
          <ul className="flex flex-col gap-1 px-6 py-4">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={closeMenu}
                  className="block rounded-lg px-3 py-2.5 text-sm font-medium text-slate-300 hover:bg-cyan-500/5 hover:text-cyan-glow"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href="#contact"
                onClick={closeMenu}
                className="btn-primary block rounded-lg px-5 py-2.5 text-center text-sm font-semibold text-navy-950"
              >
                Solicitar análisis
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
    <section id="home" className="relative overflow-hidden pt-32 pb-24 lg:pt-40 lg:pb-32">
      <div className="glow-orb animate-pulse-glow -top-32 left-1/4 h-96 w-96 bg-cyan-500/20" />
      <div className="glow-orb animate-pulse-glow top-20 right-0 h-80 w-80 bg-orange-500/15" style={{ animationDelay: '2s' }} />

      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/5 px-4 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-glow animate-pulse" />
            <span className="text-xs font-medium tracking-wide text-cyan-glow/90">
              Captación · Conversión · Seguimiento comercial
            </span>
          </div>

          <h1 className="font-display text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Convierte más visitas en clientes con{' '}
            <span className="text-gradient">sistemas digitales</span> inteligentes
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-slate-400 sm:text-xl">
            Creamos webs, formularios, automatizaciones y sistemas de seguimiento diseñados para que negocios
            locales y empresas capten más clientes, respondan antes y no pierdan oportunidades comerciales.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {HERO_BADGES.map((badge) => (
              <span
                key={badge}
                className="rounded-full border border-cyan-500/15 bg-navy-800/60 px-3 py-1 text-xs font-medium text-slate-300"
              >
                {badge}
              </span>
            ))}
          </div>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#contact"
              className="btn-primary inline-flex w-full items-center justify-center gap-2 rounded-xl px-8 py-3.5 text-sm font-semibold text-navy-950 sm:w-auto"
            >
              Quiero captar más clientes
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="#demos"
              className="btn-secondary inline-flex w-full items-center justify-center rounded-xl px-8 py-3.5 text-sm font-semibold text-slate-200 sm:w-auto"
            >
              Ver ejemplos
            </a>
          </div>
        </div>

        <div className="mx-auto mt-20 max-w-4xl">
          <div className="card-glass animate-float overflow-hidden rounded-2xl p-1">
            <div className="rounded-xl bg-navy-900/80 p-6 sm:p-8">
              <div className="mb-4 flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-red-500/80" />
                <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
                <span className="h-3 w-3 rounded-full bg-green-500/80" />
                <span className="ml-3 font-mono text-xs text-slate-500">panel.processai.studio/leads</span>
              </div>
              <div className="grid gap-4 sm:grid-cols-3">
                {[
                  { label: 'Contactos este mes', value: '47', change: '+23%' },
                  { label: 'Reservas / solicitudes', value: '18', change: '+31%' },
                  { label: 'Conversión web', value: '2,8%', change: '+1,2 pp' },
                ].map((stat) => (
                  <div key={stat.label} className="rounded-lg border border-cyan-500/10 bg-navy-800/50 p-4">
                    <p className="text-xs text-slate-500">{stat.label}</p>
                    <p className="mt-1 font-display text-2xl font-bold text-white">{stat.value}</p>
                    <p className="mt-1 text-xs font-medium text-cyan-glow">{stat.change}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function NarrativeSection() {
  return (
    <section className="relative border-y border-cyan-500/10 bg-navy-900/30 py-16 lg:py-20">
      <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
        <p className="font-display text-2xl font-semibold leading-snug text-white sm:text-3xl">
          No hacemos webs bonitas sin más.{' '}
          <span className="text-gradient">Creamos sistemas digitales</span> pensados para generar oportunidades comerciales.
        </p>
        <p className="mx-auto mt-4 max-w-2xl text-slate-400">
          Combinamos web, datos, IA y automatización para construir captación, conversión y seguimiento comercial
          medible — sin parecer una agencia genérica de marketing.
        </p>
      </div>
    </section>
  )
}

function ProblemSection() {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="section-label">El problema</p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Tu negocio puede estar perdiendo clientes sin darse cuenta
          </h2>
          <p className="mt-4 text-slate-400">
            No siempre falta tráfico. A veces falta convertir, responder a tiempo y medir qué canal trae clientes reales.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {PROBLEMS.map((item) => (
            <article key={item.title} className="card-glass group rounded-2xl p-6">
              <div className="mb-4 inline-flex rounded-xl bg-orange-500/10 p-3 text-orange-glow transition-colors group-hover:bg-cyan-500/10 group-hover:text-cyan-glow">
                {item.icon}
              </div>
              <h3 className="font-display text-lg font-semibold text-white">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function ROISection() {
  const [visits, setVisits] = useState(300)
  const [currentRate, setCurrentRate] = useState(1)
  const [targetRate, setTargetRate] = useState(3)

  const currentLeads = Math.round((visits * currentRate) / 100)
  const targetLeads = Math.round((visits * targetRate) / 100)
  const extraLeads = Math.max(targetLeads - currentLeads, 0)

  return (
    <section id="roi" className="relative py-24 lg:py-32">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />

      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="section-label">Conversión y retorno</p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
              El crecimiento no depende solo de tener más visitas, sino de convertir mejor
            </h2>
            <p className="mt-4 text-slate-400">
              Si tu web recibe 300 visitas al mes y solo 3 personas contactan, tu conversión es del 1%. Mejorar
              mensajes, CTAs, WhatsApp, formularios y seguimiento del 1% al 3% puede triplicar oportunidades
              comerciales sin pagar más tráfico.
            </p>
          </div>

          <div className="card-glass rounded-2xl p-6 sm:p-8">
            <p className="mb-6 text-sm font-medium text-cyan-glow">Calculadora de oportunidades</p>

            <div className="space-y-5">
              <div>
                <label htmlFor="roi-visits" className="form-label">
                  Visitas mensuales
                </label>
                <input
                  id="roi-visits"
                  type="number"
                  min={50}
                  max={10000}
                  value={visits}
                  onChange={(e) => setVisits(Number(e.target.value) || 0)}
                  className="form-input"
                />
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="roi-current" className="form-label">
                    Conversión actual (%)
                  </label>
                  <input
                    id="roi-current"
                    type="number"
                    min={0.1}
                    max={20}
                    step={0.1}
                    value={currentRate}
                    onChange={(e) => setCurrentRate(Number(e.target.value) || 0)}
                    className="form-input"
                  />
                </div>
                <div>
                  <label htmlFor="roi-target" className="form-label">
                    Conversión objetivo (%)
                  </label>
                  <input
                    id="roi-target"
                    type="number"
                    min={0.1}
                    max={20}
                    step={0.1}
                    value={targetRate}
                    onChange={(e) => setTargetRate(Number(e.target.value) || 0)}
                    className="form-input"
                  />
                </div>
              </div>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="rounded-xl border border-cyan-500/10 bg-navy-800/50 p-4 text-center">
                <p className="text-xs text-slate-500">Leads actuales</p>
                <p className="mt-1 font-display text-3xl font-bold text-white">{currentLeads}</p>
                <p className="mt-1 text-xs text-slate-500">{currentRate}% conversión</p>
              </div>
              <div className="rounded-xl border border-cyan-500/10 bg-navy-800/50 p-4 text-center">
                <p className="text-xs text-slate-500">Leads potenciales</p>
                <p className="mt-1 font-display text-3xl font-bold text-cyan-glow">{targetLeads}</p>
                <p className="mt-1 text-xs text-slate-500">{targetRate}% objetivo</p>
              </div>
              <div className="rounded-xl border border-orange-500/20 bg-orange-500/5 p-4 text-center sm:col-span-1">
                <p className="text-xs text-slate-500">Oportunidades extra</p>
                <p className="mt-1 font-display text-3xl font-bold text-orange-glow">+{extraLeads}</p>
                <p className="mt-1 text-xs text-slate-500">al mes</p>
              </div>
            </div>

            <p className="mt-4 text-center text-xs text-slate-500">
              Ejemplo orientativo. Los resultados dependen de tu sector, oferta y canal de tráfico.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function BeforeAfterSection() {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="section-label">Antes / Después</p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            De una presencia digital pasiva a un sistema de captación
          </h2>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          <article className="card-glass rounded-2xl border-orange-500/10 p-8">
            <p className="section-label text-orange-glow">Antes</p>
            <ul className="mt-6 space-y-4">
              {BEFORE_ITEMS.map((item) => (
                <li key={item} className="flex gap-3 text-sm text-slate-400">
                  <span className="mt-0.5 text-orange-glow">✕</span>
                  {item}
                </li>
              ))}
            </ul>
          </article>

          <article className="card-glass rounded-2xl border-cyan-500/15 p-8">
            <p className="section-label">Después</p>
            <ul className="mt-6 space-y-4">
              {AFTER_ITEMS.map((item) => (
                <li key={item} className="flex gap-3 text-sm text-slate-300">
                  <span className="mt-0.5 text-cyan-glow">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  )
}

function ServicesSection() {
  return (
    <section id="services" className="relative py-24 lg:py-32">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />

      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-xl">
            <p className="section-label">Servicios</p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Sistemas para captar, convertir y no perder oportunidades
            </h2>
          </div>
          <p className="max-w-md text-slate-400 lg:text-right">
            IA, automatización y datos al servicio de un objetivo claro: más contactos, más reservas y crecimiento medible.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {SERVICES.map((service) => (
            <article
              key={service.title}
              className="card-glass group relative overflow-hidden rounded-2xl p-8"
            >
              <div
                className={`absolute -right-8 -top-8 h-32 w-32 rounded-full blur-3xl ${
                  service.accent === 'cyan' ? 'bg-cyan-500/10' : 'bg-orange-500/10'
                }`}
              />
              <span
                className={`relative inline-block rounded-md px-2.5 py-1 font-mono text-xs font-medium ${
                  service.accent === 'cyan'
                    ? 'bg-cyan-500/10 text-cyan-glow'
                    : 'bg-orange-500/10 text-orange-glow'
                }`}
              >
                {service.tag}
              </span>
              <h3 className="relative mt-4 font-display text-xl font-semibold text-white">{service.title}</h3>
              <p className="relative mt-3 text-sm leading-relaxed text-slate-400">{service.description}</p>
              <a
                href="#contact"
                className="relative mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-cyan-glow transition-colors hover:text-white"
              >
                Solicitar análisis
                <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function SectorsSection() {
  return (
    <section id="sectors" className="relative py-24 lg:py-32">
      <div className="glow-orb -right-20 top-1/3 h-64 w-64 bg-orange-500/10" />

      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="section-label">Sectores</p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Soluciones para negocios que dependen de captar clientes
          </h2>
          <p className="mt-4 text-slate-400">
            Cada sector tiene sus canales y sus fricciones. Adaptamos el sistema digital al resultado comercial que necesitas.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SECTORS.map((sector) => (
            <article key={sector.title} className="card-glass rounded-2xl p-6">
              <h3 className="font-display text-lg font-semibold text-white">{sector.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-400">{sector.description}</p>
              <p className="mt-4 inline-flex rounded-full border border-cyan-500/15 bg-cyan-500/5 px-3 py-1 text-xs font-medium text-cyan-glow">
                {sector.result}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function DemosSection() {
  return (
    <section id="demos" className="relative py-24 lg:py-32">
      <div className="glow-orb -left-20 top-1/2 h-64 w-64 bg-cyan-500/10" />

      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="section-label">Ejemplos</p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Herramientas reales para captar y convertir mejor
          </h2>
          <p className="mt-4 text-slate-400">
            Proyectos y demos orientados a generar contactos, reservas, solicitudes y seguimiento comercial.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {DEMOS.map((demo) => (
            <article key={demo.title} className="card-glass group overflow-hidden rounded-2xl">
              <div className={`bg-gradient-to-br ${demo.gradient} px-8 pt-8 pb-6`}>
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">{demo.industry}</p>
                <h3 className="mt-2 font-display text-xl font-semibold text-white">{demo.title}</h3>
              </div>
              <div className="px-8 py-6">
                <p className="text-sm leading-relaxed text-slate-400">{demo.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {demo.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-cyan-500/10 bg-cyan-500/5 px-3 py-1 text-xs font-medium text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function ProcessSection() {
  return (
    <section id="process" className="relative py-24 lg:py-32">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-orange-500/20 to-transparent" />

      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="section-label">Proceso</p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            De diagnóstico a sistema comercial en semanas, no meses
          </h2>
        </div>

        <div className="relative mt-16">
          <div className="absolute left-8 top-0 hidden h-full w-px bg-gradient-to-b from-cyan-500/40 via-cyan-500/10 to-transparent lg:left-1/2 lg:block lg:-translate-x-px" />

          <div className="space-y-12 lg:space-y-0">
            {PROCESS_STEPS.map((item, index) => (
              <div
                key={item.step}
                className={`relative flex flex-col gap-6 lg:flex-row lg:items-center lg:gap-12 ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                  <span className="font-mono text-sm font-bold text-cyan-glow">{item.step}</span>
                  <h3 className="mt-2 font-display text-xl font-semibold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">{item.description}</p>
                </div>

                <div className="relative hidden lg:flex lg:w-12 lg:shrink-0 lg:items-center lg:justify-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-cyan-500/30 bg-navy-800 shadow-[0_0_20px_rgba(34,211,238,0.15)]">
                    <div className="h-2.5 w-2.5 rounded-full bg-cyan-glow" />
                  </div>
                </div>

                <div className="hidden lg:block lg:w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function CTASection() {
  const [form, setForm] = useState({
    name: '',
    business: '',
    sector: '',
    website: '',
    goal: GOAL_OPTIONS[0],
    phone: '',
    email: '',
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
      `Negocio: ${form.business.trim() || 'No indicado'}`,
      `Sector: ${form.sector.trim() || 'No indicado'}`,
      `Web actual: ${form.website.trim() || 'No indicada'}`,
      `Objetivo principal: ${form.goal}`,
      `Teléfono: ${form.phone.trim()}`,
      '',
      form.message.trim() || 'Sin mensaje adicional.',
    ]

    const formData = new FormData()
    formData.append('name', form.name.trim())
    formData.append('email', form.email.trim())
    formData.append('phone', form.phone.trim())
    formData.append('message', bodyLines.join('\n'))
    formData.append('_subject', `[ProcessAI Studio] Solicitud de análisis — ${form.business.trim() || form.name.trim()}`)
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
        setForm({
          name: '',
          business: '',
          sector: '',
          website: '',
          goal: GOAL_OPTIONS[0],
          phone: '',
          email: '',
          message: '',
        })
        return
      }

      setStatus('error')
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-cyan-500/15 bg-gradient-to-br from-navy-800/80 via-navy-900/90 to-navy-950 p-8 sm:p-12 lg:p-16">
          <div className="glow-orb -left-20 -top-20 h-64 w-64 bg-cyan-500/20" />
          <div className="glow-orb -bottom-20 -right-20 h-64 w-64 bg-orange-500/15" />

          <div className="relative mx-auto max-w-3xl text-center">
            <p className="section-label">Contacto</p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              ¿Quieres saber cuántas oportunidades está perdiendo tu negocio?
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-slate-400">
              Revisamos tu presencia digital y te proponemos un sistema sencillo para captar, convertir y gestionar
              más clientes. Sin compromiso: te diremos qué mejoraríamos para convertir más visitas en contactos reales.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="#contact-form"
                className="btn-primary inline-flex w-full items-center justify-center gap-2 rounded-xl px-8 py-3.5 text-sm font-semibold text-navy-950 sm:w-auto"
              >
                Solicitar análisis gratuito
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary inline-flex w-full items-center justify-center gap-2 rounded-xl px-8 py-3.5 text-sm font-semibold text-slate-200 sm:w-auto"
              >
                Hablar por WhatsApp
              </a>
            </div>

            <form
              id="contact-form"
              onSubmit={handleSubmit}
              className="card-glass mx-auto mt-10 max-w-2xl scroll-mt-28 rounded-2xl border border-cyan-500/10 p-6 text-left sm:p-8"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="contact-name" className="form-label">
                    Nombre <span className="form-required">*</span>
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Tu nombre"
                    className="form-input"
                  />
                </div>

                <div>
                  <label htmlFor="contact-business" className="form-label">
                    Empresa / negocio <span className="form-required">*</span>
                  </label>
                  <input
                    id="contact-business"
                    name="business"
                    type="text"
                    required
                    value={form.business}
                    onChange={handleChange}
                    placeholder="Nombre de tu negocio"
                    className="form-input"
                  />
                </div>

                <div>
                  <label htmlFor="contact-sector" className="form-label">
                    Sector <span className="form-required">*</span>
                  </label>
                  <input
                    id="contact-sector"
                    name="sector"
                    type="text"
                    required
                    value={form.sector}
                    onChange={handleChange}
                    placeholder="Restaurante, clínica, gimnasio…"
                    className="form-input"
                  />
                </div>

                <div>
                  <label htmlFor="contact-website" className="form-label">
                    Web actual <span className="text-slate-500">(opcional)</span>
                  </label>
                  <input
                    id="contact-website"
                    name="website"
                    type="url"
                    value={form.website}
                    onChange={handleChange}
                    placeholder="https://tunegocio.com"
                    className="form-input"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="contact-goal" className="form-label">
                    Objetivo principal <span className="form-required">*</span>
                  </label>
                  <select
                    id="contact-goal"
                    name="goal"
                    required
                    value={form.goal}
                    onChange={handleChange}
                    className="form-input"
                  >
                    {GOAL_OPTIONS.map((goal) => (
                      <option key={goal} value={goal}>
                        {goal}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="contact-phone" className="form-label">
                    Teléfono <span className="form-required">*</span>
                  </label>
                  <input
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    required
                    autoComplete="tel"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+34 600 000 000"
                    className="form-input"
                  />
                </div>

                <div>
                  <label htmlFor="contact-email" className="form-label">
                    Correo electrónico <span className="form-required">*</span>
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="tu@empresa.com"
                    className="form-input"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="contact-message" className="form-label">
                    Mensaje <span className="text-slate-500">(opcional)</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Cuéntanos brevemente tu situación actual o qué te gustaría mejorar."
                    className="form-input form-textarea min-h-[120px] resize-y"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="btn-primary mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl px-8 py-3.5 text-sm font-semibold text-navy-950 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {status === 'sending' ? 'Enviando…' : 'Solicitar análisis'}
                {status !== 'sending' && (
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                )}
              </button>

              {status === 'success' && (
                <p className="mt-4 rounded-lg border border-cyan-500/20 bg-cyan-500/10 px-4 py-3 text-center text-sm text-cyan-glow">
                  ¡Solicitud enviada! Te contactaremos en breve con un análisis inicial.
                </p>
              )}

              {status === 'error' && (
                <p className="mt-4 rounded-lg border border-orange-500/20 bg-orange-500/10 px-4 py-3 text-center text-sm text-orange-glow">
                  No se pudo enviar la solicitud. Inténtalo de nuevo o contáctanos directamente abajo.
                </p>
              )}
            </form>

            <div className="mt-10 border-t border-cyan-500/10 pt-8">
              <p className="text-sm text-slate-500">O contáctanos directamente</p>
              <div className="mt-4 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-6">
                <a
                  href="mailto:processaistudio@gmail.com"
                  className="inline-flex items-center gap-2 text-sm text-slate-400 transition-colors hover:text-cyan-glow"
                >
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  processaistudio@gmail.com
                </a>
                <span className="hidden text-slate-700 sm:inline">·</span>
                <a
                  href="https://instagram.com/processai.studio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-slate-400 transition-colors hover:text-cyan-glow"
                >
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                  @processai.studio
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="border-t border-cyan-500/10 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 sm:flex-row lg:px-8">
        <div className="flex shrink-0 items-center">
          <Logo className="h-[32px] opacity-90 md:h-[36px]" />
        </div>

        <div className="flex flex-col items-center gap-3 sm:flex-row sm:gap-8">
          <a
            href="mailto:processaistudio@gmail.com"
            className="text-sm text-slate-400 transition-colors hover:text-cyan-glow"
          >
            processaistudio@gmail.com
          </a>
          <a
            href="https://instagram.com/processai.studio"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-slate-400 transition-colors hover:text-cyan-glow"
          >
            @processai.studio
          </a>
        </div>

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
        <NarrativeSection />
        <ProblemSection />
        <ROISection />
        <BeforeAfterSection />
        <ServicesSection />
        <SectorsSection />
        <DemosSection />
        <ProcessSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}

export default App
