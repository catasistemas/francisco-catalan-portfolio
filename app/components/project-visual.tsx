import { ArrowUpRight, Building2, Check, Cloud, Cpu, FileSearch, FileText, GitBranch, Layers3, MoonStar, ShieldCheck, Users, Workflow } from 'lucide-react';

// Decorative, original abstractions. No screenshots, account numbers or business data.
export default function ProjectVisual({ variant }: { variant: string }) {
  return (
    <div className={`project-visual visual-${variant}`} aria-hidden="true">
      <div className="visual-orbit" />
      <div className="visual-ground" />
      <div className="visual-float">
        {variant === '01' && <>
          <div className="credit-object credit-rear"><span className="credit-stripe" /></div>
          <div className="credit-object credit-front"><span className="credit-chip" /><ArrowUpRight /><span className="credit-lines"><i /><i /><i /></span><span className="credit-circles" /></div>
          <div className="visual-token token-credit"><ShieldCheck /></div>
          <span className="visual-dot dot-one" /><span className="visual-dot dot-two" />
        </>}
        {variant === '02' && <>
          <svg className="visual-connections" viewBox="0 0 320 200"><path d="M68 104H116M204 104H252M160 48V70M160 135V166" /><circle cx="68" cy="104" r="3" /><circle cx="252" cy="104" r="3" /></svg>
          <div className="data-layer layer-bottom" /><div className="data-layer layer-middle" />
          <div className="data-layer layer-top"><GitBranch /></div>
          <div className="visual-token token-clients"><Users /></div>
          <div className="visual-token token-agencies"><Building2 /></div>
          <div className="visual-token token-rules"><Layers3 /></div>
          <span className="visual-dot dot-two" />
        </>}
        {variant === '03' && <>
          <svg className="visual-connections" viewBox="0 0 320 200"><path d="M160 45V116H67M160 116H251M160 116V177" /></svg>
          <div className="cloud-object"><Cloud /></div>
          <div className="document-object document-rear"><FileText /><i /><i /></div>
          <div className="document-object document-front"><FileText /><i /><i /><span><Check /></span></div>
          <div className="visual-token token-search"><FileSearch /></div>
          <div className="visual-token token-batch"><MoonStar /></div>
          <span className="visual-dot dot-one" />
        </>}
        {variant === '04' && <>
          <svg className="visual-connections" viewBox="0 0 320 200"><path d="M74 116H116V86H205V116H249M160 124V159" /></svg>
          <div className="process-block process-left"><Users /></div>
          <div className="process-block process-center"><Cpu /><span className="chip-pin pin-left" /><span className="chip-pin pin-right" /></div>
          <div className="process-block process-right"><Workflow /></div>
          <div className="visual-token token-check"><Check /></div>
          <span className="visual-dot dot-one" />
        </>}
      </div>
    </div>
  );
}
