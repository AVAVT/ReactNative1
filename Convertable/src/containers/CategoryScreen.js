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

import { connect } from 'react-redux';
import { createChangeCategoryAction } from '../actions';

class CategoryScreen extends PureComponent {
  static navigationOptions = ({ navigation }) => ({
    title: "Categories"
  });

  _onCategoryChanged = id => {
    this.props.changeCategory(id);
    this.props.navigation.goBack();
  }
  
  _keyExtractor = item => item.id;

  _renderItem = ({ item, index }) => (<UnitSelector
    onChangeUnitId={this._onCategoryChanged}
    item={{ title: item.name, id: item.id }}
    isEven={index % 2 === 0}
    isSelected={item.id === this.props.categoryId}
  />)

  render() {
    return (
      <FlatList
        style={[globalStyles.bgPrimary3, { flex: 1 }]}
        data={categories}
        renderItem={this._renderItem}
        keyExtractor={this._keyExtractor}
      />
    );
  }
}

const mapAppStateToProps = ({ categoryId }) => ({ categoryId })

const mapDispatchToProps = dispatch => ({
  changeCategory: id => dispatch(createChangeCategoryAction(id))
});

export default connect(mapAppStateToProps, mapDispatchToProps)(CategoryScreen);