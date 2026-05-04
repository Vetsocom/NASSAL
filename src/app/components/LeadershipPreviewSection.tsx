import React from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';

interface Leader {
  name: string;
  role: string;
  initials: string;
  img?: string;
  color: string;
  facebook?: string;
  whatsapp?: string;
}

const ORG_FACEBOOK = 'https://www.facebook.com/share/1KL4T3SG2s/';
const ORG_WHATSAPP = 'https://wa.me/231776279605';

const leaders: Leader[] = [
  { 
    name: 'Sorna F. Sherif',    
    role: 'Board Chair',        
    initials: 'SS', 
    color: 'bg-primary', 
    img: '/assets/images/sorna.png',
    facebook: ORG_FACEBOOK,
    whatsapp: ORG_WHATSAPP
  },
  { 
    name: 'Isaac V. Farnga',    
    role: 'Co-Chair',           
    initials: 'IF', 
    color: 'bg-accent', 
    img: '/assets/images/issac.png',
    facebook: ORG_FACEBOOK,
    whatsapp: ORG_WHATSAPP
  },
  { 
    name: 'Mr. Dominic Morlu',  
    role: 'Secretary General',  
    initials: 'DM', 
    color: 'bg-teal', 
    img: '/assets/images/dominic.png',
    facebook: ORG_FACEBOOK,
    whatsapp: ORG_WHATSAPP
  },
  { 
    name: 'Victoria Ballayan',  
    role: 'Board Member',       
    initials: 'VB', 
    color: 'bg-primary/70', 
    img: '/assets/images/victoria.png',
    facebook: ORG_FACEBOOK,
    whatsapp: ORG_WHATSAPP
  },
  { 
    name: 'Othello Morlu',      
    role: 'Board Member',       
    initials: 'OM', 
    color: 'bg-accent/70', 
    img: '/assets/images/othello.png',
    facebook: ORG_FACEBOOK,
    whatsapp: ORG_WHATSAPP
  },
];

export default function LeadershipPreviewSection() {
  return (
    <section className="section-padding bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <div>
            <p className="text-xs uppercase tracking-widest font-bold text-accent mb-3">Leadership</p>
            <h2 className="font-display text-4xl sm:text-5xl font-700 text-foreground leading-tight">
              The People Behind NASSAL
            </h2>
          </div>
          <Link
            href="/about"
            className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-primary/80 transition-colors group whitespace-nowrap"
          >
            Full Leadership
            <Icon name="ArrowRightIcon" size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {leaders.map((leader) => (
            <div key={leader.name} className="card-hover group bg-card border border-border rounded-2xl p-6 shadow-card text-center">
              <div className="relative w-20 h-20 rounded-full overflow-hidden mx-auto mb-4 group-hover:scale-105 transition-transform duration-300 shadow-sm">
                {leader.img ? (
                  <AppImage 
                    src={leader.img} 
                    alt={leader.name} 
                    fill 
                    className="object-cover"
                    fallbackSrc="/assets/images/no_image.png"
                  />
                ) : (
                  <div className={`w-full h-full ${leader.color} text-white flex items-center justify-center text-xl font-display font-700`}>
                    {leader.initials}
                  </div>
                )}
              </div>
              <h3 className="font-display font-600 text-base text-foreground mb-1">{leader.name}</h3>
              <p className="text-muted-foreground text-xs font-medium uppercase tracking-wide mb-4">{leader.role}</p>
              
              <div className="flex items-center justify-center gap-3">
                <a 
                  href={leader.facebook} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-8 h-8 flex items-center justify-center rounded-lg bg-secondary text-muted-foreground hover:bg-primary hover:text-white transition-all duration-300"
                  aria-label={`${leader.name} Facebook`}
                >
                  <Icon name="Facebook" size={16} />
                </a>
                <a 
                  href={leader.whatsapp} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-8 h-8 flex items-center justify-center rounded-lg bg-secondary text-muted-foreground hover:bg-teal hover:text-white transition-all duration-300"
                  aria-label={`${leader.name} WhatsApp`}
                >
                  <Icon name="WhatsApp" size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}