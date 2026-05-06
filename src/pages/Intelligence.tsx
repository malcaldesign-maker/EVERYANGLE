import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Brain, Eye, Zap, Shield, Cpu } from 'lucide-react';
import type { ElementType } from 'react';
import { useMeta } from '../hooks/useMeta';

export default function Intelligence() {
  useMeta({
    title: 'Intelligence — EVERYANGLE',
    description:
      'How EVERYANGLE turns the chaos of human movement into precise digital data: 98%+ accuracy, integrity protocols, demographic segmentation, and skeletal-frame anonymization.',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'The Intelligence Behind the Glass',
      description:
        'A technical overview of EVERYANGLE\'s computer-vision platform: accuracy benchmarks, audit protocols, and demographic segmentation.',
      author: { '@type': 'Organization', name: 'EVERYANGLE' },
    },
  });
  const techStack = [
    {
      title: "Decision-Grade Accuracy",
      desc: "Calibrated accuracy (95-98%) across dynamic lighting, store layouts, and high-traffic periods.",
      icon: <Eye className="text-brand-primary" size={32} />,
      stat: "98.7%",
      statLabel: "QA Verified Accuracy"
    },
    {
      title: "Integrity Protocol",
      desc: "Frame-by-frame human-in-the-loop validation ensures that every data point is auditable and trusted.",
      icon: <Shield className="text-brand-accent" size={32} />,
      stat: "100%",
      statLabel: "Event Auditability"
    },
    {
      title: "Demographic Logic",
      desc: "Beyond counting: filter staff from customers and identify age, gender, and group size patterns.",
      icon: <Brain className="text-brand-secondary" size={32} />,
      stat: "Live",
      statLabel: "Segmentation active"
    }
  ];

  return (
    <div className="pt-20 bg-brand-navy">
      {/* Hero */}
      <section className="relative py-40 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#6366F1_2px,transparent_2px)] bg-[size:30px_30px]" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-primary/5 blur-[120px] rounded-full" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="font-display text-6xl md:text-8xl font-bold mb-10 tracking-tight leading-[0.9] text-white">
              Counting people <br />
              <span className="text-brand-primary italic">isn't intelligence.</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto leading-relaxed font-medium mb-4">
              <span className="text-white">Vision AI</span> watches movement, dwell, intent and friction — anonymously, on existing cameras.
            </p>
            <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto leading-relaxed font-medium">
              <span className="text-white">Agentic AI</span> turns it into the action a store manager can take before lunch.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tech Breakdown Grid */}
      <section className="py-32 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {techStack.map((tech, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="p-10 bg-white/[0.02] border border-white/5 rounded-[32px] hover:border-brand-cyan/30 transition-all duration-500 group"
              >
                <div className="mb-10 w-16 h-16 bg-brand-cyan/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  {tech.icon}
                </div>
                <h3 className="font-display text-2xl font-bold mb-6">{tech.title}</h3>
                <p className="text-slate-400 leading-relaxed mb-10">{tech.desc}</p>
                <div className="pt-8 border-t border-white/5">
                  <p className="text-2xl font-display font-bold text-brand-cyan mb-1">{tech.stat}</p>
                  <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">{tech.statLabel}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Deep Intelligence Grid */}
      <section className="py-40 bg-brand-navy">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-24">
             <p className="text-brand-accent text-[10px] font-black uppercase tracking-[0.4em] mb-8">What we measure</p>
             <h2 className="font-display text-5xl md:text-7xl font-bold mb-10 italic text-white">Six signals. <br /> <span className="text-brand-accent">Zero guesswork.</span></h2>
             <p className="text-xl text-slate-400 max-w-2xl font-medium leading-relaxed">
               These are the layers we watch on every floor. Each one is calibrated, audited, and tied to a decision someone in your business already needs to make this week.
             </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { 
                title: "Trusted Conversion", 
                desc: "Accurate traffic enables real sales conversion measurement. Moving from basic footfall to decision-grade revenue signals.",
                metric: "Identity Corrected",
                accent: "text-brand-primary"
              },
              { 
                title: "Staffing Optimisation", 
                desc: "Align your actual team presence to customer demand peaks. Moving beyond basic scheduling into demand-sync operations.",
                metric: "Operational Sync",
                accent: "text-brand-accent"
              },
              { 
                title: "Queue Visibility", 
                desc: "Identify and act on service bottlenecks in real time. Frame-by-frame visibility into the checkout and service journey.",
                metric: "Real-time Flow",
                accent: "text-brand-secondary"
              },
              { 
                title: "Store Benchmarking", 
                desc: "Compare performance objectively across different store formats, brands, and regions within a single source of truth.",
                metric: "Fleet Intelligence",
                accent: "text-white"
              },
              { 
                title: "Operational Alerts", 
                desc: "Detect anomalies, surges, and missed opportunities automatically. Providing store teams with proactive guidance.",
                metric: "Agentic Alerts",
                accent: "text-brand-primary"
              },
              { 
                title: "Demographic Logic", 
                desc: "Filter staff and minors from core data. Understand age, gender, and group behavior patterns natively.",
                metric: "Pure Data",
                accent: "text-brand-accent"
              }
            ].map((layer, i) => (
              <div key={i} className="p-10 bg-white/[0.02] border border-white/5 rounded-[48px] hover:bg-white/[0.05] hover:border-white/10 transition-all group flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-8">
                    <h3 className="text-2xl font-display font-bold italic text-white group-hover:text-brand-primary transition-colors">{layer.title}</h3>
                  </div>
                  <p className="text-slate-400 font-medium leading-relaxed text-sm mb-10">{layer.desc}</p>
                </div>
                <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                  <span className={`text-[10px] font-black uppercase tracking-widest ${layer.accent}`}>{layer.metric}</span>
                  <div className="w-1 h-1 rounded-full bg-slate-800" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Competitive Advantage Section */}
      <section className="py-40 border-t border-white/5 bg-brand-navy">
        <div className="max-w-7xl mx-auto px-6">
           <div className="text-center mb-24">
              <p className="text-brand-cyan text-[10px] font-black uppercase tracking-[0.4em] mb-8">The honest comparison</p>
              <h2 className="font-display text-5xl md:text-7xl font-bold italic text-white">What you get <br /><span className="text-brand-cyan">that they don't.</span></h2>
           </div>

           <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                 <thead>
                    <tr className="border-b border-white/10">
                       <th className="py-6 px-4 text-[10px] font-black text-slate-500 uppercase tracking-widest">Capabilities</th>
                       <th className="py-6 px-4 text-[10px] font-black text-slate-500 uppercase tracking-widest">Conventional Counters</th>
                       <th className="py-6 px-4 text-[10px] font-black text-slate-500 uppercase tracking-widest">Native Smart Camera</th>
                       <th className="py-6 px-4 text-[10px] font-black text-brand-cyan uppercase tracking-widest">EVERYANGLE</th>
                    </tr>
                 </thead>
                 <tbody className="text-white font-medium">
                    {[
                       { cap: "Accuracy in Live Environments", c: "High (93-98%)", n: "Variable (60-80%)", e: "High (95-98%)" },
                       { cap: "Staff/Minor Filtering", c: "No", n: "No", e: "Yes" },
                       { cap: "Age/Gender Demographic Data", c: "No", n: "No", e: "Yes" },
                       { cap: "Group Size Detection", c: "No", n: "No", e: "Yes" },
                       { cap: "POS-integrated Conversion", c: "No", n: "No", e: "Yes" },
                       { cap: "Multi-Zone In-Store Analysis", c: "No", n: "No", e: "Yes" },
                       { cap: "Infrastructure Cost", c: "High (New Hardware)", n: "Low", e: "Medium (Uses Existing)" }
                    ].map((row, i) => (
                       <tr key={i} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                          <td className="py-6 px-4 text-sm">{row.cap}</td>
                          <td className="py-6 px-4 text-xs text-slate-500">{row.c}</td>
                          <td className="py-6 px-4 text-xs text-slate-500">{row.n}</td>
                          <td className="py-6 px-4 text-xs text-brand-cyan font-bold">{row.e}</td>
                       </tr>
                    ))}
                 </tbody>
              </table>
           </div>
        </div>
      </section>

      {/* Infrastructure Section */}
      <section className="py-40">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-24 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative aspect-square bg-white/[0.02] rounded-[40px] border border-white/10 overflow-hidden flex items-center justify-center shadow-2xl shadow-brand-primary/5">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-primary/50 to-transparent" />
              <div className="p-16 w-full text-center">
                 <div className="relative inline-block mb-10">
                    <Cpu size={80} className="text-brand-primary opacity-20" />
                    <motion.div 
                      animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }}
                      transition={{ duration: 3, repeat: Infinity }}
                      className="absolute inset-0 flex items-center justify-center"
                    >
                      <Zap size={40} className="text-brand-primary" />
                    </motion.div>
                 </div>
                 <h4 className="text-sm font-mono text-brand-primary uppercase tracking-[0.5em] mb-4">Smart Infrastructure</h4>
                 <p className="text-slate-400 font-medium">Processing 30+ streams natively per unit. Zero bandwidth wastage. Maximum privacy.</p>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-8 italic">Invisible Complexity. <br /> Visible Impact.</h2>
            <p className="text-lg text-slate-300 mb-8 leading-relaxed font-medium">
              Legacy footfall counters are 1D. They see a crossing line. EVERYANGLE is 3D. We see skeletal frames, interaction zones, and dwell behavior.
            </p>
            <ul className="space-y-6">
              {[
                "Differentiate staff from customers instantly",
                "Recognize family/group dynamics for accurate intent",
                "Track complex dwell behavior across multiple zones",
                "Full integration with existing CCTV hardware"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-slate-400 font-medium font-sans">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Resources */}
      <ResourcesSection />

      {/* CTA section */}
      <section className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
            <h2 className="font-display text-4xl md:text-6xl font-bold mb-10 italic">Ready for <span className="text-brand-primary">Precision?</span></h2>
            <Link to="/contact" className="inline-flex bg-brand-primary text-white font-display text-lg font-bold px-12 py-5 rounded-2xl hover:bg-white hover:text-brand-navy transition-all duration-500 shadow-2xl shadow-brand-primary/40">
              Request Platform Deep Dive
            </Link>
        </div>
      </section>
    </div>
  );
}

/**
 * ResourcesSection — scaffolded library of explainer briefs, whitepapers and webinars.
 *
 * To add a real resource: replace the matching object in the RESOURCES array below.
 * - Set `status` to 'available' (was 'coming-soon')
 * - Set `href` to the file path (e.g. /resources/queue-risk.pdf) or external URL
 * - Update `summary` and `meta` if needed
 *
 * The card UI flips automatically based on status.
 */
type ResourceStatus = 'available' | 'coming-soon';
type Resource = {
  category: 'Brief' | 'Whitepaper' | 'Webinar';
  title: string;
  summary: string;
  meta: string;
  status: ResourceStatus;
  href?: string;
};

const RESOURCES: Resource[] = [
  {
    category: 'Brief',
    title: 'Queue Risk',
    summary: 'How EVERYANGLE detects queue formation 90 seconds before customers walk — and the alert pattern that recovers up to 20% of abandoned baskets.',
    meta: '6 min read · PDF',
    status: 'coming-soon',
  },
  {
    category: 'Brief',
    title: 'Labor Sync',
    summary: 'Aligning rosters to measured demand instead of historical schedules. The integration playbook for UKG, Quinyx and in-house WFM systems.',
    meta: '8 min read · PDF',
    status: 'coming-soon',
  },
  {
    category: 'Brief',
    title: 'Vision AI for retail',
    summary: 'How skeletal-frame anonymization works, why it stays GDPR-safe, and where it differs from facial recognition. Aimed at IT and DPO teams.',
    meta: '7 min read · PDF',
    status: 'coming-soon',
  },
  {
    category: 'Whitepaper',
    title: 'The intelligence gap in physical retail',
    summary: 'A field paper on why store managers still operate without the observability digital teams have had for fifteen years — and what closing the gap unlocks.',
    meta: '24 pages · PDF',
    status: 'coming-soon',
  },
  {
    category: 'Whitepaper',
    title: 'Cisco Meraki + EVERYANGLE deployment guide',
    summary: 'Reference architecture for activating EVERYANGLE on existing Cisco Meraki MV cameras across an enterprise retail estate.',
    meta: '18 pages · PDF',
    status: 'coming-soon',
  },
  {
    category: 'Webinar',
    title: 'Pilot in 14 days: an operator playbook',
    summary: 'A 30-minute walkthrough of how a typical EVERYANGLE pilot unfolds — set-up, data review, and rollout decision.',
    meta: '30 min · On demand',
    status: 'coming-soon',
  },
];

function ResourcesSection() {
  return (
    <section id="resources" className="py-32 border-t border-white/5 bg-brand-navy">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 max-w-3xl">
          <p className="text-brand-primary text-[10px] font-black uppercase tracking-[0.4em] mb-8">Resources</p>
          <h2 className="font-display text-5xl md:text-7xl font-bold italic text-white leading-[0.9]">
            The library, <br />
            <span className="text-brand-primary">in plain language.</span>
          </h2>
          <p className="text-lg text-slate-400 font-medium leading-relaxed mt-8">
            Briefs, whitepapers and webinars from the EVERYANGLE field team. New material added regularly.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {RESOURCES.map((r, i) => {
            const isReady = r.status === 'available';
            const Wrapper: ElementType = isReady && r.href ? 'a' : 'div';
            const wrapperProps = isReady && r.href ? { href: r.href, target: r.href.startsWith('http') ? '_blank' : undefined, rel: 'noopener noreferrer' } : {};
            return (
              <Wrapper
                key={i}
                {...wrapperProps}
                className={`block p-8 bg-white/[0.02] border border-white/5 rounded-[32px] transition-all group ${
                  isReady ? 'hover:bg-white/[0.05] hover:border-brand-primary/40 cursor-pointer' : 'opacity-70'
                }`}
              >
                <div className="flex items-center justify-between mb-6">
                  <span className={`text-[9px] font-black uppercase tracking-[0.3em] px-3 py-1.5 rounded-full ${
                    r.category === 'Brief' ? 'bg-brand-primary/10 text-brand-primary' :
                    r.category === 'Whitepaper' ? 'bg-brand-secondary/10 text-brand-secondary' :
                    'bg-brand-accent/10 text-brand-accent'
                  }`}>
                    {r.category}
                  </span>
                  {!isReady && (
                    <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest">Coming soon</span>
                  )}
                </div>
                <h3 className="font-display text-xl md:text-2xl font-bold italic text-white leading-tight mb-3">
                  {r.title}
                </h3>
                <p className="text-sm text-slate-400 font-medium leading-relaxed mb-6">{r.summary}</p>
                <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                  <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">{r.meta}</span>
                  {isReady ? (
                    <span className="text-[10px] font-bold text-brand-primary uppercase tracking-widest group-hover:translate-x-1 transition-transform">
                      Read →
                    </span>
                  ) : (
                    <Link to="/contact" className="text-[10px] font-bold text-slate-500 hover:text-white uppercase tracking-widest transition-colors">
                      Notify me →
                    </Link>
                  )}
                </div>
              </Wrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
}
