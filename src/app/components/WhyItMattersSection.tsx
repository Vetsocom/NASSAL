import React from 'react';
import AppImage from '@/components/ui/AppImage';

const facts = [
{ num: '316', unit: '/100k', label: 'Annual stroke incidence in Africa — among the world\'s highest' },
{ num: '57', unit: ' yrs', label: 'Mean age of stroke in Africa — 9 years younger than high-income countries' },
{ num: '0', unit: '', label: 'Neurologists currently practicing in Liberia — creating a critical care gap' },
{ num: '40%', unit: '', label: '1-month fatality rate for stroke in Sub-Saharan Africa' }];


export default function WhyItMattersSection() {
  return (
    <section className="section-padding bg-[#1C1917] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <p className="text-xs uppercase tracking-widest font-bold text-accent mb-4">Why Our Work Matters</p>
            <h2 className="font-display text-4xl sm:text-5xl font-700 text-white leading-tight mb-6">
              Liberia Faces a<br />
              <span className="text-accent">Silent Crisis</span>
            </h2>
            <p className="text-white/70 text-base leading-relaxed mb-6">
              Stroke is the leading cause of adult disability and a major cause of death across Sub-Saharan Africa. In Liberia, the absence of neurologists, scarce rehabilitation services, and limited public awareness make every stroke a potentially catastrophic event.
            </p>
            <p className="text-white/70 text-base leading-relaxed mb-10">
              NASSAL stands in the gap — providing community-based education, peer support, caregiver training, and advocacy to reduce stroke mortality and improve quality of life for survivors and their families.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {facts?.map((f) =>
              <div key={f?.label} className="bg-white/5 border border-white/10 rounded-2xl p-4">
                  <p className="font-display text-3xl font-700 text-accent">
                    {f?.num}<span className="text-lg">{f?.unit}</span>
                  </p>
                  <p className="text-white/60 text-xs leading-snug mt-1">{f?.label}</p>
                </div>
              )}
            </div>
          </div>

          {/* Right image */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden aspect-[3/4] shadow-2xl">
              <AppImage
                src="https://img.rocket.new/generatedImages/rocket_gen_img_130e93577-1777809567023.png"
                alt="A healthcare professional providing compassionate support to a patient in West Africa, representing NASSAL's mission of care and recovery"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw" />
              
            </div>
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-black/30 to-transparent" />
            {/* Quote card */}
            <div className="absolute bottom-6 left-6 right-6 bg-white/10 backdrop-blur-sm border border-white/15 rounded-2xl p-5">
              <p className="text-white text-sm leading-relaxed italic">
                &ldquo;In a country without neurologists, community awareness and survivor support are not supplementary — they are the primary line of defense.&rdquo;
              </p>
              <p className="text-accent text-xs font-bold mt-2 uppercase tracking-wide">NASSAL Mission Statement</p>
            </div>
          </div>
        </div>
      </div>
    </section>);

}