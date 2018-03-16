import React, { PureComponent } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput
} from 'react-native';

import { connect } from 'react-redux';

import {
  createChangeEmailAction,
  register,
  login
} from '../actions';

const screenType = {
  LOGIN: "Login",
  REGISTER: "Register"
}

class LoginScreen extends PureComponent {
  static navigationOptions = ({ navigation }) => ({
    title: "Login",
  });

  state = {
    buttonDisabled: true,
    email: this.props.email,
    screenType: screenType.LOGIN,
    otherScreenType: screenType.REGISTER
  }

  componentWillReceiveProps = (props) => {
    if (props.loginStatus.status === "success") {
      this.props.navigation.navigate("ChatScreen");
    }
  }

  _onChangeEmail = (text) => {
    this.setState({
      email: text
    });
  }

  _onChangePassword = (text) => {
    this.setState({
      password: text
    })
  }

  _changeScreen = () => {
    this.setState({
      screenType: this.state.screenType === screenType.LOGIN ? screenType.REGISTER : screenType.LOGIN,
      otherScreenType: this.state.screenType === screenType.LOGIN ? screenType.LOGIN : screenType.REGISTER,
    })
  }

  _submit = () => {
    this.state.screenType === screenType.LOGIN ? this._login() : this._register();
  }

  _register = () => {
    this.props.register({
      email: this.state.email,
      password: this.state.password
    });
  }

  _login = () => {
    this.props.login({
      email: this.state.email,
      password: this.state.password
    });
  }

  render() {
    const buttonDisabled = !(this.state.email && this.state.password);
    return (
      <View style={{ flex: 1, paddingHorizontal: 10, paddingBottom: 150, alignItems: "center", justifyContent: "center" }}>
        <Text style={{ fontSize: 24 }}>{this.state.screenType}</Text>
        <TextInput
          onChangeText={this._onChangeEmail}
          autoFocus={true}
          value={this.state.email}
          placeholder="Email"
          style={{
            width: "100%",
            paddingVertical: 5,
            fontSize: 20,
            borderBottomColor: "#777777",
            borderBottomWidth: 1
          }}
        />
        <TextInput
          onChangeText={this._onChangePassword}
          value={this.state.password}
          placeholder="Password"
          secureTextEntry
          style={{
            width: "100%",
            paddingVertical: 5,
            fontSize: 20,
            borderBottomColor: "#777777",
            borderBottomWidth: 1
          }}
        />
        <Button title={this.state.screenType} disabled={buttonDisabled} onPress={this._submit} />
        <Button title={this.state.otherScreenType} onPress={this._changeScreen} />
      </View>
    );
  }
}

const mapAppStateToProps = ({ loginStatus }) => ({ username: loginStatus ? loginStatus.username : "", loginStatus })

const mapDispatchToProps = dispatch => ({
  login: ({ email, password }) => dispatch(login({ email, password })),
  register: ({ email, password }) => dispatch(register({ email, password }))
})

export default connect(mapAppStateToProps, mapDispatchToProps)(LoginScreen);