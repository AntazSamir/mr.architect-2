import {
  LayoutGrid,
  Palette,
  Search,
  Code2,
  FileOutput,
  Terminal,
  LucideIcon
} from 'lucide-react';
import { useLocale } from '@/contexts/LocaleContext';

type ColorVariant = 'primary' | 'accent' | 'success' | 'warning';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
  variant: ColorVariant;
  isLarge?: boolean;
}

const variantStyles: Record<ColorVariant, { icon: string; border: string; shadow: string; iconGlow: string; bg: string }> = {
  primary: {
    icon: 'bg-primary/20 text-primary',
    border: 'hover:border-primary/50',
    shadow: 'hover:shadow-[0_0_30px_-5px_hsl(var(--primary)/0.3)]',
    iconGlow: 'group-hover:shadow-[0_0_20px_hsl(var(--primary)/0.5)]',
    bg: 'hover:bg-primary/5',
  },
  accent: {
    icon: 'bg-accent/20 text-accent',
    border: 'hover:border-accent/50',
    shadow: 'hover:shadow-[0_0_30px_-5px_hsl(var(--accent)/0.3)]',
    iconGlow: 'group-hover:shadow-[0_0_20px_hsl(var(--accent)/0.5)]',
    bg: 'hover:bg-accent/5',
  },
  success: {
    icon: 'bg-success/20 text-success',
    border: 'hover:border-success/50',
    shadow: 'hover:shadow-[0_0_30px_-5px_hsl(var(--success)/0.3)]',
    iconGlow: 'group-hover:shadow-[0_0_20px_hsl(var(--success)/0.5)]',
    bg: 'hover:bg-success/5',
  },
  warning: {
    icon: 'bg-warning/20 text-warning',
    border: 'hover:border-warning/50',
    shadow: 'hover:shadow-[0_0_30px_-5px_hsl(var(--warning)/0.3)]',
    iconGlow: 'group-hover:shadow-[0_0_20px_hsl(var(--warning)/0.5)]',
    bg: 'hover:bg-warning/5',
  },
};

function FeatureCard({ icon: Icon, title, description, index, variant, isLarge }: FeatureCardProps) {
  const styles = variantStyles[variant];

  return (
    <div
      className={`group relative p-4 sm:p-6 rounded-xl sm:rounded-2xl glass-card hover:backdrop-blur-2xl transition-all duration-500 animate-slide-up ${styles.border} ${styles.shadow} ${styles.bg} ${isLarge ? 'col-span-2 sm:col-span-1' : ''}`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Icon */}
      <div className={`mb-3 sm:mb-4 inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl transition-all duration-300 ${styles.icon} ${styles.iconGlow}`}>
        <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
      </div>

      {/* Content */}
      <h3 className="font-display text-sm sm:text-lg font-semibold mb-1 sm:mb-2 text-foreground">{title}</h3>
      <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{description}</p>
    </div>
  );
}

export function FeaturesSection() {
  const { t } = useLocale();

  const features: Array<{
    icon: LucideIcon;
    title: string;
    description: string;
    variant: ColorVariant;
  }> = [
      {
        icon: LayoutGrid,
        title: 'Complete Architecture',
        description: 'Get a detailed sitemap, page hierarchy, and component structure tailored to your project needs.',
        variant: 'primary',
      },
      {
        icon: Palette,
        title: 'Design System',
        description: 'Receive color palettes, typography scales, and spacing guidelines ready for implementation.',
        variant: 'accent',
      },
      {
        icon: Search,
        title: 'SEO Foundation',
        description: 'Built-in meta tags, structured data, and content strategies for search visibility.',
        variant: 'success',
      },
      {
        icon: Code2,
        title: 'Tech Stack',
        description: 'Smart recommendations for frameworks, libraries, and tools based on your requirements.',
        variant: 'warning',
      },
      {
        icon: Terminal,
        title: 'AI Builder Prompts',
        description: 'Ready-to-use prompts optimized for Lovable, Cursor, Bolt.new, Replit, and V0.',
        variant: 'primary',
      },
      {
        icon: FileOutput,
        title: 'Export Options',
        description: 'Download your blueprint as PDF, Markdown, or copy prompts directly to clipboard.',
        variant: 'accent',
      },
    ];

  return (
    <section id="features" className="py-24 md:py-32 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-secondary/20" />
      <div className="absolute inset-0 grid-pattern opacity-50" />

      <div className="container relative mx-auto px-4">
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-mono uppercase tracking-widest text-primary bg-primary/10 border border-primary/20 mb-4">
            Features
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold tracking-tight mb-4 text-foreground">
            Everything You Need to Build Faster
          </h2>
          <p className="text-lg text-muted-foreground">
            Generate comprehensive blueprints that work seamlessly with modern AI coding assistants.
          </p>
        </div>

        {/* Features Grid - Bento on mobile */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              variant={feature.variant}
              index={index}
              isLarge={index === 0 || index === 3}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
