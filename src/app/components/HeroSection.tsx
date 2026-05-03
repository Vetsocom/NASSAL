'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';

export default function HeroSection() {
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!bgRef?.current) return;
      const scrollY = window.scrollY;
      const progress = Math.min(scrollY / 700, 1);
      const blurVal = progress * 16;
      const brightnessVal = 1 - progress * 0.45;
      const scaleVal = 1 + progress * 0.04;
      bgRef.current.style.filter = `blur(${blurVal}px) brightness(${brightnessVal})`;
      bgRef.current.style.transform = `scale(${scaleVal})`;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative min-h-[95vh] flex items-center overflow-hidden">
      {/* Background image */}
      <div ref={bgRef} className="absolute inset-0 will-change-transform transition-none">
        <AppImage
          src="https://img.rocket.new/generatedImages/rocket_gen_img_19bb7f3b4-1764830572966.png"
          alt="Healthcare workers in a bright clinical setting providing compassionate care in a Liberian community"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw" />
        
      </div>
      {/* Overlay gradient — dark on left for text legibility */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/50 to-black/20 z-10" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 z-10" />
      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-10 pt-32 pb-20 w-full">
        <div className="max-w-2xl">
          {/* Label */}
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20 bg-white/10 text-white text-xs font-bold uppercase tracking-widest mb-6"
            style={{ animation: 'fadeSlideIn 0.7s ease-out 0.2s both' }}>
            
            <span className="w-1.5 h-1.5 rounded-full bg-accent inline-block" />
            NASSAL
          </div>

          {/* Headline */}
          <h1
            className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-900 leading-[1.0] text-white mb-6"
            style={{ animation: 'fadeSlideIn 0.9s ease-out 0.35s both', opacity: 0 }}>
            
            Healing,<br />
            <span className="text-accent">Hope</span> &<br />
            Resilience.
          </h1>

          {/* Sub */}
          <p
            className="text-white/80 text-lg sm:text-xl leading-relaxed max-w-xl mb-10"
            style={{ animation: 'fadeSlideIn 0.8s ease-out 0.55s both', opacity: 0 }}>
            
            National Stroke Survivors Association of Liberia supports stroke survivors through awareness, education, advocacy, and recovery-focused community outreach.
          </p>

          {/* CTAs */}
          <div
            className="flex flex-wrap gap-4"
            style={{ animation: 'fadeSlideIn 0.7s ease-out 0.75s both', opacity: 0 }}>
            
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-primary text-white font-bold text-base shadow-red hover:bg-primary/90 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200">
              
              Get Support
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl border border-white/30 bg-white/10 text-white font-bold text-base hover:bg-white/20 transition-all duration-200">
              
              Our Projects
            </Link>
          </div>

          {/* Trust badges */}
          <div
            className="flex flex-wrap gap-6 mt-12 pt-8 border-t border-white/15"
            style={{ animation: 'fadeSlideIn 0.7s ease-out 0.95s both', opacity: 0 }}>
            
            {[
            { num: '500+', label: 'Survivors Supported' },
            { num: '12+', label: 'Awareness Campaigns' },
            { num: '8+', label: 'Outreach Programs' }]?.
            map((b) =>
            <div key={b?.label} className="text-white">
                <p className="text-2xl font-display font-700 text-accent">{b?.num}</p>
                <p className="text-xs text-white/60 font-medium uppercase tracking-wide">{b?.label}</p>
              </div>
            )}
          </div>
        </div>
      </div>
      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent z-20" />
    </section>);

}