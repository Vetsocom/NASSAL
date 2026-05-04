import React from 'react';
import Icon from '@/components/ui/AppIcon';

export default function LocationSection() {
  return (
    <section id="map" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xs uppercase tracking-widest font-bold text-accent mb-3">Our Location</p>
            <h2 className="font-display text-4xl sm:text-5xl font-700 text-foreground leading-tight mb-5">
              Find Us in<br />Montserrado County
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed mb-8">
              NASSAL is based in Montserrado County, Liberia — the heart of Liberia&apos;s capital region. Our registered office is in Caldwell, and our programs reach communities across the county and beyond.
            </p>

            <div className="space-y-4">
              {[
                { icon: 'MapPinIcon',  label: 'Address',          value: 'Caldwell, Montserrado County, Liberia' },
                { icon: 'EnvelopeIcon', label: 'Email',   value: 'nationalstrokesurvivors@gmail.com' },
                { icon: 'PhoneIcon',    label: 'Phone',   value: '+231 776 279 605 / +231 881 451 935' },
              ].map(item => (
                <div key={item.label} className="flex items-start gap-4 bg-card border border-border rounded-xl p-4 shadow-card">
                  <div className="w-10 h-10 rounded-xl bg-primary/8 flex items-center justify-center shrink-0">
                    <Icon name={item.icon as 'MapPinIcon'} size={18} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest font-bold text-muted-foreground mb-0.5">{item.label}</p>
                    <p className="text-foreground text-sm font-medium">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Map placeholder */}
          <div className="rounded-3xl overflow-hidden border border-border shadow-card-lg bg-secondary h-[420px] flex flex-col items-center justify-center gap-4 relative">
            <div className="absolute inset-0 bg-gradient-to-br from-secondary to-[#EDE5DA]" />
            <div className="relative z-10 text-center px-8">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Icon name="MapPinIcon" size={32} className="text-primary" />
              </div>
              <h3 className="font-display font-600 text-xl text-foreground mb-2">Montserrado County</h3>
              <p className="text-muted-foreground text-sm mb-5">Liberia, West Africa</p>
              <a
                href="https://www.google.com/maps/search/Montserrado+County+Liberia"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-primary text-white font-bold text-sm shadow-red hover:bg-primary/90 transition-all duration-200"
              >
                <Icon name="ArrowTopRightOnSquareIcon" size={16} />
                Open in Google Maps
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}