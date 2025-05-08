
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useAuthGuard } from "@/features/auth/useAuthGuard";
import { AdminRoute } from "@/features/admin/AdminRoute";
import { ThemeProvider } from "@/features/theme/ThemeContext";
import NotFoundPage from "./components/common/pages/NotFoundPage";
import DashboardPage from "./features/dashboard/DashboardPage";
import SignInPage from "./features/auth/SignInPage";
import SignUpPage from "./features/auth/SignUpPage";
// Páginas de recursos
import VendasPage from "./features/sales/VendasPage";
import CarrinhosPage from "./features/carts/CarrinhosPage";
import ClientesPage from "./features/customers/ClientesPage";
import ProdutosPage from "./features/products/ProdutosPage";

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
            <Route path="/" element={<DashboardPage />} />
            <Route path="/sign-in" element={<SignInPage />} />
            <Route path="/sign-up" element={<SignUpPage />} />
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <DashboardPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/vendas"
              element={
                <ProtectedRoute>
                  <VendasPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/carrinhos"
              element={
                <ProtectedRoute>
                  <CarrinhosPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/clientes"
              element={
                <ProtectedRoute>
                  <ClientesPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/produtos"
              element={
                <ProtectedRoute>
                  <ProdutosPage />
                </ProtectedRoute>
              }
            />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
