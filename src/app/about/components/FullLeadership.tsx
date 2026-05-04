import React from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface Leader {
  name: string;
  role: string;
  initials: string;
  img?: string;
  color: string;
  bio: string;
  facebook: string;
  whatsapp: string;
}


const leaders: Leader[] = [
  {
    name: 'Sorna F. Sherif',
    role: 'Board Chair',
    initials: 'SS',
    img: '/assets/images/sorna.png',
    color: 'bg-primary',
    bio: "Sorna F. Sherif serves as Board Chair of NASSAL, providing strategic vision and governance leadership. With a deep commitment to community health and survivor welfare, she guides the organization's mission to support stroke survivors across Liberia.",
    facebook: 'https://www.facebook.com/share/1KL4T3SG2s/',
    whatsapp: 'https://wa.me/231-886-336063',
  },
  {
    name: 'Isaac V. Farnga',
    role: 'Co-Chair',
    initials: 'IF',
    img: '/assets/images/issac.png',
    color: 'bg-accent',
    bio: "Isaac V. Farnga serves as Co-Chair, supporting organizational leadership and program development. His dedication to healthcare advocacy and community mobilization strengthens NASSAL's reach and impact across Montserrado County.",
    facebook: 'https://www.facebook.com/share/18cskzQ5CM/',
    whatsapp: 'https://wa.me/231-777-717616',
  },
  {
    name: 'Mr. Dominic Morlu',
    role: 'Secretary General & Registered Agent',
    initials: 'DM',
    img: '/assets/images/dominic.png',
    color: 'bg-teal',
    bio: "Mr. Dominic Morlu serves as Secretary General and Registered Agent of NASSAL, based in Caldwell, Montserrado County. He manages organizational operations, stakeholder communications, and ensures NASSAL's programs are effectively administered and legally compliant.",
    facebook: 'https://www.facebook.com/share/1KL4T3SG2s/',
    whatsapp: 'https://wa.me/231-886-336063',
  },
  {
    name: 'Victoria Ballayan',
    role: 'Board Member',
    initials: 'VB',
    img: '/assets/images/victoria.png',
    color: 'bg-primary/80',
    bio: "Victoria Ballayan brings community health expertise and grassroots advocacy experience to NASSAL's board. Her work focuses on expanding survivor support networks and strengthening caregiver education programs in underserved communities.",
    facebook: 'https://www.facebook.com/share/1CgirFfDr3/',
    whatsapp: 'https://wa.me/231-886-592183',
  },
  {
    name: 'Othello Morlu',
    role: 'Board Member',
    initials: 'OM',
    img: '/assets/images/othello.png',
    color: 'bg-accent/80',
    bio: "Othello Morlu contributes organizational development and partnership-building expertise to NASSAL. His efforts support the expansion of awareness campaigns and the cultivation of key partnerships with healthcare and civil society organizations.",
    facebook: 'https://www.facebook.com/share/1CHn8z34Ee/',
    whatsapp: 'https://wa.me/231-777-167477',
  },
];

export default function FullLeadership() {
  return (
    <section className="section-padding bg-secondary/40">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-xs uppercase tracking-widest font-bold text-accent mb-3">Leadership</p>
          <h2 className="font-display text-4xl sm:text-5xl font-700 text-foreground leading-tight mb-5">
            Meet Our Team
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            NASSAL is led by a dedicated group of Liberians committed to transforming stroke care and survivor support in their communities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {leaders.map((leader) => (
            <div key={leader.name} className="card-hover group bg-card border border-border rounded-2xl p-8 shadow-card flex flex-col h-full">
              <div className="relative w-20 h-20 rounded-2xl overflow-hidden mb-6 group-hover:scale-105 transition-transform duration-300 shadow-sm">
                {leader.img ? (
                  <AppImage 
                    src={leader.img} 
                    alt={leader.name} 
                    fill 
                    className="object-cover"
                    fallbackSrc="/assets/images/no_image.png"
                  />
                ) : (
                  <div className={`w-full h-full ${leader.color} text-white flex items-center justify-center text-2xl font-display font-700`}>
                    {leader.initials}
                  </div>
                )}
              </div>
              <div className="flex-grow">
                <h3 className="font-display font-600 text-xl text-foreground mb-1">{leader.name}</h3>
                <p className="text-accent text-xs font-bold uppercase tracking-widest mb-4">{leader.role}</p>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">{leader.bio}</p>
              </div>
              <div className="flex items-center gap-3">
                <a 
                  href={leader.facebook} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-10 h-10 flex items-center justify-center rounded-xl bg-secondary text-muted-foreground hover:bg-primary hover:text-white transition-all duration-300"
                  aria-label={`${leader.name} Facebook`}
                >
                  <Icon name="Facebook" size={20} />
                </a>
                <a 
                  href={leader.whatsapp} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-10 h-10 flex items-center justify-center rounded-xl bg-secondary text-muted-foreground hover:bg-teal hover:text-white transition-all duration-300"
                  aria-label={`${leader.name} WhatsApp`}
                >
                  <Icon name="WhatsApp" size={20} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}