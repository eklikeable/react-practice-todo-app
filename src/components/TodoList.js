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

  return (
    <div>
      <TodoForm onSubmit={addTodo} todos={todos} />
      <Todo todos={todos} />
    </div>
  );
}

export default TodoList;
