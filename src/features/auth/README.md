
# Autenticação

Este módulo gerencia toda a funcionalidade relacionada à autenticação dos usuários na aplicação.

## Componentes

- **SignInPage**: Página de login que permite aos usuários acessarem suas contas
- **SignUpPage**: Página de cadastro para novos usuários
- **useAuthGuard**: Hook para proteger rotas autenticadas

## Fluxo de Autenticação

1. O usuário acessa a página de login ou cadastro
2. Após autenticação bem-sucedida, os tokens são armazenados pelo Supabase
3. O hook useAuthGuard verifica a existência da sessão em rotas protegidas
4. Se não houver sessão válida, o usuário é redirecionado para a página de login
5. O estado de autenticação é mantido através do listener onAuthStateChange do Supabase

## Funcionalidades

- Login com email e senha
- Cadastro de novos usuários
- Redirecionamento automático para dashboard após login
- Proteção de rotas que requerem autenticação
- Feedback visual para erros de autenticação

## Implementação Técnica

A autenticação é implementada usando o cliente Supabase com as seguintes funções:

- `signInWithPassword`: Para login de usuários
- `signUp`: Para registro de novos usuários
- `getSession`: Para verificar sessão atual no carregamento da página
- `onAuthStateChange`: Para manter o estado de autenticação sincronizado
