/*
 * HomeReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */
import { fromJS } from 'immutable';

import {
  CHANGE_USERNAME, CHANGE_REPONAME, CHANGE_SINCE_DATE, CHANGE_SORT_BY, CHANGE_SORT_ORDER, SORT_OPTIONS, STATE_OPTIONS, CHANGE_STATE, CHANGE_FILTER,
} from './constants';

// The initial state of the App
const initialState = fromJS({
  username: 'atom',
  reponame: 'atom',
  sinceDate: false,
  sortBy: SORT_OPTIONS[0],
  sortOrder: null,
  state: STATE_OPTIONS[0],
});

function homeReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_USERNAME:
      // Delete prefixed '@' from the github username
      return state
        .set('username', action.name.replace(/@/gi, ''));
    case CHANGE_REPONAME:
      return state
        .set('reponame', action.name);
    case CHANGE_SINCE_DATE:
      return state
        .set('sinceDate', action.date);
    case CHANGE_SORT_BY:
      return state
        .set('sortBy', action.sortBy);
    case CHANGE_SORT_ORDER:
      return state
        .set('sortOrder', action.sortOrder);
    case CHANGE_STATE:
      return state
        .set('state', action.state);
    case CHANGE_FILTER:
      return state
        .set('state', action.filter);
    default:
      return state;
  }
}

export default homeReducer;
