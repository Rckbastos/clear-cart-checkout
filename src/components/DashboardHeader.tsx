import { User, Sun, Moon } from "lucide-react";
export default function DashboardHeader() {
  return <header className="w-full flex items-center justify-between px-2 md:px-6 py-3 border-b border-[#ececf0] backdrop-blur-xl bg-gray-50">
      <div>
        <h1 className="text-xl md:text-2xl font-bold text-[#383748]">Pegasus</h1>
        <p className="text-gray-400 text-xs">Gerencie os resultados de seu negócio</p>
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
            <span className="block text-xs text-blue-600 font-bold">Admin</span>
          </div>
        </div>
      </div>
    </header>;
}