
import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Props = {
  expanded: boolean;
  onClick: () => void;
  iconColor: string;
  className?: string;
};
export function SidebarToggleButton({ expanded, onClick, iconColor, className = "", ...props }: Props) {
  return (
    <button
      aria-label={expanded ? "Retract sidebar" : "Expand sidebar"}
      className={`z-20 rounded-lg hover:bg-primary/10 p-1 transition ${className}`}
      onClick={onClick}
      type="button"
      {...props}
    >
      {expanded ? (
        <ChevronLeft size={22} color={iconColor} />
      ) : (
        <ChevronRight size={22} color={iconColor} />
      )}
    </button>
  );
}
