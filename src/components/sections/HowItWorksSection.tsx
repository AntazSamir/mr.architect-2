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
  const {
    locale
  } = useLocale();
  return <section id="how-it-works" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 grid-pattern opacity-30" />

      <div className="container relative mx-auto px-4">
        {/* Header */}
        <ScrollAnimation type="fade-up" className="max-w-2xl mx-auto text-center mb-16">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-mono uppercase tracking-widest text-accent bg-accent/10 border border-accent/20 mb-4">
            How It Works
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold tracking-tight mb-4 text-foreground">
            From Idea to Blueprint in Minutes
          </h2>
          <p className="text-lg text-muted-foreground">
            Four simple steps to generate production-ready website specifications.
          </p>
        </ScrollAnimation>

        {/* Animated Connector Line (Desktop) */}
        <div className="hidden lg:block absolute top-[60%] left-1/2 -translate-x-1/2 w-full max-w-5xl h-px pointer-events-none z-0">
          <svg width="100%" height="100" viewBox="0 0 1000 100" fill="none" className="overflow-visible">
            <motion.path
              d="M0,50 Q250,0 500,50 T1000,50"
              stroke="url(#gradient-line)"
              strokeWidth="2"
              strokeDasharray="10,10"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 0.3 }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
            <defs>
              <linearGradient id="gradient-line" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="hsl(var(--primary))" />
                <stop offset="50%" stopColor="hsl(var(--accent))" />
                <stop offset="100%" stopColor="hsl(var(--success))" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Steps */}
        <div className="max-w-5xl mx-auto relative z-10">
          <StaggerContainer staggerDelay={0.15} className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
            {steps.map((step, index) => {
            const Icon = step.icon;
            const styles = variantStyles[step.variant];
            // First and last items span full width on mobile for bento effect
            const isWide = index === 0 || index === 3;
            return <StaggerItem key={step.number} className={`relative group ${isWide ? 'col-span-2 sm:col-span-1' : ''}`}>
                  <div className={`relative p-4 sm:p-6 rounded-xl sm:rounded-2xl glass-card border transition-all duration-500 h-full overflow-hidden ${styles.border} ${styles.hoverBorder} ${styles.hoverShadow} ${styles.hoverBg}`}>
                    
                    {/* Background Fluid Illustration/Number */}
                    <div className="absolute -right-4 -bottom-4 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-500 pointer-events-none select-none">
                      <span className="text-8xl sm:text-9xl font-display font-bold leading-none tracking-tighter">
                        {step.number}
                      </span>
                    </div>

                    {/* Animated Glow Disk */}
                    <div className={`absolute -top-12 -left-12 w-24 h-24 rounded-full blur-[40px] opacity-0 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none ${styles.bg}`} />

                    {/* Icon Container with subtle float */}
                    <motion.div 
                      whileHover={{ y: -5, scale: 1.05 }}
                      className={`mb-3 sm:mb-4 inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl border shadow-sm transition-colors ${styles.iconBg} ${styles.border} ${styles.text}`}
                    >
                      <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
                    </motion.div>

                    {/* Content */}
                    <h3 className="font-display text-sm sm:text-lg font-semibold mb-1 sm:mb-2 text-foreground group-hover:text-primary transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed group-hover:text-muted-foreground/80 transition-colors">
                      {step.description}
                    </p>

                    {/* Active Corner Sparkle */}
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <Sparkles className={`w-3 h-3 ${styles.text} animate-pulse`} />
                    </div>
                  </div>
                </StaggerItem>;
          })}
          </StaggerContainer>
        </div>

        {/* Bottom Prompt Preview */}
        <ScrollAnimation type="fade-up" delay={0.3} className="mt-16 max-w-3xl mx-auto">
          <div className="rounded-2xl glass-card-strong p-6 border border-primary/20">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
              <span className="text-xs font-mono text-muted-foreground">Sample output for Lovable</span>
            </div>
            <pre className="text-sm text-foreground/80 font-mono overflow-x-auto">
              <code>{`Create an e-commerce website with:
- Homepage with hero, featured products, testimonials
- Product catalog with filters and search
- Product detail pages with gallery and reviews
- Shopping cart with real-time updates
- Checkout flow with Stripe integration

Tech: React, TypeScript, Tailwind CSS, shadcn/ui
Design: Modern minimalist, primary #0891b2...`}</code>
            </pre>
          </div>
        </ScrollAnimation>
      </div>
    </section>;
}