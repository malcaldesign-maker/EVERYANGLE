import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

const STORAGE_KEY = 'ea_popup_dismissed';
const SUPPRESS_MS = 7 * 24 * 60 * 60 * 1000;
const DELAY_MS = 30_000;

export function markPopupDismissed() {
  try {
    localStorage.setItem(STORAGE_KEY, String(Date.now()));
  } catch {
    // ignore — private browsing or storage full
  }
}

function isDismissed(): boolean {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return false;
    return Date.now() - parseInt(raw, 10) < SUPPRESS_MS;
  } catch {
    return false;
  }
}

export default function PopupLead() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);

  // Timer runs once on mount — Layout never remounts across navigations.
  useEffect(() => {
    if (isDismissed()) return;
    const timer = setTimeout(() => {
      if (window.location.pathname !== '/contact') setVisible(true);
    }, DELAY_MS);
    return () => clearTimeout(timer);
  }, []);

  // Hide if user navigates to /contact while popup is open.
  useEffect(() => {
    if (pathname === '/contact') setVisible(false);
  }, [pathname]);

  const dismiss = () => {
    setVisible(false);
    markPopupDismissed();
  };

  const book = () => {
    dismiss();
    navigate('/contact?source=popup');
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 16, scale: 0.97 }}
          transition={{ type: 'spring', damping: 28, stiffness: 260 }}
          className="fixed bottom-6 right-6 z-[90] w-[340px] max-w-[calc(100vw-3rem)] bg-brand-card border border-white/10 rounded-[24px] shadow-2xl shadow-black/50 backdrop-blur-xl p-7"
          role="dialog"
          aria-modal="false"
          aria-label="Book a meeting with EVERYANGLE"
        >
          <button
            type="button"
            onClick={dismiss}
            aria-label="Dismiss"
            className="absolute top-4 right-4 text-slate-500 hover:text-white transition-colors p-1"
          >
            <X size={16} />
          </button>

          <p className="font-display text-base font-bold text-white leading-snug mb-3 pr-6">
            Want to see what your cameras are missing?
          </p>
          <p className="text-sm text-slate-400 font-medium leading-relaxed mb-6">
            Book a short walkthrough and we'll show how EVERYANGLE turns existing CCTV into retail intelligence.
          </p>

          <div className="flex flex-col gap-2">
            <button
              type="button"
              onClick={book}
              className="w-full bg-brand-primary text-white font-display text-xs font-bold uppercase tracking-widest py-3.5 rounded-xl hover:bg-white hover:text-brand-navy transition-all duration-300 shadow-lg shadow-brand-primary/20"
            >
              Book a meeting
            </button>
            <button
              type="button"
              onClick={dismiss}
              className="w-full text-slate-500 hover:text-white font-display text-xs font-bold uppercase tracking-widest py-2.5 transition-colors"
            >
              Not now
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
