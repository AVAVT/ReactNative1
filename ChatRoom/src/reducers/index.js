import { combineReducers } from "redux";

import { navigationReducer } from '../AppNavigation';
import messagesReducer from './messagesReducer';
import usernameReducer from "./usernameReducer";


export default reducers = combineReducers({
  username: usernameReducer,
  messages: messagesReducer,
  nav: navigationReducer
});