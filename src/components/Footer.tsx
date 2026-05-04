import React from 'react';
import Link from 'next/link';
import AppLogo from '@/components/ui/AppLogo';
import Icon from '@/components/ui/AppIcon';

const quickLinks = [
  { label: 'Home',       href: '/' },
  { label: 'About Us',   href: '/about' },
  { label: 'Projects',   href: '/projects' },
  { label: 'Contact Us', href: '/contact' },
];

const socialLinks = [
  { icon: 'Facebook', label: 'Facebook',  href: 'https://www.facebook.com/share/1KL4T3SG2s/' },
  { icon: 'Instagram', label: 'Instagram', href: '#' },
];

export default function Footer() {
  return (
    <footer className="bg-[#1C1917] text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Brand col */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-2.5 mb-4">
              <AppLogo size={40} />
              <span className="font-display text-xl font-700 text-white">NASSAL</span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs">
              National Stroke Survivors Association of Liberia — supporting stroke survivors through awareness, advocacy, education, and community outreach across Liberia.
            </p>
            <div className="flex items-center gap-3 mt-5">
              {socialLinks.map(s => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-9 h-9 flex items-center justify-center rounded-lg bg-white/10 text-white/60 hover:bg-primary hover:text-white transition-all duration-200"
                >
                  <Icon name={s.icon as 'GlobeAltIcon'} size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div className="md:col-span-3">
            <p className="text-xs uppercase tracking-widest text-white/40 font-semibold mb-4">Quick Links</p>
            <ul className="space-y-2.5">
              {quickLinks.map(l => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-white/60 hover:text-white transition-colors duration-200 font-medium"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-4">
            <p className="text-xs uppercase tracking-widest text-white/40 font-semibold mb-4">Contact</p>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5 text-sm text-white/60">
                <Icon name="EnvelopeIcon" size={15} className="mt-0.5 text-accent shrink-0" />
                <a href="mailto:nationalstrokesurvivors@gmail.com" className="hover:text-white transition-colors break-all">
                  nationalstrokesurvivors@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-sm text-white/60">
                <Icon name="PhoneIcon" size={15} className="mt-0.5 text-accent shrink-0" />
                <span>+231 776 279 605 / +231 881 451 935</span>
              </li>
              <li className="flex items-start gap-2.5 text-sm text-white/60">
                <Icon name="MapPinIcon" size={15} className="mt-0.5 text-accent shrink-0" />
                <span>Montserrado County, Liberia, West Africa</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">
            © 2026 NASSAL — National Stroke Survivors Association of Liberia. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <Link href="/about"   className="text-xs text-white/40 hover:text-white/70 transition-colors font-medium">About</Link>
            <Link href="/contact" className="text-xs text-white/40 hover:text-white/70 transition-colors font-medium">Privacy</Link>
            <Link href="/contact" className="text-xs text-white/40 hover:text-white/70 transition-colors font-medium">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}