
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import CharDhamPage from "./pages/CharDhamPage";
import DoDhamPage from "./pages/DoDhamPage";
import KedarnathPage from "./pages/KedarnathPage";
import BadrinathPage from "./pages/BadrinathPage";
import GangotriPage from "./pages/GangotriPage";
import CarRentalsPage from "./pages/CarRentalsPage";
import NotFound from "./pages/NotFound";
import HaridwarTourPackages from "./pages/HaridwarTourPackages";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <div className="scroll-smooth">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/char-dham" element={<CharDhamPage />} />
            <Route path="/haridwar-tour-packages" element={<HaridwarTourPackages />} />
            <Route path="/do-dham" element={<DoDhamPage />} />
            <Route path="/kedarnath" element={<KedarnathPage />} />
            <Route path="/badrinath" element={<BadrinathPage />} />
            <Route path="/gangotri" element={<GangotriPage />} />
            <Route path="/car-rentals" element={<CarRentalsPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
