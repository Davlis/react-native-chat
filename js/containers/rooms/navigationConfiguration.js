import { StackNavigator } from 'react-navigation';
import RoomsContainer from './RoomsContainer';
import { darkTheme } from '../../styles';

const routeConfiguration = {
  RoomsContainer: { screen: RoomsContainer },
};

const stackNavigatorConfiguration = {
  initialRouteName: 'RoomsContainer',
  key: 'rooms',
  navigationOptions: {
    headerBackTitle: null
  },
  gesturesEnabled: true,
  cardStyle: {
    backgroundColor: darkTheme.headerBackground
  }
};

export const NavigatorTabRooms = StackNavigator(
  routeConfiguration,
  stackNavigatorConfiguration
);
