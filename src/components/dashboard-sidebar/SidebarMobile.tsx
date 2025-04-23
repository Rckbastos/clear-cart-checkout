
import React from "react";
import {
  ShoppingCart, ShoppingBag, CreditCard, Truck, 
  Megaphone, Code, ChevronRight, ChevronLeft
} from "lucide-react";
import { SidebarLogo } from "./SidebarLogo";
import { SidebarMenu } from "./SidebarMenu";
import { SidebarFooter } from "./SidebarFooter";

const iconsMap: Record<string, React.ReactNode> = {
  "shopping-bag": <ShoppingBag size={22} />,
  "shopping-cart": <ShoppingCart size={22} />,
  "credit-card": <CreditCard size={22} />,
  "truck": <Truck size={22} />,
  "megaphone": <Megaphone size={22} />,
  "code": <Code size={22} />,
};

type Props = {
  open: boolean;
  setOpen: (open: boolean) => void;
  menu: any[];
  openSections: { [key: string]: boolean };
  handleToggleSection: (key: string) => void;
};

export function SidebarMobile({
  open,
  setOpen,
  menu,
  openSections,
  handleToggleSection,
}: Props) {
  const dividerColor = "#e5e7eb";
  const iconColor = "#6E59A5";
  const labelColor = "#1A1F2C";

  // Responsive: Floating open button (hidden when sidebar open)
  return (
    <>
      {/* BUTTON: Floating trigger when sidebar closed */}
      {!open && (
        <button
          className="flex md:hidden fixed top-4 left-4 z-50 bg-white/80 border border-gray-200 rounded-lg shadow p-2 transition hover:scale-105"
          onClick={() => setOpen(true)}
          aria-label="Abrir menu lateral"
          type="button"
          style={{
            boxShadow: "0 4px 12px 0 rgba(80,59,168,0.08)"
          }}
        >
          <ChevronRight size={26} color={iconColor} />
        </button>
      )}

      {/* MOBILE SIDEBAR (animated sliding) */}
      <aside
        className={`
          fixed z-40 top-0 
          ${open ? "left-0 opacity-100 pointer-events-auto" : "-left-60 opacity-0 pointer-events-none"}
          h-full w-56 bg-white/95 backdrop-blur-xl shadow-[0_4px_32px_0_rgba(80,59,168,0.10)] 
          transition-all duration-300 flex flex-col
        `}
        style={{ borderRight: `1px solid ${dividerColor}` }}
      >
        <div className="flex flex-col h-full">
          {/* Top bar (logo + close button) */}
          <div className="flex items-center justify-between p-4 pb-2">
            <SidebarLogo />
            <button
              className="ml-auto rounded-lg hover:bg-primary/10 p-1 transition"
              aria-label="Fechar menu lateral"
              onClick={() => setOpen(false)}
              type="button"
            >
              <ChevronLeft size={22} color={iconColor} />
            </button>
          </div>
          <SidebarMenu
            menu={menu.map((item) => ({
              ...item,
              icon: iconsMap[item.icon] ?? null,
            }))}
            expanded={true}
            openSections={openSections}
            handleToggleSection={handleToggleSection}
            dividerColor={dividerColor}
            iconColor={iconColor}
            labelColor={labelColor}
          />
          <SidebarFooter expanded={true} iconColor={iconColor} labelColor={labelColor} className="px-2" />
        </div>
      </aside>

      {/* BACKDROP */}
      {open && (
        <div
          className="fixed inset-0 z-30 bg-black/20 backdrop-blur-sm transition-opacity md:hidden"
          onClick={() => setOpen(false)}
          aria-label="Fechar menu"
        />
      )}
    </>
  );
}
