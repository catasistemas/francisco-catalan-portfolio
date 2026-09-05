'use client';

import { useEffect, useRef } from 'react';
import { ArrowDown, ArrowUpRight, MoveUpRight } from 'lucide-react';
import { caseStudies, experience, marqueeWords, navItems, services, skills } from '../content';

function Reveal({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <div className={`reveal ${className}`}>{children}</div>;
}

export default function PortfolioPage() {
  const shellRef = useRef<HTMLElement>(null);

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
    return () => observer.disconnect();
  }, []);

  return (
    <main ref={shellRef} className="site-shell">
      <div className="noise" aria-hidden="true" />
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Francisco Catalán, inicio"><span className="brand-mark">FC</span><span className="brand-name">Francisco Catalán</span></a>
        <nav className="main-nav" aria-label="Navegación principal">{navItems.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}</nav>
        <a className="header-link" href="https://www.linkedin.com/in/francisco-catalan-289a6115b/" target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={14} strokeWidth={1.5} aria-hidden="true" /></a>
      </header>

      <section id="top" className="hero section-wrap">
        <Reveal className="hero-copy">
          <p className="eyebrow"><span className="eyebrow-dot" /> Disponible para nuevas oportunidades</p>
          <h1>Full-Stack <span>Developer</span></h1>
          <p className="hero-intro">Diseño y desarrollo productos digitales que convierten procesos complejos en experiencias claras, escalables y útiles para el negocio.</p>
          <div className="hero-actions"><a className="button button-dark" href="/CV_Francisco_Catalan_FullStack.pdf" download>Descargar CV <ArrowDown size={15} aria-hidden="true" /></a><a className="button button-quiet" href="#contacto">Hablemos <ArrowUpRight size={15} aria-hidden="true" /></a></div>
          <div className="hero-meta"><span>Madrid, España</span><span className="meta-divider" aria-hidden="true" /><span>+5 años de experiencia</span></div>
        </Reveal>
        <Reveal className="hero-visual">
          <div className="hero-orbit orbit-one" aria-hidden="true" /><div className="hero-orbit orbit-two" aria-hidden="true" /><div className="hero-orbit orbit-three" aria-hidden="true" />
          <div className="portrait-frame"><img src="/francisco-avatar.png" alt="Retrato editorial de Francisco Catalán" /><span className="portrait-glow" aria-hidden="true" /></div>
          <div className="portrait-caption"><span>01 / 04</span><span>Construir con propósito</span></div>
          <div className="floating-note note-top"><span className="note-label">Focus</span><strong>End-to-end</strong></div><div className="floating-note note-bottom"><span className="note-label">Now learning</span><strong>Big Data &amp; Analytics</strong></div>
        </Reveal>
      </section>

      <div className="marquee" aria-label="Especialidades"><div className="marquee-track">{[...marqueeWords, ...marqueeWords].map((word, index) => <span key={`${word}-${index}`}>{word} <b>✦</b></span>)}</div></div>

      <section id="perfil" className="intro-band section-wrap"><Reveal><div className="section-kicker">/ 01 — Perfil</div></Reveal><div className="intro-grid"><Reveal><h2>La tecnología funciona mejor cuando entiende a las personas.</h2></Reveal><Reveal className="intro-body"><p>Soy ingeniero en sistemas y desarrollador Full-Stack. Me muevo entre frontend, backend y negocio para convertir necesidades reales en software que se puede mantener, medir y hacer crecer.</p><p>Actualmente trabajo en soluciones con inteligencia artificial mientras curso un Máster en Big Data &amp; Business Analytics. Mi forma de aportar combina criterio técnico, comunicación directa y obsesión por quitar fricción.</p><a className="text-link" href="mailto:catalan.sistemas@gmail.com">Conectar por email <ArrowUpRight size={15} aria-hidden="true" /></a></Reveal></div></section>

      <section className="services-section"><div className="section-wrap"><Reveal><div className="section-kicker">/ Cómo aporto</div></Reveal><div className="services-grid">{services.map((service) => <Reveal className="service-item" key={service.number}><span className="service-number">{service.number}</span><h3>{service.title}</h3><p>{service.copy}</p></Reveal>)}</div></div></section>

      <section id="casos" className="cases-section section-wrap"><Reveal><div className="section-heading"><div className="section-kicker">/ 02 — Casos seleccionados</div><p>Experiencia real, contada desde el problema hasta el impacto.</p></div></Reveal><div className="cases-grid">{caseStudies.map((item) => <Reveal className="case-card-wrap" key={item.index}><article className={`case-card tone-${item.tone}`}><div className="case-topline"><span>{item.index}</span><span>{item.eyebrow}</span></div><div className="case-symbol" aria-hidden="true"><span /></div><h3>{item.title}</h3><p>{item.description}</p><div className="case-bottom"><div><span className="case-label">Resultado</span><strong>{item.result}</strong></div><div><span className="case-label">Stack</span><span>{item.tools}</span></div></div></article></Reveal>)}</div></section>

      <section className="numbers-band section-wrap" aria-label="En números"><div className="number-item"><strong>5+</strong><span>años construyendo<br />software</span></div><div className="number-item"><strong>3+</strong><span>plataformas<br />corporativas</span></div><div className="number-item"><strong>2,2 M</strong><span>clientes potenciales<br />en producto digital</span></div><div className="number-item"><strong>3 min</strong><span>procesos reducidos<br />de horas a minutos</span></div></section>

      <section id="trayectoria" className="trajectory section-wrap"><Reveal><div className="section-kicker">/ 03 — Trayectoria</div></Reveal><div className="trajectory-grid"><Reveal><h2>Una carrera entre sistemas críticos y nuevas posibilidades.<span className="accent-dot">·</span><p className="trajectory-aside">De AS/400 a soluciones con IA: la curiosidad técnica solo importa cuando produce resultados visibles.</p></h2></Reveal><div className="timeline">{experience.map((item) => <Reveal className="timeline-item" key={item.company}><div className="timeline-date">{item.date}</div><div className="timeline-content"><h3>{item.company}</h3><p className="timeline-role">{item.role}</p><p>{item.copy}</p><span className="timeline-location">{item.location}</span></div></Reveal>)}</div></div></section>

      <section className="toolkit section-wrap"><Reveal><div className="section-kicker">/ 04 — Toolkit</div></Reveal><div className="toolkit-grid"><Reveal><h2>Las herramientas son el medio. El criterio, la diferencia.</h2></Reveal><Reveal className="skills-cloud">{skills.map((skill) => <span key={skill}>{skill}</span>)}</Reveal></div></section>

      <section id="contacto" className="contact-section section-wrap"><Reveal className="contact-card"><div className="contact-copy"><div className="section-kicker">/ 05 — Contacto</div><h2>¿Tienes un reto interesante?</h2><p>Estoy disponible para conversar sobre oportunidades Full-Stack en España y proyectos donde el software tenga que hacer algo más que funcionar.</p></div><div className="contact-actions"><a className="contact-email" href="mailto:catalan.sistemas@gmail.com">catalan.sistemas@gmail.com <ArrowUpRight size={19} aria-hidden="true" /></a><div className="contact-links"><a href="https://www.linkedin.com/in/francisco-catalan-289a6115b/" target="_blank" rel="noreferrer">LinkedIn ↗</a><a href="/CV_Francisco_Catalan_FullStack.pdf" download>Descargar CV ↓</a></div></div></Reveal></section>
      <footer className="site-footer section-wrap"><span>© {new Date().getFullYear()} Francisco Catalán</span><span>Full-Stack Developer · Madrid</span><a href="#top"><MoveUpRight size={13} aria-hidden="true" /> Volver arriba</a></footer>
    </main>
  );
}
