import { ArrowLeft, ArrowRight, GitBranch } from 'lucide-react';
import type { Language } from '../content';
import { collectionsCase } from '../case-studies/collections';
import { pageHref } from '../routes';
import SiteHeader from './site-header';
import SiteFooter from './site-footer';
import DocumentLanguage from './document-language';
import ProjectVisual from './project-visual';
import './projects.css';
import './case-study.css';

export default function CollectionsCase({ language }: { language: Language }) {
  const t = collectionsCase[language];
  const sections = [{ id: 'context', title: t.context.title }, { id: 'responsibility', title: t.responsibility.title }, { id: 'solution', title: t.solution.title }, { id: 'impact', title: t.impact.title }];
  return (
    <main className="site-shell case-study case-theme-lime" lang={language}>
      <DocumentLanguage language={language} />
      <div className="noise" aria-hidden="true" />
      <SiteHeader language={language} page="collections" />
      <article id="top" className="section-wrap">
        <a className="case-back-link" href={`${pageHref('home', language)}#casos`}><ArrowLeft size={16} aria-hidden="true" /> {t.back}</a>
        <header className="case-hero">
          <div>
            <p className="section-kicker">{t.caseLabel}</p>
            <h1>{t.title}</h1>
            <p className="case-summary">{t.summary}</p>
          </div>
          <div className="case-hero-art project-tone-lime"><ProjectVisual variant="02" /><span className="case-art-caption"><GitBranch size={14} aria-hidden="true" /> Angular · Python · Flask · SQL Server · SFTP</span></div>
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
            <section id="responsibility" className="case-chapter"><p className="section-kicker">02</p><h2>{t.responsibility.title}</h2>{t.responsibility.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</section>
            <section id="solution" className="case-chapter">
              <p className="section-kicker">03</p><h2>{t.solution.title}</h2>
              <figure className="case-flow"><figcaption>{t.flowLabel}</figcaption><ol>{t.flow.map((step, index) => <li key={step.title}><span className="flow-number">0{index + 1}</span><strong>{step.title}</strong><span>{step.description}</span></li>)}</ol><p>{t.confidentiality}</p></figure>
              <h3>{t.solution.configurationIntro}</h3><ul>{t.solution.configuration.map((item) => <li key={item}>{item}</li>)}</ul>
              <h3>{t.solution.developmentIntro}</h3><ul>{t.solution.development.map((item) => <li key={item}>{item}</li>)}</ul>
            </section>
            <section id="impact" className="case-chapter"><p className="section-kicker">04</p><h2>{t.impact.title}</h2>
              <dl className="case-impact">{t.metrics.map((metric) => <div key={metric.value}><dt>{metric.label}</dt><dd>{metric.value}<span>{metric.detail}</span></dd></div>)}</dl>
              {t.impact.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </section>
          </div>
        </div>
        <aside className="case-closing"><p>{t.closing}</p><a className="text-link" href={`${pageHref('home', language)}#contacto`}>{t.closingLink}<ArrowRight size={16} aria-hidden="true" /></a></aside>
      </article>
      <SiteFooter language={language} />
    </main>
  );
}
