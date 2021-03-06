/*
 * HomeConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const CHANGE_USERNAME = 'gh-search/Home/CHANGE_USERNAME';
export const CHANGE_REPONAME = 'gh-search/Home/CHANGE_REPONAME';
export const CHANGE_SINCE_DATE = 'gh-search/Home/CHANGE_SINCE_DATE';
export const CHANGE_SORT_BY = 'gh-search/Home/CHANGE_SORT_BY';
export const CHANGE_SORT_ORDER = 'gh-search/Home/CHANGE_SORT_ORDER';
export const CHANGE_ASSIGNEE = 'gh-search/Home/CHANGE_ASSIGNEE';
export const CHANGE_CREATOR = 'gh-search/Home/CHANGE_CREATOR';
export const CHANGE_MENTIONED = 'gh-search/Home/CHANGE_MENTIONED';
export const CHANGE_LABELS = 'gh-search/Home/CHANGE_LABELS';
export const CHANGE_MILESTONE = 'gh-search/Home/CHANGE_MILESTONE';
export const CHANGE_STATE = 'gh-search/Home/CHANGE_STATE';
export const SORT_OPTIONS = ['created', 'updated', 'comments'];
export const STATE_OPTIONS = ['open', 'closed', 'all'];
