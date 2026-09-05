export type Language = 'es' | 'en';

export type SiteCopy = {
  nav: { profile: string; cases: string; journey: string; contact: string };
  languageLabel: string;
  linkedin: string;
  available: string;
  heroIntro: string;
  downloadCv: string;
  talk: string;
  location: string;
  experienceMeta: string;
  focus: string;
  learning: string;
  portraitCaption: string;
  marquee: string[];
  profileKicker: string;
  profileTitle: string;
  profileParagraphs: string[];
  emailCta: string;
  servicesKicker: string;
  services: { number: string; title: string; copy: string }[];
  casesKicker: string;
  casesIntro: string;
  cases: { index: string; eyebrow: string; title: string; description: string; resultLabel: string; result: string; stackLabel: string; tools: string; tone: string }[];
  statsLabel: string;
  stats: { value: string; line1: string; line2: string }[];
  journeyKicker: string;
  journeyTitle: string;
  journeyAside: string;
  experience: { date: string; company: string; role: string; location: string; copy: string }[];
  toolkitKicker: string;
  toolkitTitle: string;
  contactKicker: string;
  contactTitle: string;
  contactCopy: string;
  cvShort: string;
  footerRole: string;
  backTop: string;
};

export const copy: Record<Language, SiteCopy> = {
  es: {
    nav: { profile: 'Perfil', cases: 'Casos', journey: 'Trayectoria', contact: 'Contacto' },
    languageLabel: 'Idioma', linkedin: 'LinkedIn', available: 'Disponible para nuevas oportunidades',
    heroIntro: 'Diseño y desarrollo productos digitales que convierten procesos complejos en experiencias claras, escalables y útiles para el negocio.',
    downloadCv: 'Descargar CV', talk: 'Hablemos', location: 'Madrid, España', experienceMeta: '+5 años de experiencia',
    focus: 'Focus', learning: 'Now learning', portraitCaption: 'Construir con propósito',
    marquee: ['Full-Stack', 'Automatización', 'Cloud', 'IA aplicada', 'Software útil'],
    profileKicker: '/ 01 — Perfil', profileTitle: 'La tecnología funciona mejor cuando entiende a las personas.',
    profileParagraphs: ['Soy ingeniero en sistemas y desarrollador Full-Stack. Me muevo entre frontend, backend y negocio para convertir necesidades reales en software que se puede mantener, medir y hacer crecer.', 'Actualmente trabajo en soluciones con inteligencia artificial mientras curso un Máster en Big Data & Business Analytics. Mi forma de aportar combina criterio técnico, comunicación directa y obsesión por quitar fricción.'],
    emailCta: 'Conectar por email', servicesKicker: '/ Cómo aporto',
    services: [
      { number: '01', title: 'Arquitectura Full-Stack', copy: 'Interfaces claras, APIs sólidas y decisiones técnicas que aguantan cuando el producto crece.' },
      { number: '02', title: 'Automatización & IA', copy: 'Procesos repetitivos convertidos en flujos medibles, rápidos y conectados con la operación real.' },
      { number: '03', title: 'Cloud & datos', copy: 'Integraciones, documentación, seguridad y datos preparados para que el equipo pueda avanzar.' },
    ],
    casesKicker: '/ 02 — Casos seleccionados', casesIntro: 'Experiencia real, contada desde el problema hasta el impacto.',
    cases: [
      { index: '01', eyebrow: 'Fintech · Retail', title: 'Crédito comercial a escala', description: 'Desarrollo full-stack de una experiencia pública y otra privada para una tarjeta comercial, con operaciones transaccionales, pagos online y diseño responsive.', resultLabel: 'Resultado', result: 'Más de 2,2 M de clientes potenciales', stackLabel: 'Stack', tools: 'Angular · APIs REST · Webpay · Azure', tone: 'violet' },
      { index: '02', eyebrow: 'Operaciones · Compliance', title: 'De horas a minutos', description: 'Automatización de asignaciones, alertas, consultas y controles operativos para crédito y cobranzas, reduciendo ejecuciones diarias a aproximadamente tres minutos.', resultLabel: 'Resultado', result: '≈ 3 min de ejecución diaria', stackLabel: 'Stack', tools: 'Python · Flask · Node.js · SQL Server', tone: 'lime' },
      { index: '03', eyebrow: 'Cloud · Documentos', title: 'Una biblioteca trazable', description: 'Arquitectura de frontend y APIs para cargar, clasificar, buscar y auditar documentos contractuales firmados en Azure Cloud mediante Microsoft Graph.', resultLabel: 'Resultado', result: '5+ APIs REST implementadas', stackLabel: 'Stack', tools: 'Angular · Python · Graph · Azure', tone: 'blue' },
      { index: '04', eyebrow: 'IA · RR. HH.', title: 'Sistemas con criterio humano', description: 'Plataforma integral para registro horario, vacaciones, permisos y auditoría, con validaciones operativas y un modelo de lenguaje interno para procesar documentación.', resultLabel: 'Resultado', result: 'Producto end-to-end en producción', stackLabel: 'Stack', tools: 'JavaScript · FastAPI · PostgreSQL', tone: 'orange' },
    ],
    statsLabel: 'En números', stats: [{ value: '5+', line1: 'años construyendo', line2: 'software' }, { value: '3+', line1: 'plataformas', line2: 'corporativas' }, { value: '2,2 M', line1: 'clientes potenciales', line2: 'en producto digital' }, { value: '3 min', line1: 'procesos reducidos', line2: 'de horas a minutos' }],
    journeyKicker: '/ 03 — Trayectoria', journeyTitle: 'Una carrera entre sistemas críticos y nuevas posibilidades.', journeyAside: 'De AS/400 a soluciones con IA: la curiosidad técnica solo importa cuando produce resultados.',
    experience: [
      { date: '07.2026 — actualidad', company: 'Carmon Inversores', role: 'Ingeniero de Inteligencia Artificial / Desarrollador Full-Stack', location: 'Madrid, España', copy: 'Construyo productos internos de RR. HH., automatizaciones y soluciones conectadas a documentación y visión 360º.' },
      { date: '06.2022 — 05.2026', company: "Fashion's Park S.A.", role: 'Líder Técnico de Desarrollo TI / Full-Stack Developer', location: 'Santiago, Chile', copy: 'Lideré durante cuatro años el desarrollo de más de tres plataformas corporativas críticas para crédito, cobranzas y gestión documental.' },
      { date: '08.2021 — 12.2021', company: 'Consorcio Credicard C.A.', role: 'Desarrollador de TI', location: 'Caracas, Venezuela', copy: 'Mantuve y mejoré programas internos sobre AS/400, conectando necesidades del negocio con mejoras técnicas concretas.' },
    ],
    toolkitKicker: '/ 04 — Toolkit', toolkitTitle: 'Las herramientas son el medio. El criterio, la diferencia.', contactKicker: '/ 05 — Contacto', contactTitle: '¿Tienes un reto interesante?', contactCopy: 'Estoy disponible para conversar sobre oportunidades Full-Stack en España y proyectos donde el software tenga que hacer algo más que funcionar.', cvShort: 'Descargar CV ↓', footerRole: 'Full-Stack Developer · Madrid', backTop: 'Volver arriba',
  },
  en: {
    nav: { profile: 'Profile', cases: 'Cases', journey: 'Journey', contact: 'Contact' },
    languageLabel: 'Language', linkedin: 'LinkedIn', available: 'Available for new opportunities',
    heroIntro: 'I design and build digital products that turn complex processes into clear, scalable experiences that move the business forward.',
    downloadCv: 'Download CV', talk: "Let's talk", location: 'Madrid, Spain', experienceMeta: '5+ years of experience',
    focus: 'Focus', learning: 'Now learning', portraitCaption: 'Building with purpose',
    marquee: ['Full-Stack', 'Automation', 'Cloud', 'Applied AI', 'Useful software'],
    profileKicker: '/ 01 — Profile', profileTitle: 'Technology works better when it understands people.',
    profileParagraphs: ['I am a systems engineer and Full-Stack Developer. I move between frontend, backend and business to turn real needs into software that can be maintained, measured and grown.', 'I currently build solutions with artificial intelligence while studying a Master’s in Big Data & Business Analytics. My approach combines technical judgment, direct communication and an obsession with removing friction.'],
    emailCta: 'Connect by email', servicesKicker: '/ How I contribute',
    services: [
      { number: '01', title: 'Full-Stack architecture', copy: 'Clear interfaces, resilient APIs and technical decisions that hold up as the product grows.' },
      { number: '02', title: 'Automation & AI', copy: 'Repetitive processes turned into measurable, fast flows connected to real operations.' },
      { number: '03', title: 'Cloud & data', copy: 'Integrations, documentation, security and data prepared so teams can keep moving.' },
    ],
    casesKicker: '/ 02 — Selected cases', casesIntro: 'Real experience, told from the problem to the impact.',
    cases: [
      { index: '01', eyebrow: 'Fintech · Retail', title: 'Commercial credit at scale', description: 'Full-stack development of public and private experiences for a commercial card, including transaction flows, online payments and responsive design.', resultLabel: 'Outcome', result: '2.2M+ potential customers', stackLabel: 'Stack', tools: 'Angular · REST APIs · Webpay · Azure', tone: 'violet' },
      { index: '02', eyebrow: 'Operations · Compliance', title: 'From hours to minutes', description: 'Automated assignments, alerts, queries and operational controls for credit and collections, reducing daily runs to roughly three minutes.', resultLabel: 'Outcome', result: '≈ 3 min daily execution', stackLabel: 'Stack', tools: 'Python · Flask · Node.js · SQL Server', tone: 'lime' },
      { index: '03', eyebrow: 'Cloud · Documents', title: 'A traceable document library', description: 'Frontend and API architecture for uploading, classifying, searching and auditing signed contracts in Azure Cloud through Microsoft Graph.', resultLabel: 'Outcome', result: '5+ REST APIs implemented', stackLabel: 'Stack', tools: 'Angular · Python · Graph · Azure', tone: 'blue' },
      { index: '04', eyebrow: 'AI · HR', title: 'Systems with human judgment', description: 'An end-to-end platform for time tracking, holidays, permissions and audit, with operational validations and an internal language model for documents.', resultLabel: 'Outcome', result: 'Production-ready end-to-end product', stackLabel: 'Stack', tools: 'JavaScript · FastAPI · PostgreSQL', tone: 'orange' },
    ],
    statsLabel: 'By the numbers', stats: [{ value: '5+', line1: 'years building', line2: 'software' }, { value: '3+', line1: 'corporate', line2: 'platforms' }, { value: '2.2M', line1: 'potential', line2: 'customers' }, { value: '3 min', line1: 'processes reduced', line2: 'from hours to minutes' }],
    journeyKicker: '/ 03 — Journey', journeyTitle: 'A career across critical systems and new possibilities.', journeyAside: 'From AS/400 to AI solutions: technical curiosity only matters when it creates visible results.',
    experience: [
      { date: '07.2026 — present', company: 'Carmon Inversores', role: 'AI Engineer / Full-Stack Developer', location: 'Madrid, Spain', copy: 'Building internal HR products, automations and solutions connected to documentation and 360º business visibility.' },
      { date: '06.2022 — 05.2026', company: "Fashion's Park S.A.", role: 'Technical Development Lead / Full-Stack Developer', location: 'Santiago, Chile', copy: 'Led the development of more than three critical corporate platforms for credit, collections and document management over four years.' },
      { date: '08.2021 — 12.2021', company: 'Consorcio Credicard C.A.', role: 'IT Developer', location: 'Caracas, Venezuela', copy: 'Maintained and improved internal AS/400 programs, connecting business needs with concrete technical improvements.' },
    ],
    toolkitKicker: '/ 04 — Toolkit', toolkitTitle: 'Tools are the medium. Judgment is the difference.', contactKicker: '/ 05 — Contact', contactTitle: 'Have an interesting challenge?', contactCopy: 'I am open to Full-Stack opportunities in Spain and projects where software has to do more than simply work.', cvShort: 'Download CV ↓', footerRole: 'Full-Stack Developer · Madrid', backTop: 'Back to top',
  },
};

export const skills = ['Angular', 'TypeScript', 'JavaScript', 'Python', 'FastAPI', 'Flask', 'Node.js', 'PostgreSQL', 'SQL Server', 'Azure', 'Supabase', 'Docker', 'REST APIs', 'Microsoft Graph', 'CI/CD'];
