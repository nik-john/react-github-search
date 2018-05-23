/*
 * Home Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

import {
  CHANGE_USERNAME, CHANGE_REPONAME, CHANGE_SINCE_DATE, CHANGE_SORT_ORDER, CHANGE_SORT_BY, CHANGE_STATE, CHANGE_ASSIGNEE, CHANGE_CREATOR, CHANGE_MENTIONED, CHANGE_LABELS, CHANGE_MILESTONE,
} from './constants';

/**
 * Changes the username input field of the form
 *
 * @param  {name} name The new text of the input field
 *
 * @return {object}    An action object with a type of CHANGE_USERNAME
 */
export function changeUsername(name) {
  return {
    type: CHANGE_USERNAME,
    name,
  };
}
/**
 * Changes the reponame input field of the form
 *
 * @param  {name} name The new text of the input field
 *
 * @return {object}    An action object with a type of CHANGE_REPONAME
 */
export function changeReponame(name) {
  return {
    type: CHANGE_REPONAME,
    name,
  };
}
/**
 * Changes the Assignee input field of the form
 *
 * @param  {assignee} assignee The new text of the input field
 *
 * @return {object}    An action object with a type of CHANGE_ASSIGNEE
 */
export function changeAssignee(assignee) {
  return {
    type: CHANGE_ASSIGNEE,
    assignee,
  };
}
/**
 * Changes the creator input field of the form
 *
 * @param  {creator} creator The new text of the input field
 *
 * @return {object}    An action object with a type of CHANGE_CREATOR
 */
export function changeCreator(creator) {
  return {
    type: CHANGE_CREATOR,
    creator,
  };
}
/**
 * Changes the mentioned input field of the form
 *
 * @param  {mentioned} mentioned The new text of the input field
 *
 * @return {object}    An action object with a type of CHANGE_MENTIONED
 */
export function changeMentioned(mentioned) {
  return {
    type: CHANGE_MENTIONED,
    mentioned,
  };
}
/**
 * Changes the labels input field of the form
 *
 * @param  {labels} labels The new text of the input field
 *
 * @return {object}    An action object with a type of CHANGE_LABELS
 */
export function changeLabels(labels) {
  return {
    type: CHANGE_LABELS,
    labels,
  };
}
/**
 * Changes the milestone input field of the form
 *
 * @param  {milestone} milestone The new text of the input field
 *
 * @return {object}    An action object with a type of CHANGE_MILESTONE
 */
export function changeMilestone(milestone) {
  return {
    type: CHANGE_MILESTONE,
    milestone,
  };
}
/**
 * Changes the sinceDate input field of the form
 *
 * @param  {date} date The new date of the input field
 *
 * @return {object}    An action object with a type of CHANGE_SINCE_DATE
 */
export function changeSinceDate(date) {
  return {
    type: CHANGE_SINCE_DATE,
    date,
  };
}
/**
 * Changes the sortBy input field of the form
 *
 * @param  {string} sortBy The new value of the input field
 *
 * @return {object}    An action object with a type of CHANGE_SORT_BY
 */
export function changeSortBy(sortBy) {
  return {
    type: CHANGE_SORT_BY,
    sortBy,
  };
}
/**
 * Changes the sortOrder input field of the form
 *
 * @param  {boolean} sortOrder The new value of the input field
 *
 * @return {object}    An action object with a type of CHANGE_SORT_ORDER
 */
export function changeSortOrder(sortOrder) {
  return {
    type: CHANGE_SORT_ORDER,
    sortOrder,
  };
}
/**
 * Changes the state input field of the form
 *
 * @param  {string} state The new value of the input field
 *
 * @return {object}    An action object with a type of CHANGE_STATE
 */
export function changeState(state) {
  return {
    type: CHANGE_STATE,
    state,
  };
}
