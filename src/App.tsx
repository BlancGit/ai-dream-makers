import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import Home from "./pages/Home";
import Lesson1 from "./pages/Lesson1";
import Lesson2 from "./pages/Lesson2";
import Lesson3 from "./pages/Lesson3";
import Lesson4 from "./pages/Lesson4";
import Lesson5 from "./pages/Lesson5";
import CSharpLesson from "./pages/CSharpLesson";
import PythonLesson from "./pages/PythonLesson";
import Games from "./pages/Games";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/lessons/1" element={<Lesson1 />} />
            <Route path="/lessons/2" element={<Lesson2 />} />
            <Route path="/lessons/3" element={<Lesson3 />} />
            <Route path="/lessons/4" element={<Lesson4 />} />
            <Route path="/lessons/5" element={<Lesson5 />} />
            <Route path="/lessons/csharp" element={<CSharpLesson />} />
            <Route path="/lessons/python" element={<PythonLesson />} />
            <Route path="/games" element={<Games />} />
            <Route path="/about" element={<About />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
