'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import AppImage from '@/components/ui/AppImage';

const NAV_ITEMS = [
  { label: 'Features', id: 'features' },
  { label: 'How It Works', id: 'how-it-works' },
  { label: 'Benefits', id: 'benefits' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const isHome = pathname === '/' || pathname === '/home';
    if (isHome) {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else {
      router.push(`/home#${id}`);
    }
    setMobileOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'nav-scrolled' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-4 md:py-5 flex items-center justify-between">
        {/* Logo */}
        <Link href="/home" className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl overflow-hidden flex-shrink-0">
            <AppImage
              src="/assets/images/logo_onlyh_final_copy-1774243736807.png"
              alt="DoseItUp logo mark"
              width={36}
              height={36}
              className="w-full h-full object-contain"
              priority
            />
          </div>
          <span
            className="font-bold text-lg tracking-tight"
            style={{ color: 'var(--color-foreground)' }}
          >
            DoseItUp
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-600">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={`/home#${item.id}`}
              onClick={(e) => handleNavClick(e, item.id)}
              className="text-muted hover:text-foreground transition-colors duration-200 font-medium cursor-pointer"
              style={{ color: 'var(--color-muted)' }}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://admin.doseitup.com/auth"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 rounded-xl text-sm font-semibold transition-all duration-200"
            style={{ background: 'var(--color-primary)', color: '#fff' }}
          >
            Try it out
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 rounded-xl transition-colors"
          style={{ background: 'var(--color-purple-soft)' }}
          aria-label="Toggle menu"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            {mobileOpen ? (
              <path d="M4 4L16 16M4 16L16 4" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" />
            ) : (
              <>
                <path d="M3 5H17" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" />
                <path d="M3 10H17" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" />
                <path d="M3 15H17" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          className="md:hidden border-t px-6 py-4 flex flex-col gap-3"
          style={{
            background: 'rgba(255,255,255,0.95)',
            backdropFilter: 'blur(20px)',
            borderColor: 'var(--color-border)',
          }}
        >
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={`/home#${item.id}`}
              onClick={(e) => handleNavClick(e, item.id)}
              className="py-2 font-medium text-sm cursor-pointer"
              style={{ color: 'var(--color-muted)' }}
            >
              {item.label}
            </a>
          ))}
          <a
            href="https://admin.doseitup.com/auth"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center px-5 py-2.5 rounded-xl text-sm font-semibold mt-2"
            style={{ background: 'var(--color-primary)', color: '#fff' }}
          >
            Try it out
          </a>
        </div>
      )}
    </header>
  );
}