import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunk from "redux-thunk";
import authReducer from "./authReducer";
import foodReducer from "./foodReducer";
// , applyMiddleware(thunk)

let index = combineReducers({ authReducer, foodReducer });

const store = createStore(index, compose(applyMiddleware(thunk)));
export default store;
