import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
export const Todo = ({ task }) => (
  <div className="Todo">
    <p
      onClick={() => task.id}
      className={`${task.completed ? "completed" : ""}`}
    >
      {task.task}
    </p>
    <div>
      <FontAwesomeIcon icon={faPenToSquare} />
      <FontAwesomeIcon icon={faTrash} />
    </div>
  </div>
);

export default Todo;
