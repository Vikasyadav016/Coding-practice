import { AuthService } from "../../Services/authServices";
import LoginLogoutActionTypes from "./ActionTypes";


export interface AuthState {
  isLoggedIn: boolean;
  user: any | null;
}

const storedUser = localStorage.getItem("authUser");

export const initialAuthState: AuthState = {
  isLoggedIn: storedUser ? true : false,
  user: storedUser ? JSON.parse(storedUser) : null,
};

const authReducer = (state = initialAuthState, action: any): AuthState => {
  switch (action.type) {
    case LoginLogoutActionTypes.USER_LOGGEDIN:
      return {
        ...state,
        isLoggedIn: true,
        user: action.payload,
      };

    case LoginLogoutActionTypes.USER_LOGGEDOUT:
      AuthService.logout
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      };

    default:
      return state;
  }
};

export default authReducer;
