import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

import Wrapper from './Wrapper';
import { SORT_OPTIONS, STATE_OPTIONS } from '../../containers/HomePage/constants';
function createOption(option) {
  return { value: option, label: option };
}
function SelectFilterComponent(props) {
  const optionsObjectArray = props.options.map(createOption);
  return (
    <Wrapper>
      <FormattedMessage {...props.label} className="label" />
      <Select
        options={optionsObjectArray}
        value={props.value}
        onChange={props.handleChange}
      />
    </Wrapper>
  );
}

SelectFilterComponent.propTypes = {
  options: PropTypes.oneOf([SORT_OPTIONS, STATE_OPTIONS]),
  value: PropTypes.string,
  handleChange: PropTypes.func,
  label: PropTypes.any,
};

export default SelectFilterComponent;
