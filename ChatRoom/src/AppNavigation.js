import React, { PureComponent } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

import { connect } from 'react-redux';

import { StackNavigator, addNavigationHelpers } from "react-navigation";
import {
  createReduxBoundAddListener,
  createReactNavigationReduxMiddleware,
} from 'react-navigation-redux-helpers';

import ChatScreen from './containers/ChatScreen';
import LoginScreen from './containers/LoginScreen';

const AppNavigator = StackNavigator({
  ChatScreen: {
    screen: ChatScreen
  },
  LoginScreen: {
    screen: LoginScreen
  }
});

const initialState = AppNavigator.router.getStateForAction(
  AppNavigator.router.getActionForPathAndParams("LoginScreen")
);

export const navigationReducer = (state = initialState, action) => {
  const nextState = AppNavigator.router.getStateForAction(action, state);
  return nextState || state;
}

const middleware = createReactNavigationReduxMiddleware(
  "root",
  state => state.nav,
);
const addListener = createReduxBoundAddListener("root");

class AppWithNavigation extends PureComponent {
  state = {}
  render() {
    return (
      <AppNavigator
        navigation={addNavigationHelpers({
          dispatch: this.props.dispatch,
          state: this.props.nav,
          addListener
        })}
      />
    );
  }
}

const mapAppStateToProps = ({ nav }) => ({ nav });

export const AppNavigation = connect(mapAppStateToProps)(AppWithNavigation);