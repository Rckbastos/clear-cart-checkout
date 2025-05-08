
import React from "react";
import DashboardHeader from "@/components/DashboardHeader";
import DashboardMetrics from "@/components/DashboardMetrics";
import Navbar from "@/components/Navbar";

export default function DashboardPage() {
  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-900">
      {/* Sidebar */}
      <Navbar />
      
      {/* Main content */}
      <div className="flex flex-col flex-1 overflow-hidden">
        <DashboardHeader />
        
        <div className="flex-1 overflow-auto p-4">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
            <DashboardMetrics />
            
            {/* Conteúdo principal do dashboard */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              <div className="lg:col-span-2 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
                <h2 className="text-lg font-semibold mb-4">Vendas Recentes</h2>
                {/* Conteúdo do gráfico ou tabela de vendas recentes */}
                <div className="h-64 bg-gray-100 dark:bg-gray-700 rounded flex items-center justify-center">
                  <p className="text-gray-500 dark:text-gray-400">Gráfico de Vendas</p>
                </div>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
                <h2 className="text-lg font-semibold mb-4">Atividades Recentes</h2>
                {/* Lista de atividades recentes */}
                <div className="space-y-3">
                  {[1, 2, 3, 4, 5].map((item) => (
                    <div key={item} className="flex items-center p-2 border-b dark:border-gray-700">
                      <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-600 mr-3"></div>
                      <div>
                        <p className="text-sm font-medium">Ação #{item}</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">Há {item} hora(s)</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
