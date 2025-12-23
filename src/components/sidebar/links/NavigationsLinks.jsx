import React from "react";
import { NavLink } from "react-router-dom";

export default function NavigationLinks({ id, label, icon: Icon, collapsed }) {
    return (
        <NavLink
            to={id}
            className={({ isActive }) =>
                `
        flex items-center px-4 py-3 rounded-xl w-full 
        transition-all duration-200
        ${collapsed ? "justify-center" : "gap-3"}
        ${isActive ? "bg-blue-100 text-blue-600" : "text-gray-700 hover:bg-blue-50/40 hover:text-blue-500"}
      `
            }
        >
            {/* ICON – fixed size */}
            <Icon className="w-5 h-5 text-current shrink-0" />

            {/* LABEL – hidden on collapsed */}
            {!collapsed && (
                <span className="whitespace-nowrap text-sm font-semibold transition-all duration-200">
                    {label}
                </span>
            )}
        </NavLink>
    );
}
