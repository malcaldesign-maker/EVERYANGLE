import { motion } from 'motion/react';

export default function DashboardCard() {
  const metrics = [
    { label: 'Store Traffic', value: '1,248', trend: '+12%', isPositive: true },
    { label: 'Conversion Rate', value: '18.4%', trend: '+2.1%', isPositive: true },
    { label: 'Avg. Queue Time', value: '2m 14s', trend: '+45s', isPositive: false },
  ];

  const sparklineBars = [0.2, 0.5, 0.3, 0.8, 0.4, 0.9, 0.6, 0.4, 1.0];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      id="dashboard-card"
      className="card-bg bg-brand-card/90 border border-brand-border rounded-xl p-6 shadow-2xl glow-primary backdrop-blur-sm max-w-[340px] w-full"
    >
      <div className="flex justify-between items-center mb-6 border-b border-brand-border pb-3">
        <span className="font-sans text-[10px] text-slate-400 uppercase tracking-[0.2em] font-semibold text-white/50">Live Intelligence</span>
        <div className="w-2 h-2 rounded-full bg-brand-primary animate-pulse shadow-[0_0_8px_#6366F1]" />
      </div>

      <div className="space-y-6">
        {metrics.map((metric, index) => (
          <div key={index} className={`flex justify-between items-end ${index !== metrics.length - 1 ? 'border-b border-brand-border/40 pb-4' : ''}`}>
            <div>
              <p className="font-sans text-xs text-slate-400 mb-1">{metric.label}</p>
              <p className="font-display text-2xl font-semibold text-white">{metric.value}</p>
            </div>
            <div className="text-right">
              <span className={`font-sans text-[11px] font-semibold ${metric.isPositive ? 'text-brand-accent' : 'text-orange-400'}`}>
                {metric.trend}
              </span>
            </div>
          </div>
        ))}

        <div className="sparkline-height flex items-end gap-1.5 w-full pt-4 border-t border-brand-border/40">
          {sparklineBars.map((height, i) => (
            <motion.div
              key={i}
              initial={{ height: 0 }}
              animate={{ height: `${height * 100}%` }}
              transition={{ duration: 1, delay: 1 + i * 0.1 }}
              className={`flex-1 rounded-t-sm transition-colors ${i === sparklineBars.length - 1 ? 'bg-brand-primary' : 'bg-brand-primary/20'}`}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}
