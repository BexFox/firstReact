import React from "react";

function Hello({ name, color, isSpecial }) {
  return (
    <div style={{ color }}>
      {isSpecial && "It'll be shown when {isSpecial}value is ture"}
    </div>
  );
}

Hello.defaultProps = {
  name: "Unnamed",
};

export default Hello;
