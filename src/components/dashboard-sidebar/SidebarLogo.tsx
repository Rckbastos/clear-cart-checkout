
import React from "react";

// Novo logo fornecido pelo usuário (formato horizontal, sem texto ao lado)
const LOGO_SRC = "/public/lovable-uploads/36c41d1a-db46-4687-a23d-57da6a0eaa00.png";

export function SidebarLogo({
  className = "",
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={`flex items-center justify-center w-full px-2 py-2 select-none ${className}`}
      {...props}
    >
      <img
        src={LOGO_SRC}
        alt="Logo Pegasus Checkout"
        draggable={false}
        className="w-full h-auto max-h-16 object-contain transition-all duration-200"
        style={{
          maxWidth: "190px",
          minWidth: 0,
        }}
      />
    </div>
  );
}
