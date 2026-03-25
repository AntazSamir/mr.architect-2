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
        <div className="min-h-screen flex flex-col bg-background">
            <Header />

            <main className="flex-1 pt-24 pb-20">
                {/* Hero Section */}
                <div className="relative py-16 mb-12 overflow-hidden">
                    <div className="absolute inset-0 bg-accent/5 -z-10" />
                    <div className="absolute inset-0 grid-pattern opacity-30 -z-10" />
                    
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                            <Button 
                                variant="ghost" 
                                onClick={() => navigate('/')}
                                className="mb-8 hover:bg-accent/10"
                            >
                                <ArrowLeft className="w-4 h-4 mr-2" />
                                Back to Home
                            </Button>
                            
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-mono mb-6">
                                <Palette className="w-3 h-3" />
                                <span>MULTI-PLATFORM DESIGN SYSTEM</span>
                            </div>
                            
                            <h1 className="text-4xl md:text-5xl lg:text-7xl font-display font-bold mb-6 tracking-tight">
                                Smart <span className="text-gradient">Design Systems</span>
                            </h1>
                            
                            <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
                                We analyze the specific constraints and advantages of every major AI builder 
                                to generate design systems that just work.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <Tabs defaultValue="lovable" className="space-y-12">
                            <TabsList className="grid grid-cols-2 md:grid-cols-4 h-auto p-1 bg-secondary/30 backdrop-blur-xl border border-border/50">
                                {platforms.map((p) => (
                                    <TabsTrigger 
                                        key={p.id} 
                                        value={p.id}
                                        className="py-3 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all"
                                    >
                                        {p.name}
                                    </TabsTrigger>
                                ))}
                            </TabsList>

                            {platforms.map((p) => (
                                <TabsContent key={p.id} value={p.id} className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                                    <div className="grid lg:grid-cols-2 gap-12 items-start">
                                        <div className="space-y-8">
                                            <div>
                                                <Badge className="mb-4 bg-primary/20 text-primary border-primary/30 uppercase tracking-widest text-[10px]">
                                                    {p.tagline}
                                                </Badge>
                                                <h2 className="text-4xl font-bold mb-4">{p.name} Blueprint</h2>
                                                <p className="text-lg text-muted-foreground leading-relaxed">
                                                    {p.description}
                                                </p>
                                            </div>

                                            <div className="space-y-6">
                                                <h3 className="text-sm font-mono text-muted-foreground uppercase tracking-widest flex items-center gap-2">
                                                    <Layers className="w-4 h-4" />
                                                    Implementation Workflow
                                                </h3>
                                                <div className="space-y-3">
                                                    {p.workflow.map((s, i) => (
                                                        <div key={i} className="flex gap-4 p-4 rounded-xl bg-secondary/20 border border-border/30">
                                                            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center font-mono text-xs text-primary">
                                                                {i + 1}
                                                            </div>
                                                            <div>
                                                                <h4 className="font-bold text-sm mb-1">{s.step}</h4>
                                                                <p className="text-xs text-muted-foreground">{s.desc}</p>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>

                                            <div className="p-6 rounded-2xl bg-primary/5 border border-primary/20 space-y-4">
                                                <div className="flex items-center justify-between">
                                                    <h3 className="text-sm font-bold flex items-center gap-2">
                                                        <Terminal className="w-4 h-4 text-primary" />
                                                        Master Prompt
                                                    </h3>
                                                    <Badge variant="outline" className="text-[9px] font-mono">COPY TO CLIPBOARD</Badge>
                                                </div>
                                                <div className="p-4 rounded-lg bg-background/50 border border-border/50 font-mono text-xs text-muted-foreground leading-relaxed italic">
                                                    "{p.masterPrompt}"
                                                </div>
                                            </div>
                                        </div>

                                        <div className="space-y-6 lg:sticky lg:top-24">
                                            <div className="p-6 rounded-2xl bg-gradient-to-br from-secondary/50 to-transparent border border-border/50 space-y-4">
                                                <h3 className="text-sm font-bold flex items-center gap-2">
                                                   <Sparkles className="w-4 h-4 text-accent" />
                                                   AI Advisor Pro Tips
                                                </h3>
                                                <ul className="space-y-2">
                                                    {p.proTips.map((tip, i) => (
                                                        <li key={i} className="flex gap-2 text-xs text-muted-foreground italic">
                                                            <span className="text-primary">•</span>
                                                            {tip}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>

                                            <Card className="bg-secondary/30 border-border/50 overflow-hidden">
                                                <CardHeader className="bg-secondary/50 border-b border-border/50">
                                                    <div className="flex items-center justify-between">
                                                        <div className="flex gap-1.5">
                                                            <div className="w-2 h-2 rounded-full bg-destructive/50" />
                                                            <div className="w-2 h-2 rounded-full bg-warning/50" />
                                                            <div className="w-2 h-2 rounded-full bg-success/50" />
                                                        </div>
                                                        <span className="text-[10px] font-mono text-muted-foreground">{p.id}_system_config.ts</span>
                                                    </div>
                                                </CardHeader>
                                                <CardContent className="p-0">
                                                    <pre className="p-6 text-xs sm:text-sm font-mono text-primary/80 overflow-x-auto">
                                                        <code>{p.code}</code>
                                                    </pre>
                                                </CardContent>
                                            </Card>

                                                <div className="p-6 rounded-2xl bg-gradient-to-br from-primary/10 via-accent/5 to-transparent border border-border/30">
                                                    <div className="flex items-center gap-3 mb-4">
                                                        <Blocks className="w-5 h-5 text-primary" />
                                                        <span className="font-bold text-sm">Ecosystem Analysis</span>
                                                    </div>
                                                    <div className="grid grid-cols-2 gap-4 text-[10px] sm:text-xs">
                                                        <div className="space-y-1">
                                                            <div className="text-muted-foreground uppercase font-mono">Framework</div>
                                                            <div className="font-bold">React + Vite</div>
                                                        </div>
                                                        <div className="space-y-1">
                                                            <div className="text-muted-foreground uppercase font-mono">Styling</div>
                                                            <div className="font-bold">Tailwind CSS</div>
                                                        </div>
                                                        <div className="space-y-1">
                                                            <div className="text-muted-foreground uppercase font-mono">Backend</div>
                                                            <div className="font-bold">Supabase Native</div>
                                                        </div>
                                                        <div className="space-y-1">
                                                            <div className="text-muted-foreground uppercase font-mono">Deployment</div>
                                                            <div className="font-bold">Netlify/Vercel</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                </TabsContent>
                            ))}
                        </Tabs>

                        {/* Export/CTA */}
                        <div className="mt-24 p-8 md:p-16 rounded-[2.5rem] bg-accent/5 border border-accent/20 relative overflow-hidden text-center">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[100px] rounded-full" />
                            <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 blur-[100px] rounded-full" />
                            
                            <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to generate your system?</h2>
                            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
                                Select your favorite AI builder and we'll craft a design system blueprint 
                                precisely optimized for its internal logic.
                            </p>
                            <Button 
                                size="xl" 
                                variant="hero" 
                                onClick={() => navigate('/create')}
                                className="group bg-accent hover:bg-accent/90"
                            >
                                <Blocks className="w-5 h-5 mr-2" />
                                Start Designing
                            </Button>
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
