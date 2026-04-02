import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LocaleProvider } from "@/contexts/LocaleContext";
import Index from "./pages/Index";
import CreateBlueprint from "./pages/CreateBlueprint";
import DemoBlueprints from "./pages/DemoBlueprints";
import DemoBlueprintDetail from "./pages/DemoBlueprintDetail";
import NotFound from "./pages/NotFound";
import { AuthProvider } from "@/contexts/AuthContext";
import { ProtectedRoute } from "@/components/ProtectedRoute";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import TermsAndPolicy from "./pages/TermsAndPolicy";
import ArchitectureDetail from "./pages/ArchitectureDetail";
import DesignSystemDetail from "./pages/DesignSystemDetail";
import SeoFoundationDetail from "./pages/SeoFoundationDetail";
import Documentation from "./pages/Documentation";

const queryClient = new QueryClient();

const App = () => (
  <AuthProvider>
    <QueryClientProvider client={queryClient}>
      <LocaleProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/create" element={<ProtectedRoute><CreateBlueprint /></ProtectedRoute>} />
              <Route path="/demos" element={<DemoBlueprints />} />
              <Route path="/demo/:id" element={<DemoBlueprintDetail />} />
              <Route path="/signin" element={<SignIn />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/terms" element={<TermsAndPolicy />} />
              <Route path="/features/architecture" element={<ArchitectureDetail />} />
              <Route path="/features/design-system" element={<DesignSystemDetail />} />
              <Route path="/features/seo-foundation" element={<SeoFoundationDetail />} />
              <Route path="/docs" element={<Documentation />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </LocaleProvider>
    </QueryClientProvider>
  </AuthProvider>
);

export default App;
