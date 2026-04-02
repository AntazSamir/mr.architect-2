import { useState } from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { DemoBlueprintCard } from '@/components/demo/DemoBlueprintCard';
import { demoBlueprints, getAllCategories } from '@/data/demoBlueprints';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';

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
        <div className="min-h-screen flex flex-col bg-[#0a0e14] relative overflow-hidden">
            {/* Background Schema */}
            <div className="absolute inset-0 grid-pattern opacity-10 -z-10" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-[radial-gradient(circle_at_center,rgba(0,255,255,0.05)_0%,transparent_70%)] -z-10" />

            <Header />

            <main className="flex-1 pt-32 pb-24">
                {/* Cinematic Header Node */}
                <div className="container relative mx-auto px-6 mb-24">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center gap-3 px-3 py-1 rounded-sm bg-primary/10 border border-primary/20 text-[10px] font-mono tracking-[0.3em] text-primary uppercase mb-10">
                            REGISTRY_EXHIBIT v4.1
                        </div>

                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold tracking-tighter text-white mb-8 leading-tight">
                            System <span className="text-primary italic">Blueprints</span>.
                        </h1>

                        <p className="text-lg md:text-xl text-muted-foreground/60 max-w-2xl mx-auto leading-relaxed">
                            A curated network of production-ready architectural nodes 
                            built for rapid autonomous synthesis.
                        </p>
                    </div>
                </div>

                <div className="container relative mx-auto px-6">
                    {/* Terminal Control Panel */}
                    <div className="mb-16 space-y-8 max-w-5xl mx-auto">
                        {/* Search Node */}
                        <div className="relative group">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-primary/40 group-focus-within:text-primary transition-colors" />
                            <Input
                                type="text"
                                placeholder="QUERY_REGISTRY_NODE..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="pl-12 h-14 bg-[#0d1117] border-white/5 rounded-none font-mono text-xs tracking-widest uppercase focus-visible:ring-primary/20 focus-visible:border-primary/30 transition-all"
                            />
                        </div>

                        {/* Filter Node */}
                        <div className="flex flex-wrap items-center justify-center gap-3">
                            {categories.map(category => (
                                <Button
                                    key={category}
                                    variant="ghost"
                                    size="sm"
                                    onClick={() => setSelectedCategory(category)}
                                    className={cn(
                                        "h-10 px-6 rounded-none text-[10px] font-mono font-bold tracking-[0.2em] uppercase border transition-all",
                                        selectedCategory === category
                                            ? "bg-primary text-black border-primary"
                                            : "text-muted-foreground/40 border-white/5 bg-white/5 hover:border-primary/30 hover:text-white"
                                    )}
                                >
                                    {category === 'all' ? 'INDEX_ALL' : category}
                                </Button>
                            ))}
                        </div>
                    </div>

                    {/* Results Metadata */}
                    <div className="mb-12 flex items-center justify-between border-b border-white/5 pb-4 max-w-7xl mx-auto">
                        <div className="text-[10px] font-mono text-muted-foreground/30 tracking-widest uppercase">
                            MATCHING_NODES::COUNT[{filteredBlueprints.length}]
                        </div>
                        <div className="text-[10px] font-mono text-muted-foreground/30 tracking-widest uppercase">
                            REGISTRY_STATUS::ACTIVE
                        </div>
                    </div>

                    {/* Infrastructure Grid */}
                    {filteredBlueprints.length === 0 ? (
                        <div className="text-center py-32 border border-dashed border-white/5 rounded-sm">
                            <div className="text-primary/20 text-4xl font-mono mb-6 animate-pulse">0x00_EMPTY</div>
                            <h3 className="text-xl font-display font-bold text-white uppercase tracking-tight mb-2">Node not found</h3>
                            <p className="text-muted-foreground/40 text-xs font-mono uppercase tracking-widest">
                                Reconfigure query parameters and retry.
                            </p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
                            {filteredBlueprints.map(blueprint => (
                                <DemoBlueprintCard key={blueprint.id} blueprint={blueprint} />
                            ))}
                        </div>
                    )}

                    {/* Protocol CTA */}
                    <div className="mt-32 relative group overflow-hidden border border-white/5 bg-[#0d1117] p-12 md:p-20 text-center max-w-5xl mx-auto">
                        <div className="absolute top-0 left-0 w-32 h-32 border-t border-l border-primary/20 -translate-x-1/2 -translate-y-1/2 group-hover:scale-150 transition-transform" />
                        
                        <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6 uppercase tracking-tighter">
                            Initialize <span className="text-primary">Architecture</span>.
                        </h2>
                        <p className="text-muted-foreground/60 mb-12 max-w-xl mx-auto text-sm leading-relaxed">
                            Configure a unique system node tailored to your production 
                            specifications using our autonomous synthesis protocol.
                        </p>
                        <Button
                            size="xl"
                            variant="hero"
                            className="bg-primary text-black font-bold text-xs font-mono uppercase tracking-[0.3em] rounded-none px-12 h-16 hover:scale-105 transition-transform"
                            onClick={() => window.location.href = '/create'}
                        >
                            CREATE_CUSTOM_NODE
                            <Sparkles className="w-4 h-4 ml-3" />
                        </Button>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
