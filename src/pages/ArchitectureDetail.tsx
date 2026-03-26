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
  Bot,
  Box
} from 'lucide-react';
import { ScrollAnimation, StaggerContainer, StaggerItem } from '@/components/ui/scroll-animation';

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
        <div className="min-h-screen border-t-2 border-primary/20 bg-background selection:bg-primary/30 flex flex-col">
            <Header />

            <main className="flex-1 pt-24 pb-16">
                <div className="container mx-auto px-4 max-w-5xl">
                    <div className="mb-8">
                        <Button 
                            variant="ghost" 
                            size="sm" 
                            className="text-muted-foreground hover:text-foreground mb-6"
                            onClick={() => navigate('/')}
                        >
                            <ArrowLeft className="w-4 h-4 mr-2" />
                            Back to Home
                        </Button>
                        
                        <ScrollAnimation type="fade-up">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-3 rounded-xl bg-primary/10 border border-primary/30 shadow-sm">
                                    <Zap className="w-6 h-6 text-primary" />
                                </div>
                                <h1 className="text-3xl md:text-5xl font-display font-bold tracking-tight">Complete Architecture</h1>
                            </div>
                            <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed">
                                Our platform doesn't just generate code; it engineers scalable systems.
                                Explore the underlying blueprint architecture that powers every generated component, 
                                ensuring robustness from the DB layer to the edge.
                            </p>
                        </ScrollAnimation>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Main Content Area */}
                        <div className="lg:col-span-2 space-y-8">
                            
                            <StaggerContainer>
                                {sections.map((section, idx) => (
                                    <StaggerItem key={idx}>
                                        <Card className="glass-card mb-8 scroll-mt-24 shadow-sm" id={`section-${idx}`}>
                                            <CardHeader className="border-b border-border/50 bg-secondary/20 pb-4">
                                                <div className="flex items-center gap-3">
                                                    <div className="p-2 rounded-lg bg-background border border-border shadow-sm">
                                                        <section.icon className="w-5 h-5 text-foreground" />
                                                    </div>
                                                    <div>
                                                        <CardTitle className="text-xl font-display">{section.title}</CardTitle>
                                                        <CardDescription className="mt-1">{section.description}</CardDescription>
                                                    </div>
                                                </div>
                                            </CardHeader>
                                            <CardContent className="pt-6">
                                                {section.content}
                                            </CardContent>
                                        </Card>
                                    </StaggerItem>
                                ))}
                            </StaggerContainer>
                        </div>

                        {/* Sidebar - Nav & Tools */}
                        <div className="space-y-6 lg:sticky lg:top-24 max-h-[calc(100vh-8rem)] overflow-y-auto hidden-scrollbar pb-8">
                            <Card className="glass-card border-border/50">
                                <CardHeader className="pb-4 border-b border-border/50 bg-secondary/10">
                                    <CardTitle className="text-sm font-mono uppercase tracking-widest text-muted-foreground flex items-center gap-2">
                                        <Map className="w-4 h-4 text-primary" /> Blueprint Layout
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="pt-4 space-y-2">
                                    {sections.map((section, idx) => (
                                        <button
                                            key={section.title}
                                            onClick={() => {
                                                const element = document.getElementById(`section-${idx}`);
                                                element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                            }}
                                            className="w-full text-left text-sm py-2 px-3 rounded-lg hover:bg-primary/10 hover:text-primary transition-colors flex items-center gap-3 group"
                                        >
                                            <section.icon className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                                            <span className="truncate">{section.title}</span>
                                        </button>
                                    ))}
                                </CardContent>
                            </Card>

                            <Card className="glass-card border-border/50">
                                <CardHeader className="pb-4 border-b border-border/50 bg-secondary/10">
                                    <CardTitle className="text-sm font-mono uppercase tracking-widest text-muted-foreground flex items-center gap-2">
                                        <Layers className="w-4 h-4 text-accent" /> Tech Stack Model
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="pt-4 space-y-4">
                                    <div className="space-y-1">
                                        <div className="text-foreground font-medium text-sm flex items-center gap-2">
                                            <Box className="w-4 h-4 text-primary" /> React Server Components
                                        </div>
                                        <div className="text-xs text-muted-foreground">Streaming HTML and modular views.</div>
                                    </div>
                                    <div className="space-y-1">
                                        <div className="text-foreground font-medium text-sm flex items-center gap-2">
                                            <Database className="w-4 h-4 text-success" /> PostgreSQL + Node
                                        </div>
                                        <div className="text-xs text-muted-foreground">ACID compliant relational storage.</div>
                                    </div>
                                    <div className="space-y-1">
                                        <div className="text-foreground font-medium text-sm flex items-center gap-2">
                                            <ShieldCheck className="w-4 h-4 text-warning" /> RBAC Row Level Sec
                                        </div>
                                        <div className="text-xs text-muted-foreground">Granular permission control mapping.</div>
                                    </div>
                                </CardContent>
                            </Card>

                            <div className="p-5 rounded-2xl bg-gradient-to-br from-primary/10 to-transparent border border-primary/20">
                                <Bot className="w-6 h-6 text-primary mb-3" />
                                <h4 className="font-bold text-sm mb-1 text-foreground">AI-Optimized Standard</h4>
                                <p className="text-xs text-muted-foreground leading-relaxed">
                                    This structure is specifically formatted and constrained to be generated accurately 
                                    by LLMs without hallucinations.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
