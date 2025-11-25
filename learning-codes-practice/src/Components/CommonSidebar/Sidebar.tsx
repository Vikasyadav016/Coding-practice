import React, { useState, useEffect, type JSX } from "react";
import { NavLink } from "react-router-dom";
import { Nav } from "react-bootstrap";

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

  // Collapse sidebar on small screens
  const handleResize = () => setCollapsed(window.innerWidth < 768);

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scrollableLinks = links.slice(0, -1); // All except last
  const lastLink = links[links.length - 1]; // Last link fixed at bottom

  return (
    <div
      className="d-flex flex-column bg-light vh-100 position-fixed"
      style={{
        width: collapsed ? "70px" : "250px",
        transition: "width 0.3s",
        top: 0,
        left: 0,
        borderRight: "1px solid #ddd",
        zIndex: 1000,
        paddingTop: "4rem",
      }}
    >
      <Nav
        className="flex-column"
        style={{ overflowY: "auto", flex: 1}}
      >
        {scrollableLinks.map((link) => (
          <NavLink
          end
            key={link.path}
            to={link.path}
            className={({ isActive }) =>
              `d-flex align-items-center mb-2 p-2 rounded ${
                isActive ? "bg-primary text-white" : "text-dark"
              }`
            }
            style={{
              textDecoration: "none",
              transition: "all 0.2s",
            }}
          >
            <span className="d-flex align-items-center justify-content-center">
              {link.icon}
            </span>
            {!collapsed && <span className="ms-2">{link.label}</span>}
          </NavLink>
        ))}
      </Nav>
      <Nav
        className="flex-column"
        style={{ marginTop: "auto",}}
      >
        <NavLink
        end
          to={lastLink.path}
          className={({ isActive }) =>
            `d-flex align-items-center mb-2 p-2 rounded ${
              isActive ? "bg-primary text-white" : "text-dark"
            }`
          }
          style={{
            textDecoration: "none",
            transition: "all 0.2s",
          }}
        >
          <span className="d-flex align-items-center justify-content-center">
            {lastLink.icon}
          </span>
          {!collapsed && <span className="ms-2">{lastLink.label}</span>}
        </NavLink>
      </Nav>
      <style>
        {`
          .d-flex.align-items-center.p-2.rounded:hover {
            background-color: #007bff !important;
            color: white !important;
          }
        `}
      </style>
    </div>
  );
};

export default ResponsiveSidebar;
