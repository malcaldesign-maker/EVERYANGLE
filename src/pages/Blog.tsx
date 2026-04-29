import { motion } from 'motion/react';
import { Calendar, User, ArrowRight, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Blog() {
  const posts = [
    {
      id: 1,
      title: "The Rise of Agentic AI in Physical Spaces",
      excerpt: "How autonomous agents are moving from chatbots to physical retail environments.",
      author: "David Campbell",
      date: "Oct 12, 2026",
      category: "Vision AI",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: 2,
      title: "Privacy by Design: Computer Vision in 2026",
      excerpt: "Deep dive into anonymization protocols and why skeletal tracking is the gold standard.",
      author: "Benny Bullock",
      date: "Oct 05, 2026",
      category: "Security",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc48?q=80&w=2071&auto=format&fit=crop"
    },
    {
      id: 3,
      title: "Retail Journey: From Arrival to Conversion",
      excerpt: "Analyzing the 5 critical touchpoints where Vision AI identifies lost revenue.",
      author: "Malachy Gormley",
      date: "Sep 28, 2026",
      category: "Case Study",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop"
    }
  ];

  return (
    <div className="pt-20 bg-brand-navy min-h-screen">
      <section className="py-32 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(0,229,200,0.05),transparent_70%)] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-24"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-brand-cyan text-[10px] font-bold uppercase tracking-[0.3em] mb-10">
              <BookOpen size={12} />
              Insights & Intelligence
            </div>
            <h1 className="font-display text-7xl md:text-9xl font-bold mb-10 tracking-tight leading-none italic text-white">
              The <span className="text-brand-cyan">Field Notes.</span>
            </h1>
          </motion.div>

          {/* Featured Post */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-32 group cursor-pointer"
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center bg-white/[0.02] border border-white/5 rounded-[60px] overflow-hidden p-4 md:p-8 hover:bg-white/[0.04] transition-all duration-700">
               <div className="aspect-[16/10] rounded-[40px] overflow-hidden border border-white/5 relative">
                  <img 
                    src={posts[0].image} 
                    alt={posts[0].title} 
                    className="w-full h-full object-cover brightness-50 group-hover:brightness-90 group-hover:scale-105 transition-all duration-1000" 
                  />
                  <div className="absolute top-8 left-8">
                    <span className="px-6 py-3 bg-brand-cyan text-brand-navy text-[10px] font-black uppercase tracking-widest rounded-full shadow-xl">
                      Featured Intelligence
                    </span>
                  </div>
               </div>
               <div className="p-8 lg:p-12">
                  <div className="flex items-center gap-6 text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-8">
                    <span>{posts[0].date}</span>
                    <span className="w-1 h-1 bg-slate-700 rounded-full" />
                    <span>{posts[0].author}</span>
                  </div>
                  <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-8 italic leading-tight group-hover:text-brand-cyan transition-colors">
                    {posts[0].title}
                  </h2>
                  <p className="text-xl text-slate-400 font-medium leading-relaxed mb-12">
                    {posts[0].excerpt}
                  </p>
                  <div className="inline-flex items-center gap-3 text-brand-cyan font-bold uppercase tracking-widest text-xs group-hover:gap-6 transition-all">
                    Read the Full Paper <ArrowRight size={18} />
                  </div>
               </div>
            </div>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {posts.slice(1).map((post, i) => (
              <motion.article 
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="aspect-[16/10] bg-white/5 rounded-[40px] overflow-hidden mb-8 border border-white/5 relative">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover brightness-50 group-hover:brightness-75 group-hover:scale-105 transition-all duration-700" 
                  />
                  <div className="absolute top-6 left-6">
                    <span className="px-4 py-2 bg-brand-navy/90 backdrop-blur-md rounded-full text-[10px] font-bold text-brand-cyan uppercase tracking-widest border border-white/10">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="px-2">
                  <div className="flex items-center gap-6 text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-4">
                    <div className="flex items-center gap-2">
                      <Calendar size={12} />
                      {post.date}
                    </div>
                    <div className="flex items-center gap-2">
                      <User size={12} />
                      {post.author}
                    </div>
                  </div>
                  
                  <h2 className="text-3xl font-display font-bold text-white mb-4 group-hover:text-brand-cyan transition-colors leading-tight">
                    {post.title}
                  </h2>
                  <p className="text-slate-400 font-medium leading-relaxed mb-8">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center gap-2 text-brand-cyan font-bold uppercase tracking-widest text-[10px] group-hover:gap-4 transition-all">
                    Read Article <ArrowRight size={14} />
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
