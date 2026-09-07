import type { Metadata } from 'next';
import type { Language } from '../content';
import { pageHref } from '../routes';

type CaseSection = { title: string; paragraphs: string[] };
type CollectionsCase = {
  title: string; summary: string; category: string; company: string;
  companyLabel: string; areaLabel: string; roleLabel: string; role: string;
  back: string; contents: string; caseLabel: string; confidentiality: string;
  context: CaseSection; responsibility: CaseSection;
  solution: { title: string; configurationIntro: string; configuration: string[]; developmentIntro: string; development: string[] };
  impact: CaseSection; flowLabel: string; flow: { title: string; description: string }[];
  metrics: { value: string; label: string; detail: string }[];
  closing: string; closingLink: string;
};

export const collectionsCase: Record<Language, CollectionsCase> = {
  es: {
    title: 'Plataforma de distribución y seguimiento de carteras de cobranza',
    summary: 'De una operación basada en Excel a una plataforma full-stack con reglas configurables y seguimiento automatizado.',
    category: 'Riesgo y cobranzas', company: 'Fashion’s Park', companyLabel: 'Empresa', areaLabel: 'Área', roleLabel: 'Mi rol',
    role: 'Único desarrollador responsable de la evolución técnica del sistema y de la coordinación con usuarios de negocio.',
    back: 'Volver a los proyectos', contents: 'En este caso', caseLabel: 'Caso 02 · Automatización en producción',
    confidentiality: 'Representación conceptual del proceso. Sin capturas, datos de clientes ni código propietario.',
    context: {
      title: 'Contexto y problema',
      paragraphs: [
        'Fashion’s Park utilizaba archivos Excel con macros y fórmulas complejas para distribuir carteras de clientes en mora y cartera castigada entre distintas empresas externas de cobranza. La distribución debía considerar porcentajes por cantidad de clientes y monto total de deuda, además de reglas específicas para cada tipo de cartera.',
        'El crecimiento del volumen de información hizo que el proceso dejara de ser sostenible. Algunas operaciones podían tardar al menos una semana, fallar durante la ejecución o bloquear los equipos de los usuarios.',
      ],
    },
    responsibility: {
      title: 'Mi responsabilidad',
      paragraphs: [
        'Asumí la evolución de una solución existente con poca documentación. Trabajé directamente con los usuarios de Riesgo y cobranzas para entender las reglas de negocio, reconstruir los procesos y convertirlos en una plataforma más estable y escalable.',
        'Fui el único desarrollador del proyecto y participé en la definición técnica, desarrollo, migración de APIs, procesamiento de datos, mantenimiento y evolución de la solución.',
      ],
    },
    solution: {
      title: 'Solución desarrollada',
      configurationIntro: 'Desarrollé un mantenedor web que permitía configurar:',
      configuration: ['Reglas de distribución de clientes.', 'Porcentajes por cantidad de clientes y monto de deuda.', 'Reglas distintas para mora y cartera castigada.', 'Ofertas dirigidas a grupos específicos de deudores.', 'Parámetros utilizados por los procesos automáticos.'],
      developmentIntro: 'También desarrollé:',
      development: [
        'Tablas, vistas, procedimientos almacenados, jobs y triggers en SQL Server.',
        'Scripts de Python y Pandas para procesos que eran lentos en SQL Server.',
        'APIs inicialmente desarrolladas con Node.js y posteriormente migradas a Flask según los estándares de arquitectura.',
        'Procesos batch diarios, mensuales y trimestrales.',
        'Recepción y validación de archivos CSV mediante SFTP.',
        'Árboles de decisión para procesar resultados de cobranza.',
        'Correos de carteras, alertas, resultados y logs.',
        'Vistas preparadas para el análisis posterior en Power BI.',
      ],
    },
    impact: {
      title: 'Impacto',
      paragraphs: [
        'Los procesos diarios pasaron a ejecutarse automáticamente en aproximadamente tres minutos. Los procesos mensuales y trimestrales se completaban durante la ventana nocturna, normalmente en menos de treinta minutos, dejando la información preparada al inicio de la jornada laboral.',
        'La solución se utilizó en producción y continuó evolucionando mediante nuevas versiones y reglas de negocio. El proyecto sustituyó una operación manual y frágil por un sistema parametrizable, monitorizable y preparado para trabajar con grandes volúmenes de información.',
      ],
    },
    flowLabel: 'De la regla al seguimiento',
    flow: [
      { title: 'Configurar', description: 'Reglas y porcentajes' },
      { title: 'Distribuir', description: 'Carteras y empresas' },
      { title: 'Procesar', description: 'CSV · SFTP · validación' },
      { title: 'Dar seguimiento', description: 'Alertas, logs y análisis' },
    ],
    metrics: [
      { value: '≈3 min', label: 'Ejecución diaria', detail: 'Procesos automatizados' },
      { value: '<30 min', label: 'Normalmente, en ventana nocturna', detail: 'Procesos mensuales y trimestrales' },
      { value: 'En producción', label: 'Evolución continua', detail: 'Nuevas versiones y reglas de negocio' },
    ],
    closing: 'El valor no estaba solo en acelerar el proceso, sino en hacerlo sostenible.',
    closingLink: 'Hablemos de mi experiencia',
  },
  en: {
    title: 'Collections portfolio allocation and monitoring platform',
    summary: 'From an Excel-based operation to a full-stack platform with configurable rules and automated follow-up.',
    category: 'Risk and collections', company: 'Fashion’s Park', companyLabel: 'Company', areaLabel: 'Business area', roleLabel: 'My role',
    role: 'Sole developer responsible for the system’s technical evolution and coordination with business users.',
    back: 'Back to projects', contents: 'In this case study', caseLabel: 'Case 02 · Automation in production',
    confidentiality: 'Conceptual representation of the process. No screenshots, customer data or proprietary code.',
    context: {
      title: 'Context and challenge',
      paragraphs: [
        'Fashion’s Park used Excel files with macros and complex formulas to allocate overdue and written-off debt portfolios among external collection agencies. Allocation had to account for percentages based on both customer count and total debt amount, as well as specific rules for each portfolio type.',
        'As data volumes grew, the process became unsustainable. Some operations could take at least a week, fail during execution or freeze users’ computers.',
      ],
    },
    responsibility: {
      title: 'My responsibility',
      paragraphs: [
        'I took over the evolution of an existing solution with limited documentation. I worked directly with Risk and Collections users to understand the business rules, reconstruct the processes and turn the solution into a more stable, scalable platform.',
        'As the project’s sole developer, I was involved in technical design, development, API migration, data processing, maintenance and the ongoing evolution of the solution.',
      ],
    },
    solution: {
      title: 'The solution',
      configurationIntro: 'I developed a web-based administration interface to configure:',
      configuration: ['Customer allocation rules.', 'Percentages based on customer count and debt amount.', 'Separate rules for overdue and written-off debt portfolios.', 'Offers targeting specific groups of debtors.', 'Parameters used by automated processes.'],
      developmentIntro: 'I also developed:',
      development: [
        'Tables, views, stored procedures, jobs and triggers in SQL Server.',
        'Python and Pandas scripts for processes that were slow in SQL Server.',
        'APIs initially built with Node.js and later migrated to Flask to meet architectural standards.',
        'Daily, monthly and quarterly batch processes.',
        'CSV file reception and validation over SFTP.',
        'Decision trees to process collection results.',
        'Emails covering portfolio allocations, alerts, results and logs.',
        'Views prepared for subsequent analysis in Power BI.',
      ],
    },
    impact: {
      title: 'Impact',
      paragraphs: [
        'Daily processes were automated and ran in approximately three minutes. Monthly and quarterly processes completed within the overnight processing window, usually in under thirty minutes, with information ready at the start of the working day.',
        'The solution was used in production and continued to evolve through new releases and business rules. It replaced a fragile, manual operation with a configurable, monitorable system designed to handle large volumes of information.',
      ],
    },
    flowLabel: 'From rules to follow-up',
    flow: [
      { title: 'Configure', description: 'Rules and percentages' },
      { title: 'Allocate', description: 'Portfolios and agencies' },
      { title: 'Process', description: 'CSV · SFTP · validation' },
      { title: 'Monitor', description: 'Alerts, logs and analysis' },
    ],
    metrics: [
      { value: '≈3 min', label: 'Daily execution', detail: 'Automated processes' },
      { value: '<30 min', label: 'Usually, within the overnight window', detail: 'Monthly and quarterly processes' },
      { value: 'In production', label: 'Continuous evolution', detail: 'New releases and business rules' },
    ],
    closing: 'The value was not just in making the process faster, but in making it sustainable.',
    closingLink: 'Let’s talk about my experience',
  },
};

export function collectionsMetadata(language: Language): Metadata {
  const t = collectionsCase[language];
  const url = pageHref('collections', language);
  return {
    title: `${t.title} — Francisco Catalán`,
    description: t.summary,
    alternates: { canonical: url, languages: { 'es-ES': pageHref('collections', 'es'), 'en-US': pageHref('collections', 'en') } },
    openGraph: { title: t.title, description: t.summary, type: 'article', locale: language === 'es' ? 'es_ES' : 'en_US', url, images: ['/og.png'] },
    twitter: { card: 'summary_large_image', title: t.title, description: t.summary, images: ['/og.png'] },
  };
}
