import React, { useState, useRef } from "react";

function InputSample() {
  const [inputs, setInputs] = useState({
    name: "",
    nickname: "",
  });
  const nameInput = useRef(); // @@1
  const nicknameInput = useRef(); // @@1-2

  const { name, nickname } = inputs;

  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
      // #1 if [name]:'corea', which result will be?
    });
  };

  const onReset = () => {
    setInputs({
      name: "",
      nickname: "",
    });
    nicknameInput.current.focus(); //@@2
  };

  return (
    <div>
      <input
        name="name"
        placeholder="name"
        onChange={onChange}
        value={name}
        ref={nameInput} //@@3
        autoFocus
      />
      <input
        name="nickname"
        placeholder="nickname"
        onChange={onChange}
        value={nickname}
        ref={nicknameInput} //@@3-2
      />
      <button onClick={onReset}>Initialization</button>
      <div>
        <b>Value: </b>
        <div>
          Name: {name} <br />
          Nickname: ({nickname})
        </div>
      </div>
    </div>
  );
}

export default InputSample;
