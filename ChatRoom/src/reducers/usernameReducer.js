import { USERNAME_CHANGED } from '../actions/types';

export default usernameReducer = (state = "", action) =>
  action.type === USERNAME_CHANGED
    ? action.payload
    : state