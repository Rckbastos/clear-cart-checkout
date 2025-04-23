
import React from "react";
import { Link } from "react-router-dom";

type SubmenuProps = {
  items: { label: string; path?: string }[];
  dividerColor: string;
};
export function SidebarSubMenu({ items, dividerColor }: SubmenuProps) {
  return (
    <ul className="ml-7 border-l pl-3 my-1" style={{ borderColor: dividerColor }}>
      {items.map((sub) => (
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
  );
}
