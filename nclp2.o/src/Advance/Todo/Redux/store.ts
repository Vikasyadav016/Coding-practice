import { createStore, combineReducers } from "redux";
import todoReducer  from "./reducer";

const rootReducer = combineReducers({
    todos: todoReducer
});

export const store = createStore(rootReducer);