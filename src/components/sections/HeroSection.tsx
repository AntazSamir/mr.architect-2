import { useState, useEffect } from 'react';
import { ArrowRight, Cpu, Zap, Bot, Code2, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLocale } from '@/contexts/LocaleContext';
import { useNavigate } from 'react-router-dom';
import { ScrollAnimation, StaggerContainer, StaggerItem } from '@/components/ui/scroll-animation';

export function HeroSection() {
  const { t } = useLocale();
  const navigate = useNavigate();
  const [typedText, setTypedText] = useState("");
  const [progressStep, setProgressStep] = useState(0);
  const fullText = '"e-commerce platform"';

  useEffect(() => {
    let index = 0;
    const intervalId = setInterval(() => {
      setTypedText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(intervalId);
        // Start showing progress steps after typing is done
        setTimeout(() => setProgressStep(1), 500);
        setTimeout(() => setProgressStep(2), 1500);
        setTimeout(() => setProgressStep(3), 2500);
        setTimeout(() => setProgressStep(4), 3500);
      }
    }, 80);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="relative min-h-screen pt-24 pb-20 overflow-hidden flex items-center">
      {/* Background Effects */}
      <div className="absolute inset-0 gradient-hero -z-10" />
      <div className="absolute inset-0 grid-pattern -z-10" />

      {/* Animated Orbs */}
      <div className="absolute top-20 left-[10%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] animate-float" />
      <div className="absolute bottom-20 right-[10%] w-[400px] h-[400px] bg-accent/15 rounded-full blur-[100px] animate-float" style={{ animationDelay: '-3s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px]" />

      <div className="container relative mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Badge */}
          <ScrollAnimation type="fade-down" duration={0.8}>
            <div className="flex justify-center mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card-strong">
                <Bot className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium text-primary font-mono">AI-POWERED BLUEPRINT GENERATOR</span>
              </div>
            </div>
          </ScrollAnimation>

          {/* Headline */}
          <ScrollAnimation type="fade-up" delay={0.1}>
            <h1 className="text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight mb-6">
              <span className="text-foreground">Generate Blueprints</span>
              <br />
              <span className="text-foreground">for AI Builders</span>
            </h1>
          </ScrollAnimation>

          {/* Subtitle */}
          <ScrollAnimation type="fade-up" delay={0.2}>
            <p className="text-center text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-10">
              Answer a few questions and get a complete website blueprint with architecture,
              design system, and ready-to-use prompts for <span className="text-primary">Lovable</span>,
              <span className="text-accent"> Cursor</span>, <span className="text-success">Bolt.new</span>,
              and <span className="text-warning">Replit</span>.
            </p>
          </ScrollAnimation>

          {/* CTAs */}
          <ScrollAnimation type="fade-up" delay={0.3}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button
              variant="hero"
              size="xl"
              onClick={() => navigate('/create')}
              className="group"
            >
              <Sparkles className="h-5 w-5 mr-2 group-hover:animate-pulse" />
              Generate Blueprint
              <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="heroOutline" size="xl" onClick={() => navigate('/demos')}>
              <Code2 className="h-5 w-5 mr-2" />
              View Examples
            </Button>
            </div>
          </ScrollAnimation>

          {/* AI Platform Logos */}
          <ScrollAnimation type="fade-up" delay={0.4}>
            <div className="flex flex-wrap items-center justify-center gap-8 mb-16">
              <span className="text-xs uppercase tracking-widest text-muted-foreground">Works with</span>
              {['Lovable', 'Cursor', 'Bolt.new', 'Replit', 'V0'].map((platform) => (
                <span
                  key={platform}
                  className="text-sm font-mono text-muted-foreground hover:text-primary transition-colors cursor-default"
                >
                  {platform}
                </span>
              ))}
            </div>
          </ScrollAnimation>

          {/* Hero Visual - Video Preview */}
          <ScrollAnimation type="scale" delay={0.5}>
            <div className="relative max-w-4xl mx-auto">
              <div className="relative rounded-2xl glass-card-strong overflow-hidden shadow-glow">
                {/* Terminal Header Chrome */}
                <div className="flex items-center gap-2 px-4 py-3 border-b border-border/50 bg-secondary/30">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-destructive/80" />
                    <div className="w-3 h-3 rounded-full bg-warning/80" />
                    <div className="w-3 h-3 rounded-full bg-success/80" />
                  </div>
                  <div className="flex-1 mx-4">
                    <div className="max-w-md mx-auto h-6 rounded-md bg-secondary/50 flex items-center px-3">
                      <span className="text-xs text-muted-foreground font-mono">mrarchitect.ai/blueprint/new</span>
                    </div>
                  </div>
                  <Cpu className="h-4 w-4 text-primary animate-pulse" />
                </div>

                {/* Video */}
                <video
                  src="/Blueprint_Hero_Load.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-auto block"
                />
              </div>

              {/* Glow Effect */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 blur-xl -z-10 animate-glow-pulse" />
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
}
