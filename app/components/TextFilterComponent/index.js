import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import Wrapper from './Wrapper';

function TextFilterComponent(props) {
  const onChange = (evt) => props.handleChange(evt);
  return (
    <Wrapper>
      <FormattedMessage {...props.label} className="label" />
      <input
        value={props.value}
        onChange={onChange}
        placeholder={props.placeholder}
      />
    </Wrapper>
  );
}

TextFilterComponent.propTypes = {
  value: PropTypes.string,
  placeholder: PropTypes.string,
  handleChange: PropTypes.func,
  label: PropTypes.any,
};

export default TextFilterComponent;
