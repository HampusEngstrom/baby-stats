import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";

import { configureStore } from "./app/store/configureStore";

import App from "./App";
import reducer from "./app/reducer";

const store = configureStore({
  reducer
  // thunkInjection: { api: sharedServices(settings, cmsDataEndPoint) }
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#app")
);
