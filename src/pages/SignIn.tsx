
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "@/components/ui/sonner";
import { supabase } from "@/lib/utils"; // assumes supabase client is exported here

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    setLoading(false);
    if (error) {
      toast.error(error.message || "Erro ao entrar. Verifique seu e-mail e senha.");
    } else {
      toast.success("Login realizado com sucesso!");
      navigate("/dashboard");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-[#ece7fe] to-[#D6BCFA]">
      <Card className="max-w-md w-full">
        <CardHeader>
          <CardTitle className="text-2xl mb-2 text-center">Entrar</CardTitle>
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
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <Button type="submit" disabled={loading}>
              {loading ? "Entrando..." : "Entrar"}
            </Button>
          </form>
          <div className="text-xs text-gray-500 text-center mt-4">
            Ainda não possui conta?{" "}
            <Link to="/sign-up" className="underline text-[#6E59A5] hover:text-[#9b87f5] transition">Criar conta</Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SignIn;

