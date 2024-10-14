import { create } from "zustand";
import { persist } from "zustand/middleware";

interface ThemeStore {
  theme: "light" | "dark" | "purple";
  setTheme: (storeTheme: "light" | "dark" | "purple") => void;
}

export const useThemeStore = create(
  persist<ThemeStore>(
    (set) => ({
      theme: window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light",
      setTheme: (theme: "light" | "dark" | "purple") => set({ theme }),
    }),
    {
      name: "THEME",
    }
  )
);
