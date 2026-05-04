import React from 'react';
import Header from '@/components/Header';
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