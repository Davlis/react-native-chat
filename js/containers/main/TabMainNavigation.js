import React, { Component } from 'react';
import { addNavigationHelpers } from 'react-navigation';
import { NavigatorTabMain } from './navigationConfiguration';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import { bindActionCreators } from 'redux';

class TabMainNavigation extends Component {
  static navigationOptions = {
    tabBarLabel: 'Home',
    tabBarIcon: ({ tintColor }) => (
      <Icon size={20} name={'home'} color={tintColor} />
    )
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
