import { MessageSquare, Cpu, Rocket, ArrowRight, Copy, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLocale } from '@/contexts/LocaleContext';
import { ScrollAnimation, StaggerContainer, StaggerItem } from '@/components/ui/scroll-animation';
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
  groupHoverText: string;
  groupHoverBorder: string;
}> = {
  primary: {
    text: 'text-primary',
    bg: 'bg-primary/10',
    border: 'border-primary/20',
    hoverBorder: 'hover:border-primary/50',
    hoverShadow: 'hover:shadow-[0_0_30px_-5px_hsl(var(--primary)/0.3)]',
    hoverBg: 'hover:bg-primary/5',
    iconBg: 'bg-primary/10',
    groupHoverText: 'group-hover:text-primary',
    groupHoverBorder: 'group-hover:border-primary/30'
  },
  accent: {
    text: 'text-accent',
    bg: 'bg-accent/10',
    border: 'border-accent/20',
    hoverBorder: 'hover:border-accent/50',
    hoverShadow: 'hover:shadow-[0_0_30px_-5px_hsl(var(--accent)/0.3)]',
    hoverBg: 'hover:bg-accent/5',
    iconBg: 'bg-accent/10',
    groupHoverText: 'group-hover:text-accent',
    groupHoverBorder: 'group-hover:border-accent/30'
  },
  success: {
    text: 'text-success',
    bg: 'bg-success/10',
    border: 'border-success/20',
    hoverBorder: 'hover:border-success/50',
    hoverShadow: 'hover:shadow-[0_0_30px_-5px_hsl(var(--success)/0.3)]',
    hoverBg: 'hover:bg-success/5',
    iconBg: 'bg-success/10',
    groupHoverText: 'group-hover:text-success',
    groupHoverBorder: 'group-hover:border-success/30'
  },
  warning: {
    text: 'text-warning',
    bg: 'bg-warning/10',
    border: 'border-warning/20',
    hoverBorder: 'hover:border-warning/50',
    hoverShadow: 'hover:shadow-[0_0_30px_-5px_hsl(var(--warning)/0.3)]',
    hoverBg: 'hover:bg-warning/5',
    iconBg: 'bg-warning/10',
    groupHoverText: 'group-hover:text-warning',
    groupHoverBorder: 'group-hover:border-warning/30'
  }
};
export function HowItWorksSection() {
  const { locale } = useLocale();

  return (
    <section id="how-it-works" className="py-24 md:py-32 relative bg-[#0a0e14] overflow-hidden">
      {/* Blueprint Grid Background */}
      <div className="absolute inset-0 grid-pattern opacity-[0.15] -z-10" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent -z-10" />

      <div className="container relative mx-auto px-6">
        {/* Technical Header */}
        <ScrollAnimation type="fade-up" className="max-w-3xl mx-auto text-center mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-[10px] font-mono tracking-widest text-accent uppercase mb-6">
            <Cpu className="h-3 w-3" /> SYSTEM_WORKFLOW_v1.0
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tighter text-white mb-6">
            Architectural <span className="text-primary italic">Synthesis</span>
          </h2>
          <p className="text-lg text-muted-foreground/70 max-w-2xl mx-auto leading-relaxed">
            The protocol for transforming abstract concepts into production-grade 
            technical blueprints for AI autonomous builders.
          </p>
        </ScrollAnimation>

        {/* Steps Grid */}
        <div className="max-w-6xl mx-auto">
          <StaggerContainer staggerDelay={0.1}>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {steps.map((step, index) => {
                const Icon = step.icon;
                const styles = variantStyles[step.variant];
                
                return (
                  <StaggerItem key={step.number}>
                    <div className="group relative h-full">
                      {/* Card Container */}
                      <div className={`relative h-full p-8 rounded-sm bg-[#0d1117] border border-white/5 ${styles.hoverBorder} transition-all duration-500 overflow-hidden shadow-2xl`}>
                        
                        {/* Blueprint Number Background */}
                        <div className="absolute -right-4 -top-4 opacity-[0.03] group-hover:opacity-[0.07] transition-opacity duration-700 pointer-events-none select-none">
                          <span className="text-9xl font-display font-bold tracking-tighter text-white">
                            {step.number}
                          </span>
                        </div>

                        {/* Technical Step Number */}
                        <div className="flex items-center justify-between mb-8">
                          <div className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded border ${styles.border} ${styles.text} bg-white/5`}>
                            STEP_{step.number}
                          </div>
                          <Icon className={`h-5 w-5 ${styles.text} opacity-50 group-hover:opacity-100 transition-opacity`} />
                        </div>

                        {/* Content */}
                        <h3 className={`text-xl font-display font-bold text-white mb-4 tracking-tight ${styles.groupHoverText} transition-colors`}>
                          {step.title}
                        </h3>
                        <p className="text-sm text-muted-foreground/60 leading-relaxed font-sans mb-12">
                          {step.description}
                        </p>

                        {/* Decorative Line */}
                        <div className="absolute bottom-0 left-0 w-full h-[2px] overflow-hidden">
                          <div className={`w-0 group-hover:w-full h-full ${styles.bg.replace('/10', '/50')} transition-all duration-700 ease-in-out`} />
                        </div>

                        {/* Corner Accents */}
                        <div className={`absolute top-0 right-0 w-8 h-8 border-t border-r border-white/0 ${styles.groupHoverBorder} transition-all duration-500`} />
                        <div className={`absolute bottom-0 left-0 w-8 h-8 border-b border-l border-white/0 ${styles.groupHoverBorder} transition-all duration-500`} />
                      </div>
                    </div>
                  </StaggerItem>
                );
              })}
            </div>
          </StaggerContainer>
        </div>

        {/* Bottom Technical Logs Panel */}
        <ScrollAnimation type="fade-up" delay={0.4} className="mt-24 max-w-4xl mx-auto">
          <div className="relative rounded-lg overflow-hidden border border-white/10 bg-[#09090b] shadow-2xl">
            {/* Window Header */}
            <div className="flex items-center justify-between px-4 py-2 bg-secondary/20 border-b border-white/5">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
              </div>
              <div className="text-[10px] font-mono text-muted-foreground/40 uppercase tracking-widest">SYSTEM_OUTPUT::Lovable_v1.2</div>
              <div className="w-8" />
            </div>

            {/* Code Body */}
            <div className="p-6 font-mono text-sm">
              <div className="flex gap-4">
                <div className="text-muted-foreground/20 text-right select-none w-4">
                  {['01', '02', '03', '04', '05', '06'].map(n => <div key={n}>{n}</div>)}
                </div>
                <div className="text-white/60 space-y-1">
                  <div className="text-primary/70">CREATE SYSTEM INTERFACE</div>
                  <div>- Architecture: Fully Decoupled SaaS</div>
                  <div>- Design System: BluePrint Noir v2</div>
                  <div>- Components: 34 Pre-configured Atomic units</div>
                  <div>- Prompt Status: Synthesized for [Cursor/Bolt/Lovable]</div>
                  <div className="animate-pulse">_</div>
                </div>
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}