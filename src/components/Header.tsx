'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import AppLogo from '@/components/ui/AppLogo';
import Icon from '@/components/ui/AppIcon';

const navLinks = [
  { label: 'Home',       href: '/' },
  { label: 'About Us',   href: '/about' },
  { label: 'Projects',   href: '/projects' },
  { label: 'Contact Us', href: '/contact' },
];

export default function Header() {
  const [scrolled,     setScrolled]     = useState(false);
  const [mobileOpen,   setMobileOpen]   = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-2' : 'py-4'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className={`flex items-center justify-between rounded-2xl px-4 sm:px-6 py-3 transition-all duration-300 ${
            scrolled
              ? 'bg-white/95 dark:bg-[#1C1917]/95 shadow-card-md border border-border/60 backdrop-blur-sm'
              : 'bg-white/80 dark:bg-[#1C1917]/80 shadow-card border border-border/40 backdrop-blur-sm'
          }`}>
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 group">
              <AppLogo
                size={38}
                className="transition-transform duration-300 group-hover:scale-105"
              />
              <span className="font-display font-700 text-lg text-foreground tracking-tight hidden sm:block">
                NASSAL
              </span>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map(link => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 ${
                    isActive(link.href)
                      ? 'text-primary bg-primary/8' :'text-foreground/70 hover:text-foreground hover:bg-secondary'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* CTA + Mobile toggle */}
            <div className="flex items-center gap-3">
              <Link
                href="/contact"
                className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-white text-sm font-bold shadow-red hover:bg-primary/90 transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
              >
                Get Support
              </Link>
              <button
                onClick={() => setMobileOpen(v => !v)}
                className="lg:hidden flex items-center justify-center w-10 h-10 rounded-xl bg-secondary text-foreground hover:bg-border transition-colors"
                aria-label="Toggle menu"
                aria-expanded={mobileOpen}
              >
                <Icon name={mobileOpen ? 'XMarkIcon' : 'Bars3Icon'} size={20} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Mobile drawer */}
      <div className={`fixed top-0 right-0 bottom-0 z-50 w-72 bg-white dark:bg-[#1C1917] shadow-2xl transition-transform duration-300 ease-out lg:hidden flex flex-col ${
        mobileOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="flex items-center justify-between px-5 py-4 border-b border-border">
          <div className="flex items-center gap-2.5">
            <AppLogo size={34} />
            <span className="font-display font-700 text-base text-foreground">NASSAL</span>
          </div>
          <button
            onClick={() => setMobileOpen(false)}
            className="w-9 h-9 flex items-center justify-center rounded-xl bg-secondary text-foreground"
            aria-label="Close menu"
          >
            <Icon name="XMarkIcon" size={18} />
          </button>
        </div>

        <nav className="flex-1 px-4 py-6 space-y-1 overflow-y-auto">
          {navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className={`flex items-center gap-3 px-4 py-4 rounded-xl text-base font-semibold transition-all duration-300 active:scale-95 ${
                isActive(link.href)
                  ? 'text-primary bg-primary/8 shadow-sm border border-primary/10' 
                  : 'text-foreground/70 hover:text-foreground hover:bg-secondary'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="px-4 pb-6">
          <Link
            href="/contact"
            onClick={() => setMobileOpen(false)}
            className="flex items-center justify-center gap-2 w-full px-5 py-3 rounded-xl bg-primary text-white text-sm font-bold shadow-red hover:bg-primary/90 transition-all"
          >
            Get Support
          </Link>
        </div>
      </div>
    </>
  );
}