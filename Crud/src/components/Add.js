import React from "react";

export const Add = () => {
  return (
    <div>
      <div className="input-group mb-3">
        <span className="input-group-text">@</span>
        <div className="form-floating">
          <input
            type="text"
            className="form-control"
            id="floatingInputGroup1"
            placeholder="Username"
          />
          <label for="floatingInputGroup1">Username</label>
        </div>
      </div>
    </div>
  );
};
