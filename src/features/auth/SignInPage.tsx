
import React from "react";

export default function SignInPage() {
  return (
    <div className="container mx-auto p-8 max-w-md">
      <h1 className="text-2xl font-bold mb-6">Entrar</h1>
      <div className="space-y-4">
        <p className="text-muted-foreground">
          Esta é uma página de login de exemplo. A implementação real usaria Supabase Auth.
        </p>
        <p>
          <a href="/dashboard" className="text-blue-500 hover:underline">
            Ir para o Dashboard (simulando login)
          </a>
        </p>
      </div>
    </div>
  );
}
