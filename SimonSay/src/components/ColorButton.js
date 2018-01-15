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
    width: "50%",
    height: "50%",
    padding: 10
  },
  colorView: {
    borderRadius: 5,
    flex: 1
  }
})

export default ColorButton;