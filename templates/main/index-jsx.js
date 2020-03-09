module.exports = `
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";

const store = createStore(() => {}, {}, applyMiddleware());

ReactDOM.render(
    <Provider store={store}>
      <div>
        <h1>My App!</h1>
      </div>
    </Provider>,
    document.getElementById("root")
);
`;
