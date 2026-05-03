'use client';

import React, { useState } from 'react';
import Icon from '@/components/ui/AppIcon';

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  subject?: string;
  message?: string;
}

type SubmitState = 'idle' | 'loading' | 'success' | 'error';

const subjects = [
  'General Inquiry',
  'Stroke Survivor Support',
  'Caregiver Resources',
  'Partnership Opportunity',
  'Donation / Fundraising',
  'Media / Press',
  'Volunteer Interest',
  'Other',
];

function validate(data: FormData): FormErrors {
  const errors: FormErrors = {};
  if (!data.fullName.trim()) errors.fullName = 'Full name is required.';
  if (!data.email.trim()) {
    errors.email = 'Email address is required.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = 'Please enter a valid email address.';
  }
  if (!data.subject) errors.subject = 'Please select a subject.';
  if (!data.message.trim()) {
    errors.message = 'Message is required.';
  } else if (data.message.trim().length < 20) {
    errors.message = 'Message must be at least 20 characters.';
  }
  return errors;
}

export default function ContactFormSection() {
  const [form, setForm] = useState<FormData>({
    fullName: '', email: '', phone: '', subject: '', message: '',
  });
  const [errors,      setErrors]      = useState<FormErrors>({});
  const [submitState, setSubmitState] = useState<SubmitState>('idle');
  const [honeypot,    setHoneypot]    = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Spam protection: if honeypot filled, silently reject
    if (honeypot) return;

    const validationErrors = validate(form);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setSubmitState('loading');
    // Mock submission — replace with actual email delivery (e.g., SendGrid, Resend, Formspree)
    await new Promise(res => setTimeout(res, 1600));
    setSubmitState('success');
    setForm({ fullName: '', email: '', phone: '', subject: '', message: '' });
  };

  const inputClass = (field: keyof FormErrors) =>
    `input-field ${errors[field] ? 'error' : ''}`;

  return (
    <section className="section-padding bg-secondary/40">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-widest font-bold text-accent mb-3">Send a Message</p>
          <h2 className="font-display text-4xl sm:text-5xl font-700 text-foreground leading-tight mb-4">
            We&apos;d Love to Hear From You
          </h2>
          <p className="text-muted-foreground text-lg">
            Fill out the form below and our team will get back to you within 2 business days.
          </p>
        </div>

        {submitState === 'success' ? (
          <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-700 rounded-2xl p-10 text-center shadow-card">
            <div className="w-16 h-16 rounded-full bg-green-100 dark:bg-green-800/40 flex items-center justify-center mx-auto mb-5">
              <Icon name="CheckCircleIcon" size={36} className="text-green-600" />
            </div>
            <h3 className="font-display text-2xl font-700 text-foreground mb-3">Message Sent!</h3>
            <p className="text-muted-foreground text-base leading-relaxed max-w-md mx-auto mb-6">
              Thank you for reaching out to NASSAL. We have received your message and will respond within 2 business days.
            </p>
            <button
              onClick={() => setSubmitState('idle')}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-primary text-white font-bold text-sm hover:bg-primary/90 transition-all"
            >
              Send Another Message
            </button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            noValidate
            className="bg-card border border-border rounded-2xl p-8 sm:p-10 shadow-card"
          >
            {/* Honeypot spam protection */}
            <div className="hidden" aria-hidden="true">
              <input
                type="text"
                name="website"
                tabIndex={-1}
                autoComplete="off"
                value={honeypot}
                onChange={e => setHoneypot(e.target.value)}
              />
            </div>

            {submitState === 'error' && (
              <div className="mb-6 p-4 rounded-xl bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-700 flex items-center gap-3">
                <Icon name="ExclamationCircleIcon" size={20} className="text-primary shrink-0" />
                <p className="text-sm text-primary font-medium">Something went wrong. Please try again or contact us directly.</p>
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Full Name */}
              <div className="sm:col-span-2">
                <label className="block text-sm font-semibold text-foreground mb-1.5" htmlFor="fullName">
                  Full Name <span className="text-primary">*</span>
                </label>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  autoComplete="name"
                  placeholder="Enter your full name"
                  value={form.fullName}
                  onChange={handleChange}
                  className={inputClass('fullName')}
                  aria-describedby={errors.fullName ? 'fullName-error' : undefined}
                />
                {errors.fullName && (
                  <p id="fullName-error" className="mt-1.5 text-xs text-red-500 font-medium">{errors.fullName}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-semibold text-foreground mb-1.5" htmlFor="email">
                  Email Address <span className="text-primary">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="your@email.com"
                  value={form.email}
                  onChange={handleChange}
                  className={inputClass('email')}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                />
                {errors.email && (
                  <p id="email-error" className="mt-1.5 text-xs text-red-500 font-medium">{errors.email}</p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-semibold text-foreground mb-1.5" htmlFor="phone">
                  Phone Number <span className="text-muted-foreground text-xs font-normal">(optional)</span>
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  placeholder="+231 000 000 000"
                  value={form.phone}
                  onChange={handleChange}
                  className="input-field"
                />
              </div>

              {/* Subject */}
              <div className="sm:col-span-2">
                <label className="block text-sm font-semibold text-foreground mb-1.5" htmlFor="subject">
                  Subject <span className="text-primary">*</span>
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  className={`${inputClass('subject')} appearance-none`}
                  aria-describedby={errors.subject ? 'subject-error' : undefined}
                >
                  <option value="">Select a subject</option>
                  {subjects.map(s => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
                {errors.subject && (
                  <p id="subject-error" className="mt-1.5 text-xs text-red-500 font-medium">{errors.subject}</p>
                )}
              </div>

              {/* Message */}
              <div className="sm:col-span-2">
                <label className="block text-sm font-semibold text-foreground mb-1.5" htmlFor="message">
                  Message <span className="text-primary">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Tell us how we can help you or how you'd like to get involved..."
                  value={form.message}
                  onChange={handleChange}
                  className={`${inputClass('message')} resize-none`}
                  aria-describedby={errors.message ? 'message-error' : undefined}
                />
                {errors.message && (
                  <p id="message-error" className="mt-1.5 text-xs text-red-500 font-medium">{errors.message}</p>
                )}
              </div>
            </div>

            <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <p className="text-xs text-muted-foreground">
                <span className="text-primary">*</span> Required fields. We respect your privacy and will never share your information.
              </p>
              <button
                type="submit"
                disabled={submitState === 'loading'}
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-primary text-white font-bold text-base shadow-red hover:bg-primary/90 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none whitespace-nowrap"
              >
                {submitState === 'loading' ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Icon name="PaperAirplaneIcon" size={18} />
                    Send Message
                  </>
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}