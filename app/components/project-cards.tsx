'use client';

import { useEffect, useRef, type PointerEvent } from 'react';
import { ArrowRight, CreditCard, FileText, GitBranch, Workflow } from 'lucide-react';
import { copy, type Language, type SiteCopy } from '../content';
import { pageHref } from '../routes';
import ProjectVisual from './project-visual';
import './projects.css';

const symbols = [CreditCard, GitBranch, FileText, Workflow];

function ProjectCard({ item, language, index }: { item: SiteCopy['cases'][number]; language: Language; index: number }) {
  const hostRef = useRef<HTMLDivElement>(null);
  const frame = useRef(0);
  const motionAllowed = useRef(false);

  const resetMotion = () => {
    cancelAnimationFrame(frame.current);
    frame.current = 0;
    const host = hostRef.current;
    for (const property of ['--tilt-x', '--tilt-y', '--visual-x', '--visual-y', '--glow-x', '--glow-y']) {
      host?.style.removeProperty(property);
    }
  };

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;
    const preference = window.matchMedia('(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)');
    const updatePreference = () => { motionAllowed.current = preference.matches; resetMotion(); };
    updatePreference();
    preference.addEventListener('change', updatePreference);
    const observer = new IntersectionObserver(([entry]) => {
      host.dataset.inView = String(entry.isIntersecting);
      if (!entry.isIntersecting) resetMotion();
    });
    observer.observe(host);
    return () => { observer.disconnect(); preference.removeEventListener('change', updatePreference); resetMotion(); };
  }, []);

  function movePointer(event: PointerEvent<HTMLDivElement>) {
    if (!motionAllowed.current || event.pointerType !== 'mouse') return;
    const host = hostRef.current;
    if (!host) return;
    const bounds = host.getBoundingClientRect();
    const x = Math.max(0, Math.min(1, (event.clientX - bounds.left) / bounds.width));
    const y = Math.max(0, Math.min(1, (event.clientY - bounds.top) / bounds.height));
    cancelAnimationFrame(frame.current);
    frame.current = requestAnimationFrame(() => {
      host.style.setProperty('--tilt-x', `${(0.5 - y) * 5}deg`);
      host.style.setProperty('--tilt-y', `${(x - 0.5) * 5}deg`);
      host.style.setProperty('--visual-x', `${(x - 0.5) * 12}px`);
      host.style.setProperty('--visual-y', `${(y - 0.5) * 8}px`);
      host.style.setProperty('--glow-x', `${x * 100}%`);
      host.style.setProperty('--glow-y', `${y * 100}%`);
      frame.current = 0;
    });
  }

  const Symbol = symbols[index];
  return (
    <div ref={hostRef} className={`project-card-wrap project-tone-${item.tone}`} onPointerMove={movePointer} onPointerLeave={resetMotion} onPointerCancel={resetMotion}>
      <article className="project-card" aria-labelledby={`project-title-${item.index}`}>
        <div className="project-topline"><span>{item.index} <span className="project-index-line" /></span><span>{item.eyebrow}</span></div>
        <ProjectVisual variant={item.index} />
        <div className="project-content">
          <div className="project-title-row"><span className="project-symbol" aria-hidden="true"><Symbol size={18} /></span><h3 id={`project-title-${item.index}`}>{item.title}</h3></div>
          <p className="project-description">{item.description}</p>
          <div className="project-bottom">
            <div><span className="project-label">{item.resultLabel}</span><strong>{item.result}</strong></div>
            <div><span className="project-label">{item.stackLabel}</span><span>{item.tools}</span></div>
          </div>
          {item.index === '02' && <a className="project-case-link" href={pageHref('collections', language)}>
            {language === 'es' ? 'Ver caso completo' : 'Read the full case study'} <ArrowRight size={18} aria-hidden="true" />
          </a>}
        </div>
      </article>
    </div>
  );
}

export default function ProjectCards({ language }: { language: Language }) {
  return <div className="cases-grid project-grid">{copy[language].cases.map((item, index) => <ProjectCard key={item.index} item={item} language={language} index={index} />)}</div>;
}
