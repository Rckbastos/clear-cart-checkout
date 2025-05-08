
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/sonner";
import { Plus } from "lucide-react";

const metrics = [
  { label: "Total em vendas", value: "R$ 0,00", icon: "📦" },
  { label: "Total em vendas pagas", value: "R$ 0,00", icon: "💰" },
  { label: "Ticket médio", value: "R$ 0,00", icon: "🎫" },
  { label: "Qtd. de pedidos", value: "0", icon: "📝" },
];

const last7days = [
  "Hoje", "Ontem", { label: "Últimos 7 dias", highlight: true }, "Últimos 30 dias",
];

export default function DashboardMetrics() {
  return (
    <section className="mb-4">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        {/* Metrics - Responsive horizontal scroll on mobile, flex on md+ */}
        <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-thin scrollbar-thumb-gray-300 md:overflow-visible">
          {metrics.map((item, i) => (
            <div
              key={i}
              className="flex items-center px-5 py-3 bg-white dark:bg-gray-800 rounded-lg shadow min-w-[180px] transition shrink-0"
            >
              <span className="bg-gray-100 dark:bg-gray-700 rounded-full mr-3 p-2 text-xl">{item.icon}</span>
              <div>
                <div className="text-xs text-gray-500 dark:text-gray-400">{item.label}</div>
                <div className="font-bold text-lg text-amber-500 dark:text-amber-300">{item.value}</div>
              </div>
            </div>
          ))}
        </div>
        {/* Filters */}
        <div className="flex flex-wrap items-center gap-2 md:gap-1 md:mt-0 mt-2">
          {last7days.map((d, i) =>
            typeof d === "string" ? (
              <span
                key={i}
                className="text-xs text-gray-400 px-3 py-1 bg-transparent rounded cursor-pointer"
              >
                {d}
              </span>
            ) : (
              <span
                key={i}
                className="text-xs px-3 py-1 bg-yellow-300/80 dark:bg-yellow-600/80 text-[#6f4f15] dark:text-yellow-100 rounded font-semibold shadow-sm"
                style={{ minWidth: 80 }}
              >
                {d.label}
              </span>
            )
          )}
          <span className="px-3 py-1 mt-2 md:mt-0 bg-white dark:bg-gray-800 rounded shadow text-xs border border-gray-200 dark:border-gray-700">
            Apr 15, 2025 – Apr 22, 2025
          </span>
        </div>
      </div>
    </section>
  );
}
