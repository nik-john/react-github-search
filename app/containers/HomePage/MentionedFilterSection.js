import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import messages from './messages';
import TextFilter from '../../components/TextFilterComponent';
import { makeSelectMentioned } from './selectors';
import { changeMentioned } from './actions';

export class MentionedFilterSection extends React.PureComponent {// eslint-disable-line react/prefer-stateless-function
  componentWillReceiveProps(props) {
    if (props.mentioned !== this.props.mentioned) {
      this.setState({
        mentioned: props.mentioned,
      });
    }
  }
  render() {
    const { mentioned, onChangeMentioned } = this.props;
    return <TextFilter value={mentioned} handleChange={onChangeMentioned} label={messages.mentionedLabel} placeholder="Mentioned username..." />;
  }
}

MentionedFilterSection.propTypes = {
  mentioned: PropTypes.string,
  onChangeMentioned: PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    onChangeMentioned: (evt) => dispatch(changeMentioned(evt.target.value)),
  };
}

const mapStateToProps = createStructuredSelector({
  mentioned: makeSelectMentioned(),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(
  withConnect,
)(MentionedFilterSection);
