import { motion } from 'motion/react';
import { Camera, Brain, BarChart3, Bot, ArrowRight } from 'lucide-react';

export default function VisionAIFeed() {
  const pipeline = [
    { 
      label: "Harness Legacy", 
      title: "CCTV Infrastructure", 
      desc: "Connect your existing global camera footprint in weeks.",
      icon: <Camera size={24} />,
      color: "text-brand-primary",
      bg: "bg-brand-primary/10"
    },
    { 
      label: "Process Edge", 
      title: "Vision AI Engine", 
      desc: "Anonymized frame-by-frame analysis of human movement.",
      icon: <Brain size={24} />,
      color: "text-brand-secondary",
      bg: "bg-brand-secondary/10"
    },
    { 
      label: "Deliver Logic", 
      title: "Retail Intelligence", 
      desc: "Video converted into behavioural data your team can act on by lunch.",
      icon: <BarChart3 size={24} />,
      color: "text-brand-accent",
      bg: "bg-brand-accent/10"
    },
    { 
      label: "Automate ROI", 
      title: "Agentic Execution", 
      desc: "AI triggers actions to optimize staffing and conversion.",
      icon: <Bot size={24} />,
      color: "text-white",
      bg: "bg-white/10"
    }
  ];

  return (
    <div id="vision-ai-feed" className="w-full bg-brand-navy/50 border border-white/5 rounded-[48px] p-6 md:p-12 relative overflow-hidden group shadow-2xl">
      {/* Background Ambience */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-primary/50 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-brand-accent/20 to-transparent" />
      
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-0">
        {pipeline.map((step, i) => (
          <div key={i} className="relative flex flex-col items-center md:items-start group/step">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              className="w-full h-full p-8 rounded-[36px] hover:bg-white/[0.03] transition-all duration-500 flex flex-col items-center md:items-start text-center md:text-left"
            >
              <div className={`w-16 h-16 ${step.bg} ${step.color} rounded-2xl flex items-center justify-center mb-10 group-hover/step:scale-110 transition-transform duration-500 shadow-xl`}>
                {step.icon}
              </div>
              
              <p className={`text-[10px] font-black uppercase tracking-[0.4em] mb-4 ${step.color} opacity-80`}>{step.label}</p>
              <h4 className="text-xl font-display font-bold text-white mb-4 italic leading-tight">{step.title}</h4>
              <p className="text-xs text-slate-500 font-medium leading-relaxed max-w-[200px] mb-8">{step.desc}</p>
              
              <div className="mt-auto pt-6 border-t border-white/5 w-full flex items-center justify-center md:justify-start gap-4">
                 <span className="text-[8px] font-bold text-slate-700 uppercase tracking-widest">Stage 0{i+1}</span>
                 {i < pipeline.length - 1 && (
                   <ArrowRight size={12} className="text-slate-800 hidden md:block" />
                 )}
              </div>
            </motion.div>

            {/* Visual Connectors for Desktop */}
            {i < pipeline.length - 1 && (
              <div className="hidden md:block absolute top-1/2 right-0 -translate-y-1/2 w-px h-24 bg-gradient-to-b from-transparent via-white/5 to-transparent" />
            )}
          </div>
        ))}
      </div>

      {/* Pipeline Status Indicator */}
      <div className="absolute top-6 right-10 flex items-center gap-4">
         <div className="flex gap-1.5 item-center">
            {[1, 2, 3, 4].map(dot => (
              <div key={dot} className="w-1.5 h-1.5 rounded-full bg-brand-primary opacity-20 animate-pulse" style={{ animationDelay: `${dot * 0.5}s` }} />
            ))}
         </div>
         <span className="text-[9px] font-black text-slate-600 uppercase tracking-[0.3em]">System Signal v4.1</span>
      </div>
    </div>
  );
}
