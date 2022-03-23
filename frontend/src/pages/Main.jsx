import React, {useEffect, useState} from "react";
import axios from "axios";
import Form from "../components/Form";
import Todos from "../components/Todos";
import "../static/style.css";
import Header from "../components/Header";
import Footer from "../components/Footer"

export default function Main() {
    const [todos, setTodos] = useState([])

    useEffect(() => load(), [])

    function load(){
        axios.get('http://localhost:8000/todo')
            .then(response => setTodos(response.data))
            .catch(error => console.log(error))
    }

    return (
        <div className="container">
            <div className="box">
                <Header />
                <Form todos={todos} setTodos={setTodos} onChange={load} />
                <Todos todos={todos} setTodos={setTodos}  onChange={load} />
                <Footer todos={todos} initialTodos={todos} setTodos={setTodos} />
            </div>
        </div>
    )
}

