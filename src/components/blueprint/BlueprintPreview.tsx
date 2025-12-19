import { useState } from 'react';
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
  Sparkles
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
  const [copiedPrompt, setCopiedPrompt] = useState<string | null>(null);

  const handleExport = (format: string) => {
    toast.success(
      locale === 'en' 
        ? `Exporting as ${format.toUpperCase()}...` 
        : locale === 'es'
        ? `Exportando como ${format.toUpperCase()}...`
        : `Export en ${format.toUpperCase()}...`
    );
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

  // Generate website blueprint based on user input
  const websiteBlueprint = {
    overview: {
      name: data.projectName || 'Website Project',
      type: data.websiteType || 'corporate',
      description: data.description || 'A modern web application',
      targetAudience: data.targetAge || 'General audience',
      primaryGoal: data.primaryGoal || 'engagement',
    },
    pages: [
      { 
        name: 'Home', 
        path: '/',
        sections: ['Hero Section', 'Features Overview', 'Social Proof/Testimonials', 'Call-to-Action'],
        priority: 'High'
      },
      { 
        name: 'About', 
        path: '/about',
        sections: ['Company Story', 'Team Section', 'Values/Mission', 'Contact CTA'],
        priority: 'Medium'
      },
      { 
        name: data.websiteType === 'ecommerce' ? 'Products' : 'Services', 
        path: data.websiteType === 'ecommerce' ? '/products' : '/services',
        sections: ['Overview', 'Category/Service Cards', 'Pricing Table', 'FAQ Section'],
        priority: 'High'
      },
      { 
        name: 'Contact', 
        path: '/contact',
        sections: ['Contact Form', 'Location Map', 'Contact Information', 'Social Links'],
        priority: 'Medium'
      },
    ],
    navigation: {
      style: 'Fixed Header with Mobile Hamburger Menu',
      items: ['Home', 'About', data.websiteType === 'ecommerce' ? 'Products' : 'Services', 'Contact'],
      cta: 'Get Started / Sign Up'
    },
    components: [
      'Responsive Navigation Bar',
      'Hero Section with CTA',
      'Feature Cards Grid',
      'Testimonial Carousel',
      'Pricing Table',
      'Contact Form',
      'Footer with Social Links'
    ]
  };

  // Generate AI prompts for different platforms
  const generatePromptBase = () => {
    return `Build a ${data.websiteType || 'modern'} website called "${data.projectName || 'My Website'}".

Project Description: ${data.description || 'A professional web application'}

Target Audience: ${data.targetAge || 'General audience'}${data.targetLocation ? `, located in ${data.targetLocation}` : ''}${data.targetProfession ? `, targeting ${data.targetProfession}` : ''}

Primary Goal: ${data.primaryGoal || 'engagement'}

Design Style: ${data.style || 'modern'} aesthetic${data.brandColors ? ` with ${data.brandColors} as brand colors` : ''}

Pages to include:
${websiteBlueprint.pages.map(p => `- ${p.name} (${p.path}): ${p.sections.join(', ')}`).join('\n')}

Key Components:
${websiteBlueprint.components.map(c => `- ${c}`).join('\n')}

Technical Requirements:
- Budget: ${data.budget || 'Flexible'}
- Timeline: ${data.timeline || 'Standard'}
- Scalability: ${data.scalability || 'Medium'}
${data.techPreferences ? `- Preferred Technologies: ${data.techPreferences}` : ''}`;
  };

  const aiPrompts = {
    lovable: {
      name: 'Lovable',
      color: 'from-pink-500 to-rose-500',
      prompt: `${generatePromptBase()}

Additional Lovable-specific instructions:
- Use React with TypeScript and Tailwind CSS
- Implement shadcn/ui components for consistent UI
- Add responsive design with mobile-first approach
- Include Framer Motion for smooth animations
- Set up proper routing with react-router-dom
- Use semantic HTML for accessibility and SEO`
    },
    cursor: {
      name: 'Cursor',
      color: 'from-blue-500 to-cyan-500',
      prompt: `${generatePromptBase()}

Additional Cursor-specific instructions:
- Create a well-structured project with proper folder organization
- Use TypeScript for type safety throughout the codebase
- Implement modular components with clear separation of concerns
- Add comprehensive error handling
- Include proper TypeScript interfaces and types
- Set up ESLint and Prettier configurations`
    },
    bolt: {
      name: 'Bolt.new',
      color: 'from-yellow-500 to-orange-500',
      prompt: `${generatePromptBase()}

Additional Bolt.new-specific instructions:
- Use Vite for fast development and build
- Implement with React and TypeScript
- Add Tailwind CSS for styling
- Create reusable component library
- Include responsive design patterns
- Set up proper state management`
    },
    replit: {
      name: 'Replit',
      color: 'from-orange-500 to-red-500',
      prompt: `${generatePromptBase()}

Additional Replit-specific instructions:
- Create a full-stack application structure
- Set up proper environment configuration
- Include database integration if needed
- Add authentication flow if required
- Implement API routes for backend logic
- Include deployment configuration`
    }
  };

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

  const architectureLabels = {
    en: {
      websiteBlueprint: 'Website Blueprint',
      overview: 'Project Overview',
      pageStructure: 'Page Structure',
      navigation: 'Navigation',
      components: 'Key Components',
      aiPrompts: 'AI Builder Prompts',
      aiPromptsDesc: 'Copy these prompts to quickly recreate this website in your preferred AI platform:',
      copyPrompt: 'Copy Prompt',
      copied: 'Copied!',
      priority: 'Priority',
      path: 'Path',
      sections: 'Sections'
    },
    es: {
      websiteBlueprint: 'Plano del Sitio Web',
      overview: 'Resumen del Proyecto',
      pageStructure: 'Estructura de Páginas',
      navigation: 'Navegación',
      components: 'Componentes Clave',
      aiPrompts: 'Prompts para Constructores AI',
      aiPromptsDesc: 'Copia estos prompts para recrear rápidamente este sitio web en tu plataforma AI preferida:',
      copyPrompt: 'Copiar Prompt',
      copied: '¡Copiado!',
      priority: 'Prioridad',
      path: 'Ruta',
      sections: 'Secciones'
    },
    fr: {
      websiteBlueprint: 'Plan du Site Web',
      overview: 'Aperçu du Projet',
      pageStructure: 'Structure des Pages',
      navigation: 'Navigation',
      components: 'Composants Clés',
      aiPrompts: 'Prompts pour Constructeurs IA',
      aiPromptsDesc: 'Copiez ces prompts pour recréer rapidement ce site web sur votre plateforme IA préférée:',
      copyPrompt: 'Copier le Prompt',
      copied: 'Copié!',
      priority: 'Priorité',
      path: 'Chemin',
      sections: 'Sections'
    }
  };

  const labels = architectureLabels[locale];

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
              <TabsContent value="architecture" className="p-6 m-0 space-y-8">
                {/* Website Blueprint Section */}
                <div>
                  <h2 className="text-xl font-display font-semibold mb-4 flex items-center gap-2">
                    <LayoutGrid className="h-5 w-5 text-primary" />
                    {labels.websiteBlueprint}
                  </h2>
                  
                  {/* Overview */}
                  <div className="p-4 rounded-xl bg-gradient-to-r from-primary/5 to-primary/10 border border-primary/20 mb-4">
                    <h3 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide mb-3">
                      {labels.overview}
                    </h3>
                    <div className="grid sm:grid-cols-2 gap-3">
                      <div>
                        <span className="text-xs text-muted-foreground">Name:</span>
                        <p className="font-medium">{websiteBlueprint.overview.name}</p>
                      </div>
                      <div>
                        <span className="text-xs text-muted-foreground">Type:</span>
                        <p className="font-medium capitalize">{websiteBlueprint.overview.type}</p>
                      </div>
                      <div className="sm:col-span-2">
                        <span className="text-xs text-muted-foreground">Description:</span>
                        <p className="font-medium">{websiteBlueprint.overview.description}</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Page Structure */}
                  <div className="mb-4">
                    <h3 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide mb-3">
                      {labels.pageStructure}
                    </h3>
                    <div className="space-y-3">
                      {websiteBlueprint.pages.map((page, index) => (
                        <div 
                          key={page.name} 
                          className="p-4 rounded-xl bg-secondary/30 border border-border/50 animate-slide-up" 
                          style={{ animationDelay: `${index * 0.1}s` }}
                        >
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="font-semibold">{page.name}</h4>
                            <div className="flex items-center gap-2">
                              <code className="text-xs bg-muted px-2 py-1 rounded">{page.path}</code>
                              <span className={`px-2 py-1 rounded-full text-xs ${
                                page.priority === 'High' ? 'bg-primary/10 text-primary' : 'bg-muted text-muted-foreground'
                              }`}>
                                {page.priority}
                              </span>
                            </div>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {page.sections.map((section) => (
                              <span key={section} className="px-3 py-1 rounded-full bg-background border border-border text-sm">
                                {section}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Components */}
                  <div className="mb-4">
                    <h3 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide mb-3">
                      {labels.components}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {websiteBlueprint.components.map((component) => (
                        <span 
                          key={component} 
                          className="px-3 py-2 rounded-lg bg-primary/10 text-primary text-sm font-medium"
                        >
                          {component}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* AI Builder Prompts Section */}
                <div className="border-t border-border pt-8">
                  <div className="flex items-center gap-2 mb-2">
                    <Sparkles className="h-5 w-5 text-primary" />
                    <h2 className="text-xl font-display font-semibold">{labels.aiPrompts}</h2>
                  </div>
                  <p className="text-muted-foreground text-sm mb-6">{labels.aiPromptsDesc}</p>
                  
                  <div className="grid gap-4">
                    {Object.entries(aiPrompts).map(([key, platform], index) => (
                      <div 
                        key={key}
                        className="p-4 rounded-xl border border-border bg-gradient-to-r from-secondary/20 to-transparent animate-slide-up"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center gap-2">
                            <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${platform.color}`} />
                            <h4 className="font-semibold">{platform.name}</h4>
                          </div>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleCopyPrompt(platform.name, platform.prompt)}
                            className="gap-2"
                          >
                            {copiedPrompt === platform.name ? (
                              <>
                                <Check className="h-4 w-4 text-success" />
                                {labels.copied}
                              </>
                            ) : (
                              <>
                                <Copy className="h-4 w-4" />
                                {labels.copyPrompt}
                              </>
                            )}
                          </Button>
                        </div>
                        <div className="bg-muted/50 rounded-lg p-3 max-h-32 overflow-y-auto">
                          <pre className="text-xs text-muted-foreground whitespace-pre-wrap font-mono">
                            {platform.prompt.slice(0, 300)}...
                          </pre>
                        </div>
                      </div>
                    ))}
                  </div>
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
