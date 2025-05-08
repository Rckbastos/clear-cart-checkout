
import React from "react";
import { BarChart2, TrendingUp, Calendar, User, Settings, Info } from "lucide-react";
import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

const metrics = [
  { label: "Vendas Totais", value: "R$ 0,00", icon: <BarChart2 size={22} />, color: "from-[#9b87f5] to-[#6E59A5]", darkColor: "dark:from-[#7c5bf9] dark:to-[#5544a3]" },
  { label: "Vendas Pagas", value: "R$ 0,00", icon: <TrendingUp size={22} />, color: "from-[#33C3F0] to-[#1EAEDB]", darkColor: "dark:from-[#2db3de] dark:to-[#1a99c3]" },
  { label: "Ticket Médio", value: "R$ 0,00", icon: <Calendar size={22} />, color: "from-[#7E69AB] to-[#D6BCFA]", darkColor: "dark:from-[#6e5a9d] dark:to-[#b69fe0]" },
  { label: "Pedidos", value: "0", icon: <User size={22} />, color: "from-[#6E59A5] to-[#9b87f5]", darkColor: "dark:from-[#5a4991] dark:to-[#7d69db]" },
];

export default function HomeDashboard() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#f7f8fa] via-[#ece7fe] to-[#D6BCFA] dark:from-[#121212] dark:via-[#1e1b30] dark:to-[#352a4b] flex flex-col items-center">
      {/* Header */}
      <header className="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-8 py-8">
        <div>
          <h1 className="text-3xl font-bold text-[#6E59A5] dark:text-[#a393ee] drop-shadow-sm">Dashboard</h1>
          <p className="text-gray-500 dark:text-gray-400 text-xs font-medium">
            Gerencie os resultados de seu negócio
          </p>
        </div>
        <div className="flex items-center gap-4 mt-4 md:mt-0">
          <Link
            to="/dashboard"
            className="px-6 py-2 bg-gradient-to-r from-[#9b87f5] to-[#33C3F0] dark:from-[#7c5bf9] dark:to-[#2db3de] rounded-lg shadow text-white font-semibold text-sm transition hover:opacity-90"
          >
            Ir para o Dashboard
          </Link>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <button className="p-2 rounded-full bg-white dark:bg-gray-800 shadow hover:bg-[#f3f1f9] dark:hover:bg-gray-700 transition text-[#7E69AB] dark:text-[#9b87f5]">
              <Settings size={20} />
            </button>
          </div>
        </div>
      </header>

      {/* Metrics */}
      <div className="w-full max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-8 mt-4">
        {metrics.map((item, idx) => (
          <div
            key={item.label}
            className={`rounded-2xl shadow-lg px-6 py-7 flex flex-col gap-2 bg-gradient-to-br ${item.color} ${item.darkColor} transition-all`}
          >
            <div className="flex items-center gap-2 text-white text-xl">
              {item.icon}
              <span className="font-bold">{item.value}</span>
            </div>
            <div className="text-white text-sm font-medium mt-2 opacity-80">{item.label}</div>
          </div>
        ))}
      </div>

      {/* Middle Cards */}
      <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-6 px-8 mt-8">
        {/* Left - Chart placeholder */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 flex flex-col justify-between min-h-[260px]">
          <div className="flex items-center gap-2 text-[#6E59A5] dark:text-[#9b87f5] mb-2">
            <BarChart2 size={19} />
            <span className="font-semibold text-md">Crescimento de Receita</span>
          </div>
          <div className="flex-1 flex items-center justify-center">
            <div className="h-32 w-full flex items-center justify-center bg-gradient-to-br from-[#E2D1C3] to-[#D6BCFA] dark:from-[#2a2530] dark:to-[#413359] rounded-xl text-gray-400 dark:text-gray-500 italic">
              [Gráfico futuro]
            </div>
          </div>
        </div>
        {/* Right - "Top Produtos" and payment/funnel info */}
        <div className="flex flex-col gap-6">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 min-h-[120px]">
            <div className="font-semibold text-md text-[#6E59A5] dark:text-[#9b87f5] mb-4">Top produtos</div>
            <div className="text-gray-400 dark:text-gray-500 text-sm italic">[Em breve]</div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 min-h-[130px]">
            <div className="font-semibold text-md text-[#6E59A5] dark:text-[#9b87f5] mb-2 flex items-center">
              Funil de vendas
              <Info size={17} className="ml-1 text-[#B9B7D2] dark:text-[#786fa6]" />
            </div>
            <div className="grid grid-cols-2 gap-2 text-xs text-gray-500 dark:text-gray-400">
              <div>Visitas únicas <span className="float-right font-bold text-blue-500 dark:text-blue-400">0</span></div>
              <div>Primeira etapa <span className="float-right font-bold text-blue-500 dark:text-blue-400">0</span></div>
              <div>Segunda etapa <span className="float-right font-bold text-blue-500 dark:text-blue-400">0</span></div>
              <div>Vendas pagas <span className="float-right font-bold text-blue-500 dark:text-blue-400">0</span></div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer extra cards */}
      <div className="w-full max-w-7xl grid grid-cols-2 md:grid-cols-4 gap-6 px-8 mt-8 mb-16">
        <div className="bg-gradient-to-r from-[#33C3F0] to-[#9b87f5] dark:from-[#2db3de] dark:to-[#7c5bf9] rounded-2xl shadow-lg flex flex-col items-center justify-center py-8">
          <span className="text-white text-lg font-medium">Carrinhos Abandonados</span>
          <span className="text-3xl font-bold text-white mt-2">0</span>
        </div>
        <div className="bg-gradient-to-r from-[#7E69AB] to-[#1EAEDB] dark:from-[#6e5a9d] dark:to-[#1a99c3] rounded-2xl shadow-lg flex flex-col items-center justify-center py-8">
          <span className="text-white text-lg font-medium">Pedidos Cancelados</span>
          <span className="text-3xl font-bold text-white mt-2">0</span>
        </div>
        <div className="bg-gradient-to-r from-[#D6BCFA] to-[#9b87f5] dark:from-[#b69fe0] dark:to-[#7c5bf9] rounded-2xl shadow-lg flex flex-col items-center justify-center py-8">
          <span className="text-[#6E59A5] dark:text-[#1e1a2c] text-lg font-medium">Vendas Estornadas</span>
          <span className="text-3xl font-bold text-[#6E59A5] dark:text-[#1e1a2c] mt-2">0</span>
        </div>
        <div className="bg-gradient-to-r from-[#F5A8B8] to-[#9b87f5] dark:from-[#e08c9d] dark:to-[#7c5bf9] rounded-2xl shadow-lg flex flex-col items-center justify-center py-8">
          <span className="text-white text-lg font-medium">Reembolsos</span>
          <span className="text-3xl font-bold text-white mt-2">0</span>
        </div>
      </div>
    </div>
  );
}
