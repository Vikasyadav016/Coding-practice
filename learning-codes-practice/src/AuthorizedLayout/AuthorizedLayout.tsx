import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import ResponsiveSidebar, {
  DashboardIcon,
  UsersIcon,
} from "../Components/CommonSidebar/Sidebar";
import DynamicNavbarTest from "../ReactJs/PracticeUIExamples/DynamicNavbarTest";
import PopupMessage from "../Components/MessagePopUp/DynamicPopUpMessage";
import useSignInForm from "../Components/SignIn/signInForm";

const links = [
  { path: "/app", label: "Dashboard", icon: <DashboardIcon /> },
  { path: "/app/users", label: "Users", icon: <UsersIcon /> },
];

const AuthorizedLayout = () => {
  const [collapsed, setCollapsed] = useState(window.innerWidth < 768);
  const { popup, setPopup } = useSignInForm();

  useEffect(() => {
    const handleResize = () => setCollapsed(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      <DynamicNavbarTest />

      <div className="d-flex">
        <ResponsiveSidebar links={links} />

        <div
          className="flex-grow-1"
          style={{
            marginLeft: collapsed ? "70px" : "250px",
            paddingTop: "70px",
            transition: "margin-left 0.3s",
          }}
        >
          <Outlet />
        </div>
      </div>
      <PopupMessage
        visible={popup.visible}
        message={popup.message}
        type={popup.type}
        width="300px"
        borderRadius="10px"
        position="top-right"
        onClose={() => setPopup({ ...popup, visible: false })}
        duration={2000}
      />
    </div>
  );
};

export default AuthorizedLayout;
