import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Francisco Catalán — Full-Stack Developer',
  description:
    'Portfolio of Francisco Catalán, Full-Stack Developer focused on corporate platforms, automation, cloud and applied AI.',
  keywords: ['Full-Stack Developer', 'Angular', 'Python', 'FastAPI', 'Azure', 'Madrid'],
  openGraph: {
    title: 'Francisco Catalán — Full-Stack Developer',
    description:
      'Full-stack software with technical judgment, operational impact and an end-to-end perspective.',
    type: 'website',
    locale: 'en_US',
    url: '/en/',
    images: ['/og.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Francisco Catalán — Full-Stack Developer',
    description:
      'Full-stack software with technical judgment, operational impact and an end-to-end perspective.',
    images: ['/og.png'],
  },
  alternates: {
    canonical: '/en/',
    languages: { 'es-ES': '/', 'en-US': '/en/' },
  },
};

export default function EnglishLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
