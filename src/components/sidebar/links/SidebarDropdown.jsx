// components/links/SidebarDropdown.tsx
import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { ChevronRight } from "lucide-react";

export default function SidebarDropdown({
    label,
    icon: Icon,
    children,
    collapsed,
}) {
    const location = useLocation();

    const isChildActive = children.some((c) =>
        location.pathname.startsWith(c.id)
    );

    const [open, setOpen] = useState(isChildActive);

    useEffect(() => {
        if (isChildActive) setOpen(true);
    }, [isChildActive]);

    const toggle = () => {
        if (!collapsed) setOpen(!open);
    };

    return (
        <div>
            {/* HEADER */}
            <button
                onClick={toggle}
                className={`
          flex items-center w-full px-4 py-3 outline-none rounded-xl
          transition-all duration-200
          ${collapsed ? "justify-center" : "gap-3"}
          ${isChildActive ? "text-white bg-blue-600" : "text-gray-700 hover:bg-blue-50/40 hover:text-blue-500"}
        `}
            >
                {/* ICON — fixed size */}
                <Icon className="w-5 h-5 text-current shrink-0" />

                {/* Label */}
                {!collapsed && (
                    <span className="text-sm font-semibold transition-all duration-200">
                        {label}
                    </span>
                )}

                {/* Arrow */}
                {!collapsed && (
                    <ChevronRight
                        className={`
              w-4 h-4 ml-auto transition-transform duration-300 shrink-0
              ${open ? "rotate-90" : "rotate-0"}
            `}
                    />
                )}
            </button>

            {/* CHILDREN */}
            {!collapsed && (
                <div
                    className={`
            overflow-hidden transition-all duration-300
            ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
          `}
                >
                    {children.map((item) => {
                        const ChildIcon = item.icon;
                        return (
                            <NavLink
                                key={item.id}
                                to={item.id}
                                className={({ isActive }) =>
                                    `
                  flex items-center gap-2 rounded-xl px-4 py-3 my-1 text-sm pr-4 transition-all duration-200
                  ${isActive ? "bg-blue-100 text-blue-600 font-semibold" : "hover:text-blue-500"}
                `
                                }
                            >
                                <ChildIcon className="w-4 h-4 shrink-0" />
                                {item.label}
                            </NavLink>
                        );
                    })}
                </div>
            )}
        </div>
    );
}
