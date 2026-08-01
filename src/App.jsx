import { useState, useEffect } from 'react'
import logoImg from './assets/logo.png'

const NAV_LINKS = [
  { label: 'Inicio', href: '#home' },
  { label: 'Servicios', href: '#services' },
  { label: 'Demos', href: '#demos' },
  { label: 'Proceso', href: '#process' },
  { label: 'Contacto', href: '#contact' },
]

const PROBLEMS = [
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Webs desactualizadas',
    description: 'Tu web transmite una imagen anticuada y no convierte visitas en clientes cualificados.',
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    title: 'Mensajes perdidos',
    description: 'Las consultas llegan por WhatsApp, correo y formularios, y se pierden sin un sistema que las gestione.',
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Sin seguimiento',
    description: 'Los contactos interesados se enfrían porque nadie responde a tiempo ni hace un seguimiento adecuado.',
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'Procesos manuales',
    description: 'Tu equipo repite las mismas tareas cada día en lugar de centrarse en clientes y crecimiento.',
  },
]

const SERVICES = [
  {
    tag: 'Web',
    title: 'Webs profesionales',
    description: 'Webs rápidas y modernas, diseñadas para representar tu marca y convertir tráfico en conversaciones.',
    accent: 'cyan',
  },
  {
    tag: 'Leads',
    title: 'Web + captación de leads',
    description: 'Formularios integrados, conexión con CRM y avisos instantáneos para que ninguna consulta se escape.',
    accent: 'orange',
  },
  {
    tag: 'Auto',
    title: 'Automatizaciones inteligentes',
    description: 'Flujos que gestionan seguimientos, recordatorios y sincronización de datos, sin trabajo manual.',
    accent: 'cyan',
  },
  {
    tag: 'AI',
    title: 'Sistemas empresariales con IA',
    description: 'Asistentes inteligentes y flujos automatizados adaptados a cómo funciona realmente tu negocio.',
    accent: 'orange',
  },
]

const DEMOS = [
  {
    industry: 'Clínica dental',
    title: 'Formulario de captación + email automático',
    description: 'Formulario de consulta con confirmación instantánea por correo y avisos al equipo en cada envío.',
    tags: ['Captación', 'Email automático', 'Avisos al equipo'],
    gradient: 'from-cyan-500/20 to-cyan-900/10',
  },
  {
    industry: 'Gimnasio',
    title: 'Panel de gestión de leads',
    description: 'Panel central para gestionar solicitudes de prueba, asignar seguimientos y monitorizar conversiones.',
    tags: ['Panel CRM', 'Pipeline', 'Analítica'],
    gradient: 'from-orange-500/20 to-orange-900/10',
  },
  {
    industry: 'Servicio técnico',
    title: 'Sistema de solicitud de presupuestos',
    description: 'Formulario estructurado para datos del dispositivo, fotos y urgencia, enviado directamente a los técnicos.',
    tags: ['Flujo de presupuesto', 'Subida de archivos', 'Enrutado'],
    gradient: 'from-cyan-500/20 to-blue-900/10',
  },
  {
    industry: 'Centro de belleza',
    title: 'Landing + reservas por WhatsApp',
    description: 'Presentación de servicios con reserva por WhatsApp en un clic y confirmaciones automáticas.',
    tags: ['Landing page', 'WhatsApp', 'Reservas'],
    gradient: 'from-orange-500/20 to-rose-900/10',
  },
]

const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Analizamos tu negocio',
    description: 'Mapeamos tu flujo actual, cuellos de botella y objetivos de crecimiento antes de escribir una sola línea de código.',
  },
  {
    step: '02',
    title: 'Diseñamos la solución',
    description: 'Una arquitectura clara — web, puntos de captación, automatizaciones e integraciones — construida en torno a tu operativa.',
  },
  {
    step: '03',
    title: 'Construimos con rapidez',
    description: 'Sprints enfocados con progreso visible. Ves prototipos funcionando pronto, no meses de silencio.',
  },
  {
    step: '04',
    title: 'Lanzamos y mejoramos',
    description: 'Publicamos con confianza y luego iteramos según datos reales y los comentarios de tu equipo y clientes.',
  },
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

        <ul className="hidden items-center gap-8 md:flex">
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
          Solicitar propuesta
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
                Solicitar propuesta
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
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/5 px-4 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-glow animate-pulse" />
            <span className="text-xs font-medium tracking-wide text-cyan-glow/90">
              Estudio de sistemas digitales
            </span>
          </div>

          <h1 className="font-display text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Crea los sistemas que{' '}
            <span className="text-gradient">captan clientes</span>{' '}
            e impulsan tu negocio
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-400 sm:text-xl">
            ProcessAI Studio crea webs profesionales, sistemas de captación de leads y automatizaciones inteligentes
            para negocios que quieren crecer, sin el caos de seguimientos manuales y herramientas dispersas.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#contact"
              className="btn-primary inline-flex w-full items-center justify-center gap-2 rounded-xl px-8 py-3.5 text-sm font-semibold text-navy-950 sm:w-auto"
            >
              Solicitar propuesta
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="#demos"
              className="btn-secondary inline-flex w-full items-center justify-center rounded-xl px-8 py-3.5 text-sm font-semibold text-slate-200 sm:w-auto"
            >
              Ver proyectos demo
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
                <span className="ml-3 font-mono text-xs text-slate-500">processai.systems/dashboard</span>
              </div>
              <div className="grid gap-4 sm:grid-cols-3">
                {[
                  { label: 'Leads hoy', value: '24', change: '+18%' },
                  { label: 'Respuestas automáticas', value: '156', change: '100%' },
                  { label: 'Tasa de conversión', value: '34%', change: '+12%' },
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

function ProblemSection() {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="section-label">El problema</p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            El crecimiento se frena cuando los sistemas no acompañan
          </h2>
          <p className="mt-4 text-slate-400">
            La mayoría de negocios no necesitan otra web genérica. Necesitan sistemas conectados que capturen,
            respondan y conviertan, de forma automática.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
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

function ServicesSection() {
  return (
    <section id="services" className="relative py-24 lg:py-32">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />

      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-xl">
            <p className="section-label">Servicios</p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Todo lo que necesitas para captar, convertir y automatizar
            </h2>
          </div>
          <p className="max-w-md text-slate-400 lg:text-right">
            Desde una presencia web cuidada hasta flujos completos con IA, construidos como un sistema coherente, no como herramientas sueltas.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
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
              <h3 className="relative mt-4 font-display text-xl font-semibold text-white">
                {service.title}
              </h3>
              <p className="relative mt-3 text-sm leading-relaxed text-slate-400">
                {service.description}
              </p>
              <a
                href="#contact"
                className="relative mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-cyan-glow transition-colors hover:text-white"
              >
                Hablar de este servicio
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

function DemosSection() {
  return (
    <section id="demos" className="relative py-24 lg:py-32">
      <div className="glow-orb -left-20 top-1/2 h-64 w-64 bg-cyan-500/10" />

      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="section-label">Demos</p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Sistemas reales para sectores reales
          </h2>
          <p className="mt-4 text-slate-400">
            Cada negocio es distinto. Así adaptamos los sistemas digitales a cada sector.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {DEMOS.map((demo) => (
            <article
              key={demo.title}
              className="card-glass group overflow-hidden rounded-2xl"
            >
              <div className={`bg-gradient-to-br ${demo.gradient} px-8 pt-8 pb-6`}>
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  {demo.industry}
                </p>
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
            De la idea al sistema en producción en semanas, no meses
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
  return (
    <section id="contact" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-cyan-500/15 bg-gradient-to-br from-navy-800/80 via-navy-900/90 to-navy-950 p-10 text-center sm:p-16">
          <div className="glow-orb -left-20 -top-20 h-64 w-64 bg-cyan-500/20" />
          <div className="glow-orb -bottom-20 -right-20 h-64 w-64 bg-orange-500/15" />

          <div className="relative">
            <p className="section-label">Hablemos</p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              ¿Quieres un sistema diseñado en torno a{' '}
              <span className="text-gradient">tu negocio</span>?
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-slate-400">
              Cuéntanos tus objetivos y prepararemos una propuesta personalizada: sin plantillas,
              sin paquetes cerrados, solo la solución que encaja contigo.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="mailto:processaistudio@gmail.com"
                className="btn-primary inline-flex w-full items-center justify-center gap-2 rounded-xl px-8 py-3.5 text-sm font-semibold text-navy-950 sm:w-auto"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                processaistudio@gmail.com
              </a>
              <a
                href="https://instagram.com/processai.studio"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary inline-flex w-full items-center justify-center gap-2 rounded-xl px-8 py-3.5 text-sm font-semibold text-slate-200 sm:w-auto"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
                Escríbenos por Instagram
              </a>
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
        <ProblemSection />
        <ServicesSection />
        <DemosSection />
        <ProcessSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}

export default App
