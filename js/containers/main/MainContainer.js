import {
  Platform, 
  StyleSheet, 
  Text,
  View,
  Button,
} from 'react-native';
import React, { Component } from 'react';
import { darkTheme } from '../../styles';

export default class MainContainer extends Component {

  static navigationOptions = () => ({
    title: 'Home'.toUpperCase(),
    headerTitleStyle: { color: darkTheme.headerTitle },
    headerStyle: {
      backgroundColor: darkTheme.headerBackground
    }
  });

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to Diffuse!
        </Text>
        <Text style={styles.instructions}>
          To get started, simply pick username
        </Text>
        <Text style={styles.instructions}>
          Enjoy your time
        </Text>
        <Button
          onPress={() => this.onPress()}
          title="Learn More"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />

      </View>
    );
  }

  onPress() {
    this.props.navigation.navigate('MainContainer');
  }
}

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