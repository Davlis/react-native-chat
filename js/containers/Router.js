import React, { Component } from 'react';
import { View } from 'react-native';
import { addNavigationHelpers } from 'react-navigation';
import { TabBar } from './navigationConfiguration';
import { connect } from 'react-redux';

class Router extends Component {
  render() {
    const { dispatch, navigationState } = this.props;
    return (
      <View style={{ flex: 1 }}>
        <TabBar
          navigation={addNavigationHelpers({
            dispatch: dispatch,
            state: navigationState
          })}
        />
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    navigationState: state.tabBar
  };
};

export default connect(mapStateToProps)(Router);
