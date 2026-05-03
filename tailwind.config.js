/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  darkMode: 'class',
  theme: {
    container: { center: true, padding: '1rem' },
    extend: {
      colors: {
        background:  { DEFAULT: 'var(--background)' },
        foreground:  { DEFAULT: 'var(--foreground)' },
        primary:     { DEFAULT: 'var(--primary)',     foreground: 'var(--primary-foreground)' },
        secondary:   { DEFAULT: 'var(--secondary)',   foreground: 'var(--secondary-foreground)' },
        accent:      { DEFAULT: 'var(--accent)',      foreground: 'var(--accent-foreground)' },
        muted:       { DEFAULT: 'var(--muted)',       foreground: 'var(--muted-foreground)' },
        card:        { DEFAULT: 'var(--card)',         foreground: 'var(--card-foreground)' },
        border:      { DEFAULT: 'var(--border)' },
        input:       { DEFAULT: 'var(--input)' },
        ring:        { DEFAULT: 'var(--ring)' },
        teal:        { DEFAULT: 'var(--teal)' },
      },
      borderRadius: {
        DEFAULT: 'var(--radius)',
        sm:  'calc(var(--radius) - 0.25rem)',
        md:  'var(--radius)',
        lg:  'calc(var(--radius) + 0.25rem)',
        xl:  'calc(var(--radius) + 0.5rem)',
        '2xl': 'calc(var(--radius) + 1rem)',
        '3xl': 'calc(var(--radius) + 1.5rem)',
        '4xl': 'calc(var(--radius) + 2rem)',
      },
      fontFamily: {
        sans:    ['var(--font-plus-jakarta-sans)', 'sans-serif'],
        display: ['var(--font-fraunces)', 'serif'],
      },
      animation: {
        'fade-slide-in': 'fadeSlideIn 0.8s ease-out forwards',
        'fade-scale':    'fadeInScale 0.7s ease-out forwards',
        'float':         'float 5s ease-in-out infinite',
        'count-up':      'countUp 0.6s ease-out forwards',
      },
      keyframes: {
        fadeSlideIn: {
          '0%':   { opacity: '0', transform: 'translateY(28px)', filter: 'blur(6px)' },
          '100%': { opacity: '1', transform: 'translateY(0)',    filter: 'blur(0px)' },
        },
        fadeInScale: {
          '0%':   { opacity: '0', transform: 'scale(0.94)', filter: 'blur(4px)' },
          '100%': { opacity: '1', transform: 'scale(1)',    filter: 'blur(0px)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-10px)' },
        },
        countUp: {
          from: { opacity: '0', transform: 'translateY(12px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
      },
      boxShadow: {
        'card':    '0 2px 12px rgba(0,0,0,0.06), 0 1px 3px rgba(0,0,0,0.04)',
        'card-lg': '0 8px 32px rgba(0,0,0,0.08), 0 2px 8px rgba(0,0,0,0.04)',
        'red':     '0 4px 20px rgba(185,28,28,0.18)',
        'gold':    '0 4px 20px rgba(217,119,6,0.18)',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};