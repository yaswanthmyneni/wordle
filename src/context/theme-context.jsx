import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();
const useThemeContext = () => useContext(ThemeContext);

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");

  const value = { theme, setTheme };
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export { useThemeContext, ThemeProvider };
