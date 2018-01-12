import React, { Component } from 'react';
import {
  View,
  TouchableOpacity
} from 'react-native';

class ColorButton extends Component {
  render() {
    return (
      <TouchableOpacity style={{ flex: 1 }} onPress={this.props.onPress}>
        <View style={{
          backgroundColor: this.props.background,
          flex: 1
        }}></View>
      </TouchableOpacity>
    );
  }
}

export default ColorButton;