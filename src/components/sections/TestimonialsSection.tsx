import { Star, Quote } from 'lucide-react';
import { ScrollAnimation, StaggerContainer, StaggerItem } from '@/components/ui/scroll-animation';
import { useIsMobile } from '@/hooks/use-mobile';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  avatar: string;
  avatarImage?: string;
  content: string;
  rating: number;
  handle: string;
  date: string;
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
    avatarImage: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&auto=format&fit=crop&q=60',
    content: 'Blueprint AI saved me weeks of planning. I went from idea to a fully functional MVP in just 3 days using the generated prompts with Lovable.',
    rating: 5,
    handle: '@sarahbuilds',
    date: 'Jan 15, 2026',
    variant: 'primary',
    size: 'large',
  },
  {
    id: 2,
    name: 'Marcus Johnson',
    role: 'Product Designer',
    company: 'DesignCo',
    avatar: 'MJ',
    avatarImage: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200',
    content: 'The design system recommendations are spot-on. Every project starts with a solid foundation.',
    rating: 5,
    handle: '@marcusdesigns',
    date: 'Dec 20, 2025',
    variant: 'accent',
    size: 'small',
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'Full-Stack Dev',
    company: 'DevAgency',
    avatar: 'ER',
    avatarImage: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&auto=format&fit=crop&q=60',
    content: 'Finally, a tool that understands what AI builders need. The prompts work perfectly with Cursor and Lovable alike.',
    rating: 5,
    handle: '@emilydev',
    date: 'Jan 5, 2026',
    variant: 'success',
    size: 'small',
  },
  {
    id: 4,
    name: 'Alex Kim',
    role: 'Indie Hacker',
    company: 'SoloBuilds',
    avatar: 'AK',
    avatarImage: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=200&auto=format&fit=crop&q=60',
    content: "I've launched 4 projects this month alone. Blueprint AI handles the architecture so I can focus on what matters — shipping fast.",
    rating: 5,
    handle: '@alexships',
    date: 'Feb 1, 2026',
    variant: 'warning',
    size: 'medium',
  },
  {
    id: 5,
    name: 'David Park',
    role: 'CTO',
    company: 'StartupXYZ',
    avatar: 'DP',
    avatarImage: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=200&auto=format&fit=crop&q=60',
    content: 'Our team uses this for every new project. The SEO foundations alone are worth it.',
    rating: 5,
    handle: '@davidcto',
    date: 'Jan 28, 2026',
    variant: 'primary',
    size: 'medium',
  },
  {
    id: 6,
    name: 'Priya Sharma',
    role: 'Tech Lead',
    company: 'InnovateLab',
    avatar: 'PS',
    avatarImage: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&auto=format&fit=crop&q=60',
    content: 'The architecture blueprints are incredibly detailed. Saved our team countless hours of technical planning.',
    rating: 5,
    handle: '@priyacodes',
    date: 'Jan 10, 2026',
    variant: 'accent',
    size: 'small',
  },
  {
    id: 7,
    name: 'Neil Stellar',
    role: 'Freelancer',
    company: 'Independent',
    avatar: 'NS',
    avatarImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=60',
    content: 'From concept to production-ready blueprints in minutes. This tool is a game changer for solo developers.',
    rating: 5,
    handle: '@neilstellar',
    date: 'Dec 15, 2025',
    variant: 'success',
    size: 'medium',
  },
  {
    id: 8,
    name: 'Jordan Lee',
    role: 'Product Manager',
    company: 'ScaleUp',
    avatar: 'JL',
    avatarImage: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&auto=format&fit=crop&q=60',
    content: 'Blueprint AI bridges the gap between product vision and technical execution. My engineering team loves it.',
    rating: 5,
    handle: '@jordantalks',
    date: 'Feb 3, 2026',
    variant: 'warning',
    size: 'large',
  },
];

type ColorVariant = 'primary' | 'accent' | 'success' | 'warning';

const variantStyles: Record<ColorVariant, { border: string; quote: string; avatar: string; glow: string; handle: string }> = {
  primary: {
    border: 'border-primary/20 hover:border-primary/50',
    quote: 'text-primary/30',
    avatar: 'ring-primary/30',
    glow: 'hover:shadow-[0_0_30px_-5px_hsl(var(--primary)/0.3)]',
    handle: 'text-primary/60',
  },
  accent: {
    border: 'border-accent/20 hover:border-accent/50',
    quote: 'text-accent/30',
    avatar: 'ring-accent/30',
    glow: 'hover:shadow-[0_0_30px_-5px_hsl(var(--accent)/0.3)]',
    handle: 'text-accent/60',
  },
  success: {
    border: 'border-success/20 hover:border-success/50',
    quote: 'text-success/30',
    avatar: 'ring-success/30',
    glow: 'hover:shadow-[0_0_30px_-5px_hsl(var(--success)/0.3)]',
    handle: 'text-success/60',
  },
  warning: {
    border: 'border-warning/20 hover:border-warning/50',
    quote: 'text-warning/30',
    avatar: 'ring-warning/30',
    glow: 'hover:shadow-[0_0_30px_-5px_hsl(var(--warning)/0.3)]',
    handle: 'text-warning/60',
  },
};

/* ─── Marquee Card (Desktop) ─── */
function MarqueeCard({ testimonial }: { testimonial: Testimonial }) {
  const styles = variantStyles[testimonial.variant];

  return (
    <div
      className={`flex-shrink-0 w-[340px] p-5 rounded-2xl glass-card border transition-all duration-500 ${styles.border} ${styles.glow}`}
    >
      {/* Header */}
      <div className="flex items-center gap-3 mb-4">
        {testimonial.avatarImage ? (
          <img
            src={testimonial.avatarImage}
            alt={testimonial.name}
            className={`w-10 h-10 rounded-full object-cover ring-2 ${styles.avatar}`}
          />
        ) : (
          <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold bg-secondary text-foreground ring-2 ${styles.avatar}`}>
            {testimonial.avatar}
          </div>
        )}
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2">
            <p className="text-sm font-semibold text-foreground truncate">{testimonial.name}</p>
            <svg className="w-4 h-4 text-primary flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <p className={`text-xs ${styles.handle}`}>{testimonial.handle}</p>
        </div>
        <span className="text-[10px] text-muted-foreground whitespace-nowrap">{testimonial.date}</span>
      </div>

      {/* Content */}
      <p className="text-sm text-foreground/85 leading-relaxed mb-3">
        "{testimonial.content}"
      </p>

      {/* Rating */}
      <div className="flex gap-0.5">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star key={i} className="h-3.5 w-3.5 fill-warning text-warning" />
        ))}
      </div>
    </div>
  );
}

/* ─── Bento Card (Mobile) ─── */
function BentoCard({ testimonial }: { testimonial: Testimonial }) {
  const styles = variantStyles[testimonial.variant];

  const sizeClasses = {
    small: 'col-span-1 row-span-1',
    medium: 'col-span-1 sm:col-span-2 lg:col-span-1 row-span-1',
    large: 'col-span-2 row-span-1',
  };

  return (
    <StaggerItem
      className={`group relative p-4 rounded-xl glass-card border transition-all duration-500 ${styles.border} ${styles.glow} ${sizeClasses[testimonial.size]}`}
    >
      <Quote className={`absolute top-3 right-3 h-5 w-5 ${styles.quote}`} />

      <div className="flex flex-col h-full">
        {/* Rating */}
        <div className="flex gap-0.5 mb-2">
          {Array.from({ length: testimonial.rating }).map((_, i) => (
            <Star key={i} className="h-3 w-3 fill-warning text-warning" />
          ))}
        </div>

        {/* Quote */}
        <p className="text-xs text-foreground/90 leading-relaxed flex-1 mb-3">
          "{testimonial.content}"
        </p>

        {/* Author */}
        <div className="flex items-center gap-2.5 mt-auto">
          {testimonial.avatarImage ? (
            <img
              src={testimonial.avatarImage}
              alt={testimonial.name}
              className={`w-8 h-8 rounded-full object-cover ring-2 ${styles.avatar} flex-shrink-0`}
            />
          ) : (
            <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold bg-secondary text-foreground ring-2 ${styles.avatar}`}>
              {testimonial.avatar}
            </div>
          )}
          <div className="min-w-0">
            <p className="text-xs font-medium text-foreground truncate">{testimonial.name}</p>
            <p className="text-[10px] text-muted-foreground truncate">
              {testimonial.role} · {testimonial.company}
            </p>
          </div>
        </div>
      </div>
    </StaggerItem>
  );
}

/* ─── Marquee Row ─── */
function MarqueeRow({ items, reverse = false }: { items: Testimonial[]; reverse?: boolean }) {
  const doubled = [...items, ...items];

  return (
    <div className="relative overflow-hidden">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

      <div
        className={`flex gap-5 marquee-scroll ${reverse ? 'marquee-reverse' : ''}`}
        style={{ width: 'max-content' }}
      >
        {doubled.map((t, i) => (
          <MarqueeCard key={`${t.id}-${i}`} testimonial={t} />
        ))}
      </div>
    </div>
  );
}

/* ─── Main Section ─── */
export function TestimonialsSection() {
  const isMobile = useIsMobile();

  const row1 = testimonials.slice(0, 4);
  const row2 = testimonials.slice(4);

  return (
    <section id="testimonials" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-secondary/20" />
      <div className="absolute inset-0 grid-pattern opacity-30" />

      <div className="container relative mx-auto px-4">
        {/* Header */}
        <ScrollAnimation type="fade-up" className="max-w-2xl mx-auto text-center mb-12 sm:mb-16">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-mono uppercase tracking-widest text-success bg-success/10 border border-success/20 mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold tracking-tight mb-4 text-foreground">
            Loved by Builders Worldwide
          </h2>
          <p className="text-lg text-muted-foreground">
            Join thousands of developers and founders shipping faster with Blueprint AI.
          </p>
        </ScrollAnimation>

        {/* Desktop: Marquee rows */}
        {!isMobile && (
          <ScrollAnimation type="fade-up" delay={0.2} className="space-y-5">
            <MarqueeRow items={row1} />
            <MarqueeRow items={row2} reverse />
          </ScrollAnimation>
        )}

        {/* Mobile: Bento grid */}
        {isMobile && (
          <StaggerContainer staggerDelay={0.1} className="grid grid-cols-2 gap-3 max-w-lg mx-auto">
            {testimonials.slice(0, 6).map((testimonial) => (
              <BentoCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </StaggerContainer>
        )}

        {/* Stats */}
        <StaggerContainer staggerDelay={0.1} className="mt-12 sm:mt-16 grid grid-cols-3 gap-4 sm:gap-8 max-w-2xl mx-auto">
          {[
            { value: '10k+', label: 'Blueprints Generated' },
            { value: '98%', label: 'Satisfaction Rate' },
            { value: '50+', label: 'Countries' },
          ].map((stat) => (
            <StaggerItem key={stat.label} className="text-center">
              <p className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-gradient mb-1">
                {stat.value}
              </p>
              <p className="text-xs sm:text-sm text-muted-foreground">{stat.label}</p>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
