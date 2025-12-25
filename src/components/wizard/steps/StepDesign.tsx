import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useLocale } from '@/contexts/LocaleContext';
import { BlueprintData } from '@/pages/CreateBlueprint';
import { cn } from '@/lib/utils';
import { Sparkles, Minus, Zap, Smile, Briefcase, Palette, Check } from 'lucide-react';

interface StepDesignProps {
  data: BlueprintData;
  updateData: (updates: Partial<BlueprintData>) => void;
}

export function StepDesign({ data, updateData }: StepDesignProps) {
  const { t } = useLocale();

  const styles = [
    { 
      value: 'modern', 
      label: t.wizard.styles.modern, 
      icon: Sparkles,
      gradient: 'from-slate-800 via-slate-700 to-slate-900',
      accent: 'bg-primary/20 text-primary border-primary/30',
      description: 'Clean lines, dark themes'
    },
    { 
      value: 'minimalist', 
      label: t.wizard.styles.minimalist, 
      icon: Minus,
      gradient: 'from-gray-100 via-white to-gray-50',
      accent: 'bg-gray-100 text-gray-800 border-gray-300',
      description: 'Simple, whitespace-focused'
    },
    { 
      value: 'bold', 
      label: t.wizard.styles.bold, 
      icon: Zap,
      gradient: 'from-orange-500 via-red-500 to-pink-500',
      accent: 'bg-orange-500/20 text-orange-400 border-orange-500/30',
      description: 'Vibrant, attention-grabbing'
    },
    { 
      value: 'playful', 
      label: t.wizard.styles.playful, 
      icon: Smile,
      gradient: 'from-purple-400 via-pink-400 to-cyan-400',
      accent: 'bg-purple-500/20 text-purple-400 border-purple-500/30',
      description: 'Fun, colorful, animated'
    },
    { 
      value: 'professional', 
      label: t.wizard.styles.professional, 
      icon: Briefcase,
      gradient: 'from-blue-900 via-blue-800 to-indigo-900',
      accent: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
      description: 'Corporate, trustworthy'
    },
    { 
      value: 'creative', 
      label: t.wizard.styles.creative, 
      icon: Palette,
      gradient: 'from-emerald-400 via-teal-400 to-cyan-400',
      accent: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
      description: 'Artistic, unique layouts'
    },
  ];

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <Label className="text-base">{t.wizard.fields.style}</Label>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {styles.map((style) => {
            const Icon = style.icon;
            const isSelected = data.style === style.value;
            
            return (
              <button
                key={style.value}
                type="button"
                onClick={() => updateData({ style: style.value })}
                className={cn(
                  "group relative flex flex-col rounded-xl border-2 overflow-hidden transition-all duration-300",
                  isSelected
                    ? "border-primary shadow-lg shadow-primary/20 scale-[1.02]"
                    : "border-border/50 hover:border-primary/50 hover:shadow-md"
                )}
              >
                {/* Gradient Preview */}
                <div className={cn(
                  "h-20 w-full bg-gradient-to-br transition-all duration-300",
                  style.gradient,
                  isSelected ? "opacity-100" : "opacity-80 group-hover:opacity-100"
                )}>
                  {/* Pattern overlay */}
                  <div className="w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:12px_12px]" />
                </div>
                
                {/* Content */}
                <div className="p-3 bg-card">
                  <div className="flex items-center gap-2 mb-1">
                    <div className={cn(
                      "w-6 h-6 rounded-md flex items-center justify-center border transition-all",
                      isSelected ? style.accent : "bg-secondary/50 text-muted-foreground border-border"
                    )}>
                      <Icon className="h-3.5 w-3.5" />
                    </div>
                    <span className={cn(
                      "text-sm font-semibold transition-colors",
                      isSelected ? "text-foreground" : "text-muted-foreground group-hover:text-foreground"
                    )}>
                      {style.label}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground pl-8">
                    {style.description}
                  </p>
                </div>
                
                {/* Selected Indicator */}
                {isSelected && (
                  <div className="absolute top-2 right-2 w-5 h-5 rounded-full bg-primary flex items-center justify-center">
                    <Check className="h-3 w-3 text-primary-foreground" />
                  </div>
                )}
              </button>
            );
          })}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="brandColors">{t.wizard.fields.brandColors}</Label>
        <Input
          id="brandColors"
          placeholder="#4F46E5, #10B981"
          value={data.brandColors}
          onChange={(e) => updateData({ brandColors: e.target.value })}
          className="font-mono"
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
