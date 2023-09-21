import { useState } from "react";
import './style.css'
import NewToDoForm from "./components/NewToDoForm";
import ToDoList from "./components/ToDoList";

function App() {
  
  const [todos, setTodos] = useState([]);

  function addtodo(title){
     setTodos([...todos, {id: crypto.randomUUID(), title: title, completed: false}])
  } 

  function toggleTodo(id, checked) {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if(todo.id === id){
          return {...todo, completed: checked}
        }
        return todo;
      })
    })
  }

  function deleteTodo(id){
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== id);
    })
  }

  return (
    <>
    <NewToDoForm onSubmit={addtodo}/>
    <h1>To Do List</h1>
    <ToDoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
    </>
  );
}


export default App
