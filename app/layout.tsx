import type { Metadata } from 'next';
import './globals.css';
import ScrollProbe from './components/scroll-probe';

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Francisco Catalán',
  url: 'https://catasistemas.com',
  jobTitle: 'Full-Stack Developer',
  description:
    'Ingeniero de sistemas y Full-Stack Developer especializado en plataformas corporativas, automatización, cloud e inteligencia artificial.',
  sameAs: ['https://www.linkedin.com/in/francisco-catalan-289a6115b/'],
  knowsAbout: [
    'Full-Stack Development',
    'Angular',
    'TypeScript',
    'JavaScript',
    'Python',
    'FastAPI',
    'Azure',
    'APIs REST',
    'Artificial Intelligence',
    'Big Data',
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL('https://catasistemas.com'),
  title: 'Francisco Catalán — Full-Stack Developer',
  description:
    'Portfolio profesional de Francisco Catalán, Full-Stack Developer especializado en plataformas corporativas, automatización, cloud e inteligencia artificial.',
  keywords: ['Full-Stack Developer', 'Angular', 'Python', 'FastAPI', 'Azure', 'Madrid'],
  applicationName: 'Francisco Catalán — Full-Stack Developer',
  authors: [{ name: 'Francisco Catalán', url: 'https://catasistemas.com' }],
  creator: 'Francisco Catalán',
  publisher: 'Francisco Catalán',
  robots: { index: true, follow: true },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml', sizes: 'any' },
      { url: '/favicon-48x48.png', type: 'image/png', sizes: '48x48' },
      { url: '/favicon-96x96.png', type: 'image/png', sizes: '96x96' },
    ],
    shortcut: [{ url: '/favicon.ico', type: 'image/x-icon', sizes: '48x48' }],
    apple: [{ url: '/apple-touch-icon.png', type: 'image/png', sizes: '180x180' }],
  },
  openGraph: {
    title: 'Francisco Catalán — Full-Stack Developer',
    description:
      'Software con criterio técnico, impacto operativo y una mirada end-to-end.',
    type: 'website',
    locale: 'es_ES',
    url: '/',
    images: ['/og.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Francisco Catalán — Full-Stack Developer',
    description:
      'Software con criterio técnico, impacto operativo y una mirada end-to-end.',
    images: ['/og.png'],
  },
  alternates: {
    canonical: '/',
    languages: { 'es-ES': '/', 'en-US': '/en/' },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        {children}
        <ScrollProbe />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </body>
    </html>
  );
}
