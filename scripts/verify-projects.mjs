import assert from 'node:assert/strict';
import { mkdirSync } from 'node:fs';
import { pathToFileURL } from 'node:url';

// Uses an optional development-only Playwright installation, never shipped to the site.
const { chromium } = await import(process.env.PLAYWRIGHT_MODULE ? pathToFileURL(process.env.PLAYWRIGHT_MODULE).href : 'playwright');
const origin = process.env.PREVIEW_ORIGIN ?? 'http://127.0.0.1:4173';
const prefix = (process.env.NEXT_PUBLIC_BASE_PATH ?? '').replace(/\/$/, '');
const browser = await chromium.launch({ headless: true, channel: process.env.PLAYWRIGHT_CHANNEL || undefined });
const screenshots = 'outputs/projects';
mkdirSync(screenshots, { recursive: true });
const pages = {
  es: '/',
  en: '/en/',
  cases: [
    { es: '/casos/credito-comercial/', en: '/en/cases/commercial-credit/', className: 'case-theme-violet', sections: 6 },
    { es: '/casos/distribucion-carteras/', en: '/en/cases/collections-allocation/', className: 'case-theme-lime', sections: 4 },
    { es: '/casos/biblioteca-trazable/', en: '/en/cases/traceable-document-library/', className: 'case-theme-blue', sections: 4 },
  ],
};
const errors = [];

async function visit(page, path) {
  const response = await page.goto(`${origin}${prefix}${path}`);
  assert.equal(response.status(), 200, path);
  await page.locator('main').waitFor();
}

try {
  const desktop = await browser.newContext({ viewport: { width: 1440, height: 1000 } });
  const page = await desktop.newPage();
  page.on('pageerror', (error) => errors.push(error.message));
  page.on('response', (response) => { if (response.status() >= 400) errors.push(`${response.status()} ${response.url()}`); });
  for (const [language, path] of [['es', pages.es], ['en', pages.en]]) {
    await visit(page, path);
    assert.equal(await page.locator('.project-card').count(), 4);
    assert.equal(await page.locator('.project-case-link').count(), 3);
    for (const [index, casePage] of pages.cases.entries()) {
      assert.equal(await page.locator('.project-case-link').nth(index).getAttribute('href'), `${prefix}${casePage[language]}`);
    }
    await page.locator('#casos').scrollIntoViewIfNeeded();
    await page.screenshot({ path: `${screenshots}/cards-${language}-desktop.png` });
    for (const [index, casePage] of pages.cases.entries()) {
      await visit(page, path);
      await page.locator('.project-case-link').nth(index).click();
      const target = casePage[language];
      await page.waitForURL(`${origin}${prefix}${target}`);
      assert.equal(await page.locator('main').getAttribute('lang'), language);
      assert.equal(await page.locator('h1').count(), 1);
      assert.equal(await page.locator('.case-chapter').count(), casePage.sections);
      assert.ok(await page.locator('main').evaluate((main, className) => main.classList.contains(className), casePage.className));
      await page.reload();
      assert.equal(await page.locator('.case-chapter').count(), casePage.sections);
      const caseText = await page.locator('.case-body').innerText();
      assert.doesNotMatch(caseText, /5[.,]000[.,]000|5000000|cinco millones|five million|2[.,]8\s*(M|millones|million)|\bRUT\b|\bDNI\b|vulnerabil/i);
      assert.equal(await page.locator('link[rel="canonical"]').getAttribute('href'), `https://catasistemas.com${prefix}${target}`);
      if (index === 0) {
        const publicLink = page.locator('.case-external-link');
        assert.equal(await publicLink.getAttribute('href'), 'https://tarjetafashionspark.com/');
        assert.equal(await publicLink.getAttribute('target'), '_blank');
        assert.match(await publicLink.getAttribute('rel'), /noreferrer/);
      }
      await page.screenshot({ path: `${screenshots}/case-${index + 1}-${language}-desktop.png`, fullPage: true });
      await page.getByRole('link', { name: language === 'es' ? 'English (United States)' : 'Español', exact: true }).click();
      await page.waitForURL(`${origin}${prefix}${casePage[language === 'es' ? 'en' : 'es']}`);
    }
  }
  console.log('PASS: four cards, three case links, six detail routes, direct reloads, language switches, metadata and safe content.');

  // Actual Tab/Enter navigation, rather than programmatically focusing the link.
  await visit(page, pages.es);
  let reached = false;
  for (let count = 0; count < 30; count++) {
    await page.keyboard.press('Tab');
    reached = await page.locator('.project-case-link').nth(0).evaluate((link) => document.activeElement === link);
    if (reached) break;
  }
  assert.ok(reached, 'Case link must be reachable with Tab');
  const outline = await page.locator('.project-case-link').nth(0).evaluate((link) => getComputedStyle(link).outlineWidth);
  assert.ok(parseFloat(outline) >= 2, 'Visible keyboard focus');
  await page.keyboard.press('Enter');
  await page.waitForURL(`${origin}${prefix}${pages.cases[0].es}`);
  await page.getByRole('link', { name: 'Volver a los proyectos', exact: true }).click();
  await page.waitForURL(`${origin}${prefix}/#casos`);
  console.log('PASS: Tab, visible focus, Enter, return to projects.');

  // Fine-pointer tilt responds locally and resets when the pointer leaves.
  const host = page.locator('.project-card-wrap').nth(1);
  await host.scrollIntoViewIfNeeded();
  const bounds = await host.boundingBox();
  await page.mouse.move(bounds.x + bounds.width * .75, bounds.y + 60);
  await page.waitForFunction(() => !!document.querySelectorAll('.project-card-wrap')[1].style.getPropertyValue('--tilt-y'));
  assert.notEqual(await host.evaluate((node) => node.style.getPropertyValue('--tilt-y')), '0deg');
  await page.mouse.move(5, 5);
  assert.equal(await host.evaluate((node) => node.style.getPropertyValue('--tilt-y')), '');
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.mouse.move(bounds.x + 80, bounds.y + 80);
  const reduced = await host.evaluate((node) => ({ tilt: node.style.getPropertyValue('--tilt-y'), transform: getComputedStyle(node.querySelector('.project-card')).transform, animation: getComputedStyle(node.querySelector('.visual-float')).animationName }));
  assert.equal(reduced.tilt, ''); assert.equal(reduced.transform, 'none'); assert.equal(reduced.animation, 'none');
  console.log('PASS: local pointer tilt, reset on leave, prefers-reduced-motion.');

  const mobile = await browser.newContext({ viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true, deviceScaleFactor: 1 });
  const phone = await mobile.newPage();
  phone.on('pageerror', (error) => errors.push(error.message));
  for (const width of [320, 390, 768]) {
    await phone.setViewportSize({ width, height: 900 });
    for (const path of [pages.es, pages.en, ...pages.cases.flatMap((casePage) => [casePage.es, casePage.en])]) {
      await visit(phone, path);
      assert.ok(await phone.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth + 1), `Overflow at ${width}px: ${path}`);
      if (path === pages.es || path === pages.en) {
        const cardBoxes = await phone.locator('.project-card').evaluateAll((cards) => cards.map((card) => ({ x: card.getBoundingClientRect().x, width: card.getBoundingClientRect().width })));
        if (width <= 390) assert.equal(cardBoxes[0].x, cardBoxes[1].x, 'Single-column cards on phones');
        for (const link of await phone.locator('.project-case-link').all()) {
          assert.ok((await link.boundingBox()).height >= 44, 'Touch target at least 44px');
        }
      }
    }
  }
  await phone.setViewportSize({ width: 390, height: 844 });
  await visit(phone, pages.es);
  await phone.locator('.project-card-wrap').nth(0).scrollIntoViewIfNeeded();
  await phone.screenshot({ path: `${screenshots}/cards-mobile.png` });
  assert.equal(await phone.locator('.visual-float').first().evaluate((node) => getComputedStyle(node).animationName), 'none');
  await phone.locator('.project-case-link').nth(0).tap();
  await phone.waitForURL(`${origin}${prefix}${pages.cases[0].es}`);
  await phone.getByRole('link', { name: 'English (United States)', exact: true }).tap();
  await phone.waitForURL(`${origin}${prefix}${pages.cases[0].en}`);
  await phone.screenshot({ path: `${screenshots}/case-01-mobile.png`, fullPage: true });
  console.log('PASS: 320/390/768px, no horizontal overflow, touch target, tap navigation, no touch tilt.');
  assert.deepEqual(errors, [], 'No browser errors or failed desktop resources');
  console.log('All project UI checks passed.');
} finally {
  await browser.close();
}
