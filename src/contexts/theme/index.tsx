import { Theme } from "@emotion/react";
import { createContext, useContext, useEffect, useState } from "react";
import { useThemeStore } from "../../stores/useThemeStore";

interface ThemeContextType {
  theme: Theme;
  setDarkTheme: () => void;
  setLightTheme: () => void;
  setPurpleTheme: () => void;
}

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const primary = {
  900: "#4740CF",
  800: "#5B54D4",
  700: "#6F69D9",
  600: "#837DDE",
  500: "#9792E3",
  400: "#AAA6E8",
  300: "#BDBAED",
  200: "#D1CEF2",
  100: "#E5E3F8",
  0: "#F7F7FD",
};
export const secondary = {
  900: "#1EC34C",
  800: "#21D954",
  700: "#34E064",
  600: "#49E374",
  500: "#61E786",
  400: "#76EA96",
  300: "#8CEDA7",
  200: "#A2F1B8",
  100: "#B8F4C9",
};

const lightTheme: Theme = {
  backgroundColor: "#FFF",
  footerColor: "rgba(250,250,250)",
  oppositeColor: "#1b1b1b",
  boxColor: "#EFEFEF",
  borderColor: "#F1F1F1",
  boxBorderColor: "#CCC",
};

const purpleTheme: Theme = {
  backgroundColor: "#423f4a",
  footerColor: "rgba(0,0,0,0.3)",
  oppositeColor: "#F5F5F5",
  boxColor: "#5A5766",
  borderColor: "#4E4B58",
  boxBorderColor: "#726E81",
};

const darkTheme: Theme = {
  backgroundColor: "#2b2b2b",
  footerColor: "rgba(0,0,0,0.3)",
  oppositeColor: "#F5F5F5",
  boxColor: "#373737",
  borderColor: "#323232",
  boxBorderColor: "#404040",
};

const ThemeContext = createContext<ThemeContextType>({
  theme: lightTheme,
  setDarkTheme: () => {},
  setLightTheme: () => {},
  setPurpleTheme: () => {}
});

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const storeTheme = useThemeStore((state) => state.setTheme);
  const storedTheme = useThemeStore((state) => state.theme);
  const [theme, setTheme] = useState<Theme>(
    storedTheme === "dark" ? darkTheme : storedTheme === "purple" ? purpleTheme : lightTheme
  );

  const setDarkTheme = () => {
    setTheme(darkTheme);
    storeTheme('dark');
  }

  const setLightTheme = () => {
    setTheme(lightTheme);
    storeTheme("light");
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
    <ThemeContext.Provider value={{ theme, setDarkTheme, setPurpleTheme, setLightTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
