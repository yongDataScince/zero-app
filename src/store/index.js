import thunk from "redux-thunk";

const { createStore, compose, applyMiddleware } = require("redux");
const { rootReducer } = require("./reducers/root");

export const store = createStore(rootReducer, compose(
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))