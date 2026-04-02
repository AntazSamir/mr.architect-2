import { DemoBlueprintCard } from '@/components/demo/DemoBlueprintCard';
import { getFeaturedBlueprints } from '@/data/demoBlueprints';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { ScrollAnimation, StaggerContainer, StaggerItem } from '@/components/ui/scroll-animation';

export const FeaturedBlueprintsSection = () => {
    const navigate = useNavigate();
    const featuredBlueprints = getFeaturedBlueprints().slice(0, 3);

    return (
        <section id="demos" className="py-24 md:py-32 relative bg-[#0a0e14] overflow-hidden">
            {/* Background Schema */}
            <div className="absolute inset-0 grid-pattern opacity-10 -z-10" />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-[radial-gradient(circle_at_center,rgba(0,255,255,0.03)_0%,transparent_70%)] -z-10" />

            <div className="container relative mx-auto px-6">
                {/* Cinematic Header */}
                <ScrollAnimation type="fade-up" className="text-center mb-20 md:mb-24">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-[10px] font-mono tracking-[0.2em] text-primary uppercase mb-6">
                        ASSET_REGISTRY v4.0
                    </div>

                    <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tighter text-white mb-8">
                        Technical <span className="text-primary italic">Templates</span>.
                    </h2>

                    <p className="text-lg text-muted-foreground/60 max-w-2xl mx-auto leading-relaxed">
                        Pre-architected system nodes for rapid deployment across high-frequency 
                        digital infrastructure industries.
                    </p>
                </ScrollAnimation>

                {/* Blueprints Grid */}
                <StaggerContainer staggerDelay={0.15} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                    {featuredBlueprints.map(blueprint => (
                        <StaggerItem key={blueprint.id}>
                            <DemoBlueprintCard blueprint={blueprint} />
                        </StaggerItem>
                    ))}
                </StaggerContainer>

                {/* View All Button */}
                <ScrollAnimation type="fade-up" delay={0.3} className="text-center border-t border-white/5 pt-16">
                    <Button
                        size="xl"
                        variant="ghost"
                        onClick={() => navigate('/demos')}
                        className="group text-white/40 hover:text-primary transition-all font-mono text-xs tracking-[0.3em]"
                    >
                        ACCESS_FULL_REGISTRY
                        <ArrowRight className="w-4 h-4 ml-3 group-hover:translate-x-2 transition-transform" />
                    </Button>
                </ScrollAnimation>
            </div>
        </section>
    );
};
