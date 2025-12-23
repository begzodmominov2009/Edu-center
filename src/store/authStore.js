import { create } from "zustand";

export const useAuthStore = create((set) => ({
    user: null,
    accessToken: null, // optional, faqat RAMda

    // login bo'lganda user + token RAM va localStorage ga saqlash
    setAuth: (user, token) => {
        localStorage.setItem("user", JSON.stringify(user));
        localStorage.setItem("accessToken", token);
        set({ user, accessToken: token });
    },

    // faqat token yangilash
    setAccessToken: (token) => {
        localStorage.setItem("accessToken", token);
        set({ accessToken: token });
    },

    // logout: RAM va localStorage ni tozalash
    logout: async () => {
        try {
            await fetch("/auth/admin/logout", {
                method: "POST",
                credentials: "include", // agar cookie ishlatilsa
            });
        } catch (err) {
            console.error("Logout error:", err);
        }
        localStorage.removeItem("user");
        localStorage.removeItem("accessToken");
        set({ user: null, accessToken: null });
    },

    // refresh bo'lsa, localStorage dan tiklash
    restoreAuth: () => {
        const storedUser = localStorage.getItem("user");
        const storedToken = localStorage.getItem("accessToken");

        if (storedUser && storedToken) {
            set({
                user: JSON.parse(storedUser),
                accessToken: storedToken,
            });
        }
    },
}));
