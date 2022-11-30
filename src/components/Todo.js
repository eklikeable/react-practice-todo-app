import React, { useState, useRef } from 'react';
import { GiCancel } from 'react-icons/gi';
import { GrCheckbox, GrCheckboxSelected } from 'react-icons/gr';
import { TbEdit } from 'react-icons/tb';

function Todo({ text, isCompleted, id, deleteTodo, completeTodo, updateTodo }) {
  const [isEdit, setIsEdit] = useState(false);
  const toggleIsEdit = () => {
    setIsEdit(!isEdit);
  };

  const [newText, setNewText] = useState(text);
  const newTextInput = useRef();

  const handleEdit = () => {
    if (!newText || /^\s*$/.test(newText)) {
      return;
    }
    updateTodo(id, newText);
    toggleIsEdit();
  };

  return (
    <div className={isCompleted ? 'todo complete' : 'todo'}>
      <span className='check icons' onClick={() => completeTodo(id)}>
        {isCompleted ? <GrCheckboxSelected /> : <GrCheckbox />}
      </span>

      {isEdit && ( // Edit mode ⭕
        <>
          <input
            className='editInput'
            ref={newTextInput}
            value={newText}
            autoFocus
            type='text'
            onChange={(e) => setNewText(e.target.value)}
          ></input>
          <div className='icons'>
            <GiCancel className='button-delete' onClick={toggleIsEdit} />
            <TbEdit className='button-edit' onClick={handleEdit} />
          </div>
        </>
      )}
      {isEdit || ( // Edit mode ❌
        <>
          <div className='todoText'>{text}</div>
          <div className='icons'>
            <GiCancel
              className='button-delete'
              onClick={() => deleteTodo(id)}
            />
            <TbEdit className='button-edit' onClick={toggleIsEdit} />
          </div>
        </>
      )}
    </div>
  );
}

export default Todo;
