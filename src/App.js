import "./App.css";
import Todo from "./components/Todo";
import TodoWrapper from "./components/TodoWrapper";

function App() {
  return (
    <div className="App">
      <TodoWrapper />
      <Todo />
    </div>
  );
}

export default App;
