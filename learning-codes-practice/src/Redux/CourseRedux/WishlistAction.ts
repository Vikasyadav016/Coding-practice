import ApiMethods from "../../ApiMethods/ApiMethods";
import CourseActionTypes from "./ActionTypes";


export const toggleWishlist = (courseId:any, token:any) => async (dispatch:any) => {
  dispatch({ type: CourseActionTypes.TOGGLE_WISHLIST, payload: courseId });

  localStorage.setItem(
    "wishlist",
    JSON.stringify(JSON.parse(localStorage.getItem("wishlist") || "[]"))
  );

  if (token) {
    await ApiMethods.post(
      "/wishlist/toggle",
      { courseId },
    );
  }
};
