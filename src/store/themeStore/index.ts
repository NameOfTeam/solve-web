import { create } from "zustand";
import { persist } from "zustand/middleware";

interface ThemeStore {
  storedTheme: "light" | "dark";
  storeTheme: (storeTheme: "light" | "dark") => void;
}

export const themeStore = create(
  persist<ThemeStore>(
    (set) => ({
      storedTheme: window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light",
      storeTheme: (storedTheme: "light" | "dark") => set({ storedTheme }),
    }),
    {
      name: "THEME",
    }
  )
);
