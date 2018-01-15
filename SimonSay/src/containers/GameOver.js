import React, { PureComponent } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

class GameOver extends PureComponent {
  state = {}
  render() {
    return (
      <View style={{ flex: 1, paddingBottom: "25%", backgroundColor: "#B417E8", alignItems: "center", justifyContent: "center" }}>
        <Text style={{ fontSize: 48, color: "#000000" }}>Game Over</Text>
        <Text style={{ fontSize: 36, color: "#000000" }}>{`Final score: ${this.props.score}`}</Text>
        <Button color="#000000" onPress={this.props.onRetry} title="Retry" />
      </View>
    );
  }
}

export default GameOver;