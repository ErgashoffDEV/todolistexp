import React from 'react';
import axios from "axios"

export default function Footer({todos, initialTodos, setTodos}) {

    function filterTodos  (type) {
        axios.get("http://127.0.0.1:8000/todo", {params: {type: type}})
            .then(res => setTodos(res.data))
    }

    return (
        <div className="footer">
            <button onClick={() => filterTodos("all")} className="spans">{(todos) ? todos.length : "0"} tasks</button>
            <button className="spans" onClick={() => filterTodos("completed")}>
                {(todos) ? todos.filter(todo => todo.completed).length : "0"} completed
            </button>
            <button onClick={() => filterTodos("open")}
                    className="spans">{(todos) ? todos.filter(todo => !todo.completed).length : "0"} open
            </button>
        </div>
    );
};
