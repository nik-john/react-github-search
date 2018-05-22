/**
 * Gets the repositories of the user from Github
 */

import { call, put, select, takeLatest } from 'redux-saga/effects';
// import { LOAD_REPOS } from 'containers/App/constants';
import { reposLoaded, reposLoadingError, issuesLoaded, issuesLoadingError } from 'containers/App/actions';

import request from 'utils/request';
import { makeSelectState, makeSelectFilter, makeSelectUsername, makeSelectReponame, makeSelectSinceDate, makeSelectSortBy, makeSelectSortOrder } from 'containers/HomePage/selectors';

import { LOAD_ISSUES } from '../App/constants';
import { CHANGE_SINCE_DATE, CHANGE_SORT_BY, CHANGE_SORT_ORDER } from './constants';

/**
 * Github repos request/response handler
 */
export function* getRepos() {
  // Select username from store
  const username = yield select(makeSelectUsername());
  const requestURL = `https://api.github.com/users/${username}/repos?type=all&sort=updated`;

  try {
    // Call our request helper (see 'utils/request')
    const repos = yield call(request, requestURL);
    yield put(reposLoaded(repos, username));
  } catch (err) {
    yield put(reposLoadingError(err));
  }
}
/**
 * Github issues request/response handler
 */
export function* getIssues() {
  // Select username from store
  const username = yield select(makeSelectUsername());
  const reponame = yield select(makeSelectReponame());
  const sinceDate = yield select(makeSelectSinceDate());
  const sinceDateParam = sinceDate ? `&since=${sinceDate}` : '';
  const sort = yield select(makeSelectSortBy());
  const sortOrder = yield select(makeSelectSortOrder());
  const sortParams = sort ? `&sort=${sort}&direction=${sortOrder ? 'asc' : 'desc'}` : '';
  const state = yield select(makeSelectState());
  const stateParam = state ? `&state=${state}` : '';
  const filter = yield select(makeSelectFilter());
  const filterParam = state ? `&filter=${filter}` : '';
  const requestURL = `https://api.github.com/repos/${username}/${reponame}/issues?${stateParam}${filterParam}${sinceDateParam}${sortParams}`;

  try {
    // Call our request helper (see 'utils/request')
    const issues = yield call(request, requestURL);
    yield put(issuesLoaded(issues));
  } catch (err) {
    yield put(issuesLoadingError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* githubData() {
  // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  // yield takeLatest(LOAD_REPOS, getRepos);
  yield takeLatest(LOAD_ISSUES, getIssues);
  yield takeLatest(CHANGE_SINCE_DATE, getIssues);
  yield takeLatest(CHANGE_SORT_BY, getIssues);
  yield takeLatest(CHANGE_SORT_ORDER, getIssues);
}
