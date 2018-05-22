import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import SortFilter from '../../components/SortFilter';
import { makeSelectSortBy, makeSelectSortOrder } from './selectors';
import { changeSortBy, changeSortOrder } from './actions';
import { SORT_OPTIONS } from './constants';
export class SortFilterSection extends React.PureComponent {// eslint-disable-line react/prefer-stateless-function
  componentWillReceiveProps(props) {
    if (props.sortBy !== this.props.sortBy) {
      this.setState({
        sortBy: props.sortBy,
      });
    }
    if (props.sortOrder !== this.props.sortOrder) {
      this.setState({
        sortOrder: props.sortOrder,
      });
    }
  }
  render() {
    const { sortBy, onChangeSortBy, onChangeSortOrder } = this.props;
    const sortOrder = typeof this.props.sortOrder !== 'boolean' ? true : this.props.sortOrder;
    return <SortFilter sortBy={sortBy || SORT_OPTIONS[0]} handleChange={onChangeSortBy} sortOrder={sortOrder} handleToggleSortOrder={onChangeSortOrder} />;
  }
}

SortFilterSection.propTypes = {
  sortBy: PropTypes.oneOfType([PropTypes.oneOf(SORT_OPTIONS), PropTypes.bool]),
  onChangeSortBy: PropTypes.func,
  sortOrder: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  onChangeSortOrder: PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    onChangeSortBy: (filter) => dispatch(changeSortBy(filter ? filter.value : SORT_OPTIONS[0])),
    onChangeSortOrder: (order) => dispatch(changeSortOrder(!order)),
  };
}

const mapStateToProps = createStructuredSelector({
  sortBy: makeSelectSortBy(),
  sortOrder: makeSelectSortOrder(),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(
  withConnect,
)(SortFilterSection);
