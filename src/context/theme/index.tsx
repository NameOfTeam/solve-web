import { Theme } from "@emotion/react";
import { createContext, useContext, useEffect, useState } from "react";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
};

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const primary = '#9a55f3';

const lightTheme: Theme = {
  backgroundColor: "#FFF",
  oppositeColor: "#1b1b1b",
  boxColor: "#E5E5E5",
  borderColor: "#F1F1F1",
  boxBorderColor: "#CCC",
};

const darkTheme: Theme = {
  backgroundColor: "#2b2b2b",
  oppositeColor: "#f5f5f5",
  boxColor: "#373737",
  borderColor: "#323232",
  boxBorderColor: "#404040",
};

const ThemeContext = createContext<ThemeContextType>({
  theme: lightTheme,
  toggleTheme: () => {},
});

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const isBrowserDarkMode = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;
  let initTheme = isBrowserDarkMode ? "dark" : "light";
  const [theme, setTheme] = useState<Theme>(
    initTheme === "dark" ? darkTheme : lightTheme
  );

  const toggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme === lightTheme ? darkTheme : lightTheme
    );
  };

  useEffect(() => {
    setTheme(initTheme === "dark" ? darkTheme : lightTheme);
  }, [initTheme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};