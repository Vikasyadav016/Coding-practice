import ApiMethods from "../../ApiMethods/ApiMethods";
import CourseActionTypes from "./ActionTypes";

export const fetchCourses = () => async (dispatch:any) => {
  try {
    dispatch({ type: CourseActionTypes.FETCH_COURSES_REQUEST });

    const { data } = await ApiMethods.get("/courses",'');

    dispatch({
      type: CourseActionTypes.FETCH_COURSES_SUCCESS,
      payload: data,
    });
  } catch (err:any) {
    dispatch({
      type: CourseActionTypes.FETCH_COURSES_FAIL,
      payload: err.response?.data?.msg || err.message,
    });
  }
};
