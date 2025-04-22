
import { ShoppingCart, ShoppingBag, Wallet, ArrowRight, BarChart, Layers, Settings, User, Package } from "lucide-react";

const sidebarItems = [
  { icon: <BarChart size={22} />, tooltip: "Métricas" },
  { icon: <ShoppingBag size={22} />, tooltip: "Pedidos" },
  { icon: <ShoppingCart size={22} />, tooltip: "Produtos" },
  { icon: <Wallet size={22} />, tooltip: "Financeiro" },
  { icon: <Layers size={22} />, tooltip: "Integrações" },
  { icon: <Settings size={22} />, tooltip: "Configurações" },
];

export default function DashboardSidebar() {
  return (
    <aside className="hidden md:flex flex-col items-center w-20 py-6 px-2 bg-white/60 backdrop-blur-xl shadow-[0_4px_32px_0_rgba(80,59,168,0.10)]">
      <div className="mb-7 flex flex-col items-center">
        <img src="/lovable-uploads/0b1d8853-fbe0-4456-be65-cf174fa44094.png" alt="Logo" className="w-10 h-10 rounded-full mb-3" />
      </div>
      <nav className="flex flex-col gap-6 flex-1">
        {sidebarItems.map((item, i) => (
          <button key={i} className="relative flex items-center justify-center w-10 h-10 rounded-lg hover:bg-primary/10 group transition">
            {item.icon}
            <span className="absolute left-12 bg-black text-white text-xs px-2 py-1 rounded-md opacity-0 group-hover:opacity-80 pointer-events-none transition">{item.tooltip}</span>
          </button>
        ))}
      </nav>
      <div className="mt-auto flex flex-col items-center mb-2">
        <button className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-primary/10 transition">
          <User size={22} />
        </button>
      </div>
    </aside>
  );
}
