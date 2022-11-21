import React, { useState, useEffect } from 'react';
import Todo from './Todo';
import TodoForm from './TodoForm';

function TodoList() {
  const [todos, setTodos] = useState([]);

  // 1. addTodo
  function addTodo(todo) {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    } else {
      const newTodos = [todo.text, ...todos];
      setTodos(newTodos);
      console.log(newTodos);
    }
  }

  return (
    <div>
      <TodoForm onSubmit={addTodo} />
      <Todo />
    </div>
  );
}

export default TodoList;
