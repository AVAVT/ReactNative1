import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Dimensions
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
    const { width, height } = Dimensions.get("window");
    const gameBoardSize = Math.min(width, height);

    return (
      <View style={styles.container}>
        <Text>Hello React Native!</Text>
        <Text>{this.state.score}</Text>
        <Text>{this.state.targetInput}</Text>
        
        <View style={{
          width: gameBoardSize,
          height: gameBoardSize
        }}>
          <View style={[styles.container, styles.row]}>
            <ColorButton onPress={() => this._onPress(0)} background="red" />
            <ColorButton onPress={() => this._onPress(1)} background="yellow" />
          </View>
          <View style={[styles.container, styles.row]}>
            <ColorButton onPress={() => this._onPress(2)} background="blue" />
            <ColorButton onPress={() => this._onPress(3)} background="green" />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  row: {
    flexDirection: "row"
  }
})