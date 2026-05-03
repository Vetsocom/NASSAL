import React from 'react';
import Header from '@/components/Header';
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