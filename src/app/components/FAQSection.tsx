'use client';

import React, { useEffect, useRef } from 'react';
import FAQAccordion from '@/components/ui/FAQAccordion';

const faqItems = [
  {
    question: "What is NASSAL?",
    answer: "The National Stroke Survivors Association of Liberia (NASSAL) is a registered non-profit organization dedicated to supporting stroke survivors, providing education, and advocating for better neurological care in Liberia."
  },
  {
    question: "Who can join NASSAL?",
    answer: "NASSAL is open to stroke survivors, their families, caregivers, healthcare professionals, and anyone passionate about improving the lives of those affected by stroke in Liberia."
  },
  {
    question: "How can I support NASSAL's mission?",
    answer: "You can support us through donations, volunteering your time or expertise, partnering with us on projects, or helping spread awareness about stroke prevention and our services."
  },
  {
    question: "What services does NASSAL provide?",
    answer: "We provide peer support groups, community health education, advocacy for survivor rights, and guidance on navigating the limited neurological care available in Liberia."
  },
  {
    question: "Where is NASSAL located?",
    answer: "NASSAL is based in Montserrado County, Liberia, but our outreach programs aim to reach survivors across the country."
  },
  {
    question: "How can I contact NASSAL?",
    answer: "You can reach us via our contact form on the website, email us at info@nassal.org, or message us directly on WhatsApp."
  }
];

export default function FAQSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.animate-on-scroll').forEach((el, i) => {
              (el as HTMLElement).style.animation = `fadeSlideIn 0.7s ease-out ${i * 0.1}s forwards`;
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="section-padding bg-background-alt" id="faq">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Header */}
          <div className="max-w-xl">
            <p className="animate-on-scroll opacity-100 text-xs uppercase tracking-widest font-bold text-accent mb-3">
              Frequently Asked Questions
            </p>
            <h2 className="animate-on-scroll opacity-100 font-display text-4xl sm:text-5xl font-700 text-foreground leading-tight mb-6">
              Common Questions <br />
              <span className="text-gradient-brand">About NASSAL</span>
            </h2>
            <p className="animate-on-scroll opacity-100 text-muted-foreground text-lg leading-relaxed mb-8">
              Find answers to common inquiries about our organization, our mission, and how you can get involved in supporting stroke survivors across Liberia.
            </p>
            <div className="animate-on-scroll opacity-100 p-6 bg-primary/5 border border-primary/10 rounded-2xl">
              <p className="text-foreground font-semibold mb-2">Still have questions?</p>
              <p className="text-muted-foreground text-sm mb-4">Our team is here to help you with any specific inquiries you may have.</p>
              <a href="/contact" className="inline-flex items-center text-primary font-bold hover:underline">
                Contact Us Directly
                <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>

          {/* Accordion */}
          <div className="animate-on-scroll opacity-100 w-full">
            <FAQAccordion items={faqItems} />
          </div>
        </div>
      </div>
    </section>
  );
}
