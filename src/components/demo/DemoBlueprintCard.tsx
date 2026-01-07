import { DemoBlueprint } from '@/data/demoBlueprints';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Calendar, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface DemoBlueprintCardProps {
    blueprint: DemoBlueprint;
}

export const DemoBlueprintCard = ({ blueprint }: DemoBlueprintCardProps) => {
    const navigate = useNavigate();

    const handleViewDetails = () => {
        navigate(`/demo/${blueprint.id}`);
    };

    const handleUseTemplate = () => {
        // Store the blueprint data in sessionStorage for use in create page
        sessionStorage.setItem('templateData', JSON.stringify(blueprint));
        navigate('/create');
    };

    return (
        <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-500 border-border/50 hover:border-primary/50 bg-card/50 backdrop-blur-sm">
            <div className="relative h-48 overflow-hidden bg-gradient-to-br from-primary/10 via-accent/5 to-background">
                {blueprint.featured && (
                    <Badge className="absolute top-4 right-4 z-10 bg-gradient-to-r from-amber-500 to-orange-500 border-0">
                        <Sparkles className="w-3 h-3 mr-1" />
                        Featured
                    </Badge>
                )}

                {/* Placeholder for thumbnail - will be animated gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/10 to-secondary/20 
                      group-hover:scale-110 transition-transform duration-700" />

                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-6xl font-bold text-primary/10 group-hover:text-primary/20 transition-colors">
                        {blueprint.websiteType.charAt(0)}
                    </div>
                </div>

                {/* Category Badge */}
                <Badge variant="secondary" className="absolute bottom-4 left-4">
                    {blueprint.category}
                </Badge>
            </div>

            <CardHeader>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {blueprint.projectName}
                </CardTitle>
                <CardDescription className="line-clamp-2">
                    {blueprint.description}
                </CardDescription>
            </CardHeader>

            <CardContent>
                <div className="space-y-2 text-sm">
                    <div className="flex items-center text-muted-foreground">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span className="text-xs">Timeline: {blueprint.timeline}</span>
                    </div>

                    <div className="flex flex-wrap gap-1 mt-3">
                        {blueprint.kpis.slice(0, 2).map((kpi, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                                {kpi}
                            </Badge>
                        ))}
                        {blueprint.kpis.length > 2 && (
                            <Badge variant="outline" className="text-xs">
                                +{blueprint.kpis.length - 2} more
                            </Badge>
                        )}
                    </div>
                </div>
            </CardContent>

            <CardFooter className="flex gap-2">
                <Button
                    variant="outline"
                    className="flex-1"
                    onClick={handleViewDetails}
                >
                    View Details
                </Button>
                <Button
                    className="flex-1 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70"
                    onClick={handleUseTemplate}
                >
                    Use Template
                    <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
            </CardFooter>
        </Card>
    );
};
