import React from "react";
export function SidebarLogo({
  className = "",
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={`flex items-center justify-center w-full ${className}`} {...props}>
      
    </div>;
}