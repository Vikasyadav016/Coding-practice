import { useState } from "react";
import ApiMethods from "../../ApiMethods/ApiMethods";
import BASE_URL from "../../config/config";
import { useDispatch, useSelector } from "react-redux";
import { CloseSignInModal, ShowSignInModal } from "../../Redux/Actions";
import { AuthService } from "../../Services/authServices";
import { useNavigate } from "react-router";

interface SignInField {
  email: string;
  password: string;
}

const useSignInForm = () => {
  const [signInFields, setSignInFields] = useState<SignInField>({
    email: "",
    password: "",
  });
  const [showLoader, setShowLoader] = useState<boolean>(false);
  const [popup, setPopup] = useState({
    visible: false,
    message: "",
    type: "",
  });
  const dispath = useDispatch();
  const navigate = useNavigate();
  const show = useSelector((state: any) => state.signInAndSignUp.signInModalOpen);

  const handleShowSignInModal = () => {
    dispath(ShowSignInModal());
  };
  const handleCloseSignInModal = () => {
    dispath(CloseSignInModal());
  };

  const handleSignInFunction = async (e: any) => {
    try {
      e.preventDefault();
      setShowLoader(true);
      if (!signInFields.email && !signInFields.password) {
        setPopup({
          visible: true,
          message: "Credentials required",
          type: "error",
        });
      } else {
        const apiResponse: any = await ApiMethods.post(
          `${BASE_URL}v1/login`,
          signInFields
        );
        if (!apiResponse.error) {
          AuthService.saveAuthData(
            apiResponse.accessToken,
            apiResponse.refreshToken,
            apiResponse.user
          );
          navigate("/dashboard");
          dispath(CloseSignInModal())
          setPopup({
            visible: true,
            message: apiResponse?.message,
            type: "success",
          });
        }
        console.log("data", apiResponse);
      }
      setShowLoader(false);
    } catch (error) {
      console.log("error", error);
      setShowLoader(false);
    }
  };

  const handleSignInChanges = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSignInFields((pre: any) => ({
      ...pre,
      [name]: value,
    }));
  };

  return {
    signInFields,
    popup,
    show,
    showLoader,
    handleSignInFunction,
    handleSignInChanges,
    setPopup,
    handleShowSignInModal,
    handleCloseSignInModal,
  };
};

export default useSignInForm;
