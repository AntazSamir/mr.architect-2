import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useLocale } from '@/contexts/LocaleContext';
import { BlueprintData } from '@/pages/CreateBlueprint';

interface StepBasicsProps {
  data: BlueprintData;
  updateData: (updates: Partial<BlueprintData>) => void;
}

export function StepBasics({ data, updateData }: StepBasicsProps) {
  const { t } = useLocale();

  const websiteTypes = [
    { value: 'saas', label: t.wizard.websiteTypes.saas },
    { value: 'portfolio', label: t.wizard.websiteTypes.portfolio },
    { value: 'ecommerce', label: t.wizard.websiteTypes.ecommerce },
    { value: 'blog', label: t.wizard.websiteTypes.blog },
    { value: 'corporate', label: t.wizard.websiteTypes.corporate },
    { value: 'community', label: t.wizard.websiteTypes.community },
    { value: 'marketplace', label: t.wizard.websiteTypes.marketplace },
    { value: 'landing', label: t.wizard.websiteTypes.landing },
  ];

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="projectName">{t.wizard.fields.projectName}</Label>
        <Input
          id="projectName"
          placeholder={t.wizard.fields.projectNamePlaceholder}
          value={data.projectName}
          onChange={(e) => updateData({ projectName: e.target.value })}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="websiteType">{t.wizard.fields.websiteType}</Label>
        <Select
          value={data.websiteType}
          onValueChange={(value) => updateData({ websiteType: value })}
        >
          <SelectTrigger>
            <SelectValue placeholder={t.wizard.fields.websiteTypePlaceholder} />
          </SelectTrigger>
          <SelectContent>
            {websiteTypes.map((type) => (
              <SelectItem key={type.value} value={type.value}>
                {type.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="description">{t.wizard.fields.description}</Label>
        <Textarea
          id="description"
          placeholder={t.wizard.fields.descriptionPlaceholder}
          value={data.description}
          onChange={(e) => updateData({ description: e.target.value })}
          rows={4}
        />
      </div>
    </div>
  );
}
