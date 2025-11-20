import ActionTypes from "./ActionTypes";

const initialState = {
  signInModalOpen: false,
  signUpModalOpen: false,
};

const modalReducer = (state = initialState, action:any) => {
  switch (action.type) {
    case ActionTypes.SHOW_SIGNIN_MODAL:
      return { ...state, signInModalOpen: true };

    case ActionTypes.CLOSE_SIGNIN_MODAL:
      return { ...state, signInModalOpen: false };

    case ActionTypes.SHOW_SIGNUP_MODAL:
      return { ...state, signUpModalOpen: true };

    case ActionTypes.CLOSE_SIGNUP_MODAL:
      return { ...state, signUpModalOpen: false };

    default:
      return state;
  }
};

export default modalReducer;
