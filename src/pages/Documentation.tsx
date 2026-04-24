import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { ScrollAnimation } from '@/components/ui/scroll-animation';
import {
    ArrowLeft,
    ArrowRight,
    BookOpen,
    Code2,
    Layers,
    Bot,
    Search,
    ShieldCheck,
    Zap,
    Cpu,
    Boxes,
    Terminal as TerminalIcon,
    Terminal,
    Rocket,
    Globe,
    Activity,
    Lock
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

export default function Documentation() {
    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState('');
    const [activeSection, setActiveSection] = useState('mission');

    const sections = [
        {
            id: 'mission',
            title: 'Mission & Analysis',
            icon: TargetIcon,
            content: (
                <div className="space-y-8">
                    <div className="space-y-4">
                        <h2 className="text-4xl font-display font-bold text-white tracking-tighter">Strategic Analysis</h2>
                        <div className="h-1 w-20 bg-primary/50" />
                    </div>
                    
                    <div className="grid gap-6">
                        <div className="p-8 rounded-sm bg-white/5 border border-white/10 backdrop-blur-sm space-y-4 relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                            <h3 className="text-primary font-mono text-xs tracking-[0.3em] uppercase font-bold">The Core Objective</h3>
                            <p className="text-muted-foreground/70 leading-relaxed font-sans text-sm">
                                Mr.Architect is engineered to solve the "Hallucination-to-Implementation" gap. While modern AI models can generate code, they often lack the systemic context required for production-ready architecture. Our platform acts as a <span className="text-white font-bold">Strategic Synthesis Layer</span> that translates abstract requirements into high-fidelity technical blueprints.
                            </p>
                            <div className="pt-4 flex items-center gap-4">
                                <div className="px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-[9px] font-mono text-primary uppercase">LATENCY: 42ms</div>
                                <div className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-[9px] font-mono text-white/40 uppercase">VERSION: 2.0.4-STABLE</div>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="p-6 rounded-sm border border-white/5 bg-[#0d1117] space-y-3 hover:border-primary/20 transition-all">
                                <Activity className="w-5 h-5 text-accent" />
                                <h4 className="text-white font-mono text-[10px] tracking-widest uppercase font-bold">Operational Logic</h4>
                                <p className="text-xs text-muted-foreground/40 leading-relaxed">
                                    The system employs a multi-agent orchestration pipeline. It doesn't just "write code"; it architects entire systems by validating component dependencies and design consistency.
                                </p>
                            </div>
                            <div className="p-6 rounded-sm border border-white/5 bg-[#0d1117] space-y-3 hover:border-success/20 transition-all">
                                <Globe className="w-5 h-5 text-success" />
                                <h4 className="text-white font-mono text-[10px] tracking-widest uppercase font-bold">Market Goal</h4>
                                <p className="text-xs text-muted-foreground/40 leading-relaxed">
                                    To become the standard "Blueprinting" protocol for the next generation of AI-native developers, reducing time-to-market by up to 85% for complex SaaS products.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: 'workflow',
            title: 'System Workflow',
            icon: Zap,
            content: (
                <div className="space-y-8">
                    <div className="space-y-4">
                        <h2 className="text-4xl font-display font-bold text-white tracking-tighter">Workflow Protocol</h2>
                        <div className="h-1 w-20 bg-accent/50" />
                    </div>

                    <div className="space-y-6">
                        {[
                            { step: '01', title: 'Requirement Ingestion', desc: 'User provides high-level objectives and business goals via the interactive synthesis interface.' },
                            { step: '02', title: 'Architectural Synthesis', desc: 'The AI core generates a structural blueprint including folder topology, routing, and state management strategies.' },
                            { step: '03', title: 'Prompt Generation', desc: 'Technical specs are compressed into hyper-optimized prompts for specialized AI coding agents.' },
                            { step: '04', title: 'Deployment Execution', desc: 'Prompts are executed via platforms like Lovable or Cursor to build the final production environment.' }
                        ].map((item, i) => (
                            <div key={i} className="flex gap-6 items-start group">
                                <div className="flex-shrink-0 w-12 h-12 rounded-sm border border-white/10 bg-white/5 flex items-center justify-center font-mono text-xs text-primary group-hover:border-primary transition-colors">
                                    {item.step}
                                </div>
                                <div className="space-y-1 py-1">
                                    <h4 className="text-white font-bold text-sm tracking-tight">{item.title}</h4>
                                    <p className="text-xs text-muted-foreground/50 leading-relaxed max-w-xl">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    
                    <div className="p-6 rounded-sm border border-white/5 bg-[#050505] font-mono text-[10px] space-y-2">
                        <div className="text-accent/60 uppercase tracking-widest">Execution Trace:</div>
                        <div className="text-muted-foreground/30">
                            [10:14:12] INIT_SYNTHESIS_PIPELINE...<br />
                            [10:14:13] LOAD_HEURISTICS_V4...<br />
                            [10:14:15] RESOLVE_DEPENDENCIES... OK<br />
                            [10:14:18] GENERATE_BLUEPRINT_MANIFEST...
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: 'arch',
            title: 'Architecture Spec',
            icon: Boxes,
            content: (
                <div className="space-y-8">
                    <div className="space-y-4">
                        <h2 className="text-4xl font-display font-bold text-white tracking-tighter">Directory Topology</h2>
                        <div className="h-1 w-20 bg-primary/50" />
                    </div>

                    <p className="text-muted-foreground/60 leading-relaxed font-sans text-sm">
                        Our blueprints enforce a strict, scalable project structure designed for Vite/React ecosystems.
                    </p>

                    <div className="p-6 rounded-sm bg-[#050505] border border-primary/20 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-[radial-gradient(circle_at_top_right,rgba(0,255,255,0.05)_0%,transparent_70%)] opacity-50 group-hover:opacity-100 transition-opacity" />
                        <div className="flex justify-between items-center mb-4">
                            <h4 className="text-[10px] font-mono text-primary font-bold uppercase tracking-widest flex items-center gap-2">
                                <TerminalIcon className="w-3 h-3" />
                                SYS_ROOT_STRUCTURE
                            </h4>
                            <button className="text-[9px] font-mono text-white/20 hover:text-primary transition-colors">COPY_TREE</button>
                        </div>
                        <pre className="text-xs text-muted-foreground/50 font-mono leading-relaxed overflow-x-auto">
{`src/
├─ components/
│  ├─ ui/         # Atomic Shadcn primitives
│  ├─ layout/     # Structural wrappers (Nav, Footer)
│  └─ sections/   # Business-logic driven UX segments
├─ contexts/      # Contextual state (Auth, Locale)
├─ hooks/         # Custom functional logic
├─ integrations/  # External API & Database mapping
├─ lib/           # Technical utils & config
└─ pages/         # High-level route entrypoints`}
                        </pre>
                    </div>

                    <div className="p-6 rounded-sm bg-white/5 border border-white/10 space-y-4">
                        <h4 className="text-white text-xs font-mono font-bold tracking-widest uppercase">Scalability Logic</h4>
                        <ul className="grid sm:grid-cols-2 gap-4">
                            <li className="flex gap-2 text-[10px] text-muted-foreground/40 uppercase font-mono tracking-wider items-center">
                                <span className="w-1 h-1 rounded-full bg-primary" /> Atomic Design Pattern
                            </li>
                            <li className="flex gap-2 text-[10px] text-muted-foreground/40 uppercase font-mono tracking-wider items-center">
                                <span className="w-1 h-1 rounded-full bg-primary" /> Strict Typing (TS)
                            </li>
                            <li className="flex gap-2 text-[10px] text-muted-foreground/40 uppercase font-mono tracking-wider items-center">
                                <span className="w-1 h-1 rounded-full bg-primary" /> Edge Compatibility
                            </li>
                            <li className="flex gap-2 text-[10px] text-muted-foreground/40 uppercase font-mono tracking-wider items-center">
                                <span className="w-1 h-1 rounded-full bg-primary" /> Decoupled Logic
                            </li>
                        </ul>
                    </div>
                </div>
            )
        },
        {
            id: 'design',
            title: 'Design Protocol',
            icon: Cpu,
            content: (
                <div className="space-y-8">
                    <div className="space-y-4">
                        <h2 className="text-4xl font-display font-bold text-white tracking-tighter">Blueprint Noir v2.0</h2>
                        <div className="h-1 w-20 bg-accent/50" />
                    </div>

                    <div className="space-y-6">
                        <div className="grid sm:grid-cols-3 gap-4">
                            <div className="p-4 rounded-sm border border-white/10 bg-[#0a0e14] space-y-3 group hover:border-white/20 transition-all">
                                <div className="w-full h-8 bg-[#0a0e14] border border-white/20 rounded-sm" />
                                <div className="flex justify-between items-center">
                                    <div className="text-[10px] font-mono text-white/40">BASE_DARK</div>
                                    <div className="text-[8px] font-mono text-muted-foreground/20">#0a0e14</div>
                                </div>
                            </div>
                            <div className="p-4 rounded-sm border border-primary/20 bg-primary/5 space-y-3 group hover:border-primary transition-all">
                                <div className="w-full h-8 bg-primary rounded-sm" />
                                <div className="flex justify-between items-center">
                                    <div className="text-[10px] font-mono text-primary/60">PRIMARY_ACCENT</div>
                                    <div className="text-[8px] font-mono text-muted-foreground/20">#00ffff</div>
                                </div>
                            </div>
                            <div className="p-4 rounded-sm border border-white/10 bg-white/5 space-y-3 group hover:border-white/20 transition-all">
                                <div className="w-full h-8 bg-white/10 rounded-sm" />
                                <div className="flex justify-between items-center">
                                    <div className="text-[10px] font-mono text-white/40">GLASS_SHEET</div>
                                    <div className="text-[8px] font-mono text-muted-foreground/20">0.05_WHITE</div>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-4 pt-6">
                            <h4 className="text-white text-sm font-bold border-l-2 border-primary pl-4">Typography Stack</h4>
                            <div className="grid sm:grid-cols-2 gap-6">
                                <div className="p-6 rounded-sm bg-white/5 border border-white/5 space-y-2">
                                    <div className="text-[10px] font-mono text-muted-foreground/40 uppercase tracking-[0.2em]">Display / Headers</div>
                                    <p className="text-2xl font-display font-bold text-white">Outfit Bold</p>
                                    <p className="text-[9px] font-mono text-muted-foreground/20">WEIGHT: 700 / TRACKING: -0.05em</p>
                                </div>
                                <div className="p-6 rounded-sm bg-white/5 border border-white/5 space-y-2">
                                    <div className="text-[10px] font-mono text-muted-foreground/40 uppercase tracking-[0.2em]">Technical / Metadata</div>
                                    <p className="text-2xl font-mono text-white">JetBrains Mono</p>
                                    <p className="text-[9px] font-mono text-muted-foreground/20">WEIGHT: 400 / TRACKING: 0.1em</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: 'seo',
            title: 'SEO & Growth',
            icon: Search,
            content: (
                <div className="space-y-8">
                    <div className="space-y-4">
                        <h2 className="text-4xl font-display font-bold text-white tracking-tighter">Growth Matrix</h2>
                        <div className="h-1 w-20 bg-success/50" />
                    </div>

                    <div className="p-8 rounded-sm border border-success/20 bg-success/5 space-y-6 relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-4">
                            <Activity className="w-12 h-12 text-success/10" />
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="p-2 rounded-full bg-success/10">
                                <Rocket className="w-5 h-5 text-success" />
                            </div>
                            <h3 className="text-white font-bold">AI Visibility Engine</h3>
                        </div>
                        <p className="text-sm text-muted-foreground/60 leading-relaxed font-sans">
                            Every blueprint includes a pre-calculated semantic keyword map. We leverage Gemini LLM pipelines to analyze current market gaps and project 6-month visibility trajectories.
                        </p>
                        <div className="h-px w-full bg-success/20" />
                        <div className="grid sm:grid-cols-2 gap-8">
                            <div className="space-y-2">
                                <div className="text-[10px] font-mono text-success tracking-widest uppercase">Semantic Mapping</div>
                                <div className="text-2xl font-display font-bold text-white">Level_03 Cluster</div>
                            </div>
                            <div className="space-y-2">
                                <div className="text-[10px] font-mono text-success tracking-widest uppercase">Target CTR</div>
                                <div className="text-2xl font-display font-bold text-white">+12.4% Est.</div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: 'integration',
            title: 'Agent Integration',
            icon: Bot,
            content: (
                <div className="space-y-8">
                    <div className="space-y-4">
                        <h2 className="text-4xl font-display font-bold text-white tracking-tighter">Implementation Guide</h2>
                        <div className="h-1 w-20 bg-warning/50" />
                    </div>

                    <div className="grid gap-4">
                        {[
                            { name: 'Lovable / GPT Engineer', use: 'Full-stack generation and UI implementation.', status: 'STABLE' },
                            { name: 'Cursor / Bolt.new', use: 'Granular code editing and local deployment.', status: 'STABLE' },
                            { name: 'Replit Agent', use: 'Rapid prototyping and cloud-based sandbox execution.', status: 'BETA' }
                        ].map((agent, i) => (
                            <div key={i} className="p-6 rounded-sm bg-[#0d1117] border border-white/5 flex items-center justify-between group hover:border-warning/30 transition-all">
                                <div className="space-y-1">
                                    <div className="flex items-center gap-3">
                                        <h4 className="text-white font-bold text-sm">{agent.name}</h4>
                                        <span className="text-[8px] font-mono px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-muted-foreground/50">{agent.status}</span>
                                    </div>
                                    <p className="text-xs text-muted-foreground/40">{agent.use}</p>
                                </div>
                                <Button variant="ghost" size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity text-[10px] font-mono text-warning">
                                    CONNECT <ArrowRight className="w-3 h-3 ml-2" />
                                </Button>
                            </div>
                        ))}
                    </div>

                    <div className="mt-8 p-6 rounded-sm bg-warning/5 border border-warning/10 border-dashed relative">
                        <div className="absolute top-0 right-0 p-4 opacity-10">
                            <Lock className="w-8 h-8 text-warning" />
                        </div>
                        <div className="flex gap-4 items-center mb-4">
                            <ShieldCheck className="w-5 h-5 text-warning" />
                            <h4 className="text-white font-mono text-[10px] font-bold tracking-widest uppercase">Security Protocols</h4>
                        </div>
                        <p className="text-xs text-muted-foreground/50 leading-relaxed max-w-lg">
                            Always ensure environment variables are injected via the dashboard. Blueprints do not store sensitive API keys in plaintext. Use `process.env` or `import.meta.env` for all sensitive nodes.
                        </p>
                    </div>
                </div>
            )
        }
    ];

    const filteredSections = sections.filter(s => 
        s.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        s.id.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="min-h-screen bg-[#050505] selection:bg-primary/30 flex flex-col font-sans overflow-hidden">
            <Header />

            {/* Background Decor */}
            <div className="fixed inset-0 grid-pattern opacity-5 pointer-events-none" />
            <div className="fixed top-0 right-0 w-[800px] h-[800px] bg-primary/5 blur-[150px] rounded-full pointer-events-none" />
            <div className="fixed bottom-0 left-0 w-[800px] h-[800px] bg-accent/5 blur-[150px] rounded-full pointer-events-none" />

            <main className="flex-1 pt-32 pb-20 relative">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="mb-16">
                        <Button
                            variant="ghost"
                            size="sm"
                            className="text-muted-foreground/40 hover:text-primary mb-12 font-mono text-[10px] uppercase tracking-[0.3em] transition-all group"
                            onClick={() => navigate('/')}
                        >
                            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                            RETURN_TO_BASE
                        </Button>

                        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
                            <ScrollAnimation type="fade-up">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="h-px w-12 bg-primary/30" />
                                    <span className="text-[10px] font-mono font-bold text-primary tracking-[0.3em] uppercase">SYSTEM_DOCUMENTATION_v2.0_ANALYSIS</span>
                                </div>
                                <h1 className="text-6xl md:text-8xl font-display font-bold tracking-tighter text-white leading-[0.9] mb-4">
                                    Technical <br />
                                    <span className="text-primary italic">Manifesto</span>.
                                </h1>
                                <p className="text-muted-foreground/40 font-mono text-xs uppercase tracking-widest">
                                    Comprehensive analysis of synthesis engine and operational protocols
                                </p>
                            </ScrollAnimation>

                            {/* Search Registry UI */}
                            <div className="w-full lg:max-w-sm relative group">
                                <div className="absolute inset-0 bg-primary/5 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                                <div className="relative flex items-center">
                                    <Search className="absolute left-4 w-4 h-4 text-muted-foreground/30 group-focus-within:text-primary transition-colors" />
                                    <input 
                                        type="text"
                                        placeholder="SEARCH_MANIFEST_REGISTRY..."
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        className="w-full bg-[#0d1117] border border-white/5 rounded-sm py-4 pl-12 pr-4 text-[10px] font-mono text-white placeholder:text-muted-foreground/20 focus:outline-none focus:border-primary/30 transition-all"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                        {/* Sidebar */}
                        <div className="lg:col-span-4 lg:sticky lg:top-32 space-y-6">
                            <div className="rounded-sm bg-[#0d1117] border border-white/5 p-6 backdrop-blur-xl relative overflow-hidden group">
                                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                                    <Activity className="w-20 h-20 text-primary" />
                                </div>
                                <h3 className="text-[10px] font-mono font-bold tracking-[0.3em] text-muted-foreground/30 uppercase mb-8 flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                                    MANIFEST_REGISTRY
                                </h3>
                                <nav className="space-y-1">
                                    {filteredSections.map((section) => (
                                        <button
                                            key={section.id}
                                            onClick={() => setActiveSection(section.id)}
                                            className={cn(
                                                "w-full flex items-center justify-between px-4 py-4 rounded-sm text-left transition-all duration-300 group cursor-pointer",
                                                activeSection === section.id
                                                    ? "bg-primary/10 border border-primary/20"
                                                    : "bg-transparent border border-transparent hover:bg-white/5"
                                            )}
                                        >
                                            <div className="flex items-center gap-4">
                                                <section.icon className={cn(
                                                    "w-4 h-4 transition-colors",
                                                    activeSection === section.id ? "text-primary" : "text-muted-foreground/40 group-hover:text-white"
                                                )} />
                                                <span className={cn(
                                                    "text-xs font-mono font-bold uppercase tracking-[0.2em] transition-colors",
                                                    activeSection === section.id ? "text-primary" : "text-muted-foreground/60 group-hover:text-white"
                                                )}>{section.title}</span>
                                            </div>
                                            {activeSection === section.id && (
                                                <motion.div layoutId="indicator" className="w-1 h-4 bg-primary" />
                                            )}
                                        </button>
                                    ))}
                                    {filteredSections.length === 0 && (
                                        <div className="py-8 text-center space-y-2">
                                            <div className="text-[10px] font-mono text-muted-foreground/20">NO_MATCHES_FOUND</div>
                                            <button onClick={() => setSearchQuery('')} className="text-[8px] font-mono text-primary uppercase hover:underline">RESET_SEARCH</button>
                                        </div>
                                    )}
                                </nav>
                            </div>

                            {/* Technical Readout Badge */}
                            <div className="p-6 rounded-sm border border-white/5 bg-[#0d1117]/50 space-y-4">
                                <div className="flex items-center justify-between">
                                    <span className="text-[10px] font-mono text-muted-foreground/40 uppercase">System Integrity</span>
                                    <span className="text-[10px] font-mono text-success">NOMINAL</span>
                                </div>
                                <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                                    <div className="h-full w-[94%] bg-primary shadow-[0_0_10px_rgba(0,255,255,0.5)]" />
                                </div>
                                <div className="flex items-center justify-between text-[8px] font-mono text-muted-foreground/30">
                                    <span>AUTH_PROTOCOL_01</span>
                                    <span>ENCRYPTED</span>
                                </div>
                            </div>
                        </div>

                        {/* Content Area */}
                        <div className="lg:col-span-8">
                            <div className="relative rounded-sm bg-[#0d1117]/50 border border-white/5 p-8 md:p-16 backdrop-blur-md min-h-[700px] overflow-hidden">
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
                                
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={activeSection}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                        transition={{ duration: 0.4, ease: "easeOut" }}
                                    >
                                        {sections.find(s => s.id === activeSection)?.content}
                                    </motion.div>
                                </AnimatePresence>

                                {/* Bottom Navigation */}
                                <div className="mt-20 pt-8 border-t border-white/5 flex items-center justify-between">
                                    <div className="flex flex-col gap-1">
                                        <span className="text-[8px] font-mono text-muted-foreground/30 uppercase">Last Updated</span>
                                        <span className="text-[10px] font-mono text-white/40">2026.04.24_10:15:01</span>
                                    </div>
                                    <Button variant="ghost" className="text-[10px] font-mono text-primary uppercase tracking-widest gap-2">
                                        REQUEST_ADDENDUM <ArrowRight className="w-3 h-3" />
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}

function TargetIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <circle cx="12" cy="12" r="10" />
            <circle cx="12" cy="12" r="6" />
            <circle cx="12" cy="12" r="2" />
        </svg>
    )
}
