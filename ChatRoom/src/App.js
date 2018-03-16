import React, { PureComponent } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  AsyncStorage
} from 'react-native';

import { Provider, connect } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import reducers from './reducers/';

import { AppNavigation } from './AppNavigation';

import { login } from './actions';

const store = createStore(
  reducers,
  applyMiddleware(thunk)
);

class App extends PureComponent {
  state = {
    isLoading: true
  }

  render() {
    return (
      <Provider store={store}>
        <AppNavigation />
      </Provider>
    );
  }
}

export default App;