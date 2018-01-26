import React, { PureComponent } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

import globalStyles from '../Styles';

import UnitDisplay from './UnitDisplay';
import UnitList from './UnitList';

class ConvertColumn extends PureComponent {
  state = {
    currentUnitId : 0
  }

  _onChangeUnitId = (id) => this.setState({currentUnitId : id});

  _onChangeText = (text) => {
    const currentItem = this.props.items.filter(
      item => item.id === this.state.currentUnitId
    )[0];

    this.props.updateBaseValue(
      parseFloat(text || 0) * currentItem.ratio
    );
  }

  render() {
    const currentItem = this.props.items.filter(
      item => item.id === this.state.currentUnitId
    )[0];
    
    return (
      <View style={[styles.column]}>
        <UnitDisplay
          title={currentItem.title}
          value={this.props.baseValue/currentItem.ratio}
          onChange={this._onChangeText}
        />
        <UnitList 
          items={this.props.items} 
          selectedId={this.state.currentUnitId}
          onChangeUnitId={this._onChangeUnitId}
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  column : {
    flex: 1
  }
});

export default ConvertColumn;