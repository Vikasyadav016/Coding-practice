import { useContext, useState } from "react";
import { ThemeContext } from "./ThemeContext";
import ThemeToggle from "./ThemeToggle";


export default function Sidebar() {
  const { theme } = useContext(ThemeContext);
  const [search, setSearch] = useState("");
  console.log(search)

  return (
    <div
      className="chat-sidebar"
      style={{
        background: theme.colors.sidebarBg,
        borderRight: `1px solid ${theme.colors.border}`
      }}
    >
      {/* Header */}
      <div className="sidebar-header">
        <h4 style={{ color: theme.colors.primary }}>Chats</h4>
        <ThemeToggle />
      </div>

      {/* Search */}
      <div
        className="sidebar-search"
        style={{ borderColor: theme.colors.border }}
      >
        {/* <FiSearch size={18} color={theme.colors.primary} /> */}
        <input
          style={{ color: theme.colors.text }}
          placeholder="Search..."
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
    </div>
  );
}
