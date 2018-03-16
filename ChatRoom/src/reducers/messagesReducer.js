import {
  MESSAGE_SEND_LOADING, MESSAGE_ADD
} from '../actions/types'

export default messagesReducer = (state = [], action) =>
  action.type === MESSAGE_ADD
    ? [...state, action.payload]
    : state