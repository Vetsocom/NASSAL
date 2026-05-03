import React from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

const projects = [
{
  title: 'Stroke Awareness Campaigns',
  category: 'Community Outreach',
  desc: 'Large-scale public education campaigns using radio broadcasts, community gatherings, and printed materials to teach stroke recognition and emergency response across Montserrado County.',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1ee0eb479-1774063166582.png",
  alt: 'Community health workers speaking to a large crowd in an outdoor setting in West Africa, sunlit and vibrant',
  tag: 'Active'
},
{
  title: 'Prevention Education Programs',
  category: 'Health Literacy',
  desc: 'Structured school and community programs targeting hypertension, diabetes, and lifestyle risk factors — the leading drivers of stroke in Liberia — with culturally relevant health education.',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1ecac5c95-1772556390888.png",
  alt: 'Health educator presenting prevention information to attentive community members in a bright classroom in Liberia',
  tag: 'Ongoing'
},
{
  title: 'Survivor Support & Counseling',
  category: 'Direct Support',
  desc: 'One-on-one and group counseling, peer support networks, and practical assistance programs connecting stroke survivors with resources, community, and hope for recovery.',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1ca1120dc-1773042399695.png",
  alt: 'Two people in a warm counseling session, one offering supportive guidance in a bright, welcoming room',
  tag: 'Active'
}];


export default function FeaturedProjectsSection() {
  return (
    <section className="section-padding bg-secondary/40">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <div>
            <p className="text-xs uppercase tracking-widest font-bold text-accent mb-3">Featured Projects</p>
            <h2 className="font-display text-4xl sm:text-5xl font-700 text-foreground leading-tight">
              Our Work in Action
            </h2>
          </div>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-primary/80 transition-colors group whitespace-nowrap">
            
            View All Projects
            <Icon name="ArrowRightIcon" size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects?.map((p, i) =>
          <div key={p?.title} className="card-hover group bg-card border border-border rounded-2xl overflow-hidden shadow-card">
              <div className="relative h-52 overflow-hidden">
                <AppImage
                src={p?.image}
                alt={p?.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw" />
              
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-primary text-white text-xs font-bold">
                  {p?.tag}
                </span>
              </div>
              <div className="p-6">
                <p className="text-xs uppercase tracking-widest font-bold text-accent mb-2">{p?.category}</p>
                <h3 className="font-display font-600 text-xl text-foreground mb-3">{p?.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{p?.desc}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>);

}