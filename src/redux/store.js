import {applyMiddleware, combineReducers} from 'redux';
import { legacy_createStore as createStore} from 'redux'
import thunk from "redux-thunk";
import chatsReducer from "./chats_reducer";
import usersReducer from "./users_reducer";
import widthBlocksReducer from "./widthBlocks_reducer";
import profileReduser from "./profile_reduser";
import myProfileReducer from "./myProfile_reducer";
import settingsReducer from "./settings_reducer";
import notificationsReducer from "./notifications_reducer/notifications_reducer";

let reducers = combineReducers({
  myProfile: myProfileReducer,
  profile: profileReduser,
  chats: chatsReducer,
  users: usersReducer,
  settings: settingsReducer,
  widthBlocks: widthBlocksReducer,
  notifications: notificationsReducer,
});

let store = createStore(reducers, applyMiddleware(thunk));
export default store;

window.store = store;
