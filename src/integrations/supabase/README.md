
# Integração Supabase

Este diretório contém todos os arquivos relacionados à integração com o Supabase, serviço utilizado como backend para autenticação e banco de dados.

## Arquivo Principal

- **client.ts**: Configura e exporta o cliente Supabase utilizado em toda a aplicação

## Funcionalidades

- Autenticação de usuários (login/cadastro)
- Armazenamento e recuperação de dados
- Gerenciamento de sessão
- Segurança com Row Level Security (RLS)

## Configuração

O cliente Supabase é configurado usando variáveis de ambiente:
- `VITE_SUPABASE_URL`: URL da instância do Supabase
- `VITE_SUPABASE_ANON_KEY`: Chave anônima para acesso público

## Uso na Aplicação

O cliente Supabase é importado nos arquivos que necessitam de funcionalidades de backend:

```typescript
import { supabase } from '@/integrations/supabase/client';

// Exemplo de uso para autenticação
async function signIn(email, password) {
  const { data, error } = await supabase.auth.signInWithPassword({ 
    email, 
    password 
  });
  
  // Tratamento de resposta
}
```

## Segurança

A aplicação utiliza as melhores práticas de segurança do Supabase:
- Tokens JWT para autenticação
- Row Level Security para proteção de dados
- Permissões granulares por tabela e operação
