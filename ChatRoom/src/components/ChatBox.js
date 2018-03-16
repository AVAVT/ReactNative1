import React, { PureComponent } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput
} from 'react-native';

import { connect } from 'react-redux';

import { createSendMessageAction } from '../actions/';

class ChatBox extends PureComponent {
  state = {
    text: null
  }

  _onChangeText = text => this.setState({ text: text });

  _submit = () => {
    this.props.sendMessage({
      username: this.props.username,
      text: this.state.text
    });

    if (!this.props.noclear) {
      this.setState({
        text: null
      });
    }

    this.props.onSendMessage();
  }

  render() {
    return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'flex-end',
          borderColor: "#cccccc",
          borderWidth: 1,
          borderRadius: 20,
          paddingHorizontal: 10
        }}
      >
        <TextInput
          style={{ flex: 1, fontSize: 18, paddingVertical: 8 }}
          onChangeText={this._onChangeText}
          multiline={true}
          value={this.state.text}
          placeholder="Enter Message..." />
        <Button title="Send" onPress={this._submit} />
      </View>
    )
  }
}

const mapAppStateToProps = ({ loginStatus }) => ({ username: loginStatus.username })
const mapDispatchToProps = dispatch => ({
  sendMessage: ({ text, username }) => dispatch(createSendMessageAction(text, username))
})

export default connect(mapAppStateToProps, mapDispatchToProps)(ChatBox);