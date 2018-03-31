import {
  BASIC_ACTION
} from '../actions/types';

const INITIAL_STATE = {
  isLoading: false,
  i: 0
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case BASIC_ACTION:
      return {
        ...state,
        i: i + 1
      }
    default:
      return state;
  }
};
