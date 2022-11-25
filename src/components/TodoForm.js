import React, { useState } from 'react';

function TodoForm(props) {
  const [input, setInput] = useState('');

  const onChange = (event) => {
    setInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onSubmit({
      text: input,
    });
    setInput('');
  };

  return (
    <div>
      <h1>오늘 할 일은 오늘 끝내자!</h1>
      <form onSubmit={handleSubmit} className='todo-form'>
        <input
          type='text'
          name='text'
          value={input}
          placeholder='Add to do'
          onChange={onChange}
          className='input-box'
        ></input>
        <button>add</button>
      </form>
    </div>
  );
}

export default TodoForm;