
import React from "react";
import { ArrowLeft } from "lucide-react";

type Props = {
  expanded: boolean;
  onClick: () => void;
};

export function SidebarToggleButton({ 
  expanded, 
  onClick
}: Props) {
  // Floating and neatly styled like "Loja Integrada"
  return (
    <button
      aria-label={expanded ? "Retract sidebar" : "Expand sidebar"}
      className="
        absolute -right-4 top-1/2 -translate-y-1/2 z-30
        rounded-full bg-white border border-gray-200
        shadow-lg p-1 transition-all
        hover:scale-105 hover:bg-gray-50
        flex items-center justify-center
      "
      onClick={onClick}
      type="button"
      style={{
        boxShadow: "0 2px 8px 0 rgba(60, 33, 110, 0.08)",
      }}
    >
      <ArrowLeft 
        size={20} 
        className={`
          text-[#8E9196] transition-transform 
          ${!expanded ? "rotate-180" : ""}
        `}
      />
    </button>
  );
}
