'use client';

import React, { useEffect, useRef } from 'react';
import Icon from '@/components/ui/AppIcon';

// BENTO AUDIT: 6 cards, 3-col grid
// Row 1: [col-1: Survivor Support] [col-2: Awareness Campaigns] [col-3: Community Education]
// Row 2: [col-1: Advocacy] [col-2: Rehabilitation Guidance] [col-3: Family & Caregiver Support]
// Placed 6/6 ✓

const services = [
  {
    icon: 'HeartIcon',
    title: 'Survivor Support',
    desc: 'Personalized support networks, peer counseling, and direct assistance for stroke survivors navigating life after stroke in Liberia.',
    color: 'bg-red-50 dark:bg-red-900/20 text-primary',
  },
  {
    icon: 'MegaphoneIcon',
    title: 'Awareness Campaigns',
    desc: 'Community-wide campaigns using radio, community gatherings, and print to teach stroke warning signs — BE-FAST: Balance, Eyes, Face, Arms, Speech, Time.',
    color: 'bg-amber-50 dark:bg-amber-900/20 text-accent',
  },
  {
    icon: 'AcademicCapIcon',
    title: 'Community Education',
    desc: 'Structured health literacy programs bringing prevention knowledge, risk factor awareness, and healthy lifestyle guidance to communities.',
    color: 'bg-teal-50 dark:bg-teal-900/20 text-teal',
  },
  {
    icon: 'ScaleIcon',
    title: 'Advocacy',
    desc: 'Advocating at civic and governmental levels for improved stroke care, neurological services, and healthcare policy reform in Liberia.',
    color: 'bg-red-50 dark:bg-red-900/20 text-primary',
  },
  {
    icon: 'ArrowPathIcon',
    title: 'Rehabilitation Guidance',
    desc: 'Providing guidance and resources to help survivors access rehabilitation services and develop home-based recovery strategies.',
    color: 'bg-amber-50 dark:bg-amber-900/20 text-accent',
  },
  {
    icon: 'UserGroupIcon',
    title: 'Family & Caregiver Support',
    desc: 'Training and supporting families and caregivers with practical skills, emotional guidance, and ongoing community connection.',
    color: 'bg-teal-50 dark:bg-teal-900/20 text-teal',
  },
];

export default function WhatWeDoSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.service-card').forEach((el, i) => {
              (el as HTMLElement).style.animation = `fadeSlideIn 0.7s ease-out ${0.1 + i * 0.08}s forwards`;
              (el as HTMLElement).style.opacity = '1';
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="section-padding bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-xs uppercase tracking-widest font-bold text-accent mb-3">What We Do</p>
          <h2 className="font-display text-4xl sm:text-5xl font-700 text-foreground leading-tight mb-5">
            Six Pillars of<br />
            <span className="text-gradient-brand">Stroke Recovery Support</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            From the moment of stroke through long-term recovery, NASSAL provides comprehensive support addressing every dimension of a survivor&apos;s journey.
          </p>
        </div>

        {/* 3-col bento grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div
              key={s.title}
              className="service-card card-hover group bg-card border border-border rounded-2xl p-7 shadow-card opacity-100"
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110 ${s.color}`}>
                <Icon name={s.icon as 'HeartIcon'} size={22} />
              </div>
              <h3 className="font-display font-600 text-xl text-foreground mb-3">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}