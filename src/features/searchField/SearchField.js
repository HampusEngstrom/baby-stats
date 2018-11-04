import React from "react";
import Style from "./SearchField.module.css";

class SearchField extends React.PureComponent {
  render() {
    return (
      <div className={Style.container}>
        <div className={Style.searchContainer}>
          <div className={Style.icon}>
            <i className={"fa fa-search"} />
          </div>
          <input />
        </div>
      </div>
    );
  }
}

export default SearchField;
