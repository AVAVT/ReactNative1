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
  View,
  Button
} from 'react-native';

import { connect } from 'react-redux';

import globalStyles from '../Styles';

import ConvertColumn from '../components/ConvertColumn';

import { categories } from '../database.json';

class ConvertScreen extends Component {
  state = {}

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Button title="Toggle Screen" onPress={this.props.toggleScreen} />
        <View style={[globalStyles.bgPrimary3, globalStyles.container, styles.appContainer]}>
          <ConvertColumn
            items={this.props.category.items}
          />
          <ConvertColumn
            items={this.props.category.items}
          />
        </View>
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

const mapAppStateToProps = state => ({
  category: categories.find(category => category.id === state.categoryId)
})

export default connect(mapAppStateToProps)(ConvertScreen);