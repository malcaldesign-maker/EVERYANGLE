import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Store,
  Megaphone,
  LayoutGrid,
  ShieldCheck,
  Wallet,
  Crown,
  CheckCircle2,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import type { ReactNode } from 'react';

type Role = {
  id: string;
  label: string;
  shortLabel: string;
  icon: ReactNode;
  pain: string;
  outcomes: { title: string; desc: string }[];
  quote: { line: string; person: string };
  stat: { value: string; label: string };
};

const ROLES: Role[] = [
  {
    id: 'store-ops',
    label: 'Store Operations',
    shortLabel: 'Store Ops',
    icon: <Store size={16} />,
    pain: "You're running a fleet on weekly footfall reports and manager hunches. Real problems are invisible until they're already lost revenue.",
    outcomes: [
      { title: 'Live queue alerts', desc: 'Slack ping when wait time crosses threshold. Open another till before customers walk.' },
      { title: 'Demand-based rosters', desc: 'Schedule against measured peaks, not last August. Cut overstaffed mornings without thinning the rush.' },
      { title: 'Walkout dashboards', desc: 'See which sites lose customers at the door, the queue, or the fitting room — by hour, by day.' },
      { title: 'Compliance by exception', desc: 'Spot the 12% of stores not opening on time, missing peak coverage, or breaching SOPs — automatically.' },
    ],
    quote: {
      line: "We stopped scheduling based on tradition. Labor cost is down 4% and CSAT is up.",
      person: 'Director of Stores, North American apparel retailer',
    },
    stat: { value: '−20%', label: 'Walkout rate at piloted sites' },
  },
  {
    id: 'marketing',
    label: 'Marketing',
    shortLabel: 'Marketing',
    icon: <Megaphone size={16} />,
    pain: "You spend millions on store campaigns and have no idea if the people who saw the window display actually walked the aisles.",
    outcomes: [
      { title: 'Promo dwell measurement', desc: 'Did the new endcap stop traffic? Did dwell convert? You finally see both numbers, side by side.' },
      { title: 'Window-to-conversion attribution', desc: 'Connect window engagement to in-store conversion lift, store by store. Tie spend to outcome.' },
      { title: 'A/B test physical placements', desc: 'Switch the layout in 5 sites, hold the rest. Measure the lift over a fixed window. No more "we think it worked".' },
      { title: 'Audience signal', desc: 'Anonymized demographic mix at promo zones — who actually engaged with the campaign.' },
    ],
    quote: {
      line: "For the first time my CFO asks me which store activations to keep — and I have an answer that isn't anecdotal.",
      person: 'VP Brand Marketing, European fashion group',
    },
    stat: { value: '+30%', label: 'Promo dwell-to-purchase lift' },
  },
  {
    id: 'merchandising',
    label: 'Visual Merchandising',
    shortLabel: 'Visual Merch',
    icon: <LayoutGrid size={16} />,
    pain: "You design the floor on Mondays, you don't see how it performed until the Friday sell-through report. By then, six days are gone.",
    outcomes: [
      { title: 'Engagement-by-zone heatmaps', desc: 'See which racks, walls, and tables actually pull people in — and which die.' },
      { title: 'Cold zone alerts', desc: 'Get flagged when a zone underperforms its category benchmark for 48+ hours.' },
      { title: 'Layout change validation', desc: "Move the new arrivals wall, see the engagement delta within 7 days. Not 30." },
      { title: 'Format-by-format benchmarking', desc: 'Compare flagship vs neighborhood vs outlet on the same dwell-and-conversion axis.' },
    ],
    quote: {
      line: "I get a clean, daily readout of what works. The job moved from gut to evidence in one quarter.",
      person: 'Head of Visual Merchandising, US specialty retailer',
    },
    stat: { value: '7 days', label: 'Layout-change validation cycle' },
  },
  {
    id: 'it-security',
    label: 'IT & Security',
    shortLabel: 'IT / Security',
    icon: <ShieldCheck size={16} />,
    pain: "Every analytics vendor wants to install something. New hardware, new vendor, new headache.",
    outcomes: [
      { title: 'No new hardware', desc: 'Runs on the cameras you already own — IP/CCTV, Cisco Meraki, Hanwha, Axis. Most rollouts touch zero racks.' },
      { title: 'GDPR-safe by default', desc: 'Anonymized skeletal-frame tracking. No facial recognition. No PII. Documented for your DPO.' },
      { title: 'Single-tenant or VPC deployment', desc: 'Runs in your cloud or ours. SOC 2 Type II controls. Encrypted at rest and in transit.' },
      { title: 'IT-friendly rollout', desc: 'No agents, no firmware, no firewall changes for typical deployments. White-glove activation team.' },
    ],
    quote: {
      line: "It was the first vendor in two years who said 'we don't need anything from you' and meant it.",
      person: 'CISO, multinational retailer',
    },
    stat: { value: '0', label: 'New cameras required' },
  },
  {
    id: 'finance',
    label: 'Finance',
    shortLabel: 'Finance',
    icon: <Wallet size={16} />,
    pain: "Your stores are the largest line item on the P&L and the least instrumented part of the company.",
    outcomes: [
      { title: 'Documented ROI per site', desc: 'See exactly which sites are improving and which are dragging — and what each is worth on a P&L basis.' },
      { title: 'Labor-to-demand ratios', desc: 'Quantify over- and under-staffing as a percentage of revenue. Forecast against measured demand.' },
      { title: 'Capex avoidance', desc: 'No new sensors, no new infrastructure. The platform monetizes the cameras you have already paid for.' },
      { title: 'Pilot-first commercial model', desc: '4-week pilots produce measured numbers before you sign anything bigger.' },
    ],
    quote: {
      line: "26x ROI is the headline. The number that mattered to me was that we could prove it inside one quarter.",
      person: 'CFO, North American specialty retailer',
    },
    stat: { value: '26×', label: 'Documented ROI master metric' },
  },
  {
    id: 'csuite',
    label: 'C-Suite',
    shortLabel: 'C-Suite',
    icon: <Crown size={16} />,
    pain: "You set the strategy. Your stores deliver 80%+ of the revenue. You see them through PowerPoint.",
    outcomes: [
      { title: 'Fleet-level signal', desc: 'A single dashboard for every site you operate — conversion, queue, dwell, labor — refreshed live.' },
      { title: 'Anomaly intelligence', desc: 'Get alerted to the outliers that matter, not the noise. The 3 stores that need a phone call this week.' },
      { title: 'Board-grade narrative', desc: 'Defensible numbers for board meetings, investor calls, and earnings prep — sourced from the floor itself.' },
      { title: 'Strategic experiments', desc: 'Test new formats, new fixtures, new operating models on a measurable basis. Stop deciding from the headquarters.' },
    ],
    quote: {
      line: "I went from binary footfall counts to a real-time read on every store. The strategy conversations changed.",
      person: 'CEO, European retail group',
    },
    stat: { value: '1 view', label: 'Every site, every signal, live' },
  },
];

export default function RoleSwitcher() {
  const [activeId, setActiveId] = useState<string>(ROLES[0].id);
  const active = ROLES.find((r) => r.id === activeId) ?? ROLES[0];

  return (
    <section id="for-your-team" className="py-32 bg-brand-navy relative overflow-hidden scroll-mt-24">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-brand-primary/5 blur-[150px] rounded-full pointer-events-none opacity-50" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-16 max-w-3xl">
          <p className="text-brand-secondary text-[10px] font-black uppercase tracking-[0.4em] mb-8">For your team</p>
          <h2 className="font-display text-5xl md:text-7xl font-bold mb-8 italic text-white leading-[0.9]">
            Pick a role. <br />
            <span className="text-brand-primary">See the answer.</span>
          </h2>
          <p className="text-lg text-slate-400 font-medium leading-relaxed">
            EVERYANGLE shows up differently depending on whose KPI it's defending. Tap a role below.
          </p>
        </div>

        {/* Role tabs */}
        <div role="tablist" aria-label="Role" className="flex flex-wrap gap-2 mb-12">
          {ROLES.map((r) => {
            const isActive = r.id === activeId;
            return (
              <button
                key={r.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-controls={`role-panel-${r.id}`}
                id={`role-tab-${r.id}`}
                onClick={() => setActiveId(r.id)}
                className={`px-5 py-3 rounded-2xl text-xs font-bold uppercase tracking-widest border transition-all duration-300 inline-flex items-center gap-2 ${
                  isActive
                    ? 'bg-brand-primary border-brand-primary text-white shadow-lg shadow-brand-primary/30'
                    : 'bg-white/[0.02] border-white/10 text-slate-400 hover:border-white/30 hover:text-white'
                }`}
              >
                <span className={isActive ? 'text-white' : 'text-brand-primary'}>{r.icon}</span>
                <span className="hidden sm:inline">{r.label}</span>
                <span className="sm:hidden">{r.shortLabel}</span>
              </button>
            );
          })}
        </div>

        {/* Active role panel */}
        <div role="tabpanel" id={`role-panel-${active.id}`} aria-labelledby={`role-tab-${active.id}`}>
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="grid lg:grid-cols-5 gap-8"
            >
              {/* Pain + outcomes */}
              <div className="lg:col-span-3 bg-white/[0.02] border border-white/10 rounded-[40px] p-8 md:p-12">
                <p className="text-[10px] font-black text-brand-secondary uppercase tracking-[0.4em] mb-4">The pain</p>
                <p className="font-display text-2xl md:text-3xl font-bold italic text-white leading-tight mb-10">
                  "{active.pain}"
                </p>

                <p className="text-[10px] font-black text-brand-accent uppercase tracking-[0.4em] mb-6">What you get</p>
                <div className="grid sm:grid-cols-2 gap-5">
                  {active.outcomes.map((o, i) => (
                    <div key={i} className="flex gap-4 group">
                      <div className="flex-shrink-0 w-7 h-7 rounded-lg bg-brand-accent/10 text-brand-accent flex items-center justify-center mt-0.5">
                        <CheckCircle2 size={14} />
                      </div>
                      <div>
                        <p className="text-sm font-display font-bold text-white mb-1.5 leading-tight">{o.title}</p>
                        <p className="text-xs text-slate-400 leading-relaxed font-medium">{o.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quote + stat */}
              <div className="lg:col-span-2 flex flex-col gap-6">
                <div className="bg-gradient-to-br from-brand-primary/15 via-brand-primary/5 to-transparent border border-brand-primary/20 rounded-[40px] p-8 md:p-10 relative">
                  <span className="absolute top-6 left-8 font-display text-7xl text-brand-primary/30 italic leading-none">"</span>
                  <p className="font-display text-lg md:text-xl text-white italic font-medium leading-relaxed mb-6 pt-6">
                    {active.quote.line}
                  </p>
                  <p className="text-[10px] font-black text-brand-primary uppercase tracking-[0.3em]">— {active.quote.person}</p>
                </div>

                <div className="bg-white/[0.03] border border-white/10 rounded-[40px] p-8 flex-grow flex flex-col justify-center">
                  <p className="text-[10px] font-black text-brand-accent uppercase tracking-[0.4em] mb-4">Headline outcome</p>
                  <p className="font-display text-6xl md:text-7xl font-bold text-white italic tracking-tight mb-2">
                    {active.stat.value}
                  </p>
                  <p className="text-sm text-slate-400 font-medium">{active.stat.label}</p>
                </div>

                <Link
                  to="/contact"
                  className="bg-brand-primary text-white font-display text-sm font-bold uppercase tracking-widest px-6 py-5 rounded-2xl hover:bg-white hover:text-brand-navy transition-colors text-center"
                >
                  Talk to the {active.shortLabel} team
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
