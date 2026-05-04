'use client';

import React, { useEffect, useRef } from 'react';
import Icon from '@/components/ui/AppIcon';

// BENTO AUDIT: 7 cards, 3-col grid
// Row 1: [col-1: Stroke Awareness] [col-2: Prevention Education] [col-3: Survivor Support]
// Row 2: [col-1: Mental Health] [col-2: Outreach & Healthcare] [col-3: Seminars & Workshops]
// Row 3: [col-1: Fundraising & Partnerships — col-span-3 (full width)]
// Placed 7/7 ✓

const projects = [
  {
    icon: 'MegaphoneIcon',
    title: 'Stroke Awareness Campaigns',
    category: 'Public Education',
    desc: 'Large-scale community campaigns using radio, town halls, and print media to teach stroke recognition, the BE-FAST protocol, and emergency response across Montserrado County and beyond.',
    status: 'Active',
    statusColor: 'bg-green-100 text-green-700',
    span: '',
  },
  {
    icon: 'ShieldCheckIcon',
    title: 'Prevention Education Programs',
    category: 'Health Literacy',
    desc: 'Structured programs in schools and community centers targeting hypertension, diabetes, obesity, and other stroke risk factors with culturally relevant education and lifestyle guidance.',
    status: 'Ongoing',
    statusColor: 'bg-blue-100 text-blue-700',
    span: '',
  },
  {
    icon: 'HeartIcon',
    title: 'Survivor Support Programs',
    category: 'Direct Support',
    desc: 'Peer support groups, one-on-one assistance, and resource connection programs for stroke survivors and their families — addressing isolation, practical needs, and emotional recovery.',
    status: 'Active',
    statusColor: 'bg-green-100 text-green-700',
    span: '',
  },
  {
    icon: 'SparklesIcon',
    title: 'Mental Health & Counseling',
    category: 'Psychosocial Support',
    desc: 'Counseling services and mental health awareness programs addressing post-stroke depression, anxiety, and psychosocial challenges — critical but often overlooked aspects of stroke recovery.',
    status: 'Active',
    statusColor: 'bg-green-100 text-green-700',
    span: '',
  },
  {
    icon: 'MapPinIcon',
    title: 'Outreach & Healthcare Initiatives',
    category: 'Community Outreach',
    desc: 'Mobile outreach teams bringing blood pressure screenings, health checks, and stroke education directly to underserved communities in Montserrado County and surrounding areas.',
    status: 'Expanding',
    statusColor: 'bg-amber-100 text-amber-700',
    span: '',
  },
  {
    icon: 'AcademicCapIcon',
    title: 'Seminars, Workshops & Training',
    category: 'Capacity Building',
    desc: 'Professional development workshops for community health workers, caregivers, and volunteers — building local capacity to sustain stroke support long after NASSAL programs conclude.',
    status: 'Ongoing',
    statusColor: 'bg-blue-100 text-blue-700',
    span: '',
  },
  {
    icon: 'BuildingOfficeIcon',
    title: 'Fundraising & Partnerships',
    category: 'Organizational Development',
    desc: 'Strategic fundraising initiatives and partnership development with local, national, and international healthcare organizations, NGOs, and government agencies — building the financial and institutional base to sustain and scale NASSAL\'s mission across Liberia.',
    status: 'Active',
    statusColor: 'bg-green-100 text-green-700',
    span: 'lg:col-span-3',
  },
];

export default function ProjectsGrid() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.project-card').forEach((el, i) => {
              (el as HTMLElement).style.animation = `fadeSlideIn 0.7s ease-out ${0.05 + i * 0.08}s forwards`;
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
          <p className="text-xs uppercase tracking-widest font-bold text-accent mb-3">All Projects</p>
          <h2 className="font-display text-4xl sm:text-5xl font-700 text-foreground leading-tight">
            Seven Areas of Impact
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <div
              key={p.title}
              className={`project-card card-hover group bg-card border border-border rounded-2xl p-7 shadow-card opacity-100 flex flex-col ${p.span}`}
            >
              <div className="flex items-start justify-between mb-5">
                <div className="w-12 h-12 rounded-xl bg-primary/8 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <Icon name={p.icon as 'MegaphoneIcon'} size={22} className="text-primary group-hover:text-white transition-colors" />
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-bold ${p.statusColor}`}>{p.status}</span>
              </div>
              <p className="text-xs uppercase tracking-widest font-bold text-accent mb-2">{p.category}</p>
              <h3 className="font-display font-600 text-xl text-foreground mb-3">{p.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed flex-1">{p.desc}</p>
              {p.title === 'Fundraising & Partnerships' && (
                <a
                  href="mailto:nationalstrokesurvivors@gmail.com?subject=Partnership Inquiry - NASSAL"
                  className="mt-6 inline-flex items-center gap-2 text-primary font-bold text-sm hover:gap-3 transition-all"
                >
                  Partner With Us <Icon name="ArrowRightIcon" size={14} />
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}