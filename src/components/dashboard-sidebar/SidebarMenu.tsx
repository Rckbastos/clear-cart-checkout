import React from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { SidebarSubMenu } from "./SidebarSubMenu";
import { Link } from "react-router-dom";

type MenuItem = {
  key: string;
  icon: React.ReactNode;
  label: string;
  path?: string;
  collapsible?: boolean;
  items?: { label: string; path?: string }[];
};
type Props = {
  menu: MenuItem[];
  expanded: boolean;
  openSections: { [key: string]: boolean };
  handleToggleSection: (section: string) => void;
  dividerColor: string;
  iconColor: string;
  labelColor: string;
};

export function SidebarMenu({
  menu,
  expanded,
  openSections,
  handleToggleSection,
  dividerColor,
  iconColor,
  labelColor,
}: Props) {
  return (
    <nav className="flex flex-col gap-1 flex-1 w-full">
      {menu.map((item) => (
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
          )}
          {item.collapsible && expanded && openSections[item.key] && item.items && (
            <SidebarSubMenu items={item.items} dividerColor={dividerColor} />
          )}
        </div>
      ))}
    </nav>
  );
}
