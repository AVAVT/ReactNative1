import React, { PureComponent } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  KeyboardAvoidingView
} from 'react-native';

import MessageList from '../components/MessageList';
import ChatBox from '../components/ChatBox';

class ChatScreen extends PureComponent {
  static navigationOptions = ({ navigation }) => ({
    title: "Chat",
  });

  state = {
    sendMessage: false
  }

  onSendMessage = () => {
    this.setState({ sendMessage: true }, this.setState({ sendMessage: false }));
  }

  render() {
    return (
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior="padding"
        keyboardVerticalOffset={65}
      >
        <View style={{ flex: 1, paddingHorizontal: 10, paddingVertical: 5 }}>
          <MessageList scrollToEnd={this.state.sendMessage} />
          <ChatBox onSendMessage={this.onSendMessage} />
        </View>
      </KeyboardAvoidingView>
    )
  }
}

export default ChatScreen;