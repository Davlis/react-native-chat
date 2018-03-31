import React, { Component } from 'react';
import { addNavigationHelpers } from 'react-navigation';
import { NavigatorTabMain } from './navigationConfiguration';
import { connect } from 'react-redux';

import { bindActionCreators } from 'redux';

class TabMainNavigation extends Component {
  static navigationOptions = {
    tabBarLabel: 'Home'
  };

  render() {
    const { navigationState, dispatch } = this.props;
    return (
      <NavigatorTabMain
        navigation={addNavigationHelpers({
          dispatch: dispatch,
          state: navigationState
        })}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    navigationState: state.tabMain
  };
};

const mapDispatchToProps = dispatch => {
  return {
    dispatch
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TabMainNavigation);
