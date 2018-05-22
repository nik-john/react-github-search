import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import moment from 'moment';

import DateFilter from '../../components/DateFilter';
import { makeSelectSinceDate } from './selectors';
import { changeSinceDate } from './actions';

export class DateFilterSection extends React.PureComponent {// eslint-disable-line react/prefer-stateless-function
  componentWillReceiveProps(props) {
    if (props.since) {
      this.setState({
        since: moment(props.since),
      });
    }
  }
  render() {
    const { since, onChangeSinceDate } = this.props;
    return <DateFilter since={since || ''} handleChange={onChangeSinceDate} />;
  }
}

DateFilterSection.propTypes = {
  since: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  onChangeSinceDate: PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    onChangeSinceDate: (date) => dispatch(changeSinceDate(moment(date).format('YYYY-MM-DDTHH:MM:SSZ'))),
  };
}

const mapStateToProps = createStructuredSelector({
  since: makeSelectSinceDate(),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(
  withConnect,
)(DateFilterSection);
