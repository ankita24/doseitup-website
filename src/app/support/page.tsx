import React from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface FAQItem {
  question: string;
  answer: React.ReactNode;
}

const faqs: FAQItem[] = [
  {
    question: 'How do I create an account?',
    answer: (
      <p>
        Visit the website, click &quot;Try it Out,&quot; register as an admin, and add your family
        member.
      </p>
    ),
  },
  {
    question: 'How does my family member log in?',
    answer: (
      <p>
        They log in using the phone number entered by the admin and verify it with an OTP.
      </p>
    ),
  },
  {
    question: 'Why am I not receiving medicine reminders?',
    answer: (
      <>
        <p className="mb-3">Please check the following:</p>
        <ul>
          <li>Ensure notifications are enabled.</li>
          <li>Check battery optimization settings.</li>
          <li>Verify the medicine schedule.</li>
          <li>Ensure the device has internet access periodically.</li>
        </ul>
      </>
    ),
  },
  {
    question: 'Can I add multiple medicines?',
    answer: <p>Yes. Each medicine can have multiple reminder times.</p>,
  },
  {
    question: 'Can I edit or delete medicines later?',
    answer: <p>Yes.</p>,
  },
  {
    question: 'Can I manage multiple family members?',
    answer: <p>Yes.</p>,
  },
];

export default function SupportPage() {
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
            Help Center
          </div>

          <h1
            className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 leading-tight"
            style={{ color: 'var(--color-foreground)' }}
          >
            <span className="gradient-text">Support</span>
          </h1>

          <p
            className="text-base md:text-lg font-medium"
            style={{ color: 'var(--color-muted)' }}
          >
            Need help using DoseItUp? We&apos;re here to help.
          </p>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-3xl mx-auto px-6 md:px-10">
        <div className="h-px" style={{ background: 'var(--color-border)' }} />
      </div>

      {/* FAQ Section */}
      <section className="py-12 md:py-16" style={{ background: 'var(--color-background)' }}>
        <div className="max-w-3xl mx-auto px-6 md:px-10">
          <h2
            className="text-2xl md:text-3xl font-extrabold mb-8"
            style={{ color: 'var(--color-foreground)' }}
          >
            Frequently Asked Questions
          </h2>

          <div className="flex flex-col gap-6">
            {faqs?.map((faq) => (
              <div
                key={faq?.question}
                className="rounded-3xl p-7 md:p-8"
                style={{
                  background: 'var(--color-surface)',
                  border: '1px solid var(--color-border)',
                  boxShadow: 'var(--shadow-card)',
                }}
              >
                <h3
                  className="text-base md:text-lg font-bold mb-3"
                  style={{ color: 'var(--color-foreground)' }}
                >
                  {faq?.question}
                </h3>
                <div
                  className="text-sm md:text-base leading-relaxed [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1.5"
                  style={{ color: 'var(--color-muted)' }}
                >
                  {faq?.answer}
                </div>
              </div>
            ))}
          </div>

          {/* Contact Support Section */}
          <div
            className="mt-10 rounded-3xl p-7 md:p-8"
            style={{
              background: 'var(--color-surface)',
              border: '1px solid var(--color-border)',
              boxShadow: 'var(--shadow-card)',
            }}
          >
            <h2
              className="text-xl md:text-2xl font-extrabold mb-3"
              style={{ color: 'var(--color-foreground)' }}
            >
              Contact Support
            </h2>
            <p
              className="text-sm md:text-base leading-relaxed mb-5"
              style={{ color: 'var(--color-muted)' }}
            >
              If your question isn&apos;t answered above, contact us:
            </p>
            <p className="mb-6">
              <a
                href="mailto:support@doseitup.com"
                className="text-sm md:text-base font-semibold transition-colors duration-200"
                style={{ color: 'var(--color-primary)' }}
              >
                support@doseitup.com
              </a>
            </p>
            <a
              href="mailto:support@doseitup.com"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-200"
              style={{
                background: 'var(--color-primary)',
                color: '#ffffff',
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
              Email Support
            </a>
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
