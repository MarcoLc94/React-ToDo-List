import PropTypes from "prop-types";

const ToDoItem = ({id, title, checked, toggleTodo, deleteTodo}) => {
  return (
    <li key={id}>
        <label>
          <input type="checkbox" checked={checked} onChange={(e)=> toggleTodo(id, e.target.checked)}/>{title}
        </label>
        <button className="btn btn-danger" onClick={() => deleteTodo(id)}>Delete</button>
      </li>
  )
};

ToDoItem.propTypes = {
    id: PropTypes.string,
    title: PropTypes.string,
    checked: PropTypes.bool,
    toggleTodo: PropTypes.func,
    deleteTodo: PropTypes.func,
};

export default ToDoItem
