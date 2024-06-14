import React, { useState, useEffect } from "react";

export const Todoform = ({ addTodo, editTodo, task }) => {
  const [value, setValue] = useState("");

  // Set initial value to task's text when editing
  useEffect(() => {
    if (task) {
      setValue(task.task);
    }
  }, [task]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value.trim()) return;

    if (task) {
      // If task exists, call editTodo
      editTodo(value, task.id);
    } else {
      // Otherwise, call addTodo
      addTodo(value);
    }

    setValue(""); // Clear input value after submission
  };

  return (
    <form className="Todoform" onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo-input"
        value={value}
        placeholder={task ? "Update Task" : "Add Task"}
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit" className="todo-btn">
        {task ? "Update Task" : "Add Task"}
      </button>
    </form>
  );
};

export default Todoform;
