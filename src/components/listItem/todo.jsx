import React, {useState, useEffect} from "react";
import axios from "axios";

export default function Todo(){
    const [todo,setTodos] = useState([]);
    const [newTodo,setNewTodo] = useState("");
    const API_URL = "https://vat.onrender.com";

    useEffect(() => {
        console.log("API URL: ",API_URL);
    });
    const fetchTodos = async() => {
        const response = await  fetch(`${API_URL}/todo/all`);
        const data = await response.json();
        setTodos(data);
    };
    return (
        <div>
            <h1>Todo List</h1>
        </div>
    );
}