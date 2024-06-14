import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
export const Todo = ({ task, toogleComplete, deleteTodo, editTodo }) => (
  <div className="Todo">
    <div
      onClick={() => toogleComplete(task.id)}
      // className={`${task.completed ? "completed" : ""}`}
    >
      <div>{task?.task}</div>
    </div>
    <div>
      <FontAwesomeIcon
        icon={faPenToSquare}
        onClick={() => task && editTodo(task.id)}
      />
      <FontAwesomeIcon
        icon={faTrash}
        onClick={() => task && deleteTodo(task.id)}
      />
    </div>
  </div>
);

export default Todo;
