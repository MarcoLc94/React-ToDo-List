import { useState } from 'react';
import PropTypes from "prop-types";

const NewToDoForm = ({onSubmit}) => {
    const [newItem, SetNewItem] = useState("");
    function handleChange(event){
        SetNewItem(event.target.value);
      }
    function handleSubmit(event) {
        event.preventDefault();
        if(newItem === "") return;
        onSubmit(newItem);
        SetNewItem("");
      }
  return (
    <form className="new-item-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <label htmlFor="item">New Item</label>
        <input type="text" id="item" value={newItem} onChange = {handleChange}/>
      </div>
      <button className='btn'>Add</button>
    </form>
  )
};

NewToDoForm.propTypes = {
    onSubmit: PropTypes.func.isRequired
} 

export default NewToDoForm
