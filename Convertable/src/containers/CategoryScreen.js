import React, { PureComponent } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  FlatList
} from 'react-native';

import globalStyles from '../Styles';
import { categories } from '../database.json';
import UnitSelector from '../components/UnitSelector';

class CategoryScreen extends PureComponent {
  _onChangeCategoryId = id => console.log(id);

  _keyExtractor = item => item.id;

  _renderItem = ({ item, index }) => (<UnitSelector
    onChangeUnitId={this._onChangeCategoryId}
    item={{ title: item.name, id: item.id }}
    isEven={index % 2 === 0}
  // isSelected={item.id === this.props.selectedId}
  />)

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Button title="Toggle Screen" onPress={this.props.toggleScreen} />
        <FlatList
          style={[globalStyles.bgPrimary3, { flex: 1 }]}
          data={categories}
          renderItem={this._renderItem}
          keyExtractor={this._keyExtractor}
        />
      </View>
    );
  }
}

export default CategoryScreen;