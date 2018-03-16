import React, { PureComponent } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput
} from 'react-native';

import { connect } from 'react-redux';

import { createChangeUsernameAction } from '../actions';

class LoginScreen extends PureComponent {
  static navigationOptions = ({ navigation }) => ({
    title: "Login",
  });

  state = {
    buttonDisabled: true,
    username: this.props.username
  }

  _onChange = (text) => {
    this.setState({
      username: text,
      buttonDisabled: text.length <= 0
    });
  }

  _login = () => {
    this.props.changeUsername(this.state.username);
    this.props.navigation.navigate("ChatScreen");
  }

  render() {
    return (
      <View style={{ flex: 1, paddingHorizontal: 10, paddingBottom: 150, justifyContent: "center" }}>
        <TextInput
          onChangeText={this._onChange}
          autoFocus={true}
          value={this.state.username}
          style={{
            fontSize: 20,
            borderBottomColor: "#777777",
            borderBottomWidth: 1
          }}
        />
        <Button title="Login" disabled={this.state.buttonDisabled} onPress={this._login} />
      </View>
    );
  }
}

const mapAppStateToProps = ({ username }) => ({ username })

const mapDispatchToProps = dispatch => ({
  changeUsername: username => dispatch(createChangeUsernameAction(username))
})

export default connect(mapAppStateToProps, mapDispatchToProps)(LoginScreen);