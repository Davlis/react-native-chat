import {
  Platform, 
  StyleSheet, 
  Text,
  View,
  Button,
} from 'react-native';
import React, { Component } from 'react';
import ScrollableTabView, {
  DefaultTabBar
} from 'react-native-scrollable-tab-view';
import { darkTheme } from '../../styles';


export default class MainContainer extends Component {

  static navigationOptions = () => ({
    title: 'Home'.toUpperCase(),
    headerTitleStyle: { color: darkTheme.headerTitle },
    headerStyle: {
      backgroundColor: darkTheme.headerBackground,
      borderBottomColor: darkTheme.tabBarOutline,
      borderBottomWidth: 0.5
    }
  });

  renderTabBar = () => {
    return (
      <DefaultTabBar
        style={{
          borderBottomWidth: 0.5,
          borderBottomColor: darkTheme.tabBarOutline
        }}
      />
    );
  };

  render() {
    return (
      <ScrollableTabView
        key={'main'}
        locked={true}
        style={{ backgroundColor: darkTheme.tabInactiveBackground }}
        tabBarActiveTextColor={darkTheme.tabBarUnderlineColor}
        tabBarUnderlineStyle={{
          backgroundColor: darkTheme.tabBarUnderlineColor
        }}
        tabBarBackgroundColor={darkTheme.tabInactiveBackground}
        tabBarInactiveTextColor={darkTheme.tabBarUnderlineColor}
        renderTabBar={this.renderTabBar}
      >
        <View style={styles.container}
          route={'MainContainer'}
          navigation={this.props.navigation}
          tabLabel={'NEW'}>
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
        <View style={styles.container}
          route={'MainContainer'}
          navigation={this.props.navigation}
          tabLabel={'OLD'}>
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
            title="Click here"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
          />
        </View>
      </ScrollableTabView>
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
