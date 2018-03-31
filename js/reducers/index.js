import { combineReducers } from 'redux';
import BasicReducer from './BasicReducer';

import { NavigatorTabMain } from '../containers/main/navigationConfiguration';
import { NavigatorTabRooms } from '../containers/rooms/navigationConfiguration';

import { tabBarReducer } from '../containers/navigationConfiguration';

const rootReducer = combineReducers({
  tabBar: tabBarReducer,
  tabMain: (state, action) =>
    NavigatorTabMain.router.getStateForAction(action, state),
  tabRooms: (state, action) =>
    NavigatorTabRooms.router.getStateForAction(action, state),
  basic: BasicReducer
});

export default rootReducer;
