import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface ThemeHook {
  theme: "light" | "dark";
  setTheme: Function;
  toggleTheme: Function;
}

const useTheme = create(
  persist(
    (set) => ({
      theme: "dark",
      setTheme: (theme: "light" | "dark") => set(() => ({ theme })),
      toggleTheme: () =>
        set((state: ThemeHook) => ({
          theme: state.theme === "light" ? "dark" : "light",
        })),
    }),
    { name: "theme-store", skipHydration: true }
  )
);

export default useTheme;
