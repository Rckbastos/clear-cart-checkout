
import { User, Sun, Moon, Shield } from "lucide-react";
import { useIsAdmin } from "@/hooks/useIsAdmin";
import { Button } from "@/components/ui/button";

export default function DashboardHeader() {
  const { isAdmin } = useIsAdmin();

  // TODO: Substitua "Ricardo Bastos" pelo nome real do usuário via auth/session se disponível
  const userName = "Ricardo Bastos";

  return (
    <header className="w-full flex items-center justify-between px-2 md:px-6 py-3 border-b border-[#ececf0] backdrop-blur-xl bg-gray-50">
      <div className="flex items-center gap-3">
        <span className="block font-medium text-lg text-gray-700">
          {`Seja bem-vindo, ${userName}`}
        </span>
      </div>
      <div className="flex items-center gap-3">
        <button className="p-2 rounded-full hover:bg-secondary transition">
          <Sun size={18} />
        </button>
        <button className="p-2 rounded-full hover:bg-secondary transition">
          <Moon size={18} />
        </button>
        <div className="flex items-center gap-2 bg-gray-100 rounded-full py-1 px-3">
          <User className="mr-2 text-gray-400" size={22} />
          <div>
            <span className="block font-medium text-sm text-gray-700">{userName}</span>
            {isAdmin ? (
              <span className="block text-xs bg-blue-600 text-white px-2 py-0.5 rounded-sm font-bold flex items-center">
                <Shield size={10} className="mr-1" /> Admin
              </span>
            ) : (
              <span className="block text-xs text-blue-600 font-bold">Usuário</span>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
