
import React from "react";
import { 
  ShoppingCart, ShoppingBag, CreditCard, Truck, 
  Megaphone, Code 
} from "lucide-react";
import { SidebarLogo } from "./SidebarLogo";
import { SidebarToggleButton } from "./SidebarToggleButton";
import { SidebarMenu } from "./SidebarMenu";
import { SidebarFooter } from "./SidebarFooter";

// Map string keys to lucide icons
const iconsMap: Record<string, React.ReactNode> = {
  "shopping-bag": <ShoppingBag size={22} />,
  "shopping-cart": <ShoppingCart size={22} />,
  "credit-card": <CreditCard size={22} />,
  "truck": <Truck size={22} />,
  "megaphone": <Megaphone size={22} />,
  "code": <Code size={22} />,
};

type Props = {
  expanded: boolean;
  setExpanded: (fn: (v: boolean) => boolean) => void;
  menu: any[];
  openSections: { [key: string]: boolean };
  handleToggleSection: (key: string) => void;
};

export function SidebarDesktop({
  expanded,
  setExpanded,
  menu,
  openSections,
  handleToggleSection,
}: Props) {
  // Styling
  const dividerColor = "#e5e7eb";
  const iconColor = "#6E59A5";
  const labelColor = "#1A1F2C";
  const widthClass = expanded ? "w-56" : "w-16";

  // Smoother width/opacity transition for improved retract/expand
  // We'll also use `overflow-hidden` to mask content when collapsed (required for animation tricks)
  return (
    <aside
      className={`hidden md:flex flex-col items-center ${widthClass} py-6 px-2 bg-white/60 backdrop-blur-xl shadow-[0_4px_32px_0_rgba(80,59,168,0.10)] transition-all duration-300 relative
        ${expanded ? "overflow-visible" : "overflow-hidden"}
      `}
      style={{ borderRight: `1px solid ${dividerColor}` }}
    >
      {/* Logo and Toggle Button */}
      <div className="flex items-center relative w-full mb-6 h-12">
        <div className={`flex-1 flex justify-center transition-all`}>
          <SidebarLogo className={expanded ? "" : "scale-90 transition-all"} />
        </div>
        {/* Toggle button always visible, smooth margin transition */}
        <SidebarToggleButton
          expanded={expanded}
          onClick={() => setExpanded((v) => !v)}
          iconColor={iconColor}
          className={`
            absolute right-0 top-1/2 -translate-y-1/2
            ${!expanded ? "shadow-sm bg-white/80 border border-gray-200" : ""}
            transition-all duration-300
          `}
        />
      </div>
      <SidebarMenu
        menu={menu.map((item) => ({
          ...item,
          icon: iconsMap[item.icon] ?? null,
        }))}
        expanded={expanded}
        openSections={openSections}
        handleToggleSection={handleToggleSection}
        dividerColor={dividerColor}
        iconColor={iconColor}
        labelColor={labelColor}
      />
      <SidebarFooter
        expanded={expanded}
        iconColor={iconColor}
        labelColor={labelColor}
      />
    </aside>
  );
}
