import ToDoItem from "./ToDoItem";
import PropTypes from "prop-types";


const ToDoList = ({todos, toggleTodo, deleteTodo}) => {
  return (
    <ul className="list"> 
      {todos.length === 0 ? "Empty" : todos.map(todo => {
        return (<ToDoItem key={todo.id} id={todo.id} title={todo.title} checked={todo.completed} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>);
      })}
    </ul>
  )
}

ToDoList.propTypes = {
    todos: PropTypes.array,
    toggleTodo: PropTypes.func,
    deleteTodo: PropTypes.func,
};

export default ToDoList

