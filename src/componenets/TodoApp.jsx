import React, { useState } from 'react';
import './TodoApp.css'; // Importing CSS file

function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [editIndex, setEditIndex] = useState(null);
  const [editValue, setEditValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddTodo = () => {
    if (inputValue.trim() !== '') {
      setTodos([...todos, inputValue]);
      setInputValue('');
    }
  };

  const handleRemoveTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setEditValue(todos[index]);
  };

  const handleEditChange = (event) => {
    setEditValue(event.target.value);
  };

  const handleUpdate = (index) => {
    const newTodos = [...todos];
    newTodos[index] = editValue;
    setTodos(newTodos);
    setEditIndex(null);
  };

  return (
    <div className="todo-container">
      <h1>Todo List</h1>
      <div className="input-container">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Add todo"
          className="todo-input"
        />
        <button onClick={handleAddTodo} className="add-button">
          Add
        </button>
      </div>
      <ul className="todo-list">
        {todos.map((todo, index) => (
          <li key={index} className="todo-item">
            {editIndex === index ? (
              <>
                <input
                  type="text"
                  value={editValue}
                  onChange={handleEditChange}
                  className="edit-input"
                />
                <button onClick={() => handleUpdate(index)} className="update-button">
                  Update
                </button>
              </>
            ) : (
              <>
                {todo}
                <div>
                  <button onClick={() => handleEdit(index)} className="edit-button">
                    Edit
                  </button>
                  <button onClick={() => handleRemoveTodo(index)} className="remove-button">
                    Remove
                  </button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;





