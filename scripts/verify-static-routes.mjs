import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';
import { resolve } from 'node:path';

const output = resolve('dist/client');
const basePath = (process.env.NEXT_PUBLIC_BASE_PATH ?? '').replace(/\/$/, '');
const casePaths = {
  credit: { es: '/casos/credito-comercial/', en: '/en/cases/commercial-credit/' },
  collections: { es: '/casos/distribucion-carteras/', en: '/en/cases/collections-allocation/' },
  documents: { es: '/casos/biblioteca-trazable/', en: '/en/cases/traceable-document-library/' },
  people: { es: '/casos/plataforma-rrhh-ia/', en: '/en/cases/people-operations-ai-platform/' },
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
  { path: casePaths.people.es, file: 'casos/plataforma-rrhh-ia/index.html', language: 'es', page: 'people', content: 'Una plataforma interna para operaciones de personas', sections: ['context', 'access', 'features', 'intelligence', 'technical', 'evolution', 'impact'] },
  { path: casePaths.people.en, file: 'en/cases/people-operations-ai-platform/index.html', language: 'en', page: 'people', content: 'An internal platform for people operations', sections: ['context', 'access', 'features', 'intelligence', 'technical', 'evolution', 'impact'] },
];

const pngSignature = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
for (const [file, size] of [['favicon-48x48.png', 48], ['favicon-96x96.png', 96], ['apple-touch-icon.png', 180]]) {
  const image = readFileSync(resolve('public', file));
  assert.ok(image.subarray(0, 8).equals(pngSignature), `${file}: invalid PNG signature`);
  assert.equal(image.readUInt32BE(16), size, `${file}: wrong width`);
  assert.equal(image.readUInt32BE(20), size, `${file}: wrong height`);
}
const ico = readFileSync(resolve('public', 'favicon.ico'));
assert.equal(ico.readUInt16LE(0), 0, 'favicon.ico: invalid reserved field');
assert.equal(ico.readUInt16LE(2), 1, 'favicon.ico: invalid image type');
assert.equal(ico.readUInt16LE(4), 1, 'favicon.ico: expected one image');
assert.equal(ico.readUInt8(6), 48, 'favicon.ico: wrong width');
assert.equal(ico.readUInt8(7), 48, 'favicon.ico: wrong height');
assert.ok(ico.subarray(ico.readUInt32LE(18), ico.readUInt32LE(18) + 8).equals(pngSignature), 'favicon.ico: missing embedded PNG');

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
    assert.ok(html.includes('rel="icon" href="/favicon.svg" type="image/svg+xml" sizes="any"'), `${route.path}: missing stable SVG favicon`);
    assert.ok(html.includes('href="/favicon-48x48.png" type="image/png" sizes="48x48"'), `${route.path}: missing 48px favicon`);
    assert.ok(html.includes('href="/favicon-96x96.png" type="image/png" sizes="96x96"'), `${route.path}: missing 96px favicon`);
    assert.ok(html.includes('rel="shortcut icon" href="/favicon.ico"'), `${route.path}: missing ICO fallback`);
    assert.ok(html.includes('rel="apple-touch-icon" href="/apple-touch-icon.png"'), `${route.path}: missing Apple touch icon`);
    assert.doesNotMatch(html, /favicon\.svg\?/, `${route.path}: favicon URL must remain stable`);
    const capabilityIntro = route.language === 'es'
      ? 'Convierto necesidades de negocio en sistemas que pueden medirse, mantenerse y evolucionar.'
      : 'I turn business needs into systems that can be measured, maintained and evolved.';
    assert.ok(html.includes(capabilityIntro), `${route.path}: missing capabilities introduction`);
    assert.equal([...html.matchAll(/class="capability-card /g)].length, 3, 'Keep exactly three capabilities');
    assert.equal([...html.matchAll(/class="capability-node"/g)].length, 12, 'Every capability needs a four-step flow');
    assert.equal([...html.matchAll(/class="project-card"/g)].length, 4, 'Keep exactly four project cards');
    assert.equal([...html.matchAll(/class="project-case-link"/g)].length, 4, 'All four cases must have links');
    for (const paths of Object.values(casePaths)) {
      assert.ok(html.includes(`href="${basePath}${paths[route.language]}"`), 'Missing localized case link');
    }
  } else {
    assert.ok(html.includes(`rel="canonical" href="https://catasistemas.com${basePath}${route.path}"`), 'Wrong case canonical');
    for (const section of route.sections) {
      assert.ok(html.includes(`id="${section}"`), `Missing case section: ${section}`);
    }
    if (route.page === 'people') {
      assert.doesNotMatch(html, /Carmon|Factorial|INSS|endpoint|nombre de tabla|table name/i, 'Confidential case details must stay anonymous');
      assert.ok(html.includes(route.language === 'es' ? 'no tomaba decisiones laborales de forma autónoma' : 'did not make employment decisions autonomously'), 'Missing human-oversight statement');
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
