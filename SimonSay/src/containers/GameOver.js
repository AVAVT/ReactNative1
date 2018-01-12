import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

class GameOver extends Component {
  state = {}
  render() {
    return (
      <View>
        <Text>{this.props.score}</Text>
        <Button onPress={this.props.onRetry} title="Retry" />
      </View>
    );
  }
}

export default GameOver;