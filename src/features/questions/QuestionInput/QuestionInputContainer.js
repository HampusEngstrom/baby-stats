import { connect } from "react-redux";
import QuestionInput from "./QuestionInput";
import { setActiveQuestion } from "../questionsActions";
import { getActiveQuestion } from "../questionsSelectors";

const mapStateToProps = state => ({
  activeQuestion: getActiveQuestion(state)
});

const mapDispatchToPropes = {
  setActiveQuestion
};

export default connect(
  mapStateToProps,
  mapDispatchToPropes
)(QuestionInput);
