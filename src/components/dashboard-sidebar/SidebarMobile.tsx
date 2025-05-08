
import React from "react";
import {
  ShoppingCart, ShoppingBag, CreditCard, Truck, 
  Megaphone, Code, ChevronRight, ChevronLeft, Home
} from "lucide-react";
import { SidebarLogo } from "./SidebarLogo";
import { SidebarMenu } from "./SidebarMenu";
import { SidebarFooter } from "./SidebarFooter";

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
  const iconColor = "#6E59A5";

  return (
    <>
      {/* Floating open button */}
      {!open && (
        <button
          className="flex md:hidden fixed top-4 left-4 z-50 bg-white/80 dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700 rounded-lg shadow p-2 transition hover:scale-105"
          onClick={() => setOpen(true)}
          aria-label="Abrir menu lateral"
          type="button"
          style={{
            boxShadow: "0 4px 12px 0 rgba(80,59,168,0.08)"
          }}
        >
          <ChevronRight size={26} className="text-[#6E59A5] dark:text-[#9b87f5]" />
        </button>
      )}

      {/* MOBILE SIDEBAR */}
      <aside
        className={`
          fixed z-40 top-0 
          ${open ? "left-0 opacity-100 pointer-events-auto" : "-left-60 opacity-0 pointer-events-none"}
          h-full w-56 bg-white/95 dark:bg-gray-800/95 backdrop-blur-xl shadow-[0_4px_32px_0_rgba(80,59,168,0.10)] dark:shadow-[0_4px_32px_0_rgba(0,0,0,0.3)]
          transition-all duration-300 flex flex-col
          border-r border-gray-200 dark:border-gray-700
        `}
      >
        <div className="flex flex-col h-full">
          {/* Updated logo and app name */}
          <SidebarLogo className="mt-4 mb-2" />
          <div className="flex items-center justify-between p-4 pb-2">
            <button
              className="ml-auto rounded-lg hover:bg-primary/10 p-1 transition"
              aria-label="Fechar menu lateral"
              onClick={() => setOpen(false)}
              type="button"
            >
              <ChevronLeft size={22} className="text-[#6E59A5] dark:text-[#9b87f5]" />
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
            dividerColor="currentColor"
            iconColor="currentColor"
            labelColor="currentColor"
          />
          <SidebarFooter expanded={true} iconColor="currentColor" labelColor="currentColor" className="px-2" />
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
