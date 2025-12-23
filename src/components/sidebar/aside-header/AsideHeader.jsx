import React from "react";

function AsideHeader({ isHovered, isCollapsed }) {
    const collapsedState = isCollapsed && !isHovered;

    return (
        <div className="p-6 border-b border-gray-200">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                    {/* Logo */}
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                        <span className="text-white text-lg font-semibold">ED</span>
                    </div>

                    {/* Smooth Collapsible Text */}
                    <div
                        className={`
              overflow-hidden transition-all duration-300
              ${collapsedState ? "w-0 opacity-0" : "w-auto opacity-100"}
            `}
                    >
                        <h2 className="text-gray-900 text-sm font-medium whitespace-nowrap">
                            Edu-admin
                        </h2>
                        <p className="text-xs text-gray-500 whitespace-nowrap -mt-0.5">
                            Admin panel
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AsideHeader;
