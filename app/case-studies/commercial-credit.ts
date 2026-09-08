import type { Metadata } from 'next';
import type { Language } from '../content';
import { pageHref } from '../routes';

type TextSection = { title: string; paragraphs: string[] };
type CommercialCreditCase = {
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
  externalSite: string;
  confidentiality: string;
  context: TextSection;
  experience: { title: string; publicTitle: string; publicIntro: string; publicFeatures: string[]; stores: string; privateTitle: string; privateIntro: string; privateFeatures: string[]; benefits: string };
  integrations: { title: string; intro: string; items: string[]; relatedLabel: string; related: string };
  backoffice: { title: string; paragraphs: string[]; intro: string; items: string[] };
  technical: { title: string; intro: string; responsibilities: string[] };
  evolution: TextSection & { uxTitle: string; ux: string };
  impact: { title: string; intro: string; outcomes: string[]; scale: string; scaleLabel: string };
  flowLabel: string;
  flow: { title: string; description: string }[];
  closing: string;
  closingLink: string;
};

export const commercialCreditCase: Record<Language, CommercialCreditCase> = {
  es: {
    title: 'Crédito comercial a escala',
    summary: 'Una plataforma web para conectar clientes, pagos y servicios financieros.',
    category: 'Producto digital · Tarjeta comercial',
    company: 'Fashion’s Park',
    companyLabel: 'Empresa',
    areaLabel: 'Área',
    roleLabel: 'Mi rol',
    role: 'Full-Stack Developer y posteriormente Technical Lead.',
    back: 'Volver a los proyectos',
    contents: 'En este caso',
    caseLabel: 'Caso 01 · Fintech y retail',
    externalSite: 'Visitar sitio público',
    confidentiality: 'Representación conceptual. No contiene interfaces privadas, datos de clientes, reglas internas ni material propietario.',
    context: {
      title: 'Contexto',
      paragraphs: [
        'Fashion’s Park necesitaba una plataforma digital para que sus clientes pudieran informarse sobre la tarjeta comercial, conocer sus beneficios, consultar su información financiera y realizar pagos online.',
        'El proyecto incluía una experiencia pública para cualquier visitante y un área privada destinada a clientes tarjetahabientes.',
        'La solución se desarrolló sin recibir previamente un diseño completo de UX/UI. El equipo trabajó directamente con el negocio para convertir sus necesidades en una experiencia visual clara, funcional y responsive.',
      ],
    },
    experience: {
      title: 'Experiencia pública y privada',
      publicTitle: 'Sitio público',
      publicIntro: 'La experiencia pública reunía información, beneficios, pagos y puntos de atención para cualquier visitante:',
      publicFeatures: [
        'Información básica de la tarjeta, beneficios y servicios.',
        'Ofertas, promociones e invitación a solicitar la tarjeta.',
        'Invitación a descargar la aplicación.',
        'Pago online de cuotas o deudas.',
        'Información de tiendas, mapa con geolocalización y búsqueda de la tienda más cercana.',
      ],
      stores: 'En el momento del proyecto se mostraban aproximadamente 111 tiendas disponibles en Chile.',
      privateTitle: 'Área privada para tarjetahabientes',
      privateIntro: 'Una vez autenticado, el cliente podía consultar y gestionar información de su tarjeta:',
      privateFeatures: [
        'Saldo, cupo utilizado, cupo disponible y próximo pago.',
        'Estado de la tarjeta y detalle del saldo.',
        'Movimientos de los últimos seis meses y descarga en PDF.',
        'Cupones y beneficios según el segmento del cliente.',
        'Estado de solicitudes o procesos de aprobación.',
      ],
      benefits: 'Los beneficios podían variar entre categorías como Oro, Plata o Bronce, mediante una clasificación definida por el negocio según el comportamiento y las condiciones de la tarjeta. Las reglas internas no se exponen en este caso.',
    },
    integrations: {
      title: 'APIs e integraciones',
      intro: 'Desarrollé y mantuve APIs para conectar la web, los servicios financieros y distintas áreas del negocio:',
      items: [
        'Integración con Webpay para pagos online.',
        'Integraciones con BancoEstado y Banco Itaú, incluyendo avances de efectivo y transferencias a cuentas bancarias.',
        'Consulta autorizada de documentos firmados y audios asociados al cliente.',
        'Integración con el sistema de beneficios y clasificación de clientes según sus condiciones.',
        'Consulta del estado de aprobación de la tarjeta.',
        'Integración con el portal interno de backoffice.',
        'Actualización de imágenes, textos y contenidos publicados en la web y otros canales.',
        'Integración externa de validación de identidad mediante documento y reconocimiento facial.',
        'Consulta y revocación de permisos otorgados por el cliente.',
        'APIs reutilizadas por la web y otros canales digitales.',
      ],
      relatedLabel: 'Integraciones relacionadas',
      related: 'Algunas APIs permitían consultar documentos y audios gestionados por la biblioteca documental del caso 03. Otras también eran consumidas por la aplicación móvil; esa aplicación no fue desarrollada por mí.',
    },
    backoffice: {
      title: 'Backoffice y contenidos',
      paragraphs: ['También desarrollé APIs y funcionalidades para un portal interno de backoffice, separando la gestión editorial del código de la aplicación.'],
      intro: 'El equipo autorizado podía:',
      items: [
        'Cargar y reemplazar imágenes promocionales.',
        'Actualizar textos y contenidos de distintos componentes.',
        'Modificar información sin desplegar cambios de código.',
        'Reflejar actualizaciones automáticamente en la web y otros canales conectados.',
      ],
    },
    technical: {
      title: 'Trabajo técnico',
      intro: 'Mi trabajo abarcó frontend, backend, integraciones, infraestructura y entrega continua:',
      responsibilities: [
        'Angular, componentes reutilizables y formularios reactivos.',
        'Consumo de APIs, lógica de negocio y diseño responsive.',
        'APIs REST con Python y Flask.',
        'Mantenimiento de APIs existentes en Node.js.',
        'Migración progresiva de Node.js hacia Python y Flask.',
        'Integraciones con Webpay, BancoEstado y Banco Itaú.',
        'Integración con servicios externos de validación de identidad.',
        'SQL Server y Docker.',
        'Pipelines CI/CD y API Management.',
        'Coordinación de configuraciones con Cloudflare y Nginx.',
        'Despliegue y mantenimiento en Azure.',
      ],
    },
    evolution: {
      title: 'Evolución del rol y del producto',
      paragraphs: [
        'La plataforma continuó evolucionando con nuevas necesidades del negocio, promociones, servicios e integraciones. Inicialmente participé como Full-Stack Developer junto con otros integrantes del equipo.',
        'Posteriormente asumí responsabilidades como Technical Lead, coordinando decisiones técnicas, desarrollo, integraciones y evolución del producto.',
      ],
      uxTitle: 'Autonomía de producto y UX',
      ux: 'Sin diseños completos ni prototipos finales, trabajamos directamente con las áreas de negocio para definir distribución de contenidos, colores, jerarquía visual, componentes, formularios, navegación y comportamiento responsive. Esta parte exigió convertir necesidades ambiguas en una experiencia digital usable.',
    },
    impact: {
      title: 'Impacto',
      intro: 'La plataforma continúa en producción y consolidó en una experiencia web distintos servicios de la tarjeta comercial:',
      outcomes: [
        'Consulta y gestión de información para tarjetahabientes.',
        'Pagos online y conexión con servicios financieros.',
        'Integración con sistemas externos.',
        'Evolución de contenidos mediante backoffice.',
        'APIs reutilizables por distintos canales digitales.',
        'Una experiencia pública y privada responsive.',
      ],
      scale: 'Más de 2,2M',
      scaleLabel: 'de tarjetahabientes atendidos por la plataforma',
    },
    flowLabel: 'Un ecosistema conectado',
    flow: [
      { title: 'Descubrir', description: 'Beneficios · tiendas' },
      { title: 'Consultar', description: 'Saldo · movimientos' },
      { title: 'Pagar', description: 'Webpay · servicios bancarios' },
      { title: 'Evolucionar', description: 'APIs · backoffice · cloud' },
    ],
    closing: 'Una plataforma que convirtió servicios financieros complejos en una experiencia cotidiana para millones de personas.',
    closingLink: 'Hablemos de mi experiencia',
  },
  en: {
    title: 'Commercial credit at scale',
    summary: 'A web platform connecting customers, payments and financial services.',
    category: 'Digital product · Retail credit card',
    company: 'Fashion’s Park',
    companyLabel: 'Company',
    areaLabel: 'Business area',
    roleLabel: 'My role',
    role: 'Full-Stack Developer and later Technical Lead.',
    back: 'Back to projects',
    contents: 'In this case study',
    caseLabel: 'Case 01 · Fintech and retail',
    externalSite: 'Visit the public website',
    confidentiality: 'Conceptual representation. It contains no private interfaces, customer data, internal rules or proprietary material.',
    context: {
      title: 'Context',
      paragraphs: [
        'Fashion’s Park needed a digital platform where customers could learn about its retail credit card, explore its benefits, access their financial information and make online payments.',
        'The project included a public experience for any visitor and a private area for cardholders.',
        'The solution was developed without a complete UX/UI design upfront. The team worked directly with the business to turn its needs into a clear, functional and responsive digital experience.',
      ],
    },
    experience: {
      title: 'Public and private experiences',
      publicTitle: 'Public website',
      publicIntro: 'The public experience brought together information, benefits, payments and store locations for any visitor:',
      publicFeatures: [
        'Essential information about the card, benefits and services.',
        'Offers, promotions and an invitation to apply for the card.',
        'An invitation to download the mobile app.',
        'Online payment of installments or outstanding balances.',
        'Store information, a geolocated map and nearest-store search.',
      ],
      stores: 'At the time of the project, the website listed approximately 111 stores across Chile.',
      privateTitle: 'Private cardholder area',
      privateIntro: 'Once authenticated, customers could access and manage information related to their card:',
      privateFeatures: [
        'Balance, used credit, available credit and upcoming payment.',
        'Card status and detailed balance information.',
        'Transactions from the previous six months and PDF export.',
        'Coupons and benefits based on the customer segment.',
        'Application or approval-process status.',
      ],
      benefits: 'Benefits could vary across categories such as Gold, Silver and Bronze through a business-defined classification based on card behavior and conditions. Internal classification rules are not disclosed in this case study.',
    },
    integrations: {
      title: 'APIs and integrations',
      intro: 'I developed and maintained APIs connecting the web platform, financial services and several business areas:',
      items: [
        'Webpay integration for online payments.',
        'Integrations with BancoEstado and Banco Itaú, including cash advances and transfers to bank accounts.',
        'Authorized retrieval of signed documents and call recordings associated with a customer.',
        'Integration with the benefits system and customer classification based on account conditions.',
        'Card application status retrieval.',
        'Integration with the internal back-office portal.',
        'Updates to images, copy and content published on the website and other channels.',
        'External identity validation using identity documents and facial recognition.',
        'Retrieval and revocation of permissions granted by the customer.',
        'APIs reused by the website and other digital channels.',
      ],
      relatedLabel: 'Related integrations',
      related: 'Some APIs retrieved documents and recordings managed by the document library described in case 03. Others were also consumed by the mobile app; I did not develop that application.',
    },
    backoffice: {
      title: 'Back office and content management',
      paragraphs: ['I also developed APIs and functionality for an internal back-office portal, separating editorial content management from application code.'],
      intro: 'Authorized teams could:',
      items: [
        'Upload and replace promotional images.',
        'Update copy and content across different components.',
        'Change information without deploying application code.',
        'Publish updates automatically to the website and other connected channels.',
      ],
    },
    technical: {
      title: 'Technical work',
      intro: 'My work covered frontend, backend, integrations, infrastructure and continuous delivery:',
      responsibilities: [
        'Angular, reusable components and reactive forms.',
        'API consumption, business logic and responsive design.',
        'REST APIs with Python and Flask.',
        'Maintenance of existing Node.js APIs.',
        'Progressive migration from Node.js to Python and Flask.',
        'Integrations with Webpay, BancoEstado and Banco Itaú.',
        'Integration with external identity validation services.',
        'SQL Server and Docker.',
        'CI/CD pipelines and API Management.',
        'Coordination of Cloudflare and Nginx configurations.',
        'Deployment and maintenance in Azure.',
      ],
    },
    evolution: {
      title: 'Evolution of my role and the product',
      paragraphs: [
        'The platform continued to evolve with new business needs, promotions, services and integrations. I initially contributed as a Full-Stack Developer alongside other team members.',
        'I later took on Technical Lead responsibilities, coordinating technical decisions, development, integrations and the product’s ongoing evolution.',
      ],
      uxTitle: 'Product ownership and UX judgment',
      ux: 'Without complete interface designs or final prototypes, we worked directly with business teams to define content structure, colors, visual hierarchy, components, forms, navigation and responsive behavior. This required turning ambiguous needs into a usable digital experience.',
    },
    impact: {
      title: 'Impact',
      intro: 'The platform remains in production and brought multiple retail credit card services together in one web experience:',
      outcomes: [
        'Card information retrieval and management for cardholders.',
        'Online payments and connections to financial services.',
        'Integration with external systems.',
        'Content evolution through a back-office portal.',
        'Reusable APIs serving multiple digital channels.',
        'A responsive public and private experience.',
      ],
      scale: 'More than 2.2M',
      scaleLabel: 'cardholders served by the platform',
    },
    flowLabel: 'A connected ecosystem',
    flow: [
      { title: 'Discover', description: 'Benefits · stores' },
      { title: 'Review', description: 'Balance · transactions' },
      { title: 'Pay', description: 'Webpay · banking services' },
      { title: 'Evolve', description: 'APIs · back office · cloud' },
    ],
    closing: 'A platform that turned complex financial services into an everyday experience for millions of people.',
    closingLink: 'Let’s talk about my experience',
  },
};

export function commercialCreditMetadata(language: Language): Metadata {
  const t = commercialCreditCase[language];
  const url = pageHref('credit', language);
  return {
    title: `${t.title} — Francisco Catalán`,
    description: t.summary,
    alternates: { canonical: url, languages: { 'es-ES': pageHref('credit', 'es'), 'en-US': pageHref('credit', 'en') } },
    openGraph: { title: t.title, description: t.summary, type: 'article', locale: language === 'es' ? 'es_ES' : 'en_US', url, images: ['/og.png'] },
    twitter: { card: 'summary_large_image', title: t.title, description: t.summary, images: ['/og.png'] },
  };
}
