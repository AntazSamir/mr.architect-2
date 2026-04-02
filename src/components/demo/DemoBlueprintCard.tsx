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
        <Card className="group relative overflow-hidden bg-transparent border-white/5 rounded-sm h-full flex flex-col transition-all duration-500 hover:border-primary/30">
            {/* Asset ID Decor */}
            <div className="absolute top-4 left-4 z-20 flex items-center gap-2 group-hover:opacity-0 transition-opacity">
                <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                <span className="text-[8px] font-mono text-muted-foreground/40 tracking-widest uppercase">NODE::SYNTH_{blueprint.id}</span>
            </div>

            <div className="relative h-56 overflow-hidden bg-[#090e14] border-b border-white/5">
                {blueprint.featured && (
                    <Badge className="absolute top-4 right-4 z-30 bg-primary/10 border border-primary/30 text-primary text-[8px] font-mono tracking-widest px-2 py-0.5 rounded-none uppercase backdrop-blur-md">
                        FEATURED_ASSET
                    </Badge>
                )}

                {/* Perspective Grid Background */}
                <div className="absolute inset-0 opacity-20 group-hover:opacity-10 transition-opacity z-10 pointer-events-none">
                    <div className="absolute inset-0 grid-pattern scale-[2] rotate-12 origin-center" />
                </div>

                {/* Asset Image Node */}
                <div className="absolute inset-0 z-0">
                  <img 
                    src={blueprint.thumbnail} 
                    alt={blueprint.projectName}
                    className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-60 group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#090e14] via-transparent to-transparent opacity-90" />
                </div>

                {/* Type Identifier Overlay */}
                <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
                    <div className="text-8xl font-display font-bold text-white/[0.03] group-hover:text-primary/[0.08] transition-all duration-700 select-none">
                        {blueprint.category.substring(0, 2).toUpperCase()}
                    </div>
                </div>

                {/* Category Badge */}
                <div className="absolute bottom-4 left-4 z-30">
                  <span className="text-[9px] font-mono text-primary/80 tracking-widest uppercase bg-[#0a0e14]/80 backdrop-blur-md border border-primary/20 px-2 py-1">
                      {blueprint.category}
                  </span>
                </div>
            </div>

            <CardHeader className="p-6 relative">
                <CardTitle className="text-xl font-display font-bold text-white group-hover:text-primary transition-colors tracking-tight uppercase">
                    {blueprint.projectName}
                </CardTitle>
                <CardDescription className="text-muted-foreground/50 text-xs leading-relaxed font-sans mt-2 line-clamp-2 italic">
                    {blueprint.description}
                </CardDescription>
            </CardHeader>

            <CardContent className="flex-1 p-6 pt-0">
                <div className="space-y-4">
                    <div className="flex items-center gap-3">
                        <Calendar className="w-3 h-3 text-primary" />
                        <span className="text-[10px] font-mono text-muted-foreground/40 tracking-wider uppercase">SYNTH_PERIOD: {blueprint.timeline}</span>
                    </div>

                    <div className="flex flex-wrap gap-2 pt-2">
                        {blueprint.kpis.slice(0, 3).map((kpi, index) => (
                            <span key={index} className="text-[8px] font-mono text-muted-foreground/30 border border-white/5 px-2 py-0.5 uppercase tracking-tighter">
                                {kpi}
                            </span>
                        ))}
                    </div>
                </div>
            </CardContent>

            <CardFooter className="flex gap-4 p-6 pt-0">
                <Button
                    variant="ghost"
                    size="sm"
                    className="flex-1 h-10 text-[10px] font-mono uppercase tracking-[0.2em] text-white/40 hover:text-white border border-white/5 hover:bg-white/5 rounded-none"
                    onClick={handleViewDetails}
                >
                    VIEW_SPEC
                </Button>
                <Button
                    size="sm"
                    className="flex-1 bg-primary text-black h-10 text-[10px] font-mono font-bold uppercase tracking-[0.2em] rounded-none hover:bg-primary/90 transition-all group"
                    onClick={handleUseTemplate}
                >
                    INITIALIZE
                    <ArrowRight className="w-3 h-3 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
            </CardFooter>
            
            {/* Selection Corner Glow */}
            <div className="absolute bottom-0 right-0 w-24 h-24 bg-[radial-gradient(circle_at_bottom_right,rgba(0,255,255,0.05)_0%,transparent_70%)] pointer-events-none" />
        </Card>
    );
};
