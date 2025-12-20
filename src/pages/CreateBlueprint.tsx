import { useState } from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { BlueprintWizard } from '@/components/wizard/BlueprintWizard';
import { BlueprintPreview } from '@/components/blueprint/BlueprintPreview';

export interface BlueprintData {
  // Step 1: Basics
  projectName: string;
  websiteType: string;
  description: string;
  
  // Step 2: Audience
  targetAge: string;
  targetLocation: string;
  targetProfession: string;
  
  // Step 3: Objectives
  primaryGoal: string;
  kpis: string[];
  
  // Step 4: Design
  style: string;
  brandColors: string;
  referenceUrls: string;
  
  // Step 5: Technical
  budget: string;
  timeline: string;
  scalability: string;
  techPreferences: string;
}

const initialData: BlueprintData = {
  projectName: '',
  websiteType: '',
  description: '',
  targetAge: '',
  targetLocation: '',
  targetProfession: '',
  primaryGoal: '',
  kpis: [],
  style: '',
  brandColors: '',
  referenceUrls: '',
  budget: '',
  timeline: '',
  scalability: '',
  techPreferences: '',
};

export default function CreateBlueprint() {
  const [data, setData] = useState<BlueprintData>(initialData);
  const [isGenerated, setIsGenerated] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);

  const handleComplete = async (finalData: BlueprintData) => {
    setData(finalData);
    setIsGenerating(true);
    
    // Brief loading state for UX - blueprint generation is instant
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsGenerating(false);
    setIsGenerated(true);
  };

  const handleReset = () => {
    setData(initialData);
    setIsGenerated(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 pt-24 pb-16">
        <div className="container mx-auto px-4">
          {!isGenerated ? (
            <BlueprintWizard 
              data={data}
              setData={setData}
              onComplete={handleComplete}
              isGenerating={isGenerating}
            />
          ) : (
            <BlueprintPreview 
              data={data}
              onReset={handleReset}
            />
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
