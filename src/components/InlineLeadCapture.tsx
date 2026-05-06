import { useState, FormEvent } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { submitToHubspot } from '../lib/hubspot';

/**
 * InlineLeadCapture — low-commitment capture sitting mid-homepage.
 *
 * UX: optional email submit → POSTs to HubSpot (if configured) and routes
 * straight to /summary so the visitor gets instant value. The "View now"
 * link is also visible without an email — visitors can self-serve.
 */
export default function InlineLeadCapture() {
  const [email, setEmail] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitting(true);
    // Fire-and-forget — even if HubSpot isn't wired up, we still deliver value
    // by routing to the summary page.
    await submitToHubspot('newsletter', [
      { name: 'email', value: email },
      { name: 'lead_source', value: 'inline-1page-summary' },
    ]).catch(() => {});
    navigate('/summary');
  };

  return (
    <section className="py-20 bg-brand-navy">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-brand-primary/10 via-brand-secondary/5 to-transparent border border-white/10 rounded-[40px] p-10 md:p-14 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-secondary/10 blur-[100px] rounded-full pointer-events-none" />

          <div className="grid lg:grid-cols-2 gap-10 items-center relative z-10">
            <div>
              <div className="inline-flex items-center gap-2 text-[10px] font-black text-brand-accent uppercase tracking-[0.4em] mb-6">
                <Sparkles size={12} />
                Not ready for a demo?
              </div>
              <h3 className="font-display text-3xl md:text-4xl font-bold text-white italic leading-tight mb-4">
                Get the 1-page platform summary.
              </h3>
              <p className="text-slate-400 font-medium leading-relaxed mb-4">
                What we measure, how it works, what it costs, what it has delivered. No call required.
              </p>
              <Link
                to="/summary"
                className="text-[10px] font-bold text-brand-accent uppercase tracking-[0.3em] inline-flex items-center gap-2 hover:gap-3 transition-all"
              >
                View it now without signing up <ArrowRight size={12} />
              </Link>
            </div>

            <div>
              <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <label htmlFor="inline-email" className="sr-only">Work email</label>
                <input
                  id="inline-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@company.com"
                  className="w-full bg-brand-navy/80 border border-white/10 rounded-2xl px-5 py-4 text-white focus:border-brand-primary outline-none transition-colors"
                />
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full bg-brand-primary text-white font-display text-sm font-bold uppercase tracking-widest px-6 py-4 rounded-2xl hover:bg-white hover:text-brand-navy transition-colors flex items-center justify-center gap-3 disabled:opacity-60"
                >
                  {submitting ? 'Sending…' : 'Send me the summary'} <ArrowRight size={16} />
                </button>
                <p className="text-[10px] font-mono text-slate-500 text-center">
                  We add you to the EVERYANGLE retail digest. Unsubscribe anytime.
                </p>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
