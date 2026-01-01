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
      bg: 'bg-slate-900',
      headerBg: 'bg-slate-800',
      accent: 'bg-primary',
      textColor: 'text-white',
      mutedText: 'text-slate-400',
      cardBg: 'bg-slate-800/50',
      description: 'Clean lines, dark themes'
    },
    { 
      value: 'minimalist', 
      label: t.wizard.styles.minimalist, 
      icon: Minus,
      bg: 'bg-gray-50',
      headerBg: 'bg-white',
      accent: 'bg-gray-900',
      textColor: 'text-gray-900',
      mutedText: 'text-gray-500',
      cardBg: 'bg-white',
      description: 'Simple, whitespace-focused'
    },
    { 
      value: 'bold', 
      label: t.wizard.styles.bold, 
      icon: Zap,
      bg: 'bg-orange-50',
      headerBg: 'bg-gradient-to-r from-orange-500 to-red-500',
      accent: 'bg-orange-500',
      textColor: 'text-white',
      mutedText: 'text-orange-200',
      cardBg: 'bg-white',
      description: 'Vibrant, attention-grabbing'
    },
    { 
      value: 'playful', 
      label: t.wizard.styles.playful, 
      icon: Smile,
      bg: 'bg-gradient-to-br from-purple-100 via-pink-50 to-cyan-100',
      headerBg: 'bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500',
      accent: 'bg-purple-500',
      textColor: 'text-white',
      mutedText: 'text-purple-200',
      cardBg: 'bg-white/80',
      description: 'Fun, colorful, animated'
    },
    { 
      value: 'professional', 
      label: t.wizard.styles.professional, 
      icon: Briefcase,
      bg: 'bg-blue-950',
      headerBg: 'bg-blue-900',
      accent: 'bg-blue-500',
      textColor: 'text-white',
      mutedText: 'text-blue-300',
      cardBg: 'bg-blue-900/50',
      description: 'Corporate, trustworthy'
    },
    { 
      value: 'creative', 
      label: t.wizard.styles.creative, 
      icon: Palette,
      bg: 'bg-gradient-to-br from-emerald-50 to-teal-100',
      headerBg: 'bg-gradient-to-r from-emerald-500 to-teal-500',
      accent: 'bg-emerald-500',
      textColor: 'text-white',
      mutedText: 'text-emerald-200',
      cardBg: 'bg-white/90',
      description: 'Artistic, unique layouts'
    },
  ];

  // Mini website preview component
  const WebsitePreview = ({ style }: { style: typeof styles[0] }) => (
    <div className={cn("w-full h-28 rounded-t-lg overflow-hidden", style.bg)}>
      {/* Mini Header */}
      <div className={cn("h-5 flex items-center px-2 gap-1", style.headerBg)}>
        <div className={cn("w-1.5 h-1.5 rounded-full", style.accent)} />
        <div className={cn("h-1 w-6 rounded-full opacity-60", style.textColor === 'text-white' ? 'bg-white' : 'bg-gray-400')} />
        <div className="flex-1" />
        <div className={cn("h-1 w-3 rounded-full opacity-40", style.textColor === 'text-white' ? 'bg-white' : 'bg-gray-400')} />
        <div className={cn("h-1 w-3 rounded-full opacity-40", style.textColor === 'text-white' ? 'bg-white' : 'bg-gray-400')} />
      </div>
      
      {/* Hero Section */}
      <div className="p-2 space-y-1.5">
        <div className={cn("h-2 w-16 rounded-full", style.accent)} />
        <div className={cn("h-1 w-20 rounded-full opacity-50", style.textColor === 'text-white' ? 'bg-white' : 'bg-gray-400')} />
        <div className={cn("h-3 w-8 rounded mt-1", style.accent)} />
      </div>
      
      {/* Cards Section */}
      <div className="px-2 flex gap-1">
        <div className={cn("flex-1 h-8 rounded", style.cardBg)}>
          <div className="p-1 space-y-0.5">
            <div className={cn("h-0.5 w-4 rounded-full", style.accent)} />
            <div className={cn("h-0.5 w-6 rounded-full opacity-30", style.textColor === 'text-white' ? 'bg-white' : 'bg-gray-400')} />
          </div>
        </div>
        <div className={cn("flex-1 h-8 rounded", style.cardBg)}>
          <div className="p-1 space-y-0.5">
            <div className={cn("h-0.5 w-4 rounded-full", style.accent)} />
            <div className={cn("h-0.5 w-6 rounded-full opacity-30", style.textColor === 'text-white' ? 'bg-white' : 'bg-gray-400')} />
          </div>
        </div>
        <div className={cn("flex-1 h-8 rounded hidden sm:block", style.cardBg)}>
          <div className="p-1 space-y-0.5">
            <div className={cn("h-0.5 w-4 rounded-full", style.accent)} />
            <div className={cn("h-0.5 w-6 rounded-full opacity-30", style.textColor === 'text-white' ? 'bg-white' : 'bg-gray-400')} />
          </div>
        </div>
      </div>
    </div>
  );

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
                {/* Live Website Preview */}
                <WebsitePreview style={style} />
                
                {/* Content */}
                <div className="p-3 bg-card border-t border-border/30">
                  <div className="flex items-center gap-2 mb-1">
                    <div className={cn(
                      "w-6 h-6 rounded-md flex items-center justify-center border transition-all",
                      isSelected 
                        ? "bg-primary/20 text-primary border-primary/30" 
                        : "bg-secondary/50 text-muted-foreground border-border"
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
                  <div className="absolute top-2 right-2 w-5 h-5 rounded-full bg-primary flex items-center justify-center shadow-lg">
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
