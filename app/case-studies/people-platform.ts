import type { Metadata } from 'next';
import type { Language } from '../content';
import { pageHref } from '../routes';

type TextSection = { title: string; paragraphs: string[] };
type ListSection = { title: string; intro: string; items: string[] };
type PeoplePlatformCase = {
  title: string;
  summary: string;
  category: string;
  company: string;
  companyLabel: string;
  areaLabel: string;
  roleLabel: string;
  role: string;
  back: string;
  contents: string;
  caseLabel: string;
  confidentiality: string;
  context: TextSection;
  access: ListSection;
  features: ListSection;
  intelligence: TextSection & { principles: string[]; oversight: string };
  technical: ListSection;
  evolution: TextSection;
  impact: ListSection & { closing: string };
  flowLabel: string;
  flow: { title: string; description: string }[];
  closing: string;
  closingLink: string;
};

export const peoplePlatformCase: Record<Language, PeoplePlatformCase> = {
  es: {
    title: 'Una plataforma interna para operaciones de personas',
    summary: 'Gestión de jornada, ausencias y documentación con validaciones automáticas y análisis documental mediante IA privada.',
    category: 'Operaciones de personas y RR. HH.',
    company: 'Empresa privada',
    companyLabel: 'Entorno',
    areaLabel: 'Área',
    roleLabel: 'Mi rol',
    role: 'Full-Stack Developer, trabajando junto con otros dos desarrolladores.',
    back: 'Volver a los proyectos',
    contents: 'En este caso',
    caseLabel: 'Caso 04 · IA privada y RR. HH.',
    confidentiality: 'Caso anonimizado. La representación no contiene nombres, datos de empleados, documentos, interfaces, reglas internas ni detalles de infraestructura reales.',
    context: {
      title: 'Contexto',
      paragraphs: [
        'La empresa utilizaba una plataforma SaaS de gestión de personas y buscaba reemplazarla progresivamente por una solución propia, más adaptada a sus procesos internos y a sus necesidades de evolución.',
        'La nueva plataforma debía centralizar la gestión de empleados, la jornada laboral, vacaciones, permisos, documentación y procesos de aprobación en un producto interno coherente.',
      ],
    },
    access: {
      title: 'Usuarios y permisos',
      intro: 'El sistema ofrecía experiencias y capacidades diferenciadas según el nivel de acceso:',
      items: [
        'Los empleados podían consultar su información, documentación y solicitudes.',
        'El equipo de RR. HH. podía revisar horas, fichas de empleados, aprobaciones y procesos administrativos.',
        'Los usuarios administradores disponían de herramientas generales de configuración y gestión.',
      ],
    },
    features: {
      title: 'Funcionalidades',
      intro: 'La plataforma reunía flujos cotidianos de gestión de personas y documentación:',
      items: [
        'Registro y consulta de jornadas laborales.',
        'Gestión de vacaciones, permisos y procesos de aprobación.',
        'Consulta de resúmenes de horas y fichas de empleados.',
        'Gestión, disponibilidad e histórico de documentación personal.',
        'Procesos de incorporación con invitaciones y carga segura de documentos.',
        'Consulta de estados e históricos de procesos.',
        'Integración con servicios externos relacionados con ausencias o bajas laborales.',
      ],
    },
    intelligence: {
      title: 'Inteligencia artificial y OCR',
      paragraphs: [
        'La plataforma integraba un servicio privado de lenguaje y OCR alojado dentro de la infraestructura interna. El componente ayudaba a analizar la documentación de incorporación y a comprobar si cumplía los requisitos definidos para cada proceso.',
      ],
      principles: [
        'Extracción de información mediante OCR.',
        'Análisis documental asistido por IA.',
        'Validación frente a requisitos previamente definidos.',
        'Procesamiento dentro de infraestructura interna.',
      ],
      oversight: 'La IA apoyaba la validación documental: no tomaba decisiones laborales de forma autónoma.',
    },
    technical: {
      title: 'Trabajo técnico',
      intro: 'Mi participación cubrió desarrollo full-stack, integraciones y colaboración técnica:',
      items: [
        'Frontend con JavaScript sin framework y backend con FastAPI.',
        'Diseño y desarrollo de APIs.',
        'Integración con PostgreSQL mediante Supabase.',
        'Autenticación, permisos y roles.',
        'Flujos para empleados y equipos de RR. HH.',
        'Integración con OCR y con el servicio privado de análisis documental.',
        'Procesos de incorporación, gestión y consulta de documentación.',
        'Integraciones con servicios externos.',
        'Control de versiones con Git dentro de un flujo colaborativo.',
      ],
    },
    evolution: {
      title: 'Evolución del producto',
      paragraphs: [
        'La plataforma se encuentra en producción y continúa evolucionando. El sistema incorpora nuevos flujos, componentes y necesidades del negocio como un producto interno vivo.',
      ],
    },
    impact: {
      title: 'Impacto',
      intro: 'La solución permitió:',
      items: [
        'Reemplazar progresivamente una plataforma externa.',
        'Centralizar procesos internos de RR. HH.',
        'Ofrecer experiencias diferenciadas según el tipo de usuario.',
        'Mejorar el seguimiento de jornadas, ausencias y solicitudes.',
        'Centralizar documentación de empleados.',
        'Facilitar los procesos de incorporación.',
      ],
      closing: 'El resultado es una base propia y extensible para acompañar las operaciones de personas con automatización, control y criterio humano.',
    },
    flowLabel: 'Documentación asistida, decisión humana',
    flow: [
      { title: 'Recibir', description: 'Carga autorizada' },
      { title: 'Extraer', description: 'OCR privado' },
      { title: 'Contrastar', description: 'IA · requisitos' },
      { title: 'Revisar', description: 'Validación humana' },
    ],
    closing: 'La automatización aporta velocidad; el criterio humano conserva la responsabilidad.',
    closingLink: 'Hablemos de mi experiencia',
  },
  en: {
    title: 'An internal platform for people operations',
    summary: 'Working-time, absence and document management with automated validations and private AI-assisted document analysis.',
    category: 'People operations and HR',
    company: 'Private company',
    companyLabel: 'Environment',
    areaLabel: 'Business area',
    roleLabel: 'My role',
    role: 'Full-Stack Developer, working alongside two other developers.',
    back: 'Back to projects',
    contents: 'In this case study',
    caseLabel: 'Case 04 · Private AI and HR',
    confidentiality: 'An anonymized case study. This representation contains no real names, employee data, documents, interfaces, internal rules or infrastructure details.',
    context: {
      title: 'Context',
      paragraphs: [
        'The company used a people-management SaaS platform and wanted to replace it progressively with an in-house solution better suited to its internal processes and evolving needs.',
        'The new platform had to bring employee management, working time, holidays, leave, documentation and approval processes together in one coherent internal product.',
      ],
    },
    access: {
      title: 'Users and permissions',
      intro: 'The system provided different experiences and capabilities according to each level of access:',
      items: [
        'Employees could review their information, documents and requests.',
        'HR teams could review hours, employee records, approvals and administrative processes.',
        'Administrators had access to broader configuration and management tools.',
      ],
    },
    features: {
      title: 'Capabilities',
      intro: 'The platform brought together day-to-day people and document management workflows:',
      items: [
        'Working-time entry and review.',
        'Holiday, leave and approval management.',
        'Working-hour summaries and employee records.',
        'Personal document management, availability and history.',
        'Onboarding flows with invitations and secure document uploads.',
        'Process status and history tracking.',
        'Integration with external services related to absence or medical leave processes.',
      ],
    },
    intelligence: {
      title: 'Artificial intelligence and OCR',
      paragraphs: [
        'The platform integrated a private language and OCR service hosted within the company’s internal infrastructure. It helped analyse onboarding documents and check whether they met the requirements defined for each process.',
      ],
      principles: [
        'Information extraction through OCR.',
        'AI-assisted document analysis.',
        'Validation against predefined requirements.',
        'Processing within internal infrastructure.',
      ],
      oversight: 'AI supported document validation; it did not make employment decisions autonomously.',
    },
    technical: {
      title: 'Technical work',
      intro: 'My contribution covered full-stack development, integrations and technical collaboration:',
      items: [
        'Frontend development with framework-free JavaScript and backend development with FastAPI.',
        'API design and development.',
        'PostgreSQL integration through Supabase.',
        'Authentication, permissions and roles.',
        'Workflows for employees and HR teams.',
        'OCR and private document-analysis service integrations.',
        'Onboarding processes and document management and retrieval.',
        'External service integrations.',
        'Git-based version control within a collaborative workflow.',
      ],
    },
    evolution: {
      title: 'Product evolution',
      paragraphs: [
        'The platform is in production and continues to evolve. New workflows, components and business needs keep being incorporated into this living internal product.',
      ],
    },
    impact: {
      title: 'Impact',
      intro: 'The solution made it possible to:',
      items: [
        'Progressively replace an external platform.',
        'Centralize internal HR processes.',
        'Provide distinct experiences for different user types.',
        'Improve the tracking of working time, absences and requests.',
        'Centralize employee documentation.',
        'Make onboarding processes easier to manage.',
      ],
      closing: 'The result is an extensible in-house foundation for supporting people operations with automation, control and human judgment.',
    },
    flowLabel: 'Assisted documentation, human decision-making',
    flow: [
      { title: 'Receive', description: 'Authorized upload' },
      { title: 'Extract', description: 'Private OCR' },
      { title: 'Compare', description: 'AI · requirements' },
      { title: 'Review', description: 'Human validation' },
    ],
    closing: 'Automation provides speed; human judgment retains responsibility.',
    closingLink: 'Let’s talk about my experience',
  },
};

export function peoplePlatformMetadata(language: Language): Metadata {
  const t = peoplePlatformCase[language];
  const url = pageHref('people', language);
  return {
    title: `${t.title} — Francisco Catalán`,
    description: t.summary,
    alternates: { canonical: url, languages: { 'es-ES': pageHref('people', 'es'), 'en-US': pageHref('people', 'en') } },
    openGraph: { title: t.title, description: t.summary, type: 'article', locale: language === 'es' ? 'es_ES' : 'en_US', url, images: ['/og.png'] },
    twitter: { card: 'summary_large_image', title: t.title, description: t.summary, images: ['/og.png'] },
  };
}
