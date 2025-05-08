
import React from "react";
import { 
  ShoppingCart, ShoppingBag, CreditCard, Truck, 
  Megaphone, Code, Home
} from "lucide-react";
import { SidebarLogo } from "./SidebarLogo";
import { SidebarToggleButton } from "./SidebarToggleButton";
import { SidebarMenu } from "./SidebarMenu";
import { SidebarFooter } from "./SidebarFooter";

// Map string keys to lucide icons
const iconsMap: Record<string, React.ReactNode> = {
  "home": <Home size={22} />,
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
  const widthClass = expanded ? "w-56" : "w-16";

  return (
    <aside
      className={`hidden md:flex flex-col items-center ${widthClass} py-6 px-2 bg-white/60 dark:bg-gray-800/60 backdrop-blur-xl shadow-[0_4px_32px_0_rgba(80,59,168,0.10)] dark:shadow-[0_4px_32px_0_rgba(0,0,0,0.3)] transition-all duration-300 relative
        ${expanded ? "overflow-visible" : "overflow-hidden"}
        border-r border-[#e5e7eb] dark:border-gray-700
      `}
    >
      {/* Logo fixa (imagem retangular) */}
      <SidebarLogo className="mb-6" />
      {/* Botão de expandir/retrair */}
      <div className="flex items-center relative w-full mb-6 h-12">
        <div className={`flex-1 flex justify-center transition-all`}>
          {/* Você pode colocar a logo menor aqui se desejar duplicar */}
        </div>
        <SidebarToggleButton
          expanded={expanded}
          onClick={() => setExpanded((v) => !v)}
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
        dividerColor="currentColor"
        iconColor="currentColor"
        labelColor="currentColor"
      />
      <SidebarFooter
        expanded={expanded}
        iconColor="currentColor"
        labelColor="currentColor"
      />
    </aside>
  );
}
