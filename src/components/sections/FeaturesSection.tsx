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

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
  color: string;
}

function FeatureCard({ icon: Icon, title, description, index, color }: FeatureCardProps) {
  return (
    <div 
      className="group relative p-6 rounded-2xl glass-card hover:glass-card-strong transition-all duration-500 animate-slide-up"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Icon */}
      <div className={`mb-4 inline-flex items-center justify-center w-12 h-12 rounded-xl ${color} transition-all duration-300 group-hover:shadow-glow-cyan`}>
        <Icon className="h-6 w-6" />
      </div>
      
      {/* Content */}
      <h3 className="font-display text-lg font-semibold mb-2 text-foreground">{title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
      
      {/* Hover Border Glow */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 glow-border pointer-events-none" />
    </div>
  );
}

export function FeaturesSection() {
  const { t } = useLocale();

  const features = [
    {
      icon: LayoutGrid,
      title: 'Complete Architecture',
      description: 'Get a detailed sitemap, page hierarchy, and component structure tailored to your project needs.',
      color: 'bg-primary/20 text-primary',
    },
    {
      icon: Palette,
      title: 'Design System',
      description: 'Receive color palettes, typography scales, and spacing guidelines ready for implementation.',
      color: 'bg-accent/20 text-accent',
    },
    {
      icon: Search,
      title: 'SEO Foundation',
      description: 'Built-in meta tags, structured data, and content strategies for search visibility.',
      color: 'bg-success/20 text-success',
    },
    {
      icon: Code2,
      title: 'Tech Stack',
      description: 'Smart recommendations for frameworks, libraries, and tools based on your requirements.',
      color: 'bg-warning/20 text-warning',
    },
    {
      icon: Terminal,
      title: 'AI Builder Prompts',
      description: 'Ready-to-use prompts optimized for Lovable, Cursor, Bolt.new, Replit, and V0.',
      color: 'bg-primary/20 text-primary',
    },
    {
      icon: FileOutput,
      title: 'Export Options',
      description: 'Download your blueprint as PDF, Markdown, or copy prompts directly to clipboard.',
      color: 'bg-accent/20 text-accent',
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

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              color={feature.color}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
