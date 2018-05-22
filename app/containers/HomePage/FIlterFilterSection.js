import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import FilterFilter from '../../components/FilterFilter';
import { makeSelectFilter } from './selectors';
import { changeFilter } from './actions';
import { FILTER_OPTIONS } from './constants';
export class FilterFilterSection extends React.PureComponent {// eslint-disable-line react/prefer-stateless-function
  componentWillReceiveProps(props) {
    if (props.filter !== this.props.filter) {
      this.setState({
        filter: props.filter,
      });
    }
  }
  render() {
    const { filter, onChangeFilter } = this.props;
    return <FilterFilter filter={filter || FILTER_OPTIONS[0]} handleChange={onChangeFilter} />;
  }
}

FilterFilterSection.propTypes = {
  filter: PropTypes.oneOfType([PropTypes.oneOf(FILTER_OPTIONS), PropTypes.bool]),
  onChangeFilter: PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    onChangeFilter: (filter) => dispatch(changeFilter(filter ? filter.value : FILTER_OPTIONS[0])),
  };
}

const mapStateToProps = createStructuredSelector({
  filter: makeSelectFilter(),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(
  withConnect,
)(FilterFilterSection);
