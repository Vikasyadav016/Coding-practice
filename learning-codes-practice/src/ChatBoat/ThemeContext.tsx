import { createContext, useState, useEffect } from "react";
import { lightTheme, darkTheme } from "./theme";

export const ThemeContext = createContext({
  theme: lightTheme,
  toggleTheme: () => {}
});

export const ThemeProvider = ({ children }: any) => {
  const [theme, setTheme] = useState(lightTheme);

  useEffect(() => {
    const saved = localStorage.getItem("app-theme");
    if (saved === "dark") setTheme(darkTheme);
  }, []);

  const toggleTheme = () => {
    setTheme((prev) =>
      prev.mode === "light" ? darkTheme : lightTheme
    );
    localStorage.setItem(
      "app-theme",
      theme.mode === "light" ? "dark" : "light"
    );
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div
        style={{
          background: theme.colors.chatBg,
          color: theme.colors.text,
          transition: "0.3s ease",
          height: "100%"
        }}
      >
        {children}
      </div>
    </ThemeContext.Provider>
  );
};
