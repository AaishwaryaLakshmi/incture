import React, { useState } from 'react';
import './App.css';

function App() {
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleAddTodo = () => {
    if (inputText.trim() !== '') {
      if (editIndex !== null) {
        const updatedTodos = [...todos];
        updatedTodos[editIndex] = { text: inputText, isTextRed: false };
        setTodos(updatedTodos);
        setEditIndex(null);
      } else {
        setTodos([...todos, { text: inputText, isTextRed: false }]);
      }
      setInputText('');
    }
  };

  const handleUpdateTodo = (index) => {
    setInputText(todos[index].text);
    setEditIndex(index);
    const updatedTodos = [...todos];
    updatedTodos[index].isTextRed = false;
    setTodos(updatedTodos);
  };

  const handleDeleteTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };

  const handleToggleRed = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].isTextRed = !updatedTodos[index].isTextRed;
    setTodos(updatedTodos);
  };

  return (
    <div className="App">
      <h1>TO-DO LIST</h1>
      <h2>Hello! Let's Get Organized</h2>
      <div className="input-container">
        <input
          type="text"
          value={inputText}
          onChange={handleInputChange}
          placeholder="Enter your task"
          className="todo-input"
        />
        <button className="action-button" onClick={handleAddTodo}>
          {editIndex !== null ? 'Update' : 'Add'}
        </button>
      </div>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            <span style={{ color: todo.isTextRed ? 'red' : 'black' }}>{todo.text}</span>
            <button className="update-button" onClick={() => handleUpdateTodo(index)}>Update</button>
            <button className="toggle-button" onClick={() => handleToggleRed(index)}>Toggle</button>
            <button className="delete-button" onClick={() => handleDeleteTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
