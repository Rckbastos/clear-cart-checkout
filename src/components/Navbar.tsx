
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  ShoppingCart, ShoppingBag, CreditCard, Truck, 
  Megaphone, Code, Home, ChevronRight, ChevronLeft, ChevronDown, ChevronUp, User, Settings
} from "lucide-react";

// Novo logo fornecido pelo usuário (formato horizontal, sem texto ao lado)
const LOGO_SRC = "/lovable-uploads/36c41d1a-db46-4687-a23d-57da6a0eaa00.png";

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

// Shared menu config for both sidebar views, com rotas
const MENU = [
  {
    key: "inicio",
    icon: "home",
    label: "Início",
    path: "/dashboard",
    collapsible: false,
  },
  {
    key: "pedidos",
    icon: "shopping-bag",
    label: "Pedidos",
    collapsible: true,
    items: [
      { label: "Vendas", path: "/vendas" },
      { label: "Carrinhos abandonados", path: "/carrinhos" },
      { label: "Clientes", path: "/clientes" },
    ],
  },
  {
    key: "produtos",
    icon: "shopping-cart",
    label: "Produtos",
    path: "/produtos",
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

export default function Navbar() {
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

  return (
    <>
      {/* Mobile Sidebar */}
      <>
        {/* Floating open button */}
        {!mobileOpen && (
          <button
            className="flex md:hidden fixed top-4 left-4 z-50 bg-white/80 dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700 rounded-lg shadow p-2 transition hover:scale-105"
            onClick={() => setMobileOpen(true)}
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
            ${mobileOpen ? "left-0 opacity-100 pointer-events-auto" : "-left-60 opacity-0 pointer-events-none"}
            h-full w-56 bg-white/95 dark:bg-gray-800/95 backdrop-blur-xl shadow-[0_4px_32px_0_rgba(80,59,168,0.10)] dark:shadow-[0_4px_32px_0_rgba(0,0,0,0.3)]
            transition-all duration-300 flex flex-col
            border-r border-gray-200 dark:border-gray-700
          `}
        >
          <div className="flex flex-col h-full">
            {/* Updated logo and app name */}
            <div className="flex items-center justify-center w-full px-2 py-2 select-none mt-4 mb-2">
              <img
                src={LOGO_SRC}
                alt="Logo Pegasus Checkout"
                draggable={false}
                className="w-full h-auto max-h-16 object-contain transition-all duration-200"
                style={{
                  maxWidth: "190px",
                  minWidth: 0,
                }}
              />
            </div>
            <div className="flex items-center justify-between p-4 pb-2">
              <button
                className="ml-auto rounded-lg hover:bg-primary/10 p-1 transition"
                aria-label="Fechar menu lateral"
                onClick={() => setMobileOpen(false)}
                type="button"
              >
                <ChevronLeft size={22} className="text-[#6E59A5] dark:text-[#9b87f5]" />
              </button>
            </div>
            
            {/* Menu */}
            <nav className="flex flex-col gap-1 flex-1 w-full">
              {MENU.map((item) => (
                <div key={item.label}>
                  {item.path ? (
                    <Link to={item.path}>
                      <button
                        type="button"
                        className="relative flex items-center w-full h-12 rounded-lg hover:bg-primary/5 group transition px-2 pr-3 justify-start gap-3"
                        aria-expanded={item.collapsible ? !!openSections[item.key] : undefined}
                      >
                        <span>{iconsMap[item.icon]}</span>
                        <span className="text-[15px] font-medium">{item.label}</span>
                        {item.collapsible && (
                          <span className="ml-auto">
                            {openSections[item.key] ? (
                              <ChevronUp size={18} />
                            ) : (
                              <ChevronDown size={18} />
                            )}
                          </span>
                        )}
                      </button>
                    </Link>
                  ) : (
                    <button
                      type="button"
                      className="relative flex items-center w-full h-12 rounded-lg hover:bg-primary/5 group transition px-2 pr-3 justify-start gap-3"
                      onClick={
                        item.collapsible
                          ? () => handleToggleSection(item.key)
                          : undefined
                      }
                      aria-expanded={item.collapsible ? !!openSections[item.key] : undefined}
                    >
                      <span>{iconsMap[item.icon]}</span>
                      <span className="text-[15px] font-medium">{item.label}</span>
                      {item.collapsible && (
                        <span className="ml-auto">
                          {openSections[item.key] ? (
                            <ChevronUp size={18} />
                          ) : (
                            <ChevronDown size={18} />
                          )}
                        </span>
                      )}
                    </button>
                  )}
                  {item.collapsible && openSections[item.key] && item.items && (
                    <ul className="ml-7 border-l pl-3 my-1">
                      {item.items.map((sub) => (
                        <li key={sub.label}>
                          {sub.path ? (
                            <Link to={sub.path}>
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
                            </Link>
                          ) : (
                            <button
                              className="py-1 w-full text-left text-[14px] font-normal text-neutral-500 hover:text-[var(--primary-purple,#7E69AB)] transition"
                              style={{
                                color: "#8E9196",
                                fontWeight: 500,
                              }}
                              type="button"
                              disabled
                            >
                              {sub.label}
                            </button>
                          )}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </nav>
            
            {/* Footer */}
            <div className="flex flex-col items-center mb-2 w-full gap-1 px-2">
              <button
                className="flex items-center rounded-lg hover:bg-primary/10 transition p-2 w-full justify-start gap-3"
              >
                <User size={22} />
                <span className="text-sm font-medium">Perfil</span>
              </button>
              <button
                className="flex items-center rounded-lg hover:bg-primary/10 transition p-2 w-full justify-start gap-3"
              >
                <Settings size={22} />
                <span className="text-sm font-medium">Configurações</span>
              </button>
            </div>
          </div>
        </aside>

        {/* BACKDROP */}
        {mobileOpen && (
          <div
            className="fixed inset-0 z-30 bg-black/20 backdrop-blur-sm transition-opacity md:hidden"
            onClick={() => setMobileOpen(false)}
            aria-label="Fechar menu"
          />
        )}
      </>
      
      {/* Desktop Sidebar */}
      <aside
        className={`hidden md:flex flex-col items-center ${expanded ? "w-56" : "w-16"} py-6 px-2 bg-white/60 dark:bg-gray-800/60 backdrop-blur-xl shadow-[0_4px_32px_0_rgba(80,59,168,0.10)] dark:shadow-[0_4px_32px_0_rgba(0,0,0,0.3)] transition-all duration-300 relative
          ${expanded ? "overflow-visible" : "overflow-hidden"}
          border-r border-[#e5e7eb] dark:border-gray-700
        `}
      >
        {/* Logo fixa (imagem retangular) */}
        <div className={`flex items-center justify-center w-full px-2 py-2 select-none mb-6`}>
          <img
            src={LOGO_SRC}
            alt="Logo Pegasus Checkout"
            draggable={false}
            className="w-full h-auto max-h-16 object-contain transition-all duration-200"
            style={{
              maxWidth: "190px",
              minWidth: 0,
            }}
          />
        </div>
        
        {/* Botão de expandir/retrair */}
        <div className="flex items-center relative w-full mb-6 h-12">
          <div className={`flex-1 flex justify-center transition-all`}>
            {/* Você pode colocar a logo menor aqui se desejar duplicar */}
          </div>
          <button
            aria-label={expanded ? "Retract sidebar" : "Expand sidebar"}
            className="
              absolute -right-4 top-1/2 -translate-y-1/2 z-30
              rounded-full bg-white border border-gray-200
              shadow-lg p-1 transition-all
              hover:scale-105 hover:bg-gray-50
              flex items-center justify-center
            "
            onClick={() => setExpanded((v) => !v)}
            type="button"
            style={{
              boxShadow: "0 2px 8px 0 rgba(60, 33, 110, 0.08)",
            }}
          >
            <ChevronLeft 
              size={20} 
              className={`
                text-[#8E9196] transition-transform 
                ${!expanded ? "rotate-180" : ""}
              `}
            />
          </button>
        </div>
        
        {/* Menu */}
        <nav className="flex flex-col gap-1 flex-1 w-full">
          {MENU.map((item) => (
            <div key={item.label}>
              {item.path ? (
                <Link to={item.path}>
                  <button
                    type="button"
                    className={`relative flex items-center w-full h-12 rounded-lg hover:bg-primary/5 group transition px-2 pr-3 ${
                      expanded ? "justify-start gap-3" : "justify-center"
                    }`}
                    aria-expanded={item.collapsible ? !!openSections[item.key] : undefined}
                  >
                    <span>{iconsMap[item.icon]}</span>
                    {expanded && (
                      <span className="text-[15px] font-medium">{item.label}</span>
                    )}
                    {item.collapsible && expanded && (
                      <span className="ml-auto">
                        {openSections[item.key] ? (
                          <ChevronUp size={18} />
                        ) : (
                          <ChevronDown size={18} />
                        )}
                      </span>
                    )}
                    {!expanded && (
                      <span className="absolute left-14 bg-black text-white text-xs px-2 py-1 rounded-md opacity-0 group-hover:opacity-90 pointer-events-none transition z-10">
                        {item.label}
                      </span>
                    )}
                  </button>
                </Link>
              ) : (
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
                  <span>{iconsMap[item.icon]}</span>
                  {expanded && (
                    <span className="text-[15px] font-medium">{item.label}</span>
                  )}
                  {item.collapsible && expanded && (
                    <span className="ml-auto">
                      {openSections[item.key] ? (
                        <ChevronUp size={18} />
                      ) : (
                        <ChevronDown size={18} />
                      )}
                    </span>
                  )}
                  {!expanded && (
                    <span className="absolute left-14 bg-black text-white text-xs px-2 py-1 rounded-md opacity-0 group-hover:opacity-90 pointer-events-none transition z-10">
                      {item.label}
                    </span>
                  )}
                </button>
              )}
              {item.collapsible && expanded && openSections[item.key] && item.items && (
                <ul className="ml-7 border-l pl-3 my-1">
                  {item.items.map((sub) => (
                    <li key={sub.label}>
                      {sub.path ? (
                        <Link to={sub.path}>
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
                        </Link>
                      ) : (
                        <button
                          className="py-1 w-full text-left text-[14px] font-normal text-neutral-500 hover:text-[var(--primary-purple,#7E69AB)] transition"
                          style={{
                            color: "#8E9196",
                            fontWeight: 500,
                          }}
                          type="button"
                          disabled
                        >
                          {sub.label}
                        </button>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </nav>
        
        {/* Footer */}
        <div className={`flex flex-col items-center mb-2 w-full gap-1 ${expanded ? "mt-auto px-2" : ""}`}>
          <button
            className={`flex items-center rounded-lg hover:bg-primary/10 transition p-2 ${
              expanded ? "w-full justify-start gap-3" : "w-10 justify-center"
            }`}
          >
            <User size={22} />
            {expanded && <span className="text-sm font-medium">Perfil</span>}
          </button>
          <button
            className={`flex items-center rounded-lg hover:bg-primary/10 transition p-2 ${
              expanded ? "w-full justify-start gap-3" : "w-10 justify-center"
            }`}
          >
            <Settings size={22} />
            {expanded && <span className="text-sm font-medium">Configurações</span>}
          </button>
        </div>
      </aside>
    </>
  );
}
