import React from 'react';

export default function ContactHero() {
  return (
    <section className="relative pt-36 pb-20 bg-gradient-to-br from-primary via-[#C41E1E] to-[#7C1010] overflow-hidden">
      <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-white/5 -translate-y-1/3 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-60 h-60 rounded-full bg-black/10 translate-y-1/2 -translate-x-1/3" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <p
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20 bg-white/10 text-white text-xs font-bold uppercase tracking-widest mb-6"
          style={{ animation: 'fadeSlideIn 0.6s ease-out 0.1s both' }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-accent inline-block" />
          Reach Out
        </p>
        <h1
          className="font-display text-5xl sm:text-6xl lg:text-7xl font-900 text-white leading-tight mb-6"
          style={{ animation: 'fadeSlideIn 0.8s ease-out 0.25s both', opacity: 0 }}
        >
          Contact Us
        </h1>
        <p
          className="text-white/80 text-xl leading-relaxed max-w-2xl mx-auto"
          style={{ animation: 'fadeSlideIn 0.7s ease-out 0.45s both', opacity: 0 }}
        >
          We&apos;re here to help. Whether you&apos;re a stroke survivor, caregiver, partner, or supporter — reach out and we will respond.
        </p>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 60 Q720 0 1440 60 L1440 60 L0 60 Z" fill="var(--background)" />
        </svg>
      </div>
    </section>
  );
}