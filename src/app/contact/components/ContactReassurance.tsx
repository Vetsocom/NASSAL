import React from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

const reassurances = [
  { icon: 'ClockIcon',        text: 'We respond within 2 business days' },
  { icon: 'ShieldCheckIcon',  text: 'Your information is kept private and secure' },
  { icon: 'HeartIcon',        text: 'Every message is read with care and compassion' },
];

export default function ContactReassurance() {
  return (
    <section className="pt-0 pb-20 bg-background">
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-gradient-to-br from-primary via-[#C41E1E] to-[#7C1010] rounded-3xl p-10 sm:p-14 text-center shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-56 h-56 rounded-full bg-white/5 -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-40 h-40 rounded-full bg-black/10 translate-y-1/2 -translate-x-1/2" />

          <div className="relative z-10">
            <p className="text-white/70 text-xs uppercase tracking-widest font-bold mb-4">We&apos;re Here For You</p>
            <h2 className="font-display text-3xl sm:text-4xl font-700 text-white leading-tight mb-6">
              No Question Too Small,<br />No Need Too Great
            </h2>

            <div className="flex flex-wrap justify-center gap-5 mb-8">
              {reassurances.map(r => (
                <div key={r.text} className="flex items-center gap-2.5 bg-white/10 border border-white/15 rounded-xl px-4 py-2.5">
                  <Icon name={r.icon as 'ClockIcon'} size={16} className="text-accent shrink-0" />
                  <span className="text-white/85 text-sm font-medium">{r.text}</span>
                </div>
              ))}
            </div>

            <a
              href="mailto:dominicmorlu7@gmail.com"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-white text-primary font-bold text-base hover:bg-white/90 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200"
            >
              <Icon name="EnvelopeIcon" size={18} />
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}