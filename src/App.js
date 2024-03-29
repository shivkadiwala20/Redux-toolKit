import React from "react";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos.jsx";
import "./index.css";
const App = () => {
  return (
    <>
      <AddTodo />
      <Todos />
    </>
  );
};

export default App;
