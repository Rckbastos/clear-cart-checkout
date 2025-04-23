
import React from "react";

// Novo logo horizontal fornecido pelo usuário
const LOGO_SRC = "/public/lovable-uploads/abd06c94-adaa-4639-907e-08ee7ef02145.png";

export function SidebarLogo({
  className = "",
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={`flex items-center justify-center w-full px-2 py-1 select-none ${className}`}
      {...props}
    >
      <img
        src={LOGO_SRC}
        alt="Logo Pegasus Checkout"
        draggable={false}
        className="w-full h-auto max-h-16 object-contain transition-all duration-200"
        style={{
          // Maximiza a largura mas limita altura para evitar quebra no mobile, mantém bom aspecto no desktop
          maxWidth: "190px",
          minWidth: 0,
        }}
      />
    </div>
  );
}
