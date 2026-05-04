import React from 'react';
import type { Metadata } from 'next';
import Header from '@/components/Header';

export const metadata: Metadata = {
  title: 'About NASSAL — Our Mission, Leadership & Story',
  description: 'Learn about the National Stroke Survivors Association of Liberia (NASSAL), our history, our dedicated leadership team, and our mission to support stroke survivors through advocacy and education.',
  keywords: ['NASSAL mission', 'Liberia stroke survivors leadership', 'stroke advocacy history', 'Dominic Morlu NASSAL', 'stroke survivor support group Liberia'],
};
import Footer from '@/components/Footer';
import AboutHero from '@/app/about/components/AboutHero';
import OurStory from '@/app/about/components/OurStory';
import MissionVision from '@/app/about/components/MissionVision';
import CoreValues from '@/app/about/components/CoreValues';
import WhyWeExist from '@/app/about/components/WhyWeExist';
import FullLeadership from '@/app/about/components/FullLeadership';
import GovernanceSection from '@/app/about/components/GovernanceSection';
import AboutCTA from '@/app/about/components/AboutCTA';

export default function AboutPage() {
  return (
    <main className="bg-background text-foreground">
      <Header />
      <AboutHero />
      <OurStory />
      <MissionVision />
      <CoreValues />
      <WhyWeExist />
      <FullLeadership />
      <GovernanceSection />
      <AboutCTA />
      <Footer />
    </main>
  );
}