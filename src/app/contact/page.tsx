import React from 'react';
import type { Metadata } from 'next';
import Header from '@/components/Header';

export const metadata: Metadata = {
  title: 'Contact NASSAL — Get Support or Partner With Us',
  description: 'Reach out to the National Stroke Survivors Association of Liberia for support, partnerships, or to learn more about our stroke prevention and recovery programs.',
  keywords: ['Contact NASSAL', 'Stroke support Liberia phone', 'WhatsApp NASSAL', 'Partner with NASSAL', 'Donate to stroke survivors Liberia'],
};
import Footer from '@/components/Footer';
import ContactHero from '@/app/contact/components/ContactHero';
import ContactInfoCards from '@/app/contact/components/ContactInfoCards';
import ContactFormSection from '@/app/contact/components/ContactFormSection';
import LocationSection from '@/app/contact/components/LocationSection';
import ContactReassurance from '@/app/contact/components/ContactReassurance';

export default function ContactPage() {
  return (
    <main className="bg-background text-foreground">
      <Header />
      <ContactHero />
      <ContactInfoCards />
      <ContactFormSection />
      <LocationSection />
      <ContactReassurance />
      <Footer />
    </main>
  );
}