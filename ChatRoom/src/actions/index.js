import {
  USERNAME_CHANGED,
  MESSAGE_SEND_LOADING,
  MESSAGE_SEND_SUCCESS,
  MESSAGE_SEND_ERROR,
  MESSAGE_ADD,
  LOGIN_SUCCESS,
  LOGIN_ERROR
} from './types';

import firebase from 'react-native-firebase';

export const createChangeUsernameAction = username => ({
  type: USERNAME_CHANGED,
  payload: username
});

const createSendMessageLoadingAction = (message) => ({
  type: MESSAGE_SEND_LOADING,
  payload: message
});

const createSendMessageSuccessAction = (message) => ({
  type: MESSAGE_SEND_SUCCESS,
  payload: message
});

const createSendMessageErrorAction = (message) => ({
  type: MESSAGE_SEND_ERROR,
  payload: message
});

const addMessage = (message) => ({
  type: MESSAGE_ADD,
  payload: message
})

var i = 0;
const getNextId = () => {
  i++;
  return i;
}

export const createSendMessageAction = (text, username) => dispatch => {
  var msg = {
    id: getNextId(),
    username,
    text,
    created: firebase.database.ServerValue.TIMESTAMP
  };
  dispatch(createSendMessageLoadingAction(msg));

  const newMsgRef = firebase.database()
    .ref('messages')
    .push();
  msg.id = newMsgRef.key;
  newMsgRef.set(msg);
}

const createLoginSuccessAction = (username) => ({
  type: LOGIN_SUCCESS,
  payload: username
});

const createLoginErrorAction = (error) => ({
  type: LOGIN_ERROR,
  payload: error
});

export const receiveMessage = (message) => dispatch => {
  dispatch(addMessage(message));
}

export const fetchMessages = () => (dispatch) => {
  const queryRef = firebase.database().ref('messages').orderByChild('created');

  queryRef.limitToLast(25).on('child_added', function (snap) {
    const message = snap.val() || {};
    message && dispatch(receiveMessage(message));
  });
}

export const login = ({ email, password }) => {
  return function (dispatch) {
    firebase.auth().signInAndRetrieveDataWithEmailAndPassword(email, password)
      .then((user) => {
        dispatch(createLoginSuccessAction(email));
        dispatch(fetchMessages());
      })
      .catch((error) => {
        const { code, message } = error;
        dispatch(createLoginErrorAction(error));
        console.error(code);
        console.error(message);
      });
  }
}

export const register = ({ email, password }) => {
  return function (dispatch) {
    firebase.auth().createUserAndRetrieveDataWithEmailAndPassword(email, password)
      .then((user) => {
        dispatch(createLoginSuccessAction(email));
        dispatch(fetchMessages());
      })
      .catch((error) => {
        const { code, message } = error;
        dispatch(createLoginErrorAction(error));
        console.error(code);
        console.error(message);
      });
  }
}