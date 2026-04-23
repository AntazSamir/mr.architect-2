import { useNavigate } from "react-router-dom";
import { 
    Cpu, 
    Layers, 
    Terminal, 
    Database, 
    Shield, 
    Zap, 
    ArrowLeft, 
    Code2,
    Monitor,
    Sparkles,
    CheckCircle2,
    Binary,
    Braces,
    Workflow,
    Globe,
    Server,
    Lock,
    Settings,
    Activity,
    Box
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ScrollAnimation, StaggerContainer, StaggerItem } from "@/components/ui/scroll-animation";
import { useState } from "react";

export default function TechStackDetail() {
    const navigate = useNavigate();
    const [activeLayer, setActiveLayer] = useState("frontend");

    const layers = [
        { id: "frontend", label: "Frontend", icon: Monitor },
        { id: "backend", label: "Backend", icon: Server },
        { id: "tooling", label: "Tooling", icon: Terminal },
        { id: "devops", label: "DevOps", icon: Globe }
    ];

    const layerContent = {
        frontend: [
            { name: "Next.js 14.2+", detail: "App Router, Server Components, Partial Prerendering (PPR)" },
            { name: "React 18.3", detail: "Concurrent Rendering, Server Actions, Transitions API" },
            { name: "Tailwind CSS 3.4", detail: "JIT Compiler, Arbitrary Values, Utility-first Design System" },
            { name: "Framer Motion 11", detail: "Declarative Orchestration, Layout Animations, Gestures" },
            { name: "TanStack Query v5", detail: "Server-state management, Hydration, SWR pattern" },
            { name: "Zustand", detail: "Atomic client-state management, Middleware (Persist/Immer)" }
        ],
        backend: [
            { name: "PostgreSQL 16", detail: "Relational integrity, pg_vector support for AI features" },
            { name: "Supabase Auth", detail: "JWT-based sessions, OAuth providers, MFA support" },
            { name: "Drizzle ORM", detail: "TypeScript-first SQL toolkit, Zero-overhead schema migrations" },
            { name: "Edge Functions", detail: "Deno-based global compute, low-latency API routes" },
            { name: "Supabase Storage", detail: "S3-compatible bucket management, Image optimization hooks" }
        ],
        tooling: [
            { name: "TypeScript 5.4+", detail: "Strict mode, Template literal types, satisfies operator" },
            { name: "Vite 5.2", detail: "ESM-based HMR, Rollup production builds, Fast Refresh" },
            { name: "ESLint / Biome", detail: "Static analysis, structural linting, auto-formatting" },
            { name: "Lucide React", detail: "Tree-shakeable icon library with semantic SVG wrappers" },
            { name: "shadcn/ui", detail: "Radix UI primitives with manual style injection" }
        ],
        devops: [
            { name: "Vercel / Netlify", detail: "Edge Network deployment, Git-flow CI/CD integration" },
            { name: "GitHub Actions", detail: "Automated testing, linting, and security audits" },
            { name: "Cloudflare Warp", detail: "DNS management, DDoS protection, CDN caching" },
            { name: "Upstash", detail: "Serverless Redis for rate limiting and session caching" }
        ]
    };

    const performanceMetrics = [
        { label: "Lighthouse Score", value: "98+", color: "text-success" },
        { label: "First Contentful Paint", value: "< 0.8s", color: "text-success" },
        { label: "Time to Interactive", value: "< 1.2s", color: "text-blue-400" },
        { label: "Cumulative Layout Shift", value: "0.01", color: "text-success" }
    ];

    return (
        <div className="min-h-screen border-t-2 border-primary/20 bg-[#0a0e14] selection:bg-primary/30 flex flex-col font-inter">
            <Header />

            <main className="flex-1 pt-24 pb-16">
                <div className="container mx-auto px-6 max-w-7xl">
                    {/* Return Link */}
                    <div className="mb-12">
                        <Button 
                            variant="ghost" 
                            size="sm" 
                            className="text-muted-foreground hover:text-white transition-colors"
                            onClick={() => navigate('/')}
                        >
                            <ArrowLeft className="w-4 h-4 mr-2" />
                            Back to Core Blueprint
                        </Button>
                    </div>

                    {/* Page Header */}
                    <ScrollAnimation type="fade-up" className="mb-16">
                        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-8">
                            <div className="space-y-4">
                                <div className="flex items-center gap-4">
                                    <div className="p-3 rounded-xl bg-warning/10 border border-warning/30 shadow-sm">
                                        <Code2 className="w-6 h-6 text-warning" />
                                    </div>
                                    <Badge variant="outline" className="bg-warning/5 border-warning/20 text-warning px-3 py-1 font-mono">
                                        v2.4.0-STABLE
                                    </Badge>
                                </div>
                                <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white leading-tight">
                                    Engineering <br />
                                    <span className="text-warning italic font-light tracking-widest">SPECIFICATIONS</span>
                                </h1>
                                <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
                                    A deep dive into the architectural decisions and library selections that power 
                                    the Mr. Architect ecosystem. Designed for speed, built for scale.
                                </p>
                            </div>

                            <div className="flex flex-wrap gap-4 bg-white/5 p-4 rounded-2xl border border-white/10 backdrop-blur-sm">
                                {performanceMetrics.map((metric, i) => (
                                    <div key={i} className="px-4 border-r last:border-0 border-white/10">
                                        <p className="text-[10px] uppercase font-mono text-muted-foreground mb-1">{metric.label}</p>
                                        <p className={`text-xl font-bold ${metric.color}`}>{metric.value}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </ScrollAnimation>

                    {/* Architecture Layers (Tabs) */}
                    <ScrollAnimation type="fade-up" className="mb-24">
                        <div className="bg-[#0d1117] border border-white/5 rounded-3xl overflow-hidden">
                            <div className="flex flex-wrap border-b border-white/5 bg-black/20">
                                {layers.map((layer) => (
                                    <button
                                        key={layer.id}
                                        onClick={() => setActiveLayer(layer.id)}
                                        className={`flex items-center gap-3 px-8 py-6 text-sm font-medium transition-all relative
                                            ${activeLayer === layer.id ? 'text-warning' : 'text-muted-foreground hover:text-white'}`}
                                    >
                                        <layer.icon className={`w-4 h-4 ${activeLayer === layer.id ? 'text-warning' : 'text-muted-foreground'}`} />
                                        {layer.label}
                                        {activeLayer === layer.id && (
                                            <div className="absolute bottom-0 left-0 w-full h-1 bg-warning" />
                                        )}
                                    </button>
                                ))}
                            </div>
                            
                            <div className="p-8 md:p-12">
                                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {layerContent[activeLayer as keyof typeof layerContent].map((item, i) => (
                                        <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-warning/30 transition-all group">
                                            <h4 className="text-white font-bold mb-2 flex items-center justify-between">
                                                {item.name}
                                                <div className="w-1.5 h-1.5 rounded-full bg-warning opacity-0 group-hover:opacity-100 transition-opacity" />
                                            </h4>
                                            <p className="text-sm text-muted-foreground leading-relaxed">
                                                {item.detail}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </ScrollAnimation>

                    {/* Technical Philosophy Grid */}
                    <div className="grid md:grid-cols-3 gap-8 mb-24">
                        <Card className="bg-[#0d1117] border-white/5 p-8 relative overflow-hidden group">
                            <div className="absolute -right-8 -bottom-8 opacity-[0.03] group-hover:opacity-[0.06] transition-opacity">
                                <Lock className="w-32 h-32" />
                            </div>
                            <Shield className="w-8 h-8 text-blue-400 mb-6" />
                            <h3 className="text-xl font-bold text-white mb-4">Security First</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                Row Level Security (RLS) policies implemented at the database level. 
                                Secure JWT handling with HttpOnly cookies and CSRF protection 
                                baked into every edge function.
                            </p>
                        </Card>

                        <Card className="bg-[#0d1117] border-white/5 p-8 relative overflow-hidden group">
                            <div className="absolute -right-8 -bottom-8 opacity-[0.03] group-hover:opacity-[0.06] transition-opacity">
                                <Activity className="w-32 h-32" />
                            </div>
                            <Zap className="w-8 h-8 text-primary mb-6" />
                            <h3 className="text-xl font-bold text-white mb-4">Zero Bloat</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                Tree-shakeable dependencies only. Every line of CSS is purged 
                                and every Javascript bundle is optimized via modern ESM 
                                chunking strategies.
                            </p>
                        </Card>

                        <Card className="bg-[#0d1117] border-white/5 p-8 relative overflow-hidden group">
                            <div className="absolute -right-8 -bottom-8 opacity-[0.03] group-hover:opacity-[0.06] transition-opacity">
                                <Settings className="w-32 h-32" />
                            </div>
                            <Binary className="w-8 h-8 text-success mb-6" />
                            <h3 className="text-xl font-bold text-white mb-4">Type Strict</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                End-to-end type safety from the DB schema to the UI component props. 
                                Automated type generation ensures zero-drift between your data 
                                and your view.
                            </p>
                        </Card>
                    </div>

                    {/* Directory Topology */}
                    <ScrollAnimation type="fade-up" className="mb-24">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div className="space-y-6">
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-mono">
                                    <Box className="w-3 h-3" /> STRUCTURE_MAP_V1
                                </div>
                                <h2 className="text-3xl font-bold text-white uppercase tracking-tighter">
                                    Directory <span className="text-blue-400 italic">Topology</span>
                                </h2>
                                <p className="text-muted-foreground leading-relaxed">
                                    Our folder structure follows a strictly modular approach, 
                                    separating concerns between primitives, feature sections, 
                                    and business logic. This ensures that even as the project 
                                    grows, cognitive load remains low for any new developer.
                                </p>
                                <div className="grid grid-cols-2 gap-4">
                                    {[
                                        { label: "Atomic Components", val: "shaden/ui" },
                                        { label: "State Management", val: "Zustand" },
                                        { label: "API Layer", val: "Supabase" },
                                        { label: "Styling", val: "Tailwind" }
                                    ].map((item, i) => (
                                        <div key={i} className="p-3 rounded-lg bg-white/5 border border-white/5">
                                            <p className="text-[10px] text-muted-foreground uppercase mb-1">{item.label}</p>
                                            <p className="text-sm font-bold text-white">{item.val}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="bg-[#0d1117] rounded-2xl border border-white/5 p-8 font-mono text-xs leading-loose overflow-x-auto shadow-2xl">
                                <div className="flex items-center gap-2 mb-6 border-b border-white/5 pb-4">
                                    <div className="w-3 h-3 rounded-full bg-red-500/20" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-500/20" />
                                    <div className="w-3 h-3 rounded-full bg-green-500/20" />
                                    <span className="ml-2 text-muted-foreground/50 text-[10px]">PROJECT_ROOT/</span>
                                </div>
                                <div className="space-y-1">
                                    <div className="text-blue-400">├── src/</div>
                                    <div className="pl-4 text-blue-300">│   ├── components/ <span className="text-muted-foreground/40 ml-4">// React Components</span></div>
                                    <div className="pl-8 text-muted-foreground/70">│   │   ├── ui/ <span className="text-muted-foreground/40 ml-4 font-sans text-[10px]">— Atomic shadcn/ui primitives</span></div>
                                    <div className="pl-8 text-muted-foreground/70">│   │   ├── layout/ <span className="text-muted-foreground/40 ml-4 font-sans text-[10px]">— Persistent shells (Header/Footer)</span></div>
                                    <div className="pl-8 text-muted-foreground/70">│   │   └── sections/ <span className="text-muted-foreground/40 ml-4 font-sans text-[10px]">— Large page-specific blocks</span></div>
                                    <div className="pl-4 text-blue-300">│   ├── hooks/ <span className="text-muted-foreground/40 ml-4">// Reusable React logic</span></div>
                                    <div className="pl-4 text-blue-300">│   ├── lib/ <span className="text-muted-foreground/40 ml-4">// Third-party configs (Supabase/Prisma)</span></div>
                                    <div className="pl-4 text-blue-300">│   ├── pages/ <span className="text-muted-foreground/40 ml-4">// View definitions (Route targets)</span></div>
                                    <div className="pl-4 text-blue-300">│   ├── types/ <span className="text-muted-foreground/40 ml-4">// Global TS interfaces</span></div>
                                    <div className="pl-4 text-blue-300">│   └── App.tsx <span className="text-muted-foreground/40 ml-4">// Entry point & Router</span></div>
                                    <div className="text-muted-foreground/50">├── public/ <span className="text-muted-foreground/40 ml-4">// Static assets & icons</span></div>
                                    <div className="text-muted-foreground/50">├── tailwind.config.js</div>
                                    <div className="text-muted-foreground/50">└── tsconfig.json</div>
                                </div>
                            </div>
                        </div>
                    </ScrollAnimation>

                    {/* THE UNIFIED SYNTHESIS (Updated) */}
                    <ScrollAnimation type="fade-up">
                        <Card className="relative overflow-hidden bg-gradient-to-br from-warning/10 via-[#0d1117] to-blue-500/10 border-white/10 p-8 md:p-12 mb-12">
                            <div className="absolute top-0 right-0 p-8 opacity-5">
                                <Braces className="w-64 h-64" />
                            </div>
                            
                            <div className="grid lg:grid-cols-2 gap-12 relative z-10">
                                <div className="space-y-6">
                                    <h3 className="text-3xl font-bold text-white uppercase tracking-tighter">
                                        Architectural <br />
                                        <span className="text-warning italic">Manifesto</span>
                                    </h3>
                                    <p className="text-muted-foreground leading-relaxed">
                                        We reject the notion that complex systems must be slow to build. 
                                        By utilizing a "Unified Schema" approach, we bridge the gap between 
                                        rapid UI iteration and enterprise data integrity.
                                    </p>
                                    <div className="space-y-4">
                                        {[
                                            { title: "Atomic Design", desc: "Smallest units of UI assembled into robust features." },
                                            { title: "Edge Deployment", desc: "Global latency reduction via worldwide distribution." },
                                            { title: "AI-Ready Schema", desc: "Data structures optimized for LLM consumption." }
                                        ].map((item, i) => (
                                            <div key={i} className="flex gap-4 p-4 rounded-xl bg-black/20 border border-white/5">
                                                <CheckCircle2 className="w-5 h-5 text-warning shrink-0 mt-0.5" />
                                                <div>
                                                    <p className="text-white font-bold text-sm">{item.title}</p>
                                                    <p className="text-[12px] text-muted-foreground">{item.desc}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="bg-black/60 rounded-2xl border border-white/10 p-6 shadow-2xl">
                                    <div className="flex items-center justify-between mb-6">
                                        <div className="flex items-center gap-3">
                                            <div className="p-2 rounded bg-success/20">
                                                <Terminal className="w-4 h-4 text-success" />
                                            </div>
                                            <span className="text-xs font-mono text-success">architecture_v2.ts</span>
                                        </div>
                                        <div className="text-[10px] font-mono text-muted-foreground/50">READONLY</div>
                                    </div>
                                    <div className="font-mono text-[13px] leading-relaxed">
                                        <div className="text-blue-400">interface <span className="text-warning">SystemArchitect</span> {"{"}</div>
                                        <div className="pl-6">
                                            <span className="text-purple-400">core</span>: <span className="text-green-400">"Next.js_14"</span>;
                                        </div>
                                        <div className="pl-6">
                                            <span className="text-purple-400">database</span>: <span className="text-green-400">"PostgreSQL_16"</span>;
                                        </div>
                                        <div className="pl-6">
                                            <span className="text-purple-400">safety</span>: <span className="text-green-400">"Strict_TypeScript"</span>;
                                        </div>
                                        <div className="pl-6 text-muted-foreground/50">// Automated bridging layer</div>
                                        <div className="pl-6">
                                            <span className="text-purple-400">sync</span>: (vibe: <span className="text-yellow-400">Developer</span>) ={">"} <span className="text-warning">Production</span>;
                                        </div>
                                        <div className="text-blue-400">{"}"}</div>
                                        
                                        <div className="mt-6 text-success/80">
                                            <span className="text-muted-foreground">$</span> npm run build:production
                                            <br />
                                            <span className="text-success">✓</span> <span className="text-white">Analyzing dependencies...</span>
                                            <br />
                                            <span className="text-success">✓</span> <span className="text-white">Tree-shaking complete (saved 42%).</span>
                                            <br />
                                            <span className="text-success">✓</span> <span className="text-white">Generating static edge routes...</span>
                                            <br />
                                            <span className="text-success">✓</span> <span className="text-warning">System ready for deployment.</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </ScrollAnimation>
                </div>
            </main>

            <Footer />
        </div>
    );
}

