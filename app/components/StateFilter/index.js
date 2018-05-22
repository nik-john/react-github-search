import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

import Wrapper from './Wrapper';
import messages from './messages';
import { STATE_OPTIONS } from '../../containers/HomePage/constants';
function createOption(option) {
  return { value: option, label: option };
}
function StateFilter(props) {
  const optionsObjectArray = STATE_OPTIONS.map(createOption);
  return (
    <Wrapper>
      <FormattedMessage {...messages.label} />
      <Select
        options={optionsObjectArray}
        value={props.state}
        onChange={props.handleChange}
      />
    </Wrapper>
  );
}

StateFilter.propTypes = {
  state: PropTypes.oneOf(STATE_OPTIONS),
  handleChange: PropTypes.func,
};

StateFilter.defaultprops = {
  sortBy: STATE_OPTIONS[0],
};

export default StateFilter;
