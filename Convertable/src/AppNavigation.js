import React, { PureComponent } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

import { connect } from 'react-redux';

import { StackNavigator, addNavigationHelpers } from "react-navigation";
import ConvertScreen from './containers/ConvertScreen';
import CategoryScreen from './containers/CategoryScreen';

const AppNavigator = StackNavigator({
  ConvertScreen: {
    screen: ConvertScreen
  },
  CategoryScreen: {
    screen: CategoryScreen
  }
});

const initialState = AppNavigator.router.getStateForAction(
  AppNavigator.router.getActionForPathAndParams("ConvertScreen")
);

export const navigationReducer = (state = initialState, action) => {
  const nextState = AppNavigator.router.getStateForAction(action, state);
  return nextState || state;
}

class AppWithNavigation extends PureComponent {
  state = {}
  render() {
    return (
      <AppNavigator
        navigation={addNavigationHelpers({
          dispatch: this.props.dispatch,
          state: this.props.nav
        })}
      />
    );
  }
}

const mapAppStateToProps = ({ nav }) => ({ nav });

export const AppNavigation = connect(mapAppStateToProps)(AppWithNavigation);