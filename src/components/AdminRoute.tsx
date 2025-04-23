
import { useNavigate } from "react-router-dom";
import { useIsAdmin } from "@/hooks/useIsAdmin";
import { useAuthGuard } from "@/hooks/useAuthGuard";
import { toast } from "@/components/ui/sonner";

export const AdminRoute = ({ children }: { children: React.ReactNode }) => {
  const { loading: authLoading, user } = useAuthGuard();
  const { isAdmin, loading: adminLoading } = useIsAdmin();
  const navigate = useNavigate();

  // Show loading state while checking auth or admin status
  if (authLoading || adminLoading) {
    return (
      <div className="flex w-full h-screen justify-center items-center bg-[#f7f8fa]">
        <span className="text-lg text-[#6E59A5]">Carregando...</span>
      </div>
    );
  }

  // If not logged in, redirect to login (handled by useAuthGuard)
  if (!user) {
    return null;
  }

  // If logged in but not admin, redirect to dashboard with error message
  if (!isAdmin) {
    toast.error("Acesso restrito apenas para administradores");
    navigate("/dashboard");
    return null;
  }

  // User is admin, render the children
  return <>{children}</>;
};
