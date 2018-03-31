import React, { Component } from 'react';
import { connect } from 'react-redux';
import { 
  StyleSheet, 
  View, 
  Text, 
  Button 
} from 'react-native';

export default class StoryListContainer extends Component {

  render() {
    return (
      <View>
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
