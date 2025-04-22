
import { Funnel, BarChart2, Info } from "lucide-react";

export default function DashboardCharts() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 mt-6">
      {/* Chart & Top Product */}
      <div className="col-span-2 flex flex-col gap-5">
        <div className="bg-white rounded-lg shadow p-6 flex-1 min-h-[320px]">
          <div className="flex items-center gap-2 mb-2">
            <BarChart2 size={20} className="text-gray-400" />
            <span className="font-semibold text-gray-600 text-sm">Crescimento da receita</span>
          </div>
          <div className="h-44 rounded bg-gray-50 flex items-center justify-center text-gray-300 italic">[Gráfico placeholder]</div>
        </div>
        <div className="bg-white rounded-lg shadow p-6 flex-1 min-h-[130px]">
          <div className="font-semibold text-gray-600 text-sm mb-4">Top produtos</div>
          <div className="text-gray-400 text-sm italic">[Em breve]</div>
        </div>
      </div>
      {/* Pagamento e Funil */}
      <div className="flex flex-col gap-5">
        <div className="bg-white rounded-lg shadow p-6 mb-2">
          <div className="font-bold text-sm mb-2">Formas de pagamento</div>
          <div className="mb-2 flex flex-col gap-1 text-xs text-gray-600">
            <div>Cartão <span className="ml-1 text-gray-400">0 Tentativas de pagamento no cartão</span> <span className="float-right">0</span></div>
            <div>Boleto <span className="ml-1 text-gray-400">0 Tentativas de pagamento no boleto</span> <span className="float-right">0</span></div>
            <div>Pix <span className="ml-1 text-gray-400">0 Tentativas de pagamento no pix</span> <span className="float-right">0</span></div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-6 mb-2">
          <div className="font-bold text-sm mb-2 flex items-center">Funil de vendas</div>
          <div className="flex flex-row gap-5">
            <div className="flex-1">
              <div className="text-xs text-gray-600">Visitas únicas <span className="float-right font-bold text-blue-500">0</span></div>
              <div className="text-xs text-gray-600">Primeira etapa <span className="float-right font-bold text-blue-500">0</span></div>
              <div className="text-xs text-gray-600 flex items-center">
                Segunda etapa
                <Info size={14} className="ml-1 text-gray-400" />
                <span className="float-right font-bold text-blue-500 ml-auto">0</span>
              </div>
              <div className="text-xs text-gray-600">Vendas <span className="float-right font-bold text-blue-500">0</span></div>
              <div className="text-xs text-gray-600">Vendas pagas <span className="float-right font-bold text-blue-500">0</span></div>
            </div>
            <div className="flex flex-col items-center justify-center min-w-[70px]">
              <svg width="60" height="90" viewBox="0 0 60 90">
                <polygon points="0,0 60,0 48,90 12,90" fill="#257fff" opacity="0.8" />
                <polygon points="8,35 52,35 46,90 14,90" fill="#1976d2" opacity="0.9" />
                <polygon points="16,60 44,60 44,90 16,90" fill="#0948a2" opacity="1" />
                <text x="30" y="25" fill="#fff" fontSize="16" textAnchor="middle" dominantBaseline="middle">0</text>
                <text x="30" y="50" fill="#fff" fontSize="12" textAnchor="middle" dominantBaseline="middle">0</text>
                <text x="30" y="75" fill="#fff" fontSize="12" textAnchor="middle" dominantBaseline="middle">0</text>
              </svg>
            </div>
          </div>
        </div>
        <div className="flex gap-3">
          <div className="flex-1 flex flex-col bg-white rounded-lg shadow py-6 px-4 justify-center items-center min-h-[86px]">
            <span className="text-gray-400 flex items-center text-xs"><BarChart2 size={15} className="mr-1" /> Carrinhos abandonados</span>
            <span className="font-bold mt-1 text-lg text-gray-700">0</span>
          </div>
          <div className="flex-1 flex flex-col bg-white rounded-lg shadow py-6 px-4 justify-center items-center min-h-[86px]">
            <span className="text-gray-400 flex items-center text-xs"><BarChart2 size={15} className="mr-1" /> Pedidos cancelados</span>
            <span className="font-bold mt-1 text-lg text-gray-700">0</span>
          </div>
        </div>
      </div>
    </section>
  );
}
