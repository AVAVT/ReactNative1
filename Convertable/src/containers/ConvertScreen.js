/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

import { connect } from 'react-redux';

import globalStyles from '../Styles';

import ConvertColumn from '../components/ConvertColumn';

class ConvertScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params ? navigation.state.params.title : "",
    headerRight: (
      <Button 
        title="Categories" 
        onPress={() => navigation.navigate("CategoryScreen")} 
      />
    )
  });
  componentDidMount() {
    this.props.navigation.setParams({
      title: this.props.category.name
    });
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.category.name !== this.props.category.name){
      this.props.navigation.setParams({
        title: nextProps.category.name
      });
    }
  }

  render() {
    return (
      <View style={[globalStyles.bgPrimary3, globalStyles.container, styles.appContainer]}>
        <ConvertColumn
          items={this.props.category.items}
        />
        <ConvertColumn
          items={this.props.category.items}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  appContainer: {
    flexDirection: "row"
  }
});

const mapAppStateToProps = state => ({
  category: state.categories.find(category => category.id === state.categoryId)
})

export default connect(mapAppStateToProps)(ConvertScreen);