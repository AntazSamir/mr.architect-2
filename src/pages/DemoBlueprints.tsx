import { useState } from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { DemoBlueprintCard } from '@/components/demo/DemoBlueprintCard';
import { demoBlueprints, getAllCategories } from '@/data/demoBlueprints';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, Sparkles } from 'lucide-react';

export default function DemoBlueprints() {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState<string>('all');

    const categories = ['all', ...getAllCategories()];

    const filteredBlueprints = demoBlueprints.filter(blueprint => {
        const matchesSearch =
            blueprint.projectName.toLowerCase().includes(searchQuery.toLowerCase()) ||
            blueprint.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
            blueprint.category.toLowerCase().includes(searchQuery.toLowerCase());

        const matchesCategory = selectedCategory === 'all' || blueprint.category === selectedCategory;

        return matchesSearch && matchesCategory;
    });

    return (
        <div className="min-h-screen flex flex-col bg-background">
            <Header />

            <main className="flex-1 pt-24 pb-16">
                {/* Hero Section */}
                <div className="bg-gradient-to-br from-primary/10 via-accent/5 to-background py-16 mb-12">
                    <div className="container mx-auto px-4">
                        <div className="max-w-3xl mx-auto text-center space-y-4">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
                                <Sparkles className="w-4 h-4 text-primary" />
                                <span className="text-sm font-medium text-primary">Explore Demo Blueprints</span>
                            </div>

                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent 
                           bg-gradient-to-r from-foreground via-primary to-foreground">
                                Professionally Crafted Website Blueprints
                            </h1>

                            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                                Explore our collection of expertly designed website blueprints across various industries.
                                Use them as templates or draw inspiration for your next project.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="container mx-auto px-4">
                    {/* Filters Section */}
                    <div className="mb-8 space-y-4">
                        {/* Search Bar */}
                        <div className="relative max-w-md mx-auto">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                            <Input
                                type="text"
                                placeholder="Search blueprints..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="pl-10 h-12 bg-card/50 backdrop-blur-sm border-border/50"
                            />
                        </div>

                        {/* Category Filters */}
                        <div className="flex flex-wrap justify-center gap-2">
                            {categories.map(category => (
                                <Button
                                    key={category}
                                    variant={selectedCategory === category ? 'default' : 'outline'}
                                    size="sm"
                                    onClick={() => setSelectedCategory(category)}
                                    className={selectedCategory === category
                                        ? 'bg-gradient-to-r from-primary to-primary/80'
                                        : 'hover:bg-accent'}
                                >
                                    {category === 'all' ? 'All Categories' : category}
                                </Button>
                            ))}
                        </div>
                    </div>

                    {/* Results Count */}
                    <div className="mb-6 text-center text-sm text-muted-foreground">
                        Showing {filteredBlueprints.length} of {demoBlueprints.length} blueprints
                    </div>

                    {/* Blueprints Grid */}
                    {filteredBlueprints.length === 0 ? (
                        <div className="text-center py-16">
                            <div className="text-6xl mb-4">🔍</div>
                            <h3 className="text-xl font-semibold mb-2">No blueprints found</h3>
                            <p className="text-muted-foreground">
                                Try adjusting your search or filter criteria
                            </p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                            {filteredBlueprints.map(blueprint => (
                                <DemoBlueprintCard key={blueprint.id} blueprint={blueprint} />
                            ))}
                        </div>
                    )}

                    {/* CTA Section */}
                    <div className="mt-16 text-center bg-gradient-to-r from-primary/10 via-accent/5 to-primary/10 
                        rounded-2xl p-8 md:p-12 border border-border/50">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4">
                            Ready to Build Your Own?
                        </h2>
                        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                            Start from scratch or use one of our templates to create a custom blueprint
                            tailored to your specific needs.
                        </p>
                        <Button
                            size="lg"
                            className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70"
                            onClick={() => window.location.href = '/create'}
                        >
                            Create Custom Blueprint
                            <Sparkles className="w-5 h-5 ml-2" />
                        </Button>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
