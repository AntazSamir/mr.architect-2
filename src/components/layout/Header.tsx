import { useState } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLocale } from '@/contexts/LocaleContext';
import { LanguageSelector } from '@/components/LanguageSelector';
import { cn } from '@/lib/utils';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t } = useLocale();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <nav className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2 group">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl gradient-primary shadow-md group-hover:shadow-glow transition-shadow duration-300">
            <Sparkles className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className="font-display text-xl font-bold">
            Mr. <span className="text-gradient">Architect</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            {t.nav.features}
          </a>
          <a href="#how-it-works" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            {t.nav.howItWorks}
          </a>
          <a href="#pricing" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            {t.nav.pricing}
          </a>
        </div>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-3">
          <LanguageSelector />
          <Button variant="ghost" size="sm">
            {t.nav.login}
          </Button>
          <Button variant="gradient" size="sm">
            {t.nav.getStarted}
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
          "md:hidden absolute top-16 left-0 right-0 bg-background border-b border-border shadow-lg transition-all duration-300 overflow-hidden",
          mobileMenuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="container mx-auto px-4 py-4 space-y-4">
          <a href="#features" className="block py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            {t.nav.features}
          </a>
          <a href="#how-it-works" className="block py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            {t.nav.howItWorks}
          </a>
          <a href="#pricing" className="block py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            {t.nav.pricing}
          </a>
          <div className="flex items-center gap-3 pt-2 border-t border-border">
            <LanguageSelector />
            <Button variant="ghost" size="sm" className="flex-1">
              {t.nav.login}
            </Button>
            <Button variant="gradient" size="sm" className="flex-1">
              {t.nav.getStarted}
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
