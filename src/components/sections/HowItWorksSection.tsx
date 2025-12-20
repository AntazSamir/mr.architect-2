import { MessageSquare, Cpu, Rocket, ArrowRight, Copy } from 'lucide-react';
import { useLocale } from '@/contexts/LocaleContext';

const steps = [
  {
    icon: MessageSquare,
    number: '01',
    title: 'Describe Your Project',
    description: 'Answer simple questions about your website type, target audience, and design preferences.',
    color: 'text-primary',
    bgColor: 'bg-primary/10',
    borderColor: 'border-primary/30',
  },
  {
    icon: Cpu,
    number: '02',
    title: 'AI Generates Blueprint',
    description: 'Our AI analyzes your inputs and creates a comprehensive blueprint with architecture, design, and SEO.',
    color: 'text-accent',
    bgColor: 'bg-accent/10',
    borderColor: 'border-accent/30',
  },
  {
    icon: Copy,
    number: '03',
    title: 'Copy AI Prompts',
    description: 'Get optimized prompts for Lovable, Cursor, Bolt.new, Replit, or V0 to start building instantly.',
    color: 'text-success',
    bgColor: 'bg-success/10',
    borderColor: 'border-success/30',
  },
  {
    icon: Rocket,
    number: '04',
    title: 'Build & Launch',
    description: 'Paste the prompts into your favorite AI builder and watch your website come to life.',
    color: 'text-warning',
    bgColor: 'bg-warning/10',
    borderColor: 'border-warning/30',
  },
];

export function HowItWorksSection() {
  const { locale } = useLocale();

  return (
    <section id="how-it-works" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      
      <div className="container relative mx-auto px-4">
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-mono uppercase tracking-widest text-accent bg-accent/10 border border-accent/20 mb-4">
            How It Works
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold tracking-tight mb-4 text-foreground">
            From Idea to
            <span className="text-gradient"> Blueprint</span> in Minutes
          </h2>
          <p className="text-lg text-muted-foreground">
            Four simple steps to generate production-ready website specifications.
          </p>
        </div>

        {/* Steps */}
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div 
                  key={step.number}
                  className="relative animate-slide-up"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  {/* Connection Line */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-12 left-[calc(50%+30px)] w-[calc(100%-60px)] h-px bg-gradient-to-r from-border via-primary/30 to-border" />
                  )}
                  
                  <div className={`relative p-6 rounded-2xl glass-card border ${step.borderColor} hover:border-primary/50 transition-all duration-300 h-full`}>
                    {/* Step Number */}
                    <span className={`text-xs font-mono ${step.color} mb-4 block`}>{step.number}</span>
                    
                    {/* Icon */}
                    <div className={`mb-4 inline-flex items-center justify-center w-12 h-12 rounded-xl ${step.bgColor} ${step.borderColor} border`}>
                      <Icon className={`h-6 w-6 ${step.color}`} />
                    </div>
                    
                    {/* Content */}
                    <h3 className="font-display text-lg font-semibold mb-2 text-foreground">
                      {step.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Prompt Preview */}
        <div className="mt-16 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.6s' }}>
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
        </div>
      </div>
    </section>
  );
}
