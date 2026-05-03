import React from 'react';
import Icon from '@/components/ui/AppIcon';

export default function MissionVision() {
  return (
    <section className="pt-0 pb-16 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Mission */}
          <div className="bg-gradient-to-br from-primary to-[#7C1010] rounded-3xl p-8 sm:p-10 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-white/5 -translate-y-1/2 translate-x-1/2" />
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-xl bg-white/15 flex items-center justify-center mb-6">
                <Icon name="HeartIcon" size={24} className="text-white" />
              </div>
              <p className="text-white/60 text-xs uppercase tracking-widest font-bold mb-3">Our Mission</p>
              <h3 className="font-display text-3xl font-700 text-white mb-4">What We Do</h3>
              <p className="text-white/80 leading-relaxed">
                To support stroke survivors in Liberia through awareness, civic education, counseling, community outreach, and advocacy — fostering healing, resilience, and improved quality of life for survivors and their families across all communities.
              </p>
            </div>
          </div>

          {/* Vision */}
          <div className="bg-gradient-to-br from-[#1C1917] to-[#292524] rounded-3xl p-8 sm:p-10 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-accent/10 -translate-y-1/2 translate-x-1/2" />
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center mb-6">
                <Icon name="EyeIcon" size={24} className="text-accent" />
              </div>
              <p className="text-white/60 text-xs uppercase tracking-widest font-bold mb-3">Our Vision</p>
              <h3 className="font-display text-3xl font-700 text-white mb-4">Where We&apos;re Headed</h3>
              <p className="text-white/80 leading-relaxed">
                A Liberia where every stroke survivor has access to timely support, informed communities actively prevent stroke, and national healthcare systems prioritize neurological care — ensuring no survivor faces their recovery journey alone.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}