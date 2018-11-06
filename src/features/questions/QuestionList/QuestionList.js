import React from "react";

const QuestionList = props => (
  <ul>
    {props.matchingQuestions.map((match, key) => (
      <li key={key}>{match}</li>
    ))}
  </ul>
);

export default QuestionList;
