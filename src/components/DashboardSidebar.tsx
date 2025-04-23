import React, { useState } from "react";
import {
  ShoppingCart,
  ShoppingBag,
  Wallet,
  BarChart,
  Layers,
  Settings,
  User,
  Megaphone,
  CreditCard,
  Truck,
  ChevronDown,
  ChevronUp,
  Code,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { SidebarLogo } from "./dashboard-sidebar/SidebarLogo";
import { SidebarToggleButton } from "./dashboard-sidebar/SidebarToggleButton";
import { SidebarMenu } from "./dashboard-sidebar/SidebarMenu";
import { SidebarFooter } from "./dashboard-sidebar/SidebarFooter";

const MENU = [
  {
    key: "pedidos",
    icon: <ShoppingBag size={22} />,
    label: "Pedidos",
    collapsible: true,
    items: [
      { label: "Vendas" },
      { label: "Carrinhos abandonados" },
      { label: "Clientes" },
    ],
  },
  {
    key: "produtos",
    icon: <ShoppingCart size={22} />,
    label: "Produtos",
    collapsible: false,
  },
  {
    key: "marketing",
    icon: <Megaphone size={22} />,
    label: "Marketing",
    collapsible: true,
    items: [
      { label: "Cupons" },
      { label: "Faixa de Desconto" },
      { label: "Order Bump" },
      { label: "Pixels" },
      { label: "Upsell" },
    ],
  },
  {
    key: "gateways",
    icon: <CreditCard size={22} />,
    label: "Gateways",
    collapsible: false,
  },
  {
    key: "fretes",
    icon: <Truck size={22} />,
    label: "Fretes",
    collapsible: false,
  },
  {
    key: "checkout",
    icon: <Code size={22} />,
    label: "Checkout",
    collapsible: true,
    items: [
      { label: "Descontos" },
      { label: "Personalizar" },
      { label: "Provas sociais" },
      { label: "Redirecionamento" },
    ],
  },
];

export default function DashboardSidebar() {
  const [expanded, setExpanded] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>({
    pedidos: true,
    marketing: false,
    checkout: false,
  });

  function handleToggleSection(section: string) {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  }

  // Colors for styling: gray line, icon, label.
  const dividerColor = "#e5e7eb"; // tailwind gray-200
  const iconColor = "#6E59A5"; // Tertiary purple
  const labelColor = "#1A1F2C"; // dark | "#8E9196" for light gray

  // Sidebar width for breakpoints
  const widthDesktop = expanded ? "w-56" : "w-16";
  // Hide on mobile until open
  const sidebarMobileClass =
    mobileOpen
      ? "fixed z-40 top-0 left-0 h-full w-56 bg-white/95 backdrop-blur-xl shadow-[0_4px_32px_0_rgba(80,59,168,0.10)] transition-all duration-300 flex flex-col"
      : "fixed z-40 top-0 -left-60 h-full w-56 bg-white/95 pointer-events-none opacity-0 transition-all duration-300";

  return (
    <>
      {/* MOBILE: floating button to open sidebar */}
      <button
        className="flex md:hidden fixed top-4 left-4 z-50 bg-white/80 border border-gray-200 rounded-lg shadow p-2 transition hover:scale-105"
        onClick={() => setMobileOpen(true)}
        aria-label="Abrir menu lateral"
        type="button"
        style={{
          boxShadow: "0 4px 12px 0 rgba(80,59,168,0.08)",
        }}
      >
        <ChevronRight size={26} color={iconColor} />
      </button>

      {/* MOBILE SIDEBAR (overlay style) */}
      <aside className={sidebarMobileClass} style={{ borderRight: `1px solid ${dividerColor}` }}>
        <div className="flex flex-col h-full">
          {/* Top bar (logo + close button) */}
          <div className="flex items-center justify-between p-4 pb-2">
            <SidebarLogo />
            <button
              className="ml-auto rounded-lg hover:bg-primary/10 p-1 transition"
              aria-label={mobileOpen ? "Fechar menu lateral" : "Abrir menu lateral"}
              onClick={() => setMobileOpen(false)}
              type="button"
            >
              <ChevronLeft size={22} color={iconColor} />
            </button>
          </div>
          <SidebarMenu
            menu={MENU}
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

      {/* BACKDROP for mobile */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/20 backdrop-blur-sm transition-opacity md:hidden"
          onClick={() => setMobileOpen(false)}
          aria-label="Fechar menu"
        />
      )}

      {/* DESKTOP SIDEBAR */}
      <aside
        className={`hidden md:flex flex-col items-center ${widthDesktop} py-6 px-2 bg-white/60 backdrop-blur-xl shadow-[0_4px_32px_0_rgba(80,59,168,0.10)] transition-all duration-300 relative`}
        style={{ borderRight: `1px solid ${dividerColor}` }}
      >
        {/* Logo and toggle button container */}
        <div className="flex items-center justify-between w-full mb-6 relative">
          <SidebarLogo />
          <SidebarToggleButton
            expanded={expanded}
            onClick={() => setExpanded((e) => !e)}
            iconColor={iconColor}
            className="absolute top-0 right-0"
          />
        </div>
        <SidebarMenu
          menu={MENU}
          expanded={expanded}
          openSections={openSections}
          handleToggleSection={handleToggleSection}
          dividerColor={dividerColor}
          iconColor={iconColor}
          labelColor={labelColor}
        />
        <SidebarFooter expanded={expanded} iconColor={iconColor} labelColor={labelColor} />
      </aside>
    </>
  );
}
