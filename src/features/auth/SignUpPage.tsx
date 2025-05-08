
import React from "react";

export default function SignUpPage() {
  return (
    <div className="container mx-auto p-8 max-w-md">
      <h1 className="text-2xl font-bold mb-6">Criar Conta</h1>
      <div className="space-y-4">
        <p className="text-muted-foreground">
          Esta é uma página de cadastro de exemplo. A implementação real usaria Supabase Auth.
        </p>
        <p>
          <a href="/sign-in" className="text-blue-500 hover:underline">
            Já tem uma conta? Entrar
          </a>
        </p>
      </div>
    </div>
  );
}
