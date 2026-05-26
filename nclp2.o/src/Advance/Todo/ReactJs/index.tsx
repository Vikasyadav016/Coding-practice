import {TotoOptions} from './todoConstant'
import './index.css'
import AddUpdateTodo from './AddTodo/Index';
import ViewTodoDetails from './ViewTodo/index';

const Todo = () => {
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
                <AddUpdateTodo />
                <ViewTodoDetails />
            </div>
        </div>
    )
}


export default Todo;