import {
  Platform, 
  StyleSheet, 
  Text,
  View 
} from 'react-native';
import React, { Component } from 'react';
import { darkTheme } from '../../styles';

import { Button } from 'react-native';

export default class RoomsContainer extends Component {

  static navigationOptions = () => ({
    title: 'Rooms'.toUpperCase(),
    headerTitleStyle: { color: darkTheme.headerTitle },
    headerStyle: {
      backgroundColor: darkTheme.headerBackground,
      borderBottomColor: darkTheme.tabBarOutline,
      borderBottomWidth: 0.5
    }
  });

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit App.jsss
        </Text>
        <Text style={styles.instructions}>
          {instructions}
        </Text>
      </View>
    );
  }
}

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
