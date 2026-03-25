import { useNavigate } from 'react-router-dom';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  ArrowLeft, 
  Map, 
  Layers, 
  Boxes, 
  FileText, 
  GitBranch, 
  Layout, 
  Database, 
  ShieldCheck,
  Zap,
  Bot
} from 'lucide-react';

export default function ArchitectureDetail() {
    const navigate = useNavigate();

    const sections = [
        {
            title: "Dynamic Sitemap",
            description: "A complete visual map of every page and state in your application.",
            icon: Map,
            content: (
                <div className="space-y-6">
                    <div className="p-6 rounded-xl bg-secondary/30 border border-border/50 font-mono text-xs sm:text-sm overflow-x-auto">
                        <div className="min-w-[400px]">
                            <div className="flex items-center gap-2 text-primary mb-4">
                                <GitBranch className="w-4 h-4" />
                                <span>Root Structure</span>
                            </div>
                            <div className="pl-4 space-y-2">
                                <div className="flex items-center gap-2">
                                    <span className="text-muted-foreground">├──</span>
                                    <span className="text-foreground font-bold">/ (Home)</span>
                                    <Badge variant="outline" className="text-[10px] py-0">Public</Badge>
                                </div>
                                <div className="pl-8 space-y-1 text-muted-foreground">
                                    <div className="flex items-center gap-2">
                                        <span>├── Hero</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span>├── Features</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span>└── CTA</span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="text-muted-foreground">├──</span>
                                    <span className="text-foreground font-bold">/dashboard</span>
                                    <Badge className="text-[10px] py-0 bg-primary/20 text-primary border-primary/20">Auth Required</Badge>
                                </div>
                                <div className="pl-8 space-y-1 text-muted-foreground">
                                    <div className="flex items-center gap-2">
                                        <span>├── Overview</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span>├── Analytics</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span>└── Settings</span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="text-muted-foreground">└──</span>
                                    <span className="text-foreground font-bold">/api</span>
                                    <Badge variant="secondary" className="text-[10px] py-0">Serverless</Badge>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        },
        {
            title: "Component Specification",
            description: "Detailed breakdown of reusable UI elements and their properties.",
            icon: Boxes,
            content: (
                <div className="grid sm:grid-cols-2 gap-4">
                    {[
                        { name: "LayoutSystem", type: "Core", props: "spacing, theme, sticky" },
                        { name: "DataGrid", type: "Container", props: "items, sortable, pagination" },
                        { name: "InteractiveCard", type: "UI", props: "hoverState, animation, content" },
                        { name: "AuthGate", type: "Utils", props: "roles, fallback, redirect" }
                    ].map((comp) => (
                        <div key={comp.name} className="p-4 rounded-lg bg-secondary/30 border border-border/50">
                            <div className="flex justify-between items-start mb-2">
                                <span className="font-bold text-sm">{comp.name}</span>
                                <Badge variant="secondary" className="text-[10px]">{comp.type}</Badge>
                            </div>
                            <div className="text-[10px] font-mono text-muted-foreground">
                                props: {comp.props}
                            </div>
                        </div>
                    ))}
                </div>
            )
        },
        {
            title: "Page Hierarchy & Logic",
            description: "How pages are structured and the core business logic applied to each.",
            icon: Layout,
            content: (
                <div className="space-y-6">
                    <div className="grid gap-4">
                        {[
                            { page: "Home", layout: "Master", logic: "SEO injection, dynamic feature loading" },
                            { page: "Dashboard", layout: "Sidebar + Content", logic: "RBAC, Real-time data streams" },
                            { page: "Settings", layout: "Tabbed View", logic: "Form persistence, cache invalidation" }
                        ].map((p) => (
                            <div key={p.page} className="p-4 rounded-xl border border-border/30 bg-secondary/20 flex flex-col md:flex-row md:items-center justify-between gap-4 group-hover:border-primary/30 transition-colors">
                                <div className="font-bold text-primary">{p.page}</div>
                                <div className="flex gap-4 text-xs font-mono">
                                    <span className="text-muted-foreground">Layout: <span className="text-foreground">{p.layout}</span></span>
                                    <span className="text-muted-foreground">Logic: <span className="text-foreground">{p.logic}</span></span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )
        },
        {
            title: "Data Layer & Persistence",
            description: "Logic mapping for state management and database interactions.",
            icon: Database,
            content: (
                <div className="space-y-6">
                    <div className="p-6 rounded-xl bg-secondary/30 border border-border/50">
                        <h4 className="text-sm font-mono text-primary mb-4 uppercase">Core Data Objects</h4>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="p-4 rounded-lg bg-background/50 border border-border/30">
                                <div className="text-xs font-mono text-accent mb-2">INTERFACE User</div>
                                <pre className="text-[10px] text-muted-foreground leading-tight">
{`{
  id: uuid;
  email: string;
  role: 'admin' | 'user';
  blueprints: Blueprint[];
  preferences: JSONB;
  tier: 'free' | 'pro';
}`}
                                </pre>
                            </div>
                            <div className="p-4 rounded-lg bg-background/50 border border-border/30">
                                <div className="text-xs font-mono text-accent mb-2">INTERFACE Blueprint</div>
                                <pre className="text-[10px] text-muted-foreground leading-tight">
{`{
  id: uuid;
  title: string;
  schema_version: string;
  architecture: Module[];
  nodes: Node[];
  prompts: string[];
}`}
                                </pre>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-wrap gap-4">
                        <div className="flex items-center gap-2 px-3 py-1 bg-success/10 rounded-full border border-success/20">
                            <div className="w-1.5 h-1.5 rounded-full bg-success" />
                            <span className="text-[10px] text-success font-mono uppercase">RLS Enabled</span>
                        </div>
                        <div className="flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full border border-primary/20">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                            <span className="text-[10px] text-primary font-mono uppercase">Optimistic Updates</span>
                        </div>
                    </div>
                </div>
            )
        },
        {
            title: "API Gateway & Integrations",
            description: "Communication protocols and external service orchestration.",
            icon: Zap,
            content: (
                <div className="space-y-6">
                    <div className="grid gap-4">
                        {[
                            { method: "GET", path: "/api/v1/blueprints", desc: "Retrieves user's generated architectures" },
                            { method: "POST", path: "/api/v1/generate", desc: "Trigger AI logic synthesis engine" },
                            { method: "PUT", path: "/api/v1/user/sync", desc: "Atomic preference synchronization" }
                        ].map((api) => (
                            <div key={api.path} className="flex items-center justify-between p-4 rounded-xl border border-border/30 bg-secondary/20">
                                <div className="flex items-center gap-4">
                                    <Badge className="font-mono">{api.method}</Badge>
                                    <span className="font-mono text-sm">{api.path}</span>
                                </div>
                                <span className="text-xs text-muted-foreground hidden md:inline">{api.desc}</span>
                            </div>
                        ))}
                    </div>
                </div>
            )
        },
        {
            title: "Security & Infrastructure",
            description: "Hardened authentication and global edge deployment strategies.",
            icon: ShieldCheck,
            content: (
                <div className="grid sm:grid-cols-3 gap-4">
                    <div className="p-4 rounded-xl border border-border/30 bg-secondary/30">
                        <ShieldCheck className="w-5 h-5 text-success mb-2" />
                        <h5 className="font-bold text-xs mb-1">Auth (JWT)</h5>
                        <p className="text-[10px] text-muted-foreground">End-to-end encrypted session management with auto-rotation.</p>
                    </div>
                    <div className="p-4 rounded-xl border border-border/30 bg-secondary/30">
                        <Layout className="w-5 h-5 text-primary mb-2" />
                        <h5 className="font-bold text-xs mb-1">Edge Runtime</h5>
                        <p className="text-[10px] text-muted-foreground">{"Globally distributed V8 isolates for <50ms response times."}</p>
                    </div>
                    <div className="p-4 rounded-xl border border-border/30 bg-secondary/30">
                        <Database className="w-5 h-5 text-accent mb-2" />
                        <h5 className="font-bold text-xs mb-1">DR Policy</h5>
                        <p className="text-[10px] text-muted-foreground">Automated multi-region failover and point-in-time recovery.</p>
                    </div>
                </div>
            )
        },
        {
            title: "Folder Hierarchy & Module Map",
            description: "Deep-dive into the physical organization of the codebase.",
            icon: FileText,
            content: (
                <div className="p-6 rounded-xl bg-secondary/30 border border-border/50 font-mono text-[10px] sm:text-xs">
                    <div className="text-primary mb-4 opacity-80">// Standardized Architecture Pattern</div>
                    <div className="space-y-1">
                        <div><span className="text-muted-foreground">dir</span> src/</div>
                        <div className="pl-4"><span className="text-muted-foreground">dir</span> components/ <span className="text-accent text-[8px] italic">// Atomic design components</span></div>
                        <div className="pl-8">├── ui/ <span className="text-muted-foreground">// Shadcn primitives</span></div>
                        <div className="pl-8">├── layout/ <span className="text-muted-foreground">// Header, Footer</span></div>
                        <div className="pl-8">└── sections/ <span className="text-muted-foreground">// Feature-specific modules</span></div>
                        <div className="pl-4"><span className="text-muted-foreground">dir</span> contexts/ <span className="text-accent text-[8px] italic">// Auth & Locale providers</span></div>
                        <div className="pl-4"><span className="text-muted-foreground">dir</span> hooks/ <span className="text-accent text-[8px] italic">// Custom logic & data-fetching</span></div>
                        <div className="pl-4"><span className="text-muted-foreground">dir</span> lib/ <span className="text-accent text-[8px] italic">// Third-party configs (supabase, utils)</span></div>
                        <div className="pl-4"><span className="text-muted-foreground">dir</span> pages/ <span className="text-accent text-[8px] italic">// Route entrypoints</span></div>
                        <div className="pl-4"><span className="text-muted-foreground">file</span> App.tsx <span className="text-muted-foreground">// Router config</span></div>
                        <div className="pl-4"><span className="text-muted-foreground">file</span> main.tsx <span className="text-muted-foreground">// Entry point</span></div>
                    </div>
                </div>
            )
        }
    ];

    return (
        <div className="min-h-screen flex flex-col bg-background">
            <Header />

            <main className="flex-1 pt-24 pb-20">
                {/* Hero Section */}
                <div className="relative py-16 mb-12 overflow-hidden">
                    <div className="absolute inset-0 bg-primary/5 -z-10" />
                    <div className="absolute inset-0 grid-pattern opacity-30 -z-10" />
                    
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                            <Button 
                                variant="ghost" 
                                onClick={() => navigate('/')}
                                className="mb-8 hover:bg-primary/10"
                            >
                                <ArrowLeft className="w-4 h-4 mr-2" />
                                Back to Home
                            </Button>
                            
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono mb-6">
                                <Zap className="w-3 h-3" />
                                <span>DEEP ANALYSIS ENABLED</span>
                            </div>
                            
                            <h1 className="text-4xl md:text-5xl lg:text-7xl font-display font-bold mb-6 tracking-tight">
                                Complete <span className="text-gradient">Architecture</span>
                            </h1>
                            
                            <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
                                Our platform doesn't just generate code; it engineers scalable systems.
                                Explore the underlying blueprint architecture that powers every component.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid lg:grid-cols-12 gap-12">
                            {/* Navigation Sidebar */}
                            <div className="lg:col-span-4 space-y-4">
                                <div className="sticky top-24">
                                    <h3 className="text-sm font-mono text-muted-foreground uppercase tracking-wider mb-6">Architecture Modules</h3>
                                    <div className="space-y-2">
                                        {sections.map((section) => (
                                            <button 
                                                key={section.title}
                                                onClick={() => {
                                                    const element = document.getElementById(section.title.toLowerCase().replace(/\s+/g, '-'));
                                                    element?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                                                }}
                                                className="w-full flex items-center gap-3 p-4 rounded-xl glass-card hover:bg-primary/10 transition-colors text-left group"
                                            >
                                                <section.icon className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                                                <span className="font-medium">{section.title}</span>
                                            </button>
                                        ))}
                                    </div>

                                    <div className="mt-12 p-6 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/30">
                                        <Bot className="w-8 h-8 text-primary mb-4" />
                                        <h4 className="font-bold mb-2">AI-Optimized</h4>
                                        <p className="text-sm text-muted-foreground leading-relaxed">
                                            This structure is specifically designed to be read and understood by LLMs for seamless building.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Main Content */}
                            <div className="lg:col-span-8 space-y-12">
                                {sections.map((section, idx) => (
                                    <Card 
                                        key={idx} 
                                        id={section.title.toLowerCase().replace(/\s+/g, '-')}
                                        className="bg-card/40 backdrop-blur-md border-border/50 overflow-hidden group scroll-mt-24"
                                    >
                                        <CardHeader className="p-8 pb-4">
                                            <div className="flex items-center gap-4 mb-4">
                                                <div className="p-3 rounded-2xl bg-primary/10 text-primary">
                                                    <section.icon className="w-6 h-6" />
                                                </div>
                                                <div>
                                                    <CardTitle className="text-2xl">{section.title}</CardTitle>
                                                    <CardDescription className="text-base mt-1">{section.description}</CardDescription>
                                                </div>
                                            </div>
                                        </CardHeader>
                                        <CardContent className="p-8 pt-0">
                                            {section.content}
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </div>

                        {/* Export/CTA */}
                        <div className="mt-24 p-8 md:p-16 rounded-[2.5rem] bg-secondary/30 border border-border/50 relative overflow-hidden text-center">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[100px] rounded-full" />
                            <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 blur-[100px] rounded-full" />
                            
                            <h2 className="text-3xl md:text-5xl font-bold mb-6">Want this logic for your project?</h2>
                            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
                                Generate a custom architecture blueprint in seconds and start building with your favorite AI tools.
                            </p>
                            <Button 
                                size="xl" 
                                variant="hero" 
                                onClick={() => navigate('/create')}
                                className="group"
                            >
                                <Zap className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                                Generate Custom Blueprint
                            </Button>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
