'use client';

import { useEffect, useRef, useState, type PointerEvent } from 'react';
import { Braces, Check, Cloud, Database, FileText, Gauge, Monitor, ScanSearch, ShieldCheck, SlidersHorizontal } from 'lucide-react';
import type { Capability } from '../content';
import './capabilities-lab.css';

const visualIcons = {
  architecture: [Monitor, Braces, Database, Cloud],
  automation: [FileText, SlidersHorizontal, ScanSearch, Check],
  cloud: [FileText, Braces, ShieldCheck, Gauge],
};

function CapabilityFlow({ capability, active }: { capability: Capability; active: boolean }) {
  const icons = visualIcons[capability.visualType];
  return (
    <div className="capability-flow" aria-label={capability.flow.join(' → ')}>
      <span className="capability-trace" aria-hidden="true"><i /></span>
      {capability.flow.map((step, index) => {
        const Icon = icons[index];
        return <span className="capability-node" key={step} data-step={index + 1}><i aria-hidden="true"><Icon /></i><b>{step}</b>{index < capability.flow.length - 1 && <em aria-hidden="true">→</em>}</span>;
      })}
      <span className={`capability-signal${active ? ' is-running' : ''}`} aria-hidden="true" />
    </div>
  );
}

export default function CapabilitiesLab({ capabilities, practiceLabel }: { capabilities: Capability[]; practiceLabel: string }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const hostRef = useRef<HTMLDivElement>(null);
  const frame = useRef(0);

  useEffect(() => () => cancelAnimationFrame(frame.current), []);

  function movePointer(event: PointerEvent<HTMLDivElement>) {
    if (event.pointerType !== 'mouse' || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const host = hostRef.current;
    if (!host) return;
    const bounds = host.getBoundingClientRect();
    const x = Math.max(0, Math.min(1, (event.clientX - bounds.left) / bounds.width));
    const y = Math.max(0, Math.min(1, (event.clientY - bounds.top) / bounds.height));
    cancelAnimationFrame(frame.current);
    frame.current = requestAnimationFrame(() => {
      host.style.setProperty('--lab-x', `${x * 100}%`);
      host.style.setProperty('--lab-y', `${y * 100}%`);
      host.style.setProperty('--lab-shift-x', `${(x - .5) * 8}px`);
      host.style.setProperty('--lab-shift-y', `${(y - .5) * 6}px`);
    });
  }

  function resetPointer() {
    cancelAnimationFrame(frame.current);
    const host = hostRef.current;
    host?.style.removeProperty('--lab-x');
    host?.style.removeProperty('--lab-y');
    host?.style.removeProperty('--lab-shift-x');
    host?.style.removeProperty('--lab-shift-y');
  }

  return (
    <div ref={hostRef} className="capabilities-lab reveal" onPointerMove={movePointer} onPointerLeave={resetPointer}>
      <div className="capabilities-grid">
        {capabilities.map((capability, index) => {
          const active = activeIndex === index;
          return (
            <article className={`capability-card capability-${capability.accent}${active ? ' is-active' : ''}`} key={capability.number}>
              <button className="capability-trigger" type="button" aria-pressed={active} aria-controls={`capability-details-${capability.number}`} onPointerEnter={() => setActiveIndex(index)} onFocus={() => setActiveIndex(index)} onClick={() => setActiveIndex(index)}>
                <span className="capability-topline"><span className="capability-number">{capability.number}</span><span className="capability-state" aria-hidden="true">{active ? '●' : '○'}</span></span>
                <CapabilityFlow capability={capability} active={active} />
                <span className="capability-title">{capability.title}</span>
                <span className="capability-copy">{capability.copy}</span>
                <span className="capability-microcopy">{capability.microcopy}</span>
              </button>
              <div className="capability-details" id={`capability-details-${capability.number}`} aria-hidden={!active}>
                <span className="capability-tools-label">Stack</span>
                <div className="capability-tools">{capability.tools.map((tool) => <span key={tool}>{tool}</span>)}</div>
              </div>
            </article>
          );
        })}
      </div>
      <div className={`capabilities-practice capability-${capabilities[activeIndex].accent}`} aria-live="polite" aria-atomic="true">
        <span>{practiceLabel}</span><p key={activeIndex}>{capabilities[activeIndex].practicalCopy}</p><i aria-hidden="true">0{activeIndex + 1}</i>
      </div>
    </div>
  );
}
