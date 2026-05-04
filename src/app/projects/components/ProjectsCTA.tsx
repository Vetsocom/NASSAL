import React from 'react';
import Link from 'next/link';

export default function ProjectsCTA() {
  return (
    <section className="pt-0 pb-20 bg-background">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="bg-gradient-to-br from-[#1C1917] to-[#292524] border border-white/8 rounded-3xl p-12 sm:p-16 shadow-card">
          <p className="text-xs uppercase tracking-widest font-bold text-accent mb-4">Get Involved</p>
          <h2 className="font-display text-4xl sm:text-5xl font-700 text-white leading-tight mb-5">
            Support the Work<br />That Saves Lives
          </h2>
          <p className="text-white/65 text-lg leading-relaxed max-w-xl mx-auto mb-10">
            Partner with NASSAL to expand our reach, deepen our impact, and bring hope to more stroke survivors and communities across Liberia.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="mailto:nationalstrokesurvivors@gmail.com?subject=Partnership Inquiry - NASSAL"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-accent text-white font-bold text-base hover:bg-accent/90 hover:-translate-y-0.5 hover:shadow-gold transition-all duration-200"
            >
              Partner With Us
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl border border-white/20 text-white font-bold text-base hover:bg-white/10 hover:-translate-y-0.5 transition-all duration-200"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}