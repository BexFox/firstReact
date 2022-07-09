import React, { useState, useRef } from 'react';
function InputSample() {
  const [inputs, setInputs] = useState({
    name: '',
    nickname: '',
  });
  const { name, nickname } = inputs;
  const nameInput = useRef();

  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };
  const onReset = () => {
    setInputs({
      name: '',
      nickname: '',
    });
    nameInput.current.focus();
  };

  return (
    <div className='InputSample'>
      <input
        name='name'
        placeholder='Name'
        value={name}
        onChange={onChange}
        ref={nameInput}
        autoFocus
      />
      <input
        name='nickname'
        placeholder='NickName'
        value={nickname}
        onChange={onChange}
      />
      <button onClick={onReset}>Initialization</button>
      <div>
        <b>Value: </b>
        {name} ({nickname})
      </div>
    </div>
  );
}

export default InputSample;
