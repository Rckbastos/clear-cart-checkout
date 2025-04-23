import { useIsAdmin } from "@/hooks/useIsAdmin";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/sonner";
import { Wrench, Lock, Plus, Shield } from "lucide-react";

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
  const { isAdmin } = useIsAdmin();

  const handleAdminAction = () => {
    toast.success("Ação administrativa executada com sucesso!");
  };

  return (
    <section className="mb-4">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
        <div className="flex gap-2">
          {metrics.map((item, i) => (
            <div key={i} className="flex items-center px-6 py-3 bg-white rounded-lg shadow transition min-w-[180px]">
              <span className="bg-gray-100 rounded-full mr-3 p-2 text-xl">{item.icon}</span>
              <div>
                <div className="text-xs text-gray-500">{item.label}</div>
                <div className="font-bold text-lg text-[#533e84]">{item.value}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-center gap-1 mt-2 md:mt-0">
          {last7days.map((d, i) =>
            typeof d === "string" ? (
              <span key={i} className="text-xs text-gray-400 px-3 py-1 bg-transparent rounded cursor-pointer">{d}</span>
            ) : (
              <span key={i} className="text-xs px-3 py-1 bg-yellow-300/80 text-[#6f4f15] rounded font-semibold shadow-sm" style={{ minWidth: 80 }}>{d.label}</span>
            )
          )}
          <span className="ml-2 px-3 py-1 bg-white rounded shadow text-xs border border-gray-200">Apr 15, 2025 – Apr 22, 2025</span>
          
          {isAdmin && (
            <div className="ml-4 flex gap-2">
              <Button 
                variant="outline" 
                size="sm" 
                onClick={handleAdminAction}
                className="flex items-center gap-1 bg-blue-50 border-blue-200 hover:bg-blue-100 text-blue-700"
              >
                <Wrench size={14} />
                <span>Admin Config</span>
              </Button>
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => toast.info("Área de administração acessada")}
                className="flex items-center gap-1 bg-purple-50 border-purple-200 hover:bg-purple-100 text-purple-700"
              >
                <Lock size={14} />
                <span>Área Restrita</span>
              </Button>
            </div>
          )}
        </div>
      </div>
      
      {isAdmin && (
        <div className="mt-4 p-4 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-100 rounded-lg">
          <h3 className="font-medium text-blue-800 mb-2 flex items-center">
            <Shield size={16} className="mr-2" /> Controles de Administrador
          </h3>
          <div className="flex gap-3">
            <Button size="sm" variant="outline" className="bg-white" onClick={() => toast.success("Usuários gerenciados com sucesso")}>
              Gerenciar Usuários
            </Button>
            <Button size="sm" variant="outline" className="bg-white" onClick={() => toast.success("Configurações atualizadas")}>
              Configurações do Sistema
            </Button>
            <Button size="sm" className="bg-blue-600 hover:bg-blue-700" onClick={() => toast.success("Novo recurso adicionado")}>
              <Plus size={14} className="mr-1" /> Adicionar Recurso
            </Button>
          </div>
        </div>
      )}
    </section>
  );
}
