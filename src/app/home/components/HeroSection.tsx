'use client';

import React, { useEffect, useRef } from 'react';

import AppImage from '@/components/ui/AppImage';

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const elements = sectionRef?.current?.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    if (!elements) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    elements?.forEach((el) => observer?.observe(el));
    return () => observer?.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="hero-section" id="hero">
      {/* Noise texture */}
      <div className="noise-overlay" />
      {/* Gradient orbs */}
      <div className="hero-gradient-orb hero-orb-1" />
      <div className="hero-gradient-orb hero-orb-2" />
      <div className="hero-gradient-orb hero-orb-3" />
      <div className="max-w-6xl mx-auto px-6 md:px-10 pt-32 md:pt-40 pb-20 md:pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">

          {/* Left: Text Content */}
          <div className="flex flex-col gap-6 lg:gap-8">
            {/* Label */}
            <div className="reveal">
              <span className="section-label">
                <span
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ background: 'var(--color-primary)' }} />
                
                Smart Medication Reminders
              </span>
            </div>

            {/* Headline */}
            <h1 className="reveal delay-100 font-extrabold tracking-tight leading-tight"
            style={{
              fontSize: 'clamp(2.8rem, 6vw, 5rem)',
              lineHeight: '1.05',
              color: 'var(--color-foreground)'
            }}>
              
              Never miss{' '}
              <span style={{ color: '#e95a6b' }}>a dose</span>
              <br />again.
            </h1>

            {/* Subheadline */}
            <p
              className="reveal delay-200 text-lg md:text-xl leading-relaxed max-w-lg"
              style={{ color: 'var(--color-muted)' }}>
              
              Smart medication reminders with built-in accountability — so you or your loved ones stay consistent, safe, and worry-free.
            </p>

            {/* CTAs */}
            <div className="reveal delay-300 flex flex-col sm:flex-row gap-3 items-start sm:items-center">
              {/* App Store button and Join waitlist link removed */}
            </div>

          </div>

          {/* Right: Phone Mockup */}
          <div className="reveal-right delay-200 relative flex justify-center lg:justify-end items-center">
            {/* Blob background */}
            <div
              className="absolute w-80 h-80 blob-morph opacity-30"
              style={{ background: 'var(--gradient-hero)', zIndex: 0 }}
              aria-hidden="true" />
            

            {/* Phone container */}
            <div className="relative z-10 flex items-end gap-4">
              {/* Primary phone */}
              <div className="phone-float">
                <div className="phone-mockup">
                  <div className="phone-screen">
                    {/* Top bar */}
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <p className="text-white/50 text-xs">Good morning,</p>
                        <p className="text-white font-bold text-sm">Sarah 👋</p>
                      </div>
                      <div
                        className="w-8 h-8 rounded-full overflow-hidden border-2"
                        style={{ borderColor: 'rgba(255,255,255,0.2)' }}>
                        
                        <AppImage
                          src="https://img.rocket.new/generatedImages/rocket_gen_img_11d1826d1-1763301150073.png"
                          alt="User avatar of Sarah"
                          width={32}
                          height={32}
                          className="w-full h-full object-cover" />
                        
                      </div>
                    </div>

                    {/* Progress ring card */}
                    <div className="notification-card flex items-center gap-3">
                      <svg width="44" height="44" viewBox="0 0 44 44" aria-label="Dose progress: 2 of 3 taken">
                        <defs>
                          <linearGradient id="ringGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#2b3077" />
                            <stop offset="100%" stopColor="#FF7AB6" />
                          </linearGradient>
                        </defs>
                        <circle cx="22" cy="22" r="18" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="3" />
                        <circle
                          cx="22" cy="22" r="18" fill="none"
                          stroke="url(#ringGradient)" strokeWidth="3"
                          strokeLinecap="round"
                          strokeDasharray="113" strokeDashoffset="38"
                          style={{ transform: 'rotate(-90deg)', transformOrigin: '50% 50%' }} />
                        
                        <text x="22" y="26" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">2/3</text>
                      </svg>
                      <div>
                        <p className="text-white text-xs font-bold">Today's Doses</p>
                        <p className="text-white/50 text-xs">1 remaining</p>
                      </div>
                    </div>

                    {/* Medication cards */}
                    {[
                    { name: 'Metformin', dose: '500mg', time: '8:00 AM', done: true, color: '#2b3077' },
                    { name: 'Vitamin D', dose: '1000 IU', time: '12:00 PM', done: true, color: '#FF7AB6' },
                    { name: 'Lisinopril', dose: '10mg', time: '8:00 PM', done: false, color: '#8B84FF' }]?.
                    map((med, i) =>
                    <div key={i} className="notification-card flex items-center gap-2.5">
                        <div
                        className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 text-white text-xs font-bold"
                        style={{ background: med?.color }}>
                        
                          {med?.name?.[0]}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-white text-xs font-semibold truncate">{med?.name}</p>
                          <p className="text-white/50 text-xs">{med?.dose} · {med?.time}</p>
                        </div>
                        {med?.done ?
                      <div
                        className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                        style={{ background: 'rgba(108,99,255,0.3)' }}
                        aria-label="Dose taken">
                        
                            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                              <path d="M2 5L4 7L8 3" stroke="#2b3077" strokeWidth="1.5" strokeLinecap="round" />
                            </svg>
                          </div> :

                      <div
                        className="w-5 h-5 rounded-full border flex-shrink-0"
                        style={{ borderColor: 'rgba(255,255,255,0.2)' }}
                        aria-label="Dose pending" />

                      }
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Notification popup floating */}
              <div
                className="phone-float-delayed absolute -right-4 top-8 w-48 rounded-2xl p-3 shadow-2xl"
                style={{
                  background: 'rgba(255,255,255,0.95)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(108,99,255,0.15)',
                  zIndex: 20
                }}
                aria-label="Accountability notification: Mom missed her 8 PM Lisinopril dose">
                
                <div className="flex items-start gap-2">
                  <div
                    className="w-7 h-7 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: 'var(--color-accent-soft)' }}
                    aria-hidden="true">
                    
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M7 1C4.2 1 2 3.2 2 6v3l-1 2h12l-1-2V6c0-2.8-2.2-5-5-5z" stroke="#FF7AB6" strokeWidth="1.2" strokeLinejoin="round" />
                      <path d="M5.5 11c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5" stroke="#FF7AB6" strokeWidth="1.2" strokeLinecap="round" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-bold" style={{ color: 'var(--color-foreground)' }}>
                      Dose Alert
                    </p>
                    <p className="text-xs leading-tight mt-0.5" style={{ color: 'var(--color-muted)' }}>
                      Mom missed her 8 PM Lisinopril dose
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent, var(--color-background))' }}
        aria-hidden="true" />
      
    </section>);

}