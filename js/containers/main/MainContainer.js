import {
  Platform, 
  StyleSheet, 
  Text,
  View,
  Button,
} from 'react-native';
import React, { Component } from 'react';
import { darkTheme } from '../../styles';

import { TabViewAnimated, TabBar, SceneMap } from 'react-native-tab-view';


const FirstRoute = () => 
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
</View>;
const SecondRoute = () => <View style={[_styles.container, { backgroundColor: '#673ab7' }]}></View>;

export class TabViewExample extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: 'first', title: 'First' },
      { key: 'second', title: 'Second' },
    ],
  };

  _handleIndexChange = index => this.setState({ index });

  _renderHeader = props => <TabBar {...props} />;

  _renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
  });

  render() {
    return (
      <TabViewAnimated
        navigationState={this.state}
        renderScene={this._renderScene}
        renderHeader={this._renderHeader}
        onIndexChange={this._handleIndexChange}
      />
    );
  }
}

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
      <TabViewExample></TabViewExample>
    );
/*
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
*/
  }

  onPress() {
    this.props.navigation.navigate('MainContainer');
  }
}

const _styles = StyleSheet.create({
  container: {
    flex: 1,
  },
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

/*
import * as React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { TabViewAnimated, TabBar, SceneMap } from 'react-native-tab-view';

const initialLayout = {
  height: 0,
  width: Dimensions.get('window').width,
};

const FirstRoute = () => <View style={[ styles.container, { backgroundColor: '#ff4081' } ]} />;
const SecondRoute = () => <View style={[ styles.container, { backgroundColor: '#673ab7' } ]} />;

export default class TabViewExample extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: 'first', title: 'First' },
      { key: 'second', title: 'Second' },
    ],
  };

  _handleIndexChange = index => this.setState({ index });

  _renderHeader = props => <TabBar {...props} />;

  _renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
  });

  render() {
    return (
      <TabViewAnimated
        navigationState={this.state}
        renderScene={this._renderScene}
        renderHeader={this._renderHeader}
        onIndexChange={this._handleIndexChange}
        initialLayout={initialLayout}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
*/