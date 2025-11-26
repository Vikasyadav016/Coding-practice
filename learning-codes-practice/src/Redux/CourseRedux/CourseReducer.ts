import CourseActionTypes from "./ActionTypes";

const initialState = {
  loading: false,
  courses: [],
  error: null,
};

export const courseReducer = (state = initialState, action:any) => {
  switch (action.type) {
    case CourseActionTypes.FETCH_COURSES_REQUEST:
      return { ...state, loading: true };

    case CourseActionTypes.FETCH_COURSES_SUCCESS:
      return { loading: false, courses: action.payload, error: null };

    case CourseActionTypes.FETCH_COURSES_FAIL:
      return { loading: false, courses: [], error: action.payload };

    default:
      return state;
  }
};
