export type Language = 'es' | 'en';

export type Tool = { name: string; category: string };
export type Capability = {
  number: string;
  title: string;
  copy: string;
  flow: string[];
  tools: string[];
  microcopy: string;
  accent: 'violet' | 'lime' | 'blue';
  visualType: 'architecture' | 'automation' | 'cloud';
  practicalCopy: string;
};

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
  servicesIntro: string;
  practiceLabel: string;
  services: Capability[];
  casesKicker: string;
  casesIntro: string;
  cases: { index: string; eyebrow: string; title: string; description: string; resultLabel: string; result: string; stackLabel: string; tools: string; tone: string }[];
  statsLabel: string;
  stats: { value: string; line1: string; line2: string }[];
  journeyKicker: string;
  journeyTitle: string;
  journeyAside: string;
  experience: { date: string; company: string; role: string; location: string; copy: string; current?: boolean }[];
  toolkitKicker: string;
  toolkitTitle: string;
  toolkitHint: string;
  toolkitTools: Tool[];
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
    focus: 'Focus', learning: 'Actualmente aprendiendo', portraitCaption: 'Construir con propósito',
    marquee: ['Full-Stack', 'Automatización', 'Cloud', 'IA aplicada', 'Software útil'],
    profileKicker: '/ 01 — Perfil', profileTitle: 'La tecnología funciona mejor cuando entiende a las personas.',
    profileParagraphs: ['Soy ingeniero en sistemas y desarrollador Full-Stack. Me muevo entre frontend, backend y negocio para convertir necesidades reales en software que se puede mantener, medir y hacer crecer.', 'Actualmente trabajo en soluciones con inteligencia artificial mientras curso un Máster en Big Data & Business Analytics. Mi forma de aportar combina criterio técnico, comunicación directa y obsesión por quitar fricción.'],
    emailCta: 'Conectar por email', servicesKicker: '/ Cómo aporto',
    servicesIntro: 'Convierto necesidades de negocio en sistemas que pueden medirse, mantenerse y evolucionar.',
    practiceLabel: 'En la práctica',
    services: [
      { number: '01', title: 'Arquitectura Full-Stack', copy: 'Conecto interfaces, APIs, datos y despliegue para construir productos que funcionen hoy y puedan crecer mañana.', flow: ['Interfaz', 'API', 'Datos', 'Cloud'], tools: ['Angular', 'JavaScript', 'APIs REST', 'Python', 'SQL Server'], microcopy: 'De la experiencia del usuario a la operación real.', accent: 'violet', visualType: 'architecture', practicalCopy: 'Diseño productos completos, desde la interfaz hasta los procesos que los mantienen funcionando en producción.' },
      { number: '02', title: 'Automatización & IA', copy: 'Transformo procesos manuales y documentación compleja en flujos medibles mediante reglas, automatización, OCR e IA aplicada.', flow: ['Entrada', 'Reglas', 'Procesamiento', 'Resultado'], tools: ['Python', 'FastAPI', 'Flask', 'Pandas', 'OCR', 'IA privada'], microcopy: 'Menos fricción. Más velocidad. Decisiones más claras.', accent: 'lime', visualType: 'automation', practicalCopy: 'Convierto tareas repetitivas y documentación compleja en procesos más rápidos, trazables y medibles.' },
      { number: '03', title: 'Cloud & datos', copy: 'Diseño integraciones y estructuras de datos seguras, trazables y preparadas para operar con grandes volúmenes.', flow: ['Documentos', 'APIs', 'Seguridad', 'Trazabilidad'], tools: ['Azure', 'Microsoft Graph', 'OneDrive', 'PostgreSQL', 'SQL Server'], microcopy: 'Datos conectados para que el equipo pueda avanzar.', accent: 'blue', visualType: 'cloud', practicalCopy: 'Conecto sistemas, documentos y datos para que puedan operar con seguridad y crecer sin perder control.' },
    ],
    casesKicker: '/ 02 — Casos seleccionados', casesIntro: 'Experiencia real, contada desde el problema hasta el impacto.',
    cases: [
      { index: '01', eyebrow: 'Fintech · Retail', title: 'Crédito comercial a escala', description: 'Ecosistema web público y privado para tarjetahabientes, con pagos online, movimientos, beneficios, servicios financieros e integraciones mediante APIs.', resultLabel: 'Resultado', result: 'Más de 2,2M de tarjetahabientes', stackLabel: 'Stack', tools: 'Angular · Flask · Webpay · SQL Server · Azure', tone: 'violet' },
      { index: '02', eyebrow: 'Riesgo · Cobranzas', title: 'Distribución de carteras a escala', description: 'Plataforma full-stack para parametrizar reglas, distribuir carteras de clientes en mora y cartera castigada, procesar resultados de empresas externas y automatizar el seguimiento operativo.', resultLabel: 'Resultado', result: 'Procesos diarios automatizados en ≈3 min', stackLabel: 'Stack', tools: 'Angular · Python · Flask · SQL Server · SFTP', tone: 'lime' },
      { index: '03', eyebrow: 'Cloud · Documentos', title: 'Una biblioteca trazable', description: 'Plataforma para recuperar, almacenar y consultar documentos firmados, audios y vouchers mediante OneDrive, APIs y procesos nocturnos.', resultLabel: 'Resultado', result: 'Documentos consultables y trazables en producción', stackLabel: 'Stack', tools: 'Angular · Flask · Graph · OneDrive · SQL Server', tone: 'blue' },
      { index: '04', eyebrow: 'IA · RR. HH.', title: 'Sistemas con criterio humano', description: 'Plataforma interna para gestionar jornada, ausencias y documentación de empleados, con validaciones automáticas y análisis documental mediante IA privada.', resultLabel: 'Resultado', result: 'Plataforma en producción y evolución continua', stackLabel: 'Stack', tools: 'JavaScript · FastAPI · PostgreSQL · OCR · IA privada', tone: 'orange' },
    ],
    statsLabel: 'En síntesis', stats: [{ value: '5+', line1: 'años creando', line2: 'software de negocio' }, { value: '2,2 M', line1: 'clientes potenciales', line2: 'en producto digital' }, { value: 'End-to-end', line1: 'de arquitectura', line2: 'a producción' }, { value: 'IA + Cloud', line1: 'foco técnico', line2: 'actual' }],
    journeyKicker: '/ 03 — Trayectoria', journeyTitle: 'Una carrera entre sistemas críticos y nuevas posibilidades.', journeyAside: 'De AS/400 a soluciones con IA: la curiosidad técnica solo importa cuando produce resultados.',
    experience: [
      { date: '07.2026 — actualidad', company: 'Carmon Inversores', role: 'Ingeniero de Inteligencia Artificial / Desarrollador Full-Stack', location: 'Madrid, España', copy: 'Construyo productos internos de RR. HH., automatizaciones y soluciones conectadas a documentación y visión 360º.', current: true },
      { date: '06.2022 — 05.2026', company: "Fashion's Park S.A.", role: 'Líder Técnico de Desarrollo TI / Full-Stack Developer', location: 'Santiago, Chile', copy: 'Lideré durante cuatro años el desarrollo de más de tres plataformas corporativas críticas para crédito, cobranzas y gestión documental.' },
      { date: '08.2021 — 12.2021', company: 'Consorcio Credicard C.A.', role: 'Desarrollador de TI', location: 'Caracas, Venezuela', copy: 'Mantuve y mejoré programas internos sobre AS/400, conectando necesidades del negocio con mejoras técnicas concretas.' },
      { date: '11.2019 — 01.2021', company: 'CANTV', role: 'Desarrollador de Software', location: 'Venezuela', copy: 'Participé en sistemas de información para operaciones y en una base de datos MySQL para actualizar información de centrales. También desarrollé interfaces web con JavaScript, Bootstrap y Tailwind CSS.' },
    ],
    toolkitKicker: '/ 04 — Toolkit', toolkitTitle: 'Las herramientas son el medio. El criterio, la diferencia.', toolkitHint: 'Explora el stack · mueve el cursor', toolkitTools: [
      { name: 'Angular', category: 'Frontend' }, { name: 'TypeScript', category: 'Frontend' }, { name: 'JavaScript', category: 'Frontend' }, { name: 'Python', category: 'Backend' }, { name: 'FastAPI', category: 'Backend' }, { name: 'Flask', category: 'Backend' }, { name: 'Node.js', category: 'Backend' }, { name: 'PostgreSQL', category: 'Data' }, { name: 'SQL Server', category: 'Data' }, { name: 'Azure', category: 'Cloud' }, { name: 'Supabase', category: 'Data' }, { name: 'Docker', category: 'Cloud' }, { name: 'REST APIs', category: 'Architecture' }, { name: 'Microsoft Graph', category: 'Cloud' }, { name: 'CI/CD', category: 'Delivery' },
    ], contactKicker: '/ 05 — Contacto', contactTitle: '¿Tienes un reto interesante?', contactCopy: 'Estoy disponible para conversar sobre oportunidades Full-Stack en España y proyectos donde el software tenga que hacer algo más que funcionar.', cvShort: 'Descargar CV ↓', footerRole: 'Full-Stack Developer · Madrid', backTop: 'Volver arriba',
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
    servicesIntro: 'I turn business needs into systems that can be measured, maintained and evolved.',
    practiceLabel: 'In practice',
    services: [
      { number: '01', title: 'Full-Stack architecture', copy: 'I connect interfaces, APIs, data and deployment to build products that work today and can grow tomorrow.', flow: ['Interface', 'API', 'Data', 'Cloud'], tools: ['Angular', 'JavaScript', 'REST APIs', 'Python', 'SQL Server'], microcopy: 'From the user experience to real-world operations.', accent: 'violet', visualType: 'architecture', practicalCopy: 'I design complete products, from the interface to the processes that keep them running in production.' },
      { number: '02', title: 'Automation & AI', copy: 'I turn manual processes and complex documentation into measurable workflows using rules, automation, OCR and applied AI.', flow: ['Input', 'Rules', 'Processing', 'Outcome'], tools: ['Python', 'FastAPI', 'Flask', 'Pandas', 'OCR', 'Private AI'], microcopy: 'Less friction. More speed. Clearer decisions.', accent: 'lime', visualType: 'automation', practicalCopy: 'I turn repetitive tasks and complex documentation into faster, traceable and measurable processes.' },
      { number: '03', title: 'Cloud & data', copy: 'I design secure, traceable data structures and integrations prepared to operate at scale.', flow: ['Documents', 'APIs', 'Security', 'Traceability'], tools: ['Azure', 'Microsoft Graph', 'OneDrive', 'PostgreSQL', 'SQL Server'], microcopy: 'Connected data that helps teams move forward.', accent: 'blue', visualType: 'cloud', practicalCopy: 'I connect systems, documents and data so they can operate securely and scale without losing control.' },
    ],
    casesKicker: '/ 02 — Selected cases', casesIntro: 'Real experience, told from the problem to the impact.',
    cases: [
      { index: '01', eyebrow: 'Fintech · Retail', title: 'Commercial credit at scale', description: 'A public and private web ecosystem for cardholders, covering online payments, transactions, benefits, financial services and API integrations.', resultLabel: 'Outcome', result: 'More than 2.2M cardholders', stackLabel: 'Stack', tools: 'Angular · Flask · Webpay · SQL Server · Azure', tone: 'violet' },
      { index: '02', eyebrow: 'Risk · Collections', title: 'Collections portfolio allocation at scale', description: 'A full-stack platform for configuring rules, allocating overdue and written-off debt portfolios, processing external collection agencies’ results and automating operational follow-up.', resultLabel: 'Outcome', result: 'Daily processes automated in ≈3 min', stackLabel: 'Stack', tools: 'Angular · Python · Flask · SQL Server · SFTP', tone: 'lime' },
      { index: '03', eyebrow: 'Cloud · Documents', title: 'A traceable document library', description: 'A platform for recovering, storing and retrieving signed documents, call recordings and vouchers through OneDrive, APIs and overnight processes.', resultLabel: 'Outcome', result: 'Searchable, traceable documents in production', stackLabel: 'Stack', tools: 'Angular · Flask · Graph · OneDrive · SQL Server', tone: 'blue' },
      { index: '04', eyebrow: 'AI · HR', title: 'Systems with human judgment', description: 'An internal platform for managing working hours, absences and employee documents, with automated validations and private AI-assisted document analysis.', resultLabel: 'Outcome', result: 'Live platform under continuous development', stackLabel: 'Stack', tools: 'JavaScript · FastAPI · PostgreSQL · OCR · Private AI', tone: 'orange' },
    ],
    statsLabel: 'At a glance', stats: [{ value: '5+', line1: 'years building', line2: 'business software' }, { value: '2.2M', line1: 'potential customers', line2: 'across digital products' }, { value: 'End-to-end', line1: 'from architecture', line2: 'to production' }, { value: 'AI + Cloud', line1: 'current technical', line2: 'focus' }],
    journeyKicker: '/ 03 — Journey', journeyTitle: 'A career across critical systems and new possibilities.', journeyAside: 'From AS/400 to AI solutions: technical curiosity only matters when it creates visible results.',
    experience: [
      { date: '07.2026 — present', company: 'Carmon Inversores', role: 'AI Engineer / Full-Stack Developer', location: 'Madrid, Spain', copy: 'Building internal HR products, automations and solutions connected to documentation and 360º business visibility.', current: true },
      { date: '06.2022 — 05.2026', company: "Fashion's Park S.A.", role: 'Technical Development Lead / Full-Stack Developer', location: 'Santiago, Chile', copy: 'Led the development of more than three critical corporate platforms for credit, collections and document management over four years.' },
      { date: '08.2021 — 12.2021', company: 'Consorcio Credicard C.A.', role: 'IT Developer', location: 'Caracas, Venezuela', copy: 'Maintained and improved internal AS/400 programs, connecting business needs with concrete technical improvements.' },
      { date: '11.2019 — 01.2021', company: 'CANTV', role: 'Software Developer', location: 'Venezuela', copy: 'Contributed to operational information systems and a MySQL database for updating central-office data. Also developed web interfaces with JavaScript, Bootstrap and Tailwind CSS.' },
    ],
    toolkitKicker: '/ 04 — Toolkit', toolkitTitle: 'Tools are the medium. Judgment is the difference.', toolkitHint: 'Explore the stack · move your cursor', toolkitTools: [
      { name: 'Angular', category: 'Frontend' }, { name: 'TypeScript', category: 'Frontend' }, { name: 'JavaScript', category: 'Frontend' }, { name: 'Python', category: 'Backend' }, { name: 'FastAPI', category: 'Backend' }, { name: 'Flask', category: 'Backend' }, { name: 'Node.js', category: 'Backend' }, { name: 'PostgreSQL', category: 'Data' }, { name: 'SQL Server', category: 'Data' }, { name: 'Azure', category: 'Cloud' }, { name: 'Supabase', category: 'Data' }, { name: 'Docker', category: 'Cloud' }, { name: 'REST APIs', category: 'Architecture' }, { name: 'Microsoft Graph', category: 'Cloud' }, { name: 'CI/CD', category: 'Delivery' },
    ], contactKicker: '/ 05 — Contact', contactTitle: 'Have an interesting challenge?', contactCopy: 'I am open to Full-Stack opportunities in Spain and projects where software has to do more than simply work.', cvShort: 'Download CV ↓', footerRole: 'Full-Stack Developer · Madrid', backTop: 'Back to top',
  },
};
