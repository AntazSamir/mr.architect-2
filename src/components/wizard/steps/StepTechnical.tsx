import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useLocale } from '@/contexts/LocaleContext';
import { BlueprintData } from '@/pages/CreateBlueprint';

interface StepTechnicalProps {
  data: BlueprintData;
  updateData: (updates: Partial<BlueprintData>) => void;
}

export function StepTechnical({ data, updateData }: StepTechnicalProps) {
  const { t, locale } = useLocale();

  const budgetRanges = [
    { value: 'low', label: locale === 'en' ? '$0 - $5,000' : locale === 'es' ? '€0 - €5.000' : '0€ - 5.000€' },
    { value: 'medium', label: locale === 'en' ? '$5,000 - $20,000' : locale === 'es' ? '€5.000 - €20.000' : '5.000€ - 20.000€' },
    { value: 'high', label: locale === 'en' ? '$20,000 - $50,000' : locale === 'es' ? '€20.000 - €50.000' : '20.000€ - 50.000€' },
    { value: 'enterprise', label: locale === 'en' ? '$50,000+' : locale === 'es' ? '€50.000+' : '50.000€+' },
  ];

  const timelines = [
    { value: '1month', label: locale === 'en' ? '1 month' : locale === 'es' ? '1 mes' : '1 mois' },
    { value: '3months', label: locale === 'en' ? '1-3 months' : locale === 'es' ? '1-3 meses' : '1-3 mois' },
    { value: '6months', label: locale === 'en' ? '3-6 months' : locale === 'es' ? '3-6 meses' : '3-6 mois' },
    { value: 'flexible', label: locale === 'en' ? 'Flexible' : 'Flexible' },
  ];

  const scalabilityOptions = [
    { value: 'low', label: locale === 'en' ? 'Small (< 1,000 users)' : locale === 'es' ? 'Pequeño (< 1.000 usuarios)' : 'Petit (< 1.000 utilisateurs)' },
    { value: 'medium', label: locale === 'en' ? 'Medium (1,000 - 100,000 users)' : locale === 'es' ? 'Mediano (1.000 - 100.000 usuarios)' : 'Moyen (1.000 - 100.000 utilisateurs)' },
    { value: 'high', label: locale === 'en' ? 'Large (100,000+ users)' : locale === 'es' ? 'Grande (100.000+ usuarios)' : 'Grand (100.000+ utilisateurs)' },
    { value: 'enterprise', label: locale === 'en' ? 'Enterprise (1M+ users)' : locale === 'es' ? 'Empresarial (1M+ usuarios)' : 'Entreprise (1M+ utilisateurs)' },
  ];

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <Label>{t.wizard.fields.budget}</Label>
        <Select
          value={data.budget}
          onValueChange={(value) => updateData({ budget: value })}
        >
          <SelectTrigger>
            <SelectValue placeholder={locale === 'en' ? 'Select budget range' : locale === 'es' ? 'Seleccionar presupuesto' : 'Sélectionner le budget'} />
          </SelectTrigger>
          <SelectContent>
            {budgetRanges.map((range) => (
              <SelectItem key={range.value} value={range.value}>
                {range.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label>{t.wizard.fields.timeline}</Label>
        <Select
          value={data.timeline}
          onValueChange={(value) => updateData({ timeline: value })}
        >
          <SelectTrigger>
            <SelectValue placeholder={locale === 'en' ? 'Select timeline' : locale === 'es' ? 'Seleccionar cronograma' : 'Sélectionner le calendrier'} />
          </SelectTrigger>
          <SelectContent>
            {timelines.map((tl) => (
              <SelectItem key={tl.value} value={tl.value}>
                {tl.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label>{t.wizard.fields.scalability}</Label>
        <Select
          value={data.scalability}
          onValueChange={(value) => updateData({ scalability: value })}
        >
          <SelectTrigger>
            <SelectValue placeholder={locale === 'en' ? 'Select expected scale' : locale === 'es' ? 'Seleccionar escala esperada' : 'Sélectionner l\'échelle attendue'} />
          </SelectTrigger>
          <SelectContent>
            {scalabilityOptions.map((opt) => (
              <SelectItem key={opt.value} value={opt.value}>
                {opt.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="techPreferences">{t.wizard.fields.techPreferences}</Label>
        <Input
          id="techPreferences"
          placeholder={locale === 'en' ? 'e.g., React, TypeScript, AWS' : locale === 'es' ? 'ej., React, TypeScript, AWS' : 'ex., React, TypeScript, AWS'}
          value={data.techPreferences}
          onChange={(e) => updateData({ techPreferences: e.target.value })}
        />
      </div>
    </div>
  );
}
