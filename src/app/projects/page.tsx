import React from 'react';
import type { Metadata } from 'next';
import Header from '@/components/Header';

export const metadata: Metadata = {
  title: 'Our Initiatives — Stroke Prevention & Recovery Projects in Liberia',
  description: 'Explore NASSAL\'s core projects, including the Community Stroke Prevention Initiative, hypertension screenings, and peer support network programs across Liberia.',
  keywords: ['Stroke prevention projects Liberia', 'Hypertension screenings Liberia', 'NASSAL outreach programs', 'Community health initiatives', 'Stroke recovery support groups'],
};
import Footer from '@/components/Footer';
import ProjectsHero from '@/app/projects/components/ProjectsHero';
import ProjectsIntro from '@/app/projects/components/ProjectsIntro';
import ProjectsGrid from '@/app/projects/components/ProjectsGrid';
import FeaturedProject from '@/app/projects/components/FeaturedProject';
import OutreachBanner from '@/app/projects/components/OutreachBanner';
import ProjectsCTA from '@/app/projects/components/ProjectsCTA';

export default function ProjectsPage() {
  return (
    <main className="bg-background text-foreground">
      <Header />
      <ProjectsHero />
      <ProjectsIntro />
      <ProjectsGrid />
      <FeaturedProject />
      <OutreachBanner />
      <ProjectsCTA />
      <Footer />
    </main>
  );
}