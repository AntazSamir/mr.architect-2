import { useState } from 'react';
import { Menu, X, Bot, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLocale } from '@/contexts/LocaleContext';
import { LanguageSelector } from '@/components/LanguageSelector';
import { cn } from '@/lib/utils';
import { useNavigate } from 'react-router-dom';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t } = useLocale();
  const navigate = useNavigate();

  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-6 pointer-events-none">
      <header
        className={cn(
          'pointer-events-auto w-full max-w-7xl transition-all duration-500',
          'rounded-full border border-white/5 shadow-2xl shadow-black/50',
          'bg-black/20 backdrop-blur-xl'
        )}
      >
        <nav className="flex h-16 items-center justify-between px-8">
          {/* Technical Brand Node */}
          <a href="/" className="flex items-center gap-3 flex-shrink-0 group">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 border border-primary/20 group-hover:border-primary group-hover:scale-110 transition-all duration-300">
              <Bot className="h-5 w-5 text-primary" />
            </div>
            <div className="flex flex-col">
              <span className="font-display text-lg font-bold text-white tracking-widest uppercase italic leading-none">Mr.Architect</span>
              <span className="text-[7px] font-mono text-muted-foreground/30 tracking-[0.4em] uppercase mt-1">SYS_ACTIVE</span>
            </div>
          </a>

          {/* Desktop Navigation Node - Pill Style */}
          <div className="hidden md:flex items-center pill-nav-container">
            {[
              { label: 'Protocols', href: '/#features' },
              { label: 'Blueprints', onClick: () => navigate('/demos') },
              { label: 'Workflow', href: '/#how-it-works' },
              { label: 'Docs', onClick: () => navigate('/docs') },
              { label: 'FAQ', href: '/#faq' }
            ].map((item) => (
              item.href ? (
                <a 
                  key={item.label}
                  href={item.href} 
                  className="px-5 py-2 text-[10px] font-mono font-bold text-white/50 hover:text-primary transition-all uppercase tracking-[0.2em] hover:bg-white/5 rounded-full"
                >
                  {item.label}
                </a>
              ) : (
                <button
                  key={item.label}
                  onClick={item.onClick}
                  className="px-5 py-2 text-[10px] font-mono font-bold text-white/50 hover:text-primary transition-all uppercase tracking-[0.2em] cursor-pointer hover:bg-white/5 rounded-full"
                >
                  {item.label}
                </button>
              )
            ))}
          </div>

          {/* Desktop Action Registry */}
          <div className="hidden md:flex items-center gap-6 flex-shrink-0">
            <button className="text-[10px] font-mono font-bold text-white/50 hover:text-white uppercase tracking-widest transition-colors">
              Log In
            </button>
            <div className="flex items-center gap-4">
              <LanguageSelector />
              <Button
                variant="hero"
                size="sm"
                onClick={() => navigate('/create')}
                className="bg-primary text-black font-bold text-[10px] font-mono uppercase tracking-[0.2em] px-6 rounded-full hover:bg-primary/90 hover:scale-105 hover:translate-y-0 transition-all duration-300 shadow-none hover:shadow-[0_0_20px_rgba(0,255,255,0.3)]"
              >
                GENERATE_SYSTEM
              </Button>
            </div>
          </div>

          {/* Mobile Terminal Trigger */}
          <button
            className="md:hidden p-2 text-muted-foreground hover:text-primary transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </nav>

        {/* Mobile Terminal Overlay */}
        <div
          className={cn(
            "md:hidden transition-all duration-500 overflow-hidden bg-[#0d1117] border-t border-white/5",
            mobileMenuOpen ? "max-h-[500px] opacity-100 py-6" : "max-h-0 opacity-0"
          )}
        >
          <div className="px-6 space-y-2">
            {[
              { label: 'Protocols', href: '/#features' },
              { label: 'Blueprints', onClick: () => navigate('/demos') },
              { label: 'Workflow', href: '/#how-it-works' },
              { label: 'Docs', onClick: () => navigate('/docs') },
              { label: 'FAQ', href: '/#faq' }
            ].map((item) => (
              item.href ? (
                <a 
                  key={item.label}
                  href={item.href} 
                  className="block px-4 py-3 text-xs font-mono font-bold text-muted-foreground/60 hover:text-primary bg-white/5 rounded-sm transition-all uppercase tracking-[0.2em]"
                >
                  {item.label}
                </a>
              ) : (
                <button
                  key={item.label}
                  onClick={item.onClick}
                  className="w-full text-left block px-4 py-3 text-xs font-mono font-bold text-muted-foreground/60 hover:text-primary bg-white/5 rounded-sm transition-all uppercase tracking-[0.2em] cursor-pointer"
                >
                  {item.label}
                </button>
              )
            ))}
            <div className="flex flex-col gap-4 pt-6 border-t border-white/5 mt-4">
              <LanguageSelector />
              <Button
                variant="hero"
                size="lg"
                className="w-full bg-primary text-black font-bold text-[10px] font-mono uppercase tracking-[0.3em] rounded-none hover:bg-primary/90 hover:scale-[1.02] hover:translate-y-0 transition-all duration-300 shadow-none hover:shadow-[0_0_20px_rgba(0,255,255,0.3)]"
                onClick={() => navigate('/create')}
              >
                GENERATE_SYSTEM
              </Button>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
