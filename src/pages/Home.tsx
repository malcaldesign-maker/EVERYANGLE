import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Users, 
  TrendingUp, 
  BarChart3, 
  Clock, 
  Zap, 
  Target, 
  Eye,
  CheckCircle2,
  ChevronRight,
  Brain,
  MessageSquare,
  Shield,
  Download,
  FileText
} from 'lucide-react';
import DashboardCard from '../components/DashboardCard';
import VisionAIFeed from '../components/VisionAIFeed';

export default function Home() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 }
  };

  const features = [
    {
      title: "Store Performance",
      desc: "Integrate entrance and sale data to track conversion rates and staffing efficiency. Aggregate or site-specific views.",
      icon: <TrendingUp className="text-brand-primary" size={24} />,
      metric: "30%",
      metricLabel: "Conversion Lift"
    },
    {
      title: "Speed of Service",
      desc: "Track wait times and queue durations. Optimize layouts to reduce friction and enhance dwell engagement.",
      icon: <Clock className="text-brand-primary" size={24} />,
      metric: "20%",
      metricLabel: "Fewer Walkouts"
    },
    {
      title: "Marketing Impact",
      desc: "Connect promotion dwell time with sales. Finally measure the true ROI of your in-store campaigns.",
      icon: <Target className="text-brand-primary" size={24} />,
      metric: "High",
      metricLabel: "Campaign ROI"
    }
  ];

  const valueProps = [
    {
      title: "Unrivalled Footfall Intelligence",
      content: "Computer vision tracks people entering, offering deep insights into traffic patterns to optimize staffing.",
      bg: "bg-brand-card/50"
    },
    {
      title: "Staff & Minor Identification",
      content: "Our Vision AI distinguishes staff and minors, allowing you to analyze true customer count vs total footfall.",
      bg: "bg-brand-primary/5"
    },
    {
      title: "Staffing & Rostering Efficiency",
      content: "Save money with efficient staffing. Identify peak hours and roster to achieve target wait-times.",
      bg: "bg-brand-card/50"
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section id="hero" className="relative min-h-[90vh] flex flex-col items-center justify-center pt-32 pb-0 overflow-hidden bg-brand-navy">
        {/* Ambient Blurred Backgrounds */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-brand-primary/10 blur-[120px] rounded-full opacity-30 select-none pointer-events-none" />
        
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-brand-secondary text-[10px] font-bold uppercase tracking-[0.3em] mb-10 shadow-[0_0_15px_rgba(168,85,247,0.2)]">
              <Brain size={12} className="text-brand-secondary" />
              EVERYANGLE — AGENTIC INTELLIGENCE FOR PHYSICAL RETAIL
            </div>
            
            <h1 className="font-display text-6xl md:text-9xl font-bold leading-[0.9] mb-10 tracking-tight text-white">
              Every Visit. <br />
              <span className="text-brand-primary italic">Every Insight.</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto mb-16 leading-relaxed font-medium">
              AI-powered journey analytics that reveals <span className="text-violet-400">how shoppers move, engage, and convert </span> in your store.
            </p>

            <div className="flex flex-wrap justify-center gap-6">
              <Link to="/contact" className="bg-brand-primary text-white font-display text-lg font-bold px-12 py-5 rounded-2xl hover:bg-white hover:text-brand-navy transition-all duration-500 shadow-2xl shadow-brand-primary/40">
                Book a Demo
              </Link>
              <Link to="/product" className="border border-white/10 text-white hover:bg-white/5 font-display text-lg font-bold px-12 py-5 rounded-2xl transition-all duration-500 backdrop-blur-sm">
                The Platform Tour
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Cinematic Visual - Taking more space below text */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="relative w-full max-w-6xl mx-auto px-6 pb-20"
        >
          <VisionAIFeed />
        </motion.div>
      </section>

      {/* Logo Strip */}
      <section className="bg-brand-card/30 py-20 border-y border-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6">
           <p className="text-center text-[10px] font-black text-slate-500 uppercase tracking-[0.5em] mb-12">Trusted by Global Retail Leaders</p>
           <motion.div 
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             className="flex flex-wrap justify-center items-center gap-x-16 gap-y-12 opacity-40 grayscale group hover:grayscale-0 transition-all duration-700"
           >
              {["Samsøe Samsøe", "Sleep Number", "Starbucks", "Ulta Beauty", "Foot Locker", "H&M"].map((brand) => (
                <span key={brand} className="text-xl md:text-2xl font-display font-black text-white italic tracking-tighter opacity-60 hover:opacity-100 transition-opacity whitespace-nowrap">
                  {brand}
                </span>
              ))}
           </motion.div>
        </div>
      </section>

      {/* Featured Video Case Study */}
      <section className="py-32 bg-brand-navy border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-20 items-center">
            <div className="lg:col-span-2">
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-8 italic">Vision Intelligence <br /> <span className="text-brand-accent">in Action.</span></h2>
              <p className="text-lg text-slate-400 mb-8 leading-relaxed font-medium">
                See how Everyangle transforms the physical store into a data-rich environment, providing insights that were previously only available to e-commerce.
              </p>
              <div className="flex items-center gap-4 p-6 bg-white/[0.02] border border-white/5 rounded-2xl">
                 <div className="w-10 h-10 bg-brand-accent/20 rounded-full flex items-center justify-center text-brand-accent">
                    <CheckCircle2 size={20} />
                 </div>
                 <div>
                    <p className="text-sm font-bold text-white uppercase tracking-wider">Case Study Featured</p>
                    <p className="text-xs text-slate-500">Retail Operational Excellence</p>
                 </div>
              </div>
            </div>
            <div className="lg:col-span-3">
              <div className="relative aspect-video rounded-[40px] overflow-hidden border border-white/10 shadow-2xl group">
                <iframe 
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/YM8VvbejXbA?autoplay=0&mute=0&controls=1&rel=0" 
                  title="Everyangle Case Study"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Descriptions */}
      <section className="py-32 bg-brand-navy">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col gap-40">
            {/* Row 1: Vision Intelligence */}
            <div id="section-understand">
              <div className="grid lg:grid-cols-2 gap-20 items-center mb-20">
                <motion.div {...fadeInUp}>
                  <p className="text-brand-accent text-[10px] font-black uppercase tracking-[0.4em] mb-8">Measure What Matters</p>
                  <h2 className="font-display text-5xl md:text-7xl font-bold mb-10 italic text-white flex flex-col gap-2">
                    Vision Intelligence for 
                    <span className="text-brand-accent">the physical world.</span>
                  </h2>
                  <div className="space-y-6 text-slate-400 leading-relaxed font-medium">
                    <p>Understand the customer journey with absolute clarity. From street-to-store conversion to in-aisle engagement, EVERYANGLE provides the deep visibility required to run a modern retail business.</p>
                  </div>
                </motion.div>
                <div className="space-y-4">
                  {['Entrance Analytics', 'Path-to-Purchase Tracking', 'Dwell & Engagement Zones', 'Queue Friction Points'].map((item) => (
                    <div key={item} className="flex items-center gap-4 bg-white/[0.02] border border-white/5 p-4 rounded-2xl group hover:border-brand-accent transition-colors">
                      <div className="w-8 h-8 rounded-full bg-brand-accent/20 flex items-center justify-center text-brand-accent">
                        <CheckCircle2 size={14} />
                      </div>
                      <span className="text-xs font-bold text-white uppercase tracking-widest leading-none pt-1">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <VisionAIFeed />
              </motion.div>
            </div>

            {/* Row 2: Optimise Operations */}
            <div id="section-optimise" className="grid lg:grid-cols-2 gap-20 items-center">
              <div className="order-2 lg:order-1 aspect-video bg-brand-navy rounded-[40px] border border-white/5 overflow-hidden relative group p-1 w-full">
                 <div className="w-full h-full bg-[#0a0a0f] rounded-[36px] p-8 md:p-12 flex flex-col relative overflow-hidden">
                    {/* Header Info */}
                    <div className="flex justify-between items-start mb-12 relative z-10">
                      <div>
                        <h4 className="text-[10px] font-black text-brand-primary uppercase tracking-[0.4em] mb-2">Operational Sync</h4>
                        <p className="text-xl font-display font-bold text-white">Labor vs. Demand</p>
                      </div>
                      <div className="flex gap-6">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-brand-primary/20 border border-brand-primary" />
                          <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest">Footfall</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-white/20 border-t border-white" />
                          <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest">Staffing</span>
                        </div>
                      </div>
                    </div>

                    {/* Chart Area */}
                    <div className="flex-grow flex items-end gap-1.5 relative mb-8">
                       {/* Time Grid Lines */}
                       <div className="absolute inset-x-0 bottom-0 top-0 flex justify-between pointer-events-none">
                          {[...Array(6)].map((_, i) => (
                            <div key={i} className="w-px h-full bg-white/[0.03]" />
                          ))}
                       </div>

                       {/* Footfall Area Curve */}
                       <svg className="absolute inset-0 w-full h-full opacity-30" preserveAspectRatio="none" viewBox="0 0 100 100">
                         <defs>
                           <linearGradient id="curveGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                             <stop offset="0%" stopColor="#6366F1" stopOpacity="0.8" />
                             <stop offset="100%" stopColor="#6366F1" stopOpacity="0" />
                           </linearGradient>
                         </defs>
                         <path 
                           d="M 0 100 L 0 80 Q 15 70 25 30 Q 35 10 45 40 T 65 20 T 85 60 T 100 70 L 100 100 Z" 
                           fill="url(#curveGrad)" 
                         />
                         <path 
                           d="M 0 80 Q 15 70 25 30 Q 35 10 45 40 T 65 20 T 85 60 T 100 70" 
                           fill="none" 
                           stroke="#6366F1" 
                           strokeWidth="2"
                           strokeLinecap="round"
                         />
                       </svg>

                       {/* Optimized Staffing Steps */}
                       {[0.2, 0.35, 0.8, 0.95, 0.5, 0.85, 0.75, 0.4, 0.3, 0.45, 0.3].map((h, i) => (
                         <motion.div 
                           key={i}
                           initial={{ height: 0 }}
                           whileInView={{ height: `${h * 100}%` }}
                           transition={{ duration: 1, delay: 0.5 + i * 0.05 }}
                           className="flex-1 bg-white/[0.03] border-t border-white/40 relative group/step"
                         >
                            {h > 0.8 && (
                               <motion.div 
                                 animate={{ opacity: [0.3, 1, 0.3] }}
                                 transition={{ duration: 2, repeat: Infinity }}
                                 className="absolute -top-1 md:-top-2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-brand-primary shadow-[0_0_10px_#6366F1]" 
                               />
                            )}
                         </motion.div>
                       ))}
                    </div>

                    {/* X-Axis Labels */}
                    <div className="flex justify-between text-[8px] md:text-[10px] font-mono font-bold text-slate-600 uppercase tracking-tighter">
                       <span>09:00</span>
                       <span>12:00</span>
                       <span>15:00</span>
                       <span>18:00</span>
                       <span>21:00</span>
                    </div>

                    {/* Bottom Alert */}
                    <div className="absolute bottom-4 right-8 left-8 flex justify-between items-center bg-brand-primary/10 border border-brand-primary/20 px-4 py-2 rounded-xl">
                       <div className="flex items-center gap-2">
                          <Zap size={10} className="text-brand-primary" />
                          <span className="text-[8px] font-bold text-brand-primary uppercase tracking-widest">Optimal Coverage Locked</span>
                       </div>
                       <span className="text-[8px] font-mono text-brand-primary/60 uppercase">System Active</span>
                    </div>

                    {/* Floating Insight */}
                    <motion.div 
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1.5 }}
                      className="absolute top-1/2 right-12 bg-white/10 backdrop-blur-xl border border-white/20 p-4 rounded-2xl shadow-2xl max-w-[160px] hidden md:block"
                    >
                       <p className="text-[9px] font-black text-brand-secondary uppercase tracking-wider mb-2 flex items-center gap-1">
                          <Brain size={12} /> Insight
                       </p>
                       <p className="text-[10px] text-white font-medium leading-tight">
                          Peak detected at 14:00. <span className="text-brand-primary">Roster adjusted</span> (+2 staff).
                       </p>
                    </motion.div>
                 </div>
              </div>
              <motion.div {...fadeInUp} className="order-1 lg:order-2">
                 <p className="text-brand-primary text-[10px] font-black uppercase tracking-[0.4em] mb-8">Integrated Operations</p>
                 <h2 className="font-display text-5xl md:text-7xl font-bold mb-10 italic">Intelligence that <br /> <span className="text-brand-primary">Syncs your team.</span></h2>
                 <p className="text-lg text-slate-400 mb-10 leading-relaxed font-medium">Aligning labor spending with actual customer demand. EVERYANGLE integrates directly with your rostering systems to ensure your team is always in the right place at the right time.</p>
                 <Link to="/product" className="inline-flex items-center gap-4 text-xs font-bold text-white uppercase tracking-[0.3em] group">
                    Dynamic Scheduling <ArrowRight size={16} className="text-brand-primary group-hover:translate-x-2 transition-transform" />
                 </Link>
              </motion.div>
            </div>

            {/* Row 3: Economics of Infrastructure (Technical Bento) */}
            <div className="grid lg:grid-cols-2 gap-24 items-center">
               <motion.div {...fadeInUp}>
                  <p className="text-brand-primary text-[10px] font-black uppercase tracking-[0.4em] mb-12">System Efficiency</p>
                  <h2 className="font-display text-5xl md:text-7xl font-bold mb-16 italic text-white leading-[0.85]">Value without <br /> <span className="text-brand-primary">new hardware.</span></h2>
                  
                  <div className="space-y-10">
                     {[
                        { title: "No CapEx", desc: "Instantly activate analytics on cameras you already own. Zero hardware friction.", meta: "Asset Reuse" },
                        { title: "Rapid ROI", desc: "Sunk costs become new value across your entire loss prevention footprint.", meta: "Cost Recovery" },
                        { title: "Fast Activation", desc: "Secure cloud activation means you are up and running in days, not months.", meta: "Deployment" },
                        { title: "Enterprise Scalable", desc: "Optimized for 1,000+ site estates with unified global reporting.", meta: "SaaS V4" }
                     ].map((item, i) => (
                        <div key={i} className="flex gap-8 group">
                           <div className="w-px h-16 bg-white/5 group-hover:bg-brand-primary transition-colors duration-500" />
                           <div className="py-1">
                              <div className="flex items-center gap-3 mb-2">
                                 <h4 className="text-white text-sm font-bold uppercase tracking-widest">{item.title}</h4>
                                 <span className="text-[8px] font-black text-slate-700 uppercase tracking-widest">{item.meta}</span>
                              </div>
                              <p className="text-slate-500 text-xs font-medium leading-relaxed max-w-sm group-hover:text-slate-400 transition-colors">{item.desc}</p>
                           </div>
                        </div>
                     ))}
                  </div>
               </motion.div>

               <div className="relative">
                  <div className="grid grid-cols-2 gap-4">
                     {/* Hero Metric - 26x ROI */}
                     <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="col-span-2 bg-brand-primary border border-white/10 rounded-[48px] p-12 text-center relative overflow-hidden group/hero shadow-2xl shadow-brand-primary/20"
                     >
                        <div className="absolute top-0 right-0 p-8 opacity-20">
                           <TrendingUp size={120} className="text-white group-hover/hero:scale-110 transition-transform duration-700" />
                        </div>
                        <div className="relative z-10">
                           <p className="text-[10px] font-black text-white/50 uppercase tracking-[0.5em] mb-4">Master Metric</p>
                           <p className="text-8xl md:text-9xl font-display font-bold italic text-white mb-4 tracking-tighter">26x</p>
                           <p className="text-xl font-display font-bold text-white mb-2 italic">Return on Investment</p>
                           <p className="text-[10px] font-black text-white/40 uppercase tracking-widest">Documented Global Retail Benchmark</p>
                        </div>
                     </motion.div>

                     {/* Sub Metrics */}
                     {[
                        { val: "+4%", label: "Revenue Growth", sub: "Rollout Insight", icon: <BarChart3 size={20} />, color: "bg-brand-card" },
                        { val: "-30%", label: "Hardware Costs", sub: "Legacy Asset Use", icon: <Target size={20} />, color: "bg-white/[0.03]" },
                        { val: "-3.8%", label: "Labour Costs", sub: "Staffing Sync", icon: <Clock size={20} />, color: "bg-brand-primary/10" }
                     ].map((m, i) => (
                        <motion.div 
                          key={i}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2 + i * 0.1 }}
                          className={`${m.color} border border-white/5 rounded-[36px] p-8 flex flex-col justify-between hover:border-white/10 transition-all group/sub ${i === 2 ? 'col-span-2' : ''}`}
                        >
                           <div className="flex justify-between items-start mb-10">
                              <div className="p-3 bg-white/5 rounded-2xl text-slate-400 group-hover/sub:text-white transition-colors">
                                 {m.icon}
                              </div>
                              <span className="text-[8px] font-black text-slate-600 uppercase tracking-widest">{m.sub}</span>
                           </div>
                           <div>
                              <p className="text-4xl font-display font-bold text-white italic mb-1 tracking-tight">{m.val}</p>
                              <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{m.label}</p>
                           </div>
                        </motion.div>
                     ))}
                  </div>

                  {/* Aesthetic Connector Line */}
                  <div className="absolute -left-12 top-1/2 bottom-0 w-px bg-gradient-to-b from-brand-primary/50 to-transparent hidden xl:block" />
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Message Section */}
      <section className="py-40 bg-brand-card/10 border-y border-white/5 relative overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-primary/20 to-transparent" />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <MessageSquare size={40} className="text-brand-primary/40 mx-auto mb-12" />
              <h2 className="font-display text-4xl md:text-6xl font-bold mb-12 italic text-white">A note from <span className="text-brand-primary">our founder.</span></h2>
              <div className="space-y-8 text-xl md:text-2xl text-slate-300 italic font-medium leading-relaxed mb-16">
                 <p>"EVERYANGLE was created from a belief that physical retail has been underserved by technology for too long."</p>
                 <p>"Online teams can see almost everything. Store teams, despite managing some of the most important customer moments, have often had to rely on fragmented reports or binary footfall counts."</p>
                 <p>"We built EVERYANGLE to close that gap — moving from store blindness to store signal."</p>
              </div>
              
              <div className="pt-10 border-t border-white/10 inline-block text-center">
                 <div className="font-display text-2xl font-bold text-white mb-1 italic">David Owens</div>
                 <div className="text-[10px] font-black text-brand-secondary uppercase tracking-[0.4em]">Founder & CEO, EVERYANGLE</div>
              </div>
            </motion.div>
        </div>
      </section>

      {/* Operational Unlocks (New Section from Pitch Deck) */}
      <section className="py-40 bg-brand-navy relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-primary/5 blur-[150px] rounded-full pointer-events-none opacity-40" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
           <div className="mb-24 text-center lg:text-left">
              <p className="text-brand-accent text-[10px] font-black uppercase tracking-[0.4em] mb-8">What this Unlocks</p>
              <h2 className="font-display text-5xl md:text-7xl font-bold mb-10 italic text-white leading-[0.9]">Operational <br /> <span className="text-brand-primary">Intelligence.</span></h2>
              <p className="text-xl text-slate-400 max-w-2xl font-medium leading-relaxed mx-auto lg:ml-0 lg:mr-auto">
                 Accurate, trusted data transforms how store teams operate — moving from reactive fire-fighting to proactive, decision-grade execution.
              </p>
           </div>

           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                 { title: "Trusted Conversion", desc: "Accurate traffic enables real sales conversion measurement. No more guessing footfall.", icon: <TrendingUp size={24} />, meta: "Sales Performance" },
                 { title: "Staffing Optimisation", desc: "Align your roster to actual customer demand peaks, not just historical schedules.", icon: <Users size={24} />, meta: "Labor Sync" },
                 { title: "Queue Visibility", desc: "Identify and act on service bottlenecks in real time before they impact CSAT.", icon: <Clock size={24} />, meta: "Friction Control" },
                 { title: "Store Benchmarking", desc: "Compare objective data across brands, formats, and regions with one version of truth.", icon: <Target size={24} />, meta: "Fleet Strategy" },
                 { title: "Operational Alerts", desc: "Detect anomalies, traffic surges, and missed opportunities as they happen.", icon: <Zap size={24} />, meta: "Real-Time Action" },
                 { title: "Privacy Protocol", desc: "Decision-grade insights delivered with absolute GDPR and privacy compliance.", icon: <Shield size={24} />, meta: "Data Integrity" }
              ].map((unlock, i) => (
                 <motion.div 
                   key={i}
                   initial={{ opacity: 0, scale: 0.95 }}
                   whileInView={{ opacity: 1, scale: 1 }}
                   transition={{ delay: i * 0.1 }}
                   className="bg-white/[0.02] border border-white/5 p-10 rounded-[48px] hover:bg-white/[0.05] hover:border-white/10 transition-all group/unlock"
                 >
                    <div className="w-14 h-14 bg-brand-primary/10 rounded-2xl flex items-center justify-center text-brand-primary mb-10 group-hover/unlock:scale-110 transition-transform">
                       {unlock.icon}
                    </div>
                    <div className="flex items-center gap-3 mb-4">
                       <h3 className="text-2xl font-display font-bold italic text-white">{unlock.title}</h3>
                    </div>
                    <p className="text-slate-400 font-medium leading-relaxed mb-6 text-sm">{unlock.desc}</p>
                    <span className="text-[10px] font-black text-brand-accent uppercase tracking-widest bg-brand-accent/10 px-4 py-2 rounded-full">{unlock.meta}</span>
                 </motion.div>
              ))}
           </div>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="py-20 bg-gradient-to-b from-brand-navy to-brand-card">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-8">
            {features.map((f, i) => (
              <motion.div
                key={i}
                {...fadeInUp}
                transition={{ delay: i * 0.2 }}
                className="bg-brand-navy border border-brand-border p-10 rounded-3xl group hover:border-brand-primary/50 hover:bg-brand-primary/5 transition-all duration-500"
              >
                <div className="w-14 h-14 bg-brand-primary/10 rounded-2xl flex items-center justify-center mb-10 group-hover:scale-110 transition-transform">
                  {f.icon}
                </div>
                <h3 className="font-display text-2xl font-bold mb-6">{f.title}</h3>
                <p className="text-slate-400 mb-10 leading-relaxed text-lg">{f.desc}</p>
                <div className="pt-8 border-t border-brand-border/50 flex items-center justify-between">
                  <div>
                    <p className="text-3xl font-display font-bold text-brand-primary mb-1">{f.metric}</p>
                    <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">{f.metricLabel}</p>
                  </div>
                  <ChevronRight size={18} className="text-slate-500" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Book a Demo CTA */}
      <section className="py-20 bg-brand-navy">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <p className="text-brand-primary text-[10px] font-black uppercase tracking-[0.4em] mb-6">Knowledge Base</p>
            <h2 className="font-display text-4xl md:text-6xl font-bold italic text-white leading-tight">Insight <br /><span className="text-brand-primary">Repository.</span></h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "2024 Retail Report", size: "12.4 MB", type: "PDF", tag: "Global Trends" },
              { title: "Hardware Integration", size: "4.8 MB", type: "PDF", tag: "Technical Guide" },
              { title: "Fashion ROI Pack", size: "8.2 MB", type: "ZIP", tag: "Case Studies" }
            ].map((doc, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="bg-white/[0.02] border border-white/5 rounded-3xl p-8 group hover:border-brand-primary transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-12 h-12 bg-brand-primary/10 rounded-xl flex items-center justify-center text-brand-primary">
                      <FileText size={20} />
                    </div>
                    <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest">{doc.size}</span>
                  </div>
                  <p className="text-[10px] font-black text-brand-accent uppercase tracking-widest mb-3">{doc.tag}</p>
                  <h3 className="text-xl font-bold text-white mb-6 pr-10">{doc.title}</h3>
                </div>
                <Link to="/contact" className="flex items-center gap-3 text-[10px] font-bold text-white uppercase tracking-widest group-hover:text-brand-primary transition-colors">
                  Request Download <Download size={14} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Book a Demo CTA */}
      <section className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="bg-brand-navy border border-brand-primary/20 p-12 md:p-20 rounded-[40px] text-center shadow-2xl glow-primary">
            <h2 className="font-display text-4xl md:text-6xl font-bold mb-10 max-w-3xl mx-auto">
              Ready to transform your <span className="text-brand-accent">retail floor?</span>
            </h2>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/contact" className="bg-brand-primary text-white font-display text-xl font-bold px-12 py-6 rounded-2xl hover:bg-white hover:text-brand-navy hover:scale-105 transition-all duration-300">
                Book a Demo Today
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
