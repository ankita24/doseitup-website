'use client';

import React, { useEffect, useRef } from 'react';

const features = [
  {
    id: 1,
    title: 'Smart Medication Reminders',
    description: 'Personalized alerts that adapt to your schedule — not just alarm blasts. DoseItUp learns your routine and sends gentle nudges at the right moment.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <path d="M14 3C8 3 3 8 3 14s5 11 11 11 11-5 11-11S20 3 14 3z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M14 8v6l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    accent: 'var(--color-primary)',
    bg: 'var(--color-purple-soft)',
    visual: 'reminder',
    size: 'large',
  },
  {
    id: 2,
    title: 'Accountability Notifications',
    description: 'If you miss a dose, a trusted family member or caregiver is notified automatically — so they can check in without intruding.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <path d="M14 4C9 4 5 8 5 13v4l-2 3h22l-2-3v-4c0-5-4-9-9-9z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M11 20c0 1.7 1.3 3 3 3s3-1.3 3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    accent: 'var(--color-accent)',
    bg: 'var(--color-pink-soft)',
    visual: 'notification',
    size: 'small',
  },
  {
    id: 3,
    title: 'Easy Dose Tracking',
    description: 'A simple tap confirms your dose. Track your adherence over days, weeks, and months with a clean visual history.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <rect x="4" y="4" width="20" height="20" rx="4" stroke="currentColor" strokeWidth="1.5" />
        <path d="M9 14l3 3 7-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    accent: '#8B84FF',
    bg: 'var(--color-purple-soft)',
    visual: 'tracking',
    size: 'small',
  },
  {
    id: 4,
    title: 'Simple Daily Routine',
    description: 'Set up in under 2 minutes. Add your medications, set times, and invite a family member. DoseItUp handles everything else.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <circle cx="14" cy="14" r="10" stroke="currentColor" strokeWidth="1.5" />
        <path d="M10 10h8M10 14h6M10 18h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    accent: '#FF9B6B',
    bg: '#FFF5F0',
    visual: 'routine',
    size: 'large',
  },
];

function FeatureVisual({ type, accent }: { type: string; accent: string }) {
  if (type === 'reminder') {
    return (
      <div className="mt-6 flex flex-col gap-2" aria-hidden="true">
        {[
          { name: 'Metformin 500mg', time: '8:00 AM', status: 'done' },
          { name: 'Vitamin D 1000 IU', time: '12:00 PM', status: 'now' },
          { name: 'Lisinopril 10mg', time: '8:00 PM', status: 'upcoming' },
        ].map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-3 p-3 rounded-xl"
            style={{
              background: item.status === 'now' ? 'var(--color-purple-soft)' : 'transparent',
              border: `1px solid ${item.status === 'now' ? 'rgba(108,99,255,0.2)' : 'var(--color-border)'}`,
            }}
          >
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold text-white flex-shrink-0"
              style={{ background: accent }}
            >
              {item.name[0]}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-semibold truncate" style={{ color: 'var(--color-foreground)' }}>{item.name}</p>
              <p className="text-xs" style={{ color: 'var(--color-muted)' }}>{item.time}</p>
            </div>
            {item.status === 'done' && (
              <div className="w-5 h-5 rounded-full flex items-center justify-center" style={{ background: 'rgba(108,99,255,0.15)' }}>
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M2 5L4 7L8 3" stroke={accent} strokeWidth="1.5" strokeLinecap="round" /></svg>
              </div>
            )}
            {item.status === 'now' && (
              <span className="text-xs font-bold px-2 py-0.5 rounded-full" style={{ background: accent, color: 'white' }}>Now</span>
            )}
          </div>
        ))}
      </div>
    );
  }

  if (type === 'notification') {
    return (
      <div className="mt-6" aria-hidden="true">
        <div
          className="p-4 rounded-2xl"
          style={{ background: 'var(--color-pink-soft)', border: '1px solid rgba(255,122,182,0.2)' }}
        >
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: accent }}>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M7 1C4.2 1 2 3.2 2 6v3l-1 2h12l-1-2V6c0-2.8-2.2-5-5-5z" stroke="white" strokeWidth="1.2" strokeLinejoin="round" />
              </svg>
            </div>
            <div>
              <p className="text-xs font-bold" style={{ color: 'var(--color-foreground)' }}>Family Alert Sent</p>
              <p className="text-xs mt-1" style={{ color: 'var(--color-muted)' }}>Your caregiver has been notified about the missed 8 PM dose.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (type === 'tracking') {
    return (
      <div className="mt-6" aria-hidden="true">
        <div className="grid grid-cols-7 gap-1.5">
          {Array.from({ length: 21 }).map((_, i) => {
            const filled = i < 17;
            const today = i === 16;
            return (
              <div
                key={i}
                className="aspect-square rounded-md"
                style={{
                  background: filled
                    ? today
                      ? accent
                      : `${accent}40`
                    : 'var(--color-border)',
                  transform: today ? 'scale(1.2)' : 'scale(1)',
                  transition: 'transform 0.2s',
                }}
              />
            );
          })}
        </div>
        <p className="text-xs mt-3 font-semibold" style={{ color: 'var(--color-muted)' }}>
          17-day streak 🔥
        </p>
      </div>
    );
  }

  if (type === 'routine') {
    return (
      <div className="mt-6 flex flex-col gap-3" aria-hidden="true">
        {[
          { step: '1', label: 'Add your medications', done: true },
          { step: '2', label: 'Set reminder times', done: true },
          { step: '3', label: 'Invite a family member', done: false },
        ].map((item, i) => (
          <div key={i} className="flex items-center gap-3">
            <div
              className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0"
              style={{
                background: item.done ? accent : 'var(--color-border)',
                color: item.done ? 'white' : 'var(--color-muted)',
              }}
            >
              {item.done ? (
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M2 5L4 7L8 3" stroke="white" strokeWidth="1.5" strokeLinecap="round" /></svg>
              ) : item.step}
            </div>
            <span
              className="text-sm font-medium"
              style={{ color: item.done ? 'var(--color-foreground)' : 'var(--color-muted)' }}
            >
              {item.label}
            </span>
          </div>
        ))}
      </div>
    );
  }

  return null;
}

export default function FeaturesSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const elements = sectionRef.current?.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    if (!elements) return;
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="features"
      className="py-20 md:py-32"
      style={{ background: 'var(--color-surface)' }}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <div className="reveal mb-4 flex justify-center">
            <span className="section-label">Features</span>
          </div>
          <h2
            className="reveal delay-100 font-extrabold tracking-tight"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'var(--color-foreground)', lineHeight: 1.1 }}
          >
            Everything you need to{' '}
            <span style={{ color: '#e95a6b' }}>stay consistent.</span>
          </h2>
          <p
            className="reveal delay-200 mt-4 text-base leading-relaxed"
            style={{ color: 'var(--color-muted)' }}
          >
            DoseItUp is built around one goal: making it effortless to take your medications every single day.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="bento-grid">
          {features.map((feature, i) => (
            <div
              key={feature.id}
              className={`reveal delay-${i * 100} ${feature.size === 'large' ? 'bento-card-1' : 'bento-card-2'} bento-card`}
            >
              {/* Icon */}
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4 flex-shrink-0"
                style={{ background: feature.bg, color: feature.accent }}
              >
                {feature.icon}
              </div>

              {/* Text */}
              <h3
                className="text-lg font-bold mb-2"
                style={{ color: 'var(--color-foreground)' }}
              >
                {feature.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--color-muted)' }}>
                {feature.description}
              </p>

              {/* Visual */}
              <FeatureVisual type={feature.visual} accent={feature.accent} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}