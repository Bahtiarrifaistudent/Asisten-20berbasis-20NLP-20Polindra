import "./global.css";

import { Toaster } from "@/components/ui/toaster";
<<<<<<< HEAD
import { createRoot } from "react-dom/client";
=======
>>>>>>> 79eac8f (Update struktur direktori dan perbaikan proyek chatbot NLP)
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
<<<<<<< HEAD
=======

>>>>>>> 79eac8f (Update struktur direktori dan perbaikan proyek chatbot NLP)
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
<<<<<<< HEAD
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
=======

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />

          {/* Tambahkan halaman lain di atas ini */}
>>>>>>> 79eac8f (Update struktur direktori dan perbaikan proyek chatbot NLP)
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

<<<<<<< HEAD
createRoot(document.getElementById("root")!).render(<App />);
=======
export default App;
>>>>>>> 79eac8f (Update struktur direktori dan perbaikan proyek chatbot NLP)
