import React from 'react';
import Link from 'next/link';

export default function AboutCTA() {
  return (
    <section className="pt-0 pb-20 bg-background">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="bg-gradient-to-br from-secondary to-[#EDE5DA] border border-border rounded-3xl p-12 sm:p-16 shadow-card">
          <p className="text-xs uppercase tracking-widest font-bold text-accent mb-4">Partner With NASSAL</p>
          <h2 className="font-display text-4xl sm:text-5xl font-700 text-foreground leading-tight mb-5">
            Together, We Can<br />Change More Lives
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-xl mx-auto mb-8">
            Whether you&apos;re an organization, healthcare professional, donor, or community leader — partnering with NASSAL means directly impacting stroke survivors and communities across Liberia.
          </p>
          <a
            href="mailto:nationalstrokesurvivors@gmail.com?subject=Partnership Inquiry - NASSAL"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-white text-primary font-bold shadow-xl hover:bg-white/90 transition-all hover:-translate-y-1"
          >
            Partner With Us
          </a>
        </div>
      </div>
    </section>
  );
}