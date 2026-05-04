import React from 'react';
import AppImage from '@/components/ui/AppImage';

export default function OurStory() {
  return (
    <section className="section-padding bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="rounded-3xl overflow-hidden aspect-[4/3] shadow-card-lg">
              <AppImage
                src="/assets/images/aboutus.png"
                alt="Community health workers meeting outdoors in Liberia, gathered around a table in bright afternoon light, discussing community health plans"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw" />
              
            </div>
            {/* Year badge */}
            <div className="absolute -bottom-5 -right-5 bg-primary text-white rounded-2xl p-5 shadow-red">
              <p className="font-display text-3xl font-700">Est.</p>
              <p className="font-display text-5xl font-900 leading-none">2022</p>
            </div>
          </div>

          <div>
            <p className="text-xs uppercase tracking-widest font-bold text-accent mb-3">Our Story</p>
            <h2 className="font-display text-4xl sm:text-5xl font-700 text-foreground leading-tight mb-6">
              Born from a Community Need
            </h2>
            <div className="space-y-4 text-muted-foreground text-base leading-relaxed">
              <p>
                NASSAL was founded in response to a stark reality: Liberia has no neurologists, and stroke survivors — increasingly younger in Africa than anywhere else in the world — were being left without support, education, or hope.
              </p>
              <p>
                Our founders, themselves touched by the impact of stroke in their communities, came together with a shared conviction: that community-based support, peer education, and advocacy could save lives and restore dignity to survivors even in the absence of formal neurological care.
              </p>
              <p>
                Registered as a not-for-profit organization in Montserrado County, Liberia, NASSAL has grown from a small circle of committed volunteers into a recognized organization reaching hundreds of survivors and thousands of community members through our programs.
              </p>
              <p>
                Our work is grounded in the belief that every stroke survivor deserves awareness, support, and the opportunity to recover with dignity — regardless of geography or resources.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>);

}