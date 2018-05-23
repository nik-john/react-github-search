import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import messages from './messages';
import TextFilter from '../../components/TextFilterComponent';
import { makeSelectMilestone } from './selectors';
import { changeMilestone } from './actions';


export class MilestoneFilterSection extends React.PureComponent {// eslint-disable-line react/prefer-stateless-function
  componentWillReceiveProps(props) {
    if (props.milestone !== this.props.milestone) {
      this.setState({
        milestone: props.milestone,
      });
    }
  }
  render() {
    const { milestone, onChangeMilestone } = this.props;
    return <TextFilter value={milestone} handleChange={onChangeMilestone} label={messages.milestoneLabel} placeholder="Milestone..." />;
  }
}

MilestoneFilterSection.propTypes = {
  milestone: PropTypes.string,
  onChangeMilestone: PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    onChangeMilestone: (evt) => dispatch(changeMilestone(evt.target.value)),
  };
}

const mapStateToProps = createStructuredSelector({
  labels: makeSelectMilestone(),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(
  withConnect,
)(MilestoneFilterSection);
