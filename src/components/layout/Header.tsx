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
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/30 bg-background/60 backdrop-blur-2xl">
      <nav className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2 group">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10 border border-primary/30 group-hover:shadow-glow-cyan transition-all duration-300">
            <Bot className="h-5 w-5 text-primary" />
          </div>
          <span className="font-display text-xl font-bold">
            Mr.<span className="text-gradient">Architect</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            {t.nav.features}
          </a>
          <a href="#how-it-works" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            {t.nav.howItWorks}
          </a>
        </div>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-3">
          <LanguageSelector />
          <Button 
            variant="hero" 
            size="sm"
            onClick={() => navigate('/create')}
          >
            <Sparkles className="h-4 w-4 mr-2" />
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
          "md:hidden absolute top-16 left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-border shadow-lg transition-all duration-300 overflow-hidden",
          mobileMenuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="container mx-auto px-4 py-4 space-y-4">
          <a href="#features" className="block py-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            {t.nav.features}
          </a>
          <a href="#how-it-works" className="block py-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            {t.nav.howItWorks}
          </a>
          <div className="flex items-center gap-3 pt-2 border-t border-border">
            <LanguageSelector />
            <Button 
              variant="hero" 
              size="sm" 
              className="flex-1"
              onClick={() => navigate('/create')}
            >
              <Sparkles className="h-4 w-4 mr-2" />
              Generate Blueprint
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
