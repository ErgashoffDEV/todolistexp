import React, {useEffect, useState} from "react";
import axios from "axios";

export default function Form({todos, setTodos, todo = null, onSubmit, onChange}) {
    useEffect(() => todo && setValue(todo.title), [])

    const [value, setValue] = useState("")

    async function addTodo(event) {
        event.preventDefault()
        if (value) {
            await axios.post('http://localhost:8000/todo', {title: value, completed: false})
                .then(() => setValue(''))
                .catch(error => console.log(error))
            onChange()
            return
        }
        window.alert("You did not write anything!")
    }

    return (
        <form className="form" onSubmit={todos ? event => addTodo(event) : event => onSubmit(event, value)}>
            <input type="text" placeholder="Hit enter to add task" value={value}
                   onChange={event => setValue(event.target.value)}/>
        </form>
    )
}