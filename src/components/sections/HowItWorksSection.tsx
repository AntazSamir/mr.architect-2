import { ClipboardList, Cpu, FileCheck, ArrowRight } from 'lucide-react';
import { useLocale } from '@/contexts/LocaleContext';

const steps = [
  {
    icon: ClipboardList,
    titleKey: 'describe',
    descKey: 'describeDesc',
  },
  {
    icon: Cpu,
    titleKey: 'generate',
    descKey: 'generateDesc',
  },
  {
    icon: FileCheck,
    titleKey: 'export',
    descKey: 'exportDesc',
  },
];

const stepContent = {
  en: {
    describe: 'Describe Your Vision',
    describeDesc: 'Answer a few questions about your project type, target audience, and design preferences.',
    generate: 'AI Generates Blueprint',
    generateDesc: 'Our AI analyzes your requirements and creates comprehensive specifications in minutes.',
    export: 'Export & Build',
    exportDesc: 'Download your blueprint in multiple formats and start building with confidence.',
  },
  es: {
    describe: 'Describe Tu Visión',
    describeDesc: 'Responde algunas preguntas sobre el tipo de proyecto, audiencia objetivo y preferencias de diseño.',
    generate: 'La IA Genera el Plano',
    generateDesc: 'Nuestra IA analiza tus requisitos y crea especificaciones completas en minutos.',
    export: 'Exportar y Construir',
    exportDesc: 'Descarga tu plano en múltiples formatos y comienza a construir con confianza.',
  },
  fr: {
    describe: 'Décrivez Votre Vision',
    describeDesc: 'Répondez à quelques questions sur le type de projet, le public cible et les préférences de design.',
    generate: 'L\'IA Génère le Plan',
    generateDesc: 'Notre IA analyse vos besoins et crée des spécifications complètes en quelques minutes.',
    export: 'Exporter et Construire',
    exportDesc: 'Téléchargez votre plan dans plusieurs formats et commencez à construire en toute confiance.',
  },
};

export function HowItWorksSection() {
  const { locale } = useLocale();
  const content = stepContent[locale];

  return (
    <section id="how-it-works" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold tracking-tight mb-4">
            {locale === 'en' ? 'How It Works' : locale === 'es' ? 'Cómo Funciona' : 'Comment Ça Marche'}
          </h2>
          <p className="text-lg text-muted-foreground">
            {locale === 'en' 
              ? 'Three simple steps to your comprehensive website blueprint'
              : locale === 'es'
              ? 'Tres simples pasos para tu plano de sitio web completo'
              : 'Trois étapes simples vers votre plan de site web complet'}
          </p>
        </div>

        {/* Steps */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Connection Line */}
            <div className="hidden md:block absolute top-24 left-[calc(16.67%-8px)] right-[calc(16.67%-8px)] h-0.5 bg-gradient-to-r from-primary/20 via-primary to-primary/20" />
            
            <div className="grid md:grid-cols-3 gap-8 md:gap-4">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div 
                    key={step.titleKey} 
                    className="relative text-center animate-slide-up"
                    style={{ animationDelay: `${index * 0.15}s` }}
                  >
                    {/* Step Number */}
                    <div className="relative inline-flex mb-6">
                      <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center shadow-lg">
                        <Icon className="h-8 w-8 text-primary-foreground" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-card border-2 border-primary flex items-center justify-center">
                        <span className="text-xs font-bold text-primary">{index + 1}</span>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <h3 className="font-display text-xl font-semibold mb-2">
                      {content[step.titleKey as keyof typeof content]}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed max-w-xs mx-auto">
                      {content[step.descKey as keyof typeof content]}
                    </p>
                    
                    {/* Arrow (mobile) */}
                    {index < steps.length - 1 && (
                      <div className="md:hidden flex justify-center my-6">
                        <ArrowRight className="h-6 w-6 text-primary/50 rotate-90" />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
