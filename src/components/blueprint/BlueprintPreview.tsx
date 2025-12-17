import { useState } from 'react';
import { 
  LayoutGrid, 
  Palette, 
  Search, 
  Code2, 
  Download, 
  Share2, 
  RefreshCw,
  ChevronRight,
  FileJson,
  FileText
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useLocale } from '@/contexts/LocaleContext';
import { BlueprintData } from '@/pages/CreateBlueprint';
import { toast } from 'sonner';

interface BlueprintPreviewProps {
  data: BlueprintData;
  onReset: () => void;
}

export function BlueprintPreview({ data, onReset }: BlueprintPreviewProps) {
  const { t, locale } = useLocale();
  const [activeTab, setActiveTab] = useState('architecture');

  const handleExport = (format: string) => {
    toast.success(
      locale === 'en' 
        ? `Exporting as ${format.toUpperCase()}...` 
        : locale === 'es'
        ? `Exportando como ${format.toUpperCase()}...`
        : `Export en ${format.toUpperCase()}...`
    );
  };

  // Mock generated data based on user input
  const generatedPages = [
    { name: 'Home', sections: ['Hero', 'Features', 'Testimonials', 'CTA'] },
    { name: 'About', sections: ['Story', 'Team', 'Values', 'Contact CTA'] },
    { name: 'Services', sections: ['Overview', 'Service Cards', 'Pricing', 'FAQ'] },
    { name: 'Contact', sections: ['Form', 'Map', 'Info'] },
  ];

  const colorPalette = [
    { name: 'Primary', color: '#4F46E5', contrast: 'AAA' },
    { name: 'Secondary', color: '#10B981', contrast: 'AAA' },
    { name: 'Accent', color: '#F59E0B', contrast: 'AA' },
    { name: 'Background', color: '#F8FAFC', contrast: '-' },
    { name: 'Text', color: '#1E293B', contrast: 'AAA' },
  ];

  const seoKeywords = [
    { keyword: data.websiteType + ' platform', volume: '12,400', difficulty: 'Medium' },
    { keyword: data.projectName?.toLowerCase() || 'website', volume: '8,100', difficulty: 'Low' },
    { keyword: 'best ' + data.websiteType, volume: '22,000', difficulty: 'High' },
  ];

  const techStack = {
    frontend: 'React 18 + TypeScript',
    styling: 'Tailwind CSS',
    backend: 'Node.js + Express',
    database: 'PostgreSQL',
    hosting: 'Vercel',
  };

  return (
    <div className="max-w-5xl mx-auto animate-fade-in">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl sm:text-3xl font-display font-bold tracking-tight mb-1">
            {data.projectName || 'Your Blueprint'}
          </h1>
          <p className="text-muted-foreground">
            {t.blueprint.title}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" onClick={onReset}>
            <RefreshCw className="h-4 w-4 mr-2" />
            {t.blueprint.regenerate}
          </Button>
          <Button variant="outline" size="sm" onClick={() => handleExport('link')}>
            <Share2 className="h-4 w-4 mr-2" />
            {t.blueprint.share}
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid lg:grid-cols-4 gap-6">
        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="sticky top-24 space-y-2">
            {[
              { id: 'architecture', icon: LayoutGrid, label: t.blueprint.architecture },
              { id: 'design', icon: Palette, label: t.blueprint.designSystem },
              { id: 'seo', icon: Search, label: t.blueprint.seoStrategy },
              { id: 'tech', icon: Code2, label: t.blueprint.techStack },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all ${
                  activeTab === item.id
                    ? 'bg-primary text-primary-foreground shadow-md'
                    : 'hover:bg-secondary'
                }`}
              >
                <item.icon className="h-5 w-5" />
                <span className="font-medium">{item.label}</span>
                <ChevronRight className={`h-4 w-4 ml-auto transition-transform ${
                  activeTab === item.id ? 'rotate-90' : ''
                }`} />
              </button>
            ))}
            
            {/* Export Section */}
            <div className="pt-4 border-t border-border mt-4">
              <p className="text-sm font-medium text-muted-foreground mb-3 px-4">
                {t.blueprint.export}
              </p>
              <div className="space-y-2">
                <Button variant="outline" size="sm" className="w-full justify-start" onClick={() => handleExport('pdf')}>
                  <FileText className="h-4 w-4 mr-2" />
                  {t.blueprint.downloadPdf}
                </Button>
                <Button variant="outline" size="sm" className="w-full justify-start" onClick={() => handleExport('json')}>
                  <FileJson className="h-4 w-4 mr-2" />
                  {t.blueprint.downloadJson}
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="lg:col-span-3">
          <div className="bg-card rounded-2xl border border-border shadow-lg overflow-hidden">
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsContent value="architecture" className="p-6 m-0">
                <h2 className="text-xl font-display font-semibold mb-4">{t.blueprint.architecture}</h2>
                <div className="space-y-4">
                  {generatedPages.map((page, index) => (
                    <div key={page.name} className="p-4 rounded-xl bg-secondary/30 border border-border/50 animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                      <h3 className="font-semibold mb-2">{page.name}</h3>
                      <div className="flex flex-wrap gap-2">
                        {page.sections.map((section) => (
                          <span key={section} className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm">
                            {section}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="design" className="p-6 m-0">
                <h2 className="text-xl font-display font-semibold mb-4">{t.blueprint.designSystem}</h2>
                <div className="space-y-6">
                  {/* Color Palette */}
                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground mb-3">
                      {locale === 'en' ? 'Color Palette' : locale === 'es' ? 'Paleta de Colores' : 'Palette de Couleurs'}
                    </h3>
                    <div className="grid grid-cols-5 gap-3">
                      {colorPalette.map((color) => (
                        <div key={color.name} className="text-center">
                          <div 
                            className="w-full aspect-square rounded-xl shadow-inner mb-2"
                            style={{ backgroundColor: color.color }}
                          />
                          <p className="text-xs font-medium">{color.name}</p>
                          <p className="text-xs text-muted-foreground">{color.color}</p>
                          {color.contrast !== '-' && (
                            <span className="inline-block mt-1 px-2 py-0.5 rounded-full bg-success/10 text-success text-[10px]">
                              WCAG {color.contrast}
                            </span>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Typography */}
                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground mb-3">
                      {locale === 'en' ? 'Typography' : locale === 'es' ? 'Tipografía' : 'Typographie'}
                    </h3>
                    <div className="p-4 rounded-xl bg-secondary/30 space-y-3">
                      <div>
                        <span className="text-xs text-muted-foreground">Heading:</span>
                        <p className="font-display text-2xl font-bold">Outfit Bold</p>
                      </div>
                      <div>
                        <span className="text-xs text-muted-foreground">Body:</span>
                        <p className="text-base">DM Sans Regular</p>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="seo" className="p-6 m-0">
                <h2 className="text-xl font-display font-semibold mb-4">{t.blueprint.seoStrategy}</h2>
                <div className="space-y-4">
                  <h3 className="text-sm font-medium text-muted-foreground">
                    {locale === 'en' ? 'Target Keywords' : locale === 'es' ? 'Palabras Clave' : 'Mots-clés Cibles'}
                  </h3>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-border">
                          <th className="text-left py-2 text-sm font-medium text-muted-foreground">Keyword</th>
                          <th className="text-left py-2 text-sm font-medium text-muted-foreground">Volume</th>
                          <th className="text-left py-2 text-sm font-medium text-muted-foreground">Difficulty</th>
                        </tr>
                      </thead>
                      <tbody>
                        {seoKeywords.map((kw) => (
                          <tr key={kw.keyword} className="border-b border-border/50">
                            <td className="py-3 font-medium">{kw.keyword}</td>
                            <td className="py-3 text-muted-foreground">{kw.volume}</td>
                            <td className="py-3">
                              <span className={`px-2 py-1 rounded-full text-xs ${
                                kw.difficulty === 'Low' ? 'bg-success/10 text-success' :
                                kw.difficulty === 'Medium' ? 'bg-warning/10 text-warning' :
                                'bg-destructive/10 text-destructive'
                              }`}>
                                {kw.difficulty}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="tech" className="p-6 m-0">
                <h2 className="text-xl font-display font-semibold mb-4">{t.blueprint.techStack}</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {Object.entries(techStack).map(([key, value], index) => (
                    <div 
                      key={key} 
                      className="p-4 rounded-xl bg-secondary/30 border border-border/50 animate-slide-up"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">
                        {key.charAt(0).toUpperCase() + key.slice(1)}
                      </p>
                      <p className="font-semibold">{value}</p>
                    </div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
}
