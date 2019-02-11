import React from "react";

const Button = props => {
  return (
    <div>
      <button className="positive ui button" test="positive">
        {props.positive}
      </button>
      <button className="negative ui button" test="negative">
        {props.negative}
      </button>
    </div>
  );
};

export default Button;
