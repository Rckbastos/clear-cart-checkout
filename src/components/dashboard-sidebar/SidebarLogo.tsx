
import React from "react";

// Use the provided static logo (not editable)
const LOGO_SRC = "/public/lovable-uploads/f4e7ca0f-2401-44c7-836e-576b1a7ca692.png";

export function SidebarLogo({
  className = "",
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  // Use responsive design: horizontal layout normally, column on very narrow screens
  return (
    <div
      className={`flex items-center gap-2 w-full px-2 py-0 select-none ${className}`}
      {...props}
    >
      <img
        src={LOGO_SRC}
        alt="Logo da Pegasus Checkout"
        draggable={false}
        className="h-10 w-auto max-w-[48px] object-contain transition-all duration-200"
      />
      {/* Show name for md and up, show on mobile if sidebar is expanded */}
      <span
        className="text-xl font-bold text-[#6E59A5] tracking-tight whitespace-nowrap"
        style={{
          fontFamily: "inherit",
          letterSpacing: ".02em",
        }}
      >
        Pegasus Checkout
      </span>
    </div>
  );
}
