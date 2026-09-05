const navItems = [
  { label: 'Perfil', href: '#perfil' },
  { label: 'Casos', href: '#casos' },
  { label: 'Trayectoria', href: '#trayectoria' },
  { label: 'Contacto', href: '#contacto' },
];

const caseStudies = [
  {
    index: '01',
    eyebrow: 'Fintech · Retail',
    title: 'Crédito comercial a escala',
    description:
      'Desarrollo full-stack de una experiencia pública y otra privada para una tarjeta comercial, con operaciones transaccionales, pagos online y diseño responsive.',
    result: 'Más de 2,2 M de clientes potenciales',
    tools: 'Angular · APIs REST · Webpay · Azure',
  },
  {
    index: '02',
    eyebrow: 'Operaciones · Compliance',
    title: 'Procesos que pasan de horas a minutos',
    description:
      'Automatización de asignaciones, alertas, consultas y controles operativos para crédito y cobranzas, reduciendo ejecuciones diarias a aproximadamente tres minutos.',
    result: '≈ 3 min de ejecución diaria',
    tools: 'Python · Flask · Node.js · SQL Server',
  },
  {
    index: '03',
    eyebrow: 'Cloud · Documentos',
    title: 'Una biblioteca documental trazable',
    description:
      'Arquitectura de frontend y APIs para cargar, clasificar, buscar y auditar documentos contractuales firmados en Azure Cloud mediante Microsoft Graph.',
    result: '5+ APIs REST implementadas',
    tools: 'Angular · Python · Microsoft Graph · Azure',
  },
  {
    index: '04',
    eyebrow: 'IA · RR. HH.',
    title: 'Sistemas internos con criterio humano',
    description:
      'Plataforma integral para registro horario, vacaciones, permisos y auditoría, con validaciones operativas y un modelo de lenguaje interno para procesar documentación.',
    result: 'Producto end-to-end en producción',
    tools: 'JavaScript · FastAPI · PostgreSQL · Supabase',
  },
];

const experience = [
  {
    date: '07.2026 — actualidad',
    company: 'Carmon Inversores',
    role: 'Ingeniero de Inteligencia Artificial / Desarrollador Full-Stack',
    location: 'Madrid, España',
    copy: 'Construyo productos internos de RR. HH., automatizaciones y soluciones conectadas a documentación y visión 360º.',
  },
  {
    date: '06.2022 — 05.2026',
    company: "Fashion's Park S.A.",
    role: 'Líder Técnico de Desarrollo TI / Full-Stack Developer',
    location: 'Santiago, Chile',
    copy: 'Lideré durante cuatro años el desarrollo de más de tres plataformas corporativas críticas para crédito, cobranzas y gestión documental.',
  },
  {
    date: '08.2021 — 12.2021',
    company: 'Consorcio Credicard C.A.',
    role: 'Desarrollador de TI',
    location: 'Caracas, Venezuela',
    copy: 'Mantuve y mejoré programas internos sobre AS/400, conectando necesidades del negocio con mejoras técnicas concretas.',
  },
];

const skills = [
  'Angular',
  'TypeScript',
  'JavaScript',
  'Python',
  'FastAPI',
  'Flask',
  'Node.js',
  'PostgreSQL',
  'SQL Server',
  'Azure',
  'Supabase',
  'Docker',
  'REST APIs',
  'Microsoft Graph',
  'CI/CD',
];

export default function Home() {
  return (
    <main className="site-shell">
      <div className="noise" aria-hidden="true" />

      <header className="site-header">
        <a className="brand" href="#top" aria-label="Francisco Catalán, inicio">
          <span className="brand-mark">FC</span>
          <span className="brand-name">Francisco Catalán</span>
        </a>
        <nav className="main-nav" aria-label="Navegación principal">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <a
          className="header-link"
          href="https://www.linkedin.com/in/francisco-catalan-289a6115b/"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn <span aria-hidden="true">↗</span>
        </a>
      </header>

      <section id="top" className="hero section-wrap">
        <div className="hero-copy">
          <p className="eyebrow"><span className="eyebrow-dot" /> Disponible para nuevas oportunidades</p>
          <h1>
            Full-Stack
            <span>Developer</span>
          </h1>
          <p className="hero-intro">
            Diseño y desarrollo productos digitales que convierten procesos complejos en experiencias claras, escalables y útiles para el negocio.
          </p>
          <div className="hero-actions">
            <a className="button button-dark" href="/CV_Francisco_Catalan_FullStack.pdf" download>
              Descargar CV <span aria-hidden="true">↓</span>
            </a>
            <a className="button button-quiet" href="#contacto">
              Hablemos <span aria-hidden="true">↗</span>
            </a>
          </div>
          <div className="hero-meta">
            <span>Madrid, España</span>
            <span className="meta-divider" aria-hidden="true" />
            <span>+5 años de experiencia</span>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-orbit orbit-one" aria-hidden="true" />
          <div className="hero-orbit orbit-two" aria-hidden="true" />
          <div className="portrait-frame">
            <img
              src="/francisco-catalan.jpg"
              alt="Francisco Catalán sonríe frente a una pared de notas"
            />
          </div>
          <div className="portrait-caption">
            <span>01 / 04</span>
            <span>Construir con propósito</span>
          </div>
          <div className="floating-note note-top">
            <span className="note-label">Focus</span>
            <strong>End-to-end</strong>
          </div>
          <div className="floating-note note-bottom">
            <span className="note-label">Now learning</span>
            <strong>Big Data &amp; Analytics</strong>
          </div>
        </div>
      </section>

      <section id="perfil" className="intro-band section-wrap">
        <div className="section-kicker">/ 01 — Perfil</div>
        <div className="intro-grid">
          <h2>La tecnología funciona mejor cuando entiende a las personas.</h2>
          <div className="intro-body">
            <p>
              Soy ingeniero en sistemas y desarrollador Full-Stack. Me muevo entre frontend, backend y negocio para convertir necesidades reales en software que se puede mantener, medir y hacer crecer.
            </p>
            <p>
              Actualmente trabajo en soluciones con inteligencia artificial mientras curso un Máster en Big Data &amp; Business Analytics. Mi forma de aportar combina criterio técnico, comunicación directa y obsesión por quitar fricción.
            </p>
            <a className="text-link" href="mailto:catalan.sistemas@gmail.com">
              Conectar por email <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </section>

      <section id="casos" className="cases-section section-wrap">
        <div className="section-heading">
          <div className="section-kicker">/ 02 — Casos seleccionados</div>
          <p>Experiencia real, contada desde el problema hasta el impacto.</p>
        </div>
        <div className="cases-grid">
          {caseStudies.map((item) => (
            <article className="case-card" key={item.index}>
              <div className="case-topline">
                <span>{item.index}</span>
                <span>{item.eyebrow}</span>
              </div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <div className="case-bottom">
                <div>
                  <span className="case-label">Resultado</span>
                  <strong>{item.result}</strong>
                </div>
                <div>
                  <span className="case-label">Stack</span>
                  <span>{item.tools}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="numbers-band section-wrap" aria-label="En números">
        <div className="number-item"><strong>5+</strong><span>años construyendo<br />software</span></div>
        <div className="number-item"><strong>3+</strong><span>plataformas<br />corporativas</span></div>
        <div className="number-item"><strong>2,2 M</strong><span>clientes potenciales<br />en producto digital</span></div>
        <div className="number-item"><strong>3 min</strong><span>procesos reducidos<br />de horas a minutos</span></div>
      </section>

      <section id="trayectoria" className="trajectory section-wrap">
        <div className="section-kicker">/ 03 — Trayectoria</div>
        <div className="trajectory-grid">
          <div>
            <h2>Una carrera entre sistemas críticos y nuevas posibilidades.</h2>
            <p className="trajectory-aside">De AS/400 a soluciones con IA: la curiosidad técnica solo importa cuando produce resultados visibles.</p>
          </div>
          <div className="timeline">
            {experience.map((item) => (
              <article className="timeline-item" key={item.company}>
                <div className="timeline-date">{item.date}</div>
                <div className="timeline-content">
                  <h3>{item.company}</h3>
                  <p className="timeline-role">{item.role}</p>
                  <p>{item.copy}</p>
                  <span className="timeline-location">{item.location}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="toolkit section-wrap">
        <div className="section-kicker">/ 04 — Toolkit</div>
        <div className="toolkit-grid">
          <h2>Las herramientas son el medio. El criterio, la diferencia.</h2>
          <div className="skills-cloud">
            {skills.map((skill) => <span key={skill}>{skill}</span>)}
          </div>
        </div>
      </section>

      <section id="contacto" className="contact-section section-wrap">
        <div className="contact-card">
          <div className="contact-copy">
            <div className="section-kicker">/ 05 — Contacto</div>
            <h2>¿Tienes un reto interesante?</h2>
            <p>Estoy disponible para conversar sobre oportunidades Full-Stack en España y proyectos donde el software tenga que hacer algo más que funcionar.</p>
          </div>
          <div className="contact-actions">
            <a className="contact-email" href="mailto:catalan.sistemas@gmail.com">catalan.sistemas@gmail.com <span aria-hidden="true">↗</span></a>
            <div className="contact-links">
              <a href="https://www.linkedin.com/in/francisco-catalan-289a6115b/" target="_blank" rel="noreferrer">LinkedIn ↗</a>
              <a href="/CV_Francisco_Catalan_FullStack.pdf" download>Descargar CV ↓</a>
            </div>
          </div>
        </div>
      </section>

      <footer className="site-footer section-wrap">
        <span>© {new Date().getFullYear()} Francisco Catalán</span>
        <span>Full-Stack Developer · Madrid</span>
        <a href="#top">Volver arriba ↑</a>
      </footer>
    </main>
  );
}
