import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';
import { resolve } from 'node:path';

const output = resolve('dist/client');
const routes = [
  { path: '/', file: 'index.html', language: 'es', content: 'Disponible para nuevas oportunidades' },
  { path: '/en/', file: 'en/index.html', language: 'en', content: 'Available for new opportunities' },
];

for (const route of routes) {
  // Directory indexes are required for direct requests to slash-terminated URLs on Pages.
  const html = readFileSync(resolve(output, route.file), 'utf8');
  assert.ok(html.includes(route.content), `${route.path}: missing localized content`);
  assert.match(html, new RegExp(`<main[^>]*lang="${route.language}"`));
  assert.match(html, /href="\/en\/"[^>]*hrefLang="en"/);
  assert.match(html, /href="\/"[^>]*hrefLang="es"/);
  assert.match(html, new RegExp(`rel="canonical" href="https://catasistemas\\.com${route.path === '/' ? '/?' : route.path}"`));

  for (const [, url] of html.matchAll(/(?:src|href)="(\/[^"#?]*)"/g)) {
    if (url.startsWith('//')) continue;
    const file = url.endsWith('/') ? `${url}index.html` : url;
    assert.ok(existsSync(resolve(output, `.${file}`)), `${route.path}: missing local asset or route ${url}`);
  }
  console.log(`Verified ${route.path}: localized HTML, language links, canonical and local assets`);
}
