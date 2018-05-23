/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  showIssuesFor: {
    id: 'gh-search.containers.HomePage.show.message',
    defaultMessage: 'Showing Issues for',
  },
  atPrefix: {
    id: 'gh-search.containers.HomePage.show.atPrefix',
    defaultMessage: '@',
  },
  stateLabel: {
    id: 'gh-search.components.state.label',
    defaultMessage: 'State',
  },
  sortLabel: {
    id: 'gh-search.components.sort.label',
    defaultMessage: 'Sort by',
  },
  sinceLabel: {
    id: 'gh-search.components.since.label',
    defaultMessage: 'Since',
  },
  assigneeLabel: {
    id: 'gh-search.components.assignee.label',
    defaultMessage: 'Assignee',
  },
  creatorLabel: {
    id: 'gh-search.components.creator.label',
    defaultMessage: 'Creator',
  },
  mentionedLabel: {
    id: 'gh-search.components.mentioned.label',
    defaultMessage: 'Mentioned',
  },
  labelsLabel: {
    id: 'gh-search.components.labels.label',
    defaultMessage: 'Labels',
  },
  milestoneLabel: {
    id: 'gh-search.components.milestone.label',
    defaultMessage: 'Milestone',
  },
});
