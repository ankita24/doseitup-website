import React from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';

export default function Footer() {
  return (
    <footer
      className="border-t py-8"
      style={{ borderColor: 'var(--color-border)', background: 'var(--color-surface)' }}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-5">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 flex-wrap">
            <div className="w-7 h-7 rounded-lg overflow-hidden">
              <AppImage
                src="/assets/images/logo_onlyh_final_copy-1774243736807.png"
                alt="DoseItUp logo"
                width={28}
                height={28}
                className="w-full h-full object-contain"
              />
            </div>
            <span className="font-bold text-sm" style={{ color: 'var(--color-foreground)' }}>
              DoseItUp
            </span>
          </Link>

          {/* Links */}
          <div className="flex items-center gap-6 text-sm font-medium flex-wrap" style={{ color: 'var(--color-muted)' }}>
            <Link href="#features" className="hover:text-foreground transition-colors" style={{ color: 'inherit' }}>
              Features
            </Link>
            <Link href="/privacy" className="hover:text-foreground transition-colors" style={{ color: 'inherit' }}>
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-foreground transition-colors" style={{ color: 'inherit' }}>
              Terms &amp; Conditions
            </Link>
            <Link href="/support" className="hover:text-foreground transition-colors" style={{ color: 'inherit' }}>
              Support
            </Link>
            <Link href="/delete-account" className="hover:text-foreground transition-colors" style={{ color: 'inherit' }}>
              Delete Account
            </Link>
            <a
              href="mailto:hello@doseitup.com"
              className="hover:text-foreground transition-colors"
              style={{ color: 'inherit' }}
            >
              hello@doseitup.com
            </a>
          </div>

          {/* Copyright */}
          <p className="text-sm font-medium" style={{ color: 'var(--color-muted)', opacity: 0.6 }}>
            © 2026 DoseItUp
          </p>
        </div>
      </div>
    </footer>
  );
}