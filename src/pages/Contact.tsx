import { motion } from 'motion/react';
import { Mail, MapPin, Send, MessageSquare, Loader2, AlertTriangle } from 'lucide-react';
import { useState, FormEvent } from 'react';
import { useMeta } from '../hooks/useMeta';
import { submitToHubspot } from '../lib/hubspot';

type Status = 'idle' | 'submitting' | 'submitted' | 'error';

const FALLBACK_EMAIL = 'hello@everyangle.ai';
// Set VITE_CONTACT_FORM_ENDPOINT in your .env.local to a Formspree (or compatible) URL.
// Without it, the form falls back to opening the user's mail client with a pre-filled body.
const ENDPOINT = import.meta.env.VITE_CONTACT_FORM_ENDPOINT as string | undefined;

export default function Contact() {
  useMeta({
    title: 'Contact — EVERYANGLE',
    description:
      'Talk to the EVERYANGLE team about a 4-week pilot, a global rollout, or a technical deep-dive. Dublin / London / New York.',
  });
  const [status, setStatus] = useState<Status>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries()) as Record<string, string>;

    // Honeypot bail-out — bots fill _hp, humans don't.
    if (data._hp) {
      setStatus('submitted');
      form.reset();
      return;
    }

    // 1) Preferred: HubSpot Forms API (when env vars are set in Vercel).
    const hs = await submitToHubspot('contact', [
      { name: 'fullname', value: data.name || '' },
      { name: 'email', value: data.email || '' },
      { name: 'inquiry_type', value: data.inquiry || '' },
      { name: 'store_count', value: data.stores || '' },
      { name: 'message', value: data.message || '' },
    ]);
    if (hs.ok === true) {
      setStatus('submitted');
      form.reset();
      return;
    }
    if (hs.configured) {
      setStatus('error');
      setErrorMessage(`${hs.reason}. Try emailing us directly at ${FALLBACK_EMAIL}.`);
      return;
    }

    // 2) Secondary: Formspree-style endpoint (if VITE_CONTACT_FORM_ENDPOINT set).
    if (ENDPOINT) {
      try {
        const res = await fetch(ENDPOINT, {
          method: 'POST',
          headers: { Accept: 'application/json' },
          body: formData,
        });
        if (!res.ok) throw new Error(`Server responded with ${res.status}`);
        setStatus('submitted');
        form.reset();
      } catch (err) {
        setStatus('error');
        setErrorMessage(
          err instanceof Error
            ? `${err.message}. Try emailing us directly at ${FALLBACK_EMAIL}.`
            : `Something went wrong. Try emailing us directly at ${FALLBACK_EMAIL}.`,
        );
      }
      return;
    }

    // 3) Tertiary fallback: open the user's mail client with a pre-filled body.
    const subject = encodeURIComponent(`[EVERYANGLE Inquiry] ${data.inquiry || 'New inquiry'} — ${data.name || 'Unknown'}`);
    const lines = [
      `Name: ${data.name || ''}`,
      `Email: ${data.email || ''}`,
      `Inquiry: ${data.inquiry || ''}`,
      `Store count: ${data.stores || ''}`,
      '',
      'Message:',
      data.message || '',
    ];
    const body = encodeURIComponent(lines.join('\n'));
    window.location.href = `mailto:${FALLBACK_EMAIL}?subject=${subject}&body=${body}`;
    setStatus('submitted');
    form.reset();
  };

  return (
    <div className="pt-20 bg-brand-navy min-h-screen font-sans">
      <section className="py-32 relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-brand-primary/5 blur-[120px] rounded-full opacity-30" />

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-24 relative z-10">
          {/* Left Side: Info */}
          <div>
            <h1 className="font-display text-6xl md:text-8xl font-bold mb-10 tracking-tight leading-tight text-white">
              Let's Talk <br />
              <span className="text-brand-primary italic">Intelligence.</span>
            </h1>
            <p className="text-xl text-slate-400 mb-16 leading-relaxed max-w-lg font-medium">
              Whether you're scoping a single-store pilot or a global rollout, our team will help you map the highest-impact signals in your retail estate.
            </p>

            <div className="space-y-10">
              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-brand-primary group-hover:bg-brand-primary/20 transition-colors">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Email Us</p>
                  <a href={`mailto:${FALLBACK_EMAIL}`} className="text-lg font-medium text-white hover:text-brand-primary transition-colors">{FALLBACK_EMAIL}</a>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-brand-primary group-hover:bg-brand-primary/20 transition-colors">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Headquarters</p>
                  <p className="text-lg font-medium text-white">Dublin, Ireland <br /> <span className="text-slate-500 text-sm italic">Global Coverage</span></p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white/[0.03] backdrop-blur-3xl border border-white/10 p-10 md:p-16 rounded-[40px] shadow-2xl"
            >
              {status !== 'submitted' ? (
                <form onSubmit={handleSubmit} className="space-y-8" noValidate>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                       <label htmlFor="contact-name" className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Full Name</label>
                       <input id="contact-name" name="name" required type="text" autoComplete="name" className="w-full bg-brand-navy border border-white/10 rounded-xl px-6 py-4 text-white focus:border-brand-primary transition-all outline-none" placeholder="Jane Doe" />
                    </div>
                    <div className="space-y-2">
                       <label htmlFor="contact-email" className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Work Email</label>
                       <input id="contact-email" name="email" required type="email" autoComplete="email" className="w-full bg-brand-navy border border-white/10 rounded-xl px-6 py-4 text-white focus:border-brand-primary transition-all outline-none" placeholder="jane@company.com" />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label htmlFor="contact-inquiry" className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Inquiry Type</label>
                      <select id="contact-inquiry" name="inquiry" defaultValue="Book a Platform Demo" className="w-full bg-brand-navy border border-white/10 rounded-xl px-6 py-4 text-white focus:border-brand-primary transition-all outline-none appearance-none">
                        <option>Book a Platform Demo</option>
                        <option>Request Case Study Pack</option>
                        <option>Start a 4-Week Pilot</option>
                        <option>Technical Partnership</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="contact-stores" className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Store Count</label>
                      <select id="contact-stores" name="stores" defaultValue="1-10 Locations" className="w-full bg-brand-navy border border-white/10 rounded-xl px-6 py-4 text-white focus:border-brand-primary transition-all outline-none appearance-none">
                        <option>1-10 Locations</option>
                        <option>10-50 Locations</option>
                        <option>50-200 Locations</option>
                        <option>200+ Locations</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="contact-message" className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Message</label>
                    <textarea id="contact-message" name="message" required rows={4} className="w-full bg-brand-navy border border-white/10 rounded-xl px-6 py-4 text-white focus:border-brand-primary transition-all outline-none resize-none" placeholder="How can we help?"></textarea>
                  </div>

                  {/* Honeypot field — bots fill it, humans don't see it. */}
                  <input type="text" name="_hp" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

                  {status === 'error' && (
                    <div className="flex items-start gap-3 bg-orange-500/10 border border-orange-500/30 rounded-xl px-5 py-4">
                      <AlertTriangle size={18} className="text-orange-400 flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-orange-200 font-medium">{errorMessage}</p>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full bg-brand-primary text-white font-display text-lg font-bold py-5 rounded-2xl hover:bg-white hover:text-brand-navy transition-all duration-500 flex items-center justify-center gap-3 shadow-xl shadow-brand-primary/20 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {status === 'submitting' ? (
                      <>
                        Sending <Loader2 size={20} className="animate-spin" />
                      </>
                    ) : (
                      <>
                        Submit Inquiry <Send size={20} />
                      </>
                    )}
                  </button>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-20"
                >
                  <div className="w-20 h-20 bg-brand-primary/20 rounded-full flex items-center justify-center text-brand-primary mx-auto mb-8 shadow-[0_0_20px_rgba(99,102,241,0.3)]">
                    <MessageSquare size={40} />
                  </div>
                  <h3 className="font-display text-3xl font-bold mb-4 text-white">Message Received.</h3>
                  <p className="text-slate-400 font-medium">One of our specialists will reach out within one business day.</p>
                </motion.div>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
