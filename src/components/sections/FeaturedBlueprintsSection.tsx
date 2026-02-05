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
        <section className="py-20 bg-gradient-to-b from-background via-accent/5 to-background">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <ScrollAnimation type="fade-up" className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
                        <Sparkles className="w-4 h-4 text-primary" />
                        <span className="text-sm font-medium text-primary">Explore Templates</span>
                    </div>

                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-clip-text text-transparent 
                       bg-gradient-to-r from-foreground via-primary to-foreground">
                        Featured Demo Blueprints
                    </h2>

                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Get inspired by professionally crafted website blueprints.
                        Use them as templates or customize them for your unique needs.
                    </p>
                </ScrollAnimation>

                {/* Blueprints Grid */}
                <StaggerContainer staggerDelay={0.15} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                    {featuredBlueprints.map(blueprint => (
                        <StaggerItem key={blueprint.id}>
                            <DemoBlueprintCard blueprint={blueprint} />
                        </StaggerItem>
                    ))}
                </StaggerContainer>

                {/* View All Button */}
                <ScrollAnimation type="fade-up" delay={0.3} className="text-center">
                    <Button
                        size="lg"
                        variant="outline"
                        onClick={() => navigate('/demos')}
                        className="group"
                    >
                        View All Demo Blueprints
                        <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                </ScrollAnimation>
            </div>
        </section>
    );
};
