import { ArrowLeft, ArrowRight, ArrowUpRight, CreditCard, Gift, Landmark, Layers3, MonitorSmartphone, Store, Users } from 'lucide-react';
import type { Language } from '../content';
import { commercialCreditCase } from '../case-studies/commercial-credit';
import { pageHref } from '../routes';
import SiteHeader from './site-header';
import SiteFooter from './site-footer';
import DocumentLanguage from './document-language';
import ProjectVisual from './project-visual';
import './projects.css';
import './case-study.css';

const publicSite = 'https://tarjetafashionspark.com/';

export default function CommercialCreditCase({ language }: { language: Language }) {
  const t = commercialCreditCase[language];
  const sections = [
    { id: 'context', title: t.context.title },
    { id: 'experience', title: t.experience.title },
    { id: 'integrations', title: t.integrations.title },
    { id: 'backoffice', title: t.backoffice.title },
    { id: 'technical', title: t.technical.title },
    { id: 'impact', title: t.impact.title },
  ];

  return (
    <main className="site-shell case-study case-theme-violet" lang={language}>
      <DocumentLanguage language={language} />
      <div className="noise" aria-hidden="true" />
      <SiteHeader language={language} page="credit" />
      <article id="top" className="section-wrap">
        <a className="case-back-link" href={`${pageHref('home', language)}#casos`}><ArrowLeft size={16} aria-hidden="true" /> {t.back}</a>
        <header className="case-hero">
          <div>
            <p className="section-kicker">{t.caseLabel}</p>
            <h1>{t.title}</h1>
            <p className="case-summary">{t.summary}</p>
            <a className="case-external-link" href={publicSite} target="_blank" rel="noreferrer">{t.externalSite}<ArrowUpRight size={16} aria-hidden="true" /></a>
          </div>
          <div className="case-hero-art project-tone-violet">
            <ProjectVisual variant="01" />
            <span className="case-art-caption"><CreditCard size={14} aria-hidden="true" /> Angular · Flask · Webpay · SQL Server · Azure</span>
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
              <figure className="case-flow"><figcaption>{t.flowLabel}</figcaption><ol>{t.flow.map((step, index) => <li key={step.title}><span className="flow-number">0{index + 1}</span><strong>{step.title}</strong><span>{step.description}</span></li>)}</ol><p>{t.confidentiality}</p></figure>
              {t.context.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </section>
            <section id="experience" className="case-chapter">
              <p className="section-kicker">02</p><h2>{t.experience.title}</h2>
              <div className="experience-split">
                <article><span className="chapter-icon"><Store /></span><h3>{t.experience.publicTitle}</h3><p>{t.experience.publicIntro}</p><ul>{t.experience.publicFeatures.map((item) => <li key={item}>{item}</li>)}</ul><p className="chapter-note">{t.experience.stores}</p></article>
                <article><span className="chapter-icon"><Users /></span><h3>{t.experience.privateTitle}</h3><p>{t.experience.privateIntro}</p><ul>{t.experience.privateFeatures.map((item) => <li key={item}>{item}</li>)}</ul><p className="chapter-note">{t.experience.benefits}</p></article>
              </div>
            </section>
            <section id="integrations" className="case-chapter">
              <p className="section-kicker">03</p><h2>{t.integrations.title}</h2><p>{t.integrations.intro}</p>
              <ul className="technical-grid">{t.integrations.items.map((item) => <li key={item}>{item}</li>)}</ul>
              <aside className="related-project-note"><Layers3 aria-hidden="true" /><div><strong>{t.integrations.relatedLabel}</strong><p>{t.integrations.related}</p></div></aside>
            </section>
            <section id="backoffice" className="case-chapter">
              <p className="section-kicker">04</p><h2>{t.backoffice.title}</h2>
              {t.backoffice.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              <h3>{t.backoffice.intro}</h3><ul className="backoffice-grid">{t.backoffice.items.map((item, index) => <li key={item}><span>{index % 2 ? <Gift /> : <MonitorSmartphone />}</span>{item}</li>)}</ul>
            </section>
            <section id="technical" className="case-chapter">
              <p className="section-kicker">05</p><h2>{t.technical.title}</h2><p>{t.technical.intro}</p>
              <ul className="technical-grid">{t.technical.responsibilities.map((item) => <li key={item}>{item}</li>)}</ul>
              <div className="role-evolution"><span className="chapter-icon"><Landmark /></span><div><h3>{t.evolution.title}</h3>{t.evolution.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}<h3>{t.evolution.uxTitle}</h3><p>{t.evolution.ux}</p></div></div>
            </section>
            <section id="impact" className="case-chapter">
              <p className="section-kicker">06</p><h2>{t.impact.title}</h2><p>{t.impact.intro}</p>
              <div className="case-scale"><strong>{t.impact.scale}</strong><span>{t.impact.scaleLabel}</span></div>
              <ul className="document-outcomes credit-outcomes">{t.impact.outcomes.map((item, index) => <li key={item}><span>{index % 2 ? <Landmark /> : <CreditCard />}</span>{item}</li>)}</ul>
            </section>
          </div>
        </div>
        <aside className="case-closing"><p>{t.closing}</p><a className="text-link" href={`${pageHref('home', language)}#contacto`}>{t.closingLink}<ArrowRight size={16} aria-hidden="true" /></a></aside>
      </article>
      <SiteFooter language={language} />
    </main>
  );
}
