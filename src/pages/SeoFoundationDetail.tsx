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
  Loader2
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

    const handleResearch = () => {
        if (!query) return;
        setIsAnalyzing(true);
        setResults(null);
        // Simulate AI API call
        setTimeout(() => {
            setResults({
                primary: [`${query} guide`, `best ${query}`, `${query} tutorial`, `what is ${query}`],
                secondary: [`${query} vs alternative`, `how to use ${query}`, `${query} architecture`, `${query} examples`],
                longTail: [`step by step ${query} implementation`, `advanced ${query} performance optimization`, `common ${query} errors and fixes`]
            });
            setIsAnalyzing(false);
        }, 2000);
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
                        <CardDescription>Enter a seed topic to generate a 3-layer semantic keyword strategy and visibility projection.</CardDescription>
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
                        <p className="animate-pulse">AI is mapping SERP intent & semantic clusters...</p>
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
                                    <AreaChart data={mockGraphData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
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
            title: "Site Architecture & Internal Linking",
            description: "A logical, shallow structure ensures search engines can crawl and index your site efficiently.",
            icon: LinkIcon,
            content: (
                <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
                    <p>
                        A modern SEO architecture uses a "flat" or "shallow" hierarchy where any page is reachable within 3 clicks from the homepage.
                    </p>
                    <ul className="space-y-2 list-disc pl-5">
                        <li><strong className="text-foreground">URL Structure:</strong> Keep URLs descriptive, lowercase, and use hyphens (e.g., <code className="text-xs bg-secondary px-1 rounded">/services/web-development</code>). Avoid parameters where possible.</li>
                        <li><strong className="text-foreground">Siloing:</strong> Group related content into thematic clusters (e.g., a main category page linking to sub-categories and specific articles).</li>
                        <li><strong className="text-foreground">Contextual Internal Links:</strong> Use descriptive anchor text to link relevant pages together. This distributes page equity (link juice) and establishes a semantic relationship between topics.</li>
                        <li><strong className="text-foreground">XML Sitemap & Robots.txt:</strong> Maintain a dynamic XML sitemap submitted to Google Search Console. Use robots.txt to keep crawlers out of admin panels or low-value parameter pages.</li>
                    </ul>
                </div>
            )
        },
        {
            title: "Core Web Vitals & Page Speed",
            description: "Google uses real-world user metrics (Core Web Vitals) as a direct ranking factor.",
            icon: Gauge,
            content: (
                <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="p-4 rounded-xl bg-secondary/30 border border-border/50">
                            <h4 className="font-bold text-primary mb-1 text-sm">LCP <span className="text-xs font-normal text-muted-foreground">(Largest Contentful Paint)</span></h4>
                            <p className="text-xs text-muted-foreground mb-2">Measures loading performance.</p>
                            <Badge variant="outline" className="text-success border-success/30 bg-success/10 text-[10px]">Target: &lt; 2.5s</Badge>
                        </div>
                        <div className="p-4 rounded-xl bg-secondary/30 border border-border/50">
                            <h4 className="font-bold text-accent mb-1 text-sm">INP <span className="text-xs font-normal text-muted-foreground">(Interaction to Next Paint)</span></h4>
                            <p className="text-xs text-muted-foreground mb-2">Measures interactivity overhead.</p>
                            <Badge variant="outline" className="text-success border-success/30 bg-success/10 text-[10px]">Target: &lt; 200ms</Badge>
                        </div>
                        <div className="p-4 rounded-xl bg-secondary/30 border border-border/50">
                            <h4 className="font-bold text-warning mb-1 text-sm">CLS <span className="text-xs font-normal text-muted-foreground">(Cumulative Layout Shift)</span></h4>
                            <p className="text-xs text-muted-foreground mb-2">Measures visual stability.</p>
                            <Badge variant="outline" className="text-success border-success/30 bg-success/10 text-[10px]">Target: &lt; 0.1</Badge>
                        </div>
                    </div>
                    <div className="p-4 rounded-xl bg-primary/5 border border-primary/20 space-y-2 text-sm text-muted-foreground">
                        <p><strong className="text-foreground">Optimization Techniques:</strong></p>
                        <ul className="list-disc pl-5 space-y-1">
                            <li>Implement edge caching via CDNs (Vercel, Cloudflare).</li>
                            <li>Serve next-gen image formats (WebP/AVIF) with explicit <code className="text-xs">width</code> and <code className="text-xs">height</code> attributes to prevent CLS.</li>
                            <li>Defer non-critical third-party scripts (analytics, ads).</li>
                        </ul>
                    </div>
                </div>
            )
        },
        {
            title: "Mobile Responsiveness",
            description: "Mobile-first indexing means Google uses your mobile site to rank pages.",
            icon: Smartphone,
            content: (
                <div className="space-y-4 text-sm text-muted-foreground">
                    <p>
                        A responsive design isn't just about fitting the screen; it's about optimizing the mobile user journey.
                    </p>
                    <ul className="space-y-2 list-disc pl-5">
                        <li><strong className="text-foreground">Dynamic Serving/Responsive Layouts:</strong> Use CSS Grid/Flexbox to adapt layouts without complex redirects.</li>
                        <li><strong className="text-foreground">Touch Targets:</strong> Buttons and links must be at least 48x48 CSS pixels with adequate spacing to prevent accidental clicks.</li>
                        <li><strong className="text-foreground">Legible Font Sizes:</strong> Base text should be at least 16px to prevent users from needing to double-tap to zoom.</li>
                        <li><strong className="text-foreground">Avoid Interstitials:</strong> Pop-ups that cover the main content on mobile entry are actively penalized by Google.</li>
                    </ul>
                </div>
            )
        },
        {
            title: "Content Strategy & Keyword Optimization",
            description: "Addressing search intent through comprehensive, semantic clustering.",
            icon: FileText,
            content: (
                <div className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-2 p-4 rounded-xl bg-secondary/20">
                            <Target className="w-5 h-5 text-accent" />
                            <h4 className="font-bold text-sm text-foreground">Intent Matching</h4>
                            <p className="text-xs text-muted-foreground">
                                Understand what the user wants. Is it Informational (guides), Navigational (brand searches), or Transactional (product pages)? Structure your page to immediately answer that intent.
                            </p>
                        </div>
                        <div className="space-y-2 p-4 rounded-xl bg-secondary/20">
                            <BarChart className="w-5 h-5 text-primary" />
                            <h4 className="font-bold text-sm text-foreground">Semantic SEO (TF-IDF/NLP)</h4>
                            <p className="text-xs text-muted-foreground">
                                Move beyond keyword stuffing. Use related entities, LSI keywords, and comprehensive topic coverage. Answer exact questions people ask (e.g., in FAQs).
                            </p>
                        </div>
                    </div>
                    <div className="p-4 rounded-xl border border-border text-sm text-muted-foreground">
                        <strong className="text-foreground block mb-2">On-Page Checklist:</strong>
                        <ul className="list-disc pl-5 space-y-1">
                            <li>Primary keyword in exactly one <code className="text-xs">&lt;h1&gt;</code>.</li>
                            <li>Engaging Meta Title (under ~60 chars) and Meta Description (under ~155 chars).</li>
                            <li>Proper hierarchy: <code className="text-xs">&lt;h2&gt;</code>, <code className="text-xs">&lt;h3&gt;</code> for logical document outlining.</li>
                            <li>Alt text on all meaningful images containing descriptive, naturally flowing keywords.</li>
                        </ul>
                    </div>
                </div>
            )
        },
        {
            title: "Technical SEO & Schema Markup",
            description: "Helping machines understand the exact meaning of your content.",
            icon: Code2,
            content: (
                <div className="space-y-4">
                    <p className="text-sm text-muted-foreground">
                        Technical elements act as the foundation that allows indexing and rich results.
                    </p>
                    <div className="space-y-3">
                        <div className="p-4 rounded-xl bg-background/50 border border-border/50 font-mono text-xs overflow-x-auto text-muted-foreground">
                            {`// Example JSON-LD Structured Data
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Mr. Architect",
  "url": "https://mrarchitect.com",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://mrarchitect.com/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
}`}
                        </div>
                        <ul className="space-y-2 list-disc pl-5 text-sm text-muted-foreground">
                            <li><strong className="text-foreground">Canonical Tags:</strong> Define the "master" version of a page to prevent duplicate content penalties (<code className="text-xs">&lt;link rel="canonical"&gt;</code>).</li>
                            <li><strong className="text-foreground">Hreflang:</strong> Necessary for multi-regional sites to serve the correct language version.</li>
                            <li><strong className="text-foreground">JSON-LD Schema:</strong> Implement Organization, LocalBusiness, Article, FAQPage, or Product schemas to trigger Google Rich Snippets (stars, prices, FAQ drop-downs).</li>
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
