import React from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";
import Style from "./App.module.less";
import SearchField from "./features/findQuestion/SearchField";
import Styled from "styled-components";

import { getIsFetching } from ".features/app/appActions";

const Background = Styled.div`
  width: 100%;
  height: 100%;
  background-color: var(--main-bg-color);
`;

const App = () => {
  return (
    <Background>
      <Loading>
        <SearchField />
      </Loading>
    </Background>
  );
};

const mapStateToProps = state => ({
  isFetching: getIsFetching(state)
});

export default connect(mapStateToProps)(App);
