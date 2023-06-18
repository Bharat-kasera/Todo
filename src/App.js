

import React, { useState } from 'react';
import './App.css';
import './style.css';
import CancelIcon from '@mui/icons-material/Cancel';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const addTodo = (e) => {
    e.preventDefault();
    const todo = e.target.add.value.trim();
    if (todo.length) {
      setTodos([...todos, todo]);
    }
    e.target.reset();
  };

  const deleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value.trim());
  };

  const filteredTodos = todos.filter((todo) =>
    todo.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="section-todo">
      <div className="container">
        <h1>TODO APP</h1>

        <form className="search">
          <input
            className="form-control colorclass2"
            type="text"
            name="search"
            placeholder="Search Todo... "
            onChange={handleSearch}
          />
        </form>

        <ul className="todos">
          {filteredTodos.map((todo, index) => (
            <li className="list-group-item" key={index}>
              <span className="list-text">{todo}</span>
              <span className="delete" onClick={() => deleteTodo(index)}>
                <CancelIcon />
              </span>
            </li>
          ))}
        </ul>

        <form className="add" onSubmit={addTodo}>
          <label style={{ fontSize: '18px' }}>
            Add new list
          </label>
          <input
            className="form-control  colorclass"
            type="text"
            name="add"
            placeholder="add todos... "
          />
        </form>
      </div>
    </section>
  );
};

export default App;
