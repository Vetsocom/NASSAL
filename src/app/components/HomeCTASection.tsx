import React from 'react';
import Link from 'next/link';

export default function HomeCTASection() {
  return (
    <section className="pt-16 pb-20 bg-background">
      <div className="max-w-5xl mx-auto px-6">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-primary via-[#C41E1E] to-[#7C1010] p-12 sm:p-16 text-center shadow-2xl">
          {/* Subtle decorative circles */}
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-white/5 -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-white/5 translate-y-1/2 -translate-x-1/2" />

          <div className="relative z-10">
            <p className="text-white/70 text-xs uppercase tracking-widest font-bold mb-4">Take Action</p>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-700 text-white leading-tight mb-5">
              Join Us in Advancing<br />Hope and Recovery
            </h2>
            <p className="text-white/75 text-lg leading-relaxed max-w-2xl mx-auto mb-10">
              Whether you&apos;re a stroke survivor, caregiver, healthcare professional, or compassionate community member — there is a place for you in the NASSAL family.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-white text-primary font-bold text-base hover:bg-white/90 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200"
              >
                Contact Us
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl border-2 border-white/40 text-white font-bold text-base hover:bg-white/10 hover:-translate-y-0.5 transition-all duration-200"
              >
                View Projects
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}