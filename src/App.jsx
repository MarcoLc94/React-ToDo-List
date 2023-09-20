import { useState } from "react";
import './style.css'

function App() {
  const [newItem, SetNewItem] = useState("");
  const [todos, setTodos] = useState([]);

  function handleChange(event){
    SetNewItem(event.target.value);
  }


  function handleSubmit(event) {
    event.preventDefault();
    setTodos([...todos, {id: crypto.randomUUID(), title: newItem, completed: false}])
    SetNewItem("");
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
    <form className="new-item-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <label htmlFor="item">New Item</label>
        <input type="text" id="item" value={newItem} onChange = {handleChange}/>
      </div>
      <button className='btn'>Add</button>
    </form>
    <h1>To Do List</h1>
    <ul className="list">
      {todos.map(todo => {
        return (<li key={todo.id}>
        <label>
          <input type="checkbox" onChange={(e)=> toggleTodo(todo.id, e.target.checked)}/>{todo.title}
        </label>
        <button className="btn btn-danger" onClick={(e) => deleteTodo(todo.id)}>Delete</button>
      </li>);
      })}
    </ul>
    </>
  );
}


export default App
