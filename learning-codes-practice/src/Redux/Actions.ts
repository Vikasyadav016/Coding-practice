import ActionTypes from "./ActionTypes";

export const ShowSignInModal = () => ({
  type: ActionTypes.SHOW_SIGNIN_MODAL
});

export const CloseSignInModal = () => ({
  type: ActionTypes.CLOSE_SIGNIN_MODAL
});

export const ShowSignUpModal = () => ({
  type: ActionTypes.SHOW_SIGNUP_MODAL
});

export const CloseSignUpModal = () => ({
  type: ActionTypes.CLOSE_SIGNUP_MODAL
});
