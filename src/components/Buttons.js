import React from "react";

const Button = props => {
  return (
    <div>
      <button className="positive ui button" test="positive">
        {props.positive}
      </button>
    </div>
  );
};

export default Button;
