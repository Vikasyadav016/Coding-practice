import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { AuthService } from "./Services/authServices";
import { UserLoggedOut } from "./Redux/LoginLogout/Actions";

const useLogout = () => {
  const dispath = useDispatch();
  const navigate = useNavigate();

  const Logout = () => {
    AuthService.logout();
    navigate("/");
    dispath(UserLoggedOut());

  };
  return { Logout };
};

export default useLogout;
