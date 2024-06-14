import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Todo } from "./Todo";
import { Todoform } from "./Todoform";

export const TodoWrapper = () => {
  const [todos, setTodos] = useState([]);
  const [editingTodoId, setEditingTodoId] = useState(null);

  const addTodo = (todo) => {
    setTodos([...todos, { id: uuidv4(), task: todo, completed: false }]);
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const editTodo = (id) => {
    setEditingTodoId(id);
  };

  const editTask = (task, id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, task, isEditing: false } : todo
      )
    );
    setEditingTodoId(null);
  };

  return (
    <div className="TodoWrapper">
      <h1>𝐓ⱺ ᑯⱺ 𝐋𝗂𝗌𝗍</h1>
      <Todoform addTodo={addTodo} />
      {todos.map((todo, index) => (
        <React.Fragment key={index}>
          {editingTodoId === todo.id ? (
            <Todoform editTodo={editTask} task={todo} />
          ) : (
            <Todo
              task={todo}
              toggleComplete={toggleComplete}
              deleteTodo={deleteTodo}
              editTodo={() => editTodo(todo.id)}
            />
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default TodoWrapper;
