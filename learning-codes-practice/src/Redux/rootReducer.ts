import { combineReducers } from "redux";
import modalReducer from "./Reducers";
import authReducer from "./LoginLogout/ReducerLoginLogout";
import { courseReducer } from "./CourseRedux/CourseReducer";


const rootReducer = combineReducers({
  signInAndSignUp: modalReducer,
  loginAndLogout: authReducer,
  courses: courseReducer,
});

export default rootReducer;
