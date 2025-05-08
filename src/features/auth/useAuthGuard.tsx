
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

type User = {
  id: string;
  email: string;
} | null;

export function useAuthGuard() {
  const [user, setUser] = useState<User>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuthStatus = async () => {
      try {
        // This is a placeholder implementation
        // In a real app, this would check with Supabase or your auth provider
        // For now, we'll pretend the user is logged in
        const isLoggedIn = true; // In production, this would be an actual check
        
        if (isLoggedIn) {
          setUser({
            id: "user-123",
            email: "demo@example.com",
          });
        } else {
          navigate("/sign-in");
        }
      } catch (error) {
        console.error("Error checking auth status:", error);
        navigate("/sign-in");
      } finally {
        setLoading(false);
      }
    };
    
    checkAuthStatus();
  }, [navigate]);

  return { user, loading };
}
