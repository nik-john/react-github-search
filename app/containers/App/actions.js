/*
 * App Actions
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
  LOAD_REPOS,
  LOAD_REPOS_SUCCESS,
  LOAD_REPOS_ERROR,
  LOAD_REPO,
  LOAD_REPO_SUCCESS,
  LOAD_ISSUES,
  LOAD_ISSUES_SUCCESS,
  LOAD_ISSUES_ERROR,
} from './constants';

/**
 * Load the repositories, this action starts the request saga
 *
 * @return {object} An action object with a type of LOAD_REPOS
 */
export function loadRepos() {
  return {
    type: LOAD_REPOS,
  };
}

/**
 * Dispatched when the repositories are loaded by the request saga
 *
 * @param  {array} repos The repository data
 * @param  {string} username The current username
 *
 * @return {object}      An action object with a type of LOAD_REPOS_SUCCESS passing the repos
 */
export function reposLoaded(repos, username) {
  return {
    type: LOAD_REPOS_SUCCESS,
    repos,
    username,
  };
}

/**
 * Dispatched when loading the repositories fails
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of LOAD_REPOS_ERROR passing the error
 */
export function reposLoadingError(error) {
  return {
    type: LOAD_REPOS_ERROR,
    error,
  };
}

/**
 * Load the repo, this action starts the request saga
 *
 * @return {object} An action object with a type of LOAD_REPO
 */
export function loadRepo() {
  return {
    type: LOAD_REPO,
  };
}

/**
 * Dispatched when the repository is loaded by the request saga
 *
 * @param  {string} reponame The repository data
 * @param  {string} username The current username
 *
 * @return {object} An action object with a type of LOAD_REPO_SUCCESS passing the repo
 */
export function repoLoaded(reponame, username) {
  return {
    type: LOAD_REPO_SUCCESS,
    reponame,
    username,
  };
}
/**
 * Dispatched when loading the repository fails
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of LOAD_REPO_ERROR passing the error
 */
export function repoLoadingError(error) {
  return {
    type: LOAD_REPOS_ERROR,
    error,
  };
}

/**
 * Load the issues, this action starts the request saga
 *
 * @return {object} An action object with a type of LOAD_ISSUES
 */
export function loadIssues() {
  return {
    type: LOAD_ISSUES,
  };
}

/**
 * Dispatched when the issues are loaded by the request saga
 *
 * @param  {array} issues The issues data
 *
 * @return {object}      An action object with a type of LOAD_ISSUES_SUCCESS passing the repos
 */
export function issuesLoaded(issues) {
  return {
    type: LOAD_ISSUES_SUCCESS,
    issues,
  };
}

/**
 * Dispatched when loading the issues fails
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of LOAD_ISSUES_ERROR passing the error
 */
export function issuesLoadingError(error) {
  return {
    type: LOAD_ISSUES_ERROR,
    error,
  };
}
