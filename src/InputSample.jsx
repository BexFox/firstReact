import React, { useState } from "react";

function InputSample() {
  const [inputs, setInputs] = useState({
    name: "",
    nickname: "",
  });
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
  };

  return (
    <div>
      <input name="name" placeholder="name" onChange={onChange} value={name} />
      <input
        name="nickname"
        placeholder="nickname"
        onChange={onChange}
        value={nickname}
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
