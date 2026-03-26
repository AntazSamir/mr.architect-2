import { MessageSquare, Cpu, Rocket, ArrowRight, Copy, Sparkles } from 'lucide-react';
import { useLocale } from '@/contexts/LocaleContext';
import { ScrollAnimation, StaggerContainer, StaggerItem } from '@/components/ui/scroll-animation';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useRef } from 'react';
const steps: Array<{
  icon: any;
  number: string;
  title: string;
  description: string;
  variant: 'primary' | 'accent' | 'success' | 'warning';
}> = [{
  icon: MessageSquare,
  number: '01',
  title: 'Describe Your Project',
  description: 'Answer simple questions about your website type, target audience, and design preferences.',
  variant: 'primary'
}, {
  icon: Cpu,
  number: '02',
  title: 'AI Generates Blueprint',
  description: 'Our AI analyzes your inputs and creates a comprehensive blueprint with architecture, design, and SEO.',
  variant: 'accent'
}, {
  icon: Copy,
  number: '03',
  title: 'Copy AI Prompts',
  description: 'Get optimized prompts for Lovable, Cursor, Bolt.new, Replit, or V0 to start building instantly.',
  variant: 'success'
}, {
  icon: Rocket,
  number: '04',
  title: 'Build & Launch',
  description: 'Paste the prompts into your favorite AI builder and watch your website come to life.',
  variant: 'warning'
}];
type ColorVariant = 'primary' | 'accent' | 'success' | 'warning';
const variantStyles: Record<ColorVariant, {
  text: string;
  bg: string;
  border: string;
  hoverBorder: string;
  hoverShadow: string;
  hoverBg: string;
  iconBg: string;
}> = {
  primary: {
    text: 'text-primary',
    bg: 'bg-primary/10',
    border: 'border-primary/20',
    hoverBorder: 'hover:border-primary/50',
    hoverShadow: 'hover:shadow-[0_0_30px_-5px_hsl(var(--primary)/0.3)]',
    hoverBg: 'hover:bg-primary/5',
    iconBg: 'bg-primary/10'
  },
  accent: {
    text: 'text-accent',
    bg: 'bg-accent/10',
    border: 'border-accent/20',
    hoverBorder: 'hover:border-accent/50',
    hoverShadow: 'hover:shadow-[0_0_30px_-5px_hsl(var(--accent)/0.3)]',
    hoverBg: 'hover:bg-accent/5',
    iconBg: 'bg-accent/10'
  },
  success: {
    text: 'text-success',
    bg: 'bg-success/10',
    border: 'border-success/20',
    hoverBorder: 'hover:border-success/50',
    hoverShadow: 'hover:shadow-[0_0_30px_-5px_hsl(var(--success)/0.3)]',
    hoverBg: 'hover:bg-success/5',
    iconBg: 'bg-success/10'
  },
  warning: {
    text: 'text-warning',
    bg: 'bg-warning/10',
    border: 'border-warning/20',
    hoverBorder: 'hover:border-warning/50',
    hoverShadow: 'hover:shadow-[0_0_30px_-5px_hsl(var(--warning)/0.3)]',
    hoverBg: 'hover:bg-warning/5',
    iconBg: 'bg-warning/10'
  }
};
export function HowItWorksSection() {
  const { locale } = useLocale();
  const sectionRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const pathLength = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section ref={sectionRef} id="how-it-works" className="py-24 md:py-32 relative overflow-hidden bg-background">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 grid-pattern opacity-10" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 blur-[120px] rounded-full animate-pulse-slow pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 blur-[120px] rounded-full animate-pulse-slow pointer-events-none" />
      
      <div className="container relative mx-auto px-4">
        {/* Header */}
        <ScrollAnimation type="fade-up" className="max-w-2xl mx-auto text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono uppercase tracking-widest text-primary bg-primary/10 border border-primary/20 mb-6"
          >
            <Sparkles className="w-3 h-3" />
            <span>The Architectural Process</span>
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tight mb-6 text-foreground">
            From Idea to <span className="text-gradient">Blueprint</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            A precision-engineered workflow designed to bridge the gap between creative vision and technical execution.
          </p>
        </ScrollAnimation>

        {/* Desktop Connector Line (Hidden on Mobile) */}
        <div className="hidden lg:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-1 pointer-events-none z-0">
            <svg width="100%" height="100" viewBox="0 0 1000 100" fill="none" className="overflow-visible">
                <motion.path
                    d="M 0 50 Q 250 10, 500 50 T 1000 50"
                    stroke="url(#line-gradient)"
                    strokeWidth="2"
                    fill="none"
                    style={{ pathLength }}
                />
                <defs>
                    <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="hsl(var(--primary))" />
                        <stop offset="50%" stopColor="hsl(var(--accent))" />
                        <stop offset="100%" stopColor="hsl(var(--success))" />
                    </linearGradient>
                </defs>
            </svg>
        </div>

        {/* Steps Grid */}
        <div className="max-w-7xl mx-auto">
          <StaggerContainer staggerDelay={0.1} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const styles = variantStyles[step.variant];
              
              return (
                <StaggerItem key={step.number} className="relative z-10 group">
                  <motion.div
                    whileHover={{ y: -10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className={`relative p-8 rounded-[2rem] glass-card border-2 transition-all duration-500 h-full flex flex-col items-start ${styles.border} ${styles.hoverBorder} ${styles.hoverShadow} ${styles.hoverBg}`}
                  >
                    {/* Background number glow */}
                    <div className={`absolute top-4 right-8 font-display text-8xl font-black opacity-[0.03] select-none transition-opacity duration-500 group-hover:opacity-[0.07] ${styles.text}`}>
                      {step.number}
                    </div>

                    {/* Icon Container */}
                    <motion.div 
                        whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                        className={`mb-8 inline-flex items-center justify-center w-14 h-14 rounded-2xl border-2 ${styles.iconBg} ${styles.border} ${styles.text} shadow-lg`}
                    >
                      <Icon className="h-7 w-7" />
                    </motion.div>

                    {/* Step Metadata */}
                    <div className="space-y-4">
                        <span className={`inline-block text-[10px] font-mono font-bold px-2 py-0.5 rounded border ${styles.border} ${styles.bg} ${styles.text}`}>
                            STAGE {step.number}
                        </span>
                        <h3 className="font-display text-2xl font-bold text-foreground">
                          {step.title}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {step.description}
                        </p>
                    </div>

                    {/* Bottom visual indicator */}
                    <div className="mt-8 pt-6 border-t border-border/10 w-full flex justify-between items-center">
                        <div className="flex gap-1">
                            {[1, 2, 3].map(i => (
                                <div key={i} className={`w-1 h-1 rounded-full ${index >= i-1 ? styles.text + ' bg-current' : 'bg-muted'}`} />
                            ))}
                        </div>
                        <ArrowRight className={`w-4 h-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-[-10px] group-hover:translate-x-0 ${styles.text}`} />
                    </div>
                  </motion.div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>

        {/* Animated Prompt Terminal */}
        <ScrollAnimation type="fade-up" delay={0.4} className="mt-24 max-w-4xl mx-auto">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-accent/20 to-success/20 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200" />
            
            <div className="relative rounded-2xl glass-card-strong border border-white/5 overflow-hidden">
                <div className="bg-white/5 px-6 py-3 flex items-center justify-between border-b border-white/5">
                    <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500/50" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                        <div className="w-3 h-3 rounded-full bg-green-500/50" />
                    </div>
                    <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">Output_Stream_v2.04.system</span>
                </div>
                <div className="p-8 font-mono">
                    <div className="flex gap-4 mb-2">
                        <span className="text-success select-none">{'>'}</span>
                        <span className="text-muted-foreground">Initializing logic synthesis...</span>
                    </div>
                    <pre className="text-sm text-foreground/90 whitespace-pre-wrap leading-relaxed">
                      <code>{`CONSTRUCT [Commerce_Core]:
- Architecture: React v19 + Vite 6.0
- UX_Pattern: Glass-Dark-System
- Auth_Module: Supabase.RLS_Hardened
- Styling: Tailwind_CSS (Config_v3.4)

GENERATING MASTER PROMPT...
[READY] >> "Engineer a marketplace with real-time bidding,
           integrated Stripe Connect, and Vercel Edge 
           functions for localized SEO..."`}</code>
                    </pre>
                </div>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}