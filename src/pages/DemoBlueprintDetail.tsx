import { useParams, useNavigate } from 'react-router-dom';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { getBlueprintById } from '@/data/demoBlueprints';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, ArrowRight, Calendar, DollarSign, Globe, Target, Users, Sparkles, TrendingUp, Zap } from 'lucide-react';

export default function DemoBlueprintDetail() {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const blueprint = id ? getBlueprintById(id) : undefined;

    if (!blueprint) {
        return (
            <div className="min-h-screen flex flex-col bg-background">
                <Header />
                <main className="flex-1 flex items-center justify-center">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold mb-4">Blueprint Not Found</h1>
                        <Button onClick={() => navigate('/demos')}>
                            <ArrowLeft className="w-4 h-4 mr-2" />
                            Back to Demos
                        </Button>
                    </div>
                </main>
                <Footer />
            </div>
        );
    }

    const handleUseTemplate = () => {
        sessionStorage.setItem('templateData', JSON.stringify(blueprint));
        navigate('/create');
    };

    return (
        <div className="min-h-screen flex flex-col bg-background">
            <Header />

            <main className="flex-1 pt-24 pb-16">
                <div className="container mx-auto px-4 max-w-6xl">
                    {/* Back Button */}
                    <Button
                        variant="ghost"
                        onClick={() => navigate('/demos')}
                        className="mb-6"
                    >
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back to Demos
                    </Button>

                    {/* Hero Section */}
                    <div className="mb-8">
                        <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                            <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-2 mb-3">
                                    <Badge variant="secondary">{blueprint.category}</Badge>
                                    {blueprint.featured && (
                                        <Badge className="bg-gradient-to-r from-amber-500 to-orange-500 border-0">
                                            <Sparkles className="w-3 h-3 mr-1" />
                                            Featured
                                        </Badge>
                                    )}
                                </div>
                                <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent 
                             bg-gradient-to-r from-foreground to-primary">
                                    {blueprint.projectName}
                                </h1>
                                <p className="text-lg text-muted-foreground">
                                    {blueprint.description}
                                </p>
                            </div>

                            <Button
                                size="lg"
                                className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70"
                                onClick={handleUseTemplate}
                            >
                                Use This Template
                                <ArrowRight className="w-5 h-5 ml-2" />
                            </Button>
                        </div>

                        {/* Visual Placeholder */}
                        <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden bg-gradient-to-br 
                          from-primary/20 via-accent/10 to-secondary/20 border border-border/50">
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="text-[120px] font-bold text-primary/10">
                                    {blueprint.websiteType.charAt(0)}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Info Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                        <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                            <CardHeader className="pb-3">
                                <div className="flex items-center gap-2">
                                    <div className="p-2 bg-primary/10 rounded-lg">
                                        <Users className="w-5 h-5 text-primary" />
                                    </div>
                                    <CardTitle className="text-sm font-medium">Target Audience</CardTitle>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-muted-foreground mb-2">Age: {blueprint.targetAge}</p>
                                <p className="text-sm text-muted-foreground mb-2">Profession: {blueprint.targetProfession}</p>
                                <p className="text-sm text-muted-foreground">Location: {blueprint.targetLocation}</p>
                            </CardContent>
                        </Card>

                        <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                            <CardHeader className="pb-3">
                                <div className="flex items-center gap-2">
                                    <div className="p-2 bg-primary/10 rounded-lg">
                                        <Target className="w-5 h-5 text-primary" />
                                    </div>
                                    <CardTitle className="text-sm font-medium">Primary Goal</CardTitle>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm">{blueprint.primaryGoal}</p>
                            </CardContent>
                        </Card>

                        <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                            <CardHeader className="pb-3">
                                <div className="flex items-center gap-2">
                                    <div className="p-2 bg-primary/10 rounded-lg">
                                        <Calendar className="w-5 h-5 text-primary" />
                                    </div>
                                    <CardTitle className="text-sm font-medium">Timeline & Budget</CardTitle>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-muted-foreground mb-2">Timeline: {blueprint.timeline}</p>
                                <p className="text-sm text-muted-foreground">Budget: {blueprint.budget}</p>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Detailed Information */}
                    <div className="grid md:grid-cols-2 gap-6">
                        {/* Left Column */}
                        <div className="space-y-6">
                            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                                <CardHeader>
                                    <div className="flex items-center gap-2">
                                        <TrendingUp className="w-5 h-5 text-primary" />
                                        <CardTitle>Key Performance Indicators</CardTitle>
                                    </div>
                                    <CardDescription>Metrics to track success</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="flex flex-wrap gap-2">
                                        {blueprint.kpis.map((kpi, index) => (
                                            <Badge key={index} variant="outline" className="text-xs">
                                                {kpi}
                                            </Badge>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>

                            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                                <CardHeader>
                                    <div className="flex items-center gap-2">
                                        <Sparkles className="w-5 h-5 text-primary" />
                                        <CardTitle>Design Style</CardTitle>
                                    </div>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div>
                                        <p className="text-sm font-medium mb-2">Style Direction</p>
                                        <p className="text-sm text-muted-foreground">{blueprint.style}</p>
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium mb-2">Brand Colors</p>
                                        <div className="flex gap-2 items-center">
                                            {blueprint.brandColors.split(',').map((color, index) => (
                                                <div
                                                    key={index}
                                                    className="w-10 h-10 rounded-lg border-2 border-border"
                                                    style={{ backgroundColor: color.trim() }}
                                                    title={color.trim()}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>

                        {/* Right Column */}
                        <div className="space-y-6">
                            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                                <CardHeader>
                                    <div className="flex items-center gap-2">
                                        <Zap className="w-5 h-5 text-primary" />
                                        <CardTitle>Technical Requirements</CardTitle>
                                    </div>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div>
                                        <p className="text-sm font-medium mb-2">Technology Stack</p>
                                        <p className="text-sm text-muted-foreground">{blueprint.techPreferences}</p>
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium mb-2">Scalability</p>
                                        <p className="text-sm text-muted-foreground">{blueprint.scalability}</p>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                                <CardHeader>
                                    <div className="flex items-center gap-2">
                                        <Globe className="w-5 h-5 text-primary" />
                                        <CardTitle>Reference Websites</CardTitle>
                                    </div>
                                    <CardDescription>Industry inspiration</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="flex flex-wrap gap-2">
                                        {blueprint.referenceUrls.split(',').map((url, index) => (
                                            <Badge key={index} variant="secondary" className="text-xs">
                                                {url.trim()}
                                            </Badge>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>

                    {/* CTA Section */}
                    <div className="mt-12 bg-gradient-to-r from-primary/10 via-accent/5 to-primary/10 
                        rounded-2xl p-8 md:p-12 border border-border/50 text-center">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4">
                            Ready to Use This Blueprint?
                        </h2>
                        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                            Start with this professionally crafted template and customize it to match your exact requirements.
                            All fields can be modified in the creation wizard.
                        </p>
                        <div className="flex flex-wrap gap-4 justify-center">
                            <Button
                                size="lg"
                                className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70"
                                onClick={handleUseTemplate}
                            >
                                Use This Template
                                <ArrowRight className="w-5 h-5 ml-2" />
                            </Button>
                            <Button
                                size="lg"
                                variant="outline"
                                onClick={() => navigate('/demos')}
                            >
                                Explore More Blueprints
                            </Button>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
