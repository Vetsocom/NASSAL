import React from 'react';
import Header from '@/components/Header';
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