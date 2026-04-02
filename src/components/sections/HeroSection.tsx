import { useState, useEffect } from 'react';
import { ArrowRight, Cpu, Zap, Bot, Code2, Sparkles, Terminal as TerminalIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLocale } from '@/contexts/LocaleContext';
import { useNavigate } from 'react-router-dom';
import { ScrollAnimation, StaggerContainer, StaggerItem } from '@/components/ui/scroll-animation';
import { motion } from 'framer-motion';

export function HeroSection() {
  const { t } = useLocale();
  const navigate = useNavigate();
  const [typedText, setTypedText] = useState("");
  const [progressStep, setProgressStep] = useState(0);
  const fullText = '"modern e-commerce platform"';

  useEffect(() => {
    let index = 0;
    const intervalId = setInterval(() => {
      setTypedText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(intervalId);
        setTimeout(() => setProgressStep(1), 500);
        setTimeout(() => setProgressStep(2), 1500);
        setTimeout(() => setProgressStep(3), 2500);
        setTimeout(() => setProgressStep(4), 3500);
      }
    }, 80);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="relative min-h-screen pt-32 pb-20 overflow-hidden flex items-center bg-[#0a0e14]">
      {/* Cinematic Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#10141a] to-[#0a0e14] -z-10" />
      <div className="absolute inset-0 grid-pattern opacity-20 -z-10" />
      
      {/* Architectural Wireframe Glows */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-[10%] left-[5%] w-[40%] h-[1px] bg-primary/20 blur-[1px] rotate-12" />
        <div className="absolute top-[20%] right-[10%] w-[30%] h-[1px] bg-accent/20 blur-[1px] -rotate-12" />
        <div className="absolute bottom-[15%] left-[20%] w-[50%] h-[1px] bg-success/20 blur-[1px] rotate-3" />
      </div>

      <div className="container relative mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Content Column */}
          <div className="lg:col-span-7 space-y-8 text-left">
            <ScrollAnimation type="fade-right">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-[10px] font-mono tracking-[0.2em] text-primary uppercase">
                <Bot className="h-3 w-3" />
                AI ARCHITECT ENGINE v2.0
              </div>
            </ScrollAnimation>

            <ScrollAnimation type="fade-right" delay={100}>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tighter leading-[0.9] text-white">
                Code <span className="text-primary/90">Architecture</span> <br />
                Synthesized.
              </h1>
            </ScrollAnimation>

            <ScrollAnimation type="fade-right" delay={200}>
              <p className="text-lg md:text-xl text-muted-foreground/80 max-w-2xl leading-relaxed font-sans">
                Stop prompting into a void. Generate comprehensive <span className="text-white font-semibold">Technical Blueprints</span> designed for the world's most powerful AI coding agents.
              </p>
            </ScrollAnimation>

            <ScrollAnimation type="fade-right" delay={300}>
              <div className="flex flex-wrap items-center gap-4">
                <Button
                  variant="hero"
                  size="xl"
                  onClick={() => navigate('/create')}
                  className="group relative overflow-hidden bg-primary text-black rounded-sm px-8 hover:scale-105 transition-transform"
                >
                  <Sparkles className="h-5 w-5 mr-3 group-hover:rotate-12 transition-transform" />
                  <span className="relative z-10 font-bold">GENERATE SYSTEM</span>
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                </Button>
                
                <Button 
                  variant="ghost" 
                  size="xl" 
                  onClick={() => navigate('/demos')}
                  className="group border border-white/10 hover:bg-white/5 text-white/70 hover:text-white rounded-sm px-8"
                >
                  <Code2 className="h-5 w-5 mr-3 opacity-50 group-hover:opacity-100" />
                  EXPLORE BLUEPRINTS
                </Button>
              </div>
            </ScrollAnimation>

            {/* Platform Integration Bar */}
            <ScrollAnimation type="fade-up" delay={400} className="pt-8">
              <div className="flex flex-col gap-4">
                <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-muted-foreground/50">Native Synthesis For</span>
                <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
                  {['Lovable', 'Cursor', 'Bolt.new', 'Replit', 'V0'].map((platform) => (
                    <span
                      key={platform}
                      className="text-sm font-mono font-bold text-muted-foreground/40 hover:text-primary transition-all cursor-default hover:tracking-widest"
                    >
                      {platform}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollAnimation>
          </div>

          {/* Visual/Terminal Column */}
          <div className="lg:col-span-5 relative">
            <ScrollAnimation type="scale" delay={500}>
              <div className="relative">
                {/* The Video Perspective Container */}
                <div className="relative rounded-lg overflow-hidden border border-white/10 bg-[#09090b] shadow-[0_0_100px_-20px_rgba(0,255,255,0.2)]">
                  {/* Terminal Chrome */}
                  <div className="flex items-center justify-between px-4 py-3 bg-secondary/20 border-b border-white/5">
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                      <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                      <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                    </div>
                    <div className="text-[10px] font-mono text-muted-foreground/60 uppercase tracking-widest">Active Synthesis</div>
                    <TerminalIcon className="h-3 w-3 text-primary/50" />
                  </div>

                  {/* Video Background Layer */}
                  <div className="relative h-[400px] w-full overflow-hidden grayscale contrast-125 opacity-30">
                    <video 
                      autoPlay 
                      muted 
                      loop 
                      playsInline
                      className="absolute inset-0 w-full h-full object-cover scale-110"
                    >
                      <source src="/Blueprint_Hero_Load.mp4" type="video/mp4" />
                    </video>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-transparent to-transparent" />
                  </div>

                  {/* Terminal Overlay Content */}
                  <div className="absolute inset-0 p-8 flex flex-col pointer-events-none bg-gradient-to-br from-transparent to-[#09090b]/40">
                    <div className="mt-auto space-y-6">
                      <div className="flex items-center gap-3 font-mono text-xs text-primary/80">
                        <span className="animate-pulse">●</span>
                        <span className="tracking-tighter uppercase">Initializing Machine Architect...</span>
                      </div>
                      
                      <div className="font-mono text-sm space-y-2">
                        <div className="flex gap-2">
                          <span className="text-primary/50">&gt;</span>
                          <span className="text-white/40">target:</span>
                          <span className="text-white underline decoration-primary/30">{typedText}</span>
                          <span className="w-2 h-4 bg-primary animate-pulse inline-block" />
                        </div>

                        <div className="space-y-1 pt-4">
                          {progressStep >= 1 && (
                            <motion.div initial={{ opacity: 0, x: -5 }} animate={{ opacity: 1, x: 0 }} className="flex items-center gap-3 text-[10px] text-success/70 font-mono">
                              <Zap className="h-3 w-3" /> ANALYZING_HIERARCHY_OK
                            </motion.div>
                          )}
                          {progressStep >= 2 && (
                            <motion.div initial={{ opacity: 0, x: -5 }} animate={{ opacity: 1, x: 0 }} className="flex items-center gap-3 text-[10px] text-success/70 font-mono">
                              <Zap className="h-3 w-3" /> GENERATING_DS_TOKENS_OK
                            </motion.div>
                          )}
                          {progressStep >= 3 && (
                            <motion.div initial={{ opacity: 0, x: -5 }} animate={{ opacity: 1, x: 0 }} className="flex items-center gap-3 text-[10px] text-success/70 font-mono">
                              <Zap className="h-3 w-3" /> SEO_META_SYNTHESIS_OK
                            </motion.div>
                          )}
                        </div>
                      </div>

                      {/* Stat Grid Overlay */}
                      <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: progressStep >= 4 ? 1 : 0, y: progressStep >= 4 ? 0 : 10 }}
                        className="grid grid-cols-2 gap-4 p-4 rounded-md border border-white/5 bg-white/5 backdrop-blur-md"
                      >
                         <div className="space-y-1">
                            <div className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">Pages</div>
                            <div className="text-xl font-display font-bold text-primary">12</div>
                         </div>
                         <div className="space-y-1">
                            <div className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">Nodes</div>
                            <div className="text-xl font-display font-bold text-accent">84</div>
                         </div>
                      </motion.div>
                    </div>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl -z-10 animate-pulse" />
                <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-accent/20 rounded-full blur-3xl -z-10 animate-float" />
              </div>
            </ScrollAnimation>
          </div>

        </div>
      </div>
    </section>
  );
}
