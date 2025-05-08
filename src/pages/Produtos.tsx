
import React from "react";
import DashboardSidebar from "@/components/DashboardSidebar";
import DashboardHeader from "@/components/DashboardHeader";
import { PlusCircle, SlidersHorizontal, Search } from "lucide-react";

export default function Produtos() {
  return (
    <div className="flex min-h-screen bg-[#f7f8fa]">
      <DashboardSidebar />
      <div className="flex-1 flex flex-col min-h-screen">
        <DashboardHeader />
        <main className="flex-1 p-4 md:p-6 lg:p-8 bg-[#f7f8fa]">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div>
              <h1 className="text-xl md:text-2xl font-bold text-gray-800">Produtos</h1>
              <p className="text-sm md:text-base text-gray-500">Gerencie todos os seus produtos</p>
            </div>
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md flex items-center justify-center gap-2 transition-colors w-full md:w-auto">
              <PlusCircle size={18} />
              <span>Adicionar produto</span>
            </button>
          </div>
          
          {/* Filtros responsivos */}
          <div className="mb-4 bg-white p-3 md:p-4 rounded-lg shadow-sm">
            <div className="flex flex-col md:flex-row md:items-center gap-3 justify-between">
              <div className="flex flex-wrap gap-2 w-full md:w-auto">
                <div className="relative flex-1 md:flex-none">
                  <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input 
                    type="text" 
                    placeholder="Buscar produto..." 
                    className="pl-10 pr-3 py-1.5 text-sm border border-gray-200 rounded-md w-full"
                  />
                </div>
                <button className="px-3 py-1.5 border border-gray-200 rounded-md text-sm flex items-center gap-1">
                  <SlidersHorizontal size={16} />
                  <span>Filtrar</span>
                </button>
              </div>
              <div className="flex items-center gap-2 md:mt-0">
                <select className="px-3 py-1.5 text-sm border border-gray-200 rounded-md bg-white">
                  <option>Ordenar por</option>
                  <option>Mais vendidos</option>
                  <option>Mais recentes</option>
                  <option>Menor preço</option>
                  <option>Maior preço</option>
                </select>
              </div>
            </div>
          </div>
          
          {/* Grid de produtos responsivos */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100 hover:shadow-md transition-shadow">
                <div className="aspect-video bg-gray-100 flex items-center justify-center">
                  <span className="text-gray-400 text-sm">Imagem do produto</span>
                </div>
                <div className="p-4">
                  <h3 className="font-medium text-gray-800">Produto exemplo #{item}</h3>
                  <div className="mt-1 flex items-center justify-between">
                    <span className="text-sm text-gray-500">SKU: PRD-{item}00{item}</span>
                    <span className="font-bold text-purple-600">R$ {79 + item * 10},90</span>
                  </div>
                  <div className="mt-3 flex justify-between items-center">
                    <span className="inline-flex items-center rounded-full bg-green-50 px-2 py-1 text-xs font-medium text-green-700">
                      Ativo
                    </span>
                    <span className="text-sm text-gray-500">Estoque: {item * 5}</span>
                  </div>
                  <div className="mt-4 grid grid-cols-2 gap-2">
                    <button className="px-3 py-1.5 bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm rounded-md transition-colors">
                      Editar
                    </button>
                    <button className="px-3 py-1.5 bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 text-sm rounded-md transition-colors">
                      Duplicar
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Paginação responsiva */}
          <div className="mt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="text-sm text-gray-500 order-2 sm:order-1">Mostrando 1-6 de 6 resultados</div>
            <div className="flex gap-2 order-1 sm:order-2">
              <button className="px-3 py-1.5 bg-white border border-gray-200 rounded-md text-sm" disabled>Anterior</button>
              <button className="px-3 py-1.5 bg-white border border-gray-200 rounded-md text-sm" disabled>Próximo</button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
