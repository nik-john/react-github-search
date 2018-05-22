import React from 'react';
import PropTypes from 'prop-types';

import List from 'components/List';
import ListItem from 'components/ListItem';
import LoadingIndicator from 'components/LoadingIndicator';
import IssueListItem from 'components/IssueListItem';

function IssuesList({ loading, error, issues }) {
  if (loading) {
    return <List component={LoadingIndicator} />;
  }

  if (error !== false) {
    const ErrorComponent = () => (
      <ListItem item={'Something went wrong, please try again!'} />
    );
    return <List component={ErrorComponent} />;
  }

  if (issues !== false) {
    return <List items={issues} component={IssueListItem} />;
  }

  return null;
}

IssuesList.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.any,
  issues: PropTypes.any,
};

export default IssuesList;
