import { forwardRef } from 'react';
import { ArrowRight, Sparkles, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLocale } from '@/contexts/LocaleContext';
import { useNavigate } from 'react-router-dom';
import { ScrollAnimation } from '@/components/ui/scroll-animation';

export const CTASection = forwardRef<HTMLElement>(function CTASection(_, ref) {
  const { locale } = useLocale();
  const navigate = useNavigate();

  return (
    <section ref={ref} id="cta" className="py-24 md:py-32 relative bg-[#0a0e14] overflow-hidden">
      {/* Background Schema */}
      <div className="absolute inset-0 grid-pattern opacity-10 -z-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[600px] bg-[radial-gradient(circle_at_center,rgba(0,255,255,0.03)_0%,transparent_70%)] -z-10" />

      <div className="container relative mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Technical Terminal Card */}
          <ScrollAnimation type="scale">
            <div className="relative rounded-sm bg-[#0d1117] border border-white/5 p-8 md:p-20 overflow-hidden shadow-2xl">
              
              {/* Perspective Wireframe Decors */}
              <div className="absolute top-0 right-0 w-64 h-64 border-t border-r border-primary/20 -translate-y-1/2 translate-x-1/2 rotate-45 pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-64 h-64 border-b border-l border-accent/20 translate-y-1/2 -translate-x-1/2 -rotate-45 pointer-events-none" />

              <div className="relative z-10 flex flex-col items-center text-center max-w-3xl mx-auto">
                {/* Header Badge */}
                <div className="inline-flex items-center gap-3 px-3 py-1 rounded-sm bg-primary/10 border border-primary/20 text-[10px] font-mono tracking-[0.3em] text-primary uppercase mb-10">
                  <Zap className="h-3 w-3 animate-pulse" /> GENERATE_SYSTEM
                </div>

                {/* Massive Headline */}
                <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold tracking-tighter text-white mb-8 leading-[0.9]">
                  Deploy Your <br />
                  <span className="text-primary italic">Autonomous</span> Future.
                </h2>

                {/* Subtitle */}
                <p className="text-lg md:text-xl text-muted-foreground/60 mb-12 leading-relaxed font-sans">
                  The architecture is ready. The synthesis protocol is active. 
                  Generate your production-grade blueprints and start building 
                  with elite AI agents instantly.
                </p>

                {/* Direct Action Terminal */}
                <div className="w-full max-w-md p-1 rounded-sm bg-white/5 border border-white/5 mb-8">
                  <Button
                    variant="hero"
                    size="xl"
                    onClick={() => navigate('/create')}
                    className="w-full bg-primary text-black font-bold uppercase tracking-widest rounded-sm hover:scale-[1.02] transition-transform group py-8"
                  >
                    <Sparkles className="h-5 w-5 mr-3 group-hover:rotate-12 transition-transform" />
                    GENERATE_SYSTEM
                    <ArrowRight className="h-5 w-5 ml-3 group-hover:translate-x-2 transition-transform" />
                  </Button>
                </div>

                {/* Bottom Meta info */}
                <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 pt-12 border-t border-white/5 w-full">
                  {[
                    { label: 'Latency', value: '< 2.4s' },
                    { label: 'Protocols', value: '7' },
                    { label: 'Status', value: 'Live' },
                  ].map((stat) => (
                    <div key={stat.label} className="flex flex-col items-center">
                      <span className="text-[10px] font-mono font-bold tracking-widest text-muted-foreground/30 uppercase">{stat.label}</span>
                      <span className="text-lg font-display font-bold text-white tracking-widest">{stat.value.toUpperCase()}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Selection Border Glow */}
              <div className="absolute inset-0 border border-white/5 group-hover:border-primary/20 transition-all duration-700 pointer-events-none" />
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
});
