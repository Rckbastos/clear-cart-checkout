
import React from "react";
import DashboardSidebar from "@/components/DashboardSidebar";
import DashboardHeader from "@/components/DashboardHeader";

export default function Vendas() {
  return (
    <div className="flex min-h-screen bg-[#f7f8fa]">
      <DashboardSidebar />
      <div className="flex-1 flex flex-col min-h-screen">
        <DashboardHeader />
        <main className="flex-1 p-4 md:p-6 lg:p-8 bg-[#f7f8fa]">
          <div className="mb-4">
            <h1 className="text-xl md:text-2xl font-bold text-gray-800">Vendas</h1>
            <p className="text-sm md:text-base text-gray-500">Lista com todas as vendas do seu checkout</p>
          </div>
          
          {/* Filtros responsivos */}
          <div className="mb-4 bg-white p-3 md:p-4 rounded-lg shadow-sm">
            <div className="flex flex-col md:flex-row md:items-center gap-3 justify-between">
              <div className="flex flex-wrap gap-2">
                <input 
                  type="text" 
                  placeholder="Buscar por pedido..." 
                  className="px-3 py-1.5 text-sm border border-gray-200 rounded-md w-full md:w-auto"
                />
                <select className="px-3 py-1.5 text-sm border border-gray-200 rounded-md bg-white">
                  <option>Status: Todos</option>
                  <option>Aprovado</option>
                  <option>Pendente</option>
                  <option>Cancelado</option>
                </select>
              </div>
              <div className="flex items-center gap-2 mt-3 md:mt-0">
                <span className="text-xs text-gray-500">Período:</span>
                <div className="bg-white border border-gray-200 rounded-md p-1 flex items-center text-xs">
                  <span className="px-2">Última semana</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Tabela/Cards responsivos */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            {/* Versão para desktop */}
            <div className="hidden md:block">
              <table className="w-full">
                <thead className="bg-gray-50 text-left">
                  <tr>
                    <th className="px-4 py-3 text-sm font-medium text-gray-500">Pedido</th>
                    <th className="px-4 py-3 text-sm font-medium text-gray-500">Cliente</th>
                    <th className="px-4 py-3 text-sm font-medium text-gray-500">Data</th>
                    <th className="px-4 py-3 text-sm font-medium text-gray-500">Valor</th>
                    <th className="px-4 py-3 text-sm font-medium text-gray-500">Status</th>
                    <th className="px-4 py-3 text-sm font-medium text-gray-500">Ações</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-sm">#54123</td>
                    <td className="px-4 py-3 text-sm">João Silva</td>
                    <td className="px-4 py-3 text-sm">22/05/2025</td>
                    <td className="px-4 py-3 text-sm font-medium">R$ 197,00</td>
                    <td className="px-4 py-3">
                      <span className="inline-flex items-center rounded-full bg-green-50 px-2 py-1 text-xs font-medium text-green-700">
                        Aprovado
                      </span>
                    </td>
                    <td className="px-4 py-3 text-sm">
                      <button className="text-blue-600 hover:underline">Ver detalhes</button>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-sm">#54122</td>
                    <td className="px-4 py-3 text-sm">Maria Souza</td>
                    <td className="px-4 py-3 text-sm">21/05/2025</td>
                    <td className="px-4 py-3 text-sm font-medium">R$ 389,90</td>
                    <td className="px-4 py-3">
                      <span className="inline-flex items-center rounded-full bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-700">
                        Pendente
                      </span>
                    </td>
                    <td className="px-4 py-3 text-sm">
                      <button className="text-blue-600 hover:underline">Ver detalhes</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            {/* Versão para mobile (cards) */}
            <div className="md:hidden divide-y divide-gray-100">
              <div className="p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <div className="font-medium">#54123</div>
                    <div className="text-sm text-gray-500">João Silva</div>
                  </div>
                  <span className="inline-flex items-center rounded-full bg-green-50 px-2 py-1 text-xs font-medium text-green-700">
                    Aprovado
                  </span>
                </div>
                <div className="mt-2 flex justify-between text-sm">
                  <div className="text-gray-500">22/05/2025</div>
                  <div className="font-medium">R$ 197,00</div>
                </div>
                <div className="mt-3 text-right">
                  <button className="text-blue-600 text-sm hover:underline">Ver detalhes</button>
                </div>
              </div>
              <div className="p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <div className="font-medium">#54122</div>
                    <div className="text-sm text-gray-500">Maria Souza</div>
                  </div>
                  <span className="inline-flex items-center rounded-full bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-700">
                    Pendente
                  </span>
                </div>
                <div className="mt-2 flex justify-between text-sm">
                  <div className="text-gray-500">21/05/2025</div>
                  <div className="font-medium">R$ 389,90</div>
                </div>
                <div className="mt-3 text-right">
                  <button className="text-blue-600 text-sm hover:underline">Ver detalhes</button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Paginação responsiva */}
          <div className="mt-4 flex justify-between items-center">
            <div className="text-sm text-gray-500">Mostrando 1-2 de 2 resultados</div>
            <div className="flex gap-2">
              <button className="px-3 py-1 bg-white border border-gray-200 rounded-md text-sm" disabled>Anterior</button>
              <button className="px-3 py-1 bg-white border border-gray-200 rounded-md text-sm" disabled>Próximo</button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
