// import React, { useState, useEffect, type JSX } from "react";
// import { NavLink } from "react-router-dom";
// import { Nav } from "react-bootstrap";

// interface LinkItem {
//   path: string;
//   label: string;
//   icon: React.FC | (() => JSX.Element);
// }

// interface SidebarProps {
//   links: LinkItem[];
// }

// const ResponsiveSidebar: React.FC<SidebarProps> = ({ links }) => {
//   const [collapsed, setCollapsed] = useState(false);

//   const handleResize = () => setCollapsed(window.innerWidth < 768);

//   useEffect(() => {
//     handleResize();
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   const scrollableLinks = links.slice(0, -1);
//   const lastLink = links[links.length - 1];

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
//         {scrollableLinks.map((link) => {
//           const Icon = link.icon;
//           return (
//             <NavLink
//               end
//               key={link.path}
//               to={link.path}
//               className={({ isActive }) =>
//                 `d-flex align-items-center mb-2 p-2 rounded ${
//                   isActive ? "bg-primary text-white" : "text-dark"
//                 }`
//               }
//               style={{ textDecoration: "none", transition: "all 0.2s" }}
//             >
//               <span className="d-flex align-items-center justify-content-center">
//                 <Icon /> {/* Render SVG */}
//               </span>
//               {!collapsed && <span className="ms-2">{link.label}</span>}
//             </NavLink>
//           );
//         })}
//       </Nav>

//       <Nav className="flex-column" style={{ marginTop: "auto" }}>
//         <NavLink
//           end
//           to={lastLink.path}
//           className={({ isActive }) =>
//             `d-flex align-items-center mb-2 p-2 rounded ${
//               isActive ? "bg-primary text-white" : "text-dark"
//             }`
//           }
//           style={{ textDecoration: "none", transition: "all 0.2s" }}
//         >
//           <span className="d-flex align-items-center justify-content-center">
//             <lastLink.icon />
//           </span>
//           {!collapsed && <span className="ms-2">{lastLink.label}</span>}
//         </NavLink>
//       </Nav>

//       <style>
//         {`
//           .d-flex.align-items-center.p-2.rounded:hover {
//             background-color: #007bff !important;
//             color: white !important;
//           }
//         `}
//       </style>
//     </div>
//   );
// };

// export default ResponsiveSidebar;



// import React, { useState, useEffect, type JSX } from "react";
// import { NavLink } from "react-router-dom";
// import { Nav } from "react-bootstrap";

// interface SubLinkItem {
//   path: string;
//   label: string;
// }

// interface LinkItem {
//   path?: string;
//   label: string;
//   icon: React.FC | (() => JSX.Element);
//   children?: SubLinkItem[];
// }

// interface SidebarProps {
//   links: LinkItem[];
// }

// const ResponsiveSidebar: React.FC<SidebarProps> = ({ links }) => {
//   const [collapsed, setCollapsed] = useState(false);

//   // Track which parent menu is expanded
//   const [openMenu, setOpenMenu] = useState<string | null>(null);

//   const handleResize = () => setCollapsed(window.innerWidth < 768);

//   useEffect(() => {
//     handleResize();
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   const scrollableLinks = links.slice(0, -1);
//   const lastLink = links[links.length - 1];

//   const toggleMenu = (label: string) => {
//     setOpenMenu(openMenu === label ? null : label);
//   };

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

//         {scrollableLinks.map((link) => {
//           const Icon = link.icon;

//           // If menu has children — render dropdown parent
//           if (link.children && link.children.length > 0) {
//             const isOpen = openMenu === link.label;

//             return (
//               <div key={link.label}>
//                 {/* Parent Menu Item */}
//                 <div
//                   className={`d-flex align-items-center mb-2 p-2 rounded ${
//                     isOpen ? "bg-primary text-white" : "text-dark"
//                   }`}
//                   style={{
//                     cursor: "pointer",
//                     userSelect: "none",
//                     transition: "all 0.2s",
//                   }}
//                   onClick={() => toggleMenu(link.label)}
//                 >
//                   <Icon />

//                   {!collapsed && (
//                     <span className="ms-2 d-flex justify-content-between w-100">
//                       {link.label}
//                       <span>{isOpen ? "▲" : "▼"}</span>
//                     </span>
//                   )}
//                 </div>

//                 {/* Submenu */}
//                 <div
//                   style={{
//                     maxHeight: isOpen ? link.children.length * 45 + "px" : "0px",
//                     overflow: "hidden",
//                     transition: "max-height 0.3s ease",
//                     marginLeft: collapsed ? "0px" : "20px",
//                   }}
//                 >
//                   {link.children.map((sub) => (
//                     <NavLink
//                       key={sub.path}
//                       to={sub.path}
//                       className={({ isActive }) =>
//                         `d-flex align-items-center mb-2 p-2 rounded ${
//                           isActive ? "bg-primary text-white" : "text-dark"
//                         }`
//                       }
//                       style={{ textDecoration: "none", fontSize: "0.9rem" }}
//                     >
//                       {!collapsed && <span>{sub.label}</span>}
//                     </NavLink>
//                   ))}
//                 </div>
//               </div>
//             );
//           }

//           // Normal Link (No children)
//           return (
//             <NavLink
//               end
//               key={link.path}
//               to={link.path!}
//               className={({ isActive }) =>
//                 `d-flex align-items-center mb-2 p-2 rounded ${
//                   isActive ? "bg-primary text-white" : "text-dark"
//                 }`
//               }
//               style={{ textDecoration: "none", transition: "all 0.2s" }}
//             >
//               <Icon />
//               {!collapsed && <span className="ms-2">{link.label}</span>}
//             </NavLink>
//           );
//         })}
//       </Nav>

//       {/* LAST LINK FIXED AT BOTTOM */}
//       <Nav className="flex-column" style={{ marginTop: "auto" }}>
//         <NavLink
//           end
//           to={lastLink.path!}
//           className={({ isActive }) =>
//             `d-flex align-items-center mb-2 p-2 rounded ${
//               isActive ? "bg-primary text-white" : "text-dark"
//             }`
//           }
//           style={{ textDecoration: "none", transition: "all 0.2s" }}
//         >
//           <lastLink.icon />
//           {!collapsed && <span className="ms-2">{lastLink.label}</span>}
//         </NavLink>
//       </Nav>

//       <style>
//         {`
//           .d-flex.align-items-center.p-2.rounded:hover {
//             background-color: #007bff !important;
//             color: white !important;
//           }
//         `}
//       </style>
//     </div>
//   );
// };

// export default ResponsiveSidebar;

// import React, { useState, useEffect, type JSX } from "react";
// import { NavLink } from "react-router-dom";
// import { Nav } from "react-bootstrap";

// interface SubLinkItem {
//   path: string;
//   label: string;
// }

// interface LinkItem {
//   path?: string;
//   label: string;
//   icon: React.FC | (() => JSX.Element);
//   children?: SubLinkItem[];
// }

// interface SidebarProps {
//   links: LinkItem[];
// }

// const ResponsiveSidebar: React.FC<SidebarProps> = ({ links }) => {
//   const [collapsed, setCollapsed] = useState(false);
//   const [openMenu, setOpenMenu] = useState<string | null>(null);

//   const handleResize = () => setCollapsed(window.innerWidth < 768);

//   useEffect(() => {
//     handleResize();
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   const scrollableLinks = links.slice(0, -1);
//   const lastLink = links[links.length - 1];

//   const toggleMenu = (label: string) =>
//     setOpenMenu(openMenu === label ? null : label);

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
//         {scrollableLinks.map((link) => {
//           const Icon = link.icon;

//           if (link.children && link.children.length > 0) {
//             const isOpen = openMenu === link.label;

//             return (
//               <div key={link.label} style={{ whiteSpace: "nowrap" }}>
//                 {/* Parent Menu */}
//                 <div
//                   className={`d-flex align-items-center mb-2 p-2 rounded ${
//                     isOpen ? "bg-primary text-white" : "text-dark"
//                   }`}
//                   style={{
//                     cursor: "pointer",
//                     userSelect: "none",
//                     transition: "all 0.2s",
//                     whiteSpace: "nowrap",
//                   }}
//                   onClick={() => toggleMenu(link.label)}
//                 >
//                   <Icon />

//                   {!collapsed && (
//                     <span className="ms-2 d-flex justify-content-between w-100">
//                       {link.label}
//                       <span>{isOpen ? "▲" : "▼"}</span>
//                     </span>
//                   )}
//                 </div>

//                 {/* Scrollable Submenu */}
//                 <div
//                   style={{
//                     maxHeight: isOpen ? "150px" : "0px",
//                     overflowY: isOpen ? "auto" : "hidden",
//                     transition: "max-height 0.3s ease",
//                     marginLeft: collapsed ? "0px" : "20px",
//                     whiteSpace: "nowrap",
//                   }}
//                 >
//                   {link.children.map((sub) => (
//                     <NavLink
//                       key={sub.path}
//                       to={sub.path}
//                       className={({ isActive }) =>
//                         `d-flex align-items-center mb-2 p-2 rounded ${
//                           isActive ? "bg-primary text-white" : "text-dark"
//                         }`
//                       }
//                       style={{
//                         textDecoration: "none",
//                         fontSize: "0.9rem",
//                         whiteSpace: "nowrap",
//                       }}
//                     >
//                       {!collapsed && <span>{sub.label}</span>}
//                     </NavLink>
//                   ))}
//                 </div>
//               </div>
//             );
//           }

//           /* Normal Link */
//           return (
//             <NavLink
//               end
//               key={link.path}
//               to={link.path!}
//               className={({ isActive }) =>
//                 `d-flex align-items-center mb-2 p-2 rounded ${
//                   isActive ? "bg-primary text-white" : "text-dark"
//                 }`
//               }
//               style={{ textDecoration: "none", transition: "all 0.2s" }}
//             >
//               <Icon />
//               {!collapsed && <span className="ms-2">{link.label}</span>}
//             </NavLink>
//           );
//         })}
//       </Nav>

//       {/* Bottom Fixed Link */}
//       <Nav className="flex-column" style={{ marginTop: "auto" }}>
//         <NavLink
//           end
//           to={lastLink.path!}
//           className={({ isActive }) =>
//             `d-flex align-items-center mb-2 p-2 rounded ${
//               isActive ? "bg-primary text-white" : "text-dark"
//             }`
//           }
//           style={{ textDecoration: "none", transition: "all 0.2s" }}
//         >
//           <lastLink.icon />
//           {!collapsed && <span className="ms-2">{lastLink.label}</span>}
//         </NavLink>
//       </Nav>

//       <style>
//         {`
//           .d-flex.align-items-center.p-2.rounded:hover {
//             background-color: #007bff !important;
//             color: white !important;
//           }
//         `}
//       </style>
//     </div>
//   );
// };

// export default ResponsiveSidebar;


import React, { useState, useEffect, type JSX } from "react";
import { NavLink } from "react-router-dom";
import { Nav } from "react-bootstrap";

interface SubLinkItem {
  path: string;
  label: string;
}

interface LinkItem {
  path?: string;
  label: string;
  icon: React.FC | (() => JSX.Element);
  children?: SubLinkItem[];
}

interface SidebarProps {
  links: LinkItem[];
}

const ResponsiveSidebar: React.FC<SidebarProps> = ({ links }) => {
  const [collapsed, setCollapsed] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  const handleResize = () => setCollapsed(window.innerWidth < 768);

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scrollableLinks = links.slice(0, -1);
  const lastLink = links[links.length - 1];

  const toggleMenu = (label: string) =>
    setOpenMenu(openMenu === label ? null : label);

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
      <Nav className="flex-column" style={{ overflowY: "auto", flex: 1 }}>
        {scrollableLinks.map((link) => {
          const Icon = link.icon;

          if (link.children && link.children.length > 0) {
            const isOpen = openMenu === link.label;

            return (
              <div key={link.label} style={{ whiteSpace: "nowrap" }}>
                {/* Parent Menu */}
                <div
                  className={`d-flex align-items-center justify-content-between mb-2 p-2 rounded ${isOpen ? "bg-primary text-white" : "text-dark"
                    }`}
                  style={{
                    cursor: "pointer",
                    userSelect: "none",
                    transition: "all 0.2s",
                  }}
                  onClick={() => toggleMenu(link.label)}
                >
                  {/* Icon always visible */}
                  <div className="d-flex align-items-center">
                    <Icon />
                    {!collapsed && <span className="ms-2">{link.label}</span>}
                  </div>

                  {/* Arrow always visible */}
                  <span style={{ marginLeft: "10px" }}>
                    {isOpen ? "▲" : "▼"}
                  </span>
                </div>

                {/* Scrollable Submenu */}
                <div
                  style={{
                    maxHeight: isOpen ? "150px" : "0px",
                    overflowY: isOpen ? "auto" : "hidden",
                    transition: "max-height 0.3s ease",
                    marginLeft: collapsed ? "0px" : "20px",
                    whiteSpace: "nowrap",
                  }}
                >
                  {link.children.map((sub:any) => {
                    const SubIcon = sub.icon;
                    return (
                      <NavLink
                        key={sub.path}
                        to={sub.path}
                        className={({ isActive }) =>
                          `d-flex align-items-center mb-2 p-2 rounded ${isActive ? "bg-primary text-white" : "text-dark"
                          }`
                        }
                        style={{
                          textDecoration: "none",
                          fontSize: "0.9rem",
                          whiteSpace: "nowrap",
                        }}
                      >
                        <SubIcon />
                        {!collapsed && <span>{sub.label}</span>}
                      </NavLink>
                    )
                  }
                  )}
                </div>
              </div>
            );
          }

          /* Normal Link */
          return (
            <NavLink
              end
              key={link.path}
              to={link.path!}
              className={({ isActive }) =>
                `d-flex align-items-center mb-2 p-2 rounded ${isActive ? "bg-primary text-white" : "text-dark"
                }`
              }
              style={{ textDecoration: "none", transition: "all 0.2s" }}
            >
              <Icon />
              {!collapsed && <span className="ms-2">{link.label}</span>}
            </NavLink>
          );
        })}
      </Nav>

      {/* Bottom Fixed Link */}
      <Nav className="flex-column" style={{ marginTop: "auto" }}>
        <NavLink
          end
          to={lastLink.path!}
          className={({ isActive }) =>
            `d-flex align-items-center mb-2 p-2 rounded ${isActive ? "bg-primary text-white" : "text-dark"
            }`
          }
          style={{ textDecoration: "none", transition: "all 0.2s" }}
        >
          <lastLink.icon />
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






