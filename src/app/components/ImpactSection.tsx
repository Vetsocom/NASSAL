'use client';

import React, { useEffect, useRef, useState } from 'react';
import Icon from '@/components/ui/AppIcon';

const stats = [
  { icon: 'HeartIcon',       value: 500,  suffix: '+', label: 'Stroke Survivors Supported',    desc: 'Individuals reached through direct support and counseling programs' },
  { icon: 'MegaphoneIcon',   value: 12,   suffix: '+', label: 'Awareness Campaigns',           desc: 'Community-wide campaigns educating on stroke prevention and response' },
  { icon: 'UserGroupIcon',   value: 8,    suffix: '+', label: 'Community Outreach Programs',   desc: 'Structured programs bringing healthcare knowledge to underserved areas' },
  { icon: 'BuildingOfficeIcon', value: 6, suffix: '+', label: 'Partner Organizations',         desc: 'Healthcare and civil society partners amplifying our collective impact' },
];

function CounterCard({ stat, delay }: { stat: typeof stats[0]; delay: number }) {
  const [count, setCount]   = useState(0);
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;
    const timer = setTimeout(() => {
      let start = 0;
      const duration = 1800;
      const step = 16;
      const increment = stat.value / (duration / step);
      const interval = setInterval(() => {
        start += increment;
        if (start >= stat.value) {
          setCount(stat.value);
          clearInterval(interval);
        } else {
          setCount(Math.floor(start));
        }
      }, step);
      return () => clearInterval(interval);
    }, delay);
    return () => clearTimeout(timer);
  }, [visible, stat.value, delay]);

  return (
    <div
      ref={ref}
      className="card-hover bg-card border border-border rounded-2xl p-6 shadow-card group"
      style={{ opacity: 1 }}
    >
      <div className="relative w-12 h-12 rounded-xl bg-primary/8 flex items-center justify-center mb-5 group-hover:bg-primary transition-all duration-300">
        <Icon name={stat.icon as 'HeartIcon'} size={22} className="text-primary group-hover:text-white transition-colors" />
      </div>
      <p className="font-display text-4xl sm:text-5xl font-900 text-primary mb-1">
        {count}{stat.suffix}
      </p>
      <p className="font-display font-600 text-lg text-foreground mb-2">{stat.label}</p>
      <p className="text-muted-foreground text-sm leading-relaxed">{stat.desc}</p>
    </div>
  );
}

export default function ImpactSection() {
  return (
    <section className="section-padding bg-secondary/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-xs uppercase tracking-widest font-bold text-accent mb-3">Our Impact</p>
          <h2 className="font-display text-4xl sm:text-5xl font-700 text-foreground leading-tight mb-5">
            Real Numbers, Real Lives Changed
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Every number represents a person, a family, a community — touched by NASSAL&apos;s work in a nation where stroke care is critically limited.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <CounterCard key={stat.label} stat={stat} delay={i * 150} />
          ))}
        </div>
      </div>
    </section>
  );
}