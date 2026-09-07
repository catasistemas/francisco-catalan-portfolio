import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { extname, resolve, sep } from 'node:path';

// A loopback-only preview of the exact GitHub Pages artifact, with no SPA fallback.
const root = resolve('dist/client');
const prefix = (process.env.NEXT_PUBLIC_BASE_PATH ?? '').replace(/\/$/, '');
const port = Number(process.env.PORT ?? 4173);
const mimeTypes = { '.html': 'text/html; charset=utf-8', '.css': 'text/css', '.js': 'text/javascript', '.json': 'application/json', '.svg': 'image/svg+xml', '.png': 'image/png', '.pdf': 'application/pdf', '.woff2': 'font/woff2', '.txt': 'text/plain', '.rsc': 'text/x-component', '.xml': 'application/xml' };

createServer(async (request, response) => {
  if (!['GET', 'HEAD'].includes(request.method)) { response.writeHead(405).end(); return; }
  try {
    let path = decodeURIComponent(new URL(request.url, 'http://localhost').pathname);
    if (prefix) {
      if (!path.startsWith(`${prefix}/`)) { response.writeHead(404).end('Not found'); return; }
      path = path.slice(prefix.length);
    }
    let file = resolve(root, `.${path}`);
    if (file !== root && !file.startsWith(`${root}${sep}`)) { response.writeHead(403).end(); return; }
    if ((await stat(file)).isDirectory()) {
      if (!path.endsWith('/')) { response.writeHead(301, { Location: `${prefix}${path}/` }).end(); return; }
      file = resolve(file, 'index.html');
    }
    const body = await readFile(file);
    response.writeHead(200, { 'Content-Type': mimeTypes[extname(file)] ?? 'application/octet-stream', 'Cache-Control': 'no-store', 'X-Content-Type-Options': 'nosniff' });
    response.end(request.method === 'HEAD' ? undefined : body);
  } catch {
    response.writeHead(404, { 'Content-Type': 'text/plain' }).end('Not found');
  }
}).listen(port, '127.0.0.1', () => console.log(`Local preview: http://127.0.0.1:${port}${prefix}/`));
