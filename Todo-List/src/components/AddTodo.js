import React, { useState } from "react";

export const AddTodo = (props) => {
  const [title, setTitle] = useState("");
  const [discription, setDiscription] = useState("");

  const todo = {
    marginLeft: "110px",
  };

  const submit = (e) => {
    e.preventDefault();
    if (!title || !discription) {
      alert("Title or discrption must not be empty");
    } else {
      props.addToDo(title, discription);
      setTitle("");
      setDiscription("");
    }
  };

  return (
    <>
      <h3 className="container my-2">Add A ToDo</h3>
      <form
        className="row gy-2 gx-3 my-3 align-items-center text-center"
        style={todo}
        onSubmit={submit}
      >
        <div className="col-auto">
          <label htmlFor="autoSizingInput">Todo</label>
          <input
            type="text"
            className="form-control"
            id="autoSizingInput"
            placeholder="Shopping"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="col-auto">
          <label htmlFor="autoSizingInputGroup">Discription</label>
          <div className="input-group">
            <div className="input-group-text">@</div>
            <input
              type="text"
              className="form-control"
              id="autoSizingInputGroup"
              placeholder="Go To Shopping"
              value={discription}
              onChange={(e) => setDiscription(e.target.value)}
            />
          </div>
        </div>
        <div className="col-auto" style={{ marginTop: "30px" }}>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </>
  );
};
