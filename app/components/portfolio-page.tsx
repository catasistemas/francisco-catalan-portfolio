'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { ArrowDown, ArrowUpRight, Sparkles } from 'lucide-react';
import { copy, Language } from '../content';
import ToolkitConstellation from './toolkit-constellation';
import SiteHeader from './site-header';
import SiteFooter from './site-footer';
import ProjectCards from './project-cards';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

type PortfolioPageProps = {
  initialLanguage?: Language;
};

function Reveal({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <div className={`reveal ${className}`}>{children}</div>;
}

export default function PortfolioPage({
  initialLanguage = 'es',
}: PortfolioPageProps = {}) {
  const shellRef = useRef<HTMLElement>(null);
  const language = initialLanguage;
  const t = copy[language];

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  useEffect(() => {
    const shell = shellRef.current;
    if (!shell) return;
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add('is-visible');
      }),
      { threshold: 0.12 },
    );
    shell.querySelectorAll('.reveal').forEach((element) => observer.observe(element));

    const updateMotion = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      shell.style.setProperty('--scroll-progress', `${maxScroll ? window.scrollY / maxScroll : 0}`);
    };
    const updatePointer = (event: PointerEvent) => {
      const x = event.clientX / window.innerWidth - 0.5;
      const y = event.clientY / window.innerHeight - 0.5;
      shell.style.setProperty('--pointer-x', `${x}`);
      shell.style.setProperty('--pointer-y', `${y}`);
    };
    updateMotion();
    window.addEventListener('scroll', updateMotion, { passive: true });
    window.addEventListener('pointermove', updatePointer, { passive: true });
    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', updateMotion);
      window.removeEventListener('pointermove', updatePointer);
    };
  }, []);

  return (
    <main ref={shellRef} className="site-shell" lang={language}>
      <div className="scroll-progress" aria-hidden="true" />
      <div className="noise" aria-hidden="true" />
      <SiteHeader language={language} />

      <section id="top" className="hero section-wrap">
        <div className="hero-grid-lines" aria-hidden="true" />
        <Reveal className="hero-copy">
          <p className="eyebrow"><span className="eyebrow-dot" /> {t.available}</p>
          <h1><span className="hero-title-line">Full-Stack</span><span className="hero-title-line hero-title-accent">Developer</span></h1>
          <p className="hero-intro">{t.heroIntro}</p>
          <div className="hero-actions"><a className="button button-dark" href={`${basePath}/CV_Francisco_Catalan_FullStack.pdf`} download>{t.downloadCv} <ArrowDown size={15} aria-hidden="true" /></a><a className="button button-quiet" href="#contacto">{t.talk} <ArrowUpRight size={15} aria-hidden="true" /></a></div>
          <div className="hero-meta"><span>{t.location}</span><span className="meta-divider" aria-hidden="true" /><span>{t.experienceMeta}</span></div>
        </Reveal>
        <Reveal className="hero-visual">
          <div className="hero-cursor-orb" aria-hidden="true" /><div className="hero-orbit orbit-one" aria-hidden="true" /><div className="hero-orbit orbit-two" aria-hidden="true" /><div className="hero-orbit orbit-three" aria-hidden="true" />
          <div className="portrait-frame"><Image src={`${basePath}/francisco-avatar.png`} alt={language === 'es' ? 'Retrato editorial de Francisco Catalán' : 'Editorial portrait of Francisco Catalán'} width={760} height={980} sizes="(max-width: 900px) 76vw, 395px" priority unoptimized /><span className="portrait-glow" aria-hidden="true" /></div>
          <div className="portrait-caption"><span>01 / 04</span><span>{t.portraitCaption}</span></div>
          <div className="floating-note note-top"><span className="note-label">{t.focus}</span><strong>End-to-end</strong></div><div className="floating-note note-bottom"><span className="note-label">{t.learning}</span><strong>Big Data &amp; Analytics</strong></div>
          <div className="scroll-cue"><span>Scroll to explore</span><ArrowDown size={15} aria-hidden="true" /></div>
        </Reveal>
      </section>

      <div className="marquee" aria-label={language === 'es' ? 'Especialidades' : 'Specialties'}><div className="marquee-track">{[...t.marquee, ...t.marquee].map((word, index) => <span key={`${word}-${index}`}>{word} <b>✦</b></span>)}</div></div>

      <section id="perfil" className="intro-band section-wrap"><Reveal><div className="section-kicker">{t.profileKicker}</div></Reveal><div className="intro-grid"><Reveal><h2>{t.profileTitle}</h2></Reveal><Reveal className="intro-body"><p>{t.profileParagraphs[0]}</p><p>{t.profileParagraphs[1]}</p><a className="text-link" href="mailto:catalan.sistemas@gmail.com">{t.emailCta} <ArrowUpRight size={15} aria-hidden="true" /></a></Reveal></div></section>

      <section className="services-section"><div className="section-wrap"><Reveal><div className="section-kicker">{t.servicesKicker}</div></Reveal><div className="services-grid">{t.services.map((service) => <Reveal className="service-item" key={service.number}><span className="service-number">{service.number}</span><h3>{service.title}</h3><p>{service.copy}</p></Reveal>)}</div></div></section>

      <section id="casos" className="cases-section section-wrap"><Reveal><div className="section-heading"><div className="section-kicker">{t.casesKicker}</div><p>{t.casesIntro}</p></div></Reveal><ProjectCards language={language} /></section>

      <section className="numbers-band section-wrap" aria-label={t.statsLabel}>{t.stats.map((stat) => <div className="number-item" key={stat.value}><strong className={stat.value.length > 7 ? 'number-value-compact' : undefined}>{stat.value}</strong><span>{stat.line1}<br />{stat.line2}</span></div>)}</section>

      <section id="trayectoria" className="trajectory section-wrap"><Reveal><div className="section-kicker">{t.journeyKicker}</div></Reveal><div className="trajectory-grid"><Reveal><h2>{t.journeyTitle}<span className="accent-dot">·</span><p className="trajectory-aside">{t.journeyAside}</p></h2></Reveal><div className="timeline">{t.experience.map((item) => <Reveal className="timeline-item" key={item.company}><div className="timeline-date">{item.date}</div><div className="timeline-content"><h3>{item.company}</h3><p className="timeline-role">{item.role}</p><p>{item.copy}</p><span className="timeline-location">{item.location}</span></div></Reveal>)}</div></div></section>

      <section id="toolkit" className="toolkit section-wrap"><Reveal><div className="section-kicker">{t.toolkitKicker}</div></Reveal><div className="toolkit-grid"><Reveal><h2>{t.toolkitTitle}</h2></Reveal><Reveal className="toolkit-constellation-wrap"><ToolkitConstellation tools={t.toolkitTools} label={t.toolkitTitle} hint={t.toolkitHint} /></Reveal></div></section>

      <section id="contacto" className="contact-section section-wrap"><Reveal className="contact-card"><div className="contact-copy"><div className="section-kicker">{t.contactKicker}</div><h2>{t.contactTitle}</h2><p>{t.contactCopy}</p></div><div className="contact-actions"><a className="contact-email" href="mailto:catalan.sistemas@gmail.com">catalan.sistemas@gmail.com <ArrowUpRight size={19} aria-hidden="true" /></a><div className="contact-links"><a href="https://www.linkedin.com/in/francisco-catalan-289a6115b/" target="_blank" rel="noreferrer">{t.linkedin} ↗</a><a href={`${basePath}/CV_Francisco_Catalan_FullStack.pdf`} download>{t.cvShort}</a></div></div></Reveal></section>
      <SiteFooter language={language} />
      <div className="floating-sparkle" aria-hidden="true"><Sparkles size={16} /></div>
    </main>
  );
}
