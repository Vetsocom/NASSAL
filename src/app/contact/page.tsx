import React from 'react';
import Header from '@/components/Header';
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