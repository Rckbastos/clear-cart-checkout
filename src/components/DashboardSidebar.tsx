
import React, { useState } from "react";
import {
  ShoppingCart,
  ShoppingBag,
  Wallet,
  BarChart,
  Layers,
  Settings,
  User,
  Megaphone,
  CreditCard,
  Truck,
  Menu,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const sidebarItems = [
  { icon: <BarChart size={22} />, label: "Métricas" },
  { icon: <ShoppingBag size={22} />, label: "Pedidos" },
  { icon: <ShoppingCart size={22} />, label: "Produtos" },
  { icon: <Wallet size={22} />, label: "Financeiro" },
  { icon: <Layers size={22} />, label: "Integrações" },
  { icon: <Settings size={22} />, label: "Configurações" },
  { icon: <Megaphone size={22} />, label: "Marketing" },
  { icon: <CreditCard size={22} />, label: "Gateways" },
  { icon: <Truck size={22} />, label: "Fretes" },
  { icon: <ShoppingCart size={22} />, label: "Checkout" },
];

export default function DashboardSidebar() {
  const [expanded, setExpanded] = useState(true);

  return (
    <aside
      className={`hidden md:flex flex-col items-center ${
        expanded ? "w-56" : "w-20"
      } py-6 px-2 bg-white/60 backdrop-blur-xl shadow-[0_4px_32px_0_rgba(80,59,168,0.10)] transition-all duration-300`}
    >
      <div className="mb-7 flex flex-col items-center w-full">
        <div className={`flex items-center w-full justify-between ${expanded ? "" : "justify-center"}`}>
          <img
            src="/lovable-uploads/0b1d8853-fbe0-4456-be65-cf174fa44094.png"
            alt="Logo"
            className="w-10 h-10 rounded-full mb-3"
          />
          {expanded && (
            <button
              aria-label="Retract sidebar"
              className="rounded-lg hover:bg-primary/10 p-1 transition mb-3"
              onClick={() => setExpanded(false)}
              type="button"
            >
              <ChevronLeft size={22} />
            </button>
          )}
        </div>
      </div>
      <nav className="flex flex-col gap-2 flex-1 w-full">
        {sidebarItems.map((item, i) => (
          <button
            key={i}
            className={`relative flex items-center w-full rounded-lg hover:bg-primary/10 group transition p-2 ${
              expanded ? "justify-start gap-3" : "justify-center"
            }`}
          >
            <span>{item.icon}</span>
            {expanded && (
              <span className="text-sm font-medium text-gray-800">{item.label}</span>
            )}
            {!expanded && (
              <span className="absolute left-14 bg-black text-white text-xs px-2 py-1 rounded-md opacity-0 group-hover:opacity-80 pointer-events-none transition">
                {item.label}
              </span>
            )}
          </button>
        ))}
      </nav>
      <div className="mt-auto flex flex-col items-center mb-2 w-full">
        <button
          className={`flex items-center rounded-lg hover:bg-primary/10 transition p-2 ${expanded ? "w-full justify-start gap-3" : "w-10 justify-center"}`}
        >
          <User size={22} />
          {expanded && <span className="text-sm font-medium text-gray-800">Perfil</span>}
        </button>
        {!expanded && (
          <button
            onClick={() => setExpanded(true)}
            aria-label="Expand sidebar"
            className="mt-4 rounded-lg hover:bg-primary/10 p-1 transition"
            type="button"
          >
            <ChevronRight size={22} />
          </button>
        )}
      </div>
    </aside>
  );
}
