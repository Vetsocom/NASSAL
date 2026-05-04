'use client';

import React from 'react';
import Icon from '@/components/ui/AppIcon';

const testimonials = [
  {
    content: "NASSAL gave me the hope I thought I had lost after my stroke. The support group sessions helped me realize I wasn't alone in this journey. I am forever grateful for their dedication to survivors in Liberia.",
    author: "Massa K.",
    role: "Stroke Survivor",
    color: "bg-red-50 dark:bg-red-900/10",
    textColor: "text-primary",
  },
  {
    content: "As a caregiver, I was overwhelmed and didn't know how to help my father. NASSAL's education programs provided the knowledge and tools I needed to support his recovery. They are a beacon of light for families.",
    author: "Emmanuel T.",
    role: "Family Caregiver",
    color: "bg-amber-50 dark:bg-amber-900/10",
    textColor: "text-accent",
  },
  {
    content: "Partnering with NASSAL has been a rewarding experience. Their commitment to community health and their transparent approach to project management make them an ideal partner for healthcare initiatives in Liberia.",
    author: "Dr. Siafa B.",
    role: "Health Program Director",
    color: "bg-teal-50 dark:bg-teal-900/10",
    textColor: "text-teal",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="section-padding bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-xs uppercase tracking-widest font-bold text-accent mb-3">Testimonials</p>
          <h2 className="font-display text-4xl sm:text-5xl font-700 text-foreground leading-tight mb-5">
            Voices of Hope & Recovery
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Hear from the survivors, caregivers, and partners whose lives have been impacted by NASSAL&apos;s mission.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div 
              key={i} 
              className={`relative p-8 rounded-3xl border border-border shadow-card hover:shadow-lg transition-all duration-300 group flex flex-col h-full`}
            >
              <div className={`absolute -top-4 left-8 w-10 h-10 rounded-xl ${t.color} flex items-center justify-center border border-border/50 shadow-sm`}>
                <Icon name="StarIcon" size={18} className={t.textColor} />
              </div>
              <div className="mt-4 flex-grow">
                <Icon name="SparklesIcon" size={24} className="text-border mb-4" />
                <p className="text-foreground/80 leading-relaxed italic mb-8 relative z-10">
                   &ldquo;{t.content}&rdquo;
                </p>
              </div>
              <div className="flex items-center gap-4 border-t border-border pt-6">
                <div className={`w-12 h-12 rounded-full ${t.color} flex items-center justify-center text-lg font-display font-700 ${t.textColor}`}>
                  {t.author.charAt(0)}
                </div>
                <div>
                  <h4 className="font-display font-700 text-foreground text-base leading-none mb-1">{t.author}</h4>
                  <p className="text-muted-foreground text-xs font-bold uppercase tracking-widest">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
