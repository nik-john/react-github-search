import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import messages from './messages';
import TextFilter from '../../components/TextFilterComponent';
import { makeSelectAssignee } from './selectors';
import { changeAssignee } from './actions';


export class AssigneeFilterSection extends React.PureComponent {// eslint-disable-line react/prefer-stateless-function
  componentWillReceiveProps(props) {
    if (props.assignee !== this.props.assignee) {
      this.setState({
        assignee: props.assignee,
      });
    }
  }
  render() {
    const { assignee, onChangeAssignee } = this.props;
    return <TextFilter value={assignee} handleChange={onChangeAssignee} label={messages.assigneeLabel} placeholder="Enter username..." />;
  }
}

AssigneeFilterSection.propTypes = {
  assignee: PropTypes.string,
  onChangeAssignee: PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    onChangeAssignee: (evt) => dispatch(changeAssignee(evt.target.value)),
  };
}

const mapStateToProps = createStructuredSelector({
  assignee: makeSelectAssignee(),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(
  withConnect,
)(AssigneeFilterSection);
