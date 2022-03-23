import React from 'react';
import Form from "./Form";
import axios from "axios";

const TodoUpdate = ({todo, setShowUpdate, showUpdate, onChange}) => {
    async function handleUpdate(event, value) {
        event.preventDefault()

        await axios.put('http://127.0.0.1:8000/todo/' + todo.id, {title:value, completed: todo.completed})
            .then(() => onChange())
            .catch(err => console.log(err))

        setShowUpdate(!showUpdate)
    }

    return (
        <div>
            <Form todo={todo} onSubmit={handleUpdate}/>
        </div>
    );
};

export default TodoUpdate;