import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Dimensions,
  Platform
} from 'react-native';

import ColorButton from "../components/ColorButton";

export default class GamePlay extends Component {
  state = {
    score: 0,
    targetInput: [],
    userInputIndex: 0,
    gameBoardSize: 0
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

  _onLayout = (event) => {
    const { width, height } = event.nativeEvent.layout;

    this.setState({
      gameBoardSize: Math.min(width, height)
    });
  }

  componentDidMount() {
    this._toNextLevel(0);
  }

  render() {
    return (
      <View style={[styles.container, styles.wrapper]}>
        <Text style={styles.scoreText}>{`Score: ${this.state.score}`}</Text>
        <View style={styles.boardContainer} onLayout={this._onLayout}>
          <View style={[
            styles.gameBoard,
            {
              width: this.state.gameBoardSize,
              height: this.state.gameBoardSize
            }
          ]}>
            <ColorButton onPress={() => this._onPress(0)} background="red" />
            <ColorButton onPress={() => this._onPress(1)} background="yellow" />
            <ColorButton onPress={() => this._onPress(2)} background="blue" />
            <ColorButton onPress={() => this._onPress(3)} background="green" />
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  wrapper: {
    paddingTop: 20,
    alignItems: "center"
  },
  container: {
    flex: 1
  },
  scoreText: {
    paddingVertical: 30,
    fontSize: 36
  },
  boardContainer: {
    flex: 1,
    width: "100%",
    alignItems: "center"
  },
  gameBoard: {
    flexWrap: "wrap"
  }
});