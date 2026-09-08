import type { Metadata } from 'next';
import type { Language } from '../content';
import { pageHref } from '../routes';

type TextSection = { title: string; paragraphs: string[] };
type DocumentLibraryCase = {
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
  solution: TextSection & { apiIntro: string; apis: string[]; relatedLabel: string; related: string };
  technical: { title: string; intro: string; responsibilities: string[] };
  impact: { title: string; intro: string; outcomes: string[]; closing: string };
  flowLabel: string;
  flow: { title: string; description: string }[];
  closing: string;
  closingLink: string;
};

export const documentLibraryCase: Record<Language, DocumentLibraryCase> = {
  es: {
    title: 'Biblioteca documental trazable en la nube',
    summary: 'Recuperación histórica, almacenamiento diario y consulta autorizada de documentación operativa mediante OneDrive, APIs y procesos monitorizados.',
    category: 'Operaciones de tarjetas de crédito',
    company: 'Fashion’s Park',
    companyLabel: 'Empresa',
    areaLabel: 'Área',
    roleLabel: 'Mi rol',
    role: 'Responsable del desarrollo full-stack, las integraciones, los procesos de datos y la evolución técnica de la solución.',
    back: 'Volver a los proyectos',
    contents: 'En este caso',
    caseLabel: 'Caso 03 · Cloud y documentos',
    confidentiality: 'Representación conceptual. No incluye documentos, audios, identificadores, proveedores ni interfaces internas reales.',
    context: {
      title: 'Contexto y problema',
      paragraphs: [
        'Los documentos se almacenaban originalmente en infraestructura local. Después de un incidente de infraestructura, la empresa necesitó recuperar documentos históricos y construir una solución más segura para almacenar y consultar la documentación que se generaba diariamente.',
        'Los documentos incluían contratos firmados, autorizaciones para consultar cuentas, documentos de originación de tarjetas, seguros, audios de llamadas en los que el cliente confirmaba su aceptación y vouchers de ventas o avances realizados con la tarjeta comercial.',
        'La solución debía permitir recuperar información histórica desde APIs de proveedores y, al mismo tiempo, almacenar en la nube los nuevos documentos que se generaban diariamente.',
      ],
    },
    solution: {
      title: 'Solución',
      paragraphs: [
        'La documentación se centralizó en OneDrive mediante una integración con Microsoft Graph. Los documentos se incorporaban mediante procesos batch diarios y quedaban disponibles para consulta, seguimiento y auditoría.',
        'También desarrollé una aplicación web administrativa para el equipo de call center. Los usuarios podían buscar la documentación asociada a un cliente mediante un identificador, consultar los documentos por fecha y aplicar filtros. La plataforma también permitía consultar audios de llamadas y otros respaldos relacionados con la operación de tarjetas.',
      ],
      apiIntro: 'La solución incluyó APIs para:',
      apis: [
        'Integrar Microsoft Graph y OneDrive.',
        'Recuperar documentos históricos desde proveedores.',
        'Centralizar documentos y su trazabilidad.',
        'Exponer documentación a otros canales autorizados de la empresa.',
      ],
      relatedLabel: 'Proyecto relacionado',
      related: 'La plataforma expuso APIs para que otros canales autorizados, como la aplicación y el sitio web de la tarjeta, pudieran consultar documentación. Esos canales constituyen un proyecto independiente de este caso.',
    },
    technical: {
      title: 'Trabajo técnico',
      intro: 'Mi responsabilidad cubrió la interfaz, las integraciones, el almacenamiento, la seguridad y la operación de los procesos:',
      responsibilities: [
        'Desarrollo frontend con Angular.',
        'Desarrollo de APIs con Flask y Python.',
        'Integración con Microsoft Graph.',
        'Almacenamiento y organización documental en OneDrive.',
        'Autenticación mediante Active Directory.',
        'Control de acceso y permisos.',
        'Diseño y mantenimiento de bases de datos SQL Server.',
        'Scripts para procesos nocturnos.',
        'Integración con Airflow para monitorizar los procesos.',
        'Recuperación y procesamiento de históricos.',
        'Desarrollo de consultas, filtros y vistas para el área operativa.',
        'Integración con la aplicación y el sitio web de la tarjeta cuando correspondía.',
      ],
    },
    impact: {
      title: 'Impacto',
      intro: 'La solución operó en producción y permitió:',
      outcomes: [
        'Recuperar documentación histórica mediante APIs de proveedores.',
        'Centralizar documentos en OneDrive.',
        'Mantener disponibles los nuevos documentos generados diariamente.',
        'Facilitar la consulta del historial por parte del call center.',
        'Mejorar la trazabilidad y el control de la documentación.',
        'Reducir búsquedas manuales.',
        'Preparar la información para otros canales digitales.',
        'Operar con procesos nocturnos monitorizados mediante Airflow.',
      ],
      closing: 'El resultado fue una biblioteca documental consultable, trazable y preparada para acompañar la operación diaria.',
    },
    flowLabel: 'Del histórico a la consulta autorizada',
    flow: [
      { title: 'Recuperar', description: 'APIs de proveedores' },
      { title: 'Procesar', description: 'Batch · Python · Airflow' },
      { title: 'Centralizar', description: 'Graph · OneDrive' },
      { title: 'Consultar', description: 'Angular · acceso autorizado' },
    ],
    closing: 'La nube aportó almacenamiento; la trazabilidad convirtió los documentos en una herramienta operativa.',
    closingLink: 'Hablemos de mi experiencia',
  },
  en: {
    title: 'A traceable cloud document library',
    summary: 'Historical recovery, daily storage and authorized retrieval of operational documents through OneDrive, APIs and monitored processes.',
    category: 'Credit card operations',
    company: 'Fashion’s Park',
    companyLabel: 'Company',
    areaLabel: 'Business area',
    roleLabel: 'My role',
    role: 'Responsible for full-stack development, integrations, data processes and the technical evolution of the solution.',
    back: 'Back to projects',
    contents: 'In this case study',
    caseLabel: 'Case 03 · Cloud and documents',
    confidentiality: 'Conceptual representation. It contains no real documents, recordings, identifiers, providers or internal interfaces.',
    context: {
      title: 'Context and challenge',
      paragraphs: [
        'Documents were originally stored on local infrastructure. Following an infrastructure incident, the company needed to recover historical documents and build a safer solution for storing and retrieving the documentation generated each day.',
        'The materials included signed contracts, authorizations to access account information, card origination documents, insurance records, call recordings in which customers confirmed acceptance, and vouchers for purchases or cash advances made with the commercial card.',
        'The solution had to recover historical information from provider APIs while also storing newly generated documents in the cloud every day.',
      ],
    },
    solution: {
      title: 'The solution',
      paragraphs: [
        'Documentation was centralized in OneDrive through a Microsoft Graph integration. Daily batch processes ingested the documents and made them available for retrieval, monitoring and audit.',
        'I also developed an administrative web application for the call center team. Users could search for documents associated with a customer through an identifier, browse documents by date and apply filters. The platform also supported authorized retrieval of call recordings and other evidence related to card operations.',
      ],
      apiIntro: 'The solution included APIs to:',
      apis: [
        'Integrate Microsoft Graph and OneDrive.',
        'Recover historical documents from providers.',
        'Centralize documents and their traceability.',
        'Expose documentation to other authorized company channels.',
      ],
      relatedLabel: 'Related project',
      related: 'The platform exposed APIs so that other authorized channels, such as the card application and public website, could retrieve documentation. Those channels are a separate project from this case study.',
    },
    technical: {
      title: 'Technical work',
      intro: 'My responsibility covered the interface, integrations, storage, security and process operations:',
      responsibilities: [
        'Frontend development with Angular.',
        'API development with Flask and Python.',
        'Integration with Microsoft Graph.',
        'Document storage and organization in OneDrive.',
        'Authentication through Active Directory.',
        'Access control and permissions.',
        'SQL Server database design and maintenance.',
        'Scripts for overnight processes.',
        'Airflow integration for process monitoring.',
        'Historical data recovery and processing.',
        'Queries, filters and views for the operations team.',
        'Integration with the card application and website when appropriate.',
      ],
    },
    impact: {
      title: 'Impact',
      intro: 'The solution ran in production and made it possible to:',
      outcomes: [
        'Recover historical documentation through provider APIs.',
        'Centralize documents in OneDrive.',
        'Keep newly generated daily documents available.',
        'Make historical records easier for the call center to retrieve.',
        'Improve document traceability and control.',
        'Reduce manual searches.',
        'Prepare information for other digital channels.',
        'Run overnight processes monitored through Airflow.',
      ],
      closing: 'The result was a searchable, traceable document library designed to support daily operations.',
    },
    flowLabel: 'From historical recovery to authorized access',
    flow: [
      { title: 'Recover', description: 'Provider APIs' },
      { title: 'Process', description: 'Batch · Python · Airflow' },
      { title: 'Centralize', description: 'Graph · OneDrive' },
      { title: 'Retrieve', description: 'Angular · authorized access' },
    ],
    closing: 'The cloud provided storage; traceability turned documents into an operational tool.',
    closingLink: 'Let’s talk about my experience',
  },
};

export function documentLibraryMetadata(language: Language): Metadata {
  const t = documentLibraryCase[language];
  const url = pageHref('documents', language);
  return {
    title: `${t.title} — Francisco Catalán`,
    description: t.summary,
    alternates: { canonical: url, languages: { 'es-ES': pageHref('documents', 'es'), 'en-US': pageHref('documents', 'en') } },
    openGraph: { title: t.title, description: t.summary, type: 'article', locale: language === 'es' ? 'es_ES' : 'en_US', url, images: ['/og.png'] },
    twitter: { card: 'summary_large_image', title: t.title, description: t.summary, images: ['/og.png'] },
  };
}
