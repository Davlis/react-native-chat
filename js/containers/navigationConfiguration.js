import { TabNavigator } from 'react-navigation';

import TabMainNavigation from './main/TabMainNavigation';

import { Platform } from 'react-native';

import { darkTheme } from '../styles';

const routeConfiguration = {
  TabMainNavigation: { screen: TabMainNavigation },
};

const tabBarConfiguration = {
  tabBarOptions: {
    showIcon: true,
    showLabel: true,
    upperCaseLabel: false,
    labelStyle: {
      fontSize: 10,
      marginBottom: Platform.OS === 'ios' ? 2 : -2
    },
    pressOpacity: 0.1,
    indicatorStyle: {
      backgroundColor: darkTheme.tabActiveIconTint
    },
    activeTintColor: darkTheme.tabActiveIconTint,
    inactiveTintColor: darkTheme.tabInactiveIconTint,
    activeBackgroundColor: darkTheme.tabActiveBackground,
    inactiveBackgroundColor: darkTheme.tabInactiveBackground,
    style: {
      backgroundColor: Platform.OS === 'ios'
        ? darkTheme.headerBackground
        : darkTheme.headerBackground,
      borderTopWidth: Platform.OS === 'ios' ? 0.5 : 0.5,
      borderColor: darkTheme.tabBarOutline
    }
  },
  lazy: true,
  tabBarPosition: 'bottom',
  swipeEnabled: false
};

export const TabBar = TabNavigator(routeConfiguration, tabBarConfiguration);

export const tabBarReducer = (state, action) => {
  if (action.type === 'JUMP_TO_TAB') {
    return { ...state, index: 0 };
  } else {
    return TabBar.router.getStateForAction(action, state);
  }
};
