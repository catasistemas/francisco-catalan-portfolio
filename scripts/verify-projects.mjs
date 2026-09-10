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
    { es: '/casos/plataforma-rrhh-ia/', en: '/en/cases/people-operations-ai-platform/', className: 'case-theme-orange', sections: 7, confidential: true },
  ],
};
const errors = [];
const practicalCopy = {
  es: [
    'Diseño productos completos, desde la interfaz hasta los procesos que los mantienen funcionando en producción.',
    'Convierto tareas repetitivas y documentación compleja en procesos más rápidos, trazables y medibles.',
    'Conecto sistemas, documentos y datos para que puedan operar con seguridad y crecer sin perder control.',
  ],
  en: [
    'I design complete products, from the interface to the processes that keep them running in production.',
    'I turn repetitive tasks and complex documentation into faster, traceable and measurable processes.',
    'I connect systems, documents and data so they can operate securely and scale without losing control.',
  ],
};
const probeLabels = { es: 'Volver arriba', en: 'Back to top' };

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
    assert.equal(await page.locator('link[rel="icon"][href="/favicon.svg"]').count(), 1, 'Stable SVG favicon');
    assert.equal(await page.locator('link[rel="icon"][href="/favicon-48x48.png"]').count(), 1, '48px favicon fallback');
    assert.equal(await page.locator('link[rel="icon"][href="/favicon-96x96.png"]').count(), 1, '96px favicon fallback');
    assert.equal(await page.locator('link[rel="shortcut icon"][href="/favicon.ico"]').count(), 1, 'ICO favicon fallback');
    assert.equal(await page.locator('link[rel="apple-touch-icon"][href="/apple-touch-icon.png"]').count(), 1, 'Apple touch icon');
    const decodedIcons = await page.evaluate(async () => Promise.all([
      ['/favicon-48x48.png', 48], ['/favicon-96x96.png', 96], ['/apple-touch-icon.png', 180], ['/favicon.ico', 48],
    ].map(([src, expected]) => new Promise((resolve) => {
      const icon = new Image();
      icon.onload = () => resolve(icon.naturalWidth === expected && icon.naturalHeight === expected);
      icon.onerror = () => resolve(false);
      icon.src = src;
    }))));
    assert.ok(decodedIcons.every(Boolean), 'Every favicon format must decode at its declared size');
    const probe = page.locator('.scroll-probe');
    const probeLink = page.locator('.scroll-probe-link');
    assert.equal(await probe.count(), 1, 'One global scroll probe');
    assert.equal(await probeLink.getAttribute('href'), '#top');
    assert.equal(await probeLink.getAttribute('aria-label'), probeLabels[language]);
    assert.equal(await probe.getAttribute('aria-hidden'), 'true');
    assert.equal(await probeLink.getAttribute('tabindex'), '-1');
    await page.evaluate(() => { document.documentElement.style.scrollBehavior = 'auto'; const max = document.documentElement.scrollHeight - innerHeight; scrollTo(0, max * .32); });
    await page.waitForTimeout(180);
    assert.equal(await probe.getAttribute('aria-hidden'), 'false');
    assert.equal(await probeLink.getAttribute('tabindex'), '0');
    const firstProbeY = (await probeLink.boundingBox()).y;
    await page.evaluate(() => { const max = document.documentElement.scrollHeight - innerHeight; scrollTo(0, max * .72); });
    await page.waitForTimeout(180);
    const secondProbeY = (await probeLink.boundingBox()).y;
    assert.ok(secondProbeY > firstProbeY + 100, 'Probe must travel down its rail with reading progress');
    await probeLink.hover();
    await page.waitForTimeout(350);
    assert.ok(parseFloat(await page.locator('.scroll-probe-label').evaluate((node) => getComputedStyle(node).opacity)) > .9, 'Probe label appears on hover');
    assert.ok(await probeLink.evaluate((node) => !!node.style.getPropertyValue('--probe-x')), 'Probe reacts magnetically to the pointer');
    await probeLink.focus();
    assert.ok(parseFloat(await probeLink.evaluate((node) => getComputedStyle(node).outlineWidth)) >= 2, 'Visible probe focus');
    await page.screenshot({ path: `${screenshots}/probe-${language}-desktop.png` });
    await page.evaluate(() => { document.documentElement.style.removeProperty('scroll-behavior'); });
    await probeLink.click();
    await page.waitForFunction(() => window.scrollY < 2);
    const trajectoryHeading = page.locator('.trajectory-heading h2');
    const trajectoryAside = page.locator('.trajectory-heading .trajectory-aside');
    assert.equal(await trajectoryHeading.count(), 1, 'One trajectory heading');
    assert.equal(await trajectoryAside.count(), 1, 'One trajectory summary');
    assert.equal(await page.locator('.trajectory h2 .trajectory-aside').count(), 0, 'Trajectory summary must not be nested inside its heading');
    await page.locator('.trajectory').scrollIntoViewIfNeeded();
    await page.waitForTimeout(850);
    const [headingBox, asideBox] = await Promise.all([trajectoryHeading.boundingBox(), trajectoryAside.boundingBox()]);
    assert.ok(asideBox.y >= headingBox.y + headingBox.height + 20, 'Trajectory summary must not overlap its heading');
    assert.equal(await trajectoryAside.evaluate((node) => getComputedStyle(node).letterSpacing), 'normal');
    await page.locator('.trajectory').screenshot({ path: `${screenshots}/trajectory-${language}-desktop.png` });
    const capabilities = page.locator('.capability-card');
    const triggers = page.locator('.capability-trigger');
    const lab = page.locator('.capabilities-lab');
    assert.equal(await capabilities.count(), 3);
    assert.equal(await page.locator('.capability-node').count(), 12);
    assert.equal(await triggers.nth(0).getAttribute('aria-pressed'), 'true');
    assert.equal(await page.locator('.capabilities-practice p').innerText(), practicalCopy[language][0]);
    const initialHeight = (await lab.boundingBox()).height;
    await triggers.nth(1).hover();
    assert.equal(await triggers.nth(1).getAttribute('aria-pressed'), 'true');
    assert.equal(await page.locator('.capabilities-practice p').innerText(), practicalCopy[language][1]);
    await triggers.nth(2).focus();
    assert.equal(await triggers.nth(2).getAttribute('aria-pressed'), 'true');
    assert.equal(await page.locator('.capabilities-practice p').innerText(), practicalCopy[language][2]);
    assert.ok(parseFloat(await triggers.nth(2).evaluate((trigger) => getComputedStyle(trigger).outlineWidth)) >= 2, 'Visible capability focus');
    assert.equal(await page.locator('.capability-card.is-active .capability-details').getAttribute('aria-hidden'), 'false');
    await page.waitForTimeout(450);
    assert.ok(Math.abs((await lab.boundingBox()).height - initialHeight) <= 1, 'Capability switching must not shift layout');
    await page.locator('.services-section').screenshot({ path: `${screenshots}/capabilities-${language}-desktop.png` });
    assert.equal(await page.locator('.project-card').count(), 4);
    assert.equal(await page.locator('.project-case-link').count(), 4);
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
      if (casePage.confidential) {
        assert.doesNotMatch(caseText, /Carmon|Factorial|INSS|endpoint|nombre de tabla|table name/i);
        assert.match(caseText, language === 'es' ? /no tomaba decisiones laborales de forma autónoma/i : /did not make employment decisions autonomously/i);
      }
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
  console.log('PASS: four cards, four case links, eight detail routes, direct reloads, language switches, metadata and safe content.');

  // Actual Tab/Enter navigation, rather than programmatically focusing the link.
  await visit(page, pages.es);
  let reached = false;
  for (let count = 0; count < 30; count++) {
    await page.keyboard.press('Tab');
    reached = await page.locator('.project-case-link').nth(3).evaluate((link) => document.activeElement === link);
    if (reached) break;
  }
  assert.ok(reached, 'Case link must be reachable with Tab');
  const outline = await page.locator('.project-case-link').nth(3).evaluate((link) => getComputedStyle(link).outlineWidth);
  assert.ok(parseFloat(outline) >= 2, 'Visible keyboard focus');
  await page.keyboard.press('Enter');
  await page.waitForURL(`${origin}${prefix}${pages.cases[3].es}`);
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
  await page.evaluate(() => scrollTo(0, (document.documentElement.scrollHeight - innerHeight) * .5));
  await page.waitForTimeout(120);
  const reducedProbe = await page.locator('.scroll-probe-core').evaluate((node) => ({ animation: getComputedStyle(node).animationName, transition: getComputedStyle(node).transitionDuration }));
  assert.equal(reducedProbe.animation, 'none'); assert.equal(reducedProbe.transition, '0s');
  await page.locator('.capability-trigger').nth(1).hover();
  const reducedCapability = await page.locator('.capability-card').nth(1).evaluate((node) => ({ transform: getComputedStyle(node).transform, signal: getComputedStyle(node.querySelector('.capability-signal')).animationName }));
  assert.equal(reducedCapability.transform, 'none'); assert.equal(reducedCapability.signal, 'none');
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
        const headingBox = await phone.locator('.trajectory-heading h2').boundingBox();
        const asideBox = await phone.locator('.trajectory-heading .trajectory-aside').boundingBox();
        assert.ok(asideBox.y >= headingBox.y + headingBox.height + 16, `Trajectory summary overlap at ${width}px: ${path}`);
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
  await phone.evaluate(() => { document.documentElement.style.scrollBehavior = 'auto'; scrollTo(0, (document.documentElement.scrollHeight - innerHeight) * .5); });
  await phone.waitForTimeout(180);
  const mobileProbe = phone.locator('.scroll-probe-link');
  assert.equal(await phone.locator('.scroll-probe').getAttribute('aria-hidden'), 'false');
  const mobileProbeBox = await mobileProbe.boundingBox();
  assert.ok(mobileProbeBox.width >= 44 && mobileProbeBox.height >= 44, 'Probe touch target at least 44px');
  assert.equal(await phone.locator('.scroll-probe-track').evaluate((node) => getComputedStyle(node).display), 'none');
  await phone.screenshot({ path: `${screenshots}/probe-mobile.png` });
  await mobileProbe.tap();
  await phone.waitForFunction(() => window.scrollY < 2);
  assert.equal(await phone.locator('.capability-card').count(), 3);
  await phone.locator('.capability-trigger').nth(1).tap();
  assert.equal(await phone.locator('.capability-trigger').nth(1).getAttribute('aria-pressed'), 'true');
  assert.equal(await phone.locator('.capabilities-practice p').innerText(), practicalCopy.es[1]);
  assert.ok((await phone.locator('.capability-trigger').nth(1).boundingBox()).height >= 44, 'Capability touch target at least 44px');
  await phone.waitForTimeout(850);
  await phone.locator('.services-section').screenshot({ path: `${screenshots}/capabilities-mobile.png` });
  await phone.locator('.trajectory').scrollIntoViewIfNeeded();
  await phone.waitForTimeout(850);
  await phone.locator('.trajectory').screenshot({ path: `${screenshots}/trajectory-mobile.png` });
  await phone.locator('.project-card-wrap').nth(3).scrollIntoViewIfNeeded();
  await phone.screenshot({ path: `${screenshots}/cards-mobile.png` });
  assert.equal(await phone.locator('.project-card-wrap').nth(3).evaluate((node) => node.style.getPropertyValue('--tilt-y')), '', 'Touch must not set pointer tilt');
  await phone.emulateMedia({ reducedMotion: 'reduce' });
  const reducedMobileCapability = await phone.locator('.capability-card').nth(1).evaluate((node) => ({ transform: getComputedStyle(node).transform, signal: getComputedStyle(node.querySelector('.capability-signal')).display }));
  assert.equal(reducedMobileCapability.transform, 'none'); assert.equal(reducedMobileCapability.signal, 'none');
  await phone.locator('.project-case-link').nth(3).tap();
  await phone.waitForURL(`${origin}${prefix}${pages.cases[3].es}`);
  await phone.getByRole('link', { name: 'English (United States)', exact: true }).tap();
  await phone.waitForURL(`${origin}${prefix}${pages.cases[3].en}`);
  await phone.screenshot({ path: `${screenshots}/case-04-mobile.png`, fullPage: true });
  console.log('PASS: 320/390/768px, no horizontal overflow, touch target, tap navigation, no touch tilt.');
  assert.deepEqual(errors, [], 'No browser errors or failed desktop resources');
  console.log('All project UI checks passed.');
} finally {
  await browser.close();
}
