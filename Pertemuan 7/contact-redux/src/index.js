import React from "react";
import ReactDOM from "react-dom";
import { createStore, combineReducers } from "redux"; //mporting redux ke dalam react app
import { Provider } from "react-redux"; // mporting redux ke dalam react app
import { reducer as formReducer } from "redux-form"; // mporting redux ke dalam react app
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

const rootReducer = combineReducers({
  form: formReducer,
});
const store = createStore(rootReducer);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
