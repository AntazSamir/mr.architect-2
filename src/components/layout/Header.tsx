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
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center px-6 pt-4 pointer-events-none">
      <header
        className={cn(
          'pointer-events-auto w-full max-w-4xl',
          'rounded-2xl border border-border/40 shadow-2xl shadow-black/30',
          'bg-background/70 supports-[backdrop-filter]:bg-background/60 backdrop-blur-2xl',
          'transition-all duration-300'
        )}
      >
        <nav className="flex h-14 items-center justify-between px-4 gap-4">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 group flex-shrink-0">
            <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-primary/10 border border-primary/30 group-hover:shadow-glow-cyan transition-all duration-300">
              <Bot className="h-4 w-4 text-primary" />
            </div>
            <span className="font-display text-lg font-bold text-foreground">
              Mr.<span className="text-primary">Architect</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            <a href="#features" className="px-3 py-1.5 text-sm font-medium text-muted-foreground hover:text-primary hover:bg-primary/5 rounded-lg transition-all duration-200">
              {t.nav.features}
            </a>
            <button
              onClick={() => navigate('/demos')}
              className="px-3 py-1.5 text-sm font-medium text-muted-foreground hover:text-primary hover:bg-primary/5 rounded-lg transition-all duration-200 cursor-pointer"
            >
              Blueprints
            </button>
            <a href="#how-it-works" className="px-3 py-1.5 text-sm font-medium text-muted-foreground hover:text-primary hover:bg-primary/5 rounded-lg transition-all duration-200">
              {t.nav.howItWorks}
            </a>
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-2 flex-shrink-0">
            <LanguageSelector />
            <Button
              variant="hero"
              size="sm"
              onClick={() => navigate('/create')}
              className="rounded-xl"
            >
              <Sparkles className="h-3.5 w-3.5 mr-1.5" />
              Generate Blueprint
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-secondary transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </nav>

        {/* Mobile Menu */}
        <div
          className={cn(
            "md:hidden border-t border-border/30 transition-all duration-300 overflow-hidden",
            mobileMenuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
          )}
        >
          <div className="px-4 py-4 space-y-1">
            <a href="#features" className="block px-3 py-2 text-sm font-medium text-muted-foreground hover:text-primary hover:bg-primary/5 rounded-lg transition-colors">
              {t.nav.features}
            </a>
            <a onClick={() => navigate('/demos')} className="block px-3 py-2 text-sm font-medium text-muted-foreground hover:text-primary hover:bg-primary/5 rounded-lg transition-colors cursor-pointer">
              Blueprints
            </a>
            <a href="#how-it-works" className="block px-3 py-2 text-sm font-medium text-muted-foreground hover:text-primary hover:bg-primary/5 rounded-lg transition-colors">
              {t.nav.howItWorks}
            </a>
            <div className="flex flex-col sm:flex-row items-center gap-3 pt-3 mt-2 border-t border-border/30">
              <LanguageSelector />
              <Button
                variant="hero"
                size="sm"
                className="w-full rounded-xl"
                onClick={() => navigate('/create')}
              >
                <Sparkles className="h-3.5 w-3.5 mr-1.5" />
                Generate Blueprint
              </Button>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
