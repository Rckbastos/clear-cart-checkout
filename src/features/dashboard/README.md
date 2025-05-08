
# Dashboard

O módulo Dashboard é responsável pela interface principal do usuário após a autenticação, exibindo dados e métricas relevantes.

## Componentes

- **DashboardPage**: Página principal que integra todos os elementos do dashboard
- **DashboardHeader**: Header personalizado com informações do usuário e controle de tema
- **DashboardMetrics**: Exibição de métricas-chave em formato de cards

## Funcionalidades

- Exibição de métricas relevantes do usuário
- Visualização de vendas recentes
- Exibição de atividades recentes
- Filtros para diferentes períodos de tempo
- Interface responsiva para diferentes dispositivos

## Layout

O dashboard segue uma estrutura de layout moderna com:

1. **Navegação lateral** (Navbar): Menu de navegação principal
2. **Header superior**: Informações do usuário e controles do sistema
3. **Área de conteúdo**: Métricas, gráficos e tabelas de dados
4. **Blocos de dados**: Separados em seções lógicas para fácil visualização

## Implementação Técnica

- Uso de componentes responsivos com Tailwind CSS
- Tema claro/escuro com preservação de preferência do usuário
- Cards de métricas com rolagem horizontal em dispositivos móveis
- Filtros de período para análise temporal dos dados
