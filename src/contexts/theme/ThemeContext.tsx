import { createContext } from "react";

type ThemeMode = "light" | "dark";

type ThemeContextType = {
    theme: ThemeMode;
    toggleTheme: () => void; // 🔥 여기 수정
};

export const ThemeContext = createContext<ThemeContextType | null>(null);
