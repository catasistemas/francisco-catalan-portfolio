import { ArrowLeft, ArrowRight, BrainCircuit, Clock3, FileCheck2, RefreshCw, ShieldCheck, UserCheck } from 'lucide-react';
import type { Language } from '../content';
import { peoplePlatformCase } from '../case-studies/people-platform';
import { pageHref } from '../routes';
import SiteHeader from './site-header';
import SiteFooter from './site-footer';
import DocumentLanguage from './document-language';
import ProjectVisual from './project-visual';
import './projects.css';
import './case-study.css';

export default function PeoplePlatformCase({ language }: { language: Language }) {
  const t = peoplePlatformCase[language];
  const sections = [
    { id: 'context', title: t.context.title },
    { id: 'access', title: t.access.title },
    { id: 'features', title: t.features.title },
    { id: 'intelligence', title: t.intelligence.title },
    { id: 'technical', title: t.technical.title },
    { id: 'evolution', title: t.evolution.title },
    { id: 'impact', title: t.impact.title },
  ];

  return (
    <main className="site-shell case-study case-theme-orange" lang={language}>
      <DocumentLanguage language={language} />
      <div className="noise" aria-hidden="true" />
      <SiteHeader language={language} page="people" />
      <article id="top" className="section-wrap">
        <a className="case-back-link" href={`${pageHref('home', language)}#casos`}><ArrowLeft size={16} aria-hidden="true" /> {t.back}</a>
        <header className="case-hero">
          <div><p className="section-kicker">{t.caseLabel}</p><h1>{t.title}</h1><p className="case-summary">{t.summary}</p></div>
          <div className="case-hero-art project-tone-orange"><ProjectVisual variant="04" /><span className="case-art-caption"><BrainCircuit size={14} aria-hidden="true" /> JavaScript · FastAPI · PostgreSQL · OCR · {language === 'es' ? 'IA privada' : 'Private AI'}</span></div>
        </header>
        <dl className="case-facts">
          <div><dt>{t.companyLabel}</dt><dd>{t.company}</dd></div>
          <div><dt>{t.areaLabel}</dt><dd>{t.category}</dd></div>
          <div><dt>{t.roleLabel}</dt><dd>{t.role}</dd></div>
        </dl>
        <div className="case-reading-layout">
          <nav className="case-toc" aria-label={t.contents}><p>{t.contents}</p>{sections.map((section, index) => <a href={`#${section.id}`} key={section.id}><span>0{index + 1}</span>{section.title}</a>)}</nav>
          <div className="case-body">
            <section id="context" className="case-chapter"><p className="section-kicker">01</p><h2>{t.context.title}</h2>{t.context.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</section>
            <section id="access" className="case-chapter"><p className="section-kicker">02</p><h2>{t.access.title}</h2><p>{t.access.intro}</p><ul>{t.access.items.map((item) => <li key={item}>{item}</li>)}</ul></section>
            <section id="features" className="case-chapter"><p className="section-kicker">03</p><h2>{t.features.title}</h2><p>{t.features.intro}</p><ul className="document-outcomes">{t.features.items.map((item, index) => <li key={item}><span>{index % 3 === 0 ? <Clock3 /> : index % 3 === 1 ? <UserCheck /> : <FileCheck2 />}</span>{item}</li>)}</ul></section>
            <section id="intelligence" className="case-chapter"><p className="section-kicker">04</p><h2>{t.intelligence.title}</h2>{t.intelligence.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}<figure className="case-flow"><figcaption>{t.flowLabel}</figcaption><ol>{t.flow.map((step, index) => <li key={step.title}><span className="flow-number">0{index + 1}</span><strong>{step.title}</strong><span>{step.description}</span></li>)}</ol><p>{t.confidentiality}</p></figure><ul className="technical-grid">{t.intelligence.principles.map((item) => <li key={item}>{item}</li>)}</ul><aside className="related-project-note"><ShieldCheck aria-hidden="true" /><div><strong>{language === 'es' ? 'Supervisión humana' : 'Human oversight'}</strong><p>{t.intelligence.oversight}</p></div></aside></section>
            <section id="technical" className="case-chapter"><p className="section-kicker">05</p><h2>{t.technical.title}</h2><p>{t.technical.intro}</p><ul className="technical-grid">{t.technical.items.map((item) => <li key={item}>{item}</li>)}</ul></section>
            <section id="evolution" className="case-chapter"><p className="section-kicker">06</p><h2>{t.evolution.title}</h2><aside className="role-evolution"><span className="chapter-icon"><RefreshCw aria-hidden="true" /></span><div><h3>{language === 'es' ? 'Producto vivo' : 'A living product'}</h3>{t.evolution.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div></aside></section>
            <section id="impact" className="case-chapter"><p className="section-kicker">07</p><h2>{t.impact.title}</h2><p>{t.impact.intro}</p><ul>{t.impact.items.map((item) => <li key={item}>{item}</li>)}</ul><p className="impact-closing">{t.impact.closing}</p></section>
          </div>
        </div>
        <aside className="case-closing"><p>{t.closing}</p><a className="text-link" href={`${pageHref('home', language)}#contacto`}>{t.closingLink}<ArrowRight size={16} aria-hidden="true" /></a></aside>
      </article>
      <SiteFooter language={language} />
    </main>
  );
}
