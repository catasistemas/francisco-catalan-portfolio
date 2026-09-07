import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';
import { resolve } from 'node:path';

const output = resolve('dist/client');
const basePath = (process.env.NEXT_PUBLIC_BASE_PATH ?? '').replace(/\/$/, '');
const casePaths = { es: '/casos/distribucion-carteras/', en: '/en/cases/collections-allocation/' };
const routes = [
  { path: '/', file: 'index.html', language: 'es', content: 'Disponible para nuevas oportunidades', home: true },
  { path: '/en/', file: 'en/index.html', language: 'en', content: 'Available for new opportunities', home: true },
  { path: casePaths.es, file: 'casos/distribucion-carteras/index.html', language: 'es', content: 'Plataforma de distribución y seguimiento de carteras de cobranza' },
  { path: casePaths.en, file: 'en/cases/collections-allocation/index.html', language: 'en', content: 'Collections portfolio allocation and monitoring platform' },
];

for (const route of routes) {
  // Directory indexes are required for direct requests to slash-terminated URLs on Pages.
  const html = readFileSync(resolve(output, route.file), 'utf8');
  assert.ok(html.includes(route.content), `${route.path}: missing localized content`);
  assert.match(html, new RegExp(`<main[^>]*lang="${route.language}"`));
  const switches = route.home ? { es: '/', en: '/en/' } : casePaths;
  for (const [language, path] of Object.entries(switches)) {
    assert.ok(html.includes(`href="${basePath}${path}" hrefLang="${language}"`), `${route.path}: wrong language switch`);
  }
  if (route.home) {
    assert.equal([...html.matchAll(/class="project-card"/g)].length, 4, 'Keep exactly four project cards');
    assert.ok(html.includes(`href="${basePath}${casePaths[route.language]}"`), 'Missing localized case link');
  } else {
    assert.ok(html.includes(`rel="canonical" href="https://catasistemas.com${basePath}${route.path}"`), 'Wrong case canonical');
    for (const section of ['context', 'responsibility', 'solution', 'impact']) {
      assert.ok(html.includes(`id="${section}"`), `Missing case section: ${section}`);
    }
    assert.ok(html.includes(`href="${basePath}${route.language === 'es' ? '/' : '/en/'}#casos"`), 'Missing return link');
  }

  for (const [, rawUrl] of html.matchAll(/(?:src|href)="(\/[^"\s]*)"/g)) {
    let url = rawUrl.split(/[?#]/)[0];
    if (url.startsWith('//')) continue;
    if (basePath && url.startsWith(`${basePath}/`)) url = url.slice(basePath.length);
    const file = url.endsWith('/') ? `${url}index.html` : url;
    assert.ok(existsSync(resolve(output, `.${file}`)), `${route.path}: missing local asset or route ${url}`);
  }
  console.log(`Verified ${basePath}${route.path}: localized content, navigation, case routes and local assets`);
}
