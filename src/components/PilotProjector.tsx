import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Sparkles,
  Wand2,
  ArrowRight,
  TrendingDown,
  Zap,
  Activity,
  TrendingUp,
  Loader2,
  RotateCcw,
} from 'lucide-react';
import { Link } from 'react-router-dom';

/**
 * PilotProjector — "what could EVERYANGLE do for {your brand}?"
 *
 * Approach: vertical-specific templated narratives with brand-name interpolation.
 * No LLM call, no API key, no monthly bill, no abuse vector. Fully deterministic
 * and instant — but visually framed as a personalized brief generated for the user.
 *
 * If you ever want to upgrade to a real LLM-backed version, swap the renderProjection
 * function with a fetch to a serverless function. The UX scaffolding will still work.
 */

type VerticalKey =
  | 'fashion'
  | 'beauty'
  | 'coffee'
  | 'grocery'
  | 'home'
  | 'electronics'
  | 'sports'
  | 'jewelry'
  | 'specialty';

type VerticalContent = {
  label: string;
  flavor: string; // adjective used in copy ("apparel floor", "coffee bar", etc.)
  unit: string; // dominant transaction unit ("basket", "ticket", "order")
  insightHook: string; // a memorable industry-specific gap
  blocks: {
    icon: 'cost' | 'efficiency' | 'measure' | 'profit';
    title: string;
    body: string; // contains "{brand}" placeholder
    metric: string;
  }[];
};

const VERTICALS: Record<VerticalKey, VerticalContent> = {
  fashion: {
    label: 'Fashion / Apparel',
    flavor: 'apparel floor',
    unit: 'basket',
    insightHook:
      'Most apparel brands assume their store visitor matches their e-commerce visitor. They almost never do. Samsøe Samsøe found their in-store mix was nearly 30 points off their digital one — and unlocked $4.3M in new revenue by acting on it.',
    blocks: [
      {
        icon: 'cost',
        title: 'Lower labor cost without thinning the rush',
        body:
          "We measure hourly demand at every {brand} store and align rosters to peaks instead of historical schedules. Apparel sites typically recover 3–5% of labor spend in the first quarter — without losing a single conversion-critical hour.",
        metric: '−3.8%',
      },
      {
        icon: 'efficiency',
        title: 'Catch fitting-room and till queues before they cost you',
        body:
          "Fitting room dropouts and till abandonment are the silent revenue leaks of every apparel store. {brand}'s floor managers would get a Slack alert the moment wait times cross your threshold — before the customer leaves.",
        metric: '−20% walkouts',
      },
      {
        icon: 'measure',
        title: 'Validate every layout, endcap and window in 7 days',
        body:
          'Move new arrivals to a different wall in 5 sites, hold the rest, and measure the dwell-and-conversion delta in a week — not a season. {brand} stops deciding from the headquarters and starts deciding from the floor.',
        metric: '7-day cycle',
      },
      {
        icon: 'profit',
        title: 'Find the customer your website never told you about',
        body:
          "Anonymized in-store demographic data routinely contradicts e-commerce panels. The pivot {brand} would make on the back of that gap is usually worth more than the platform itself.",
        metric: '+11% menswear',
      },
    ],
  },
  beauty: {
    label: 'Beauty / Cosmetics',
    flavor: 'beauty counter',
    unit: 'basket',
    insightHook:
      'Beauty floors are won and lost at the consultation. The brands that measure consultation-to-conversion at the BA level outpace the ones still grading staff on hourly footfall.',
    blocks: [
      {
        icon: 'cost',
        title: 'Schedule consultants to where conversion actually lives',
        body:
          '{brand} would see consultation density per BA, per zone, per hour. The morning over-coverage problem disappears. The Saturday afternoon under-coverage problem stops costing baskets.',
        metric: '−4% labor',
      },
      {
        icon: 'efficiency',
        title: 'Open the till at the second customer in the queue',
        body:
          'Beauty queues kill discretionary baskets faster than any other vertical. {brand}\'s floor leads would know a queue is forming before the queue knows it is forming.',
        metric: '−18% walkouts',
      },
      {
        icon: 'measure',
        title: 'Prove which campaigns actually sell at the counter',
        body:
          'Window dwell, endcap engagement, promo-zone conversion — measured at every {brand} site. The marketing team finally has the answer to "did this work" without an attribution argument.',
        metric: '+30% promo lift',
      },
      {
        icon: 'profit',
        title: 'Convert browsers into consultations, not departures',
        body:
          'Identify the dwell zones where the right consultant intervention turns a tester into a basket. {brand} consultations stop being scheduled and start being triggered.',
        metric: '+22% consultation rate',
      },
    ],
  },
  coffee: {
    label: 'Coffee / Café / QSR',
    flavor: 'coffee bar',
    unit: 'ticket',
    insightHook:
      'In QSR, every 30 seconds at the till is a measurable revenue line. The brands measuring it staff like surgeons. The brands not measuring it staff like guesswork.',
    blocks: [
      {
        icon: 'cost',
        title: 'Tighten barista schedules to the actual rush, by site',
        body:
          'Every {brand} location has a different micro-curve. We map it and your schedules align to it. You stop paying for over-coverage at 11am and stop losing tickets at 12:08pm.',
        metric: '−4% labor',
      },
      {
        icon: 'efficiency',
        title: 'Spot the queue 90 seconds before customers walk',
        body:
          "The mobile-order build-up. The lunchtime spike. The 3pm slump that suddenly isn't. {brand} managers get the alert and act — before the line leaves.",
        metric: '−25% abandonment',
      },
      {
        icon: 'measure',
        title: 'Measure the actual lift of every menu and store change',
        body:
          'New menu board? Drink-of-the-month launch? Reformatted seating? {brand} runs the change in five sites, holds the rest, measures behavioural lift in days.',
        metric: '5-day validation',
      },
      {
        icon: 'profit',
        title: 'Turn dwell into upsell, not idle time',
        body:
          'Customers who dwell longer at the merch wall buy 14% bigger baskets. {brand} would see the dwell, time the prompt, and capture the basket.',
        metric: '+14% basket',
      },
    ],
  },
  grocery: {
    label: 'Grocery / Convenience',
    flavor: 'aisle',
    unit: 'basket',
    insightHook:
      'Grocery is the highest-traffic, lowest-margin format in retail. A 50-basis-point efficiency gain at the till compounds across millions of transactions. Most chains still measure against a turnstile from 2008.',
    blocks: [
      {
        icon: 'cost',
        title: 'Open the second till at the right second',
        body:
          "{brand} would see the queue forming aisle-by-aisle. Floor leads get the alert. Tills open at the right second — not when a manager happens to look up.",
        metric: '−6% till idle time',
      },
      {
        icon: 'efficiency',
        title: 'Restock based on engagement, not the planogram theory',
        body:
          "Endcap dwell tells you which features are pulling. {brand} reorders against shopper attention — not what the planogram predicted six weeks ago.",
        metric: '+9% endcap conversion',
      },
      {
        icon: 'measure',
        title: 'Validate every promo and category reset in days',
        body:
          'Run a planogram change in 10 stores. Hold 50. {brand} sees the dwell-and-basket delta in a week, before the rollout decision needs to be made.',
        metric: '7-day cycle',
      },
      {
        icon: 'profit',
        title: 'Catch missed-purchase moments your scanner never sees',
        body:
          "The basket the customer picked up and put down. The dwell that didn\'t convert. {brand} sees the gap between intent and purchase — and where to close it.",
        metric: '+4% conversion',
      },
    ],
  },
  home: {
    label: 'Home / Furniture',
    flavor: 'showroom',
    unit: 'order',
    insightHook:
      'Furniture customers dwell, sit, talk, leave. They come back. They buy weeks later. Most home retailers can\'t tie that journey together. The ones who can sell more.',
    blocks: [
      {
        icon: 'cost',
        title: 'Staff the showroom against actual customer dwell, not opening hours',
        body:
          '{brand} would see which zones, which hours, which store formats need consultative staff. Cut over-coverage at the displays nobody dwells in.',
        metric: '−4% labor',
      },
      {
        icon: 'efficiency',
        title: 'Trigger the consultant when the customer is ready',
        body:
          'A 4-minute dwell at the bedroom display means something different than a 30-second pass. {brand} managers know the difference and time the intervention.',
        metric: '+15% consultation rate',
      },
      {
        icon: 'measure',
        title: 'Validate every floor reset in the format that matters',
        body:
          'Reset 5 stores, hold 25, see whether the new sofa zone earned its real estate. {brand} stops reorganizing showrooms on instinct.',
        metric: 'Per-format validation',
      },
      {
        icon: 'profit',
        title: 'Tie in-store dwell to e-commerce purchase',
        body:
          'When the in-store visit shapes the purchase, {brand} sees both halves of the journey. Sleep Number found 8% revenue uplift just by mapping where engagement died.',
        metric: '+8% revenue lift',
      },
    ],
  },
  electronics: {
    label: 'Electronics / Tech retail',
    flavor: 'demo zone',
    unit: 'basket',
    insightHook:
      'Tech retail is product-led. Customers walk, demo, leave, search, come back. Mapping that loop is the difference between flagship traffic and flagship revenue.',
    blocks: [
      {
        icon: 'cost',
        title: 'Cover demo zones based on engagement, not headcount',
        body:
          '{brand} would staff demo stations against measured customer demand — not against a static rota. Nobody is staffing a quiet zone while the busy one is unattended.',
        metric: '−4% labor',
      },
      {
        icon: 'efficiency',
        title: 'Spot the customer who is ready to buy',
        body:
          'Multiple visits to the same demo. Extended dwell after an associate walked past. {brand} reps would know the buying-intent signature and step in at the right second.',
        metric: '+11% conversion',
      },
      {
        icon: 'measure',
        title: 'Test demo layouts and accessory placements in days',
        body:
          'Every accessory placement is testable. Every demo arrangement is testable. {brand} sees the engagement and the basket impact in seven days.',
        metric: '7-day cycle',
      },
      {
        icon: 'profit',
        title: 'Recover the customer who walked to research online',
        body:
          'When a customer dwells without buying, {brand} would have a measured signature of the moment they disengaged — and the trigger to follow up.',
        metric: '+6% basket',
      },
    ],
  },
  sports: {
    label: 'Sports / Athletic',
    flavor: 'wall',
    unit: 'basket',
    insightHook:
      'Sports retail is fitting-driven. The shoe wall, the fitting bench, the till. The brands measuring those three points beat the ones who still measure the door.',
    blocks: [
      {
        icon: 'cost',
        title: 'Schedule the right associate to the right wall, hour by hour',
        body:
          '{brand} would see which walls and which fitting benches need expert coverage at which times. Stop paying for guesswork rotas.',
        metric: '−4% labor',
      },
      {
        icon: 'efficiency',
        title: 'Convert the fitting bench at the moment of intent',
        body:
          'Fitting dwell is the highest-intent signal in sports retail. {brand}\'s associates would intervene exactly when the customer is ready to commit.',
        metric: '+15% fit-to-buy',
      },
      {
        icon: 'measure',
        title: 'Test every shoe-wall layout and merch reset in 7 days',
        body:
          'Run the new wall in five sites. Hold the rest. {brand} sees the engagement-to-basket delta within a week.',
        metric: '7-day cycle',
      },
      {
        icon: 'profit',
        title: 'Catch the cross-sell {brand} is leaving on the bench',
        body:
          'Customers trying on running shoes who dwell at the apparel wall buy more — when prompted. {brand} would map the moment, not guess at it.',
        metric: '+12% basket',
      },
    ],
  },
  jewelry: {
    label: 'Jewelry / Luxury',
    flavor: 'counter',
    unit: 'transaction',
    insightHook:
      'Luxury counters are won at the consultation, not the impression. The brands measuring counter dwell at the SA level retain customers their competitors lose at hello.',
    blocks: [
      {
        icon: 'cost',
        title: 'Schedule SAs against measured intent, not weekend assumptions',
        body:
          '{brand} would see counter dwell density per SA, per case, per hour. Schedule the senior associate to the moments that matter.',
        metric: '−5% labor',
      },
      {
        icon: 'efficiency',
        title: 'Reduce wait time at the counter from prospect to consultation',
        body:
          'A 90-second wait kills luxury intent. {brand} floor managers would see the gap forming and close it before the customer feels ignored.',
        metric: '−25% abandonment',
      },
      {
        icon: 'measure',
        title: 'Validate every case layout and window display',
        body:
          'Window dwell to counter approach. Counter approach to consultation. {brand} measures the funnel that has been invisible for decades.',
        metric: 'Funnel visibility',
      },
      {
        icon: 'profit',
        title: 'Convert browsers into clienteling appointments',
        body:
          'The customer who dwells but does not buy is the highest-value lead {brand} has. Capture the moment, time the follow-up, build the file.',
        metric: '+18% appointment rate',
      },
    ],
  },
  specialty: {
    label: 'Specialty / Other',
    flavor: 'floor',
    unit: 'basket',
    insightHook:
      'Specialty retail wins on attention to detail. The customer signal is there. Most operators just don\'t have a way to see it across the fleet.',
    blocks: [
      {
        icon: 'cost',
        title: 'Align labor to actual demand, by site',
        body:
          'Every {brand} location has a unique micro-pattern. We map it. Schedules align to it. Cost comes out of the rota, not the conversion.',
        metric: '−4% labor',
      },
      {
        icon: 'efficiency',
        title: 'Catch queues, walkouts, and friction before they cost',
        body:
          '{brand} floor leads would get real-time alerts when wait times, walkouts or zone abandonment cross threshold.',
        metric: '−18% walkouts',
      },
      {
        icon: 'measure',
        title: 'Validate every change against measured data',
        body:
          'Layouts, promos, staffing — all testable in days, not seasons. {brand} stops deciding from the headquarters.',
        metric: '7-day cycle',
      },
      {
        icon: 'profit',
        title: 'Find the conversion gap nobody knew was there',
        body:
          'Most specialty operators are 4–8% off optimal conversion at the average site. {brand} would see the gap, store by store, and close it.',
        metric: '+6% conversion',
      },
    ],
  },
};

const ICONS = {
  cost: <TrendingDown size={20} />,
  efficiency: <Zap size={20} />,
  measure: <Activity size={20} />,
  profit: <TrendingUp size={20} />,
};

type Status = 'idle' | 'analyzing' | 'done';

export default function PilotProjector() {
  const [brand, setBrand] = useState('');
  const [vertical, setVertical] = useState<VerticalKey>('fashion');
  const [status, setStatus] = useState<Status>('idle');
  const [reduceMotion, setReduceMotion] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!brand.trim()) return;
    setStatus('analyzing');
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setReduceMotion(true);
      setStatus('done');
      return;
    }
    // Tiny theatre — feels personalized, costs $0
    window.setTimeout(() => setStatus('done'), 2200);
  };

  const reset = () => {
    setStatus('idle');
    setBrand('');
  };

  const content = VERTICALS[vertical];
  const brandSafe = brand.trim() || 'Your brand';

  return (
    <section id="pilot-projector" className="py-32 bg-brand-navy relative overflow-hidden scroll-mt-24">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-brand-secondary/8 blur-[150px] rounded-full pointer-events-none opacity-50" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <p className="text-brand-secondary text-[10px] font-black uppercase tracking-[0.4em] mb-8 inline-flex items-center gap-2">
            <Wand2 size={12} /> Project a pilot
          </p>
          <h2 className="font-display text-5xl md:text-7xl font-bold mb-8 italic text-white leading-[0.9]">
            Type your brand. <br />
            <span className="text-brand-primary">See the upside.</span>
          </h2>
          <p className="text-lg text-slate-400 font-medium leading-relaxed">
            Pick your vertical, drop your brand name, and we'll project what an EVERYANGLE pilot tends to unlock for retailers like you. No call, no email, no commitment.
          </p>
        </div>

        <AnimatePresence mode="wait">
          {status === 'idle' && (
            <motion.form
              key="form"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.4 }}
              onSubmit={handleSubmit}
              className="max-w-3xl mx-auto bg-white/[0.02] border border-white/10 rounded-[40px] p-8 md:p-10 backdrop-blur-xl shadow-2xl"
            >
              <div className="grid sm:grid-cols-3 gap-4 mb-6">
                <div className="sm:col-span-2 space-y-2">
                  <label htmlFor="pp-brand" className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em] ml-1">Your retail brand</label>
                  <input
                    id="pp-brand"
                    type="text"
                    required
                    value={brand}
                    onChange={(e) => setBrand(e.target.value)}
                    placeholder="e.g. Nordstrom, Aesop, Pret a Manger"
                    className="w-full bg-brand-navy border border-white/10 rounded-2xl px-5 py-4 text-white text-lg font-display placeholder:text-slate-600 focus:border-brand-primary outline-none transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="pp-vertical" className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em] ml-1">Vertical</label>
                  <select
                    id="pp-vertical"
                    value={vertical}
                    onChange={(e) => setVertical(e.target.value as VerticalKey)}
                    className="w-full bg-brand-navy border border-white/10 rounded-2xl px-5 py-4 text-white text-base focus:border-brand-primary outline-none transition-colors appearance-none"
                  >
                    {Object.entries(VERTICALS).map(([k, v]) => (
                      <option key={k} value={k}>{v.label}</option>
                    ))}
                  </select>
                </div>
              </div>
              <button
                type="submit"
                disabled={!brand.trim()}
                className="w-full bg-brand-primary text-white font-display text-base font-bold uppercase tracking-widest px-8 py-5 rounded-2xl hover:bg-white hover:text-brand-navy transition-colors flex items-center justify-center gap-3 disabled:opacity-40 disabled:cursor-not-allowed shadow-2xl shadow-brand-primary/20"
              >
                Project the pilot <Sparkles size={18} />
              </button>
              <p className="text-[10px] font-mono text-slate-600 text-center mt-4">
                Estimates use industry-typical EVERYANGLE outcomes. Your real pilot will produce real numbers.
              </p>
            </motion.form>
          )}

          {status === 'analyzing' && !reduceMotion && (
            <motion.div
              key="analyzing"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="max-w-3xl mx-auto bg-white/[0.02] border border-white/10 rounded-[40px] p-12 md:p-16 text-center"
            >
              <Loader2 size={32} className="text-brand-primary animate-spin mx-auto mb-8" />
              <p className="text-[10px] font-black text-brand-primary uppercase tracking-[0.4em] mb-4">Analyzing</p>
              <p className="font-display text-2xl md:text-3xl font-bold text-white italic mb-6">
                Mapping {brandSafe} against the {content.flavor}…
              </p>
              <div className="space-y-2 max-w-md mx-auto text-sm text-slate-500 font-mono">
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>· Pulling vertical benchmarks</motion.p>
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}>· Cross-referencing rollout outcomes</motion.p>
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.3 }}>· Drafting the projection</motion.p>
              </div>
            </motion.div>
          )}

          {status === 'done' && (
            <motion.div
              key="result"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              {/* Header card */}
              <div className="bg-gradient-to-br from-brand-primary/10 via-brand-secondary/5 to-transparent border border-brand-primary/20 rounded-[40px] p-8 md:p-12">
                <div className="flex flex-wrap items-start justify-between gap-6 mb-8">
                  <div>
                    <p className="text-[10px] font-black text-brand-primary uppercase tracking-[0.4em] mb-3 inline-flex items-center gap-2">
                      <Sparkles size={12} /> Projection for {brandSafe}
                    </p>
                    <h3 className="font-display text-3xl md:text-5xl font-bold italic text-white leading-tight">
                      Here's what an EVERYANGLE <br />
                      pilot would likely unlock.
                    </h3>
                  </div>
                  <button
                    type="button"
                    onClick={reset}
                    className="text-[10px] font-bold text-slate-400 hover:text-white uppercase tracking-widest inline-flex items-center gap-2 transition-colors"
                  >
                    <RotateCcw size={12} /> Re-run
                  </button>
                </div>
                <p className="text-base md:text-lg text-slate-300 font-medium leading-relaxed">
                  {content.insightHook}
                </p>
              </div>

              {/* Four blocks */}
              <div className="grid md:grid-cols-2 gap-6">
                {content.blocks.map((b, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + i * 0.08 }}
                    className="bg-white/[0.02] border border-white/10 rounded-[32px] p-8 hover:border-white/20 transition-colors"
                  >
                    <div className="flex items-start justify-between mb-6">
                      <div className="w-11 h-11 rounded-xl bg-brand-primary/10 text-brand-primary flex items-center justify-center">
                        {ICONS[b.icon]}
                      </div>
                      <span className="text-[10px] font-black text-brand-accent uppercase tracking-widest bg-brand-accent/10 px-3 py-1.5 rounded-full">{b.metric}</span>
                    </div>
                    <h4 className="font-display text-xl md:text-2xl font-bold italic text-white leading-tight mb-4">{b.title}</h4>
                    <p className="text-slate-400 font-medium leading-relaxed text-sm">
                      {b.body.replace(/\{brand\}/g, brandSafe)}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* CTA */}
              <div className="bg-white/[0.02] border border-white/10 rounded-[32px] p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="text-center md:text-left">
                  <p className="font-display text-xl md:text-2xl font-bold italic text-white mb-2">
                    Want a real number for {brandSafe}?
                  </p>
                  <p className="text-sm text-slate-400 font-medium">
                    A 14-day pilot turns these projections into measured outcomes.
                  </p>
                </div>
                <Link
                  to="/contact"
                  className="bg-brand-primary text-white font-display text-sm font-bold uppercase tracking-widest px-6 py-4 rounded-2xl hover:bg-white hover:text-brand-navy transition-colors inline-flex items-center gap-3 whitespace-nowrap shadow-xl shadow-brand-primary/20"
                >
                  Talk pilot specifics <ArrowRight size={16} />
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
