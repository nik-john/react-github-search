/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';

const selectHome = (state) => state.get('home');

const makeSelectUsername = () => createSelector(
  selectHome,
  (homeState) => homeState.get('username')
);
const makeSelectReponame = () => createSelector(
  selectHome,
  (homeState) => homeState.get('reponame')
);
const makeSelectSinceDate = () => createSelector(
  selectHome,
  (homeState) => homeState.get('sinceDate')
);
const makeSelectSortBy = () => createSelector(
  selectHome,
  (homeState) => homeState.get('sortBy')
);
const makeSelectSortOrder = () => createSelector(
  selectHome,
  (homeState) => homeState.get('sortOrder')
);
const makeSelectState = () => createSelector(
  selectHome,
  (homeState) => homeState.get('state')
);
const makeSelectCreator = () => createSelector(
  selectHome,
  (homeState) => homeState.get('creator')
);
const makeSelectAssignee = () => createSelector(
  selectHome,
  (homeState) => homeState.get('assignee')
);
const makeSelectMentioned = () => createSelector(
  selectHome,
  (homeState) => homeState.get('mentioned')
);
const makeSelectMilestone = () => createSelector(
  selectHome,
  (homeState) => homeState.get('milestone')
);
const makeSelectLabels = () => createSelector(
  selectHome,
  (homeState) => homeState.get('labels')
);

export {
  selectHome,
  makeSelectUsername,
  makeSelectReponame,
  makeSelectSinceDate,
  makeSelectSortBy,
  makeSelectSortOrder,
  makeSelectState,
  makeSelectAssignee,
  makeSelectCreator,
  makeSelectLabels,
  makeSelectMilestone,
  makeSelectMentioned,
};
