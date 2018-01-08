import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

import GamePlay from './containers/GamePlay';
import GameOver from './containers/GameOver';

const GAME_STATE = {
  PLAYING : "PLAYING",
  GAMEOVER: "GAMEOVER"
}

export default class App extends Component {
  state = {
    score: 0,
    gameState: GAME_STATE.PLAYING
  }

  render() {
    return this.state.gameState === GAME_STATE.PLAYING
      ? <GamePlay/>
      : <GameOver score={this.state.score} />;
  }
}