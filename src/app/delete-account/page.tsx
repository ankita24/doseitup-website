import React from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const sections = [
  {
    title: '1. How to Request Account Deletion',
    content: (
      <p>
        To request permanent deletion of your DoseItUp account and all associated data, please
        contact our support team at the email address below. We will process your request and
        confirm deletion within a reasonable timeframe.
      </p>
    ),
  },
  {
    title: '2. Data That Will Be Deleted',
    content: (
      <>
        <p className="mb-3">Upon account deletion, the following data will be permanently removed:</p>
        <ul>
          <li>Your account and profile information</li>
          <li>Your registered phone number</li>
          <li>All medicines and medication information</li>
          <li>All reminder schedules and notification settings</li>
        </ul>
      </>
    ),
  },
  {
    title: '3. Data Retention',
    content: (
      <p>
        Please note that some information may be retained if required by applicable law, regulation,
        or legitimate legal obligation. In such cases, only the minimum necessary data will be kept
        and will not be used for any other purpose.
      </p>
    ),
  },
  {
    title: '4. Contact Support',
    content: (
      <>
        <p className="mb-3">
          To submit your account deletion request, please reach out to our support team:
        </p>
        <p>
          Email:{' '}
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

export default function DeleteAccountPage() {
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
            Account
          </div>

          <h1
            className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 leading-tight"
            style={{ color: 'var(--color-foreground)' }}
          >
            Delete{' '}
            <span className="gradient-text">Account</span>
          </h1>

          <p
            className="text-base font-medium"
            style={{ color: 'var(--color-muted)' }}
          >
            Request permanent deletion of your account and data
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

          {/* Email Support Button */}
          <div className="mt-10 text-center">
            <a
              href="mailto:support@doseitup.com?subject=Account%20Deletion%20Request"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold transition-all duration-200"
              style={{
                background: 'linear-gradient(135deg, var(--color-primary) 0%, #FF7AB6 100%)',
                color: '#ffffff',
                boxShadow: '0 4px 15px rgba(108, 99, 255, 0.3)',
              }}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path
                  d="M2 4a1 1 0 011-1h10a1 1 0 011 1v8a1 1 0 01-1 1H3a1 1 0 01-1-1V4z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                />
                <path
                  d="M2 4l6 5 6-5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Request Account Deletion
            </a>
          </div>

          {/* Back to home link */}
          <div className="mt-6 text-center">
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
