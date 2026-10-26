import React from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const sections = [
  {
    title: '1. Introduction',
    content: (
      <p>
        DoseItUp values your privacy. This Privacy Policy explains what information we collect, how we
        use it, and how we protect it.
      </p>
    ),
  },
  {
    title: '2. Information We Collect',
    content: (
      <>
        <p className="mb-3">We collect:</p>
        <ul>
          <li>Phone numbers (for login and medicine reminders)</li>
          <li>Family member names</li>
          <li>Medicine information</li>
          <li>Medicine schedules and reminder settings</li>
          <li>Anonymous analytics and crash reports to improve the app</li>
        </ul>
        <p className="mt-3">We do not collect payment information.</p>
      </>
    ),
  },
  {
    title: '3. How We Use Your Information',
    content: (
      <>
        <p className="mb-3">We use your information to:</p>
        <ul>
          <li>Allow family members to log in securely</li>
          <li>Display medicines</li>
          <li>Send medicine reminders</li>
          <li>Improve app reliability and performance</li>
          <li>Diagnose crashes and bugs</li>
        </ul>
      </>
    ),
  },
  {
    title: '4. Notifications',
    content: (
      <p>
        DoseItUp sends medicine reminder notifications based on the schedules configured by the
        administrator.
      </p>
    ),
  },
  {
    title: '5. Data Storage',
    content: (
      <p>Data is securely stored using Firebase services provided by Google.</p>
    ),
  },
  {
    title: '6. Data Retention',
    content: (
      <>
        <p className="mb-3">
          We retain user data only for as long as necessary to provide the DoseItUp service and
          fulfill the purposes described in this Privacy Policy.
        </p>
        <ul>
          <li>
            Account information (such as email address and phone number) is retained while your
            account remains active.
          </li>
          <li>
            Medicine schedules, reminder settings, and caregiver information are retained until they
            are deleted by the user or the associated account is deleted.
          </li>
          <li>
            Analytics and crash reporting data are retained according to Firebase Analytics and
            Firebase Crashlytics retention policies.
          </li>
          <li>
            When a user requests account deletion through the Delete Account page, the account and
            associated personal data are permanently deleted from our systems within 30 days unless
            we are legally required to retain certain information.
          </li>
        </ul>
      </>
    ),
  },
  {
    title: '7. Analytics',
    content: (
      <p>
        We use Firebase Analytics to understand app usage and improve the user experience.
      </p>
    ),
  },
  {
    title: '8. Crash Reporting',
    content: (
      <p>We use Firebase Crashlytics to detect and fix application crashes.</p>
    ),
  },
  {
    title: '9. Data Sharing',
    content: (
      <>
        <p className="mb-3">We do not sell personal information.</p>
        <p>
          We only share data with trusted service providers required to operate the app, including
          Google Firebase.
        </p>
      </>
    ),
  },
  {
    title: '10. Data Security',
    content: (
      <p>
        We take reasonable measures to protect your information using secure cloud infrastructure and
        encrypted communication.
      </p>
    ),
  },
  {
    title: "11. Children\'s Privacy",
    content: (
      <p>
        DoseItUp is intended for use by adults managing medicine reminders for themselves or family
        members.
      </p>
    ),
  },
  {
    title: '12. Your Rights',
    content: (
      <p>
        You may request access to, correction of, or deletion of your personal information at any
        time. You can delete your account using our{' '}
        <a
          href="/delete-account"
          className="font-semibold transition-colors duration-200"
          style={{ color: 'var(--color-primary)' }}
        >
          Delete Account page
        </a>{' '}
        or contact us at{' '}
        <a
          href="mailto:support@doseitup.com"
          className="font-semibold transition-colors duration-200"
          style={{ color: 'var(--color-primary)' }}
        >
          support@doseitup.com
        </a>{' '}
        if you need assistance.
      </p>
    ),
  },
  {
    title: '13. Contact',
    content: (
      <>
        <p className="mb-3">
          If you have any questions regarding this Privacy Policy, contact:
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

export default function PrivacyPage() {
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
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold mb-6"
            style={{ background: 'var(--color-purple-soft)', color: 'var(--color-primary)' }}
          >
            Legal
          </div>

          <h1
            className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 leading-tight"
            style={{ color: 'var(--color-foreground)' }}
          >
            Privacy{' '}
            <span className="gradient-text">Policy</span>
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

          {/* Back to home link */}
          <div className="mt-12 text-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-200"
              style={{ background: 'var(--color-purple-soft)', color: 'var(--color-primary)' }}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
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
