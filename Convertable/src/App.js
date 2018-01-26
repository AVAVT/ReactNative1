/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import globalStyles from './Styles';

import ConvertColumn from './components/ConvertColumn';

export default class App extends Component {
  state = {
    items: [
      { id: 0, title: "Meter", ratio: 1 },
      { id: 1, title: "Decimeter", ratio: 0.1 },
      { id: 2, title: "Centimeter", ratio: 0.01 },
      { id: 3, title: "Milimeter", ratio: 0.001 }
    ],
    baseValue: 0
  }

  _updateBaseValue = (value) => this.setState({ baseValue: value });

  render() {
    return (
      <View style={[globalStyles.bgPrimary3, globalStyles.container, styles.appContainer]}>
        <ConvertColumn
          items={this.state.items}
          baseValue={this.state.baseValue}
          updateBaseValue={this._updateBaseValue}
        />
        <ConvertColumn
          items={this.state.items}
          baseValue={this.state.baseValue}
          updateBaseValue={this._updateBaseValue}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 20,
    flexDirection: "row"
  }
});