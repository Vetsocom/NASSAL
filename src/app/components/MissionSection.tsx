'use client';

import React, { useEffect, useRef } from 'react';
import Icon from '@/components/ui/AppIcon';

const pillars = [
{ icon: 'HeartIcon', title: 'Survivor Support', desc: 'Providing direct assistance, counseling, and guidance to stroke survivors and their families across Liberia.' },
{ icon: 'MegaphoneIcon', title: 'Awareness Campaigns', desc: 'Educating communities on stroke warning signs, risk factors, and the critical importance of timely medical response.' },
{ icon: 'AcademicCapIcon', title: 'Civic Education', desc: 'Empowering communities with health literacy, prevention knowledge, and advocacy skills to protect lives.' },
{ icon: 'UserGroupIcon', title: 'Community Outreach', desc: 'Reaching underserved communities in Montserrado County and beyond with life-saving information and support services.' }];


export default function MissionSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.animate-on-scroll').forEach((el, i) => {
              (el as HTMLElement).style.animation = `fadeSlideIn 0.7s ease-out ${i * 0.1}s forwards`;
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="section-padding bg-background">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-2xl mb-14">
          <p className="animate-on-scroll opacity-100 text-xs uppercase tracking-widest font-bold text-accent mb-3">
            Our Mission
          </p>
          <h2 className="animate-on-scroll opacity-100 font-display text-4xl sm:text-5xl font-700 text-foreground leading-tight mb-5">
            Supporting Survivors,<br />
            <span className="text-gradient-brand">Transforming Lives</span>
          </h2>
          <p className="animate-on-scroll opacity-100 text-muted-foreground text-lg leading-relaxed">
            NASSAL exists to fill a critical gap in Liberia&apos;s healthcare landscape — bringing hope, education, and hands-on support to stroke survivors at a time when professional neurological care is virtually inaccessible.
          </p>
        </div>

        {/* Pillars grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((p, i) =>
          <div
            key={p.title}
            className="animate-on-scroll opacity-100 card-hover group bg-card border border-border rounded-2xl p-6 shadow-card"
            style={{ animationDelay: `${i * 0.1}s` }}>
            
              <div className="w-12 h-12 rounded-xl bg-primary/8 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                <Icon name={p.icon as 'HeartIcon'} size={22} className="text-primary group-hover:text-white transition-colors" />
              </div>
              <h3 className="font-display font-600 text-lg text-foreground mb-2">{p.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
            </div>
          )}
        </div>

        {/* Who We Are */}
        <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xs uppercase tracking-widest font-bold text-accent mb-3">Who We Are</p>
            <h2 className="animate-on-scroll opacity-100 font-display text-4xl sm:text-5xl font-700 text-foreground leading-tight mb-5">
              A Liberian Voice for<br />Stroke Survivors
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed mb-5">
              NASSAL is a registered not-for-profit organization based in Montserrado County, Liberia. We are a community-led, survivor-centered organization dedicated to addressing the devastating impact of stroke in a country where neurological care remains critically scarce.
            </p>
            <p className="text-muted-foreground text-base leading-relaxed mb-5">
              With no neurologists currently practicing in Liberia, stroke survivors face compounding challenges: delayed treatment, lack of rehabilitation services, medication shortages, and social isolation. NASSAL bridges this gap through peer support, community education, and sustained advocacy.
            </p>
            <div className="flex flex-wrap gap-3 mt-6">
              {['Registered NGO', 'Liberia-Based', 'Survivor-Led', 'Community-Centered'].map((tag) =>
              <span key={tag} className="px-3 py-1.5 rounded-full bg-secondary border border-border text-sm font-semibold text-foreground/70">
                  {tag}
                </span>
              )}
            </div>
          </div>

          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-card-lg aspect-[4/3]">
              <AppImage
                src="/assets/images/mission_nassal.png"
                alt="Community health workers gathered in a bright outdoor setting in West Africa, representing NASSAL's community-centered approach"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw" />
              
            </div>
            {/* Floating stat */}
            <div className="absolute -bottom-5 -left-5 bg-white dark:bg-card border border-border rounded-2xl p-4 shadow-card-lg">
              <p className="font-display text-3xl font-700 text-primary">40%</p>
              <p className="text-xs text-muted-foreground font-medium max-w-[120px] leading-tight mt-0.5">1-month stroke fatality rate in Sub-Saharan Africa</p>
            </div>
          </div>
        </div>
      </div>
    </section>);

}

import AppImage from '@/components/ui/AppImage';