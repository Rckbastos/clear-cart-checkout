import { User, Sun, Moon, Shield, AppWindow } from "lucide-react";
import { useIsAdmin } from "@/hooks/useIsAdmin";
import { Button } from "@/components/ui/button";
export default function DashboardHeader() {
  const {
    isAdmin
  } = useIsAdmin();
  return <header className="w-full flex items-center justify-between px-2 md:px-6 py-3 border-b border-[#ececf0] backdrop-blur-xl bg-gray-50">
      <div className="flex items-center gap-3">
        <h1 className="text-xl md:text-2xl font-bold text-[#383748]">Pegasus</h1>
        
        <p className="text-gray-400 text-xs ml-2">Gerencie os resultados de seu negócio</p>
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
            <span className="block font-medium text-sm text-gray-700">Ricardo Bastos</span>
            {isAdmin ? <span className="block text-xs bg-blue-600 text-white px-2 py-0.5 rounded-sm font-bold flex items-center">
                <Shield size={10} className="mr-1" /> Admin
              </span> : <span className="block text-xs text-blue-600 font-bold">Usuário</span>}
          </div>
        </div>
      </div>
    </header>;
}