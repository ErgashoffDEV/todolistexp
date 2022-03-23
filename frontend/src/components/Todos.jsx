import React from "react";
import Todo from "./Todo";

export default function Todos({todos, setTodos, onChange}) {
    return (
        <div className="todos">
            {todos && todos.map(todo => (
                <Todo key={todo.id} todo={todo} setTodos={setTodos} todos={todos} onChange={onChange}/>
            ))}
        </div>
    )
}