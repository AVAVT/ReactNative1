import { combineReducers } from "redux";

import { navigationReducer } from '../AppNavigation';
import messagesReducer from './messagesReducer';
import usernameReducer from "./usernameReducer";
import loginStatusReducer from "./loginStatusReducer";


export default reducers = combineReducers({
  loginStatus: loginStatusReducer,
  username: usernameReducer,
  messages: messagesReducer,
  nav: navigationReducer
});