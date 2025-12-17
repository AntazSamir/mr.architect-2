import { Check } from 'lucide-react';
import { useLocale } from '@/contexts/LocaleContext';
import { BlueprintData } from '@/pages/CreateBlueprint';

interface StepReviewProps {
  data: BlueprintData;
}

export function StepReview({ data }: StepReviewProps) {
  const { t, locale } = useLocale();

  const sections = [
    {
      title: t.wizard.steps.basics,
      items: [
        { label: t.wizard.fields.projectName, value: data.projectName },
        { label: t.wizard.fields.websiteType, value: data.websiteType },
        { label: t.wizard.fields.description, value: data.description },
      ],
    },
    {
      title: t.wizard.steps.audience,
      items: [
        { label: t.wizard.fields.targetAge, value: data.targetAge },
        { label: t.wizard.fields.targetLocation, value: data.targetLocation },
        { label: t.wizard.fields.targetProfession, value: data.targetProfession },
      ],
    },
    {
      title: t.wizard.steps.objectives,
      items: [
        { label: t.wizard.fields.primaryGoal, value: data.primaryGoal },
        { label: t.wizard.fields.kpis, value: data.kpis.join(', ') },
      ],
    },
    {
      title: t.wizard.steps.design,
      items: [
        { label: t.wizard.fields.style, value: data.style },
        { label: t.wizard.fields.brandColors, value: data.brandColors },
      ],
    },
    {
      title: t.wizard.steps.technical,
      items: [
        { label: t.wizard.fields.budget, value: data.budget },
        { label: t.wizard.fields.timeline, value: data.timeline },
        { label: t.wizard.fields.scalability, value: data.scalability },
      ],
    },
  ];

  return (
    <div className="space-y-6">
      <div className="text-center pb-4 border-b border-border">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-success/10 text-success mb-3">
          <Check className="h-6 w-6" />
        </div>
        <h3 className="text-lg font-display font-semibold">
          {locale === 'en' ? 'Review Your Information' : locale === 'es' ? 'Revisa Tu Información' : 'Vérifiez Vos Informations'}
        </h3>
        <p className="text-sm text-muted-foreground">
          {locale === 'en' 
            ? 'Please review the details before generating your blueprint'
            : locale === 'es'
            ? 'Por favor revisa los detalles antes de generar tu plano'
            : 'Veuillez vérifier les détails avant de générer votre plan'}
        </p>
      </div>

      <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2">
        {sections.map((section) => (
          <div key={section.title} className="p-4 rounded-xl bg-secondary/30 border border-border/50">
            <h4 className="text-sm font-semibold text-primary mb-3">{section.title}</h4>
            <div className="space-y-2">
              {section.items.map((item) => (
                <div key={item.label} className="flex justify-between text-sm">
                  <span className="text-muted-foreground">{item.label}:</span>
                  <span className="font-medium text-right max-w-[60%] truncate">
                    {item.value || '-'}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
