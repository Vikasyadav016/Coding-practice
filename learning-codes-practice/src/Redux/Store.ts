import { createStore } from "redux";
import modalReducer from "./Reducers";

const store = createStore(
  modalReducer,
);

export default store;
