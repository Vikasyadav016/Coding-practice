import CourseActionTypes from "./ActionTypes";
const initial = JSON.parse(localStorage.getItem("cart") || "[]");

export const cartReducer = (state = initial, action:any) => {
  switch (action.type) {
    case CourseActionTypes.ADD_TO_CART:
      const newCart = [...state, action.payload];
      localStorage.setItem("cart", JSON.stringify(newCart));
      return newCart;

    case CourseActionTypes.REMOVE_FROM_CART:
      const filtered = state.filter((c:any) => c._id !== action.payload);
      localStorage.setItem("cart", JSON.stringify(filtered));
      return filtered;

    default:
      return state;
  }
};
