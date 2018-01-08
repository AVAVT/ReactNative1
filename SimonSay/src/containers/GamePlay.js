import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

import ColorButton from "./components/ColorButton";

export default class GamePlay extends Component {
  state = {
    score: 0,
    targetInput: [],
    userInputIndex: 0
  }

  _onPress = (input) => {
    const {targetInput, userInputIndex, score} = this.state;
    
    input === targetInput[userInputIndex]
      && this.setState({
        score: score + 1,
        userInputIndex: userInputIndex + 1
      });
  }

  _randomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  componentDidMount() {
    this.setState({
      targetInput: Array.from({ length: 6 }, item => this._randomInt(0, 4))
    })
  }

  render() {
    return (
      <View>
        <Text>Hello React Native!</Text>
        <Text>{this.state.score}</Text>
        <Text>{this.state.targetInput}</Text>
        <ColorButton onPress={() => this._onPress(0)} background="red" />
        <ColorButton onPress={() => this._onPress(1)} background="yellow" />
        <ColorButton onPress={() => this._onPress(2)} background="blue" />
        <ColorButton onPress={() => this._onPress(3)} background="green" />
      </View>
    );
  }
}