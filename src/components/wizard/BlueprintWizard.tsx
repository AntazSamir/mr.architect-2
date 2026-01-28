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

      {/* Step Progress */}
      <div className="mb-8">
        <div className="relative">
          {/* Progress Line Background */}
          <div className="absolute top-5 left-0 right-0 h-0.5 bg-border hidden sm:block" />
          
          {/* Progress Line Active */}
          <motion.div 
            className="absolute top-5 left-0 h-0.5 bg-primary hidden sm:block"
            initial={{ width: 0 }}
            animate={{ width: `${((currentStep - 1) / (TOTAL_STEPS - 1)) * 100}%` }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          />
          
          {/* Steps */}
          <div className="flex justify-between relative">
            {stepNames.map((name, index) => {
              const stepNumber = index + 1;
              const isCompleted = stepNumber < currentStep;
              const isCurrent = stepNumber === currentStep;
              const isUpcoming = stepNumber > currentStep;
              
              return (
                <div 
                  key={name}
                  className="flex flex-col items-center"
                >
                  {/* Step Circle */}
                  <motion.div 
                    className={cn(
                      "relative z-10 w-10 h-10 rounded-full flex items-center justify-center font-mono text-sm font-bold transition-all duration-300",
                      isCompleted && "bg-primary text-primary-foreground shadow-glow-cyan",
                      isCurrent && "bg-primary/20 border-2 border-primary text-primary shadow-glow-cyan",
                      isUpcoming && "bg-secondary border border-border text-muted-foreground"
                    )}
                    initial={false}
                    animate={isCurrent ? { scale: [1, 1.1, 1] } : { scale: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {isCompleted ? (
                      <Check className="h-5 w-5" />
                    ) : (
                      <span>{stepNumber}</span>
                    )}
                    
                    {/* Pulse ring for current step */}
                    {isCurrent && (
                      <span className="absolute inset-0 rounded-full border-2 border-primary animate-ping opacity-30" />
                    )}
                  </motion.div>
                  
                  {/* Step Label */}
                  <span className={cn(
                    "hidden lg:block mt-3 text-xs font-medium text-center max-w-[100px] transition-colors",
                    isCompleted && "text-primary",
                    isCurrent && "text-primary",
                    isUpcoming && "text-muted-foreground"
                  )}>
                    {name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
        
        {/* Mobile Progress Bar */}
        <div className="sm:hidden mt-4">
          <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
            <motion.div 
              className="h-full bg-primary"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
          <p className="text-center text-xs text-muted-foreground mt-2 font-mono">
            {stepNames[currentStep - 1]}
          </p>
        </div>
      </div>

      {/* Step Content */}
      <div className="bg-card rounded-2xl border border-border shadow-lg overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 40, filter: 'blur(4px)' }}
            animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, x: -40, filter: 'blur(4px)' }}
            transition={{ 
              duration: 0.4, 
              ease: [0.25, 0.46, 0.45, 0.94],
              opacity: { duration: 0.3 },
              filter: { duration: 0.3 }
            }}
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
