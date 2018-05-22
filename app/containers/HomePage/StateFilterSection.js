import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import StateFilter from '../../components/StateFilter';
import { makeSelectState } from './selectors';
import { changeState } from './actions';
import { STATE_OPTIONS } from './constants';
export class StateFilterSection extends React.PureComponent {// eslint-disable-line react/prefer-stateless-function
  componentWillReceiveProps(props) {
    if (props.state !== this.props.state) {
      this.setState({
        state: props.state,
      });
    }
  }
  render() {
    const { state, onChangeState } = this.props;
    return <StateFilter state={state || STATE_OPTIONS[0]} handleChange={onChangeState} />;
  }
}

StateFilterSection.propTypes = {
  state: PropTypes.oneOfType([PropTypes.oneOf(STATE_OPTIONS), PropTypes.bool]),
  onChangeState: PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    onChangeState: (filter) => dispatch(changeState(filter ? filter.value : STATE_OPTIONS[0])),
  };
}

const mapStateToProps = createStructuredSelector({
  state: makeSelectState(),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(
  withConnect,
)(StateFilterSection);
