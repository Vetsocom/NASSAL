import React from 'react';

const reasons = [
  {
    num: '01',
    title: 'No Neurologists in Liberia',
    desc: 'Liberia has zero practicing neurologists. Stroke survivors have no specialist to turn to — making community-based support the only viable pathway to care.',
  },
  {
    num: '02',
    title: 'Stroke Strikes Earlier in Africa',
    desc: 'The mean age of stroke in Africa is 57 — nine years younger than in high-income countries. Young adults and breadwinners are disproportionately affected.',
  },
  {
    num: '03',
    title: 'Critical Treatment Window Often Missed',
    desc: 'Most Liberian stroke patients arrive outside the critical 4.5-hour treatment window due to lack of awareness about stroke symptoms and urgency.',
  },
  {
    num: '04',
    title: 'Rehabilitation Services Are Scarce',
    desc: 'Physical, occupational, and speech therapy are largely unavailable. NASSAL fills this gap with guidance, caregiver training, and peer support networks.',
  },
];

export default function WhyWeExist() {
  return (
    <section className="section-padding bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl mb-14">
          <p className="text-xs uppercase tracking-widest font-bold text-accent mb-3">Why We Exist</p>
          <h2 className="font-display text-4xl sm:text-5xl font-700 text-foreground leading-tight mb-5">
            The Gap We&apos;re Here to Fill
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            NASSAL was created because the healthcare system alone cannot meet the needs of stroke survivors in Liberia. We exist to bridge that gap.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reasons?.map((r) => (
            <div key={r?.num} className="card-hover group flex gap-5 bg-card border border-border rounded-2xl p-7 shadow-card">
              <span className="font-display text-5xl font-900 text-primary/15 group-hover:text-primary/25 transition-colors shrink-0 leading-none mt-1">
                {r?.num}
              </span>
              <div>
                <h3 className="font-display font-600 text-xl text-foreground mb-2">{r?.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{r?.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}