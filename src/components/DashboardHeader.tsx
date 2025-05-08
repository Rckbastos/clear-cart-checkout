
import { User, Shield } from "lucide-react";
import { useIsAdmin } from "@/hooks/useIsAdmin";
import { Button } from "@/components/ui/button";
import ThemeToggle from "./ThemeToggle";

export default function DashboardHeader() {
  const { isAdmin } = useIsAdmin();

  // TODO: Substitua "Ricardo Bastos" pelo nome real do usuário via auth/session se disponível
  const userName = "Ricardo Bastos";

  return (
    <header className="w-full flex items-center justify-between px-2 md:px-6 py-3 border-b border-[#ececf0] dark:border-gray-700 backdrop-blur-xl bg-gray-50 dark:bg-gray-800/90">
      <div className="flex items-center gap-3">
        <span className="block font-medium text-lg text-gray-700 dark:text-gray-200">
          {`Seja bem-vindo, ${userName}`}
        </span>
      </div>
      <div className="flex items-center gap-3">
        <ThemeToggle />
        <div className="flex items-center gap-2 bg-gray-100 dark:bg-gray-700 rounded-full py-1 px-3">
          <User className="mr-2 text-gray-400 dark:text-gray-300" size={22} />
          <div>
            <span className="block font-medium text-sm text-gray-700 dark:text-gray-200">{userName}</span>
            {isAdmin ? (
              <span className="block text-xs bg-blue-600 dark:bg-blue-500 text-white px-2 py-0.5 rounded-sm font-bold flex items-center">
                <Shield size={10} className="mr-1" /> Admin
              </span>
            ) : (
              <span className="block text-xs text-blue-600 dark:text-blue-400 font-bold">Usuário</span>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
