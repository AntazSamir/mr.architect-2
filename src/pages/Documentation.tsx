import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { ScrollAnimation } from '@/components/ui/scroll-animation';
import {
    ArrowLeft,
    BookOpen,
    Code2,
    Layers,
    Bot,
    Search,
    ShieldCheck,
    Zap,
    Cpu,
    Boxes
} from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Documentation() {
    const navigate = useNavigate();
    const [activeSection, setActiveSection] = useState('intro');

    const docs = [
        {
            id: 'intro',
            title: 'Introduction',
            icon: BookOpen,
            content: (
                <div className="space-y-6">
                    <h2 className="text-3xl font-display font-bold text-white mb-6">System Overview</h2>
                    <p className="text-muted-foreground/60 leading-relaxed font-sans text-sm">
                        Mr.Architect is a powerful generative architecture platform designed to bridge the gap between AI code generation and robust, scalable system engineering. 
                        It synthesizes full-stack infrastructure blueprints, enabling rapid deployment across high-frequency digital industries.
                    </p>
                    <div className="grid sm:grid-cols-2 gap-4 mt-8">
                        <div className="p-6 rounded-sm bg-[#0d1117] border border-white/5 space-y-3">
                            <Bot className="w-5 h-5 text-primary" />
                            <h4 className="text-white font-mono text-[10px] tracking-widest uppercase font-bold">AI Native</h4>
                            <p className="text-xs text-muted-foreground/40 leading-relaxed">Built from the ground up to integrate with elite AI models (Gemini, ChatGPT) for autonomous feature engineering.</p>
                        </div>
                        <div className="p-6 rounded-sm bg-[#0d1117] border border-white/5 space-y-3">
                            <Layers className="w-5 h-5 text-accent" />
                            <h4 className="text-white font-mono text-[10px] tracking-widest uppercase font-bold">Scalable By Default</h4>
                            <p className="text-xs text-muted-foreground/40 leading-relaxed">Outputs strict production-ready code emphasizing modern stacks like React, Vite, and Edge-deployed backends.</p>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: 'arch',
            title: 'Architecture Blueprint',
            icon: Boxes,
            content: (
                <div className="space-y-6">
                    <div className="flex items-center gap-3 mb-6">
                        <Zap className="w-5 h-5 text-primary" />
                        <h2 className="text-3xl font-display font-bold text-white">Architecture Standard</h2>
                    </div>
                    <p className="text-muted-foreground/60 leading-relaxed font-sans text-sm">
                        The platform enforces a strict component-driven development cycle that ensures zero-hallucination structures and highly reliable logic paths.
                    </p>
                    <div className="p-6 rounded-sm bg-[#090e14] border border-primary/20 mt-6 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-[radial-gradient(circle_at_top_right,rgba(0,255,255,0.05)_0%,transparent_70%)] pointer-events-none" />
                        <h4 className="text-[10px] font-mono text-primary font-bold uppercase tracking-widest mb-4">Core Directory Tree</h4>
                        <pre className="text-xs text-muted-foreground/50 font-mono leading-relaxed">
{`src/
├─ components/
│  ├─ ui/         # Shadcn primitives
│  ├─ layout/     # Absolute layouts
│  └─ sections/   # Business logic components
├─ contexts/      # React global providers
├─ lib/           # Utils & config overrides
└─ pages/         # Route entrypoints`}
                        </pre>
                    </div>
                </div>
            )
        },
        {
            id: 'design',
            title: 'Design Protocol',
            icon: Cpu,
            content: (
                <div className="space-y-6">
                    <h2 className="text-3xl font-display font-bold text-white mb-6">"Blueprint Noir" Aesthetic</h2>
                    <p className="text-muted-foreground/60 leading-relaxed font-sans text-sm mb-6">
                        We developed a highly tailored, technical UI system specifically designed to resemble a high-fidelity cinematic terminal.
                    </p>
                    <ul className="space-y-4">
                        <li className="flex gap-4 p-4 bg-[#0d1117] border border-white/5 rounded-sm">
                            <Code2 className="w-5 h-5 text-accent flex-shrink-0" />
                            <div>
                                <h5 className="text-white text-xs font-mono font-bold tracking-wider uppercase mb-1">Color Palette</h5>
                                <p className="text-xs text-muted-foreground/50">Pitch black base (#0a0e14) overlaid with off-black glassmorphism sheets, accented exclusively by pure cyan (#00ffff), soft white, and specific status codes.</p>
                            </div>
                        </li>
                        <li className="flex gap-4 p-4 bg-[#0d1117] border border-white/5 rounded-sm">
                            <Layers className="w-5 h-5 text-accent flex-shrink-0" />
                            <div>
                                <h5 className="text-white text-xs font-mono font-bold tracking-wider uppercase mb-1">Typography</h5>
                                <p className="text-xs text-muted-foreground/50">Primary headers use display fonts for high impact, whereas all metadata, badges, and technical readouts use strictly styled monospaces.</p>
                            </div>
                        </li>
                    </ul>
                </div>
            )
        },
        {
            id: 'seo',
            title: 'SEO & Growth Foundation',
            icon: Search,
            content: (
                <div className="space-y-6">
                    <h2 className="text-3xl font-display font-bold text-white mb-6">Data-Driven Visibility</h2>
                    <p className="text-muted-foreground/60 leading-relaxed font-sans text-sm">
                        Built-in AI integrations leverage live Gemini pipelines to generate 3-layer semantic keyword maps instantly,
                        projecting 6-month growth matrices directly into the dashboard.
                    </p>
                    <div className="grid sm:grid-cols-3 gap-4 mt-6">
                        {['Core/Head Terms', 'Secondary / LSI', 'Long-Tail Queries'].map((tier, i) => (
                            <div key={tier} className="p-4 rounded-sm border border-success/20 bg-success/5 space-y-2">
                                <div className="text-[10px] text-success font-mono font-bold uppercase tracking-widest mb-2">TIER_0{i+1}</div>
                                <h5 className="text-white text-sm font-bold">{tier}</h5>
                                <p className="text-xs text-muted-foreground/40">Ensures comprehensive market-capture strategies.</p>
                            </div>
                        ))}
                    </div>
                </div>
            )
        },
        {
            id: 'security',
            title: 'Security Protocols',
            icon: ShieldCheck,
            content: (
                <div className="space-y-6">
                    <h2 className="text-3xl font-display font-bold text-white mb-6">Enterprise Trust</h2>
                    <p className="text-muted-foreground/60 leading-relaxed font-sans text-sm">
                        Authentication loops and data persistence are guarded strictly via standard JWT layers, Row Level Security mapping, and edge-native deployments.
                    </p>
                    <div className="p-6 bg-warning/5 border border-warning/20 rounded-sm">
                        <h4 className="text-warning text-[10px] font-mono font-bold tracking-[0.2em] uppercase mb-4">Auth Configured</h4>
                        <p className="text-xs text-warning/70 leading-relaxed">
                            Full login/signup loops are incorporated out-of-the-box leveraging global authentication providers for zero-day readiness.
                        </p>
                    </div>
                </div>
            )
        }
    ];

    return (
        <div className="min-h-screen bg-[#0a0e14] selection:bg-primary/30 flex flex-col font-sans">
            <Header />

            {/* Background Decor */}
            <div className="fixed inset-0 grid-pattern opacity-10 pointer-events-none" />

            <main className="flex-1 pt-32 pb-20 relative">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="mb-16">
                        <Button
                            variant="ghost"
                            size="sm"
                            className="text-muted-foreground/40 hover:text-primary mb-12 font-mono text-[10px] uppercase tracking-[0.3em] transition-all"
                            onClick={() => navigate('/')}
                        >
                            <ArrowLeft className="w-4 h-4 mr-2" />
                            RETURN_TO_BASE
                        </Button>

                        <ScrollAnimation type="fade-up">
                            <div className="inline-flex items-center gap-3 px-3 py-1 mb-6 rounded-sm bg-white/5 border border-white/10">
                                <BookOpen className="w-4 h-4 text-white/60" />
                                <span className="text-[10px] font-mono font-bold text-white/60 tracking-[0.3em] uppercase">SYSTEM_DOCUMENTATION</span>
                            </div>
                            <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tighter text-white leading-none">
                                Technical <br />
                                <span className="text-primary italic">Manual</span>.
                            </h1>
                        </ScrollAnimation>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                        {/* Sidebar */}
                        <div className="lg:col-span-4 lg:sticky lg:top-32 max-h-[calc(100vh-12rem)] space-y-4 order-2 lg:order-1">
                            <div className="rounded-sm bg-[#0d1117] border border-white/5 p-6 relative">
                                <h3 className="text-[10px] font-mono font-bold tracking-[0.3em] text-muted-foreground/30 uppercase mb-6 flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                                    INDEX_REGISTRY
                                </h3>
                                <nav className="space-y-2">
                                    {docs.map((doc) => (
                                        <button
                                            key={doc.id}
                                            onClick={() => setActiveSection(doc.id)}
                                            className={cn(
                                                "w-full flex items-center gap-3 px-4 py-3 rounded-sm text-left transition-all duration-300 group cursor-pointer",
                                                activeSection === doc.id
                                                    ? "bg-primary/10 border border-primary/20"
                                                    : "bg-transparent border border-transparent hover:bg-white/5"
                                            )}
                                        >
                                            <doc.icon className={cn(
                                                "w-4 h-4 transition-colors",
                                                activeSection === doc.id ? "text-primary" : "text-muted-foreground/40 group-hover:text-white"
                                            )} />
                                            <span className={cn(
                                                "text-xs font-mono font-bold uppercase tracking-widest transition-colors",
                                                activeSection === doc.id ? "text-primary" : "text-muted-foreground/60 group-hover:text-white"
                                            )}>{doc.title}</span>
                                        </button>
                                    ))}
                                </nav>
                            </div>
                        </div>

                        {/* Content Area */}
                        <div className="lg:col-span-8 order-1 lg:order-2">
                            <div className="relative rounded-sm bg-[#0d1117]/50 border border-white/5 p-8 md:p-12 backdrop-blur-md min-h-[600px]">
                                {docs.map((doc) => (
                                    <div
                                        key={doc.id}
                                        className={cn(
                                            "transition-all duration-500 absolute inset-8",
                                            activeSection === doc.id
                                                ? "opacity-100 z-10 translate-y-0"
                                                : "opacity-0 z-0 translate-y-4 pointer-events-none"
                                        )}
                                    >
                                        {doc.content}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
