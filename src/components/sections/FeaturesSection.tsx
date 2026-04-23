import {
  LayoutGrid,
  Palette,
  Search,
  Code2,
  FileOutput,
  Terminal,
  LucideIcon,
  ArrowRight
} from 'lucide-react';
import { useLocale } from '@/contexts/LocaleContext';
import { useNavigate } from 'react-router-dom';
import { ScrollAnimation, StaggerContainer, StaggerItem } from '@/components/ui/scroll-animation';

type ColorVariant = 'primary' | 'accent' | 'success' | 'warning';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
  variant: ColorVariant;
  onClick?: () => void;
  isLarge?: boolean;
}

const variantStyles: Record<ColorVariant, { icon: string; border: string; glow: string; text: string; hoverText: string; glowLine: string }> = {
  primary: {
    icon: 'text-primary bg-primary/10',
    border: 'group-hover:border-primary/50',
    glow: 'group-hover:shadow-[0_0_20px_-5px_hsl(var(--primary)/0.4)]',
    text: 'text-primary',
    hoverText: 'group-hover:text-primary',
    glowLine: 'group-hover:via-primary/50'
  },
  accent: {
    icon: 'text-accent bg-accent/10',
    border: 'group-hover:border-accent/50',
    glow: 'group-hover:shadow-[0_0_20px_-5px_hsl(var(--accent)/0.4)]',
    text: 'text-accent',
    hoverText: 'group-hover:text-accent',
    glowLine: 'group-hover:via-accent/50'
  },
  success: {
    icon: 'text-success bg-success/10',
    border: 'group-hover:border-success/50',
    glow: 'group-hover:shadow-[0_0_20px_-5px_hsl(var(--success)/0.4)]',
    text: 'text-success',
    hoverText: 'group-hover:text-success',
    glowLine: 'group-hover:via-success/50'
  },
  warning: {
    icon: 'text-warning bg-warning/10',
    border: 'group-hover:border-warning/50',
    glow: 'group-hover:shadow-[0_0_20px_-5px_hsl(var(--warning)/0.4)]',
    text: 'text-warning',
    hoverText: 'group-hover:text-warning',
    glowLine: 'group-hover:via-warning/50'
  }
};

function FeatureCard({ icon: Icon, title, description, index, variant, onClick, isLarge }: FeatureCardProps) {
  const styles = variantStyles[variant];

  return (
    <StaggerItem
      onClick={onClick}
      className={`group relative h-full bg-[#0d1117] border border-white/5 p-8 rounded-sm hover:bg-[#121820] transition-all duration-500 overflow-hidden ${styles.border} ${styles.glow} ${onClick ? 'cursor-pointer' : ''}`}
    >
      {/* Decorative Node ID */}
      <div className="absolute top-4 right-4 font-mono text-[8px] text-muted-foreground/30 select-none">
        NODE_0{index + 1}
      </div>

      {/* Icon Area */}
      <div className={`mb-8 inline-flex items-center justify-center w-12 h-12 rounded-sm border border-white/5 transition-all duration-500 ${styles.icon}`}>
        <Icon className="h-6 w-6" />
      </div>

      {/* Main Content */}
      <div className="relative space-y-4">
        <h3 className={`text-xl font-display font-bold text-white tracking-tight ${styles.hoverText} transition-colors`}>
          {title.toUpperCase()}
        </h3>
        <p className="text-sm text-muted-foreground/60 leading-relaxed font-sans min-h-[60px]">
          {description}
        </p>
      </div>

      {/* Interactive Footer */}
      {onClick && (
        <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between">
          <span className={`text-[10px] font-mono font-bold tracking-widest ${styles.text}`}>DEPLOY_PROTOCOL</span>
          <ArrowRight className={`h-4 w-4 ${styles.text} group-hover:translate-x-1 transition-transform`} />
        </div>
      )}

      {/* Selection Glow */}
      <div className={`absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-transparent to-transparent ${styles.glowLine} transition-all duration-700`} />
    </StaggerItem>
  );
}

export function FeaturesSection() {
  const { t } = useLocale();
  const navigate = useNavigate();

  const features: Array<{
    icon: LucideIcon;
    title: string;
    description: string;
    variant: ColorVariant;
    path?: string;
  }> = [
      {
        icon: LayoutGrid,
        title: 'Complete Architecture',
        description: 'Get a detailed sitemap, page hierarchy, and component structure tailored to your project needs.',
        variant: 'primary',
        path: '/features/architecture'
      },
      {
        icon: Palette,
        title: 'Smart Design System',
        description: 'Auto-generate a consistent design system that reflects your brand identity and scales effortlessly across multi-AI builders.',
        variant: 'accent',
        path: '/features/design-system'
      },
      {
        icon: Search,
        title: 'SEO Foundation',
        description: 'Built-in meta tags, structured data, and content strategies for search visibility.',
        variant: 'success',
        path: '/features/seo-foundation'
      },
      {
        icon: Code2,
        title: 'Tech Stack',
        description: 'Smart recommendations for frameworks, libraries, and tools based on your requirements.',
        variant: 'warning',
        path: '/features/tech-stack'
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
    <section id="features" className="py-24 md:py-32 relative bg-[#0a0e14] overflow-hidden">
      {/* Background Schema */}
      <div className="absolute inset-0 grid-pattern opacity-10 -z-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(0,255,255,0.03)_0%,transparent_70%)] -z-10" />

      <div className="container relative mx-auto px-6">
        {/* Cinematic Header */}
        <ScrollAnimation type="fade-up" className="max-w-4xl mx-auto text-center mb-24">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-[10px] font-mono tracking-[0.2em] text-primary uppercase mb-6">
            CORE_SYSTEM_CAPABILITIES v2.0
          </div>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold tracking-tighter text-white mb-8">
            Engineered for <span className="text-primary italic">Precision</span>.
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground/70 max-w-2xl mx-auto leading-relaxed">
            Eliminate architectural uncertainty. Our synthesis engine generates 
            production-grade primitives for every layer of your application.
          </p>
        </ScrollAnimation>

        {/* Technical Node Grid */}
        <StaggerContainer staggerDelay={0.08} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              variant={feature.variant}
              index={index}
              onClick={feature.path ? () => navigate(feature.path) : undefined}
            />
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
