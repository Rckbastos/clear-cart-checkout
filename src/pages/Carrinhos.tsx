
import React from "react";
import DashboardSidebar from "@/components/DashboardSidebar";
import DashboardHeader from "@/components/DashboardHeader";

export default function Carrinhos() {
  return (
    <div className="flex min-h-screen bg-[#f7f8fa]">
      <DashboardSidebar />
      <div className="flex-1 flex flex-col min-h-screen">
        <DashboardHeader />
        <main className="flex-1 p-4 md:p-6 lg:p-8 bg-[#f7f8fa]">
          <div className="mb-4">
            <h1 className="text-xl md:text-2xl font-bold text-gray-800">Carrinhos abandonados</h1>
            <p className="text-sm md:text-base text-gray-500">Liste e recupere carrinhos abandonados pelos clientes</p>
          </div>
          
          {/* Filtros responsivos */}
          <div className="mb-4 bg-white p-3 md:p-4 rounded-lg shadow-sm">
            <div className="flex flex-col md:flex-row md:items-center gap-3 justify-between">
              <div className="flex flex-wrap gap-2">
                <input 
                  type="text" 
                  placeholder="Buscar por email..." 
                  className="px-3 py-1.5 text-sm border border-gray-200 rounded-md w-full md:w-auto"
                />
              </div>
              <div className="flex items-center gap-2 mt-3 md:mt-0">
                <span className="text-xs text-gray-500">Período:</span>
                <div className="bg-white border border-gray-200 rounded-md p-1 flex items-center text-xs">
                  <span className="px-2">Últimas 24h</span>
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
                    <th className="px-4 py-3 text-sm font-medium text-gray-500">Email</th>
                    <th className="px-4 py-3 text-sm font-medium text-gray-500">Data</th>
                    <th className="px-4 py-3 text-sm font-medium text-gray-500">Produtos</th>
                    <th className="px-4 py-3 text-sm font-medium text-gray-500">Valor</th>
                    <th className="px-4 py-3 text-sm font-medium text-gray-500">Ações</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-sm">cliente@email.com</td>
                    <td className="px-4 py-3 text-sm">22/05/2025 15:30</td>
                    <td className="px-4 py-3 text-sm">2 itens</td>
                    <td className="px-4 py-3 text-sm font-medium">R$ 197,00</td>
                    <td className="px-4 py-3 text-sm">
                      <button className="text-blue-600 hover:underline mr-3">Enviar email</button>
                      <button className="text-gray-600 hover:underline">Ver</button>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-sm">outro@email.com</td>
                    <td className="px-4 py-3 text-sm">21/05/2025 09:15</td>
                    <td className="px-4 py-3 text-sm">1 item</td>
                    <td className="px-4 py-3 text-sm font-medium">R$ 89,90</td>
                    <td className="px-4 py-3 text-sm">
                      <button className="text-blue-600 hover:underline mr-3">Enviar email</button>
                      <button className="text-gray-600 hover:underline">Ver</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            {/* Versão para mobile (cards) */}
            <div className="md:hidden divide-y divide-gray-100">
              <div className="p-4">
                <div className="font-medium break-all">cliente@email.com</div>
                <div className="text-sm text-gray-500">22/05/2025 15:30</div>
                <div className="mt-2 flex justify-between text-sm">
                  <div>2 itens</div>
                  <div className="font-medium">R$ 197,00</div>
                </div>
                <div className="mt-3 flex justify-end gap-3">
                  <button className="text-blue-600 text-sm hover:underline">Enviar email</button>
                  <button className="text-gray-600 text-sm hover:underline">Ver</button>
                </div>
              </div>
              <div className="p-4">
                <div className="font-medium break-all">outro@email.com</div>
                <div className="text-sm text-gray-500">21/05/2025 09:15</div>
                <div className="mt-2 flex justify-between text-sm">
                  <div>1 item</div>
                  <div className="font-medium">R$ 89,90</div>
                </div>
                <div className="mt-3 flex justify-end gap-3">
                  <button className="text-blue-600 text-sm hover:underline">Enviar email</button>
                  <button className="text-gray-600 text-sm hover:underline">Ver</button>
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
