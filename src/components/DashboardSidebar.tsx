
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

  return (
    <aside
      className={`hidden md:flex flex-col items-center ${
        expanded ? "w-56" : "w-16"
      } py-6 px-2 bg-white/60 backdrop-blur-xl shadow-[0_4px_32px_0_rgba(80,59,168,0.10)] transition-all duration-300 relative`}
      style={{ borderRight: `1px solid ${dividerColor}` }}
    >
      {/* Toggle button always fixed at the top right edge */}
      <button
        aria-label={expanded ? "Retract sidebar" : "Expand sidebar"}
        className="absolute top-4 right-3 z-20 rounded-lg hover:bg-primary/10 p-1 transition"
        onClick={() => setExpanded((e) => !e)}
        type="button"
      >
        {expanded ? (
          <ChevronLeft size={22} color={iconColor} />
        ) : (
          <ChevronRight size={22} color={iconColor} />
        )}
      </button>
      <div className="mb-6 flex flex-col items-center w-full">
        <div className={`flex items-center w-full justify-center`}>
          <img
            src="/lovable-uploads/0b1d8853-fbe0-4456-be65-cf174fa44094.png"
            alt="Logo"
            className="w-10 h-10 rounded-full mb-3"
          />
        </div>
      </div>
      <nav className="flex flex-col gap-1 flex-1 w-full">
        {MENU.map((item) => (
          <div key={item.label}>
            <button
              type="button"
              className={`relative flex items-center w-full h-12 rounded-lg hover:bg-primary/5 group transition px-2 pr-3 ${
                expanded ? "justify-start gap-3" : "justify-center"
              }`}
              onClick={
                item.collapsible && expanded
                  ? () => handleToggleSection(item.key)
                  : undefined
              }
              aria-expanded={item.collapsible ? !!openSections[item.key] : undefined}
            >
              <span style={{ color: iconColor }}>{item.icon}</span>
              {expanded && (
                <span className="text-[15px] font-medium" style={{ color: labelColor }}>
                  {item.label}
                </span>
              )}
              {item.collapsible && expanded && (
                <span className="ml-auto">
                  {openSections[item.key] ? (
                    <ChevronUp size={18} color={iconColor} />
                  ) : (
                    <ChevronDown size={18} color={iconColor} />
                  )}
                </span>
              )}
              {!expanded && (
                <span className="absolute left-14 bg-black text-white text-xs px-2 py-1 rounded-md opacity-0 group-hover:opacity-90 pointer-events-none transition z-10">
                  {item.label}
                </span>
              )}
            </button>
            {/* Submenu */}
            {item.collapsible && expanded && openSections[item.key] && (
              <ul className="ml-7 border-l pl-3 my-1" style={{ borderColor: dividerColor }}>
                {item.items?.map((sub) => (
                  <li key={sub.label}>
                    <button
                      className="py-1 w-full text-left text-[14px] font-normal text-neutral-500 hover:text-[var(--primary-purple,#7E69AB)] transition"
                      style={{
                        color: "#8E9196",
                        fontWeight: 500,
                      }}
                      type="button"
                    >
                      {sub.label}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </nav>
      <div className="mt-auto flex flex-col items-center mb-2 w-full gap-1">
        <button
          className={`flex items-center rounded-lg hover:bg-primary/10 transition p-2 ${expanded ? "w-full justify-start gap-3" : "w-10 justify-center"}`}
        >
          <User size={22} color={iconColor} />
          {expanded && <span className="text-sm font-medium" style={{ color: labelColor }}>Perfil</span>}
        </button>
        <button
          className={`flex items-center rounded-lg hover:bg-primary/10 transition p-2 ${expanded ? "w-full justify-start gap-3" : "w-10 justify-center"}`}
        >
          <Settings size={22} color={iconColor} />
          {expanded && <span className="text-sm font-medium" style={{ color: labelColor }}>Configurações</span>}
        </button>
      </div>
    </aside>
  );
}
