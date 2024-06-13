import React, { useState } from "react";

export const Todoform = ({ addTodo }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    addTodo(value);
    setValue("");
  };
  return (
    <form className="Todoform" onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo-input"
        value={value}
        placeholder="What is the today task?"
        onChanges={(e) => setValue(e.target.value)}
      />
      <button type="Submit" className="todo-btn">
        Add Task
      </button>
    </form>
  );
};

export default Todoform;
