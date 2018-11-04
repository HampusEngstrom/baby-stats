import React from "react";
import Styled from "styled-components";

const LoadingSpinner = Styled.div`
  width: 100%;
  height: 100%;
  background-color: var(--main-bg-color);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Loading = props => <LoadingSpinner>{props.children}</LoadingSpinner>;

export default Loading;
