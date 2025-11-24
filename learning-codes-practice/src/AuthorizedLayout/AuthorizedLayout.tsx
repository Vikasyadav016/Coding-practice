import  { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import ResponsiveSidebar, { DashboardIcon, UsersIcon } from "../Components/CommonSidebar/Sidebar";
import DynamicNavbarTest from "../ReactJs/PracticeUIExamples/DynamicNavbarTest";


const links = [
  { path: "/app", label: "Dashboard", icon: <DashboardIcon /> },
  { path: "/app/users", label: "Users", icon: <UsersIcon /> },
];

const AuthorizedLayout = () => {
  const [collapsed, setCollapsed] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setCollapsed(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      {/* Top Navbar */}
      <DynamicNavbarTest  />

      {/* Sidebar + content */}
      <div className="d-flex">
        <ResponsiveSidebar links={links} />

        <div
          className="flex-grow-1"
          style={{ marginLeft: collapsed ? "70px" : "250px", paddingTop: "70px", transition: "margin-left 0.3s" }}
        >
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AuthorizedLayout;


