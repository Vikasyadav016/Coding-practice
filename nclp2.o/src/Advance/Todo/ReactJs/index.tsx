import { useState } from 'react';
import AddUpdateTodo from './AddTodo/Index';
import {TotoOptions} from './todoConstant'
import ViewTodoDetails from './ViewTodo';
import './index.css'

type BookDetails = {
    bookTitle: string;
    bookPrice: string;
    bookDescription: string;
};

const Todo = () => {
    const [bookList, setBookList] = useState<BookDetails[]>([]);

    const handleAddBook = (book: BookDetails) => {
        setBookList((prev) => [...prev, book]);
    };

    const handleDelete = (index: number) => {
        setBookList((prev) => prev.filter((_, i) => i !== index));
    };

    return (
        <div className="todomaincontainer">
            <h1 className="h1title">This is advance lavel of To do Application working with redux</h1>
            <div className="todosectionoptionheader">
                <div className='todooptioncard'>
                    {
                        TotoOptions.map((todo) => (
                            <div className='todooptionbutton' key={todo.id}>
                                <button className='optionbtn'>{todo.title}</button>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className='todoDetailssection'>
                <AddUpdateTodo onAddBook={handleAddBook} />
                <ViewTodoDetails bookList={bookList} handleDelete={handleDelete} />
            </div>
        </div>
    )
}


export default Todo;