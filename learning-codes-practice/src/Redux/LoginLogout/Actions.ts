import LoginLogoutActionTypes from "./ActionTypes";

export const UserLoggedIn = () => ({
  type: LoginLogoutActionTypes.USER_LOGGEDIN
});

export const UserLoggedOut = () => ({
  type: LoginLogoutActionTypes.USER_LOGGEDOUT
});