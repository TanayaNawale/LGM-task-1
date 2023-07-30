import React from "react"

const TodoList = ({todo, setTodo,setEditTodo}) => {
    
     const handleEdit =({id}) =>{
        const findTodo = todo.find((todo) => todo.id === id);
        setEditTodo(findTodo);
     }
    const handleDelete =({id}) => {
        setTodo(todo.filter((todo) => todo.id !== id));
    };
    
    return (
        <div>
            {todo.map((todo) => (
                <li className="list-item" key={todo.id}>
                    <input 
                    type="text" 
                    value={todo.title} 
                    className={`list ${todo.completed ? "complete" :""}`}
                    onChange={(event) => event.preventDefault()
                    }
                    />
                    <div>
                        <button className="button-edit task-button" onClick={()=> handleEdit(todo)}>
                            <i className="fa fa-edit"></i>
                        </button>
                        <button className="button-delete task-button" onClick={()=> handleDelete(todo)}>
                            <i className="fa fa-trash"></i>
                        </button>
                    </div>



                </li>
            )
            )}
        </div>
    )
}
export default TodoList;