import { Theme } from "@emotion/react";
import { createContext, useContext, useEffect, useState } from "react";
import { useThemeStore } from "../../store/useThemeStore";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  setPurpleTheme: () => void;
}

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const primary = "#9a55f3";

const lightTheme: Theme = {
  backgroundColor: "#FFF",
  oppositeColor: "#1b1b1b",
  boxColor: "#E5E5E5",
  borderColor: "#F1F1F1",
  boxBorderColor: "#CCC",
};

const purpleTheme: Theme = {
  backgroundColor: "#423F4A",
  oppositeColor: "#F5F5F5",
  boxColor: "#5A5766",
  borderColor: "#4E4B58",
  boxBorderColor: "#726E81",
};

const darkTheme: Theme = {
  backgroundColor: "#2b2b2b",
  oppositeColor: "#F5F5F5",
  boxColor: "#373737",
  borderColor: "#323232",
  boxBorderColor: "#404040",
};

const ThemeContext = createContext<ThemeContextType>({
  theme: lightTheme,
  toggleTheme: () => {},
  setPurpleTheme: () => {}
});

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const storeTheme = useThemeStore((state) => state.setTheme);
  const storedTheme = useThemeStore((state) => state.theme);
  const [theme, setTheme] = useState<Theme>(
    storedTheme === "dark" ? darkTheme : storedTheme === "purple" ? purpleTheme : lightTheme
  );

  const toggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme === lightTheme ? darkTheme : lightTheme
    );
    if (theme === darkTheme) {
      storeTheme("light");
    } else {
      storeTheme("dark");
    }
  };

  const setPurpleTheme = () => {
    setTheme(purpleTheme);
    storeTheme('purple');
  }

  useEffect(() => {
    setTheme(
      storedTheme === "dark"
        ? darkTheme
        : storedTheme === "purple"
        ? purpleTheme
        : lightTheme
    );
  }, [storedTheme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setPurpleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
