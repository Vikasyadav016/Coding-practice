import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import DynamicNavbarTest from "../ReactJs/PracticeUIExamples/DynamicNavbarTest";
import PopupMessage from "../Components/MessagePopUp/DynamicPopUpMessage";
import useSignInForm from "../Components/SignIn/signInForm";
import { AuthService } from "../Services/authServices";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { ShowSignInModal } from "../Redux/Actions";
import { CourseIcon, DashboardIconNew, ProfileIcon, SettingsIcon } from "../SvgIcons/SVGIcons";
import ResponsiveSidebar from "../Components/CommonSidebar/Sidebar";

const links = [
  { path: "/dashboard", label: "Dashboard", icon: <DashboardIconNew /> },
   { path: "/dashboard/course", label: "Course", icon: <CourseIcon /> },
   { path: "/dashboard/instructor", label: "Chnage into Instructor", icon: <ProfileIcon /> },
   { path: "/dashboard/setting", label: "Settings", icon: <SettingsIcon /> },
   { path: "/dashboard/users", label: "Users", icon: <ProfileIcon /> },
];

const Intitution_Working = []
const Instructor_Tutor_Working = []
const User_Working = []
const AuthorizedLayout = () => {
  const [collapsed, setCollapsed] = useState(window.innerWidth < 768);
  const { popup, setPopup } = useSignInForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const handleResize = () => setCollapsed(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const isLoggedIn = AuthService.isLoggedIn();
    if (!isLoggedIn) {
      navigate("/");
      dispatch(ShowSignInModal());
    }
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
