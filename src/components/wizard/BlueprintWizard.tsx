import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, Sparkles, Loader2, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLocale } from '@/contexts/LocaleContext';
import { BlueprintData } from '@/pages/CreateBlueprint';
import { StepBasics } from './steps/StepBasics';
import { StepAudience } from './steps/StepAudience';
import { StepObjectives } from './steps/StepObjectives';
import { StepDesign } from './steps/StepDesign';
import { StepTechnical } from './steps/StepTechnical';
import { StepReview } from './steps/StepReview';
import { cn } from '@/lib/utils';

interface BlueprintWizardProps {
  data: BlueprintData;
  setData: (data: BlueprintData) => void;
  onComplete: (data: BlueprintData) => void;
  isGenerating: boolean;
}

const TOTAL_STEPS = 6;

export function BlueprintWizard({ data, setData, onComplete, isGenerating }: BlueprintWizardProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const { t } = useLocale();

  const stepNames = [
    t.wizard.steps.basics,
    t.wizard.steps.audience,
    t.wizard.steps.objectives,
    t.wizard.steps.design,
    t.wizard.steps.technical,
    t.wizard.steps.review,
  ];

  const updateData = (updates: Partial<BlueprintData>) => {
    setData({ ...data, ...updates });
  };

  const nextStep = () => {
    if (currentStep < TOTAL_STEPS) {
      setCurrentStep(prev => prev + 1);
    } else {
      onComplete(data);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <StepBasics data={data} updateData={updateData} />;
      case 2:
        return <StepAudience data={data} updateData={updateData} />;
      case 3:
        return <StepObjectives data={data} updateData={updateData} />;
      case 4:
        return <StepDesign data={data} updateData={updateData} />;
      case 5:
        return <StepTechnical data={data} updateData={updateData} />;
      case 6:
        return <StepReview data={data} />;
      default:
        return null;
    }
  };

  const progress = (currentStep / TOTAL_STEPS) * 100;

  return (
    <div className="max-w-3xl mx-auto">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
          <Sparkles className="h-4 w-4 text-primary" />
          <span className="text-sm font-medium text-primary">
            {t.wizard.step} {currentStep} {t.wizard.of} {TOTAL_STEPS}
          </span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-display font-bold tracking-tight mb-2">
          {t.wizard.title}
        </h1>
        <p className="text-muted-foreground">{t.wizard.subtitle}</p>
      </div>

      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between mb-2">
          {stepNames.map((name, index) => (
            <div 
              key={name}
              className={cn(
                "hidden sm:flex items-center gap-1.5 text-xs font-medium transition-colors",
                index + 1 <= currentStep ? "text-primary" : "text-muted-foreground"
              )}
            >
              <div className={cn(
                "w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold border-2 transition-all",
                index + 1 < currentStep 
                  ? "bg-primary border-primary text-primary-foreground" 
                  : index + 1 === currentStep
                  ? "border-primary text-primary"
                  : "border-muted-foreground/30 text-muted-foreground"
              )}>
                {index + 1 < currentStep ? <Check className="h-3 w-3" /> : index + 1}
              </div>
              <span className="hidden lg:inline">{name}</span>
            </div>
          ))}
        </div>
        <div className="h-2 bg-secondary rounded-full overflow-hidden">
          <motion.div 
            className="h-full gradient-primary"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>

      {/* Step Content */}
      <div className="bg-card rounded-2xl border border-border shadow-lg overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="p-6 sm:p-8"
          >
            {isGenerating ? (
              <div className="py-16 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full gradient-primary mb-6">
                  <Loader2 className="h-8 w-8 text-primary-foreground animate-spin" />
                </div>
                <h3 className="text-xl font-display font-semibold mb-2">{t.wizard.generating}</h3>
                <p className="text-muted-foreground">
                  {t.wizard.steps.basics}... {t.wizard.steps.design}... {t.wizard.steps.technical}...
                </p>
              </div>
            ) : (
              renderStep()
            )}
          </motion.div>
        </AnimatePresence>

        {/* Navigation */}
        {!isGenerating && (
          <div className="flex items-center justify-between px-6 sm:px-8 py-4 bg-secondary/30 border-t border-border">
            <Button
              variant="ghost"
              onClick={prevStep}
              disabled={currentStep === 1}
              className="gap-2"
            >
              <ArrowLeft className="h-4 w-4" />
              {t.wizard.back}
            </Button>
            
            <Button
              variant="gradient"
              onClick={nextStep}
              className="gap-2"
            >
              {currentStep === TOTAL_STEPS ? (
                <>
                  <Sparkles className="h-4 w-4" />
                  {t.wizard.generate}
                </>
              ) : (
                <>
                  {t.wizard.next}
                  <ArrowRight className="h-4 w-4" />
                </>
              )}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
