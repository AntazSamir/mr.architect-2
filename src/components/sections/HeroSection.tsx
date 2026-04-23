import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Cpu, Zap, Bot, Code2, Sparkles, Terminal as TerminalIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLocale } from '@/contexts/LocaleContext';
import { useNavigate } from 'react-router-dom';
import { ScrollAnimation } from '@/components/ui/scroll-animation';

export function HeroSection() {
  const { t } = useLocale();
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen pt-32 pb-20 overflow-hidden flex items-center justify-center bg-[#050505]">
      {/* Background Motion Layer */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Nebula Glows */}
        <div className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] nebula-glow bg-accent/20 rounded-full" />
        <div className="absolute -top-[10%] -right-[10%] w-[50%] h-[50%] nebula-glow bg-primary/20 rounded-full" />
        
        {/* Perspective Grid with Motion */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ duration: 2 }}
          className="absolute inset-0 perspective-grid translate-y-[20%]"
        />

        {/* Central Arching Glow */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[120%] h-[50%] bg-gradient-to-t from-accent/20 via-transparent to-transparent rounded-[100%] blur-3xl opacity-50" />
      </div>

      <div className="container relative z-10 mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-10">
          
          {/* AI Badge */}
          <ScrollAnimation type="fade-up">
            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm text-[11px] font-mono tracking-[0.3em] text-white/70 uppercase">
              <div className="flex gap-1">
                <div className="w-1 h-1 rounded-full bg-primary animate-pulse" />
                <div className="w-1 h-1 rounded-full bg-primary animate-pulse delay-75" />
                <div className="w-1 h-1 rounded-full bg-primary animate-pulse delay-150" />
              </div>
              Digital Architecture Powered by AI
            </div>
          </ScrollAnimation>

          {/* Main Heading */}
          <ScrollAnimation type="fade-up" delay={0.1}>
            <h1 className="text-6xl md:text-8xl font-display font-bold tracking-tighter leading-[1] text-white">
              Synthesize Your <br />
              <span className="text-white">AI Vision Into Reality</span>
            </h1>
          </ScrollAnimation>

          {/* Subheading */}
          <ScrollAnimation type="fade-up" delay={0.2}>
            <p className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto leading-relaxed font-sans">
              Unlock the full potential of your development workflow with high-fidelity technical blueprints designed for the world's most powerful AI coding agents.
            </p>
          </ScrollAnimation>

          {/* CTAs */}
          <ScrollAnimation type="fade-up" delay={0.3}>
            <div className="flex flex-wrap items-center justify-center gap-6 pt-4">
              <Button
                variant="hero"
                size="xl"
                onClick={() => navigate('/create')}
                className="group relative overflow-hidden bg-white text-black rounded-full px-10 hover:scale-105 transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.3)]"
              >
                <span className="relative z-10 font-bold uppercase tracking-wider">Get Started</span>
              </Button>
              
              <Button 
                variant="ghost" 
                size="xl" 
                onClick={() => navigate('/demos')}
                className="group text-white/70 hover:text-white rounded-full px-10 border border-white/10 hover:bg-white/5 transition-all"
              >
                Learn More
              </Button>
            </div>
          </ScrollAnimation>
        </div>

        {/* Floating Technical Elements (Matching Image) */}
        <div className="absolute inset-0 pointer-events-none hidden lg:block">
          {/* SEO Optimize Node */}
          <motion.div 
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[20%] left-[15%] px-4 py-2 rounded-full border border-white/10 bg-black/40 backdrop-blur-md flex items-center gap-3"
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-[10px] font-mono text-white/80 uppercase">SEO_STRATEGY_OK</span>
          </motion.div>

          {/* Social Media Specialist Node */}
          <motion.div 
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute top-[25%] right-[15%] px-4 py-2 rounded-full border border-white/10 bg-black/40 backdrop-blur-md flex items-center gap-3"
          >
            <Bot className="w-4 h-4 text-accent" />
            <span className="text-[10px] font-mono text-white/80 uppercase">AI_CONTENT_GENERATOR</span>
          </motion.div>

          {/* Data Cards (Bottom) */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1 }}
            className="absolute bottom-[5%] left-[10%] p-6 rounded-2xl border border-white/5 bg-gradient-to-br from-white/10 to-transparent backdrop-blur-xl text-left min-w-[240px]"
          >
            <div className="text-[10px] font-mono text-white/40 uppercase mb-4 tracking-widest">Audience Growth</div>
            <div className="flex items-end gap-4">
              <div className="text-3xl font-display font-bold text-white">+1,321</div>
              <div className="text-[10px] text-success font-mono pb-1">↑ 24%</div>
            </div>
            {/* Visual Line Chart Placeholder */}
            <div className="mt-4 h-12 w-full flex items-end gap-1">
              {[40, 70, 45, 90, 65, 80, 100].map((h, i) => (
                <div key={i} className="flex-1 bg-primary/20 rounded-t-sm" style={{ height: `${h}%` }} />
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="absolute bottom-[5%] right-[10%] p-6 rounded-2xl border border-white/5 bg-gradient-to-br from-white/10 to-transparent backdrop-blur-xl text-left min-w-[240px]"
          >
            <div className="text-[10px] font-mono text-white/40 uppercase mb-4 tracking-widest">System Efficiency</div>
            <div className="text-3xl font-display font-bold text-accent">99.8%</div>
            {/* Visual Wave Placeholder */}
            <div className="mt-6 flex gap-2">
              <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                <motion.div 
                  animate={{ x: ["-100%", "100%"] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  className="w-1/2 h-full bg-accent"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
