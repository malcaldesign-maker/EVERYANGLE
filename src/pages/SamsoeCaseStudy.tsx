import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowRight,
  TrendingUp,
  Users,
  Banknote,
  Building2,
  CheckCircle2,
  Quote,
} from 'lucide-react';
import { useMeta } from '../hooks/useMeta';

/**
 * Featured case study — Samsøe Samsøe.
 * Built from outcomes published in the official EVERYANGLE x Samsøe Samsøe
 * 2026 case study deck. All language original; one short attributed quote.
 */
export default function SamsoeCaseStudy() {
  useMeta({
    title: 'Samsøe Samsøe × EVERYANGLE — case study',
    description:
      'How Danish fashion brand Samsøe Samsøe used EVERYANGLE on existing Cisco Meraki cameras to discover their real in-store customer, lift sales 2.9%, save 3.8% on labor, and clear 26× ROI.',
  });

  const heroStats = [
    { value: '+2.9%', label: 'Sales lift across all sites', tone: 'text-brand-accent' },
    { value: '$4.3M', label: 'Annual revenue uplift', tone: 'text-brand-primary' },
    { value: '26×', label: 'ROI on investment cost', tone: 'text-white' },
    { value: '−3.8%', label: 'Labor cost reduction', tone: 'text-brand-secondary' },
  ];

  const journey = [
    {
      step: '01',
      title: 'The website lied — politely',
      body: "Samsøe Samsøe's e-commerce data described an 80% female customer base. Their store strategy, layouts, and merchandising were calibrated against that number. It made sense — until they actually measured the floor.",
    },
    {
      step: '02',
      title: 'The cameras already knew',
      body: 'EVERYANGLE activated on the Cisco Meraki MV cameras already mounted in every store. No new hardware. No new vendor at the sensing layer. Within days, anonymized in-store demographic data was streaming live across all sites.',
    },
    {
      step: '03',
      title: 'A 30-point gap, hiding in plain sight',
      body: "The in-store customer was nearly 50% male. The online channel had been telling them 80% female for years. The gap wasn't small — it was a strategic blind spot the size of half their addressable market.",
    },
    {
      step: '04',
      title: 'Pivot the floor, not the brand',
      body: 'Product mix, store layouts and floor-space allocation shifted to reflect the real visitor. Menswear got more visibility, better placement, and the staffing to match. The brand stayed the brand. The shop floor finally caught up.',
    },
    {
      step: '05',
      title: 'The numbers landed in six weeks',
      body: 'Menswear transaction volume rose 11% on the corrected layout. Total sales lifted 2.9% across all sites — equivalent to $4.3M of new revenue annually. Labor costs dropped 3.8% through demand-aligned rostering. And the platform paid for itself 26 times over.',
    },
  ];

  const outcomes = [
    {
      icon: <TrendingUp size={22} />,
      title: '2.9% sales lift across all sites',
      body: 'Forecasted to reach 5–5.5% with full estate expansion and wider implementation across Samsøe Samsøe’s European footprint.',
      accent: 'text-brand-accent',
      bg: 'bg-brand-accent/10',
    },
    {
      icon: <Users size={22} />,
      title: '+11% menswear transaction volume',
      body: 'Triggered by the corrected demographic insight. Confirmed within six weeks of layout and product-mix changes.',
      accent: 'text-brand-primary',
      bg: 'bg-brand-primary/10',
    },
    {
      icon: <Banknote size={22} />,
      title: '−3.8% labor costs',
      body: 'Smart staffing tailored by peak and low hours. Less overstaffing in the morning. Better coverage during the rush.',
      accent: 'text-brand-secondary',
      bg: 'bg-brand-secondary/10',
    },
    {
      icon: <Building2 size={22} />,
      title: 'One device, two jobs',
      body: 'The same Cisco Meraki MV camera now handles both security and people analytics — collapsing two budgets into one.',
      accent: 'text-white',
      bg: 'bg-white/5',
    },
  ];

  return (
    <div className="pt-20 bg-brand-navy">
      {/* Hero */}
      <section className="relative py-24 md:py-32 overflow-hidden border-b border-white/5">
        <div className="absolute top-0 right-0 w-[800px] h-[600px] bg-brand-accent/10 blur-[150px] rounded-full pointer-events-none opacity-40" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-2 text-[10px] font-bold text-slate-500 hover:text-white uppercase tracking-[0.3em] mb-12 transition-colors"
          >
            <ArrowLeft size={12} /> All case studies
          </Link>

          <div className="grid lg:grid-cols-5 gap-16 items-end">
            <motion.div
              className="lg:col-span-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-accent/10 border border-brand-accent/20 text-brand-accent text-[10px] font-bold uppercase tracking-[0.3em] mb-10">
                Fashion · Global Retail · 2026
              </div>
              <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.92] tracking-tight italic text-white mb-10">
                Samsøe Samsøe found <br />
                <span className="text-brand-accent">half their store</span> <br />
                was missing.
              </h1>
              <p className="text-xl md:text-2xl text-slate-400 max-w-2xl leading-relaxed font-medium">
                Their website said 80% female. The cameras already mounted in every store said almost 50% male. EVERYANGLE turned that gap into $4.3M of new revenue.
              </p>
            </motion.div>

            <motion.div
              className="lg:col-span-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="bg-white/[0.02] border border-white/10 rounded-[40px] p-8 md:p-10 backdrop-blur-xl">
                <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.4em] mb-8">At a glance</p>
                <div className="space-y-6">
                  <div className="flex items-baseline justify-between border-b border-white/5 pb-4">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Brand</span>
                    <span className="text-sm font-display font-bold text-white">Samsøe Samsøe</span>
                  </div>
                  <div className="flex items-baseline justify-between border-b border-white/5 pb-4">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Vertical</span>
                    <span className="text-sm font-display font-bold text-white">Fashion</span>
                  </div>
                  <div className="flex items-baseline justify-between border-b border-white/5 pb-4">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Footprint</span>
                    <span className="text-sm font-display font-bold text-white">50+ stores · 31 countries</span>
                  </div>
                  <div className="flex items-baseline justify-between border-b border-white/5 pb-4">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Cameras</span>
                    <span className="text-sm font-display font-bold text-white">Cisco Meraki MV</span>
                  </div>
                  <div className="flex items-baseline justify-between">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Time to value</span>
                    <span className="text-sm font-display font-bold text-brand-accent">Live within weeks</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Headline stats */}
      <section className="py-20 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {heroStats.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/[0.02] border border-white/5 rounded-[32px] p-8"
              >
                <p className={`font-display text-5xl md:text-6xl font-bold italic mb-3 tracking-tight tabular-nums ${s.tone}`}>{s.value}</p>
                <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em]">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey */}
      <section className="py-32">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-brand-primary text-[10px] font-black uppercase tracking-[0.4em] mb-8">The story, step by step</p>
          <h2 className="font-display text-5xl md:text-7xl font-bold mb-20 italic text-white leading-[0.9]">
            From assumed shopper <br />
            <span className="text-brand-primary">to actual one.</span>
          </h2>

          <div className="space-y-12">
            {journey.map((j, i) => (
              <motion.div
                key={j.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="grid md:grid-cols-12 gap-8 pb-12 border-b border-white/5 last:border-b-0"
              >
                <div className="md:col-span-2">
                  <p className="font-display text-5xl font-bold text-brand-primary/60 italic tabular-nums">{j.step}</p>
                </div>
                <div className="md:col-span-10">
                  <h3 className="font-display text-2xl md:text-3xl font-bold text-white italic mb-4 leading-tight">{j.title}</h3>
                  <p className="text-lg text-slate-400 font-medium leading-relaxed">{j.body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pull quote */}
      <section className="py-24 border-y border-white/5 bg-brand-card/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.08),transparent_70%)] pointer-events-none" />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <Quote size={44} className="text-brand-primary/40 mx-auto mb-12" />
          <blockquote className="font-display text-3xl md:text-5xl font-bold italic text-white leading-tight mb-12">
            "EVERYANGLE's insights have been instrumental in refining our product, marketing, and design strategies."
          </blockquote>
          <div className="pt-8 border-t border-white/10 inline-block">
            <p className="font-display text-xl font-bold text-white italic mb-1">Simeon Solarsky</p>
            <p className="text-[10px] font-black text-brand-accent uppercase tracking-[0.4em]">Head of IT, Samsøe Samsøe</p>
          </div>
        </div>
      </section>

      {/* Detailed outcomes */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16 max-w-3xl">
            <p className="text-brand-accent text-[10px] font-black uppercase tracking-[0.4em] mb-8">The outcomes, line by line</p>
            <h2 className="font-display text-4xl md:text-6xl font-bold italic text-white leading-[0.95]">
              Numbers a CFO would <br />
              <span className="text-brand-accent">put in a board pack.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {outcomes.map((o, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-white/[0.02] border border-white/5 rounded-[32px] p-10 hover:border-white/15 transition-colors"
              >
                <div className={`w-12 h-12 ${o.bg} ${o.accent} rounded-2xl flex items-center justify-center mb-6`}>
                  {o.icon}
                </div>
                <h3 className="font-display text-2xl font-bold italic text-white mb-3 leading-tight">{o.title}</h3>
                <p className="text-slate-400 font-medium leading-relaxed">{o.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Replication framework */}
      <section className="py-24 bg-brand-card/20 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-brand-secondary text-[10px] font-black uppercase tracking-[0.4em] mb-8">How to replicate this</p>
              <h2 className="font-display text-3xl md:text-5xl font-bold italic text-white leading-tight mb-6">
                The same playbook works on your floor.
              </h2>
              <p className="text-slate-400 font-medium leading-relaxed mb-8">
                Samsøe started with one assumption (their digital customer) and ended with a different one (their physical customer). Most retailers carry that same gap. The pilot below is the structured way to find yours.
              </p>
            </div>

            <div className="bg-white/[0.02] border border-white/10 rounded-[32px] p-8 md:p-10">
              <p className="text-[10px] font-black text-brand-accent uppercase tracking-[0.4em] mb-8">A typical pilot looks like</p>
              <div className="space-y-5">
                {[
                  { d: 'Day 1–3', t: 'Activation on existing cameras (no hardware shipped)' },
                  { d: 'Week 1', t: 'Live data on footfall, dwell, queues, demographic split' },
                  { d: 'Week 2', t: 'Anomaly review — find the gap between belief and reality' },
                  { d: 'Week 3–4', t: 'Test a layout, staffing, or promo change against real data' },
                  { d: 'Day 28', t: 'Read-out with measured outcomes and rollout business case' },
                ].map((row, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-7 h-7 rounded-lg bg-brand-accent/10 text-brand-accent flex items-center justify-center mt-0.5">
                      <CheckCircle2 size={14} />
                    </div>
                    <div className="flex-grow flex flex-wrap items-baseline justify-between gap-x-6 border-b border-white/5 pb-3">
                      <p className="text-[10px] font-black text-brand-accent uppercase tracking-widest">{row.d}</p>
                      <p className="text-sm text-white font-medium">{row.t}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-display text-4xl md:text-6xl font-bold italic text-white leading-tight mb-8">
            What is <span className="text-brand-primary">your gap?</span>
          </h2>
          <p className="text-lg text-slate-400 font-medium mb-12 max-w-xl mx-auto">
            30 minutes to see the platform. 14 days to a working pilot. The number you find may surprise you.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="bg-brand-primary text-white font-display text-base font-bold px-10 py-5 rounded-2xl hover:bg-white hover:text-brand-navy transition-colors inline-flex items-center gap-3 shadow-2xl shadow-brand-primary/30"
            >
              Book a 30-min demo <ArrowRight size={18} />
            </Link>
            <Link
              to="/case-studies"
              className="border border-white/10 text-white hover:bg-white/5 font-display text-base font-bold px-10 py-5 rounded-2xl transition-colors"
            >
              See more case studies
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
