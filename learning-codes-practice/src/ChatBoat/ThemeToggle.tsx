import  { useContext } from "react";
import { ThemeContext } from "./ThemeContext";


export default function ThemeToggle() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      style={{
        border: "none",
        background: "transparent",
        cursor: "pointer"
      }}
    >
      {theme.mode === "light" ? (
        // <FiMoon size={20} color={theme.colors.text} />
        ''
      ) : (
        // <FiSun size={20} color={theme.colors.primaryLight} />
        ''
      )}
    </button>
  );
}
