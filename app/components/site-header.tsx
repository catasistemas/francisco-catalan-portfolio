import { ArrowUpRight } from 'lucide-react';
import { copy, type Language } from '../content';
import { pageHref, type PageKey } from '../routes';

export default function SiteHeader({ language, page = 'home' }: { language: Language; page?: PageKey }) {
  const t = copy[language];
  const home = page === 'home' ? '' : pageHref('home', language);

  return (
    <header className="site-header">
      <a className="brand" href={`${home}#top`} aria-label={`Francisco Catalán, ${language === 'es' ? 'inicio' : 'home'}`}>
        <span className="brand-mark">FC</span><span className="brand-name">Francisco Catalán</span>
      </a>
      <nav className="main-nav" aria-label={language === 'es' ? 'Navegación principal' : 'Main navigation'}>
        <a href={`${home}#perfil`}>{t.nav.profile}</a>
        <a href={`${home}#casos`}>{t.nav.cases}</a>
        <a href={`${home}#trayectoria`}>{t.nav.journey}</a>
        <a href={`${home}#contacto`}>{t.nav.contact}</a>
      </nav>
      <div className="header-actions">
        <div className="language-switcher" aria-label={t.languageLabel}>
          <a className={`language-button${language === 'es' ? ' is-active' : ''}`} href={pageHref(page, 'es')} hrefLang="es" aria-label="Español" aria-current={language === 'es' ? 'page' : undefined}>
            <span className="flag flag-spain" aria-hidden="true" />
          </a>
          <a className={`language-button${language === 'en' ? ' is-active' : ''}`} href={pageHref(page, 'en')} hrefLang="en" aria-label="English (United States)" aria-current={language === 'en' ? 'page' : undefined}>
            <span className="flag flag-united-states" aria-hidden="true" />
          </a>
        </div>
        <a className="header-link" href="https://www.linkedin.com/in/francisco-catalan-289a6115b/" target="_blank" rel="noreferrer">
          {t.linkedin} <ArrowUpRight size={14} strokeWidth={1.5} aria-hidden="true" />
        </a>
      </div>
    </header>
  );
}
