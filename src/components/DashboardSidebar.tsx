import React, { useState } from "react";
import { SidebarDesktop } from "./dashboard-sidebar/SidebarDesktop";
import { SidebarMobile } from "./dashboard-sidebar/SidebarMobile";
import { StoreImageUpload } from "./dashboard-sidebar/StoreImageUpload";

// Shared menu config for both sidebar views
const MENU = [
  {
    key: "inicio",
    icon: "home",
    label: "Início",
    collapsible: false,
  },
  {
    key: "pedidos",
    icon: "shopping-bag",
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
    icon: "shopping-cart",
    label: "Produtos",
    collapsible: false,
  },
  {
    key: "marketing",
    icon: "megaphone",
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
    icon: "credit-card",
    label: "Gateways",
    collapsible: false,
  },
  {
    key: "fretes",
    icon: "truck",
    label: "Fretes",
    collapsible: false,
  },
  {
    key: "checkout",
    icon: "code",
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
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  function handleToggleSection(section: string) {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  }

  return (
    <>
      {/* Mobile Sidebar */}
      <SidebarMobile
        open={mobileOpen}
        setOpen={setMobileOpen}
        menu={MENU}
        openSections={openSections}
        handleToggleSection={handleToggleSection}
        imageUrl={imageUrl}
        setImageUrl={setImageUrl}
      />

      {/* Desktop Sidebar */}
      <SidebarDesktop
        expanded={expanded}
        setExpanded={setExpanded}
        menu={MENU}
        openSections={openSections}
        handleToggleSection={handleToggleSection}
        imageUrl={imageUrl}
        setImageUrl={setImageUrl}
      />
    </>
  );
}
