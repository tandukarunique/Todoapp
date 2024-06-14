import React, { useState } from "react";

export const Todoform = ({ editTodo, task }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!value.trim()) return;

    if (editTodo && typeof editTodo === "function") {
      editTodo(value, task.id);
    }
    setValue("");
  };
  return (
    <form className="Todoform" onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo-input"
        value={value}
        placeholder="Update Task"
        onChanges={(e) => setValue(e.target.value)}
      />
      <button type="Submit" className="todo-btn">
        Update Task
      </button>
    </form>
  );
};

export default Todoform;
