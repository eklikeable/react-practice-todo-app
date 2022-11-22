import React from 'react';
import { GiCancel } from 'react-icons/gi';
import { TbEdit } from 'react-icons/tb';

function Todo({ todos }) {
  return todos.map((todo, index) => (
    <div key={index} className={todo.isCompleted ? 'todo complete' : 'todo'}>
      <div key={todo.id}>{todo.text}</div>
      <div className='icons'>
        <GiCancel className='button-delete' />
        <TbEdit className='button-edit' />
      </div>
    </div>
  ));
}

export default Todo;
