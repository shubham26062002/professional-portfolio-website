import { create } from "zustand"

interface ThemeStore {
    theme: Theme | null,
    setTheme: (theme: Theme) => void,
}

export const useTheme = create<ThemeStore>((set) => ({
    theme: null,
    setTheme: (theme) => set({
        theme,
    }),
}))