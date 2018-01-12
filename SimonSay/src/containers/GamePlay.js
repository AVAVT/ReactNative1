import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

import ColorButton from "../components/ColorButton";

export default class GamePlay extends Component {
  state = {
    score: 0,
    targetInput: [],
    userInputIndex: 0
  }

  _onPress = (input) => {
    const { targetInput, userInputIndex, score } = this.state;

    input !== targetInput[userInputIndex]
      ? this.props.onGameOver(this.state.score)
    : userInputIndex === targetInput.length - 1
      ? this._toNextLevel(this.state.score + 1)
      : this.setState({
        userInputIndex: userInputIndex + 1
      });
  }

  _randomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  _toNextLevel = (score) => {
    this.setState({
      score,
      userInputIndex: 0,
      targetInput: this._nextLevel(this.state.targetInput)
    })
  }

  _nextLevel = (targetInput) => {
    return targetInput.concat(this._randomInt(0, 4));
  }

  componentDidMount() {
    this._toNextLevel(0);
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