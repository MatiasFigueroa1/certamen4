import React from "react";
import ReactDOM from "react-dom";

export function TodoItem({todo}){

    const {id, tarea} = todo;

    return (
        <li className = "card" >{tarea}</li>
    )
}