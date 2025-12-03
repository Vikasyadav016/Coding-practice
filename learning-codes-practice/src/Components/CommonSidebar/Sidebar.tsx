// // import React, { useState, useEffect, type JSX } from "react";
// // import { NavLink } from "react-router-dom";
// // import { Nav } from "react-bootstrap";

// // interface LinkItem {
// //   path: string;
// //   label: string;
// //   icon: React.FC | (() => JSX.Element);
// // }

// // interface SidebarProps {
// //   links: LinkItem[];
// // }

// // const ResponsiveSidebar: React.FC<SidebarProps> = ({ links }) => {
// //   const [collapsed, setCollapsed] = useState(false);

// //   const handleResize = () => setCollapsed(window.innerWidth < 768);

// //   useEffect(() => {
// //     handleResize();
// //     window.addEventListener("resize", handleResize);
// //     return () => window.removeEventListener("resize", handleResize);
// //   }, []);

// //   const scrollableLinks = links.slice(0, -1);
// //   const lastLink = links[links.length - 1];

// //   return (
// //     <div
// //       className="d-flex flex-column bg-light vh-100 position-fixed"
// //       style={{
// //         width: collapsed ? "70px" : "250px",
// //         transition: "width 0.3s",
// //         top: 0,
// //         left: 0,
// //         borderRight: "1px solid #ddd",
// //         zIndex: 1000,
// //         paddingTop: "4rem",
// //       }}
// //     >
// //       <Nav className="flex-column" style={{ overflowY: "auto", flex: 1 }}>
// //         {scrollableLinks.map((link) => {
// //           const Icon = link.icon;
// //           return (
// //             <NavLink
// //               end
// //               key={link.path}
// //               to={link.path}
// //               className={({ isActive }) =>
// //                 `d-flex align-items-center mb-2 p-2 rounded ${
// //                   isActive ? "bg-primary text-white" : "text-dark"
// //                 }`
// //               }
// //               style={{ textDecoration: "none", transition: "all 0.2s" }}
// //             >
// //               <span className="d-flex align-items-center justify-content-center">
// //                 <Icon /> {/* Render SVG */}
// //               </span>
// //               {!collapsed && <span className="ms-2">{link.label}</span>}
// //             </NavLink>
// //           );
// //         })}
// //       </Nav>

// //       <Nav className="flex-column" style={{ marginTop: "auto" }}>
// //         <NavLink
// //           end
// //           to={lastLink.path}
// //           className={({ isActive }) =>
// //             `d-flex align-items-center mb-2 p-2 rounded ${
// //               isActive ? "bg-primary text-white" : "text-dark"
// //             }`
// //           }
// //           style={{ textDecoration: "none", transition: "all 0.2s" }}
// //         >
// //           <span className="d-flex align-items-center justify-content-center">
// //             <lastLink.icon />
// //           </span>
// //           {!collapsed && <span className="ms-2">{lastLink.label}</span>}
// //         </NavLink>
// //       </Nav>

// //       <style>
// //         {`
// //           .d-flex.align-items-center.p-2.rounded:hover {
// //             background-color: #007bff !important;
// //             color: white !important;
// //           }
// //         `}
// //       </style>
// //     </div>
// //   );
// // };

// // export default ResponsiveSidebar;



// import React, { useState, useEffect,type JSX } from "react";
// import { NavLink } from "react-router-dom";
// import { Nav } from "react-bootstrap";

// interface LinkItem {
//   path?: string;
//   label: string;
//   icon?: React.FC | (() => JSX.Element);
//   children?: LinkItem[];
// }

// interface SidebarProps {
//   links: LinkItem[];
// }

// const ResponsiveSidebar: React.FC<SidebarProps> = ({ links }) => {
//   const [collapsed, setCollapsed] = useState(false);
//   const [openMenus, setOpenMenus] = useState<Record<string, boolean>>({});

//   const toggleMenu = (label: string) => {
//     setOpenMenus((prev) => ({ ...prev, [label]: !prev[label] }));
//   };

//   const handleResize = () => setCollapsed(window.innerWidth < 768);

//   useEffect(() => {
//     handleResize();
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   return (
//     <div
//       className="d-flex flex-column bg-light vh-100 position-fixed"
//       style={{
//         width: collapsed ? "70px" : "250px",
//         transition: "width 0.3s",
//         top: 0,
//         left: 0,
//         borderRight: "1px solid #ddd",
//         zIndex: 1000,
//         paddingTop: "4rem",
//       }}
//     >
//       <Nav className="flex-column" style={{ overflowY: "auto", flex: 1 }}>
//         {links.map((link) => {
//           const Icon = link.icon;

//           // 🚀 Parent Menu With Children
//           if (link.children) {
//             const isOpen = openMenus[link.label];

//             return (
//               <div key={link.label}>
//                 <div
//                   onClick={() => toggleMenu(link.label)}
//                   className="d-flex align-items-center mb-2 p-2 rounded text-dark"
//                   style={{ cursor: "pointer" }}
//                 >
//                   {Icon && <Icon />}
//                   {!collapsed && <span className="ms-2">{link.label}</span>}
//                   {!collapsed && (
//                     <span className="ms-auto">{isOpen ? "▲" : "▼"}</span>
//                   )}
//                 </div>

//                 {isOpen &&
//                   !collapsed &&
//                   link.children.map((child) => (
//                     <NavLink
//                       key={child.path}
//                       to={child.path!}
//                       className={({ isActive }) =>
//                         `d-flex align-items-center ms-4 mb-2 p-2 rounded ${
//                           isActive ? "bg-primary text-white" : "text-dark"
//                         }`
//                       }
//                       style={{ textDecoration: "none" }}
//                     >
//                       <span>{child.label}</span>
//                     </NavLink>
//                   ))}
//               </div>
//             );
//           }

//           // 🚀 Regular Menu Item
//           return (
//             <NavLink
//               key={link.path}
//               to={link.path!}
//               className={({ isActive }) =>
//                 `d-flex align-items-center mb-2 p-2 rounded ${
//                   isActive ? "bg-primary text-white" : "text-dark"
//                 }`
//               }
//               style={{ textDecoration: "none" }}
//             >
//               {Icon && <Icon />}
//               {!collapsed && <span className="ms-2">{link.label}</span>}
//             </NavLink>
//           );
//         })}
//       </Nav>
//     </div>
//   );
// };

// export default ResponsiveSidebar;


import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Nav } from "react-bootstrap";

interface LinkItem {
  path?: string;
  label: string;
  icon?: React.FC | (() => JSX.Element);
  children?: LinkItem[];
}

interface SidebarProps {
  links: LinkItem[];
}

const ResponsiveSidebar: React.FC<SidebarProps> = ({ links }) => {
  const [collapsed, setCollapsed] = useState(false);
  const [openMenus, setOpenMenus] = useState<Record<string, boolean>>({});

  const toggleMenu = (label: string) =>
    setOpenMenus((prev) => ({ ...prev, [label]: !prev[label] }));

  useEffect(() => {
    const resize = () => setCollapsed(window.innerWidth < 768);
    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  // last item fixed at bottom
  const lastLink = links[links.length - 1];
  const mainLinks = links.slice(0, -1);

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
      {/* Scrollable main menu */}
      <Nav className="flex-column" style={{ overflowY: "auto", flex: 1 }}>
        {mainLinks.map((link) => {
          const Icon = link.icon;

          // NESTED MENU
          if (link.children) {
            const isOpen = openMenus[link.label];
            return (
              <div key={link.label}>
                <div
                  onClick={() => toggleMenu(link.label)}
                  className="d-flex align-items-center mb-2 p-2 rounded text-dark"
                  style={{ cursor: "pointer" }}
                >
                  {Icon && <Icon />}
                  {!collapsed && <span className="ms-2">{link.label}</span>}
                  {!collapsed && (
                    <span className="ms-auto">{isOpen ? "▲" : "▼"}</span>
                  )}
                </div>

                {/* Submenu */}
                {isOpen &&
                  !collapsed &&
                  link.children.map((child) => (
                    <NavLink
                      key={child.path}
                      to={child.path!}
                      className={({ isActive }) =>
                        `d-flex align-items-center ms-4 mb-2 p-2 rounded ${
                          isActive ? "bg-primary text-white" : "text-dark"
                        }`
                      }
                      style={{ textDecoration: "none" }}
                    >
                      {child.label}
                    </NavLink>
                  ))}
              </div>
            );
          }

          // NORMAL MENU ITEM
          return (
            <NavLink
              key={link.path}
              to={link.path!}
              className={({ isActive }) =>
                `d-flex align-items-center mb-2 p-2 rounded ${
                  isActive ? "bg-primary text-white" : "text-dark"
                }`
              }
              style={{ textDecoration: "none" }}
            >
              {Icon && <Icon />}
              {!collapsed && <span className="ms-2">{link.label}</span>}
            </NavLink>
          );
        })}
      </Nav>

      {/* FIXED BOTTOM LAST ITEM */}
      <div style={{ marginTop: "auto" }}>
        <NavLink
          to={lastLink.path!}
          className={({ isActive }) =>
            `d-flex align-items-center mb-2 p-2 rounded ${
              isActive ? "bg-primary text-white" : "text-dark"
            }`
          }
          style={{ textDecoration: "none" }}
        >
          {lastLink.icon && <lastLink.icon />}
          {!collapsed && <span className="ms-2">{lastLink.label}</span>}
        </NavLink>
      </div>
    </div>
  );
};

export default ResponsiveSidebar;



