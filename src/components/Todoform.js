import React from "react";

const Todoform = () => {
  return (
    <form className="Todoform">
      <input
        type="text"
        className="todo-input"
        placeholder="What is the today task?"
      />
      <button type="Submit" className="todo-btn"></button>
    </form>
  );
};

export default Todoform;
