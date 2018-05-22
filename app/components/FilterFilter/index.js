import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

import Wrapper from './Wrapper';
import messages from './messages';
import { FILTER_OPTIONS } from '../../containers/HomePage/constants';
function createOption(option) {
  return { value: option, label: option };
}
function FilterFilter(props) {
  const optionsObjectArray = FILTER_OPTIONS.map(createOption);
  return (
    <Wrapper>
      <FormattedMessage {...messages.label} />
      <Select
        options={optionsObjectArray}
        value={props.filter}
        onChange={props.handleChange}
      />
    </Wrapper>
  );
}

FilterFilter.propTypes = {
  filter: PropTypes.oneOf(FILTER_OPTIONS),
  handleChange: PropTypes.func,
};

FilterFilter.defaultprops = {
  sortBy: FILTER_OPTIONS[0],
};

export default FilterFilter;
