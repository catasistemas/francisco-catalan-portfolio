import { copyFileSync, mkdirSync } from 'node:fs';
import { resolve } from 'node:path';

// vinext currently skips /en during prerender with trailingSlash enabled.
// Keep its normal export and provide the directory index required by GitHub Pages.
const output = resolve('dist/client');
mkdirSync(resolve(output, 'en'), { recursive: true });
copyFileSync(resolve(output, 'en.html'), resolve(output, 'en/index.html'));
