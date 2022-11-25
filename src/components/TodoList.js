import React, { useState } from 'react';
import Todo from './Todo';
import TodoForm from './TodoForm';

function TodoList() {
  const [todos, setTodos] = useState([]);

  // 1. addTodo
  function addTodo(todo) {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    } else {
      const newTodo = {
        id: todos.length + 1,
        text: todo.text,
        isCompleted: false,
      };
      const newTodos = [newTodo, ...todos];
      setTodos(newTodos);
      console.log(newTodos);
    }
  }

  // 2. deleteTodo
  const deleteTodo = (id) => {
    todos.map((todo) => {
      const updateTodos = todos.filter((todo) => todo.id !== id);
      return setTodos(updateTodos);
    });
  };

  // 3. completeTodo
  const completeTodo = (id) => {
    todos.map((todo) => {
      if (todo.id === id) {
        todo.isCompleted = !todo.isCompleted;
      }
      return setTodos([...todos]);
    });
  };

  return (
    <div>
      <TodoForm onSubmit={addTodo} todos={todos} />
      <Todo todos={todos} deleteTodo={deleteTodo} completeTodo={completeTodo} />
    </div>
  );
}

export default TodoList;
