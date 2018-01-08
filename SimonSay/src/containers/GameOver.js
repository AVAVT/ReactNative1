import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

class GameOver extends Component {
  state = {  }
  render() {
    return (
      <Text>{this.props.score}</Text>
    );
  }
}

export default GameOver;