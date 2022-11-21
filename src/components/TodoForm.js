import React, { useState } from 'react';

function TodoForm(props) {
  const [input, setInput] = useState('');

  const onChange = (event) => {
    setInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onSubmit({
      id: Date.now(),
      text: input,
      isCompleted: false,
    });
    setInput('');
  };

  return (
    <div>
      <h1>오늘 할 일은 오늘 끝내자!</h1>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          name='text'
          value={input}
          placeholder='Add to do'
          onChange={onChange}
        ></input>
        <button>add</button>
      </form>
    </div>
  );
}

export default TodoForm;
