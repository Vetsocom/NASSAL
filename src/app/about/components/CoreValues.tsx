'use client';

import React, { useEffect, useRef } from 'react';
import Icon from '@/components/ui/AppIcon';

// BENTO AUDIT: 8 cards, 4-col grid
// Row 1: [col-1: Compassion] [col-2: Hope] [col-3: Resilience] [col-4: Education]
// Row 2: [col-1: Advocacy] [col-2: Community Support] [col-3: Dignity] [col-4: Accountability]
// Placed 8/8 ✓

const values = [
  { icon: 'HeartIcon',          title: 'Compassion',         desc: 'We lead with empathy, meeting survivors and families where they are with kindness and genuine care.',              color: 'text-primary' },
  { icon: 'SunIcon',            title: 'Hope',               desc: 'We believe recovery is possible and work to cultivate hope in every survivor, caregiver, and community we serve.', color: 'text-accent' },
  { icon: 'BoltIcon',           title: 'Resilience',         desc: 'We celebrate the strength of survivors and build programs that reinforce the human capacity to overcome.',         color: 'text-teal' },
  { icon: 'AcademicCapIcon',    title: 'Education',          desc: 'We empower through knowledge, ensuring communities have the health literacy to prevent and respond to stroke.',     color: 'text-primary' },
  { icon: 'ScaleIcon',          title: 'Advocacy',           desc: 'We speak up for survivors at every level — community, civic, and governmental — to drive systemic change.',       color: 'text-accent' },
  { icon: 'UserGroupIcon',      title: 'Community Support',  desc: 'We believe in the power of community and create networks of support that sustain survivors beyond our programs.',  color: 'text-teal' },
  { icon: 'StarIcon',           title: 'Dignity',            desc: 'We honor the inherent dignity of every person, ensuring our programs affirm worth, respect, and self-determination.', color: 'text-primary' },
  { icon: 'ClipboardDocumentCheckIcon', title: 'Accountability', desc: 'We hold ourselves accountable to survivors, partners, and communities — transparent in our work and impact.', color: 'text-accent' },
];

export default function CoreValues() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.value-card').forEach((el, i) => {
              (el as HTMLElement).style.animation = `fadeSlideIn 0.6s ease-out ${0.05 + i * 0.07}s forwards`;
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
    <section ref={sectionRef} className="section-padding bg-secondary/40">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-xs uppercase tracking-widest font-bold text-accent mb-3">Core Values</p>
          <h2 className="font-display text-4xl sm:text-5xl font-700 text-foreground leading-tight mb-5">
            What We Stand For
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Eight principles guide everything NASSAL does — from individual survivor support to national advocacy.
          </p>
        </div>

        {/* 4-col bento grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {values.map((v) => (
            <div
              key={v.title}
              className="value-card card-hover group bg-card border border-border rounded-2xl p-6 shadow-card opacity-100"
            >
              <Icon name={v.icon as 'HeartIcon'} size={24} className={`${v.color} mb-4 group-hover:scale-110 transition-transform duration-300`} />
              <h3 className="font-display font-600 text-lg text-foreground mb-2">{v.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}