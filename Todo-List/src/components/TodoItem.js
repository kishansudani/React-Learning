import React from "react";

export const TodoItem = (props) => {
  return (
    <>
      <div className="my-4">
        <h4> {props.todo.title} </h4>
        <h4> {props.todo.discription} </h4>
        <button
          className="btn btn-sm btn-danger"
          onClick={() => props.onDelete(props.todo)}
        >
          Delete
        </button>
      </div>
      <hr />
    </>
  );
};
