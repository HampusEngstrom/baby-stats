import { connect } from "react-redux";
import QuestionList from "./QuestionList";
import { getMatchingQuestions } from "./../questionsSelectors";

const mapStateToProps = state => {
  return {
    matchingQuestions: getMatchingQuestions(state)
  };
};

export default connect(mapStateToProps)(QuestionList);
