import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { AuthService } from "../../Services/authServices";
import { ShowSignInModal } from "../../Redux/Actions";

const useLandingLage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleExploreCourses = () => {
    if (AuthService.isLoggedIn()) {
      navigate("/dashboard/course");
    } else {
      dispatch(ShowSignInModal());
    }
  };

  const handleBecomeAnInstructor = () => {
    if (AuthService.isLoggedIn()) {
      navigate("/dashboard/course");
    } else {
      dispatch(ShowSignInModal());
    }
  };

  return { handleExploreCourses, handleBecomeAnInstructor };
};
export default useLandingLage;
