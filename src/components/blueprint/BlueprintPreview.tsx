import { useState, useMemo } from 'react';
import { 
  LayoutGrid, 
  Palette, 
  Search, 
  Code2, 
  Share2, 
  RefreshCw,
  ChevronRight,
  FileJson,
  FileText,
  Copy,
  Check,
  Sparkles,
  Zap,
  Target,
  Layers
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useLocale } from '@/contexts/LocaleContext';
import { BlueprintData } from '@/pages/CreateBlueprint';
import { toast } from 'sonner';
import { generateBlueprint, GeneratedBlueprint } from '@/lib/blueprintGenerator';

interface BlueprintPreviewProps {
  data: BlueprintData;
  onReset: () => void;
}

export function BlueprintPreview({ data, onReset }: BlueprintPreviewProps) {
  const { t, locale } = useLocale();
  const [activeTab, setActiveTab] = useState('architecture');
  const [copiedPrompt, setCopiedPrompt] = useState<string | null>(null);
  const [expandedPrompt, setExpandedPrompt] = useState<string | null>(null);

  // Generate blueprint using the AI generator
  const blueprint = useMemo(() => generateBlueprint(data), [data]);

  const handleExport = (format: string) => {
    if (format === 'json') {
      const jsonBlob = new Blob([JSON.stringify(blueprint, null, 2)], { type: 'application/json' });
      const url = URL.createObjectURL(jsonBlob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${blueprint.overview.name.replace(/\s+/g, '-').toLowerCase()}-blueprint.json`;
      a.click();
      URL.revokeObjectURL(url);
      toast.success(locale === 'en' ? 'Blueprint exported!' : locale === 'es' ? '¡Blueprint exportado!' : 'Blueprint exporté!');
    } else {
      toast.success(
        locale === 'en' 
          ? `Exporting as ${format.toUpperCase()}...` 
          : locale === 'es'
          ? `Exportando como ${format.toUpperCase()}...`
          : `Export en ${format.toUpperCase()}...`
      );
    }
  };

  const handleCopyPrompt = (platform: string, prompt: string) => {
    navigator.clipboard.writeText(prompt);
    setCopiedPrompt(platform);
    toast.success(
      locale === 'en' 
        ? `Prompt copied for ${platform}!` 
        : locale === 'es'
        ? `¡Prompt copiado para ${platform}!`
        : `Prompt copié pour ${platform}!`
    );
    setTimeout(() => setCopiedPrompt(null), 2000);
  };

  const platformColors: Record<string, string> = {
    lovable: 'from-pink-500 to-rose-500',
    cursor: 'from-blue-500 to-cyan-500',
    bolt: 'from-yellow-500 to-orange-500',
    replit: 'from-orange-500 to-red-500',
  };

  const platformNames: Record<string, string> = {
    lovable: 'Lovable',
    cursor: 'Cursor',
    bolt: 'Bolt.new',
    replit: 'Replit',
  };

  const labels = {
    en: {
      websiteBlueprint: 'Website Blueprint',
      overview: 'Project Overview',
      pageStructure: 'Page Structure',
      navigation: 'Navigation',
      components: 'Core Components',
      aiPrompts: 'AI Builder Prompts',
      aiPromptsDesc: 'Copy these prompts to instantly recreate this website in your preferred AI platform:',
      copyPrompt: 'Copy Prompt',
      copied: 'Copied!',
      viewFull: 'View Full',
      collapse: 'Collapse',
      uniqueValue: 'Unique Value',
      targetAudience: 'Target Audience',
      primaryGoal: 'Primary Goal',
      colorPalette: 'Color Palette',
      typography: 'Typography',
      spacing: 'Spacing & Layout',
      targetKeywords: 'Target Keywords',
      structuredData: 'Structured Data',
      seoMeta: 'SEO Meta',
    },
    es: {
      websiteBlueprint: 'Plano del Sitio Web',
      overview: 'Resumen del Proyecto',
      pageStructure: 'Estructura de Páginas',
      navigation: 'Navegación',
      components: 'Componentes Principales',
      aiPrompts: 'Prompts para Constructores AI',
      aiPromptsDesc: 'Copia estos prompts para recrear instantáneamente este sitio web en tu plataforma AI preferida:',
      copyPrompt: 'Copiar Prompt',
      copied: '¡Copiado!',
      viewFull: 'Ver Completo',
      collapse: 'Colapsar',
      uniqueValue: 'Propuesta de Valor',
      targetAudience: 'Audiencia Objetivo',
      primaryGoal: 'Objetivo Principal',
      colorPalette: 'Paleta de Colores',
      typography: 'Tipografía',
      spacing: 'Espaciado y Diseño',
      targetKeywords: 'Palabras Clave',
      structuredData: 'Datos Estructurados',
      seoMeta: 'SEO Meta',
    },
    fr: {
      websiteBlueprint: 'Plan du Site Web',
      overview: 'Aperçu du Projet',
      pageStructure: 'Structure des Pages',
      navigation: 'Navigation',
      components: 'Composants Principaux',
      aiPrompts: 'Prompts pour Constructeurs IA',
      aiPromptsDesc: 'Copiez ces prompts pour recréer instantanément ce site web sur votre plateforme IA préférée:',
      copyPrompt: 'Copier le Prompt',
      copied: 'Copié!',
      viewFull: 'Voir Complet',
      collapse: 'Réduire',
      uniqueValue: 'Proposition de Valeur',
      targetAudience: 'Public Cible',
      primaryGoal: 'Objectif Principal',
      colorPalette: 'Palette de Couleurs',
      typography: 'Typographie',
      spacing: 'Espacement et Mise en Page',
      targetKeywords: 'Mots-clés Cibles',
      structuredData: 'Données Structurées',
      seoMeta: 'SEO Meta',
    },
  };

  const l = labels[locale as keyof typeof labels] || labels.en;

  return (
    <div className="max-w-6xl mx-auto animate-fade-in">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-2">
            <Sparkles className="h-3 w-3 text-primary" />
            <span className="text-xs font-medium text-primary">AI Generated</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-display font-bold tracking-tight mb-1">
            {blueprint.overview.name}
          </h1>
          <p className="text-muted-foreground">
            {blueprint.overview.description}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" onClick={onReset} className="border-border/50">
            <RefreshCw className="h-4 w-4 mr-2" />
            {t.blueprint.regenerate}
          </Button>
          <Button variant="outline" size="sm" onClick={() => handleExport('link')} className="border-border/50">
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
                    ? 'bg-gradient-to-r from-primary to-primary/80 text-primary-foreground shadow-lg shadow-primary/25'
                    : 'hover:bg-secondary/50 border border-transparent hover:border-border/50'
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
            <div className="pt-4 border-t border-border/50 mt-4">
              <p className="text-sm font-medium text-muted-foreground mb-3 px-4">
                {t.blueprint.export}
              </p>
              <div className="space-y-2">
                <Button variant="outline" size="sm" className="w-full justify-start border-border/50" onClick={() => handleExport('pdf')}>
                  <FileText className="h-4 w-4 mr-2" />
                  {t.blueprint.downloadPdf}
                </Button>
                <Button variant="outline" size="sm" className="w-full justify-start border-border/50" onClick={() => handleExport('json')}>
                  <FileJson className="h-4 w-4 mr-2" />
                  {t.blueprint.downloadJson}
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="lg:col-span-3">
          <div className="bg-card/50 backdrop-blur-sm rounded-2xl border border-border/50 shadow-xl overflow-hidden">
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              {/* Architecture Tab */}
              <TabsContent value="architecture" className="p-6 m-0 space-y-8">
                {/* Overview Cards */}
                <div className="grid sm:grid-cols-3 gap-4">
                  <div className="p-4 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20">
                    <div className="flex items-center gap-2 mb-2">
                      <Target className="h-4 w-4 text-primary" />
                      <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">{l.primaryGoal}</span>
                    </div>
                    <p className="font-semibold capitalize">{blueprint.overview.primaryGoal}</p>
                  </div>
                  <div className="p-4 rounded-xl bg-gradient-to-br from-secondary/50 to-secondary/20 border border-border/50">
                    <div className="flex items-center gap-2 mb-2">
                      <Layers className="h-4 w-4 text-muted-foreground" />
                      <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Type</span>
                    </div>
                    <p className="font-semibold capitalize">{blueprint.overview.type}</p>
                  </div>
                  <div className="p-4 rounded-xl bg-gradient-to-br from-secondary/50 to-secondary/20 border border-border/50">
                    <div className="flex items-center gap-2 mb-2">
                      <Zap className="h-4 w-4 text-muted-foreground" />
                      <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">{l.targetAudience}</span>
                    </div>
                    <p className="font-semibold text-sm">{blueprint.overview.targetAudience}</p>
                  </div>
                </div>

                {/* Unique Value */}
                <div className="p-4 rounded-xl bg-gradient-to-r from-primary/5 via-transparent to-accent/5 border border-border/50">
                  <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">{l.uniqueValue}</span>
                  <p className="font-medium mt-1">{blueprint.overview.uniqueValue}</p>
                </div>

                {/* Page Structure */}
                <div>
                  <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                    <LayoutGrid className="h-5 w-5 text-primary" />
                    {l.pageStructure}
                  </h3>
                  <div className="space-y-3">
                    {blueprint.pages.map((page, index) => (
                      <div 
                        key={page.name} 
                        className="p-4 rounded-xl bg-secondary/20 border border-border/30 hover:border-primary/30 transition-colors animate-slide-up" 
                        style={{ animationDelay: `${index * 0.05}s` }}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-3">
                            <h4 className="font-semibold">{page.name}</h4>
                            <code className="text-xs bg-muted px-2 py-1 rounded font-mono">{page.path}</code>
                          </div>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            page.priority === 'Critical' ? 'bg-destructive/10 text-destructive' :
                            page.priority === 'High' ? 'bg-primary/10 text-primary' : 
                            page.priority === 'Medium' ? 'bg-warning/10 text-warning' :
                            'bg-muted text-muted-foreground'
                          }`}>
                            {page.priority}
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground mb-3">{page.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {page.sections.map((section) => (
                            <span key={section} className="px-2 py-1 rounded-md bg-background/50 border border-border/50 text-xs">
                              {section}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Navigation */}
                <div className="p-4 rounded-xl bg-secondary/20 border border-border/30">
                  <h3 className="font-semibold mb-3">{l.navigation}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{blueprint.navigation.style}</p>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {blueprint.navigation.items.map((item) => (
                      <span key={item} className="px-3 py-1 rounded-md bg-background border border-border/50 text-sm font-medium">
                        {item}
                      </span>
                    ))}
                    <span className="px-3 py-1 rounded-md bg-primary text-primary-foreground text-sm font-medium">
                      {blueprint.navigation.cta}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">Mobile: {blueprint.navigation.mobileStrategy}</p>
                </div>

                {/* Components */}
                <div>
                  <h3 className="font-semibold text-lg mb-4">{l.components}</h3>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {blueprint.components.map((component, index) => (
                      <div 
                        key={component.name} 
                        className="p-3 rounded-lg bg-secondary/20 border border-border/30 animate-slide-up"
                        style={{ animationDelay: `${index * 0.05}s` }}
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-medium text-sm">{component.name}</span>
                          <span className={`px-2 py-0.5 rounded-full text-xs ${
                            component.priority === 'Core' ? 'bg-primary/10 text-primary' :
                            component.priority === 'Important' ? 'bg-secondary text-foreground' :
                            'bg-muted text-muted-foreground'
                          }`}>
                            {component.priority}
                          </span>
                        </div>
                        <p className="text-xs text-muted-foreground">{component.purpose}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* AI Builder Prompts */}
                <div className="border-t border-border/50 pt-8">
                  <div className="flex items-center gap-2 mb-2">
                    <Sparkles className="h-5 w-5 text-primary" />
                    <h2 className="text-xl font-display font-semibold">{l.aiPrompts}</h2>
                  </div>
                  <p className="text-muted-foreground text-sm mb-6">{l.aiPromptsDesc}</p>
                  
                  <div className="grid gap-4">
                    {Object.entries(blueprint.aiPrompts).map(([key, prompt], index) => (
                      <div 
                        key={key}
                        className="rounded-xl border border-border/50 overflow-hidden animate-slide-up"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        <div className="flex items-center justify-between p-4 bg-gradient-to-r from-secondary/30 to-transparent">
                          <div className="flex items-center gap-3">
                            <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${platformColors[key]}`} />
                            <h4 className="font-semibold">{platformNames[key]}</h4>
                          </div>
                          <div className="flex items-center gap-2">
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => setExpandedPrompt(expandedPrompt === key ? null : key)}
                              className="text-xs"
                            >
                              {expandedPrompt === key ? l.collapse : l.viewFull}
                            </Button>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => handleCopyPrompt(platformNames[key], prompt)}
                              className="gap-2 border-border/50"
                            >
                              {copiedPrompt === platformNames[key] ? (
                                <>
                                  <Check className="h-4 w-4 text-green-500" />
                                  {l.copied}
                                </>
                              ) : (
                                <>
                                  <Copy className="h-4 w-4" />
                                  {l.copyPrompt}
                                </>
                              )}
                            </Button>
                          </div>
                        </div>
                        <div className={`bg-muted/30 transition-all duration-300 ${
                          expandedPrompt === key ? 'max-h-[500px] p-4' : 'max-h-24 p-4'
                        } overflow-y-auto`}>
                          <pre className="text-xs text-muted-foreground whitespace-pre-wrap font-mono leading-relaxed">
                            {expandedPrompt === key ? prompt : prompt.slice(0, 250) + '...'}
                          </pre>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>

              {/* Design Tab */}
              <TabsContent value="design" className="p-6 m-0">
                <h2 className="text-xl font-display font-semibold mb-6">{t.blueprint.designSystem}</h2>
                <div className="space-y-8">
                  {/* Color Palette */}
                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground mb-4 uppercase tracking-wide">{l.colorPalette}</h3>
                    <div className="grid grid-cols-5 gap-4">
                      {[
                        { name: 'Primary', color: blueprint.designSystem.primaryColor },
                        { name: 'Secondary', color: blueprint.designSystem.secondaryColor },
                        { name: 'Accent', color: blueprint.designSystem.accentColor },
                        { name: 'Background', color: blueprint.designSystem.backgroundColor },
                        { name: 'Text', color: blueprint.designSystem.textColor },
                      ].map((color) => (
                        <div key={color.name} className="text-center">
                          <div 
                            className="w-full aspect-square rounded-xl shadow-lg mb-2 border border-border/30"
                            style={{ backgroundColor: color.color }}
                          />
                          <p className="text-xs font-medium">{color.name}</p>
                          <p className="text-xs text-muted-foreground font-mono">{color.color}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Typography */}
                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground mb-4 uppercase tracking-wide">{l.typography}</h3>
                    <div className="p-4 rounded-xl bg-secondary/20 border border-border/30 space-y-4">
                      <div>
                        <span className="text-xs text-muted-foreground">Heading Font:</span>
                        <p className="font-display text-xl font-bold">{blueprint.designSystem.typography.headingFont}</p>
                      </div>
                      <div>
                        <span className="text-xs text-muted-foreground">Body Font:</span>
                        <p className="text-base">{blueprint.designSystem.typography.bodyFont}</p>
                      </div>
                      <div>
                        <span className="text-xs text-muted-foreground">Type Scale:</span>
                        <p className="text-sm">{blueprint.designSystem.typography.scale}</p>
                      </div>
                    </div>
                  </div>

                  {/* Spacing & Style */}
                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground mb-4 uppercase tracking-wide">{l.spacing}</h3>
                    <div className="grid sm:grid-cols-3 gap-4">
                      <div className="p-4 rounded-xl bg-secondary/20 border border-border/30">
                        <span className="text-xs text-muted-foreground">Spacing System:</span>
                        <p className="text-sm font-medium mt-1">{blueprint.designSystem.spacing}</p>
                      </div>
                      <div className="p-4 rounded-xl bg-secondary/20 border border-border/30">
                        <span className="text-xs text-muted-foreground">Border Radius:</span>
                        <p className="text-sm font-medium mt-1">{blueprint.designSystem.borderRadius}</p>
                      </div>
                      <div className="p-4 rounded-xl bg-secondary/20 border border-border/30">
                        <span className="text-xs text-muted-foreground">Shadows:</span>
                        <p className="text-sm font-medium mt-1">{blueprint.designSystem.shadows}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>

              {/* SEO Tab */}
              <TabsContent value="seo" className="p-6 m-0">
                <h2 className="text-xl font-display font-semibold mb-6">{t.blueprint.seoStrategy}</h2>
                <div className="space-y-6">
                  {/* SEO Meta */}
                  <div className="p-4 rounded-xl bg-secondary/20 border border-border/30">
                    <h3 className="text-sm font-medium text-muted-foreground mb-3 uppercase tracking-wide">{l.seoMeta}</h3>
                    <div className="space-y-3">
                      <div>
                        <span className="text-xs text-muted-foreground">Title Tag:</span>
                        <p className="font-medium text-primary">{blueprint.seo.title}</p>
                      </div>
                      <div>
                        <span className="text-xs text-muted-foreground">Meta Description:</span>
                        <p className="text-sm">{blueprint.seo.description}</p>
                      </div>
                    </div>
                  </div>

                  {/* Keywords Table */}
                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground mb-3 uppercase tracking-wide">{l.targetKeywords}</h3>
                    <div className="overflow-x-auto rounded-xl border border-border/30">
                      <table className="w-full">
                        <thead className="bg-secondary/20">
                          <tr>
                            <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Keyword</th>
                            <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Volume</th>
                            <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Difficulty</th>
                            <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Intent</th>
                          </tr>
                        </thead>
                        <tbody>
                          {blueprint.seo.keywords.map((kw, index) => (
                            <tr key={kw.keyword} className="border-t border-border/30 animate-slide-up" style={{ animationDelay: `${index * 0.05}s` }}>
                              <td className="py-3 px-4 font-medium">{kw.keyword}</td>
                              <td className="py-3 px-4 text-muted-foreground">{kw.volume}</td>
                              <td className="py-3 px-4">
                                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                                  kw.difficulty === 'Low' ? 'bg-green-500/10 text-green-500' :
                                  kw.difficulty === 'Medium' ? 'bg-yellow-500/10 text-yellow-500' :
                                  'bg-red-500/10 text-red-500'
                                }`}>
                                  {kw.difficulty}
                                </span>
                              </td>
                              <td className="py-3 px-4 text-sm text-muted-foreground">{kw.intent}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Structured Data */}
                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground mb-3 uppercase tracking-wide">{l.structuredData}</h3>
                    <div className="flex flex-wrap gap-2">
                      {blueprint.seo.structuredData.map((schema) => (
                        <span key={schema} className="px-3 py-1.5 rounded-lg bg-primary/10 text-primary text-sm font-medium">
                          {schema}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </TabsContent>

              {/* Tech Stack Tab */}
              <TabsContent value="tech" className="p-6 m-0">
                <h2 className="text-xl font-display font-semibold mb-6">{t.blueprint.techStack}</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {Object.entries(blueprint.techStack).map(([key, value], index) => (
                    <div 
                      key={key} 
                      className="p-4 rounded-xl bg-secondary/20 border border-border/30 hover:border-primary/30 transition-colors animate-slide-up"
                      style={{ animationDelay: `${index * 0.05}s` }}
                    >
                      <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">
                        {key.replace(/([A-Z])/g, ' $1').trim()}
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
