import React from 'react';
import type { Metadata } from 'next';
import Header from '@/components/Header';

export const metadata: Metadata = {
  title: 'NASSAL — Healing, Hope & Resilience for Stroke Survivors in Liberia',
  description: 'The National Stroke Survivors Association of Liberia (NASSAL) provides advocacy, education, and peer support to stroke survivors and their families across Liberia.',
  keywords: ['NASSAL', 'Stroke survivors Liberia', 'Stroke prevention', 'Hypertension awareness', 'Recovery support Liberia','Liberia','nassal','stroke prevention'],
};
import Footer from '@/components/Footer';
import HeroSection from '@/app/components/HeroSection';
import MissionSection from '@/app/components/MissionSection';
import ImpactSection from '@/app/components/ImpactSection';
import WhatWeDoSection from '@/app/components/WhatWeDoSection';
import WhyItMattersSection from '@/app/components/WhyItMattersSection';
import FeaturedProjectsSection from '@/app/components/FeaturedProjectsSection';
import LeadershipPreviewSection from '@/app/components/LeadershipPreviewSection';
import TestimonialsSection from '@/app/components/TestimonialsSection';
import LatestNewsSection from '@/app/components/LatestNewsSection';
import HomeCTASection from '@/app/components/HomeCTASection';
import FAQSection from '@/app/components/FAQSection';

export default function HomePage() {
  return (
    <main className="bg-background text-foreground">
      <Header />
      <HeroSection />
      <MissionSection />
      <ImpactSection />
      <WhatWeDoSection />
      <WhyItMattersSection />
      <FeaturedProjectsSection />
      <LeadershipPreviewSection />
      <TestimonialsSection />
      <FAQSection />
      <LatestNewsSection />
      <HomeCTASection />
      <Footer />
    </main>
  );
}