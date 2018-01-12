import React, { Component } from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

class ColorButton extends Component {
  render() {
    return (
      <TouchableOpacity style={styles.touchable} onPress={this.props.onPress}>
        <View style={[styles.colorView, {
          backgroundColor: this.props.background
        }]}></View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  touchable: {
    flex: 1,
    padding: 10
  },
  colorView: {
    borderRadius: 5,
    shadowRadius: 3,
    shadowOffset: {
      width: 0,
      height: 5
    },
    shadowColor: "black",
    shadowOpacity: 0.3,
    flex: 1
  }
})

export default ColorButton;