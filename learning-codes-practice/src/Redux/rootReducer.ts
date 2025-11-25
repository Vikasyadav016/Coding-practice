import { combineReducers } from "redux";
import modalReducer from "./Reducers";
import authReducer from "./LoginLogout/ReducerLoginLogout";


const rootReducer = combineReducers({
  signInAndSignUp: modalReducer,
  loginAndLogout: authReducer,
});

export default rootReducer;
