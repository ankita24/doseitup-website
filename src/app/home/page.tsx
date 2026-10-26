'use client';

import React, { useEffect } from 'react';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from './components/HeroSection';
import ProblemSection from './components/ProblemSection';
import FeaturesSection from './components/FeaturesSection';
import AppPreviewSection from './components/AppPreviewSection';
import BenefitsSection from './components/BenefitsSection';

function HomePageContent() {
  useEffect(() => {
    const hash = window.location?.hash;
    if (hash) {
      const id = hash?.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => el?.scrollIntoView({ behavior: 'smooth' }), 100);
      }
    }
  }, []);

  return (
    <main>
      <Header />
      <HeroSection />
      <ProblemSection />
      <FeaturesSection />
      <AppPreviewSection />
      <BenefitsSection />
      <Footer />
    </main>
  );
}

export default function HomePage() {
  return <HomePageContent />;
}