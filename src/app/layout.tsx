import React from 'react';
import type { Metadata, Viewport } from 'next';
import '../styles/tailwind.css';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: 'DoseItUp — Never Miss a Dose Again',
  description: 'DoseItUp sends smart medication reminders and notifies your family if a dose is missed — peace of mind for patients and caregivers.',
  icons: {
    icon: [
      { url: '/assets/images/ChatGPT_Image_Jul_1__2026__05_48_44_PM__1_-1785657009234.png', type: 'image/png' }
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
</body>
    </html>
  );
}