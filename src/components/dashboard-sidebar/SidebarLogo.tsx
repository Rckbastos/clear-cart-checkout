
import React from "react";

export function SidebarLogo({ className = "", ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={`flex items-center justify-center w-full ${className}`} {...props}>
      <img
        src="/lovable-uploads/0b1d8853-fbe0-4456-be65-cf174fa44094.png"
        alt="Logo"
        className="w-10 h-10 rounded-full mb-3"
      />
    </div>
  );
}
