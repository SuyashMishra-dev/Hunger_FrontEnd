import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunk from "redux-thunk";
import authReducer from "./authReducer";
import foodReducer from "./foodReducer";
// , applyMiddleware(thunk)

let index = combineReducers({ authReducer, foodReducer });

const store = createStore(
  index,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
export default store;
