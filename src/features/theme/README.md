
# Tema

Módulo responsável pela aparência visual da aplicação, incluindo modo claro/escuro e personalização.

## Componentes

- **ThemeContext**: Contexto React para gerenciamento de tema
- **ThemeProvider**: Provider que encapsula a aplicação com o contexto de tema
- **ThemeToggle**: Componente para alternar entre modo claro e escuro

## Funcionalidades

- Alternância entre tema claro e escuro
- Persistência da preferência do usuário
- Aplicação automática de estilos conforme o tema selecionado
- Suporte para preferências do sistema operacional

## Implementação Técnica

- Uso da biblioteca next-themes para gerenciamento de temas
- Classes condicionais para estilos via Tailwind CSS
- Transições suaves entre temas
- Armazenamento local da preferência de tema
