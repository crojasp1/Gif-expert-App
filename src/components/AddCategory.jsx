import PropTypes from "prop-types";
import { useState } from "react"


const AddCategory = ({onNewCategory}) => {
  const [inputValue, setInputValue] = useState('');

  const onSubmit = (event) => {
    event.preventDefault();
    if(inputValue.trim().length <= 1) return;
    //setCategories(categories => [inputValue, ...categories]);
    onNewCategory(inputValue.trim());
    setInputValue('');
  }

  const onInputChange = (event) => {
    setInputValue(event.target.value);

  };

  return (
    <form onSubmit={onSubmit} aria-label="form">
      <div  className="input-container">

      <input 
        type="text" 
        placeholder="Buscar Gifs" 
        value={inputValue}
        onChange={onInputChange}
      ></input>

      <button className="insert-button" type="submit">Insert New Category</button>

      </div>
    </form>

    
  )
}

export default AddCategory

AddCategory.prototypes = {
  onNewCategory : PropTypes.func.isRequired,
}