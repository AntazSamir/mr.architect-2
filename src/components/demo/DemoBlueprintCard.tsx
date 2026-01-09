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
        <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-500 border-border/50 hover:border-primary/50 bg-card/50 backdrop-blur-sm h-full flex flex-col">
            <div className="relative h-32 sm:h-48 overflow-hidden bg-gradient-to-br from-primary/10 via-accent/5 to-background">
                {blueprint.featured && (
                    <Badge className="absolute top-2 right-2 sm:top-4 sm:right-4 z-10 bg-gradient-to-r from-amber-500 to-orange-500 border-0 text-[10px] sm:text-xs px-1.5 py-0.5 sm:px-2.5 sm:py-0.5">
                        <Sparkles className="w-3 h-3 mr-1" />
                        Featured
                    </Badge>
                )}

                {/* Placeholder for thumbnail - will be animated gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/10 to-secondary/20 
                      group-hover:scale-110 transition-transform duration-700" />

                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-4xl sm:text-6xl font-bold text-primary/10 group-hover:text-primary/20 transition-colors">
                        {blueprint.websiteType.charAt(0)}
                    </div>
                </div>

                {/* Category Badge */}
                <Badge variant="secondary" className="absolute bottom-2 left-2 sm:bottom-4 sm:left-4 text-[10px] sm:text-xs">
                    {blueprint.category}
                </Badge>
            </div>

            <CardHeader className="p-3 sm:p-6">
                <CardTitle className="text-base sm:text-xl group-hover:text-primary transition-colors line-clamp-1">
                    {blueprint.projectName}
                </CardTitle>
                <CardDescription className="line-clamp-2 text-xs sm:text-sm">
                    {blueprint.description}
                </CardDescription>
            </CardHeader>

            <CardContent className="flex-1 p-3 pt-0 sm:p-6 sm:pt-0">
                <div className="space-y-2 text-sm">
                    <div className="flex items-center text-muted-foreground">
                        <Calendar className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                        <span className="text-[10px] sm:text-xs">Timeline: {blueprint.timeline}</span>
                    </div>

                    <div className="flex flex-wrap gap-1 mt-2 sm:mt-3">
                        {blueprint.kpis.slice(0, 2).map((kpi, index) => (
                            <Badge key={index} variant="outline" className="text-[10px] sm:text-xs px-1.5 py-0">
                                {kpi}
                            </Badge>
                        ))}
                        {blueprint.kpis.length > 2 && (
                            <Badge variant="outline" className="text-[10px] sm:text-xs px-1.5 py-0">
                                +{blueprint.kpis.length - 2}
                            </Badge>
                        )}
                    </div>
                </div>
            </CardContent>

            <CardFooter className="flex gap-2 p-3 sm:p-6 pt-0 sm:pt-0">
                <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 h-8 text-xs px-2"
                    onClick={handleViewDetails}
                >
                    View
                </Button>
                <Button
                    size="sm"
                    className="flex-1 bg-gradient-to-r from-primary to-primary/80 h-8 text-xs px-2 shadow-md hover:shadow-glow hover:-translate-y-0.5 transition-all duration-300"
                    onClick={handleUseTemplate}
                >
                    Use
                    <ArrowRight className="w-3 h-3 ml-1" />
                </Button>
            </CardFooter>
        </Card>
    );
};
