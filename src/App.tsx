import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import BlankCanvas from "./pages/BlankCanvas";
import AboutPage from "./pages/AboutPage";
import ServiceDetails from "./pages/ServiceDetails";
import NotFound from "./pages/NotFound";
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/products" element={<BlankCanvas />} />
          <Route path="/services" element={<BlankCanvas />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/platform" element={<BlankCanvas />} />
          <Route path="/solutions" element={<BlankCanvas />} />
          <Route path="/work" element={<BlankCanvas />} />
          <Route path="/company" element={<BlankCanvas />} />
          <Route path="/contact" element={<BlankCanvas />} />
          <Route path="/services/:id" element={<ServiceDetails />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
