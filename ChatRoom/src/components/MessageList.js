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

  componentWillReceiveProps(nextProps) {
    if (nextProps.scrollToEnd) this.list.scrollToEnd();
  }

  render() {
    return (<FlatList
      ref={p => this.list = p}
      data={this.props.messages}
      renderItem={this._renderItem}
      keyExtractor={this._keyExtractor}
      style={{ flex: 1 }}
    />)
  }
}

const mapAppStateToProps = ({ messages }) => ({ messages });

export default connect(mapAppStateToProps)(MessageList);