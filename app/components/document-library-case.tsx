import { ArrowLeft, ArrowRight, Cloud, FileSearch, MoonStar, ShieldCheck } from 'lucide-react';
import type { Language } from '../content';
import { documentLibraryCase } from '../case-studies/document-library';
import { pageHref } from '../routes';
import SiteHeader from './site-header';
import SiteFooter from './site-footer';
import DocumentLanguage from './document-language';
import ProjectVisual from './project-visual';
import './projects.css';
import './case-study.css';

export default function DocumentLibraryCase({ language }: { language: Language }) {
  const t = documentLibraryCase[language];
  const sections = [
    { id: 'context', title: t.context.title },
    { id: 'solution', title: t.solution.title },
    { id: 'technical', title: t.technical.title },
    { id: 'impact', title: t.impact.title },
  ];

  return (
    <main className="site-shell case-study case-theme-blue" lang={language}>
      <DocumentLanguage language={language} />
      <div className="noise" aria-hidden="true" />
      <SiteHeader language={language} page="documents" />
      <article id="top" className="section-wrap">
        <a className="case-back-link" href={`${pageHref('home', language)}#casos`}><ArrowLeft size={16} aria-hidden="true" /> {t.back}</a>
        <header className="case-hero">
          <div>
            <p className="section-kicker">{t.caseLabel}</p>
            <h1>{t.title}</h1>
            <p className="case-summary">{t.summary}</p>
          </div>
          <div className="case-hero-art project-tone-blue">
            <ProjectVisual variant="03" />
            <span className="case-art-caption"><Cloud size={14} aria-hidden="true" /> Angular · Flask · Graph · OneDrive · SQL Server</span>
          </div>
        </header>
        <dl className="case-facts">
          <div><dt>{t.companyLabel}</dt><dd>{t.company}</dd></div>
          <div><dt>{t.areaLabel}</dt><dd>{t.category}</dd></div>
          <div><dt>{t.roleLabel}</dt><dd>{t.role}</dd></div>
        </dl>
        <div className="case-reading-layout">
          <nav className="case-toc" aria-label={t.contents}>
            <p>{t.contents}</p>
            {sections.map((section, index) => <a href={`#${section.id}`} key={section.id}><span>0{index + 1}</span>{section.title}</a>)}
          </nav>
          <div className="case-body">
            <section id="context" className="case-chapter">
              <p className="section-kicker">01</p><h2>{t.context.title}</h2>
              {t.context.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </section>
            <section id="solution" className="case-chapter">
              <p className="section-kicker">02</p><h2>{t.solution.title}</h2>
              <figure className="case-flow"><figcaption>{t.flowLabel}</figcaption><ol>{t.flow.map((step, index) => <li key={step.title}><span className="flow-number">0{index + 1}</span><strong>{step.title}</strong><span>{step.description}</span></li>)}</ol><p>{t.confidentiality}</p></figure>
              {t.solution.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              <h3>{t.solution.apiIntro}</h3><ul>{t.solution.apis.map((item) => <li key={item}>{item}</li>)}</ul>
              <aside className="related-project-note"><FileSearch aria-hidden="true" /><div><strong>{t.solution.relatedLabel}</strong><p>{t.solution.related}</p></div></aside>
            </section>
            <section id="technical" className="case-chapter">
              <p className="section-kicker">03</p><h2>{t.technical.title}</h2><p>{t.technical.intro}</p>
              <ul className="technical-grid">{t.technical.responsibilities.map((item) => <li key={item}>{item}</li>)}</ul>
            </section>
            <section id="impact" className="case-chapter">
              <p className="section-kicker">04</p><h2>{t.impact.title}</h2><p>{t.impact.intro}</p>
              <ul className="document-outcomes">{t.impact.outcomes.map((item, index) => <li key={item}><span>{index % 3 === 0 ? <Cloud /> : index % 3 === 1 ? <ShieldCheck /> : <MoonStar />}</span>{item}</li>)}</ul>
              <p className="impact-closing">{t.impact.closing}</p>
            </section>
          </div>
        </div>
        <aside className="case-closing"><p>{t.closing}</p><a className="text-link" href={`${pageHref('home', language)}#contacto`}>{t.closingLink}<ArrowRight size={16} aria-hidden="true" /></a></aside>
      </article>
      <SiteFooter language={language} />
    </main>
  );
}
