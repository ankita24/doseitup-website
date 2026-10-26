import React from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const sections = [
  {
    title: '1. Acceptance of Terms',
    content: (
      <p>By using DoseItUp, you agree to these Terms &amp; Conditions.</p>
    ),
  },
  {
    title: '2. About DoseItUp',
    content: (
      <p>
        DoseItUp is a medicine reminder application that allows family members to manage medicine
        schedules for themselves or their loved ones.
      </p>
    ),
  },
  {
    title: '3. User Responsibilities',
    content: (
      <>
        <p className="mb-3">Users are responsible for:</p>
        <ul>
          <li>Entering accurate medicine information.</li>
          <li>Maintaining access to the registered phone number.</li>
          <li>Reviewing reminder schedules regularly.</li>
        </ul>
      </>
    ),
  },
  {
    title: '4. Medicine Reminders',
    content: (
      <>
        <p className="mb-3">
          DoseItUp provides reminder notifications based on the schedules entered by users.
        </p>
        <p>
          Notifications are intended as reminders only and should not replace professional medical
          advice.
        </p>
      </>
    ),
  },
  {
    title: '5. Medical Disclaimer',
    content: (
      <>
        <p className="mb-3">DoseItUp is not a medical device.</p>
        <p className="mb-3">
          The app does not diagnose, treat, or recommend medications.
        </p>
        <p>
          Always consult a qualified healthcare professional regarding medical decisions.
        </p>
      </>
    ),
  },
  {
    title: '6. Availability',
    content: (
      <p>
        We strive to keep DoseItUp available at all times but cannot guarantee uninterrupted
        service.
      </p>
    ),
  },
  {
    title: '7. Limitation of Liability',
    content: (
      <>
        <p className="mb-3">DoseItUp is provided &quot;as is.&quot;</p>
        <p>
          We are not responsible for missed doses due to device settings, internet connectivity,
          operating system restrictions, or user actions.
        </p>
      </>
    ),
  },
  {
    title: '8. Changes to the Service',
    content: (
      <p>We may update or improve the application at any time.</p>
    ),
  },
  {
    title: '9. Changes to these Terms',
    content: (
      <p>We may update these Terms &amp; Conditions periodically.</p>
    ),
  },
  {
    title: '10. Contact',
    content: (
      <>
        <p className="mb-3">For any questions, contact:</p>
        <p>
          <a
            href="mailto:support@doseitup.com"
            className="font-semibold transition-colors duration-200"
            style={{ color: 'var(--color-primary)' }}
          >
            support@doseitup.com
          </a>
        </p>
      </>
    ),
  },
];

export default function TermsPage() {
  return (
    <main>
      <Header />
      {/* Hero Section */}
      <section
        className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden"
        style={{ background: 'var(--color-surface)' }}
      >
        {/* Background orbs */}
        <div
          className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(108, 99, 255, 0.12) 0%, transparent 70%)',
            filter: 'blur(60px)',
            transform: 'translate(30%, -30%)',
          }}
        />
        <div
          className="absolute bottom-0 left-0 w-72 h-72 rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(255, 122, 182, 0.1) 0%, transparent 70%)',
            filter: 'blur(60px)',
            transform: 'translate(-30%, 30%)',
          }}
        />

        <div className="relative max-w-3xl mx-auto px-6 md:px-10 text-center">
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold mb-6"
            style={{ background: 'var(--color-purple-soft)', color: 'var(--color-primary)' }}
          >
            Legal
          </div>

          <h1
            className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 leading-tight"
            style={{ color: 'var(--color-foreground)' }}
          >
            Terms &amp;{' '}
            <span className="gradient-text">Conditions</span>
          </h1>

          <p
            className="text-base font-medium"
            style={{ color: 'var(--color-muted)' }}
          >
            Last Updated: July 2026
          </p>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-3xl mx-auto px-6 md:px-10">
        <div className="h-px" style={{ background: 'var(--color-border)' }} />
      </div>

      {/* Content */}
      <section className="py-12 md:py-16" style={{ background: 'var(--color-background)' }}>
        <div className="max-w-3xl mx-auto px-6 md:px-10">
          <div className="flex flex-col gap-10">
            {sections?.map((section) => (
              <div
                key={section?.title}
                className="rounded-3xl p-7 md:p-8"
                style={{
                  background: 'var(--color-surface)',
                  border: '1px solid var(--color-border)',
                  boxShadow: 'var(--shadow-card)',
                }}
              >
                <h2
                  className="text-lg md:text-xl font-bold mb-4"
                  style={{ color: 'var(--color-foreground)' }}
                >
                  {section?.title}
                </h2>
                <div
                  className="text-sm md:text-base leading-relaxed [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1.5"
                  style={{ color: 'var(--color-muted)' }}
                >
                  {section?.content}
                </div>
              </div>
            ))}
          </div>

          {/* Back to home button */}
          <div className="mt-12 text-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-200"
              style={{ background: 'var(--color-purple-soft)', color: 'var(--color-primary)' }}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path
                  d="M10 12L6 8L10 4"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Back to Homepage
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
