import React, { useState } from "react";

function InputSample() {
  const [inputs, setInput] = useState({
    name: "",
    nickname: "",
  });

  const { name, nickname } = inputs;

  const onChange = (e) => {
    setText(e.target.value);
  };
  const onReset = () => {
    setText("");
  };

  return (
    <div>
      <input placeholder="name" />
      <input placeholder="nickname" />
      <button onClick={onReset}>Initialization</button>
      <div>
        <b>Value:</b>
        name (nickname)
      </div>
    </div>
  );
}

export default InputSample;
