import ApiMethods from "../../ApiMethods/ApiMethods";
import CourseActionTypes from "./ActionTypes";


export const addToCart = (course:any, token:any) => async (dispatch:any) => {
  dispatch({ type: CourseActionTypes.ADD_TO_CART, payload: course });

  localStorage.setItem(
    "cart",
    JSON.stringify(JSON.parse(localStorage.getItem("cart") || "[]"))
  );

  if (token) {
    await ApiMethods.post(
      "/cart/add",
      { courseId: course._id, price: course.discountPrice },
    );
  }
};

export const removeFromCart = (id:any) => ({
  type: CourseActionTypes.REMOVE_FROM_CART,
  payload: id,
});
