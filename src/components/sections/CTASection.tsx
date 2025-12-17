import { forwardRef } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLocale } from '@/contexts/LocaleContext';
import { useNavigate } from 'react-router-dom';

export const CTASection = forwardRef<HTMLElement>(function CTASection(_, ref) {
  const { locale } = useLocale();
  const navigate = useNavigate();

  const content = {
    en: {
      title: 'Ready to Transform Your',
      titleHighlight: 'Website Planning?',
      subtitle: 'Join thousands of developers who are already building better websites, faster.',
      cta: 'Start Free Today',
      note: 'No credit card required. 2 free blueprints/month.',
    },
    es: {
      title: '¿Listo para Transformar la',
      titleHighlight: 'Planificación de Tu Sitio?',
      subtitle: 'Únete a miles de desarrolladores que ya están construyendo mejores sitios web, más rápido.',
      cta: 'Comenzar Gratis Hoy',
      note: 'Sin tarjeta de crédito. 2 planos gratis/mes.',
    },
    fr: {
      title: 'Prêt à Transformer Votre',
      titleHighlight: 'Planification Web?',
      subtitle: 'Rejoignez des milliers de développeurs qui construisent déjà de meilleurs sites, plus rapidement.',
      cta: 'Commencer Gratuitement',
      note: 'Pas de carte de crédit. 2 plans gratuits/mois.',
    },
  };

  const c = content[locale];

  return (
    <section ref={ref} className="py-20 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-primary opacity-95" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtOS45NDEgMC0xOCA4LjA1OS0xOCAxOHM4LjA1OSAxOCAxOCAxOCAxOC04LjA1OSAxOC0xOC04LjA1OS0xOC0xOC0xOHptMCAzMmMtNy43MzIgMC0xNC02LjI2OC0xNC0xNHM2LjI2OC0xNCAxNC0xNCAxNCA2LjI2OCAxNCAxNC02LjI2OCAxNC0xNCAxNHoiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iLjA1Ii8+PC9nPjwvc3ZnPg==')] opacity-30" />
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-white/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '-3s' }} />

      <div className="container relative mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm mb-8 animate-scale-in">
            <Sparkles className="h-8 w-8 text-white" />
          </div>

          {/* Headline */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold tracking-tight text-white mb-6 animate-slide-up">
            {c.title}
            <br />
            <span className="text-white/90">{c.titleHighlight}</span>
          </h2>

          {/* Subtitle */}
          <p className="text-lg text-white/80 mb-10 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            {c.subtitle}
          </p>

          {/* CTA */}
          <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <Button 
              size="xl" 
              className="bg-white text-primary hover:bg-white/90 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
              onClick={() => navigate('/create')}
            >
              {c.cta}
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
            <p className="text-sm text-white/60 mt-4">{c.note}</p>
          </div>
        </div>
      </div>
    </section>
  );
});
