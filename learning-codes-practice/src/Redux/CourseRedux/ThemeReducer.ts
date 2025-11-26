import CourseActionTypes from "./ActionTypes";

const initial = {
  dark: JSON.parse(localStorage.getItem("dark") || "false"),
};

export const themeReducer = (state = initial, action:any) => {
  switch (action.type) {
    case CourseActionTypes.TOGGLE_THEME:
      const dark = !state.dark;
      localStorage.setItem("dark", JSON.stringify(dark));
      return { dark };

    default:
      return state;
  }
};
