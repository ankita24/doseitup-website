'use client';

import React, { useEffect, useRef } from 'react';

const benefits = [
{
  number: '01',
  title: 'Peace of mind for families',
  description: 'Stop wondering if Mom took her blood pressure pill this morning. DoseItUp keeps the whole family quietly informed — without constant check-in calls.',
  accentColor: 'var(--color-primary)',
},
{
  number: '02',
  title: 'Consistency that changes outcomes',
  description: 'People who take their medications consistently see dramatically better health results. DoseItUp makes consistency effortless — not another chore.',
  accentColor: 'var(--color-accent)',
},
{
  number: '03',
  title: 'Care without the stress',
  description: 'DoseItUp removes the emotional weight of managing medications. No guilt when you forget, no anxiety for caregivers — just a calm, supportive system.',
  accentColor: '#8B84FF',
}];


export default function BenefitsSection() {
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
      id="benefits"
      className="py-20 md:py-32"
      style={{ background: 'var(--color-surface)' }}>
      
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <div className="reveal mb-4">
              <span className="section-label">Why DoseItUp</span>
            </div>
            <h2
              className="reveal delay-100 font-extrabold tracking-tight"
              style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'var(--color-foreground)', lineHeight: 1.1 }}>
              
              Real benefits for{' '}
              <span style={{ color: '#e95a6b' }}>real people.</span>
            </h2>
          </div>
          <p
            className="reveal delay-200 text-base leading-relaxed max-w-sm"
            style={{ color: 'var(--color-muted)' }}>
            
            Whether you're managing your own health or supporting someone you love, DoseItUp makes a tangible difference.
          </p>
        </div>

        {/* Benefits — Alternating Layout */}
        <div className="flex flex-col gap-8">
          {benefits.map((benefit, i) =>
          <div
            key={i}
            className={`reveal delay-${i * 100}`}>
            
              <div
              className="grid grid-cols-1 md:grid-cols-12 gap-6 p-6 md:p-8 rounded-3xl border transition-all duration-300"
              style={{
                background: 'var(--color-surface)',
                borderColor: 'var(--color-border)',
                boxShadow: 'var(--shadow-card)'
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.boxShadow = 'var(--shadow-card-hover)';
                (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(108,99,255,0.2)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.boxShadow = 'var(--shadow-card)';
                (e.currentTarget as HTMLDivElement).style.borderColor = 'var(--color-border)';
              }}>
              
                {/* Number */}
                <div className="md:col-span-2 flex items-start">
                  <span
                  className="font-extrabold tracking-tight"
                  style={{
                    fontSize: 'clamp(3rem, 5vw, 4.5rem)',
                    lineHeight: 1,
                    background: 'var(--gradient-soft)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}>
                  
                    {benefit.number}
                  </span>
                </div>

                {/* Content */}
                <div className="md:col-span-10 flex flex-col justify-center">
                  <h3
                  className="text-xl font-bold mb-3"
                  style={{ color: 'var(--color-foreground)' }}>
                  
                    {benefit.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--color-muted)' }}>
                    {benefit.description}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>);

}