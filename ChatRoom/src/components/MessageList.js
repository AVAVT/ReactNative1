import React, { PureComponent } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  FlatList
} from 'react-native';

import { connect } from 'react-redux';

import ChatMessage from './ChatMessage';

class MessageList extends PureComponent {
  state = {}

  _keyExtractor = item => item.id.toString()

  _renderItem = ({ item }) => <ChatMessage message={item} />

  render() {
    return (<FlatList
      ref="list"
      data={this.props.messages}
      renderItem={this._renderItem}
      keyExtractor={this._keyExtractor}
      style={{ flex: 1 }}
    />)
  }
}

const mapAppStateToProps = ({ messages }) => ({ messages });

export default connect(mapAppStateToProps)(MessageList);