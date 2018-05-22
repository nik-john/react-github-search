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
const makeSelectFilter = () => createSelector(
  selectHome,
  (homeState) => homeState.get('filter')
);

export {
  selectHome,
  makeSelectUsername,
  makeSelectReponame,
  makeSelectSinceDate,
  makeSelectSortBy,
  makeSelectSortOrder,
  makeSelectState,
  makeSelectFilter,
};
