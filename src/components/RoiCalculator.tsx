import { useMemo, useState } from 'react';
import { motion } from 'motion/react';
import { Calculator, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

/**
 * RoiCalculator — interactive lead-gen tool. Visitors enter their store count
 * and average daily revenue per store, see projected uplift. Numbers are
 * conservative midpoint estimates; tweak the constants below as your real
 * customer benchmarks evolve.
 */

// Conservative benchmarks based on typical EVERYANGLE deployments.
// Update these when you have your own published case-study averages.
const BENCHMARKS = {
  conversionLiftPct: 0.06, // 6% conversion uplift on top of current revenue
  walkoutRecoveryPct: 0.025, // 2.5% revenue recovered from queue abandonment
  laborSavingsPctOfRevenue: 0.012, // 1.2% revenue equivalent in labor savings
};

const formatCurrency = (n: number) => {
  if (n >= 1_000_000) return `$${(n / 1_000_000).toFixed(1)}M`;
  if (n >= 1_000) return `$${Math.round(n / 1_000)}K`;
  return `$${Math.round(n).toLocaleString()}`;
};

export default function RoiCalculator() {
  const [stores, setStores] = useState(50);
  const [dailyRevenue, setDailyRevenue] = useState(8000);

  const annual = useMemo(() => {
    const baseRevenuePerYear = stores * dailyRevenue * 365;
    const conversionGain = baseRevenuePerYear * BENCHMARKS.conversionLiftPct;
    const walkoutGain = baseRevenuePerYear * BENCHMARKS.walkoutRecoveryPct;
    const laborSavings = baseRevenuePerYear * BENCHMARKS.laborSavingsPctOfRevenue;
    const total = conversionGain + walkoutGain + laborSavings;
    return { baseRevenuePerYear, conversionGain, walkoutGain, laborSavings, total };
  }, [stores, dailyRevenue]);

  return (
    <section id="roi" className="py-32 bg-brand-navy relative overflow-hidden scroll-mt-24">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] bg-brand-accent/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-5 gap-16 items-center">
          {/* Left: copy */}
          <div className="lg:col-span-2">
            <p className="text-brand-accent text-[10px] font-black uppercase tracking-[0.4em] mb-8 flex items-center gap-3">
              <Calculator size={12} /> Estimate the impact
            </p>
            <h2 className="font-display text-5xl md:text-6xl font-bold mb-10 italic text-white leading-[0.9]">
              What would <br />
              <span className="text-brand-accent">your fleet unlock?</span>
            </h2>
            <p className="text-lg text-slate-400 mb-10 leading-relaxed font-medium">
              Move the sliders. We'll show you a conservative estimate of annual upside based on benchmarks from real EVERYANGLE rollouts. No email required to see the number.
            </p>
            <div className="flex flex-wrap items-center gap-3 text-[10px] font-bold text-slate-500 uppercase tracking-[0.3em]">
              <span className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-full">Conversion +6%</span>
              <span className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-full">Walkouts -2.5%</span>
              <span className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-full">Labor -1.2%</span>
            </div>
          </div>

          {/* Right: calculator card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 bg-white/[0.02] border border-white/10 rounded-[40px] p-8 md:p-12 backdrop-blur-xl shadow-2xl"
          >
            <div className="space-y-10">
              {/* Stores slider */}
              <div>
                <div className="flex items-end justify-between mb-4">
                  <label htmlFor="roi-stores" className="text-xs font-bold text-slate-500 uppercase tracking-widest">Number of stores</label>
                  <span className="font-display text-3xl font-bold text-white tabular-nums italic">{stores.toLocaleString()}</span>
                </div>
                <input
                  id="roi-stores"
                  type="range"
                  min={1}
                  max={1000}
                  step={1}
                  value={stores}
                  onChange={(e) => setStores(Number(e.target.value))}
                  className="w-full accent-brand-primary"
                  aria-valuemin={1}
                  aria-valuemax={1000}
                  aria-valuenow={stores}
                />
                <div className="flex justify-between text-[9px] font-mono text-slate-600 mt-2">
                  <span>1</span><span>250</span><span>500</span><span>750</span><span>1,000+</span>
                </div>
              </div>

              {/* Revenue slider */}
              <div>
                <div className="flex items-end justify-between mb-4">
                  <label htmlFor="roi-revenue" className="text-xs font-bold text-slate-500 uppercase tracking-widest">Avg revenue per store / day</label>
                  <span className="font-display text-3xl font-bold text-white tabular-nums italic">{formatCurrency(dailyRevenue)}</span>
                </div>
                <input
                  id="roi-revenue"
                  type="range"
                  min={500}
                  max={50000}
                  step={500}
                  value={dailyRevenue}
                  onChange={(e) => setDailyRevenue(Number(e.target.value))}
                  className="w-full accent-brand-primary"
                />
                <div className="flex justify-between text-[9px] font-mono text-slate-600 mt-2">
                  <span>$500</span><span>$10K</span><span>$25K</span><span>$50K</span>
                </div>
              </div>

              {/* Result */}
              <div className="pt-8 border-t border-white/10">
                <p className="text-[10px] font-black text-brand-accent uppercase tracking-[0.4em] mb-3">Estimated annual upside</p>
                <p className="font-display text-6xl md:text-7xl font-bold text-white italic tracking-tight tabular-nums mb-6">
                  +{formatCurrency(annual.total)}
                </p>
                <div className="grid grid-cols-3 gap-4 mb-8">
                  <div className="bg-white/[0.03] rounded-2xl px-4 py-4 border border-white/5">
                    <p className="text-[9px] font-bold text-slate-500 uppercase tracking-widest mb-1">Conversion</p>
                    <p className="text-lg font-display font-bold text-brand-primary tabular-nums">+{formatCurrency(annual.conversionGain)}</p>
                  </div>
                  <div className="bg-white/[0.03] rounded-2xl px-4 py-4 border border-white/5">
                    <p className="text-[9px] font-bold text-slate-500 uppercase tracking-widest mb-1">Walkouts</p>
                    <p className="text-lg font-display font-bold text-brand-secondary tabular-nums">+{formatCurrency(annual.walkoutGain)}</p>
                  </div>
                  <div className="bg-white/[0.03] rounded-2xl px-4 py-4 border border-white/5">
                    <p className="text-[9px] font-bold text-slate-500 uppercase tracking-widest mb-1">Labor</p>
                    <p className="text-lg font-display font-bold text-brand-accent tabular-nums">+{formatCurrency(annual.laborSavings)}</p>
                  </div>
                </div>
                <Link
                  to="/contact"
                  className="w-full inline-flex items-center justify-center gap-3 bg-brand-primary text-white font-display text-base font-bold px-8 py-5 rounded-2xl hover:bg-white hover:text-brand-navy transition-all duration-500 shadow-xl shadow-brand-primary/30 group"
                >
                  Get a tailored ROI report
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <p className="text-[10px] font-mono text-slate-600 text-center mt-4">
                  Conservative midpoint estimates. Your pilot will produce real numbers.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
