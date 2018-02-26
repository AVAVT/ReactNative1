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
import { currencyRequestAction } from './actions';

import { AppNavigation } from './AppNavigation';

const persistData = store => next => action => {
  next(action);
  asyncSaveAppState(store.getState());
}

const asyncSaveAppState = async ({ baseValue, categoryId, categories }) => {
  try {
    await AsyncStorage.setItem("@appState", JSON.stringify({ baseValue, categoryId, categories }));
  }
  catch (err) {
    console.error(err);
  }
}

class App extends PureComponent {
  state = {
    isLoading: true
  }

  componentDidMount() {
    this._loadBaseValue();
  }

  _loadBaseValue = async () => {
    const savedState = await AsyncStorage.getItem("@appState");
    this.setState({
      isLoading: false,
      store: createStore(
        reducers,
        JSON.parse(savedState) || {},
        applyMiddleware(persistData, thunk)
      )
    }, () => { this.state.store.dispatch(currencyRequestAction()) });
  }

  render() {
    return (
      this.state.isLoading ?
        <Text>Loading... </Text>
        : (<Provider store={this.state.store}>
          <AppNavigation />
        </Provider>)
    );
  }
}

export default App;