import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Compass } from 'lucide-react';
import { useMeta } from '../hooks/useMeta';

export default function NotFound() {
  useMeta({
    title: '404 — EVERYANGLE',
    description: 'The page you\'re looking for has either moved or never existed. Let\'s get you back to a known coordinate.',
  });
  return (
    <section className="min-h-[90vh] flex items-center justify-center bg-brand-navy relative overflow-hidden pt-32 pb-20">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-primary/10 blur-[150px] rounded-full pointer-events-none opacity-40" />

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-brand-secondary text-[10px] font-bold uppercase tracking-[0.3em] mb-10">
            <Compass size={12} className="text-brand-secondary" />
            Off the Grid
          </div>

          <h1 className="font-display text-7xl md:text-9xl font-bold leading-[0.9] mb-10 tracking-tight text-white">
            404. <br />
            <span className="text-brand-primary italic">No signal.</span>
          </h1>

          <p className="text-xl text-slate-400 max-w-xl mx-auto mb-14 leading-relaxed font-medium">
            The page you're looking for has either moved or never existed. Let's get you back to a known coordinate.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/"
              className="bg-brand-primary text-white font-display text-base font-bold px-10 py-5 rounded-2xl hover:bg-white hover:text-brand-navy transition-all duration-500 inline-flex items-center gap-3 shadow-2xl shadow-brand-primary/40"
            >
              Back to Home <ArrowRight size={18} />
            </Link>
            <Link
              to="/contact"
              className="border border-white/10 text-white hover:bg-white/5 font-display text-base font-bold px-10 py-5 rounded-2xl transition-all duration-500 backdrop-blur-sm"
            >
              Contact Us
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
