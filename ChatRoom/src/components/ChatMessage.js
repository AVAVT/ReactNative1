import React, { PureComponent } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

import moment from 'moment';

class ChatMessage extends PureComponent {
  state = {}

  render() {
    return (
      <View style={{ flexDirection: "row", paddingVertical: 5 }}>
        <Text style={{ fontWeight: 'bold' }}>{this.props.message.username}: </Text>
        <Text style={{ flex: 1 }}>{this.props.message.text}</Text>
        <Text>{moment(new Date(this.props.message.created)).format('LT')}</Text>
      </View>
    );
  }
}

export default ChatMessage;