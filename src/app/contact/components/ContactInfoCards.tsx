import React from 'react';
import Icon from '@/components/ui/AppIcon';

const cards = [
  {
    icon: 'EnvelopeIcon',
    title: 'Email Us',
    lines: ['nationalstrokesurvivors@gmail.com'],
    href: 'mailto:nationalstrokesurvivors@gmail.com',
    color: 'text-primary',
    bg: 'bg-red-50 dark:bg-red-900/20',
  },
  {
    icon: 'WhatsApp',
    title: 'WhatsApp Us',
    lines: ['+231 776 279 605', 'Quick Response'],
    href: 'https://wa.me/+231881451935',
    color: 'text-teal',
    bg: 'bg-teal-50 dark:bg-teal-900/20',
  },
  {
    icon: 'PhoneIcon',
    title: 'Call Us',
    lines: ['+231 776 279 605', '+231 881 451 935'],
    href: 'tel:+231776279605',
    color: 'text-accent',
    bg: 'bg-amber-50 dark:bg-amber-900/20',
  },
  {
    icon: 'UserIcon',
    title: 'Registered Agent',
    lines: ['Mr. Dominic Morlu', 'Caldwell, Montserrado County'],
    href: 'mailto:nationalstrokesurvivors@gmail.com',
    color: 'text-primary',
    bg: 'bg-red-50 dark:bg-red-900/20',
  },
];

export default function ContactInfoCards() {
  return (
    <section className="pt-16 pb-8 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {cards.map((c) => (
            <a
              key={c.title}
              href={c.href}
              className="card-hover group bg-card border border-border rounded-2xl p-6 shadow-card block"
            >
              <div className={`w-12 h-12 rounded-xl ${c.bg} flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-300`}>
                <Icon name={c.icon as 'EnvelopeIcon'} size={22} className={c.color} />
              </div>
              <h3 className="font-display font-600 text-lg text-foreground mb-2">{c.title}</h3>
              {c.lines.map((l, i) => (
                <p key={i} className="text-muted-foreground text-sm leading-relaxed">{l}</p>
              ))}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}