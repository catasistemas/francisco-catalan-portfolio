import { copyFileSync, mkdirSync, readdirSync } from 'node:fs';
import { resolve } from 'node:path';

// Keep vinext's flat exports (trailingSlash currently skips prerenders),
// and materialize directory indexes for every public route on GitHub Pages.
const output = resolve('dist/client');
const pages = readdirSync(output, { recursive: true }).filter((name) =>
  name.endsWith('.html') && !/(^|[\\/])(index|404|_not-found)\.html$/.test(name),
);
for (const page of pages) {
  const directory = resolve(output, page.slice(0, -5));
  mkdirSync(directory, { recursive: true });
  copyFileSync(resolve(output, page), resolve(directory, 'index.html'));
}
