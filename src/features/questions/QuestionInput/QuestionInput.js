import React from "react";
import Style from "./QuestionInput.module.css";
import QuestionInput from "../../../components/QuestionInput";

class SearchField extends React.PureComponent {
  render() {
    return (
      <div className={Style.container}>
        <div className={Style.searchContainer} tabIndex="1">
          <div className={Style.icon}>
            <i className={"fa fa-search"} />
          </div>
          <QuestionInput
            value={this.props.activeQuestion}
            onChangeHandler={this.props.setActiveQuestion}
          />
        </div>
      </div>
    );
  }
}

export default SearchField;
