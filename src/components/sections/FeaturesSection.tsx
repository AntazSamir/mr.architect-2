import { 
  LayoutGrid, 
  Palette, 
  Search, 
  Code2, 
  FileOutput, 
  Users,
  LucideIcon
} from 'lucide-react';
import { useLocale } from '@/contexts/LocaleContext';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
}

function FeatureCard({ icon: Icon, title, description, index }: FeatureCardProps) {
  return (
    <div 
      className="group relative p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300 animate-slide-up"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Icon */}
      <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
        <Icon className="h-6 w-6" />
      </div>
      
      {/* Content */}
      <h3 className="font-display text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
      
      {/* Hover Glow */}
      <div className="absolute inset-0 rounded-2xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
    </div>
  );
}

export function FeaturesSection() {
  const { t } = useLocale();

  const features = [
    {
      icon: LayoutGrid,
      title: t.features.architecture.title,
      description: t.features.architecture.description,
    },
    {
      icon: Palette,
      title: t.features.design.title,
      description: t.features.design.description,
    },
    {
      icon: Search,
      title: t.features.seo.title,
      description: t.features.seo.description,
    },
    {
      icon: Code2,
      title: t.features.techStack.title,
      description: t.features.techStack.description,
    },
    {
      icon: FileOutput,
      title: t.features.export.title,
      description: t.features.export.description,
    },
    {
      icon: Users,
      title: t.features.collaboration.title,
      description: t.features.collaboration.description,
    },
  ];

  return (
    <section id="features" className="py-20 md:py-32 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-secondary/30" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
      
      <div className="container relative mx-auto px-4">
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold tracking-tight mb-4">
            {t.features.sectionTitle}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t.features.sectionSubtitle}
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
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
