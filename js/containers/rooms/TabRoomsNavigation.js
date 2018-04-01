import React, { Component } from 'react';
import { addNavigationHelpers } from 'react-navigation';
import { NavigatorTabRooms } from './navigationConfiguration';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class TabRoomsNavigation extends Component {
  static navigationOptions = {
    tabBarLabel: 'Rooms'
  };

  render() {
    const { navigationState, dispatch } = this.props;
    return (
      <NavigatorTabRooms
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
    navigationState: state.tabRooms
  };
};

const mapDispatchToProps = dispatch => {
  return {
    dispatch
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TabRoomsNavigation);
