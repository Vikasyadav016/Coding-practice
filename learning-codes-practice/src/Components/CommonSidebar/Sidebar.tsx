import React, { useState, useEffect, type JSX } from "react";
import { NavLink } from "react-router-dom";
import { Nav } from "react-bootstrap";

export const DashboardIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8v-10h-8v10zm0-18v6h8V3h-8z" fill="currentColor"/>
  </svg>
);

export const UsersIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5C15 14.17 10.33 13 8 13zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" fill="currentColor"/>
  </svg>
);

interface LinkItem {
  path: string;
  label: string;
  icon: JSX.Element;
}

interface SidebarProps {
  links: LinkItem[];
}

const ResponsiveSidebar: React.FC<SidebarProps> = ({ links }) => {
  const [collapsed, setCollapsed] = useState(false);

  // Automatically collapse on small screens
  const handleResize = () => {
    setCollapsed(window.innerWidth < 768);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className="d-flex flex-column bg-light vh-100 position-fixed"
      style={{
        width: collapsed ? "70px" : "250px",
        transition: "width 0.3s",
        top: 0,
        left: 0,
        borderRight: "1px solid #ddd",
        paddingTop: "1rem",
        zIndex: 1000,
        marginTop: '2.6rem'
      }}
    >
      <Nav className="flex-column">
        {links.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            className={({ isActive }) =>
              `d-flex align-items-center mb-2 p-2 rounded ${isActive ? "bg-primary text-white" : "text-dark"}`
            }
            style={{ textDecoration: "none" }}
          >
            <span className="d-flex align-items-center justify-content-center">
              {link.icon}
            </span>
            {!collapsed && <span className="ms-2">{link.label}</span>}
          </NavLink>
        ))}
      </Nav>
    </div>
  );
};

export default ResponsiveSidebar;
