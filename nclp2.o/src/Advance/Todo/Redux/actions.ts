import TodoActionTypes from './actionTypes';

export type BookDetails = {
    bookTitle: string;
    bookPrice: string;
    bookDescription: string;
};

export const addBook = (book: BookDetails) => ({
    type: TodoActionTypes.ADD_BOOK,
    payload: book
});

export const deleteBook = (index: number) => ({
    type: TodoActionTypes.DELETE_BOOK,
    payload: index
});

export const updateBook = (index: number, book: BookDetails) => ({
    type: TodoActionTypes.UPDATE_BOOK,
    payload: { index, book }
});

const TodoActions = {
    addBook,
    deleteBook,
    updateBook,
};

export default TodoActions;
