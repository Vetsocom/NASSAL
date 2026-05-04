import React from 'react';
import AppImage from '@/components/ui/AppImage';

export default function OutreachBanner() {
  return (
    <section className="section-padding bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative rounded-3xl overflow-hidden min-h-[360px] flex items-center">
          <AppImage
            src="/assets/images/project.png"
            alt="A large outdoor community health event in West Africa with people gathered in bright sunlight, symbolizing NASSAL's community outreach"
            fill
            className="object-cover object-center"
            sizes="100vw" />
          
          {/* Dark scrim for white text */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/55 to-black/30" />

          <div className="relative z-10 max-w-2xl px-8 sm:px-14 py-12">
            <p className="text-white/70 text-xs uppercase tracking-widest font-bold mb-4">Community Outreach</p>
            <h2 className="font-display text-4xl sm:text-5xl font-700 text-white leading-tight mb-5">
              Bringing Awareness and Support Closer to Communities
            </h2>
            <p className="text-white/75 text-base leading-relaxed max-w-lg">
              NASSAL goes where survivors are — into communities, markets, schools, and homes — because access to information and support should never depend on geography or resources.
            </p>
          </div>
        </div>
      </div>
    </section>);

}