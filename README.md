
# Clear Cart Checkout

Este projeto é uma aplicação web para gestão e visualização de contas de usuário, utilizando tecnologias modernas para uma experiência fluida e responsiva.

## Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para construção de interfaces
- **TypeScript**: Adiciona tipagem estática ao JavaScript
- **Vite**: Ferramenta de build rápida para desenvolvimento moderno
- **Tailwind CSS**: Framework CSS utilitário
- **shadcn/ui**: Componentes de UI reutilizáveis
- **Supabase**: Backend as a Service para autenticação e banco de dados
- **React Router**: Gerenciamento de rotas na aplicação
- **React Query**: Biblioteca para gerenciamento de estado de dados

## Estrutura do Projeto

Este projeto segue a arquitetura Feature-Sliced Design (FSD), organizando o código por funcionalidades em vez de tipos técnicos.

### Principais Diretórios

- **src/features/**: Contém todas as funcionalidades específicas do negócio
  - **auth/**: Autenticação e controle de acesso
  - **dashboard/**: Interface principal do dashboard
  - **products/**: Gerenciamento de produtos
  - **carts/**: Gerenciamento de carrinhos
  - **sales/**: Processamento e análise de vendas
  - **customers/**: Gerenciamento de clientes
  - **theme/**: Configurações de tema da aplicação

- **src/components/**: Contém componentes reutilizáveis
  - **ui/**: Componentes de interface da biblioteca shadcn/ui
  - **common/**: Componentes globais e páginas comuns

- **src/integrations/**: Interfaces com serviços externos
  - **supabase/**: Cliente e utilitários para o Supabase

- **src/lib/**: Utilitários e funções auxiliares

### Fluxo de Autenticação

O sistema implementa autenticação com Supabase:
1. Usuários podem se registrar com email/senha na página de cadastro
2. Após o login bem-sucedido, o usuário é redirecionado para o dashboard
3. Rotas protegidas são guardadas pelo hook useAuthGuard
4. O estado de autenticação é sincronizado com o Supabase usando onAuthStateChange

### Visualização de Dados do Usuário

O dashboard apresenta:
- Métricas relevantes do usuário
- Gráficos e dados analíticos
- Interface adaptativa para diferentes dispositivos

## Como Executar o Projeto

```bash
# Instalar dependências
npm install

# Executar em ambiente de desenvolvimento
npm run dev
```

## Variáveis de Ambiente

Crie um arquivo .env na raiz do projeto com as seguintes variáveis:

```
VITE_SUPABASE_URL=sua_url_do_supabase
VITE_SUPABASE_ANON_KEY=sua_chave_anon_do_supabase
```
