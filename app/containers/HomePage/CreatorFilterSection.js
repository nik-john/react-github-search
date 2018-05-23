import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import messages from './messages';
import TextFilter from '../../components/TextFilterComponent';
import { makeSelectCreator } from './selectors';
import { changeCreator } from './actions';

export class CreatorFilterSection extends React.PureComponent {// eslint-disable-line react/prefer-stateless-function
  componentWillReceiveProps(props) {
    if (props.creator !== this.props.creator) {
      this.setState({
        creator: props.creator,
      });
    }
  }
  render() {
    const { creator, onChangeCreator } = this.props;
    return <TextFilter value={creator} handleChange={onChangeCreator} label={messages.creatorLabel} placeholder="Creator username..." />;
  }
}

CreatorFilterSection.propTypes = {
  creator: PropTypes.string,
  onChangeCreator: PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    onChangeCreator: (evt) => dispatch(changeCreator(evt.target.value)),
  };
}

const mapStateToProps = createStructuredSelector({
  creator: makeSelectCreator(),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(
  withConnect,
)(CreatorFilterSection);
