import { forwardRef } from 'react';
import { Bot, Github, Twitter } from 'lucide-react';
import { useLocale } from '@/contexts/LocaleContext';

export const Footer = forwardRef<HTMLElement>(function Footer(_, ref) {
  const { t } = useLocale();

  return (
    <footer ref={ref} className="border-t border-border/30 bg-secondary/20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <a href="/" className="flex items-center gap-2 mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 border border-primary/30">
                <Bot className="h-4 w-4 text-primary" />
              </div>
              <span className="font-display text-lg font-bold">Mr.Architect</span>
            </a>
            <p className="text-sm text-muted-foreground mb-4">
              AI-powered website blueprint generator for modern builders.
            </p>
            <div className="flex items-center gap-3">
              <a href="#" className="p-2 rounded-lg bg-secondary/50 hover:bg-secondary text-muted-foreground hover:text-foreground transition-colors">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-secondary/50 hover:bg-secondary text-muted-foreground hover:text-foreground transition-colors">
                <Github className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-display font-semibold mb-4 text-foreground">{t.footer.product}</h4>
            <ul className="space-y-2">
              <li>
                <a href="#features" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {t.footer.features}
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {t.footer.docs}
                </a>
              </li>
            </ul>
          </div>

          {/* AI Platforms */}
          <div>
            <h4 className="font-display font-semibold mb-4 text-foreground">AI Platforms</h4>
            <ul className="space-y-2">
              {['Lovable', 'Cursor', 'Bolt.new', 'Replit', 'V0'].map((platform) => (
                <li key={platform}>
                  <span className="text-sm text-muted-foreground">{platform}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-display font-semibold mb-4 text-foreground">{t.footer.legal}</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {t.footer.privacy}
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {t.footer.terms}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border/30 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © 2024 Mr.Architect. Open source and free to use.
          </p>
          <p className="text-xs text-muted-foreground font-mono">
            Built for the AI builder community
          </p>
        </div>
      </div>
    </footer>
  );
});
