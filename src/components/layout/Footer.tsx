import { forwardRef } from 'react';
import { Bot, Github, Twitter } from 'lucide-react';
import { useLocale } from '@/contexts/LocaleContext';

export const Footer = forwardRef<HTMLElement>(function Footer(_, ref) {
  const { t } = useLocale();

  return (
    <footer ref={ref} className="bg-[#0a0e14] border-t border-white/5 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 grid-pattern opacity-[0.03] -z-10" />
      
      <div className="container mx-auto px-6 py-16 md:py-24 relative">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand Technical Node */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex flex-col gap-6">
              <a href="/" className="flex items-center gap-3 group">
                <div className="flex h-10 w-10 items-center justify-center rounded-sm bg-primary/10 border border-primary/20 group-hover:border-primary transition-colors">
                  <Bot className="h-5 w-5 text-primary" />
                </div>
                <div className="flex flex-col">
                  <span className="font-display text-xl font-bold text-white tracking-widest uppercase italic">Mr.Architect</span>
                  <span className="text-[8px] font-mono text-muted-foreground/30 tracking-[0.4em] uppercase">SYSTEM_MANIFEST v2.0</span>
                </div>
              </a>
              <p className="text-sm text-muted-foreground/60 leading-relaxed max-w-xs font-sans">
                Engineered for the autonomous era. Synthesizing high-fidelity 
                architectural blueprints for elite digital infrastructure.
              </p>
              <div className="flex items-center gap-4">
                <a href="#" className="w-8 h-8 flex items-center justify-center rounded-sm border border-white/5 bg-white/5 hover:border-primary/50 hover:text-primary transition-all text-muted-foreground/60">
                  <Twitter className="h-4 w-4" />
                </a>
                <a href="#" className="w-8 h-8 flex items-center justify-center rounded-sm border border-white/5 bg-white/5 hover:border-primary/50 hover:text-primary transition-all text-muted-foreground/60">
                  <Github className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Registry Index */}
          <div>
            <h4 className="text-[10px] font-mono font-bold tracking-[0.3em] text-primary uppercase mb-8 opacity-40">PROTOCOL_INDEX</h4>
            <ul className="space-y-4">
              {['Features', 'Synthesis', 'Deployment', 'Documentation'].map((item) => (
                <li key={item}>
                  <a href={`/#${item.toLowerCase()}`} className="text-xs font-mono text-muted-foreground/60 hover:text-white transition-colors uppercase tracking-widest">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Node Infrastructure */}
          <div>
            <h4 className="text-[10px] font-mono font-bold tracking-[0.3em] text-primary uppercase mb-8 opacity-40">CORE_NETWORK</h4>
            <ul className="space-y-4">
              {['LOVABLE_GEN', 'CURSOR_IDE', 'BOLT_ENGINE', 'REPLIT_ENV', 'V0_SYNTH'].map((platform) => (
                <li key={platform}>
                   <span className="text-xs font-mono text-muted-foreground/40 uppercase tracking-widest">{platform}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Protocol */}
          <div>
            <h4 className="text-[10px] font-mono font-bold tracking-[0.3em] text-primary uppercase mb-8 opacity-40">LEGAL_PROTOCOL</h4>
            <ul className="space-y-4">
              <li>
                <a href="/#faq" className="text-xs font-mono text-muted-foreground/60 hover:text-white transition-colors uppercase tracking-widest">
                  PRIVACY_MANIFEST
                </a>
              </li>
              <li>
                <a href="/#faq" className="text-xs font-mono text-muted-foreground/60 hover:text-white transition-colors uppercase tracking-widest">
                  TERMS_CORE
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Global Signature */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col md:items-start items-center">
            <p className="text-[10px] font-mono text-muted-foreground/20 uppercase tracking-[0.3em]">
              © 2026 MR_ARCHITECT // GLOBAL_SYNTHESIS_NETWORK
            </p>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              <span className="text-[10px] font-mono text-primary uppercase tracking-[0.2em]">NETWORK_STATUS: ACTIVE</span>
            </div>
            <span className="text-[10px] font-mono text-muted-foreground/20 uppercase tracking-[0.2em]">BUILD_PROT: 0x82F1</span>
          </div>
        </div>
      </div>
    </footer>
  );
});
