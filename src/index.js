// External imports
import React from "react";
import { render } from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devetools-extensions";

// Local imports
import App from "./App";
import rootReducer from "./reducers";

// Assets
import "./index.css";

const store = createStore(
  rootReducerm,
  composeWithDevTools(applyMiddleware(thunk))
);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
