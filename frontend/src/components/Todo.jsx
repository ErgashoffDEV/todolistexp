import React, {useState} from "react";
import TodoUpdate from "./TodoUpdate";
import axios from 'axios'


export default function Todo({todo, onChange}) {

    const [showUpdate, setShowUpdate] = useState(false)


    async function completeTodo() {
        await axios
            .put('http://127.0.0.1:8000/todo/' + todo.id,
                {completed: !todo.completed, title: todo.title})
            .then(() => onChange())
            .catch(err => console.log(err))
    }

    async function deleteTodo () {
        let confirmation = window.confirm("Do you really want to delete this task?")

        if(confirmation) {
            await axios.delete('http://127.0.0.1:8000/todo/' + todo.id)
            .then(() => onChange())
            .catch(err => console.log(err))
        }
    }

    return (
        <div className="todo">
            {showUpdate ? (
                <TodoUpdate
                    todo={todo}
                    showUpdate={showUpdate}
                    setShowUpdate={setShowUpdate}
                    onChange={onChange}
                />
            ) : (
                <div className={(todo.completed) ? "completed" : ""}>
                    <input
                        className="checkbox"
                        id={`check-${todo.id}`}
                        type="checkbox"
                        onChange={completeTodo}
                        checked={todo.completed}
                    />
                    <label htmlFor={`check-${todo.id}`}>
                        {todo.title.length > 30 ? `${todo.title.slice(1, 45)} ... ` : todo.title}
                    </label>
                    <i onClick={() => deleteTodo(todo.id)} className="icon">
                        <img src="https://www.svgrepo.com/show/21045/delete-button.svg" alt="" width="25" height="25"/>
                    </i>
                    <i onClick={() => setShowUpdate(!showUpdate)} className="icon">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/OOjs_UI_icon_edit-ltr.svg/1024px-OOjs_UI_icon_edit-ltr.svg.png"
                            alt="" width="25" height="25"/>
                    </i>
                    <i>
                        <img src="https://www.svgrepo.com/show/40039/eye.svg" alt="" width="25" height="25"/>
                    </i>
                </div>
            )}
        </div>
    )
}