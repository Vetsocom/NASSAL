import React from 'react';
import Icon from '@/components/ui/AppIcon';

const commitments = [
  { icon: 'DocumentCheckIcon',  title: 'Registered NGO',         desc: 'NASSAL is a formally registered not-for-profit organization in Liberia, operating under full legal compliance and accountability.' },
  { icon: 'ShieldCheckIcon',    title: 'Transparent Operations', desc: 'We maintain open financial and programmatic reporting to our partners, donors, and the communities we serve.' },
  { icon: 'UsersIcon',          title: 'Community-Governed',     desc: 'Our board includes members directly connected to the communities we serve, ensuring survivor voices shape our direction.' },
  { icon: 'GlobeAltIcon',       title: 'Partnership-Driven',     desc: 'We actively collaborate with healthcare organizations, civil society groups, and government agencies to amplify impact.' },
];

export default function GovernanceSection() {
  return (
    <section className="section-padding bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl mb-14">
          <p className="text-xs uppercase tracking-widest font-bold text-accent mb-3">Governance</p>
          <h2 className="font-display text-4xl sm:text-5xl font-700 text-foreground leading-tight mb-5">
            Our Commitment to<br />Accountability
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            NASSAL operates with the highest standards of governance, transparency, and community accountability — because the trust of survivors and partners is our most valuable asset.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {commitments.map((c) => (
            <div key={c.title} className="card-hover group bg-card border border-border rounded-2xl p-6 shadow-card">
              <div className="w-12 h-12 rounded-xl bg-primary/8 flex items-center justify-center mb-4 group-hover:bg-primary transition-all duration-300">
                <Icon name={c.icon as 'DocumentCheckIcon'} size={22} className="text-primary group-hover:text-white transition-colors" />
              </div>
              <h3 className="font-display font-600 text-lg text-foreground mb-2">{c.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}