import { createContext, useState } from "react";

interface ThemeProviderProps {
    children: React.ReactNode;
}

interface themeContextDefault {
    theme: string;
    toogleTheme: (theme: string) => void;
}

const themeContextDefaultData = {
    theme: "dark",
    toogleTheme: () => {},
};

const ThemeContext = createContext<themeContextDefault>(
    themeContextDefaultData
);

function ThemeProvider({ children }: ThemeProviderProps) {
    const [theme, setTheme] = useState(themeContextDefaultData.theme);

    const toogleTheme = (theme: string) => setTheme(theme);

    const value = {
        theme,
        toogleTheme,
    };

    return (
        <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
    );
}

export { ThemeContext, ThemeProvider };
