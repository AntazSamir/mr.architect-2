import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useLocale } from '@/contexts/LocaleContext';
import { BlueprintData } from '@/pages/CreateBlueprint';

interface StepObjectivesProps {
  data: BlueprintData;
  updateData: (updates: Partial<BlueprintData>) => void;
}

export function StepObjectives({ data, updateData }: StepObjectivesProps) {
  const { t, locale } = useLocale();

  const goals = [
    { value: 'sales', label: t.wizard.goals.sales },
    { value: 'leads', label: t.wizard.goals.leads },
    { value: 'information', label: t.wizard.goals.information },
    { value: 'engagement', label: t.wizard.goals.engagement },
    { value: 'community', label: t.wizard.goals.community },
  ];

  const kpiOptions = [
    { value: 'conversion', label: locale === 'en' ? 'Conversion Rate' : locale === 'es' ? 'Tasa de Conversión' : 'Taux de Conversion' },
    { value: 'traffic', label: locale === 'en' ? 'Website Traffic' : locale === 'es' ? 'Tráfico del Sitio' : 'Trafic du Site' },
    { value: 'engagement', label: locale === 'en' ? 'User Engagement' : locale === 'es' ? 'Engagement del Usuario' : 'Engagement Utilisateur' },
    { value: 'retention', label: locale === 'en' ? 'User Retention' : locale === 'es' ? 'Retención de Usuarios' : 'Rétention des Utilisateurs' },
    { value: 'revenue', label: locale === 'en' ? 'Revenue' : locale === 'es' ? 'Ingresos' : 'Revenus' },
    { value: 'signups', label: locale === 'en' ? 'Sign-ups' : locale === 'es' ? 'Registros' : 'Inscriptions' },
  ];

  const toggleKpi = (kpi: string) => {
    const newKpis = data.kpis.includes(kpi)
      ? data.kpis.filter(k => k !== kpi)
      : [...data.kpis, kpi];
    updateData({ kpis: newKpis });
  };

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <Label>{t.wizard.fields.primaryGoal}</Label>
        <Select
          value={data.primaryGoal}
          onValueChange={(value) => updateData({ primaryGoal: value })}
        >
          <SelectTrigger>
            <SelectValue placeholder={locale === 'en' ? 'Select primary goal' : locale === 'es' ? 'Seleccionar objetivo principal' : 'Sélectionner l\'objectif principal'} />
          </SelectTrigger>
          <SelectContent>
            {goals.map((goal) => (
              <SelectItem key={goal.value} value={goal.value}>
                {goal.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-3">
        <Label>{t.wizard.fields.kpis}</Label>
        <div className="grid grid-cols-2 gap-3">
          {kpiOptions.map((kpi) => (
            <div
              key={kpi.value}
              className="flex items-center space-x-3 p-3 rounded-lg border border-border hover:border-primary/30 transition-colors cursor-pointer"
              onClick={() => toggleKpi(kpi.value)}
            >
              <Checkbox
                checked={data.kpis.includes(kpi.value)}
                onCheckedChange={() => toggleKpi(kpi.value)}
              />
              <span className="text-sm">{kpi.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
