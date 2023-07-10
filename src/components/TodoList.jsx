import React, { Fragment, useState, useRef } from "react";
import ReactDOM from "react-dom";

import { TodoItem } from "./TodoItem";

import {v4 as uuid} from "uuid";

export function TodoList(){

const [todos, setTodos] = useState([
    {id:1, tarea: 'Vacaciones'}, {id: 2, tarea: 'paseo'},
    {id:3, tarea: 'Viaje'}, {id: 4, tarea: 'Fiesta'}
]);

    const tareaRef = useRef();

    const agregarTarea = () =>{
        const tarea = tareaRef.current.value;
        const id = uuid();

        setTodos((prevTodos) =>{
            const nuevaTarea ={
                id:uuid(),
                tarea:tarea
            }

            tareaRef.current.value ="";
            return [...prevTodos, nuevaTarea]
        })
    }


    return (
        <Fragment>
         
            <h1 style={{display: 'flex', justifyContent:'center', alignItems:'center'}}>Mi Álbum</h1>
            <div className="input-group mt-4 mb-4">
                <input ref={tareaRef} placeholder= "Ingrese un título" className="form-control" type="img"></input>
                <button onClick={agregarTarea} className="btn btn-success ms-2">+</button>
            </div>
            <ul className = "list-group">
           
{todos.map ((todo) => (
                    <TodoItem todo={todo} key= {todo.id}></TodoItem>
                ))}  
            </ul>
        </Fragment>

    );
}