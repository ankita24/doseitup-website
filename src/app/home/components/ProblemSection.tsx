'use client';

import React, { useEffect, useRef } from 'react';

const problems = [
  {
    stat: '50%',
    headline: 'of people forget their medications',
    description: 'Studies show half of all patients don\'t take their medications as prescribed — even when they know they should.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
        <path d="M12 7v5l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    accent: 'var(--color-primary)',
  },
  {
    stat: '125K+',
    headline: 'hospitalizations linked to missed doses yearly',
    description: 'Non-adherence to medication is a leading cause of preventable hospital visits, costing lives and billions in healthcare.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 3L4 7v5c0 4.4 3.4 8.5 8 9.5 4.6-1 8-5.1 8-9.5V7L12 3z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    accent: 'var(--color-accent)',
  },
  {
    stat: '73%',
    headline: 'of families worry about a loved one\'s medication',
    description: 'Caregivers and family members feel helpless when they can\'t verify if their parent or partner took their medicine.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="1.5" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    accent: '#8B84FF',
  },
];

export default function ProblemSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const elements = sectionRef?.current?.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    if (!elements) return;
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );
    elements?.forEach((el) => observer?.observe(el));
    return () => observer?.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="how-it-works"
      className="py-20 md:py-32"
      style={{ background: 'var(--color-background)' }}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div className="max-w-xl">
            <div className="reveal mb-4">
              <span className="section-label">The Problem</span>
            </div>
            <h2
              className="reveal delay-100 font-extrabold tracking-tight leading-tight"
              style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'var(--color-foreground)' }}
            >
              Forgetting is human.
              <br />
              <span style={{ color: '#e95a6b' }}>Missing doses isn't okay.</span>
            </h2>
          </div>
          <p
            className="reveal delay-200 text-base leading-relaxed max-w-sm"
            style={{ color: 'var(--color-muted)' }}
          >
            Basic phone alarms are easy to dismiss. What's needed is a smarter system — one that keeps you accountable and keeps your family informed.
          </p>
        </div>

        {/* Problem Cards — Asymmetric Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
          {/* Large card */}
          <div className="md:col-span-5 reveal">
            <div
              className="problem-card h-full"
              style={{ background: 'var(--color-surface)' }}
            >
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6"
                style={{ background: 'var(--color-purple-soft)', color: problems?.[0]?.accent }}
              >
                {problems?.[0]?.icon}
              </div>
              <div
                className="font-extrabold tracking-tight mb-3 gradient-text"
                style={{ fontSize: 'clamp(3rem, 7vw, 5rem)', lineHeight: 1 }}
              >
                {problems?.[0]?.stat}
              </div>
              <h3
                className="text-xl font-bold mb-3"
                style={{ color: 'var(--color-foreground)' }}
              >
                {problems?.[0]?.headline}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--color-muted)' }}>
                {problems?.[0]?.description}
              </p>
            </div>
          </div>

          {/* Right column: two smaller cards */}
          <div className="md:col-span-7 flex flex-col gap-5">
            {problems?.slice(1)?.map((problem, i) => (
              <div key={i} className={`reveal delay-${(i + 1) * 100}`}>
                <div className="problem-card flex gap-5 items-start" style={{ background: 'var(--color-surface)' }}>
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0"
                    style={{ background: i === 0 ? 'var(--color-pink-soft)' : 'var(--color-purple-soft)', color: problem?.accent }}
                  >
                    {problem?.icon}
                  </div>
                  <div>
                    <div
                      className="font-extrabold tracking-tight mb-1 gradient-text"
                      style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', lineHeight: 1 }}
                    >
                      {problem?.stat}
                    </div>
                    <h3
                      className="text-lg font-bold mb-2"
                      style={{ color: 'var(--color-foreground)' }}
                    >
                      {problem?.headline}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: 'var(--color-muted)' }}>
                      {problem?.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}