import { useState, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import useSignInForm from "../../Components/SignIn/signInForm";
import { useDispatch } from "react-redux";
import { AuthService } from "../../Services/authServices";
import { getMenuByRole } from "../../Utilities/helperFunction";
import { ShowSignInModal } from "../../Redux/Actions";
import DynamicNavbarTest from "../../ReactJs/PracticeUIExamples/DynamicNavbarTest";
import ResponsiveSidebar from "../../Components/CommonSidebar/Sidebar";
import PopupMessage from "../../Components/MessagePopUp/DynamicPopUpMessage";


const AdminAuthorizedLayout = () => {
  const [collapsed, setCollapsed] = useState(window.innerWidth < 768);
  const { popup, setPopup } = useSignInForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const urerDetails = AuthService.getUser();
  const menuLinks = getMenuByRole(urerDetails?.role);

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
        <ResponsiveSidebar links={menuLinks} />

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

export default AdminAuthorizedLayout;
