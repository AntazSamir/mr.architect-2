import { ArrowRight, Play, Zap, Shield, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLocale } from '@/contexts/LocaleContext';
import { useNavigate } from 'react-router-dom';

export function HeroSection() {
  const { t } = useLocale();
  const navigate = useNavigate();

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 gradient-hero" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
      
      {/* Floating Elements */}
      <div className="absolute top-40 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '-2s' }} />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtOS45NDEgMC0xOCA4LjA1OS0xOCAxOHM4LjA1OSAxOCAxOCAxOCAxOC04LjA1OSAxOC0xOC04LjA1OS0xOC0xOC0xOHptMCAzMmMtNy43MzIgMC0xNC02LjI2OC0xNC0xNHM2LjI2OC0xNCAxNC0xNCAxNCA2LjI2OCAxNCAxNC02LjI2OCAxNC0xNCAxNHoiIGZpbGw9IiM2MzY2ZjEiIGZpbGwtb3BhY2l0eT0iLjAyIi8+PC9nPjwvc3ZnPg==')] opacity-50" />

      <div className="container relative mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8 animate-fade-in">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">{t.hero.badge}</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight mb-6 animate-slide-up">
            {t.hero.title}
            <br />
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">{t.hero.titleHighlight}</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            {t.hero.subtitle}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <Button variant="hero" size="xl" onClick={() => navigate('/create')}>
              {t.hero.cta}
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
            <Button variant="heroOutline" size="xl">
              <Play className="h-5 w-5 mr-2" />
              {t.hero.ctaSecondary}
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-lg mx-auto animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="text-center">
              <div className="flex items-center justify-center gap-1 text-2xl sm:text-3xl font-display font-bold text-foreground mb-1">
                <Zap className="h-5 w-5 text-warning" />
                5min
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground">Avg. Generation</p>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-display font-bold text-foreground mb-1">10K+</div>
              <p className="text-xs sm:text-sm text-muted-foreground">Blueprints Created</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-1 text-2xl sm:text-3xl font-display font-bold text-foreground mb-1">
                <Shield className="h-5 w-5 text-success" />
                4.9
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground">User Rating</p>
            </div>
          </div>
        </div>

        {/* Hero Visual */}
        <div className="mt-16 md:mt-24 max-w-5xl mx-auto animate-scale-in" style={{ animationDelay: '0.4s' }}>
          <div className="relative rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm shadow-2xl overflow-hidden">
            {/* Browser Chrome */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-border/50 bg-secondary/30">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-destructive/60" />
                <div className="w-3 h-3 rounded-full bg-warning/60" />
                <div className="w-3 h-3 rounded-full bg-success/60" />
              </div>
              <div className="flex-1 mx-4">
                <div className="max-w-md mx-auto h-6 rounded-md bg-secondary/50 flex items-center px-3">
                  <span className="text-xs text-muted-foreground">mrarchitect.ai/blueprint</span>
                </div>
              </div>
            </div>
            
            {/* Content Preview */}
            <div className="p-6 md:p-8">
              <div className="grid md:grid-cols-3 gap-6">
                {/* Sidebar */}
                <div className="space-y-4">
                  <div className="h-8 w-32 rounded-lg bg-primary/20 animate-pulse" />
                  <div className="space-y-2">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <div key={i} className="h-6 rounded bg-secondary animate-pulse" style={{ width: `${70 + Math.random() * 30}%`, animationDelay: `${i * 0.1}s` }} />
                    ))}
                  </div>
                </div>
                
                {/* Main Content */}
                <div className="md:col-span-2 space-y-4">
                  <div className="h-10 w-48 rounded-lg bg-primary/10 animate-pulse" />
                  <div className="grid grid-cols-2 gap-4">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="h-24 rounded-xl bg-secondary/70 animate-pulse" style={{ animationDelay: `${i * 0.15}s` }} />
                    ))}
                  </div>
                  <div className="h-32 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 animate-pulse" />
                </div>
              </div>
            </div>
          </div>
          
          {/* Glow Effect */}
          <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 blur-xl -z-10 animate-pulse-slow" />
        </div>
      </div>
    </section>
  );
}
