'use client';

import React, { useEffect, useRef } from 'react';

export default function AppPreviewSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const elements = sectionRef?.current?.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    if (!elements) return;
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );
    elements?.forEach((el) => observer?.observe(el));
    return () => observer?.disconnect();
  }, []);

  const screens = [
    {
      label: 'Today',
      bg: 'linear-gradient(160deg, #1E1B4B 0%, #2D1B69 100%)',
      content: 'home',
    },
    {
      label: 'Medications',
      bg: 'linear-gradient(160deg, #0F172A 0%, #1E1B4B 100%)',
      content: 'meds',
    },
    {
      label: 'Family',
      bg: 'linear-gradient(160deg, #1A0A2E 0%, #2D1B69 100%)',
      content: 'family',
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="app-preview"
      className="py-20 md:py-32 overflow-hidden"
      style={{ background: 'var(--color-background)' }}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text */}
          <div>
            <div className="reveal mb-4">
              <span className="section-label">App Preview</span>
            </div>
            <h2
              className="reveal delay-100 font-extrabold tracking-tight mb-6"
              style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'var(--color-foreground)', lineHeight: 1.1 }}
            >
              Designed to be{' '}
              <span style={{ color: '#e95a6b' }}>beautifully simple.</span>
            </h2>
            <p
              className="reveal delay-200 text-base leading-relaxed mb-8"
              style={{ color: 'var(--color-muted)' }}
            >
              DoseItUp strips away complexity. A clean dashboard shows exactly what you need — no clutter, no confusion. Just your medications, your progress, and peace of mind.
            </p>

            {/* Feature list */}
            <div className="flex flex-col gap-4">
              {[
                { label: 'One-tap dose confirmation', desc: 'Mark doses taken in a single tap' },
                { label: 'Visual adherence history', desc: '30-day streak calendar at a glance' },
                { label: 'Family dashboard', desc: 'Caregivers see real-time status' },
              ]?.map((item, i) => (
                <div key={i} className={`reveal delay-${(i + 2) * 100} flex items-start gap-3`}>
                  <div
                    className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ background: 'var(--gradient-button)' }}
                    aria-hidden="true"
                  >
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M2 5L4 7L8 3" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-bold" style={{ color: 'var(--color-foreground)' }}>{item?.label}</p>
                    <p className="text-sm" style={{ color: 'var(--color-muted)' }}>{item?.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Phone screens */}
          <div className="reveal-right delay-200 relative flex justify-center items-center min-h-[520px]">
            {/* Background glow */}
            <div
              className="absolute inset-0 rounded-3xl opacity-20"
              style={{ background: 'var(--gradient-hero)', filter: 'blur(60px)' }}
              aria-hidden="true"
            />

            {/* Single realistic phone frame with actual screenshot */}
            <div className="relative z-10 phone-float">
              {/* Phone outer shell */}
              <div
                className="relative"
                style={{
                  width: '260px',
                  height: '540px',
                  borderRadius: '44px',
                  background: 'linear-gradient(145deg, #2a2a2a 0%, #1a1a1a 50%, #111 100%)',
                  boxShadow: '0 0 0 1.5px #3a3a3a, 0 30px 80px rgba(0,0,0,0.5), 0 0 60px rgba(108,99,255,0.15), inset 0 1px 0 rgba(255,255,255,0.08)',
                  padding: '10px',
                }}
              >
                {/* Side buttons */}
                <div
                  aria-hidden="true"
                  style={{
                    position: 'absolute',
                    left: '-3px',
                    top: '100px',
                    width: '3px',
                    height: '32px',
                    borderRadius: '2px 0 0 2px',
                    background: '#2a2a2a',
                  }}
                />
                <div
                  aria-hidden="true"
                  style={{
                    position: 'absolute',
                    left: '-3px',
                    top: '144px',
                    width: '3px',
                    height: '56px',
                    borderRadius: '2px 0 0 2px',
                    background: '#2a2a2a',
                  }}
                />
                <div
                  aria-hidden="true"
                  style={{
                    position: 'absolute',
                    right: '-3px',
                    top: '120px',
                    width: '3px',
                    height: '70px',
                    borderRadius: '0 2px 2px 0',
                    background: '#2a2a2a',
                  }}
                />

                {/* Screen bezel */}
                <div
                  style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: '36px',
                    overflow: 'hidden',
                    background: '#000',
                    position: 'relative',
                  }}
                >
                  {/* Dynamic island / notch */}
                  <div
                    aria-hidden="true"
                    style={{
                      position: 'absolute',
                      top: '10px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: '90px',
                      height: '26px',
                      borderRadius: '20px',
                      background: '#000',
                      zIndex: 10,
                    }}
                  />

                  {/* App screenshot */}
                  <img
                    src="/assets/images/Simulator_Screenshot_-_iPhone_16e_-_2026-08-28_at_23.27.54-1787940142065.png"
                    alt="DoseItUp app showing the medication tracking dashboard with daily dose schedule and adherence progress"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'contain',
                      objectPosition: 'center',
                      display: 'block',
                      padding: '8px',
                      background: '#000',
                    }}
                  />

                  {/* Subtle screen glare overlay */}
                  <div
                    aria-hidden="true"
                    style={{
                      position: 'absolute',
                      inset: 0,
                      borderRadius: '36px',
                      background: 'linear-gradient(135deg, rgba(255,255,255,0.06) 0%, transparent 50%)',
                      pointerEvents: 'none',
                    }}
                  />
                </div>
              </div>

              {/* Reflection / shadow beneath phone */}
              <div
                aria-hidden="true"
                style={{
                  position: 'absolute',
                  bottom: '-24px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '180px',
                  height: '24px',
                  borderRadius: '50%',
                  background: 'rgba(108,99,255,0.25)',
                  filter: 'blur(16px)',
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}