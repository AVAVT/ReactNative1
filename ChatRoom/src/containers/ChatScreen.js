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
    scrollToEnd: false
  }

  render() {
    return (
      <View style={{ flex: 1, paddingHorizontal: 10, paddingVertical: 5 }}>
        <MessageList />
        <ChatBox />
      </View>
    )
  }
}

export default ChatScreen;