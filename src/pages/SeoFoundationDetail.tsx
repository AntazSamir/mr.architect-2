import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ScrollAnimation, StaggerContainer, StaggerItem } from '@/components/ui/scroll-animation';
import { 
  ArrowLeft, 
  Search, 
  Gauge, 
  Smartphone, 
  FileText, 
  Link as LinkIcon, 
  Code2, 
  ListChecks,
  Target,
  BarChart,
  Zap,
  Brain,
  Sparkles,
  TrendingUp,
  Loader2,
  Bot,
  ShieldCheck
} from 'lucide-react';
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
const mockGraphData = [
  { month: 'Month 1', visibility: 120 },
  { month: 'Month 2', visibility: 210 },
  { month: 'Month 3', visibility: 430 },
  { month: 'Month 4', visibility: 850 },
  { month: 'Month 5', visibility: 1200 },
  { month: 'Month 6', visibility: 2300 },
];

function AiKeywordResearchTool() {
    const [query, setQuery] = useState("");
    const [isAnalyzing, setIsAnalyzing] = useState(false);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [results, setResults] = useState<null | any>(null);

    const handleResearch = async () => {
        if (!query) return;
        
        // This expects VITE_GEMINI_API_KEY in your local .env file.
        const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
        
        if (!apiKey) {
            alert("⚠️ Missing API Key! Please create a .env file and add VITE_GEMINI_API_KEY=your_google_gemini_api_key_here");
            return;
        }

        setIsAnalyzing(true);
        setResults(null);

        try {
            const prompt = `Act as an expert SEO analyst and keyword planner.
Given the seed topic: "${query}", generate a comprehensive 3-layer keyword strategy and hypothetical visibility trend data for a 6-month SEO campaign.

Format your response EXACTLY as the following JSON object without any additional text or markdown formatting:
{
  "graphData": [
    {"month": "Month 1", "visibility": <number>},
    {"month": "Month 2", "visibility": <number>},
    {"month": "Month 3", "visibility": <number>},
    {"month": "Month 4", "visibility": <number>},
    {"month": "Month 5", "visibility": <number>},
    {"month": "Month 6", "visibility": <number>}
  ],
  "primary": ["keyword 1", "keyword 2", "keyword 3", "keyword 4"],
  "secondary": ["kw 1", "kw 2", "kw 3", "kw 4", "kw 5"],
  "longTail": ["query 1", "query 2", "query 3", "query 4", "query 5"]
}

Rules:
- 'primary' list is highly competitive, top-level head terms for this topic.
- 'secondary' list is LSI variations and medium search volume semantic matches.
- 'longTail' list incorporates very specific, high-intent user queries (low volume).
- 'graphData' numbers should represent an exponential or upward 6-month growth trend in projected SEO traffic based on this topic. Provide raw numbers.
- Output MUST be valid JSON.`;

            const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    contents: [{ parts: [{ text: prompt }] }],
                    generationConfig: { responseMimeType: "application/json" }
                })
            });

            if (!response.ok) {
                throw new Error("Failed to fetch from Gemini API");
            }

            const data = await response.json();
            const jsonString = data.candidates[0].content.parts[0].text;
            const aiResults = JSON.parse(jsonString);

            setResults({
                graphData: aiResults.graphData,
                primary: aiResults.primary,
                secondary: aiResults.secondary,
                longTail: aiResults.longTail
            });
        } catch (error) {
            console.error("AI Analysis Failed:", error);
            alert("AI Analysis Failed. Check browser console for details.");
        } finally {
            setIsAnalyzing(false);
        }
    };

    return (
        <Card className="glass-card mb-8">
            <CardHeader className="border-b border-border/50 bg-secondary/10">
                <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10 border border-primary/20">
                        <Brain className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                        <CardTitle className="text-xl font-display flex items-center gap-2">
                            AI Keyword Intelligence
                            <Badge variant="outline" className="bg-primary/5 text-primary border-primary/20 text-[10px] ml-2">Live AI</Badge>
                        </CardTitle>
                        <CardDescription>Powered by Google Gemini 1.5 Flash. Enter a seed topic to generate a 3-layer semantic keyword strategy and visibility projection.</CardDescription>
                    </div>
                </div>
            </CardHeader>
            <CardContent className="pt-6">
                <div className="flex flex-col sm:flex-row gap-3 mb-8">
                    <Input 
                        placeholder="e.g. 'React Native Architecture'" 
                        value={query} 
                        onChange={(e) => setQuery(e.target.value)} 
                        className="bg-background/50 border-border/50 h-11 flex-1"
                        onKeyDown={(e) => e.key === 'Enter' && handleResearch()}
                    />
                    <Button onClick={handleResearch} disabled={isAnalyzing || !query} className="h-11 px-6 w-full sm:w-auto">
                        {isAnalyzing ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : <Sparkles className="w-4 h-4 mr-2 text-primary-foreground" />}
                        {isAnalyzing ? "Analyzing..." : "Research Topic"}
                    </Button>
                </div>

                {isAnalyzing && (
                    <div className="h-64 flex flex-col items-center justify-center text-muted-foreground border border-border/50 rounded-xl bg-secondary/5">
                        <Loader2 className="w-8 h-8 animate-spin text-primary mb-4" />
                        <p className="animate-pulse">Gemini AI is analyzing SERP intent & semantic clusters...</p>
                    </div>
                )}

                {results && !isAnalyzing && (
                    <div className="space-y-8 animate-in fade-in zoom-in-95 duration-500">
                        {/* Visibility Graph */}
                        <div className="space-y-4">
                            <h4 className="font-bold text-foreground flex items-center gap-2 text-sm">
                                <TrendingUp className="w-4 h-4 text-accent" />
                                Projected Niche Visibility Trend (6 Months)
                            </h4>
                            <div className="h-64 w-full p-4 rounded-xl border border-border/50 bg-background/30">
                                <ResponsiveContainer width="100%" height="100%">
                                    <AreaChart data={results.graphData || mockGraphData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                                        <defs>
                                            <linearGradient id="colorVisibility" x1="0" y1="0" x2="0" y2="1">
                                                <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.3}/>
                                                <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0}/>
                                            </linearGradient>
                                        </defs>
                                        <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" vertical={false} />
                                        <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} axisLine={false} />
                                        <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} axisLine={false} />
                                        <Tooltip 
                                            contentStyle={{ backgroundColor: 'hsl(var(--background))', borderColor: 'hsl(var(--border))', borderRadius: '8px' }}
                                            itemStyle={{ color: 'hsl(var(--primary))' }}
                                        />
                                        <Area type="monotone" dataKey="visibility" stroke="hsl(var(--primary))" strokeWidth={3} fillOpacity={1} fill="url(#colorVisibility)" />
                                    </AreaChart>
                                </ResponsiveContainer>
                            </div>
                        </div>

                        {/* 3 Layers of Keywords */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {/* Layer 1 */}
                            <div className="p-4 rounded-xl border border-primary/20 bg-primary/5 space-y-3">
                                <div className="flex items-center gap-2 mb-2">
                                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-xs">1</div>
                                    <h4 className="font-bold text-sm text-foreground">Core / Head Terms</h4>
                                </div>
                                <p className="text-[10px] text-muted-foreground uppercase tracking-wider mb-2">High Vol • High Diff</p>
                                <div className="flex flex-wrap gap-2">
                                    {results.primary.map((kw: string, i: number) => (
                                        <Badge key={i} variant="secondary" className="bg-background hover:bg-background/80 border-border/50 text-xs font-normal">{kw}</Badge>
                                    ))}
                                </div>
                            </div>
                            {/* Layer 2 */}
                            <div className="p-4 rounded-xl border border-accent/20 bg-accent/5 space-y-3">
                                <div className="flex items-center gap-2 mb-2">
                                    <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center text-accent font-bold text-xs">2</div>
                                    <h4 className="font-bold text-sm text-foreground">Secondary / LSI</h4>
                                </div>
                                <p className="text-[10px] text-muted-foreground uppercase tracking-wider mb-2">Med Vol • Semantic</p>
                                <div className="flex flex-wrap gap-2">
                                    {results.secondary.map((kw: string, i: number) => (
                                        <Badge key={i} variant="secondary" className="bg-background hover:bg-background/80 border-border/50 text-xs font-normal">{kw}</Badge>
                                    ))}
                                </div>
                            </div>
                            {/* Layer 3 */}
                            <div className="p-4 rounded-xl border border-success/20 bg-success/5 space-y-3">
                                <div className="flex items-center gap-2 mb-2">
                                    <div className="w-6 h-6 rounded-full bg-success/20 flex items-center justify-center text-success font-bold text-xs">3</div>
                                    <h4 className="font-bold text-sm text-foreground">Long-Tail Queries</h4>
                                </div>
                                <p className="text-[10px] text-muted-foreground uppercase tracking-wider mb-2">Low Vol • High Intent</p>
                                <div className="flex flex-wrap gap-2">
                                    {results.longTail.map((kw: string, i: number) => (
                                        <Badge key={i} variant="secondary" className="bg-background hover:bg-background/80 border-border/50 text-xs font-normal">{kw}</Badge>
                                    ))}
                                </div>
                            </div>
                        </div>

                    </div>
                )}
            </CardContent>
        </Card>
    );
}

export default function SeoFoundationDetail() {
    const navigate = useNavigate();

    const sections = [
        {
            title: "AI SEO / Generative Search Optimization",
            description: "Traffic is shifting from 'clicking websites' to getting instant AI answers via Google SGE, ChatGPT, and Bing Copilot.",
            icon: Bot,
            content: (
                <div className="space-y-4">
                    <p className="text-sm text-muted-foreground leading-relaxed">
                        Modern search engines summarize content using Generative AI. You must structure content so AI models can easily extract it.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-2 p-4 rounded-xl bg-success/10 border border-success/20">
                            <h4 className="font-bold text-sm text-success">First-Paragraph Strategy</h4>
                            <p className="text-xs text-muted-foreground">
                                Answer the user's intent immediately in the first 50 words concisely. No fluff.
                            </p>
                        </div>
                        <div className="space-y-2 p-4 rounded-xl bg-primary/10 border border-primary/20">
                            <h4 className="font-bold text-sm text-primary">Structured Answers & FAQ</h4>
                            <p className="text-xs text-muted-foreground">
                                Use precise FAQ blocks. AI models heavily pull from structured Q&A formats.
                            </p>
                        </div>
                    </div>
                    <div className="p-4 rounded-xl border border-border text-sm text-muted-foreground">
                        <strong className="text-foreground block mb-2">SGE Checklist:</strong>
                        <ul className="list-disc pl-5 space-y-1">
                            <li><strong className="text-foreground">Entity Clarity:</strong> Clearly define your brand, service, and location so LLMs don't guess.</li>
                            <li>Write concise, structured answers avoiding complex jargon unless necessary.</li>
                            <li>Maintain strong Semantic SEO parameters (already covered below).</li>
                        </ul>
                    </div>
                </div>
            )
        },
        {
            title: "Site Architecture & Topical Authority",
            description: "A logical structure using a comprehensive Hub-and-Spoke model builds true topical authority.",
            icon: LinkIcon,
            content: (
                <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
                    <p>
                        A modern SEO architecture uses a "flat" or "shallow" hierarchy where any page is reachable within 3 clicks from the homepage, mapped into clusters.
                    </p>
                    <div className="p-4 rounded-xl bg-primary/5 border border-primary/20 text-sm mt-3 mb-3">
                        <h4 className="font-bold text-primary mb-2 flex items-center gap-2">Topical Authority Matrix (Hub & Spoke)</h4>
                        <p className="text-muted-foreground text-xs mb-3">Build pillar pages ("Hubs") with comprehensive, supporting cluster content ("Spokes") linked bidirectionally (not just top-down).</p>
                        <div className="bg-background/80 rounded border border-border/50 p-3 text-xs font-mono space-y-2">
                            <div className="text-foreground font-bold border-b border-border/50 pb-1">📌 Main Hub: /facebook-ads-guide</div>
                            <div className="text-muted-foreground pl-4 flex items-center gap-2">↳ <span className="text-accent">Spoke:</span> /budget-strategy</div>
                            <div className="text-muted-foreground pl-4 flex items-center gap-2">↳ <span className="text-accent">Spoke:</span> /targeting-best-practices</div>
                            <div className="text-muted-foreground pl-4 flex items-center gap-2">↳ <span className="text-accent">Spoke:</span> /ai-ad-creatives</div>
                        </div>
                    </div>
                    <ul className="space-y-2 list-disc pl-5">
                        <li><strong className="text-foreground">URL Structure:</strong> Keep URLs descriptive, lowercase, and use hyphens. Avoid parameters.</li>
                        <li><strong className="text-foreground">Contextual Internal Links:</strong> Use descriptive anchor text to link relevant pages. This distributes page equity and establishes semantic relationships.</li>
                        <li><strong className="text-foreground">XML Sitemap & Robots.txt:</strong> Maintain dynamic XML sitemaps mapped to Search Console.</li>
                    </ul>
                </div>
            )
        },
        {
            title: "Core Web Vitals & Real User Monitoring",
            description: "Google uses real-world user field data (Core Web Vitals) as a direct ranking factor.",
            icon: Gauge,
            content: (
                <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="p-4 rounded-xl bg-secondary/30 border border-border/50">
                            <h4 className="font-bold text-primary mb-1 text-sm">LCP <span className="text-xs font-normal text-muted-foreground">(Loading)</span></h4>
                            <Badge variant="outline" className="text-success border-success/30 bg-success/10 text-[10px]">Target: &lt; 2.5s</Badge>
                        </div>
                        <div className="p-4 rounded-xl bg-secondary/30 border border-border/50">
                            <h4 className="font-bold text-accent mb-1 text-sm">INP <span className="text-xs font-normal text-muted-foreground">(Interactivity)</span></h4>
                            <Badge variant="outline" className="text-success border-success/30 bg-success/10 text-[10px]">Target: &lt; 200ms</Badge>
                        </div>
                        <div className="p-4 rounded-xl bg-secondary/30 border border-border/50">
                            <h4 className="font-bold text-warning mb-1 text-sm">CLS <span className="text-xs font-normal text-muted-foreground">(Stability)</span></h4>
                            <Badge variant="outline" className="text-success border-success/30 bg-success/10 text-[10px]">Target: &lt; 0.1</Badge>
                        </div>
                    </div>
                    <div className="p-4 rounded-xl bg-primary/5 border border-primary/20 space-y-2 text-sm text-muted-foreground">
                        <p><strong className="text-foreground">Real User Monitoring (RUM) & Tooling:</strong></p>
                        <ul className="list-disc pl-5 space-y-1">
                            <li><strong className="text-foreground">Chrome UX Report (CrUX):</strong> Google ranks based on this REAL user field data, not lab tests!</li>
                            <li><strong className="text-foreground">Google PageSpeed Insights:</strong> Best for controlled laboratory debugging and diagnostics.</li>
                            <li><strong className="text-foreground">Optimization:</strong> Cache via CDNs, serve WebP/AVIF with explicit dimensions, defer 3rd-party scripts.</li>
                        </ul>
                    </div>
                </div>
            )
        },
        {
            title: "Mobile Optimization & Conversion UX",
            description: "Mobile-first indexing ranks your site. But Ranking ≠ Money. Conversion UX = Revenue.",
            icon: Smartphone,
            content: (
                <div className="space-y-4 text-sm text-muted-foreground">
                    <p>
                        A responsive design fits the screen; a Conversion UX design optimizes the business impact of that screen space.
                    </p>
                    <ul className="space-y-2 list-disc pl-5">
                        <li><strong className="text-foreground">Conversion Elements:</strong> Implement sticky CTA buttons at the bottom of the viewport, click-to-call numbers, or accessible WhatsApp chat triggers.</li>
                        <li><strong className="text-foreground">Fast Checkout / Form UX:</strong> Reduce friction heavily. Enable autofill autocomplete, use huge tap targets, limit input fields, and eliminate required account creation.</li>
                        <li><strong className="text-foreground">Dynamic Layouts:</strong> Use CSS Grid/Flexbox to adapt layouts without complex redirects.</li>
                        <li><strong className="text-foreground">Avoid Interstitials:</strong> Pop-ups that cover the main content on mobile entry are actively penalized.</li>
                    </ul>
                </div>
            )
        },
        {
            title: "Content Strategy & Semantic SEO",
            description: "Addressing search intent through comprehensive clustering and demonstrating true expertise.",
            icon: FileText,
            content: (
                <div className="space-y-4">
                    <div className="mt-2 p-4 rounded-xl bg-gradient-to-br from-warning/10 to-transparent border border-warning/20">
                        <h4 className="font-bold text-warning mb-2 flex items-center gap-2"><ShieldCheck className="w-4 h-4"/> E-E-A-T (Experience, Expertise, Authority, Trust)</h4>
                        <p className="text-xs text-muted-foreground mb-3">Critical for Service providers, Agencies, Freelancers, and YMYL topics.</p>
                        <ul className="list-disc pl-5 space-y-1 text-xs text-muted-foreground">
                            <li><strong className="text-foreground">Author Proof:</strong> Display real person bios, credentials, and linked professional profiles.</li>
                            <li><strong className="text-foreground">Validation:</strong> Embed real images, verified case studies, and exact metrics/results. Avoid stock photos.</li>
                            <li><strong className="text-foreground">Trust Pages:</strong> Build an extensive 'About' page and clearly visible terms/policies.</li>
                        </ul>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-2 p-4 rounded-xl bg-secondary/20">
                            <Target className="w-5 h-5 text-accent" />
                            <h4 className="font-bold text-sm text-foreground">Intent Matching</h4>
                            <p className="text-xs text-muted-foreground">
                                Answer exactly what the user wants: Informational (guides), Navigational, or Transactional (product).
                            </p>
                        </div>
                        <div className="space-y-2 p-4 rounded-xl bg-secondary/20">
                            <BarChart className="w-5 h-5 text-primary" />
                            <h4 className="font-bold text-sm text-foreground">Semantic SEO (TF-IDF)</h4>
                            <p className="text-xs text-muted-foreground">
                                Beyond keyword stuffing: use related entities, LSI concepts, and answer exact user FAQs.
                            </p>
                        </div>
                    </div>
                </div>
            )
        },
        {
            title: "Technical SEO & Indexing Control",
            description: "Helping machines understand exact meaning and managing how they crawl your application.",
            icon: Code2,
            content: (
                <div className="space-y-4">
                    <p className="text-sm text-muted-foreground">
                        Technical elements are the engine of your SEO. Control exactly what gets crawled and indexed to conserve Google's crawl budget.
                    </p>
                    <div className="space-y-3">
                        <ul className="space-y-2 list-disc pl-5 text-sm text-muted-foreground">
                            <li><strong className="text-foreground">Indexing Controls:</strong> Actively use <code className="text-xs bg-secondary px-1 rounded">noindex, nofollow</code> tags on thin content, author paginations, or tag pages to preserve crawl budget and avoid penalty.</li>
                            <li><strong className="text-foreground">Log File Analysis:</strong> A powerful advanced technique to verify exactly which paths Googlebot is hitting and where it is getting stuck.</li>
                            <li><strong className="text-foreground">Canonical Tags:</strong> Define the "master" version of a page to prevent duplicate content flags (<code className="text-xs">&lt;link rel="canonical"&gt;</code>).</li>
                            <li><strong className="text-foreground">JSON-LD Schema:</strong> Implement Organization, Article, FAQPage, or Product structured data to trigger Rich Snippets.</li>
                        </ul>
                    </div>
                </div>
            )
        }
    ];

    const checklist = [
        "Google Search Console & Google Analytics 4 connected.",
        "Dynamic XML Sitemap generated and pinged on updates.",
        "robots.txt configured properly (no accidental blockages).",
        "HTTPS enforced with valid SSL certificate.",
        "Mobile viewport meta tag present and correctly scaled.",
        "All images compressed and using WebP/AVIF formats.",
        "Custom 404 page created with return navigation.",
        "Open Graph (OG) tags and Twitter Cards implemented for social sharing.",
        "No broken internal links (404s) or infinite redirect chains (301 loops).",
        "Pages meet Core Web Vitals targets in Google PageSpeed Insights."
    ];

    return (
        <div className="min-h-screen bg-background selection:bg-success/30 flex flex-col">
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
                                <div className="p-3 rounded-xl bg-success/10 border border-success/30">
                                    <Search className="w-6 h-6 text-success" />
                                </div>
                                <h1 className="text-3xl md:text-5xl font-display font-bold">SEO Foundation Blueprint</h1>
                            </div>
                            <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed">
                                A comprehensive, modern Search Engine Optimization strategy. This blueprint details the 
                                architectural, technical, and content requirements needed to achieve high rankings and 
                                pass Google's Core Web Vitals.
                            </p>
                        </ScrollAnimation>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Main Content Area */}
                        <div className="lg:col-span-2 space-y-8">
                            
                            {/* AI Research Tool */}
                            <AiKeywordResearchTool />

                            <StaggerContainer>
                                {sections.map((section, idx) => (
                                    <StaggerItem key={idx}>
                                        <Card className="glass-card mb-8 scroll-mt-24" id={`section-${idx}`}>
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

                        {/* Sidebar - Checklist */}
                        <div className="space-y-6 lg:sticky lg:top-24 max-h-[calc(100vh-8rem)] overflow-y-auto hidden-scrollbar pb-8">
                            <Card className="bg-gradient-to-br from-success/5 to-transparent border-success/20 overflow-hidden">
                                <CardHeader className="bg-success/5 border-b border-success/10 pb-4">
                                    <CardTitle className="text-lg flex items-center gap-2">
                                        <ListChecks className="w-5 h-5 text-success" />
                                        Launch Checklist
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="pt-6">
                                    <ul className="space-y-4">
                                        {checklist.map((item, i) => (
                                            <li key={i} className="flex gap-3 text-sm text-muted-foreground">
                                                <div className="mt-0.5 flex-shrink-0">
                                                    <div className="w-4 h-4 rounded-full bg-success/20 border border-success/50 flex items-center justify-center">
                                                        <Zap className="w-2 h-2 text-success" />
                                                    </div>
                                                </div>
                                                <span className="leading-tight">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>

                            <Card className="glass-card border-border/50">
                                <CardHeader className="pb-4 border-b border-border/50">
                                    <CardTitle className="text-sm font-mono uppercase tracking-widest text-muted-foreground">Essential Tools</CardTitle>
                                </CardHeader>
                                <CardContent className="pt-4 space-y-4">
                                    <div className="space-y-1">
                                        <div className="text-foreground font-medium text-sm">Google Search Console</div>
                                        <div className="text-xs text-muted-foreground">Index monitoring & organic search traffic.</div>
                                    </div>
                                    <div className="space-y-1">
                                        <div className="text-foreground font-medium text-sm">PageSpeed Insights</div>
                                        <div className="text-xs text-muted-foreground">Lighthouse audits for Web Vitals validation.</div>
                                    </div>
                                    <div className="space-y-1">
                                        <div className="text-foreground font-medium text-sm">Ahrefs / SEMrush</div>
                                        <div className="text-xs text-muted-foreground">Keyword research, backlink monitoring, site auditing.</div>
                                    </div>
                                    <div className="space-y-1">
                                        <div className="text-foreground font-medium text-sm">Screaming Frog</div>
                                        <div className="text-xs text-muted-foreground">Deep technical crawler for broken links & architecture.</div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
