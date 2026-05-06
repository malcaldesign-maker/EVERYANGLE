import { motion } from 'motion/react';
import { Users, LayoutGrid, Clock, TrendingUp, ArrowRight, ShieldCheck, Zap, Network, BarChart3 } from 'lucide-react';
import { useMeta } from '../hooks/useMeta';

export default function Product() {
  useMeta({
    title: 'Platform — EVERYANGLE',
    description:
      'A single enterprise platform that turns existing global camera footprints into decision-grade retail intelligence: traffic, conversion, queues, and zone insight.',
  });
  const modules = [
    {
      title: "Traffic & Arrivals",
      desc: "Forget the turnstile. Accurate footfall by hour and by zone — minus staff, minus minors, minus the noise.",
      icon: <Users size={24} />,
      color: "from-brand-primary/20 to-brand-primary/5"
    },
    {
      title: "Conversion & Store Performance",
      desc: "Footfall × POS = real conversion. No more dividing receipts by a guess and calling it a number.",
      icon: <BarChart3 size={24} />,
      color: "from-brand-secondary/20 to-brand-secondary/5"
    },
    {
      title: "Queue & Service Pressure",
      desc: "We see queues forming a minute before anyone walks. Floor managers get the alert. Tills open. Customers don't leave.",
      icon: <Clock size={24} />,
      color: "from-brand-accent/20 to-brand-accent/5"
    },
    {
      title: "Zone & Layout Insight",
      desc: "Which rack pulls. Which endcap dies. Test a layout in five sites, hold the rest, see the lift in seven days.",
      icon: <LayoutGrid size={24} />,
      color: "from-brand-violet/20 to-brand-violet/5"
    }
  ];

  return (
    <div className="pt-20 bg-brand-navy">
      {/* Platform Hero */}
      <section className="relative py-40 border-b border-white/5 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#6366F1_2px,transparent_2px)] bg-[size:30px_30px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} className="lg:w-1/2">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-primary text-[10px] font-bold uppercase tracking-[0.3em] mb-10">
                Vision AI · Agentic AI · One Platform
              </div>
              <h1 className="font-display text-7xl md:text-9xl font-bold mb-10 tracking-tight leading-[0.9] italic text-white">
                See it. <br />
                <span className="text-brand-primary">Fix it.</span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-400 leading-relaxed font-medium mb-12">
                Four modules. One data layer. Vision AI watches the floor. Agentic AI takes the action. Plugged into the cameras you already own — running in days, not months.
              </p>
              <div className="flex flex-wrap gap-4">
                 <div className="flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-2xl group hover:border-brand-accent transition-colors">
                    <ShieldCheck size={18} className="text-brand-accent" />
                    <span className="text-xs font-bold uppercase tracking-widest text-white/80">GDPR Secure</span>
                 </div>
                 <div className="flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-2xl group hover:border-brand-primary transition-colors">
                    <Zap size={18} className="text-brand-primary" />
                    <span className="text-xs font-bold uppercase tracking-widest text-white/80">Decision-Grade</span>
                 </div>
              </div>
            </motion.div>
            <div className="lg:w-1/2 relative">
               <div className="aspect-square bg-gradient-to-br from-brand-primary/20 to-transparent rounded-[80px] blur-[100px] absolute inset-0 -z-10" />
               <div className="bg-white/[0.02] border border-white/10 rounded-[60px] p-8 md:p-16 backdrop-blur-3xl shadow-2xl glow-primary">
                  <div className="space-y-12">
                     {[
                        { label: "Data Quality", val: "98%+", color: "bg-brand-primary" },
                        { label: "Hardware Support", val: "100%", color: "bg-brand-accent" },
                        { label: "Setup Speed", val: "7 Days", color: "bg-white" }
                     ].map((stat, i) => (
                        <div key={i}>
                           <div className="flex justify-between items-end mb-4">
                              <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em]">{stat.label}</span>
                              <span className="text-2xl font-display font-bold text-white">{stat.val}</span>
                           </div>
                           <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                              <motion.div 
                                 initial={{ width: 0 }}
                                 whileInView={{ width: "100%" }}
                                 transition={{ duration: 2, delay: i * 0.2 }}
                                 className={`h-full ${stat.color}`} 
                              />
                           </div>
                        </div>
                     ))}
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modules Grid */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {modules.map((m, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`p-10 bg-gradient-to-br ${m.color} border border-white/5 rounded-[40px] hover:border-white/20 transition-all duration-500`}
              >
                <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-white mb-10">
                  {m.icon}
                </div>
                <h3 className="text-2xl font-display font-bold mb-6 italic">{m.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-10">{m.desc}</p>
                <button className="text-[10px] font-bold text-white uppercase tracking-widest flex items-center gap-2 group hover:gap-4 transition-all">
                  Module Specs <ArrowRight size={14} className="text-brand-primary" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Infrastructure Section */}
      <section className="py-32 border-t border-white/5 bg-brand-card/10">
        <div className="max-w-7xl mx-auto px-6">
           <div className="grid lg:grid-cols-2 gap-24 items-center">
              <div>
                 <p className="text-brand-primary text-[10px] font-black uppercase tracking-[0.4em] mb-8">Infrastructure</p>
                 <h2 className="font-display text-4xl md:text-6xl font-bold mb-10 italic text-white">No new sensors. <br /> <span className="text-brand-primary">No vendor circus.</span></h2>
                 <p className="text-lg text-slate-400 font-medium mb-12">
                    EVERYANGLE runs on the cameras you already own. We don't ship hardware. We don't run cabling. We don't replace anything. We turn existing infrastructure into a sensor network the rest of your business can use.
                 </p>
                 
                 <div className="space-y-8">
                    {[
                       { title: "Existing Infrastructure First", desc: "EVERYANGLE integrates with the cameras you already have installed. No new hardware required in most deployments." },
                       { title: "Decision-Grade Data Quality", desc: "Calibrated accuracy across lighting conditions, store layouts, and traffic volumes — numbers your team can trust and act on." },
                       { title: "Agentic AI Recommendation", desc: "Autonomous reasoning that translates visual signals into natural language instructions for floor staff and managers." },
                       { title: "Privacy-First by Design", desc: "All processing happens securely. No facial recognition. GDPR-compliant out of the box." }
                    ].map((item, i) => (
                       <div key={i} className="flex gap-6 group">
                          <div className="w-px h-12 bg-white/10 group-hover:bg-brand-primary transition-colors" />
                          <div>
                             <h4 className="text-sm font-bold text-white uppercase tracking-widest mb-2">{item.title}</h4>
                             <p className="text-sm text-slate-500">{item.desc}</p>
                          </div>
                       </div>
                    ))}
                 </div>
              </div>
              <div className="relative">
                 <div className="aspect-square bg-brand-primary/5 rounded-[60px] border border-white/5 flex items-center justify-center p-20 relative shadow-2xl shadow-brand-primary/10">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.1),transparent_70%)]" />
                    <Network size={120} className="text-brand-primary/20 animate-pulse" />
                    
                    {/* Floating Tech Specs */}
                    <div className="absolute top-12 right-12 bg-white/5 backdrop-blur-xl border border-white/10 p-5 rounded-2xl shadow-2xl">
                       <p className="text-[10px] font-black text-brand-accent uppercase tracking-widest mb-2">Deploy</p>
                       <p className="text-xs text-white font-medium">Estate-Wide in Weeks</p>
                    </div>
                    <div className="absolute bottom-12 left-12 bg-white/5 backdrop-blur-xl border border-white/10 p-5 rounded-2xl shadow-2xl">
                       <p className="text-[10px] font-black text-brand-primary uppercase tracking-widest mb-2">Connect</p>
                       <p className="text-xs text-white font-medium">Zero-Disruption Activation</p>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
}
