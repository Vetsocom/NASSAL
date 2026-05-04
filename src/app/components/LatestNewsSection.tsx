'use client';

import React from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';

const posts = [
  {
    title: "Understanding Stroke: The BE-FAST Protocol",
    excerpt: "Recognizing the signs of a stroke early can save lives. Learn the BE-FAST protocol and how to react in an emergency.",
    date: "May 10, 2026",
    category: "Awareness",
    image: "/assets/images/blog1.png",
  },
  {
    title: "NASSAL Community Outreach in Caldwell",
    excerpt: "Our team recently visited Caldwell for a successful blood pressure screening and stroke education workshop.",
    date: "April 28, 2026",
    category: "Outreach",
    image: "/assets/images/blog2.png",
  },
  {
    title: "Prevention is Key: Managing Hypertension",
    excerpt: "High blood pressure is a leading risk factor for stroke. Here are five practical tips to manage your hypertension.",
    date: "April 15, 2026",
    category: "Prevention",
    image: "/assets/images/blog3.png",
  },
];

export default function LatestNewsSection() {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-widest font-bold text-accent mb-3">Stay Updated</p>
            <h2 className="font-display text-4xl sm:text-5xl font-700 text-foreground leading-tight">
              Latest News & Insights
            </h2>
          </div>
          <Link 
            href="/projects" 
            className="inline-flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all"
          >
            View All Updates <Icon name="ArrowRightIcon" size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <article 
              key={i} 
              className="group bg-card border border-border rounded-3xl overflow-hidden shadow-card hover:shadow-lg transition-all duration-300 flex flex-col h-full"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-300 z-10" />
                <AppImage 
                  src={post.image} 
                  alt={post.title} 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  fallbackSrc="/assets/images/no_image.png"
                />
                <div className="absolute top-4 left-4 z-20">
                  <span className="px-3 py-1 rounded-full bg-white/90 dark:bg-black/80 backdrop-blur-sm text-[10px] font-bold uppercase tracking-widest text-primary shadow-sm">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="p-8 flex flex-col flex-1">
                <div className="flex items-center gap-2 text-muted-foreground text-xs font-semibold mb-3">
                  <Icon name="ClockIcon" size={12} />
                  <span>{post.date}</span>
                </div>
                <h3 className="font-display font-700 text-xl text-foreground mb-3 leading-tight group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-1">
                  {post.excerpt}
                </p>
                <Link 
                  href="/projects" 
                  className="inline-flex items-center gap-2 text-foreground font-bold text-sm group-hover:gap-3 transition-all"
                >
                  Read More <Icon name="ChevronRightIcon" size={14} className="text-primary" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
