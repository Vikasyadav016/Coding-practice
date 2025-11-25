import { AuthService } from "../../Services/authServices";
import LoginLogoutActionTypes from "./ActionTypes";


export interface AuthState {
  isLoggedIn: boolean;
  user: any | null;
}

const storedUser = AuthService.getAccessToken();

export const initialAuthState: AuthState = {
  isLoggedIn: storedUser ? true : false,
  user: storedUser ? AuthService.getUser : null,
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
