import { legacy_createStore as createStore} from 'redux'
import main_reducer from "./main_reducer";
import {applyMiddleware, combineReducers} from 'redux';
import thunk from "redux-thunk";

let reducers = combineReducers({
  main: main_reducer,
});

let store = createStore(reducers, applyMiddleware(thunk));
export default store;

window.store = store;
