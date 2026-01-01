import { forwardRef } from 'react';
import { ArrowRight, Sparkles, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLocale } from '@/contexts/LocaleContext';
import { useNavigate } from 'react-router-dom';

export const CTASection = forwardRef<HTMLElement>(function CTASection(_, ref) {
  const { locale } = useLocale();
  const navigate = useNavigate();

  return (
    <section ref={ref} className="py-24 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      <div className="absolute inset-0 grid-pattern opacity-20" />

      {/* Glowing Orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px]" />
      <div className="absolute top-20 right-20 w-64 h-64 bg-accent/10 rounded-full blur-[100px] animate-float" />

      <div className="container relative mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Main Card */}
          <div className="relative rounded-3xl glass-card-strong border border-primary/20 p-8 md:p-12 text-center overflow-hidden">
            {/* Decorative Corner */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/20 to-transparent" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-accent/20 to-transparent" />

            {/* Icon */}
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 border border-primary/30 mb-8 animate-glow-pulse">
              <Sparkles className="h-8 w-8 text-primary" />
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold tracking-tight mb-6">
              Ready to Generate Your
              <br />
              <span className="text-gradient">Website Blueprint?</span>
            </h2>

            {/* Subtitle */}
            <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
              Stop planning manually. Let AI create a comprehensive blueprint
              with architecture, design system, and ready-to-use prompts.
            </p>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                variant="hero"
                size="xl"
                onClick={() => navigate('/create')}
                className="group"
              >
                <Zap className="h-5 w-5 mr-2" />
                Start Generating — Free
                <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            {/* Note */}
            <p className="text-sm text-muted-foreground mt-6 font-mono">
              No sign-up required | Unlimited blueprints
            </p>

            {/* Stats */}
            <div className="mt-12 pt-8 border-t border-border/50 grid grid-cols-3 gap-8">
              {[
                { value: '< 2 min', label: 'Generation Time' },
                { value: '5+', label: 'AI Platforms' },
                { value: '100%', label: 'Free to Use' },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl font-bold text-primary font-mono">{stat.value}</div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});
