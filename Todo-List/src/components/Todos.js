import React from "react";
import { TodoItem } from "./TodoItem";

export const Todos = (props) => {
  let myStyle = {
    minHeight: "80vh",
  };
  return (
    <div className="container my-3" style={myStyle}>
      <h3 className="my-4">Todos List</h3>
      {props.todos.length !== 0
        ? props.todos.map((todo) => (
            <TodoItem key={todo.sno} todo={todo} onDelete={props.onDelete} />
          ))
        : "No Todos to display"}
    </div>
  );
};
