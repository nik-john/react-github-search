import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import messages from './messages';
import TextFilter from '../../components/TextFilterComponent';
import { makeSelectLabels } from './selectors';
import { changeLabels } from './actions';


export class LabelsFilterSection extends React.PureComponent {// eslint-disable-line react/prefer-stateless-function
  componentWillReceiveProps(props) {
    if (props.labels !== this.props.labels) {
      this.setState({
        labels: props.labels,
      });
    }
  }
  render() {
    const { labels, onChangeLabels } = this.props;
    return <TextFilter value={labels} handleChange={onChangeLabels} label={messages.labelsLabel} placeholder="Labels separated by comma" />;
  }
}

LabelsFilterSection.propTypes = {
  labels: PropTypes.string,
  onChangeLabels: PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    onChangeLabels: (evt) => dispatch(changeLabels(evt.target.value)),
  };
}

const mapStateToProps = createStructuredSelector({
  labels: makeSelectLabels(),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(
  withConnect,
)(LabelsFilterSection);
