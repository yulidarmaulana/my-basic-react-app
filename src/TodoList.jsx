import reactLogo from "./assets/react.svg";
import "./App.css";

const today = new Date();

function TodoList() {

function formatDate(date) {
     return new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(date);
}
  return (
    <div className="App">
     <h1>To Do List {formatDate(today)}</h1>
    </div>
  );
}

export default TodoList;
