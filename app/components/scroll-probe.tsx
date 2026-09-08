'use client';

import { useEffect, useRef, useState } from 'react';
import type { PointerEvent as ReactPointerEvent } from 'react';
import { ArrowUp, Sparkles } from 'lucide-react';
import type { Language } from '../content';
import './scroll-probe.css';

const labels: Record<Language, string> = {
  es: 'Volver arriba',
  en: 'Back to top',
};

export default function ScrollProbe() {
  const probeRef = useRef<HTMLDivElement>(null);
  const linkRef = useRef<HTMLAnchorElement>(null);
  const [language, setLanguage] = useState<Language>('es');

  useEffect(() => {
    const probe = probeRef.current;
    const link = linkRef.current;
    if (!probe || !link) return;

    setLanguage(document.querySelector('main[lang="en"]') ? 'en' : 'es');
    let animationFrame = 0;

    const update = () => {
      cancelAnimationFrame(animationFrame);
      animationFrame = requestAnimationFrame(() => {
        const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
        const progress = maxScroll > 0 ? Math.min(1, Math.max(0, window.scrollY / maxScroll)) : 0;
        const visible = maxScroll > 0 && window.scrollY > Math.min(420, window.innerHeight * 0.45);

        probe.style.setProperty('--probe-progress', `${progress}`);
        probe.classList.toggle('is-visible', visible);
        probe.classList.toggle('is-near-end', progress > 0.82);
        probe.setAttribute('aria-hidden', visible ? 'false' : 'true');
        link.tabIndex = visible ? 0 : -1;
      });
    };

    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update, { passive: true });

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, []);

  const handlePointerMove = (event: ReactPointerEvent<HTMLAnchorElement>) => {
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - bounds.left - bounds.width / 2) * 0.13;
    const y = (event.clientY - bounds.top - bounds.height / 2) * 0.13;
    event.currentTarget.style.setProperty('--probe-x', `${x}px`);
    event.currentTarget.style.setProperty('--probe-y', `${y}px`);
  };

  const resetPointer = (event: ReactPointerEvent<HTMLAnchorElement>) => {
    event.currentTarget.style.removeProperty('--probe-x');
    event.currentTarget.style.removeProperty('--probe-y');
  };

  return (
    <div ref={probeRef} className="scroll-probe" aria-hidden="true">
      <span className="scroll-probe-track" aria-hidden="true"><span /></span>
      <a
        ref={linkRef}
        className="scroll-probe-link"
        href="#top"
        aria-label={labels[language]}
        tabIndex={-1}
        onPointerMove={handlePointerMove}
        onPointerLeave={resetPointer}
      >
        <span className="scroll-probe-label" aria-hidden="true">{labels[language]}</span>
        <span className="scroll-probe-core" aria-hidden="true">
          <span className="scroll-probe-orbit"><i /><i /></span>
          <Sparkles className="scroll-probe-spark" size={11} />
          <ArrowUp className="scroll-probe-arrow" size={18} strokeWidth={1.8} />
        </span>
      </a>
    </div>
  );
}
