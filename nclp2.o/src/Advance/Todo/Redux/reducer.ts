
import TodoActionTypes from './actionTypes';
type BookDetails = {
    bookTitle: string;
    bookPrice: string;
    bookDescription: string;
};
const initialState: BookDetails[] = [];


const todoReducer = (state: typeof initialState = [], action: any) => {
    switch (action.type) {
        case TodoActionTypes.ADD_BOOK:
            return [...state, action.payload];
        case TodoActionTypes.DELETE_BOOK:
            return state.filter((_, i) => i !== action.payload);
        case TodoActionTypes.UPDATE_BOOK:
            const { index, book } = action.payload;
            const newState = [...state];
            newState[index] = book;
            return newState;
        default:
            return state;
    }
};

export default todoReducer;
