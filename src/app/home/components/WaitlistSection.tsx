'use client';

import React, { useEffect, useRef, useState } from 'react';

export default function WaitlistSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    const elements = sectionRef.current?.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    if (!elements) return;
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1 }
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) {
      setErrorMsg('Please enter your email address.');
      setStatus('error');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setErrorMsg('Please enter a valid email address.');
      setStatus('error');
      return;
    }
    setStatus('loading');
    // Mock submit — connect to backend here
    setTimeout(() => {
      setStatus('success');
      setEmail('');
    }, 1200);
  };

  return (
    <section
      ref={sectionRef}
      id="waitlist"
      className="py-20 md:py-32"
      style={{ background: 'var(--color-background)' }}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div
          className="relative rounded-4xl overflow-hidden"
          style={{ background: '#1A1A2E' }}
        >
          {/* Noise overlay */}
          <div className="noise-overlay" aria-hidden="true" />

          {/* Gradient orbs */}
          <div
            className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(43,48,119,0.25) 0%, transparent 70%)', filter: 'blur(60px)', transform: 'translate(30%, -30%)' }}
            aria-hidden="true"
          />
          <div
            className="absolute bottom-0 left-0 w-80 h-80 rounded-full pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(255,122,182,0.2) 0%, transparent 70%)', filter: 'blur(60px)', transform: 'translate(-30%, 30%)' }}
            aria-hidden="true"
          />

          <div className="relative z-10 px-8 md:px-16 py-16 md:py-20">
            <div className="max-w-2xl mx-auto text-center">
              {/* Label */}
              <div className="reveal mb-6 flex justify-center">
                <span
                  className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest"
                  style={{ background: 'rgba(43,48,119,0.2)', color: '#A8A3FF', border: '1px solid rgba(43,48,119,0.3)' }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2b3077] animate-pulse" />
                  Early Access
                </span>
              </div>

              <h2
                className="reveal delay-100 font-extrabold tracking-tight text-white mb-4"
                style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', lineHeight: 1.05 }}
              >
                Be the first to{' '}
                <span
                  style={{
                    background: 'linear-gradient(135deg, #A8A3FF 0%, #FF9BD5 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  never miss a dose.
                </span>
              </h2>

              <p
                className="reveal delay-200 text-base leading-relaxed mb-10"
                style={{ color: 'rgba(255,255,255,0.55)' }}
              >
                DoseItUp is launching soon. Join the waitlist and get early access, plus a free 3-month premium membership when we go live.
              </p>

              {/* Form */}
              {status === 'success' ? (
                <div
                  className="reveal py-6 px-8 rounded-2xl"
                  style={{ background: 'rgba(108,99,255,0.15)', border: '1px solid rgba(108,99,255,0.3)' }}
                >
                  <div className="flex justify-center mb-3">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center"
                      style={{ background: 'var(--gradient-button)' }}
                    >
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                        <path d="M4 10L8 14L16 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>
                  <p className="text-white font-bold text-lg mb-1">You're on the list!</p>
                  <p style={{ color: 'rgba(255,255,255,0.55)' }} className="text-sm">
                    We'll email you as soon as DoseItUp is ready. Watch your inbox at{' '}
                    <span style={{ color: '#A8A3FF' }}>hello@doseitup.com</span>
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="reveal delay-300 flex flex-col sm:flex-row gap-3"
                  noValidate
                >
                  <div className="flex-1">
                    <label htmlFor="waitlist-email" className="sr-only">Email address</label>
                    <input
                      id="waitlist-email"
                      type="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (status === 'error') { setStatus('idle'); setErrorMsg(''); }
                      }}
                      placeholder="your@email.com"
                      className="waitlist-input w-full px-5 py-4 rounded-2xl text-sm font-medium transition-all duration-200"
                      style={{
                        background: 'rgba(255,255,255,0.08)',
                        border: `1px solid ${status === 'error' ? '#FF7AB6' : 'rgba(255,255,255,0.15)'}`,
                        color: 'white',
                        outline: 'none',
                      }}
                      aria-describedby={status === 'error' ? 'email-error' : undefined}
                    />
                    {status === 'error' && (
                      <p id="email-error" className="mt-2 text-xs text-left" style={{ color: '#FF7AB6' }}>
                        {errorMsg}
                      </p>
                    )}
                  </div>
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="btn-gradient px-7 py-4 rounded-2xl text-sm font-bold text-white whitespace-nowrap disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {status === 'loading' ? (
                      <>
                        <svg className="animate-spin" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                          <circle cx="8" cy="8" r="6" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
                          <path d="M8 2a6 6 0 0 1 6 6" stroke="white" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                        <span>Joining...</span>
                      </>
                    ) : (
                      <>
                        <span>Join Waitlist</span>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                          <path d="M3 8H13M9 4L13 8L9 12" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </>
                    )}
                  </button>
                </form>
              )}

              {/* Social proof */}
              <p
                className="reveal delay-400 mt-5 text-xs"
                style={{ color: 'rgba(255,255,255,0.35)' }}
              >
                Join 2,400+ people already on the waitlist · No spam, ever
              </p>

              {/* Perks */}
              <div className="reveal delay-500 mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { icon: '🎁', label: '3 months free premium' },
                  { icon: '🔔', label: 'Early access priority' },
                  { icon: '🔒', label: 'No credit card needed' },
                ].map((perk, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-center gap-2 p-4 rounded-2xl"
                    style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}
                  >
                    <span className="text-xl" role="img" aria-label={perk.label}>{perk.icon}</span>
                    <span className="text-xs font-medium" style={{ color: 'rgba(255,255,255,0.6)' }}>{perk.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}