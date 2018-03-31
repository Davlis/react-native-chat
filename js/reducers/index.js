import { combineReducers } from 'redux';
import BasicReducer from './BasicReducer';

import { NavigatorTabMain } from '../containers/main/navigationConfiguration';

import { tabBarReducer } from '../containers/navigationConfiguration';

const rootReducer = combineReducers({
  tabBar: tabBarReducer,
  tabMain: (state, action) =>
    NavigatorTabMain.router.getStateForAction(action, state),
  basic: BasicReducer
});

export default rootReducer;
