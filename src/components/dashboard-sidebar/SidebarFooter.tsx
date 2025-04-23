
import React from "react";
import { User, Settings } from "lucide-react";

type Props = {
  expanded: boolean;
  iconColor: string;
  labelColor: string;
  className?: string;
};
export function SidebarFooter({ expanded, iconColor, labelColor, className = "" }: Props) {
  return (
    <div className={`flex flex-col items-center mb-2 w-full gap-1 ${expanded ? "mt-auto px-2" : ""} ${className}`}>
      <button
        className={`flex items-center rounded-lg hover:bg-primary/10 transition p-2 ${
          expanded ? "w-full justify-start gap-3" : "w-10 justify-center"
        }`}
      >
        <User size={22} color={iconColor} />
        {expanded && <span className="text-sm font-medium" style={{ color: labelColor }}>Perfil</span>}
      </button>
      <button
        className={`flex items-center rounded-lg hover:bg-primary/10 transition p-2 ${
          expanded ? "w-full justify-start gap-3" : "w-10 justify-center"
        }`}
      >
        <Settings size={22} color={iconColor} />
        {expanded && <span className="text-sm font-medium" style={{ color: labelColor }}>Configurações</span>}
      </button>
    </div>
  );
}
