import React from 'react';
import type { Metadata, Viewport } from 'next';
import { Plus_Jakarta_Sans, Fraunces } from 'next/font/google';
import '../styles/tailwind.css';
import WhatsAppFAB from '@/components/ui/WhatsAppFAB';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-plus-jakarta-sans',
  display: 'swap',
});

const fraunces = Fraunces({
  subsets: ['latin'],
  weight: 'variable',
  variable: '--font-fraunces',
  display: 'swap',
  axes: ['SOFT', 'WONK'],
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://nassal.org'),
  title:{
    default:'NASSAL | Stroke Awareness and Neurological Support in Liberia',
    template: "%s | NASSAL",
  }, 
  description: 'National Stroke Survivors Association of Liberia supports stroke survivors through awareness, education, advocacy, and recovery-focused community outreach across Liberia.',
   alternates: {
    canonical: "/",
  },
    openGraph: {
    title: "NASSAL",
    description:
      "Stroke awareness, support, and community health advocacy in Liberia.",
    url: "https://nassal.org",
    siteName: "NASSAL",
    locale: "en_US",
    type: "website",
  },
   robots: {
    index: true,
    follow: true,
  },
  keywords: [
    'Stroke survivors association Liberia',
    'community health education Liberia',
    'NASSAL',
    'Stroke recovery Liberia',
    'Hypertension awareness Liberia',
    'Stroke prevention education',
    'Liberian health NGO',
    'Stroke advocacy Africa',
    'Post-stroke rehabilitation support',
    'Neurological health Liberia',
    'National Stroke Survivors Association of Liberia',
    'stroke'
  ],
  icons: {
    icon: [{ url: '/favicon.ico', type: 'image/x-icon' }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} ${fraunces.variable}`}>
      <body className={plusJakartaSans.className}>
        {children}
        <WhatsAppFAB />
      </body>
    </html>
  );
}