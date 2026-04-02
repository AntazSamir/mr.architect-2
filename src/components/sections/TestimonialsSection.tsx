import { Star } from 'lucide-react';
import { ScrollAnimation, StaggerContainer, StaggerItem } from '@/components/ui/scroll-animation';

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

const variantStyles: Record<ColorVariant, { border: string; glow: string; text: string; handle: string }> = {
  primary: {
    border: 'group-hover:border-primary/50',
    glow: 'group-hover:shadow-[0_0_20px_-5px_hsl(var(--primary)/0.4)]',
    text: 'text-primary',
    handle: 'text-primary/60',
  },
  accent: {
    border: 'group-hover:border-accent/50',
    glow: 'group-hover:shadow-[0_0_20px_-5px_hsl(var(--accent)/0.4)]',
    text: 'text-accent',
    handle: 'text-accent/60',
  },
  success: {
    border: 'group-hover:border-success/50',
    glow: 'group-hover:shadow-[0_0_20px_-5px_hsl(var(--success)/0.4)]',
    text: 'text-success',
    handle: 'text-success/60',
  },
  warning: {
    border: 'group-hover:border-warning/50',
    glow: 'group-hover:shadow-[0_0_20px_-5px_hsl(var(--warning)/0.4)]',
    text: 'text-warning',
    handle: 'text-warning/60',
  },
};

/* ─── Marquee Card (Desktop) ─── */
function MarqueeCard({ testimonial }: { testimonial: Testimonial }) {
  const styles = variantStyles[testimonial.variant];

  return (
    <div
      className={`flex-shrink-0 w-[300px] sm:w-[380px] p-6 rounded-sm bg-[#0d1117] border border-white/5 transition-all duration-500 overflow-hidden ${styles.border} ${styles.glow}`}
    >
      {/* Node ID Decor */}
      <div className="flex items-center justify-between mb-6">
        <div className="text-[8px] font-mono text-muted-foreground/30 select-none uppercase tracking-widest">
          USER_FEEDBACK_NODE::0{testimonial.id}
        </div>
        <div className="flex gap-0.5">
          {Array.from({ length: testimonial.rating }).map((_, i) => (
            <Star key={i} className={`h-2 w-2 fill-primary text-primary opacity-50`} />
          ))}
        </div>
      </div>

      {/* Content */}
      <p className="text-sm text-white/70 leading-relaxed font-sans mb-8 italic">
        "{testimonial.content}"
      </p>

      {/* User Info */}
      <div className="flex items-center gap-3 pt-6 border-t border-white/5">
        <div className="relative">
          {testimonial.avatarImage ? (
            <img
              src={testimonial.avatarImage}
              alt={testimonial.name}
              className={`w-10 h-10 rounded-sm object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all`}
            />
          ) : (
            <div className="w-10 h-10 rounded-sm bg-primary/10 border border-primary/20 flex items-center justify-center text-xs font-mono text-primary">
              {testimonial.avatar}
            </div>
          )}
        </div>
        <div className="min-w-0">
          <p className="text-sm font-display font-bold text-white tracking-tight uppercase">{testimonial.name}</p>
          <div className="flex items-center gap-2">
             <p className={`text-[10px] font-mono ${styles.handle}`}>{testimonial.handle}</p>
             <div className="w-1 h-1 rounded-full bg-white/10" />
             <p className="text-[10px] font-mono text-muted-foreground/30 uppercase">{testimonial.role}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Marquee Row ─── */
function MarqueeRow({ items, reverse = false }: { items: Testimonial[]; reverse?: boolean }) {
  const doubled = [...items, ...items];

  return (
    <div className="relative overflow-hidden">
      <div
        className={`flex gap-6 marquee-scroll ${reverse ? 'marquee-reverse' : ''}`}
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
  const row1 = testimonials.slice(0, 4);
  const row2 = testimonials.slice(4);

  return (
    <section id="testimonials" className="py-24 md:py-32 relative bg-[#0a0e14] overflow-hidden">
      {/* Background Schema */}
      <div className="absolute inset-0 grid-pattern opacity-10 -z-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[600px] bg-[radial-gradient(circle_at_center,rgba(0,255,255,0.03)_0%,transparent_70%)] -z-10" />

      <div className="container relative mx-auto px-6">
        {/* Cinematic Header */}
        <ScrollAnimation type="fade-up" className="max-w-4xl mx-auto text-center mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-[10px] font-mono tracking-[0.2em] text-primary uppercase mb-6">
            SIGNAL_FEEDBACK_STREAM v1.0
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tighter text-white mb-8">
            Engineered for <span className="text-primary italic">Performance</span>.
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground/60 max-w-2xl mx-auto leading-relaxed font-sans">
            Validated by elite developers and founders integrating autonomous 
            synthesis across global engineering workflows.
          </p>
        </ScrollAnimation>

        {/* Technical Marquee rows */}
        <ScrollAnimation type="fade-up" delay={0.2} className="space-y-6">
          <MarqueeRow items={row1} />
          <MarqueeRow items={row2} reverse />
        </ScrollAnimation>

        {/* Global Statistics Panel */}
        <StaggerContainer staggerDelay={0.1} className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto pt-16 border-t border-white/5">
          {[
            { value: '10K+', label: 'SYS_BLUEPRINTS_SYNTHESIZED' },
            { value: '98%', label: 'CORE_DEPLOYMENT_SUCCESS' },
            { value: '50+', label: 'GLOBAL_NODE_REGISTRY' },
          ].map((stat) => (
            <StaggerItem key={stat.label} className="text-center group">
              <p className="text-3xl md:text-5xl font-display font-bold text-white mb-3 tracking-tighter group-hover:text-primary transition-colors">
                {stat.value}
              </p>
              <p className="text-[10px] font-mono font-bold tracking-[0.2em] text-muted-foreground/40 uppercase group-hover:text-muted-foreground transition-colors">
                {stat.label}
              </p>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
