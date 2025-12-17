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

interface StepAudienceProps {
  data: BlueprintData;
  updateData: (updates: Partial<BlueprintData>) => void;
}

export function StepAudience({ data, updateData }: StepAudienceProps) {
  const { t, locale } = useLocale();

  const ageRanges = [
    { value: '18-24', label: '18-24' },
    { value: '25-34', label: '25-34' },
    { value: '35-44', label: '35-44' },
    { value: '45-54', label: '45-54' },
    { value: '55+', label: '55+' },
    { value: 'all', label: locale === 'en' ? 'All ages' : locale === 'es' ? 'Todas las edades' : 'Tous les âges' },
  ];

  const locations = [
    { value: 'us', label: locale === 'en' ? 'United States' : locale === 'es' ? 'Estados Unidos' : 'États-Unis' },
    { value: 'eu', label: locale === 'en' ? 'Europe' : 'Europa' },
    { value: 'latam', label: locale === 'en' ? 'Latin America' : locale === 'es' ? 'Latinoamérica' : 'Amérique Latine' },
    { value: 'asia', label: locale === 'en' ? 'Asia' : 'Asia' },
    { value: 'global', label: 'Global' },
  ];

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <Label>{t.wizard.fields.targetAge}</Label>
        <Select
          value={data.targetAge}
          onValueChange={(value) => updateData({ targetAge: value })}
        >
          <SelectTrigger>
            <SelectValue placeholder={locale === 'en' ? 'Select age range' : locale === 'es' ? 'Seleccionar rango de edad' : 'Sélectionner la tranche d\'âge'} />
          </SelectTrigger>
          <SelectContent>
            {ageRanges.map((range) => (
              <SelectItem key={range.value} value={range.value}>
                {range.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label>{t.wizard.fields.targetLocation}</Label>
        <Select
          value={data.targetLocation}
          onValueChange={(value) => updateData({ targetLocation: value })}
        >
          <SelectTrigger>
            <SelectValue placeholder={locale === 'en' ? 'Select primary location' : locale === 'es' ? 'Seleccionar ubicación' : 'Sélectionner l\'emplacement'} />
          </SelectTrigger>
          <SelectContent>
            {locations.map((loc) => (
              <SelectItem key={loc.value} value={loc.value}>
                {loc.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="targetProfession">{t.wizard.fields.targetProfession}</Label>
        <Input
          id="targetProfession"
          placeholder={locale === 'en' ? 'e.g., Software developers, Marketing professionals' : locale === 'es' ? 'ej., Desarrolladores, Profesionales de marketing' : 'ex., Développeurs, Professionnels du marketing'}
          value={data.targetProfession}
          onChange={(e) => updateData({ targetProfession: e.target.value })}
        />
      </div>
    </div>
  );
}
