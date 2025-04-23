import React from "react";

// Altere o src para a imagem da sua empresa abaixo
const LOGO_SRC = "/public/placeholder.svg"; // Exemplo: /public/placeholder.svg

export function SidebarLogo({
  className = "",
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={`flex items-center justify-center w-full px-2 py-0 ${className}`} {...props}>
      <img src={LOGO_SRC} alt="Logo da empresa" draggable={false} className="w-full max-h-14 object-fill" />
    </div>;
}