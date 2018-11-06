import React from "react";

const QuestionInput = props => (
  <input
    value={props.value}
    onChange={e => {
      props.onChangeHandler(e.target.value);
    }}
  />
);

export default QuestionInput;
