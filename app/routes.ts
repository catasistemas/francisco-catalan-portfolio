import type { Language } from './content';

export const basePath = (process.env.NEXT_PUBLIC_BASE_PATH ?? '').replace(/\/$/, '');

export const routes = {
  home: { es: '/', en: '/en/' },
  credit: {
    es: '/casos/credito-comercial/',
    en: '/en/cases/commercial-credit/',
  },
  collections: {
    es: '/casos/distribucion-carteras/',
    en: '/en/cases/collections-allocation/',
  },
  documents: {
    es: '/casos/biblioteca-trazable/',
    en: '/en/cases/traceable-document-library/',
  },
} as const;

export type PageKey = keyof typeof routes;

export function pageHref(page: PageKey, language: Language) {
  return `${basePath}${routes[page][language]}`;
}
