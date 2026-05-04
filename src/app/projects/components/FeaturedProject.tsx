import React from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

const details = [
{
  icon: 'FlagIcon',
  label: 'Objective',
  text: 'Reduce stroke incidence in targeted communities by 20% through intensive community-based education, blood pressure monitoring, and lifestyle intervention programs.'
},
{
  icon: 'ClipboardDocumentListIcon',
  label: 'Key Activities',
  text: 'Monthly community health screenings, weekly radio broadcasts, school health education sessions, caregiver training workshops, and distribution of stroke prevention materials.'
},
{
  icon: 'UserGroupIcon',
  label: 'Beneficiaries',
  text: 'Adults 40+ in Montserrado County, schoolchildren and youth, community health workers, family caregivers, and healthcare volunteers across 15+ communities.'
},
{
  icon: 'ChartBarIcon',
  label: 'Expected Impact',
  text: 'Increased community awareness of stroke warning signs (target: 60% recognition rate), improved hypertension control, and established peer support networks in 10 communities.'
}];


export default function FeaturedProject() {
  return (
    <section className="section-padding bg-secondary/40">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-xs uppercase tracking-widest font-bold text-accent mb-3">Featured Initiative</p>
          <h2 className="font-display text-4xl sm:text-5xl font-700 text-foreground leading-tight">
            Community Stroke<br />Prevention Initiative
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Image */}
          <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-card-lg">
            <AppImage
              src="/assets/images/project.png"
              alt="Community health workers conducting a stroke prevention screening outdoors in Liberia, surrounded by engaged community members in bright daylight"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw" />
            
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 flex gap-3">
              <span className="px-4 py-1.5 rounded-full bg-primary text-white text-xs font-bold">Flagship Program</span>
              <span className="px-4 py-1.5 rounded-full bg-white/20 text-white text-xs font-bold backdrop-blur-sm">2024–2026</span>
            </div>
          </div>

          {/* Details */}
          <div className="space-y-5">
            {details.map((d) =>
            <div key={d.label} className="flex gap-4 bg-card border border-border rounded-2xl p-5 shadow-card">
                <div className="w-10 h-10 rounded-xl bg-primary/8 flex items-center justify-center shrink-0 mt-0.5">
                  <Icon name={d.icon as 'FlagIcon'} size={18} className="text-primary" />
                </div>
                <div>
                  <p className="font-display font-600 text-base text-foreground mb-1">{d.label}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">{d.text}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>);

}