
import useSidebarStore from "../../store/useSidebarStore";
import menuItems from "../../data/menuItems";
import AsideHeader from "./aside-header/AsideHeader";
import SidebarDropdown from "./links/SidebarDropdown";
import NavigationLinks from "./links/NavigationsLinks";

export default function Sidebar() {
  const { isCollapsed, isHovered, setHovered } = useSidebarStore();

  const collapsed = isCollapsed && !isHovered;
  const sidebarWidth = isCollapsed ? (isHovered ? "w-64" : "w-20") : "w-64";

  return (
    <aside
      className={`
        fixed top-0 left-0 h-full bg-white border-r border-gray-200 z-50
        transition-all duration-300 
        ${sidebarWidth}
      `}
      onMouseEnter={() => isCollapsed && setHovered(true)}
      onMouseLeave={() => isCollapsed && setHovered(false)}
    >
      <div className="flex flex-col h-full">
        <AsideHeader isHovered={isHovered} isCollapsed={isCollapsed} />

        <nav className="flex-1 p-4 overflow-y-auto">
          <div className="space-y-1">
            {menuItems.map((item) =>
              item.children ? (
                <SidebarDropdown
                  key={item.id}
                  {...item}
                  collapsed={collapsed}
                />
              ) : (
                <NavigationLinks
                  key={item.id}
                  {...item}
                  collapsed={collapsed}
                />
              )
            )}
          </div>
        </nav>
      </div>
    </aside>
  );
}

