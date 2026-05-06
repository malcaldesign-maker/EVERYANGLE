import { Link } from 'react-router-dom';
import {
  Camera,
  Brain,
  BarChart3,
  Zap,
  ShieldCheck,
  Clock,
  Users,
  TrendingUp,
  CheckCircle2,
  Printer,
  ArrowLeft,
  ArrowRight,
} from 'lucide-react';
import { useMeta } from '../hooks/useMeta';

/**
 * PlatformSummary — the "1-page platform summary" linked from InlineLeadCapture.
 *
 * Built as a print-friendly page so visitors can hit Cmd/Ctrl+P (or the on-page
 * Print button) and save a clean PDF that matches the website's brand. Cheaper
 * and lower-friction than gating a real PDF behind a form.
 */
export default function PlatformSummary() {
  useMeta({
    title: 'Platform summary — EVERYANGLE',
    description:
      'A single page covering what EVERYANGLE measures, how it deploys, what it costs to pilot, and what it has delivered for retailers in production.',
  });

  const handlePrint = () => {
    if (typeof window !== 'undefined') window.print();
  };

  return (
    <div className="bg-brand-navy text-white print:bg-white print:text-black">
      {/* Page-controls bar — hidden when printing */}
      <div className="print:hidden bg-brand-card/40 border-b border-white/5 sticky top-20 z-30 backdrop-blur-md">
        <div className="max-w-5xl mx-auto px-6 py-4 flex flex-wrap items-center justify-between gap-3">
          <Link
            to="/"
            className="text-[10px] font-bold text-slate-400 hover:text-white uppercase tracking-[0.3em] inline-flex items-center gap-2 transition-colors"
          >
            <ArrowLeft size={12} /> Back to site
          </Link>
          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={handlePrint}
              className="text-xs font-bold uppercase tracking-widest border border-white/10 hover:bg-white/5 text-white px-4 py-2.5 rounded-xl inline-flex items-center gap-2 transition-colors"
            >
              <Printer size={14} /> Save as PDF
            </button>
            <Link
              to="/contact"
              className="text-xs font-bold uppercase tracking-widest bg-brand-primary hover:bg-white hover:text-brand-navy text-white px-4 py-2.5 rounded-xl inline-flex items-center gap-2 transition-colors"
            >
              Book a demo <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>

      {/* The summary itself — sized like a printable A4-ish document */}
      <article className="max-w-5xl mx-auto px-6 md:px-12 py-12 md:py-16 print:py-8 print:px-10">
        {/* Header */}
        <header className="flex items-start justify-between gap-8 pb-10 mb-10 border-b border-white/10 print:border-black/15">
          <div>
            <p className="text-[10px] font-black text-brand-primary uppercase tracking-[0.4em] mb-3 print:text-[#6366F1]">
              EVERYANGLE · Platform summary · 2026
            </p>
            <h1 className="font-display text-4xl md:text-5xl font-bold italic leading-[0.95] text-white print:text-black">
              Vision AI + Agentic AI <br />
              for physical retail.
            </h1>
            <p className="mt-4 text-slate-400 print:text-black/70 max-w-xl text-sm md:text-base">
              The intelligence bridge between online and physical retail. We turn the cameras you already own into a real-time operating layer for stores.
            </p>
          </div>
          <div className="hidden md:flex flex-col items-end text-right text-[10px] font-mono text-slate-500 print:text-black/60 leading-relaxed">
            <p>everyangle.ai</p>
            <p>hello@everyangle.ai</p>
            <p>Dublin · London · New York</p>
          </div>
        </header>

        {/* Headline metrics strip */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-12 print:mb-8">
          {[
            { v: '26×', l: 'Documented ROI' },
            { v: '+30%', l: 'Conversion lift' },
            { v: '−20%', l: 'Walkout rate' },
            { v: '14 d', l: 'Pilot setup' },
          ].map((m, i) => (
            <div
              key={i}
              className="border border-white/10 print:border-black/15 rounded-2xl p-4 md:p-6 bg-white/[0.02] print:bg-transparent"
            >
              <p className="font-display text-3xl md:text-4xl font-bold italic text-white print:text-black tracking-tight">
                {m.v}
              </p>
              <p className="text-[10px] font-black text-slate-500 print:text-black/50 uppercase tracking-[0.2em] mt-2">
                {m.l}
              </p>
            </div>
          ))}
        </section>

        {/* What we measure */}
        <section className="mb-12 print:mb-8">
          <h2 className="font-display text-xl md:text-2xl font-bold italic text-white print:text-black mb-2">What we measure</h2>
          <p className="text-sm text-slate-500 print:text-black/60 mb-6">Four operational layers, on the cameras you already own.</p>
          <div className="grid md:grid-cols-2 gap-3 md:gap-4">
            {[
              {
                icon: <Users size={18} />,
                t: 'Traffic & arrivals',
                b: 'Accurate hourly footfall by zone — minus staff, minus minors, minus the noise. Replaces the turnstile count.',
              },
              {
                icon: <BarChart3 size={18} />,
                t: 'Conversion & store performance',
                b: 'Footfall × POS = real conversion by store, hour, zone. No more dividing receipts by a guess.',
              },
              {
                icon: <Clock size={18} />,
                t: 'Queue & service pressure',
                b: 'Real-time queue depth and wait-time alerts. Floor managers act before service degrades.',
              },
              {
                icon: <TrendingUp size={18} />,
                t: 'Zone & layout insight',
                b: 'Engagement by floor area. Test merchandising changes with before/after behavioural data.',
              },
            ].map((m, i) => (
              <div
                key={i}
                className="flex gap-4 border border-white/10 print:border-black/15 rounded-2xl p-4 md:p-5 bg-white/[0.02] print:bg-transparent"
              >
                <div className="flex-shrink-0 w-9 h-9 rounded-xl bg-brand-primary/10 text-brand-primary print:bg-[#6366F1]/15 print:text-[#6366F1] flex items-center justify-center">
                  {m.icon}
                </div>
                <div>
                  <p className="font-display text-base md:text-lg font-bold italic text-white print:text-black mb-1 leading-tight">{m.t}</p>
                  <p className="text-xs md:text-sm text-slate-400 print:text-black/70 leading-relaxed">{m.b}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* How it works */}
        <section className="mb-12 print:mb-8">
          <h2 className="font-display text-xl md:text-2xl font-bold italic text-white print:text-black mb-2">How it works</h2>
          <p className="text-sm text-slate-500 print:text-black/60 mb-6">Three steps. No new hardware in most deployments.</p>
          <div className="grid md:grid-cols-3 gap-3 md:gap-4">
            {[
              { n: '01', icon: <Camera size={16} />, t: 'Connect', b: 'Activates on the cameras you already own — IP/CCTV, Cisco Meraki MV, Hanwha, Axis. Zero new sensors in most deployments.' },
              { n: '02', icon: <Brain size={16} />, t: 'Process', b: 'Computer vision runs anonymized at the edge. No facial recognition. No PII leaves your site. GDPR-safe by design.' },
              { n: '03', icon: <Zap size={16} />, t: 'Decide', b: 'Live dashboards and Agentic alerts from day one. No data science team required to start using it.' },
            ].map((s, i) => (
              <div
                key={i}
                className="border border-white/10 print:border-black/15 rounded-2xl p-4 md:p-5 bg-white/[0.02] print:bg-transparent"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="w-9 h-9 rounded-xl bg-brand-accent/10 text-brand-accent print:bg-[#2DD4BF]/15 print:text-[#0F766E] flex items-center justify-center">
                    {s.icon}
                  </div>
                  <span className="font-display text-2xl font-bold italic text-brand-primary print:text-[#6366F1] tabular-nums">{s.n}</span>
                </div>
                <p className="font-display text-base md:text-lg font-bold italic text-white print:text-black mb-2">{s.t}</p>
                <p className="text-xs md:text-sm text-slate-400 print:text-black/70 leading-relaxed">{s.b}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Why differentiated */}
        <section className="mb-12 print:mb-8">
          <h2 className="font-display text-xl md:text-2xl font-bold italic text-white print:text-black mb-2">Why retailers pick EVERYANGLE</h2>
          <p className="text-sm text-slate-500 print:text-black/60 mb-6">Built differently for retail operations.</p>
          <div className="grid md:grid-cols-3 gap-3 md:gap-4">
            {[
              { icon: <ShieldCheck size={18} />, t: 'Privacy-first architecture', b: 'Anonymized skeletal-frame tracking. Edge-processed. No facial recognition. Documented for your DPO.' },
              { icon: <Zap size={18} />, t: 'Fast, low-risk deployment', b: 'No new hardware in most rollouts. No firmware. No cabling. Operational from day one.' },
              { icon: <CheckCircle2 size={18} />, t: 'Decision-grade data quality', b: 'Calibrated 95–98% accuracy across lighting, store layouts and high-traffic periods. Audit-ready.' },
            ].map((m, i) => (
              <div
                key={i}
                className="border border-white/10 print:border-black/15 rounded-2xl p-4 md:p-5 bg-white/[0.02] print:bg-transparent"
              >
                <div className="w-9 h-9 rounded-xl bg-brand-secondary/10 text-brand-secondary print:bg-[#A855F7]/15 print:text-[#7C3AED] flex items-center justify-center mb-3">
                  {m.icon}
                </div>
                <p className="font-display text-base md:text-lg font-bold italic text-white print:text-black mb-2">{m.t}</p>
                <p className="text-xs md:text-sm text-slate-400 print:text-black/70 leading-relaxed">{m.b}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Results in production */}
        <section className="mb-12 print:mb-8">
          <h2 className="font-display text-xl md:text-2xl font-bold italic text-white print:text-black mb-2">Results in production</h2>
          <p className="text-sm text-slate-500 print:text-black/60 mb-6">Outcomes from current EVERYANGLE rollouts.</p>
          <div className="grid md:grid-cols-2 gap-3 md:gap-4">
            <div className="border border-white/10 print:border-black/15 rounded-2xl p-5 md:p-6 bg-white/[0.02] print:bg-transparent">
              <p className="text-[10px] font-black text-brand-accent print:text-[#0F766E] uppercase tracking-[0.3em] mb-2">Fashion · Global retail</p>
              <p className="font-display text-2xl md:text-3xl font-bold italic text-white print:text-black mb-2">Samsøe Samsøe</p>
              <p className="font-display text-3xl md:text-4xl font-bold italic text-brand-accent print:text-[#0F766E] mb-3">+11%</p>
              <p className="text-xs md:text-sm text-slate-400 print:text-black/70 leading-relaxed mb-3">
                Menswear transaction volume increase. In-store demographic data revealed the real visitor mix and triggered a layout pivot — confirmed within six weeks.
              </p>
              <p className="text-xs italic text-slate-300 print:text-black/80 border-l-2 border-brand-accent print:border-[#0F766E] pl-3 leading-snug">
                "EVERYANGLE's insights have been instrumental in refining our product, marketing, and design strategies."<br />
                <span className="not-italic text-[10px] font-black uppercase tracking-widest text-slate-500 print:text-black/60">— Simeon Solarsky, Head of IT, Samsøe Samsøe</span>
              </p>
            </div>
            <div className="border border-white/10 print:border-black/15 rounded-2xl p-5 md:p-6 bg-white/[0.02] print:bg-transparent">
              <p className="text-[10px] font-black text-brand-primary print:text-[#6366F1] uppercase tracking-[0.3em] mb-2">Bedding · Specialty retail</p>
              <p className="font-display text-2xl md:text-3xl font-bold italic text-white print:text-black mb-2">Sleep Number</p>
              <p className="font-display text-3xl md:text-4xl font-bold italic text-brand-primary print:text-[#6366F1] mb-3">+8%</p>
              <p className="text-xs md:text-sm text-slate-400 print:text-black/70 leading-relaxed mb-3">
                Revenue uplift from engagement optimization. Mapped customer engagement at every zone of the purchase journey, identified dwell-time gaps predicting drop-off, restructured staffing to close them.
              </p>
              <p className="text-xs italic text-slate-300 print:text-black/80 border-l-2 border-brand-primary print:border-[#6366F1] pl-3 leading-snug">
                We could finally see exactly where customers were losing interest — and do something about it.<br />
                <span className="not-italic text-[10px] font-black uppercase tracking-widest text-slate-500 print:text-black/60">— Sleep Number store operations team</span>
              </p>
            </div>
          </div>
        </section>

        {/* What a pilot looks like */}
        <section className="mb-12 print:mb-8 grid md:grid-cols-3 gap-3 md:gap-4">
          <div className="md:col-span-1">
            <h2 className="font-display text-xl md:text-2xl font-bold italic text-white print:text-black mb-2">What a pilot looks like</h2>
            <p className="text-sm text-slate-500 print:text-black/60">Four weeks. Real data. Decision-grade outcome.</p>
          </div>
          <div className="md:col-span-2 border border-white/10 print:border-black/15 rounded-2xl p-5 md:p-6 bg-white/[0.02] print:bg-transparent">
            <ul className="space-y-3">
              {[
                ['Day 1–3', 'Activation on existing cameras (no hardware shipped)'],
                ['Week 1', 'Live data on footfall, dwell, queues, demographic split'],
                ['Week 2', 'Anomaly review — find the gap between belief and reality'],
                ['Week 3–4', 'Test a layout, staffing or promo change against measured data'],
                ['Day 28', 'Read-out with documented outcomes and rollout business case'],
              ].map(([d, t]) => (
                <li key={d} className="flex items-start gap-4 border-b border-white/5 print:border-black/10 pb-3 last:border-b-0 last:pb-0">
                  <span className="text-[10px] font-black text-brand-accent print:text-[#0F766E] uppercase tracking-[0.2em] w-20 flex-shrink-0">{d}</span>
                  <span className="text-sm text-slate-300 print:text-black/85 font-medium">{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Footer / CTA */}
        <footer className="border-t border-white/10 print:border-black/15 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-display text-lg md:text-xl font-bold italic text-white print:text-black">
              Ready to see what your cameras already know?
            </p>
            <p className="text-xs md:text-sm text-slate-500 print:text-black/60 mt-1">
              30 minutes to see the platform. 14 days to a working pilot.
            </p>
          </div>
          <div className="flex items-center gap-3 print:hidden">
            <Link
              to="/contact"
              className="bg-brand-primary text-white font-display text-xs font-bold uppercase tracking-widest px-5 py-3 rounded-xl hover:bg-white hover:text-brand-navy transition-colors inline-flex items-center gap-2"
            >
              Book a demo <ArrowRight size={14} />
            </Link>
          </div>
          <p className="hidden print:block text-xs font-mono text-black/60">
            everyangle.ai · hello@everyangle.ai · Dublin · London · New York
          </p>
        </footer>
      </article>
    </div>
  );
}
