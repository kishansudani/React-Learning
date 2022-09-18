import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import { AddTodo } from "./components/AddTodo";
import { Footer } from "./components/Footer";
import { Todos } from "./components/Todos";
import { About } from "./components/About";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  let initTodo;
  localStorage.getItem("todos") !== null
    ? (initTodo = JSON.parse(localStorage.getItem("todos")))
    : (initTodo = []);

  const onDelete = (todo) => {
    setTodos(todos.filter((e) => e !== todo));
  };

  const addToDo = (title, discription) => {
    const myTodo = {
      sno: todos.length > 0 ? todos[todos.length - 1]["sno"] + 1 : 0,
      title: title,
      discription: discription,
    };
    setTodos([...todos, myTodo]);
  };

  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <BrowserRouter>
        <Header title="Todos List" />
        <Routes>
          <Route
            exect
            path="/"
            element={
              <>
                <AddTodo addToDo={addToDo} />
                <Todos todos={todos} onDelete={onDelete} />
              </>
            }
          ></Route>
          <Route path="about" element={<About />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
