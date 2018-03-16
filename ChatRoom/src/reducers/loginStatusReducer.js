import {
  LOGIN_ERROR,
  LOGIN_SUCCESS
} from '../actions/types'

export default messagesReducer = (state = {}, action) =>
  action.type === LOGIN_SUCCESS
    ? { status: "success", username: action.payload }
    : action.type === LOGIN_ERROR
      ? { status: "error", error: action.payload }
      : state