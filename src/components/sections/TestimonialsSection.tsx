import { Star, Quote } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  avatar: string;
  content: string;
  rating: number;
  variant: 'primary' | 'accent' | 'success' | 'warning';
  size: 'small' | 'medium' | 'large';
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Sarah Chen',
    role: 'Founder',
    company: 'TechStart',
    avatar: 'SC',
    content: 'Blueprint AI saved me weeks of planning. I went from idea to a fully functional MVP in just 3 days using the generated prompts with Lovable.',
    rating: 5,
    variant: 'primary',
    size: 'large',
  },
  {
    id: 2,
    name: 'Marcus Johnson',
    role: 'Product Designer',
    company: 'DesignCo',
    avatar: 'MJ',
    content: 'The design system recommendations are spot-on. Every project starts with a solid foundation.',
    rating: 5,
    variant: 'accent',
    size: 'small',
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'Full-Stack Dev',
    company: 'DevAgency',
    avatar: 'ER',
    content: 'Finally, a tool that understands what AI builders need. The prompts work perfectly with Cursor.',
    rating: 5,
    variant: 'success',
    size: 'small',
  },
  {
    id: 4,
    name: 'Alex Kim',
    role: 'Indie Hacker',
    company: 'SoloBuilds',
    avatar: 'AK',
    content: 'I\'ve launched 4 projects this month alone. Blueprint AI handles the architecture so I can focus on what matters — shipping fast.',
    rating: 5,
    variant: 'warning',
    size: 'medium',
  },
  {
    id: 5,
    name: 'David Park',
    role: 'CTO',
    company: 'StartupXYZ',
    avatar: 'DP',
    content: 'Our team uses this for every new project. The SEO foundations alone are worth it.',
    rating: 5,
    variant: 'primary',
    size: 'medium',
  },
];

type ColorVariant = 'primary' | 'accent' | 'success' | 'warning';

const variantStyles: Record<ColorVariant, { border: string; quote: string; avatar: string; glow: string }> = {
  primary: {
    border: 'border-primary/20 hover:border-primary/50',
    quote: 'text-primary/30',
    avatar: 'bg-primary/20 text-primary',
    glow: 'hover:shadow-[0_0_30px_-5px_hsl(var(--primary)/0.3)]',
  },
  accent: {
    border: 'border-accent/20 hover:border-accent/50',
    quote: 'text-accent/30',
    avatar: 'bg-accent/20 text-accent',
    glow: 'hover:shadow-[0_0_30px_-5px_hsl(var(--accent)/0.3)]',
  },
  success: {
    border: 'border-success/20 hover:border-success/50',
    quote: 'text-success/30',
    avatar: 'bg-success/20 text-success',
    glow: 'hover:shadow-[0_0_30px_-5px_hsl(var(--success)/0.3)]',
  },
  warning: {
    border: 'border-warning/20 hover:border-warning/50',
    quote: 'text-warning/30',
    avatar: 'bg-warning/20 text-warning',
    glow: 'hover:shadow-[0_0_30px_-5px_hsl(var(--warning)/0.3)]',
  },
};

function TestimonialCard({ testimonial, index }: { testimonial: Testimonial; index: number }) {
  const styles = variantStyles[testimonial.variant];
  
  const sizeClasses = {
    small: 'col-span-1 row-span-1',
    medium: 'col-span-1 sm:col-span-2 lg:col-span-1 row-span-1',
    large: 'col-span-2 row-span-1 sm:row-span-2 lg:row-span-1',
  };

  return (
    <div
      className={`group relative p-4 sm:p-6 rounded-xl sm:rounded-2xl glass-card border transition-all duration-500 animate-slide-up ${styles.border} ${styles.glow} ${sizeClasses[testimonial.size]}`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Quote Icon */}
      <Quote className={`absolute top-4 right-4 h-6 w-6 sm:h-8 sm:w-8 ${styles.quote}`} />

      {/* Content */}
      <div className="flex flex-col h-full">
        {/* Rating */}
        <div className="flex gap-0.5 mb-3">
          {Array.from({ length: testimonial.rating }).map((_, i) => (
            <Star key={i} className="h-3.5 w-3.5 sm:h-4 sm:w-4 fill-warning text-warning" />
          ))}
        </div>

        {/* Quote */}
        <p className="text-xs sm:text-sm text-foreground/90 leading-relaxed flex-1 mb-4">
          "{testimonial.content}"
        </p>

        {/* Author */}
        <div className="flex items-center gap-3 mt-auto">
          <div className={`flex-shrink-0 w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-xs sm:text-sm font-semibold ${styles.avatar}`}>
            {testimonial.avatar}
          </div>
          <div className="min-w-0">
            <p className="text-sm font-medium text-foreground truncate">{testimonial.name}</p>
            <p className="text-xs text-muted-foreground truncate">
              {testimonial.role} at {testimonial.company}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 md:py-32 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-secondary/20" />
      <div className="absolute inset-0 grid-pattern opacity-30" />

      <div className="container relative mx-auto px-4">
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-12 sm:mb-16">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-mono uppercase tracking-widest text-success bg-success/10 border border-success/20 mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold tracking-tight mb-4 text-foreground">
            Loved by Builders Worldwide
          </h2>
          <p className="text-lg text-muted-foreground">
            Join thousands of developers and founders shipping faster with Blueprint AI.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} index={index} />
          ))}
        </div>

        {/* Stats */}
        <div className="mt-12 sm:mt-16 grid grid-cols-3 gap-4 sm:gap-8 max-w-2xl mx-auto">
          {[
            { value: '10k+', label: 'Blueprints Generated' },
            { value: '98%', label: 'Satisfaction Rate' },
            { value: '50+', label: 'Countries' },
          ].map((stat, index) => (
            <div 
              key={stat.label} 
              className="text-center animate-fade-in"
              style={{ animationDelay: `${0.5 + index * 0.1}s` }}
            >
              <p className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-gradient mb-1">
                {stat.value}
              </p>
              <p className="text-xs sm:text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}