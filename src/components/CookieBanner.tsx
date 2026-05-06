import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Cookie, X } from 'lucide-react';

const STORAGE_KEY = 'ea-cookie-consent';

/**
 * GDPR cookie banner — required for EU traffic given Dublin HQ.
 * Tasteful, dismissible, persists choice in localStorage so it doesn't nag.
 *
 * Wire your analytics (GA4 / PostHog / Plausible) inside the `accept`
 * handler — they should ONLY initialize after the user accepts.
 */
export default function CookieBanner() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(STORAGE_KEY)) {
        // Slight delay so the banner doesn't fight the hero animation for attention.
        const t = setTimeout(() => setOpen(true), 800);
        return () => clearTimeout(t);
      }
    } catch {
      // localStorage might be blocked (private browsing). Show the banner anyway.
      setOpen(true);
    }
  }, []);

  const persist = (choice: 'accepted' | 'declined') => {
    try {
      localStorage.setItem(STORAGE_KEY, choice);
    } catch {
      // ignore
    }
    setOpen(false);
    if (choice === 'accepted') {
      // TODO: initialize your analytics here.
      // e.g. window.gtag?.('consent', 'update', { analytics_storage: 'granted' });
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.4 }}
          className="fixed bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-auto md:max-w-md z-[150]"
          role="dialog"
          aria-label="Cookie preferences"
        >
          <div className="bg-brand-navy/95 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-2xl">
            <div className="flex items-start justify-between gap-4 mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-brand-accent/10 text-brand-accent flex items-center justify-center">
                  <Cookie size={18} />
                </div>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">A note on cookies</p>
              </div>
              <button
                type="button"
                onClick={() => persist('declined')}
                className="text-slate-500 hover:text-white transition-colors -mr-1 -mt-1 p-1"
                aria-label="Dismiss without accepting"
              >
                <X size={18} />
              </button>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed mb-5 font-medium">
              We use a small number of cookies to understand how this site is used and to make it work. No tracking ads, no selling data — ever.
            </p>
            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => persist('accepted')}
                className="flex-grow bg-brand-primary text-white font-display text-xs font-bold uppercase tracking-widest px-4 py-3 rounded-xl hover:bg-white hover:text-brand-navy transition-colors"
              >
                Accept
              </button>
              <button
                type="button"
                onClick={() => persist('declined')}
                className="flex-grow border border-white/10 text-white hover:bg-white/5 font-display text-xs font-bold uppercase tracking-widest px-4 py-3 rounded-xl transition-colors"
              >
                Essential only
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
