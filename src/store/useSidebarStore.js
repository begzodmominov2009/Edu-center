import { create } from "zustand";

const useSidebarStore = create((set) => ({
    isCollapsed: false, // Sidebar kattami-yo‘qmi
    isHovered: false, // Hover qilingan holat

    // Collapse toggle (ichkariga yopish / ochish)
    toggleSidebar: () => set((state) => ({ isCollapsed: !state.isCollapsed })),

    // To‘g‘ridan-to‘g‘ri collapse ni o‘rnatish
    setCollapsed: (val) => set({ isCollapsed: val }),

    // Hover holatini boshqarish (true/false)
    setHovered: (val) => set({ isHovered: val }),
}));

export default useSidebarStore;
