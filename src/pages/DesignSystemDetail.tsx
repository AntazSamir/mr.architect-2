import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  ArrowLeft, 
  Palette, 
  Sparkles, 
  Blocks, 
  Component, 
  Code2, 
  Layers,
  Cpu,
  Zap,
  Globe,
  Settings,
  Terminal,
  Figma
} from 'lucide-react';
import { ScrollAnimation } from '@/components/ui/scroll-animation';

export default function DesignSystemDetail() {
    const navigate = useNavigate();

    const platforms = [
        {
            id: "lovable",
            name: "Lovable",
            icon: HeartIcon,
            tagline: "Systems-First Prompting",
            description: "Modular development focusing on isolated blocks and iterative foundations. Ideal for rapid high-fidelity prototyping.",
            workflow: [
                { step: "1. Brand Identity", desc: "Define typography (e.g., 'Inter' for UI, 'Outfit' for headers) and primary HSL tokens." },
                { step: "2. Atomic Core", desc: "Build base components: Buttons, Inputs, Cards. Ensure accessibility is baked in." },
                { step: "3. Layout Synthesis", desc: "Iterate on functional sections (Hero, Features, Nav) before any page-level logic." }
            ],
            masterPrompt: `Build a [Project Type] with a [Theme Style] design. Use a modular system approach. 
1. Define primary design tokens (colors, spacing, radius) using Tailwind/CSS variables.
2. Create reusable 'section' components.
3. Ask me 3 questions about the brand before writing layout code.`,
            proTips: [
                "Use 'neo-brutalist' or 'glassmorphism' descriptors for instant high-end visuals.",
                "Always verify the 'Supabase' connection is modularized in the foundation phase.",
                "Mention 'shadcn/ui' compatibility for the best component output."
            ],
            code: `// Lovable Global Theme
:root {
  --primary: 221.2 83.2% 53.3%;
  --accent: 210 40% 96.1%;
  --radius: 0.75rem;
}`
        },
        {
            id: "replit",
            name: "Replit",
            icon: Cpu,
            tagline: "Token-Driven Agents",
            description: "Deep integration with CSS Design Tokens and Replit Agent custom skills. Best for full-stack logic integration.",
            workflow: [
                { step: "1. .agents/skills", desc: "Populate the skills directory with your design intent and component API specs." },
                { step: "2. Variable Injection", desc: "Define all colors and spacing as CSS variables in index.css for agent reference." },
                { step: "3. Logic Anchoring", desc: "Point the agent to existing lib/supabase.ts for every data-fetching operation." }
            ],
            masterPrompt: `Initialize a Vite + React project. 
Reference .agents/skills/design-system.md for all UI decisions. 
Use absolute paths and strict naming conventions for 'src/components/common'.`,
            proTips: [
                "The Replit Agent scans 'instructions.md' - place your design rules there.",
                "Use 'Vite Path Aliases' (@/) consistently to prevent import errors.",
                "For dark mode, define a 'data-theme' selector in your CSS."
            ],
            code: `/* Replit Agent Theme Injection */
@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 222.2 84% 4.9%;
    --secondary-glow: radial-gradient(rgba(255, 255, 255, 1), rgba(255, 255, 255, 0));
  }
}`
        },
        {
            id: "v0",
            name: "V0.dev",
            icon: Zap,
            tagline: "Registry-Linked UI",
            description: "Leveraging custom component registries and high-fidelity Tailwind configs. The gold standard for Next.js/Tailwind apps.",
            workflow: [
                { step: "1. Registry Setup", desc: "Format your design system into a registry.json pointing to your GitHub components." },
                { step: "2. Tailwind Meta", desc: "Configure tailwind.config.ts with your custom brand color objects." },
                { step: "3. Design-Mode Sync", desc: "Perform iterative visual refinements directly in the V0 interactive canvas." }
            ],
            masterPrompt: `Generate a [Page Name] using components from my custom registry: [URL].
Apply [Theme Name] styling using the brand colors defined in my tailwind.config.ts.
Priority: Accessibility, Mobile-first responsive, and high-fidelity gradients.`,
            proTips: [
                "Specify 'Lucide React' for icons for the most consistent rendering.",
                "Use 'shadcn/ui' as the core library for modular component fetching.",
                "Leverage 'v0 interactive design mode' for micro-spacing adjustments."
            ],
            code: `{
  "name": "corporate-v0-system",
  "tailwind": {
    "config": "tailwind.config.js",
    "theme": { "primary": "#1A1A1A", "accent": "#7C3AED" }
  }
}`
        },
        {
            id: "bolt",
            name: "Bolt.new",
            icon: Globe,
            tagline: "Figma-Integrated Builds",
            description: "Direct Figma-to-Code mapping and distinct Plan vs Discussion development modes. Best for complex architecture + design sync.",
            workflow: [
                { step: "1. Figma Selection", desc: "Copy the Figma frame link and paste it into the initial Bolt prompt." },
                { step: "2. Structural Planning", desc: "Confirm the component architecture in 'Plan Mode' before generating UI." },
                { step: "3. Full-Stack Sync", desc: "Iteratively add database schemas and API logic once UI is solidified." }
            ],
            masterPrompt: `I am building [Project Name]. 
Reference this Figma design: [Link].
1. Plan the component architecture first in Plan Mode.
2. Implement using Tailwind and Lucide icons.
3. Integrate Supabase for authentication as per my schema.`,
            proTips: [
                "Use 'Copy link to selection' in Figma, not just the file link.",
                "Switch to 'Discussion Mode' for logic bugs and 'Plan Mode' for new features.",
                "Explicitly tell Bolt to 'use existing utils' to prevent logic duplication."
            ],
            code: `// Bolt Architecture Plan
- components/auth/*
- components/dashboard/*
- lib/supabase/client.ts
- hooks/use-auth.ts`
        }
    ];

    return (
        <div className="min-h-screen flex flex-col bg-background selection:bg-primary/30">
            <Header />

            <main className="flex-1">
                {/* Enhanced Hero Section */}
                <div className="relative pt-32 pb-24 mb-12 overflow-hidden flex flex-col items-center justify-center min-h-[50vh]">
                    {/* Abstract glowing orbs */}
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] mix-blend-screen animate-pulse duration-10000" />
                    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[120px] mix-blend-screen animate-pulse duration-7000" />
                    <div className="absolute inset-0 grid-pattern opacity-20 mask-image-gradient-b -z-10" />
                    
                    <div className="container mx-auto px-4 relative z-10 text-center">
                        <div className="max-w-4xl mx-auto flex flex-col items-center">
                            <Button 
                                variant="outline" 
                                size="sm"
                                onClick={() => navigate('/')}
                                className="mb-10 rounded-full bg-background/50 backdrop-blur-md border border-border/50 hover:bg-background/80"
                            >
                                <ArrowLeft className="w-4 h-4 mr-2" />
                                Return Home
                            </Button>
                            
                            <ScrollAnimation type="fade-down">
                                <Badge className="mb-6 px-4 py-1.5 rounded-full bg-accent/10 text-accent border border-accent/20 flex items-center gap-2">
                                    <Sparkles className="w-4 h-4" />
                                    AI-Optimized Multi-Platform Ecosystem
                                </Badge>
                            </ScrollAnimation>
                            
                            <ScrollAnimation type="fade-up" delay={100}>
                                <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-6 tracking-tighter leading-tight">
                                    Intelligent <br className="hidden md:block"/>
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-success">
                                        Design Systems
                                    </span>
                                </h1>
                            </ScrollAnimation>
                            
                            <ScrollAnimation type="fade-up" delay={200}>
                                <p className="text-lg md:text-2xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                                    Architecture built for machines. Perfected for humans. We analyze the exact nuances of each AI builder to generate pixel-perfect, native code structures.
                                </p>
                            </ScrollAnimation>
                        </div>
                    </div>
                </div>

                <div className="container mx-auto px-4 pb-32">
                    <div className="max-w-6xl mx-auto">
                        <Tabs defaultValue="lovable" className="space-y-16">
                            <div className="flex justify-center">
                                <TabsList className="inline-flex items-center justify-center p-1.5 bg-background/60 backdrop-blur-2xl border border-border/50 rounded-full shadow-2xl overflow-x-auto hidden-scrollbar w-full md:w-auto mt-4 max-w-full">
                                    {platforms.map((p) => (
                                        <TabsTrigger 
                                            key={p.id} 
                                            value={p.id}
                                            className="px-6 py-3 rounded-full data-[state=active]:bg-gradient-to-br data-[state=active]:from-primary data-[state=active]:to-accent data-[state=active]:text-primary-foreground data-[state=active]:shadow-lg transition-all min-w-[120px]"
                                        >
                                            <div className="flex items-center gap-2">
                                                <p.icon className="w-4 h-4" />
                                                <span className="font-semibold">{p.name}</span>
                                            </div>
                                        </TabsTrigger>
                                    ))}
                                </TabsList>
                            </div>

                            {platforms.map((p) => (
                                <TabsContent key={p.id} value={p.id} className="animate-in slide-in-from-bottom-8 fade-in duration-700 ease-out outline-none">
                                    <div className="grid lg:grid-cols-12 gap-10">
                                        
                                        {/* Left Column: Context & Workflow */}
                                        <div className="lg:col-span-7 space-y-8">
                                            {/* Header Card */}
                                            <div className="relative p-8 md:p-12 rounded-3xl bg-secondary/10 border border-border/50 overflow-hidden group">
                                                <div className="absolute -top-10 -right-10 p-8 opacity-10 group-hover:opacity-20 transition-opacity duration-500 transform group-hover:scale-110 group-hover:rotate-12">
                                                    <p.icon className="w-64 h-64 text-primary" />
                                                </div>
                                                <Badge className="mb-6 bg-primary/20 text-primary border-primary/30 uppercase tracking-widest text-xs font-mono">
                                                    {p.tagline}
                                                </Badge>
                                                <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">{p.name} Blueprint</h2>
                                                <p className="text-lg text-muted-foreground leading-relaxed relative z-10 max-w-xl">
                                                    {p.description}
                                                </p>
                                            </div>

                                            {/* Workflow Graph */}
                                            <div className="space-y-6">
                                                <h3 className="text-sm font-mono text-muted-foreground uppercase tracking-widest flex items-center gap-2 ml-2">
                                                    <Layers className="w-4 h-4 text-accent" />
                                                    Architectural Workflow
                                                </h3>
                                                <div className="grid md:grid-cols-3 gap-6 relative">
                                                    {/* Connecting Line (desktop) */}
                                                    <div className="hidden md:block absolute top-[2.25rem] left-10 right-10 h-px bg-border z-0" />
                                                    
                                                    {p.workflow.map((s, i) => (
                                                        <div key={i} className="relative z-10 p-6 rounded-2xl bg-card border border-border/50 hover:bg-accent/5 hover:border-accent/30 transition-all duration-300 group shadow-sm hover:shadow-xl">
                                                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-background to-secondary/50 border border-border flex items-center justify-center font-bold text-lg text-primary mb-4 shadow-inner group-hover:scale-110 group-hover:border-primary/50 transition-all">
                                                                {i + 1}
                                                            </div>
                                                            <h4 className="font-bold text-sm mb-2 text-foreground">{s.step}</h4>
                                                            <p className="text-xs text-muted-foreground leading-relaxed">{s.desc}</p>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* Master Prompt */}
                                            <div className="p-6 md:p-8 rounded-3xl bg-card border border-border shadow-2xl group hover:border-primary/50 transition-colors">
                                                <div className="flex items-center justify-between mb-6 border-b border-border/50 pb-4">
                                                    <h3 className="text-sm font-bold flex items-center gap-2">
                                                        <Terminal className="w-4 h-4 text-primary" />
                                                        Master Injection Prompt
                                                    </h3>
                                                    <div className="flex gap-2">
                                                        <div className="w-3 h-3 rounded-full bg-destructive/50" />
                                                        <div className="w-3 h-3 rounded-full bg-warning/50" />
                                                        <div className="w-3 h-3 rounded-full bg-success/50" />
                                                    </div>
                                                </div>
                                                <pre className="font-mono text-xs sm:text-sm text-muted-foreground whitespace-pre-wrap leading-loose">
                                                    <span className="text-primary/70 select-none">$ </span> 
                                                    <span className="text-foreground">{p.masterPrompt}</span>
                                                </pre>
                                            </div>
                                        </div>

                                        {/* Right Column: Code & Tips */}
                                        <div className="lg:col-span-5 space-y-8">
                                            
                                            {/* Code Block */}
                                            <Card className="rounded-3xl bg-secondary/20 border-border/50 overflow-hidden shadow-2xl pt-2">
                                                <CardHeader className="bg-transparent border-b border-border/20 pb-4">
                                                    <div className="flex items-center justify-between">
                                                        <div className="flex items-center gap-2">
                                                            <Code2 className="w-4 h-4 text-accent" />
                                                            <span className="text-xs font-mono font-bold text-foreground">System Config</span>
                                                        </div>
                                                        <Badge variant="outline" className="text-[10px] font-mono border-primary/20 bg-primary/5 text-primary tracking-wider">.{p.id}-config</Badge>
                                                    </div>
                                                </CardHeader>
                                                <CardContent className="p-0">
                                                    <div className="p-6 bg-[#09090b] backdrop-blur-md">
                                                        <pre className="text-[11px] sm:text-xs font-mono text-primary-foreground/90 overflow-x-auto leading-loose selection:bg-primary/30">
                                                            <code>{p.code}</code>
                                                        </pre>
                                                    </div>
                                                </CardContent>
                                            </Card>

                                            {/* AI Tips */}
                                            <div className="p-8 rounded-3xl bg-gradient-to-br from-accent/5 via-transparent to-transparent border border-accent/10 space-y-5">
                                                <h3 className="text-sm font-bold flex items-center gap-3">
                                                   <div className="p-2 bg-accent/10 rounded-lg">
                                                       <Sparkles className="w-4 h-4 text-accent" />
                                                   </div>
                                                   AI Advisor Guidelines
                                                </h3>
                                                <ul className="space-y-4">
                                                    {p.proTips.map((tip, i) => (
                                                        <li key={i} className="flex gap-3 text-sm text-muted-foreground leading-relaxed">
                                                            <div className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-accent text-accent shadow-[0_0_8px_currentColor]" />
                                                            <span>{tip}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>

                                            {/* Ecosystem specs */}
                                            <div className="p-6 sm:p-8 rounded-3xl border border-border/50 bg-background/50 backdrop-blur-sm">
                                                <div className="flex items-center gap-3 mb-6">
                                                    <div className="p-2 bg-primary/10 rounded-lg border border-primary/20">
                                                        <Blocks className="w-4 h-4 text-primary" />
                                                    </div>
                                                    <span className="font-bold text-sm">Target Ecosystem</span>
                                                </div>
                                                <div className="grid grid-cols-2 gap-y-6 gap-x-4 text-xs">
                                                    <div className="space-y-2">
                                                        <div className="text-muted-foreground uppercase font-mono tracking-wider text-[10px]">Framework</div>
                                                        <div className="font-bold flex items-center gap-2"><div className="w-2 h-2 rounded-sm bg-primary shadow-[0_0_8px_currentColor]" /> React + Vite</div>
                                                    </div>
                                                    <div className="space-y-2">
                                                        <div className="text-muted-foreground uppercase font-mono tracking-wider text-[10px]">Styling</div>
                                                        <div className="font-bold flex items-center gap-2"><div className="w-2 h-2 rounded-sm bg-accent shadow-[0_0_8px_currentColor]" /> Tailwind CSS</div>
                                                    </div>
                                                    <div className="space-y-2">
                                                        <div className="text-muted-foreground uppercase font-mono tracking-wider text-[10px]">Backend</div>
                                                        <div className="font-bold flex items-center gap-2"><div className="w-2 h-2 rounded-sm bg-success shadow-[0_0_8px_currentColor]" /> Supabase Core</div>
                                                    </div>
                                                    <div className="space-y-2">
                                                        <div className="text-muted-foreground uppercase font-mono tracking-wider text-[10px]">Deployment</div>
                                                        <div className="font-bold flex items-center gap-2"><div className="w-2 h-2 rounded-sm bg-warning shadow-[0_0_8px_currentColor]" /> Edge Network</div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </TabsContent>
                            ))}
                        </Tabs>

                        {/* Export/CTA */}
                        <div className="relative mt-32 p-10 md:p-20 rounded-[3rem] bg-card border border-border/50 overflow-hidden text-center shadow-2xl">
                            <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
                            <div className="absolute top-1/2 left-0 w-72 h-72 bg-primary/20 blur-[120px] rounded-full -translate-y-1/2 -translate-x-1/2 pointer-events-none" />
                            <div className="absolute top-1/2 right-0 w-72 h-72 bg-accent/20 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                            
                            <div className="relative z-10">
                                <Badge className="mb-6 px-4 py-1.5 rounded-full bg-background border border-border text-primary font-mono tracking-widest text-[10px]">
                                    READY TO BUILD?
                                </Badge>
                                <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 tracking-tight">Deploy your next system.</h2>
                                <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
                                    Select your AI builder, copy the master injection prompt, and let the machines handle the boilerplate.
                                </p>
                                <Button 
                                    size="lg" 
                                    onClick={() => navigate('/create')}
                                    className="group bg-foreground hover:bg-foreground/90 transition-opacity text-background rounded-full px-8 h-14 text-sm font-bold shadow-xl overflow-hidden relative"
                                >
                                    <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-primary/20 to-accent/20 ease-out duration-500 opacity-0 group-hover:opacity-100" />
                                    <span className="relative flex items-center">
                                        <Blocks className="w-4 h-4 mr-3 group-hover:rotate-12 transition-transform duration-500" />
                                        Launch Architecture Engine
                                    </span>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}

function HeartIcon(props: any) {
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
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  )
}
