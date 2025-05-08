
import React from "react";
import DashboardSidebar from "@/components/DashboardSidebar";
import DashboardHeader from "@/components/DashboardHeader";

export default function Clientes() {
  return (
    <div className="flex min-h-screen bg-[#f7f8fa]">
      <DashboardSidebar />
      <div className="flex-1 flex flex-col min-h-screen">
        <DashboardHeader />
        <main className="flex-1 p-4 md:p-6 lg:p-8 bg-[#f7f8fa]">
          <div className="mb-4">
            <h1 className="text-xl md:text-2xl font-bold text-gray-800">Clientes</h1>
            <p className="text-sm md:text-base text-gray-500">Gerencie todas as informações dos seus clientes</p>
          </div>
          
          {/* Filtros responsivos */}
          <div className="mb-4 bg-white p-3 md:p-4 rounded-lg shadow-sm">
            <div className="flex flex-col md:flex-row md:items-center gap-3 justify-between">
              <div className="flex flex-wrap gap-2">
                <input 
                  type="text" 
                  placeholder="Buscar cliente..." 
                  className="px-3 py-1.5 text-sm border border-gray-200 rounded-md w-full md:w-auto"
                />
                <select className="px-3 py-1.5 text-sm border border-gray-200 rounded-md bg-white">
                  <option>Todos</option>
                  <option>Compraram</option>
                  <option>Não compraram</option>
                </select>
              </div>
              <button className="px-4 py-1.5 bg-purple-600 text-white text-sm rounded-md hover:bg-purple-700 transition-colors">
                Exportar dados
              </button>
            </div>
          </div>
          
          {/* Tabela/Cards responsivos */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            {/* Versão para desktop */}
            <div className="hidden md:block">
              <table className="w-full">
                <thead className="bg-gray-50 text-left">
                  <tr>
                    <th className="px-4 py-3 text-sm font-medium text-gray-500">Nome</th>
                    <th className="px-4 py-3 text-sm font-medium text-gray-500">Email</th>
                    <th className="px-4 py-3 text-sm font-medium text-gray-500">Telefone</th>
                    <th className="px-4 py-3 text-sm font-medium text-gray-500">Compras</th>
                    <th className="px-4 py-3 text-sm font-medium text-gray-500">Total gasto</th>
                    <th className="px-4 py-3 text-sm font-medium text-gray-500">Ações</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-sm">João Silva</td>
                    <td className="px-4 py-3 text-sm">joao@email.com</td>
                    <td className="px-4 py-3 text-sm">(11) 99999-9999</td>
                    <td className="px-4 py-3 text-sm">3</td>
                    <td className="px-4 py-3 text-sm font-medium">R$ 597,00</td>
                    <td className="px-4 py-3 text-sm">
                      <button className="text-blue-600 hover:underline">Ver detalhes</button>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-sm">Maria Souza</td>
                    <td className="px-4 py-3 text-sm">maria@email.com</td>
                    <td className="px-4 py-3 text-sm">(11) 88888-8888</td>
                    <td className="px-4 py-3 text-sm">1</td>
                    <td className="px-4 py-3 text-sm font-medium">R$ 129,90</td>
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
                <div className="font-medium">João Silva</div>
                <div className="text-sm text-gray-500 break-all">joao@email.com</div>
                <div className="text-sm text-gray-500">(11) 99999-9999</div>
                <div className="mt-2 flex justify-between text-sm">
                  <div>3 compras</div>
                  <div className="font-medium">R$ 597,00</div>
                </div>
                <div className="mt-3 text-right">
                  <button className="text-blue-600 text-sm hover:underline">Ver detalhes</button>
                </div>
              </div>
              <div className="p-4">
                <div className="font-medium">Maria Souza</div>
                <div className="text-sm text-gray-500 break-all">maria@email.com</div>
                <div className="text-sm text-gray-500">(11) 88888-8888</div>
                <div className="mt-2 flex justify-between text-sm">
                  <div>1 compra</div>
                  <div className="font-medium">R$ 129,90</div>
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
