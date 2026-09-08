import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';
import { resolve } from 'node:path';

const output = resolve('dist/client');
const basePath = (process.env.NEXT_PUBLIC_BASE_PATH ?? '').replace(/\/$/, '');
const casePaths = {
  credit: { es: '/casos/credito-comercial/', en: '/en/cases/commercial-credit/' },
  collections: { es: '/casos/distribucion-carteras/', en: '/en/cases/collections-allocation/' },
  documents: { es: '/casos/biblioteca-trazable/', en: '/en/cases/traceable-document-library/' },
};
const routes = [
  { path: '/', file: 'index.html', language: 'es', content: 'Disponible para nuevas oportunidades', home: true },
  { path: '/en/', file: 'en/index.html', language: 'en', content: 'Available for new opportunities', home: true },
  { path: casePaths.credit.es, file: 'casos/credito-comercial/index.html', language: 'es', page: 'credit', content: 'Una plataforma web para conectar clientes, pagos y servicios financieros.', sections: ['context', 'experience', 'integrations', 'backoffice', 'technical', 'impact'] },
  { path: casePaths.credit.en, file: 'en/cases/commercial-credit/index.html', language: 'en', page: 'credit', content: 'A web platform connecting customers, payments and financial services.', sections: ['context', 'experience', 'integrations', 'backoffice', 'technical', 'impact'] },
  { path: casePaths.collections.es, file: 'casos/distribucion-carteras/index.html', language: 'es', page: 'collections', content: 'Plataforma de distribución y seguimiento de carteras de cobranza', sections: ['context', 'responsibility', 'solution', 'impact'] },
  { path: casePaths.collections.en, file: 'en/cases/collections-allocation/index.html', language: 'en', page: 'collections', content: 'Collections portfolio allocation and monitoring platform', sections: ['context', 'responsibility', 'solution', 'impact'] },
  { path: casePaths.documents.es, file: 'casos/biblioteca-trazable/index.html', language: 'es', page: 'documents', content: 'Biblioteca documental trazable en la nube', sections: ['context', 'solution', 'technical', 'impact'] },
  { path: casePaths.documents.en, file: 'en/cases/traceable-document-library/index.html', language: 'en', page: 'documents', content: 'A traceable cloud document library', sections: ['context', 'solution', 'technical', 'impact'] },
];

for (const route of routes) {
  // Directory indexes are required for direct requests to slash-terminated URLs on Pages.
  const html = readFileSync(resolve(output, route.file), 'utf8');
  assert.ok(html.includes(route.content), `${route.path}: missing localized content`);
  assert.match(html, new RegExp(`<main[^>]*lang="${route.language}"`));
  const switches = route.home ? { es: '/', en: '/en/' } : casePaths[route.page];
  for (const [language, path] of Object.entries(switches)) {
    assert.ok(html.includes(`href="${basePath}${path}" hrefLang="${language}"`), `${route.path}: wrong language switch`);
  }
  if (route.home) {
    assert.equal([...html.matchAll(/class="project-card"/g)].length, 4, 'Keep exactly four project cards');
    assert.equal([...html.matchAll(/class="project-case-link"/g)].length, 3, 'Cases 01, 02 and 03 must have links');
    for (const paths of Object.values(casePaths)) {
      assert.ok(html.includes(`href="${basePath}${paths[route.language]}"`), 'Missing localized case link');
    }
  } else {
    assert.ok(html.includes(`rel="canonical" href="https://catasistemas.com${basePath}${route.path}"`), 'Wrong case canonical');
    for (const section of route.sections) {
      assert.ok(html.includes(`id="${section}"`), `Missing case section: ${section}`);
    }
    assert.ok(html.includes(`href="${basePath}${route.language === 'es' ? '/' : '/en/'}#casos"`), 'Missing return link');
  }

  for (const [, rawUrl] of html.matchAll(/(?:src|href)="(\/[^"\s]*)"/g)) {
    const url = rawUrl.split(/[?#]/)[0];
    if (url.startsWith('//')) continue;
    const paths = [url];
    if (basePath && url.startsWith(`${basePath}/`)) paths.push(url.slice(basePath.length));
    const found = paths.some((path) => {
      const file = path.endsWith('/') ? `${path}index.html` : path;
      return existsSync(resolve(output, `.${file}`));
    });
    assert.ok(found, `${route.path}: missing local asset or route ${url}`);
  }
  console.log(`Verified ${basePath}${route.path}: localized content, navigation, case routes and local assets`);
}
