
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "@/components/ui/sonner";
import { supabase } from "@/integrations/supabase/client";

export default function SignUpPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const { error } = await supabase.auth.signUp({ email, password });
    setLoading(false);
    if (error) {
      toast.error(error.message || "Erro ao criar conta. Tente novamente.");
    } else {
      toast.success("Cadastro realizado! Verifique seu e-mail para confirmar.");
      navigate("/sign-in");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-[#ece7fe] to-[#D6BCFA]">
      <Card className="max-w-md w-full">
        <CardHeader>
          <CardTitle className="text-2xl mb-2 text-center">Criar conta</CardTitle>
          <p className="text-sm text-gray-500 text-center">Acesse sua dashboard Pegasus</p>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <Input
              type="email"
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              autoFocus
            />
            <Input
              type="password"
              placeholder="Senha (mín. 6 caracteres)"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              minLength={6}
              required
            />
            <Button type="submit" disabled={loading}>
              {loading ? "Enviando..." : "Cadastrar"}
            </Button>
          </form>
          <div className="text-xs text-gray-500 text-center mt-4">
            Já possui conta?{" "}
            <Link to="/sign-in" className="underline text-[#6E59A5] hover:text-[#9b87f5] transition">Entrar</Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
