import CourseActionTypes from "./ActionTypes";

const initial = JSON.parse(localStorage.getItem("wishlist") || "[]");

export const wishlistReducer = (state = initial, action:any) => {
  switch (action.type) {
    case CourseActionTypes.TOGGLE_WISHLIST:
      const exists = state.includes(action.payload);

      const updated = exists
        ? state.filter((id:any) => id !== action.payload)
        : [...state, action.payload];

      localStorage.setItem("wishlist", JSON.stringify(updated));

      return updated;

    default:
      return state;
  }
};
