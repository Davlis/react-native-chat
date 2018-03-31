import { StackNavigator } from 'react-navigation';
import MainContainer from './MainContainer';
import { darkTheme } from '../../styles';

const routeConfiguration = {
  MainContainer: { screen: MainContainer },
};

const stackNavigatorConfiguration = {
  initialRouteName: 'MainContainer',
  key: 'main',
  navigationOptions: {
    headerBackTitle: null
  },
  gesturesEnabled: true,
  cardStyle: {
    backgroundColor: darkTheme.headerBackground
  }
};

export const NavigatorTabMain = StackNavigator(
  routeConfiguration,
  stackNavigatorConfiguration
);
