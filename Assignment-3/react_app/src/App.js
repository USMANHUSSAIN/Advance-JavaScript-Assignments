import React, { useState } from 'react';
import './App.css';
import { Button, Card, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import PropTypes from 'prop-types';

function Todo({ todo, index, markTodo, removeTodo, editTodo }) {
  return (
    <div className="todo">
      <span style={{ textDecoration: todo.isDone ? 'line-through' : '' }}>{todo.text}</span>
      <div>
        <Button
          variant="outline-primary"
          style={{ display: todo.isDone ? 'none' : '' }}
          onClick={() => editTodo(todo.text, index)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="20"
            fill="currentColor"
            className="bi bi-pencil-square"
            viewBox="0 0 16 16">
            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
            <path
              fillRule="evenodd"
              d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
            />
          </svg>
        </Button>{' '}
        <Button variant="outline-success" onClick={() => markTodo(index)}>
          ✓
        </Button>{' '}
        <Button variant="outline-danger" onClick={() => removeTodo(index)}>
          ✕
        </Button>
      </div>
    </div>
  );
}

function FormTodo({ addTodo, edit, updateTodo }) {
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue('');
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    if (!value) return;
    updateTodo(value, edit.index);
    setValue('');
  };

  return (
    <Form onSubmit={edit.status ? handleUpdate : handleSubmit}>
      <Form.Group>
        <Form.Label>
          <b>{edit.status ? 'Edit Todo' : 'Add Todo'}</b>
        </Form.Label>
        <Form.Control
          type="text"
          className="input"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder={edit.status ? edit.text : 'Enter Todo Text'}
        />
      </Form.Group>
      <Button variant="primary mb-3" className="submit-btn" type="submit">
        {edit.status ? 'Update' : 'Submit'}
      </Button>
    </Form>
  );
}

function App() {
  const [todos, setTodos] = useState([
    {
      text: 'A Sample Todo',
      isDone: false
    }
  ]);

  const [edit, setEdit] = useState({});

  const addTodo = (text) => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const updateTodo = (text, index) => {
    const newTodos = [...todos];
    newTodos[index].text = text;
    setTodos(newTodos);
    setEdit({});
  };

  const markTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isDone = !newTodos[index].isDone;
    setTodos(newTodos);
  };

  const editTodo = (text, index) => {
    setEdit({
      text: text,
      index: index,
      status: true
    });
  };

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <div className="container">
        <h1 className="text-center mb-4">Todo List</h1>
        <FormTodo addTodo={addTodo} edit={edit} updateTodo={updateTodo} />
        <div>
          {todos.map((todo, index) => (
            <Card key={index}>
              <Card.Body>
                <Todo
                  key={index}
                  index={index}
                  todo={todo}
                  markTodo={markTodo}
                  removeTodo={removeTodo}
                  editTodo={editTodo}
                />
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

Todo.propTypes = {
  todo: PropTypes.object,
  index: PropTypes.any,
  markTodo: PropTypes.any,
  removeTodo: PropTypes.any,
  editTodo: PropTypes.any
};

FormTodo.propTypes = {
  addTodo: PropTypes.any,
  edit: PropTypes.any,
  updateTodo: PropTypes.any
};

export default App;
