'use client';

import { useEffect, useRef } from 'react';
import type { IconType } from 'react-icons';
import { DiMsqlServer } from 'react-icons/di';
import { FaMicrosoft } from 'react-icons/fa6';
import {
  SiAngular,
  SiDocker,
  SiFastapi,
  SiFlask,
  SiGithubactions,
  SiJavascript,
  SiNodedotjs,
  SiOpenapiinitiative,
  SiPostgresql,
  SiPython,
  SiSupabase,
  SiTypescript,
} from 'react-icons/si';
import { TbBrandAzure } from 'react-icons/tb';
import type { Tool } from '../content';

type ToolkitConstellationProps = {
  tools: Tool[];
  label: string;
  hint: string;
};

type Body = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  phase: number;
  preferredRadius: number;
};

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
};

const visuals: Record<string, { Icon: IconType; color: string }> = {
  Angular: { Icon: SiAngular, color: '#dd0031' },
  TypeScript: { Icon: SiTypescript, color: '#3178c6' },
  JavaScript: { Icon: SiJavascript, color: '#f7df1e' },
  Python: { Icon: SiPython, color: '#ffd343' },
  FastAPI: { Icon: SiFastapi, color: '#009688' },
  Flask: { Icon: SiFlask, color: '#f5f5f5' },
  'Node.js': { Icon: SiNodedotjs, color: '#5fa04e' },
  PostgreSQL: { Icon: SiPostgresql, color: '#4169e1' },
  'SQL Server': { Icon: DiMsqlServer, color: '#cc2927' },
  Azure: { Icon: TbBrandAzure, color: '#0089d6' },
  Supabase: { Icon: SiSupabase, color: '#3ecf8e' },
  Docker: { Icon: SiDocker, color: '#2496ed' },
  'REST APIs': { Icon: SiOpenapiinitiative, color: '#6ba539' },
  'Microsoft Graph': { Icon: FaMicrosoft, color: '#00a4ef' },
  'CI/CD': { Icon: SiGithubactions, color: '#a371f7' },
};

const particleColors = ['#d7fa58', '#9b7cff', '#ffffff', '#4f8cff', '#ff835c'];

export default function ToolkitConstellation({ tools, label, hint }: ToolkitConstellationProps) {
  const fieldRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const nodeRefs = useRef<(HTMLDivElement | null)[]>([]);
  const pointerRef = useRef({ x: 0, y: 0, active: false });

  useEffect(() => {
    const field = fieldRef.current;
    const canvas = canvasRef.current;
    if (!field || !canvas) return;

    const context = canvas.getContext('2d');
    if (!context) return;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const bodies: Body[] = [];
    let particles: Particle[] = [];
    let width = 0;
    let height = 0;
    let frame = 0;
    let previousTime = performance.now();

    const placeNodes = () => {
      nodeRefs.current.forEach((node, index) => {
        const body = bodies[index];
        if (node && body) {
          node.style.transform = `translate3d(${body.x}px, ${body.y}px, 0) translate(-50%, -50%)`;
        }
      });
    };

    const seedScene = () => {
      bodies.length = 0;
      const centerX = width / 2;
      const centerY = height / 2;
      const radiusX = Math.max(105, width * 0.4);
      const radiusY = Math.max(145, height * 0.36);

      tools.forEach((_, index) => {
        const angle = (index / tools.length) * Math.PI * 2 + (index % 3) * 0.22;
        const layer = 0.64 + (index % 4) * 0.1;
        bodies.push({
          x: centerX + Math.cos(angle) * radiusX * layer,
          y: centerY + Math.sin(angle) * radiusY * layer,
          vx: Math.sin(angle) * 0.28,
          vy: -Math.cos(angle) * 0.28,
          phase: index * 1.73,
          preferredRadius: Math.hypot(radiusX * layer, radiusY * layer) * 0.72,
        });
      });

      const particleCount = width < 620 ? 58 : 110;
      particles = Array.from({ length: particleCount }, (_, index) => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.28,
        vy: (Math.random() - 0.5) * 0.28,
        size: index % 13 === 0 ? 1.8 : 0.55 + Math.random() * 0.9,
        color: particleColors[index % particleColors.length],
      }));
      placeNodes();
    };

    const resize = () => {
      const rect = field.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
      seedScene();
    };

    const drawConnections = () => {
      for (let first = 0; first < bodies.length; first += 1) {
        for (let second = first + 1; second < bodies.length; second += 1) {
          const dx = bodies[first].x - bodies[second].x;
          const dy = bodies[first].y - bodies[second].y;
          const distance = Math.hypot(dx, dy);
          if (distance < 190) {
            context.globalAlpha = (1 - distance / 190) * 0.22;
            context.strokeStyle = first % 2 === 0 ? '#9b7cff' : '#d7fa58';
            context.lineWidth = 0.65;
            context.beginPath();
            context.moveTo(bodies[first].x, bodies[first].y);
            context.lineTo(bodies[second].x, bodies[second].y);
            context.stroke();
          }
        }
      }
      context.globalAlpha = 1;
    };

    const drawParticles = (delta: number) => {
      const pointer = pointerRef.current;
      const centerX = width / 2;
      const centerY = height / 2;

      particles.forEach((particle) => {
        const centerDx = particle.x - centerX;
        const centerDy = particle.y - centerY;
        const centerDistance = Math.max(1, Math.hypot(centerDx, centerDy));
        particle.vx += (-centerDy / centerDistance) * 0.0008 * delta;
        particle.vy += (centerDx / centerDistance) * 0.0008 * delta;

        if (pointer.active) {
          const dx = particle.x - pointer.x;
          const dy = particle.y - pointer.y;
          const distance = Math.max(1, Math.hypot(dx, dy));
          if (distance < 125) {
            const force = (1 - distance / 125) * 0.055 * delta;
            particle.vx += (dx / distance) * force;
            particle.vy += (dy / distance) * force;
          }
        }

        particle.vx *= 0.996;
        particle.vy *= 0.996;
        particle.x += particle.vx * delta;
        particle.y += particle.vy * delta;

        if (particle.x < -4) particle.x = width + 4;
        if (particle.x > width + 4) particle.x = -4;
        if (particle.y < -4) particle.y = height + 4;
        if (particle.y > height + 4) particle.y = -4;

        const pointerDistance = pointer.active ? Math.hypot(particle.x - pointer.x, particle.y - pointer.y) : 999;
        context.globalAlpha = pointerDistance < 110 ? 0.95 : 0.3 + particle.size * 0.12;
        context.fillStyle = particle.color;
        context.shadowColor = particle.color;
        context.shadowBlur = pointerDistance < 110 ? 12 : particle.size > 1.5 ? 7 : 0;
        context.beginPath();
        context.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        context.fill();
      });
      context.shadowBlur = 0;
      context.globalAlpha = 1;
    };

    const updateBodies = (time: number, delta: number) => {
      const centerX = width / 2;
      const centerY = height / 2;
      const pointer = pointerRef.current;
      const nodeRadius = width < 620 ? 50 : 68;

      bodies.forEach((body, index) => {
        const dx = body.x - centerX;
        const dy = body.y - centerY;
        const distance = Math.max(1, Math.hypot(dx, dy));
        const radialError = body.preferredRadius - distance;
        const drift = Math.sin(time * 0.00042 + body.phase) * 0.004;

        body.vx += ((-dy / distance) * 0.0046 + (dx / distance) * radialError * 0.000035 + drift) * delta;
        body.vy += ((dx / distance) * 0.0046 + (dy / distance) * radialError * 0.000035 + Math.cos(time * 0.00037 + body.phase) * 0.004) * delta;

        if (distance < 105) {
          const coreForce = (1 - distance / 105) * 0.16 * delta;
          body.vx += (dx / distance) * coreForce;
          body.vy += (dy / distance) * coreForce;
        }

        if (pointer.active) {
          const pointerDx = body.x - pointer.x;
          const pointerDy = body.y - pointer.y;
          const pointerDistance = Math.max(1, Math.hypot(pointerDx, pointerDy));
          if (pointerDistance < 155) {
            const pointerForce = (1 - pointerDistance / 155) * 0.32 * delta;
            body.vx += (pointerDx / pointerDistance) * pointerForce;
            body.vy += (pointerDy / pointerDistance) * pointerForce;
          }
        }

        for (let otherIndex = index + 1; otherIndex < bodies.length; otherIndex += 1) {
          const other = bodies[otherIndex];
          const otherDx = body.x - other.x;
          const otherDy = body.y - other.y;
          const otherDistance = Math.max(1, Math.hypot(otherDx, otherDy));
          if (otherDistance < nodeRadius) {
            const force = (1 - otherDistance / nodeRadius) * 0.07 * delta;
            const forceX = (otherDx / otherDistance) * force;
            const forceY = (otherDy / otherDistance) * force;
            body.vx += forceX;
            body.vy += forceY;
            other.vx -= forceX;
            other.vy -= forceY;
          }
        }

        body.vx *= 0.987;
        body.vy *= 0.987;
        const speed = Math.hypot(body.vx, body.vy);
        if (speed > 1.05) {
          body.vx = (body.vx / speed) * 1.05;
          body.vy = (body.vy / speed) * 1.05;
        }

        body.x += body.vx * delta;
        body.y += body.vy * delta;

        const marginX = width < 620 ? 34 : 52;
        const marginY = width < 620 ? 44 : 58;
        if (body.x < marginX || body.x > width - marginX) {
          body.x = Math.max(marginX, Math.min(width - marginX, body.x));
          body.vx *= -0.72;
        }
        if (body.y < marginY || body.y > height - marginY) {
          body.y = Math.max(marginY, Math.min(height - marginY, body.y));
          body.vy *= -0.72;
        }
      });
      placeNodes();
    };

    const animate = (time: number) => {
      const delta = Math.min(2, (time - previousTime) / 16.67 || 1);
      previousTime = time;
      context.clearRect(0, 0, width, height);
      if (!reducedMotion) updateBodies(time, delta);
      drawConnections();
      drawParticles(reducedMotion ? 0 : delta);
      if (!reducedMotion) frame = window.requestAnimationFrame(animate);
    };

    const observer = new ResizeObserver(resize);
    observer.observe(field);
    resize();
    frame = window.requestAnimationFrame(animate);

    return () => {
      observer.disconnect();
      window.cancelAnimationFrame(frame);
    };
  }, [tools.length]);

  return (
    <div
      ref={fieldRef}
      className="toolkit-constellation physics-constellation"
      onPointerMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        pointerRef.current = { x, y, active: true };
        event.currentTarget.style.setProperty('--field-x', `${x}px`);
        event.currentTarget.style.setProperty('--field-y', `${y}px`);
      }}
      onPointerLeave={(event) => {
        pointerRef.current.active = false;
        event.currentTarget.style.setProperty('--field-x', '50%');
        event.currentTarget.style.setProperty('--field-y', '50%');
      }}
      role="list"
      aria-label={label}
    >
      <canvas ref={canvasRef} className="constellation-canvas" aria-hidden="true" />
      <div className="constellation-core physics-core" aria-hidden="true">
        <span>FC</span>
        <small>{hint}</small>
      </div>
      {tools.map((tool, index) => {
        const visual = visuals[tool.name];
        const Icon = visual?.Icon ?? SiOpenapiinitiative;
        const color = visual?.color ?? '#d7fa58';

        return (
          <div
            ref={(element) => {
              nodeRefs.current[index] = element;
            }}
            className="tool-node physics-node"
            key={tool.name}
            role="listitem"
            tabIndex={0}
            aria-label={`${tool.name}, ${tool.category}`}
            style={{ '--tool-color': color } as React.CSSProperties}
          >
            <div className="tool-node-inner">
              <span className="tool-logo" aria-hidden="true"><Icon /></span>
              <span className="tool-name">{tool.name}</span>
              <span className="tool-category">{tool.category}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
