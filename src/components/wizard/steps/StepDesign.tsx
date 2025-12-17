import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useLocale } from '@/contexts/LocaleContext';
import { BlueprintData } from '@/pages/CreateBlueprint';
import { cn } from '@/lib/utils';

interface StepDesignProps {
  data: BlueprintData;
  updateData: (updates: Partial<BlueprintData>) => void;
}

export function StepDesign({ data, updateData }: StepDesignProps) {
  const { t } = useLocale();

  const styles = [
    { value: 'modern', label: t.wizard.styles.modern, preview: 'bg-gradient-to-br from-slate-900 to-slate-700' },
    { value: 'minimalist', label: t.wizard.styles.minimalist, preview: 'bg-gradient-to-br from-gray-50 to-gray-100 border-2' },
    { value: 'bold', label: t.wizard.styles.bold, preview: 'bg-gradient-to-br from-orange-500 to-pink-500' },
    { value: 'playful', label: t.wizard.styles.playful, preview: 'bg-gradient-to-br from-purple-400 to-cyan-400' },
    { value: 'professional', label: t.wizard.styles.professional, preview: 'bg-gradient-to-br from-blue-900 to-blue-700' },
    { value: 'creative', label: t.wizard.styles.creative, preview: 'bg-gradient-to-br from-emerald-400 to-yellow-400' },
  ];

  return (
    <div className="space-y-6">
      <div className="space-y-3">
        <Label>{t.wizard.fields.style}</Label>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {styles.map((style) => (
            <button
              key={style.value}
              type="button"
              onClick={() => updateData({ style: style.value })}
              className={cn(
                "flex flex-col items-center gap-2 p-4 rounded-xl border-2 transition-all",
                data.style === style.value
                  ? "border-primary shadow-md"
                  : "border-border hover:border-primary/50"
              )}
            >
              <div className={cn("w-full h-12 rounded-lg", style.preview)} />
              <span className="text-sm font-medium">{style.label}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="brandColors">{t.wizard.fields.brandColors}</Label>
        <Input
          id="brandColors"
          placeholder="#4F46E5, #10B981"
          value={data.brandColors}
          onChange={(e) => updateData({ brandColors: e.target.value })}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="referenceUrls">{t.wizard.fields.referenceUrls}</Label>
        <Textarea
          id="referenceUrls"
          placeholder={t.wizard.fields.referenceUrlsPlaceholder}
          value={data.referenceUrls}
          onChange={(e) => updateData({ referenceUrls: e.target.value })}
          rows={3}
        />
      </div>
    </div>
  );
}
