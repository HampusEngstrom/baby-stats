import { connect } from "react-redux";
import SearchField from "./SearchField";

const mapStateToProps = state => ({
  text: "SearchField"
});

export default connect(mapStateToProps)(SearchField);
