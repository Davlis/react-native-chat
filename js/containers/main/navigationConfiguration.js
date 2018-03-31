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
    flex: 1,
    flexDirection: 'column'
  },
  headerMode: 'none',
  mode: 'card',
};

export const NavigatorTabMain = StackNavigator(
  routeConfiguration,
  stackNavigatorConfiguration
);
