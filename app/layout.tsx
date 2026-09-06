import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://catasistemas.com'),
  title: 'Francisco Catalán — Full-Stack Developer',
  description:
    'Portfolio profesional de Francisco Catalán, Full-Stack Developer especializado en plataformas corporativas, automatización, cloud e inteligencia artificial.',
  keywords: ['Full-Stack Developer', 'Angular', 'Python', 'FastAPI', 'Azure', 'Madrid'],
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
  alternates: { canonical: '/' },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
