
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useAuthGuard } from "@/hooks/useAuthGuard";
import { AdminRoute } from "@/components/AdminRoute";
import { ThemeProvider } from "@/contexts/ThemeContext";
import NotFound from "./pages/NotFound";
import Dashboard from "./pages/Dashboard";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
// Novas páginas
import Vendas from "./pages/Vendas";
import Carrinhos from "./pages/Carrinhos";
import Clientes from "./pages/Clientes";
import Produtos from "./pages/Produtos";

const queryClient = new QueryClient();

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { loading, user } = useAuthGuard();

  if (loading) {
    return (
      <div className="flex w-full h-screen justify-center items-center bg-[#f7f8fa]">
        <span className="text-lg text-[#6E59A5]">Carregando...</span>
      </div>
    );
  }
  if (!user) {
    // Redirect handled in useAuthGuard
    return null;
  }
  return <>{children}</>;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/vendas"
              element={
                <ProtectedRoute>
                  <Vendas />
                </ProtectedRoute>
              }
            />
            <Route
              path="/carrinhos"
              element={
                <ProtectedRoute>
                  <Carrinhos />
                </ProtectedRoute>
              }
            />
            <Route
              path="/clientes"
              element={
                <ProtectedRoute>
                  <Clientes />
                </ProtectedRoute>
              }
            />
            <Route
              path="/produtos"
              element={
                <ProtectedRoute>
                  <Produtos />
                </ProtectedRoute>
              }
            />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
